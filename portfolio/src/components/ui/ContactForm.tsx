/**
 * ContactForm - Portfolio contact form (sends via /api/contact on Vercel)
 */
import React, { useState } from 'react';
import { PrimaryButton } from './PrimaryButton';
import { contactData } from '../../data/portfolioData';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const CONTACT_API =
  import.meta.env.VITE_CONTACT_API_URL?.trim() || '/api/contact';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const gotcha =
      (e.currentTarget.querySelector('input[name="_gotcha"]') as HTMLInputElement)?.value ?? '';

    try {
      const response = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, _gotcha: gotcha }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
      };

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage(
        'Could not reach the server. Use email directly or try again after redeploying with SMTP env vars.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (fieldName: keyof FormErrors) => `
    w-full px-4 py-3 rounded-lg border-2 transition-all duration-200
    bg-[var(--color-surface)] text-[var(--color-text)]
    ${
      errors[fieldName]
        ? 'border-red-500 focus:border-red-500'
        : 'border-[var(--color-border)] focus:border-[var(--color-primary)]'
    }
    focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-20
    placeholder:text-[var(--color-text-muted)]
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg">
      {/* Honeypot — hidden from users, blocks bots */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      {submitStatus === 'success' && (
        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600">
          Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600">
          {errorMessage}{' '}
          <a href={`mailto:${contactData.email}`} className="underline font-medium">
            Email me directly
          </a>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={inputClasses('name')}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className={inputClasses('email')}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-text)] mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What is this about?"
          className={inputClasses('subject')}
        />
        {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project, opportunity, or just say hi!"
          rows={5}
          className={`${inputClasses('message')} resize-none`}
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      <PrimaryButton type="submit" className="w-full min-h-[44px]" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </PrimaryButton>

      <p className="text-sm text-[var(--color-text-muted)] text-center">
        Or email me directly at{' '}
        <a
          href={`mailto:${contactData.email}`}
          className="text-[var(--color-primary)] hover:underline"
        >
          {contactData.email}
        </a>
      </p>
    </form>
  );
};
