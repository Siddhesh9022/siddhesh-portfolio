import nodemailer from 'nodemailer';

export interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  _gotcha?: string;
}

export interface ContactResult {
  status: number;
  body: Record<string, unknown>;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USERNAME;
  const pass = process.env.SMTP_PASSWORD?.replace(/\s/g, '');
  const port = Number(process.env.SMTP_PORT || 587);

  if (!host || !user || !pass) {
    throw new Error('SMTP is not configured');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function processContactSubmission(
  payload: ContactPayload
): Promise<ContactResult> {
  if (payload._gotcha) {
    return { status: 200, body: { ok: true } };
  }

  const name = payload.name?.trim() ?? '';
  const email = payload.email?.trim() ?? '';
  const subject = payload.subject?.trim() ?? '';
  const message = payload.message?.trim() ?? '';

  if (!name || !email || !subject || !message) {
    return { status: 400, body: { error: 'All fields are required' } };
  }

  if (!isValidEmail(email)) {
    return { status: 400, body: { error: 'Invalid email address' } };
  }

  if (message.length < 10) {
    return { status: 400, body: { error: 'Message must be at least 10 characters' } };
  }

  const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USERNAME;
  const toEmail = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USERNAME;

  if (!fromEmail || !toEmail) {
    return { status: 500, body: { error: 'Email delivery is not configured' } };
  }

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: `"Portfolio Contact" <${fromEmail}>`,
      to: toEmail,
      replyTo: `"${name}" <${email}>`,
      subject: `[Portfolio] ${subject}`,
      text: [`Name: ${name}`, `Email: ${email}`, '', message].join('\n'),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    });

    return { status: 200, body: { ok: true, message: 'Message sent successfully' } };
  } catch (err) {
    console.error('Contact form error:', err);
    const message =
      err instanceof Error && err.message === 'SMTP is not configured'
        ? 'Server email is not configured. Add SMTP environment variables in Vercel.'
        : 'Failed to send message. Please try again or email directly.';
    return { status: 500, body: { error: message } };
  }
}
