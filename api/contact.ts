import type { VercelRequest, VercelResponse } from '@vercel/node';
import { processContactSubmission, type ContactPayload } from '../lib/contactEmail';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const result = await processContactSubmission((req.body ?? {}) as ContactPayload);
  return res.status(result.status).json(result.body);
}
