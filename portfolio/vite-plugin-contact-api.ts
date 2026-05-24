import type { IncomingMessage, ServerResponse } from 'node:http';
import type { Plugin } from 'vite';
import { processContactSubmission } from '../lib/contactEmail';

function readJsonBody(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolvePromise, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      try {
        resolvePromise(data ? JSON.parse(data) : {});
      } catch {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res: ServerResponse, status: number, body: Record<string, unknown>) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(body));
}

/**
 * Serves POST /api/contact on the same port as Vite (local dev only).
 * Production uses api/contact.ts on Vercel — same lib/contactEmail logic.
 */
export function contactApiPlugin(): Plugin {
  return {
    name: 'contact-api-dev',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const path = req.url?.split('?')[0];

        if (path !== '/api/contact') {
          return next();
        }

        if (req.method === 'OPTIONS') {
          res.statusCode = 204;
          res.setHeader('Allow', 'POST, OPTIONS');
          res.end();
          return;
        }

        if (req.method !== 'POST') {
          sendJson(res, 405, { error: 'Method not allowed' });
          return;
        }

        try {
          const body = await readJsonBody(req);
          const result = await processContactSubmission(
            body as {
              name?: string;
              email?: string;
              subject?: string;
              message?: string;
              _gotcha?: string;
            }
          );
          sendJson(res, result.status, result.body);
        } catch (err) {
          console.error('[contact-api-dev]', err);
          sendJson(res, 500, { error: 'Failed to process contact form' });
        }
      });
    },
  };
}
