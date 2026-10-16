/**
 * Clearcom website API + production static server.
 *
 * Dev:   npm run dev:api          (Vite proxies /api -> http://localhost:3001)
 * Prod:  npm start                (serves dist/ + /api on PORT)
 * Test:  npm run mail:test        (verifies SMTP credentials and sends a test email)
 *
 * SMTP settings come from .env (dotenv). Never expose these to the browser.
 */
import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Only trust a positive integer PORT from the environment (some hosts export PORT=0);
// fall back to 3001, which is what the Vite dev proxy targets.
const envPort = Number(process.env.PORT);
const PORT = Number.isInteger(envPort) && envPort > 0 ? envPort : 3001;
const SMTP_HOST = process.env.SMTP_HOST || 'mail.clearcom.co.ke';
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_USER = process.env.SMTP_USER || 'info@clearcom.co.ke';
const SMTP_PASS = process.env.SMTP_PASS || '';
const MAIL_TO = process.env.MAIL_TO || SMTP_USER;
const MAIL_FROM = process.env.MAIL_FROM || SMTP_USER;

const smtpConfigured = Boolean(SMTP_PASS) && !SMTP_PASS.includes('REPLACE');

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465, // implicit TLS on 465, STARTTLS otherwise
  auth: { user: SMTP_USER, pass: SMTP_PASS },
  connectionTimeout: 15000,
  greetingTimeout: 10000,
});

const app = express();
app.use(express.json({ limit: '100kb' }));

// Basic in-memory rate limit: 5 submissions / minute / IP
const rateBuckets = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const windowStart = now - 60_000;
  const hits = (rateBuckets.get(ip) || []).filter((t) => t > windowStart);
  if (hits.length >= 5) {
    rateBuckets.set(ip, hits);
    return true;
  }
  hits.push(now);
  rateBuckets.set(ip, hits);
  return false;
}

function isValidEmail(value) {
  return typeof value === 'string' && value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clean(value, max = 2000) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    smtp: {
      host: SMTP_HOST,
      port: SMTP_PORT,
      user: SMTP_USER,
      configured: smtpConfigured,
    },
  });
});

app.post('/api/contact', async (req, res) => {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ ok: false, error: 'Too many requests. Please try again in a minute.' });
  }

  const body = req.body || {};
  const type = body.type === 'consultation' ? 'consultation' : 'contact';
  const name = clean(body.name, 200);
  const company = clean(body.company, 200);
  const email = clean(body.email, 254);
  const phone = clean(body.phone, 40);
  const service = clean(body.service, 200) || 'Not specified';
  const message = clean(body.message, 4000);
  const datePref = clean(body.datePref, 100);
  const ticket = clean(body.ticket, 40);
  const honeypot = clean(body.website, 500);

  // Bot filled the hidden field: pretend success, send nothing.
  if (honeypot) {
    return res.json({ ok: true });
  }

  if (!name || !isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: 'Name and a valid email address are required.' });
  }
  if (type === 'contact' && !message) {
    return res.status(400).json({ ok: false, error: 'Please describe your requirements.' });
  }
  if (type === 'consultation' && !phone) {
    return res.status(400).json({ ok: false, error: 'A phone number is required so an engineer can call you back.' });
  }

  const subject =
    type === 'consultation'
      ? `Free IT Audit Booking${ticket ? ` [${ticket}]` : ''} — ${name}`
      : `Website Inquiry: ${service}${ticket ? ` [${ticket}]` : ''} — ${name}`;

  const lines = [
    `Type: ${type === 'consultation' ? 'Consultation / Audit booking' : 'Contact form inquiry'}`,
    `Ticket: ${ticket || 'n/a'}`,
    '',
    `Name: ${name}`,
    `Company: ${company || 'Not specified'}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Service: ${service}`,
  ];
  if (type === 'consultation') lines.push(`Preferred timeframe: ${datePref || 'Not specified'}`);
  lines.push('', 'Message:', message || '(no message provided)', '', `Submitted: ${new Date().toISOString()}`, `Source IP: ${ip}`);

  try {
    const info = await transporter.sendMail({
      from: `"Clearcom Website" <${MAIL_FROM}>`,
      to: MAIL_TO,
      replyTo: `"${name.replace(/["\r\n]/g, '')}" <${email}>`,
      subject,
      text: lines.join('\n'),
    });
    console.log(`[mail] ${type} ok -> ${info.messageId}`);
    return res.json({ ok: true });
  } catch (err) {
    console.error(`[mail] ${type} FAILED:`, err.code || '', err.message);
    const authFailure = /auth|credential/i.test(String(err.message)) || err.code === 'EAUTH';
    return res.status(502).json({
      ok: false,
      error: authFailure
        ? 'Mail server authentication failed — set SMTP_PASS in .env.'
        : 'Unable to deliver the message to the mail server.',
    });
  }
});

// Malformed JSON body -> 400 instead of Express default HTML error
app.use((err, _req, res, next) => {
  if (err && err.type === 'entity.parse.failed') {
    return res.status(400).json({ ok: false, error: 'Invalid JSON body.' });
  }
  return next(err);
});

// Production: serve the built SPA (API routes above take precedence)
const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
      return res.status(404).json({ ok: false, error: 'Not found.' });
    }
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`[server] API listening on http://localhost:${PORT}`);
  console.log(`[server] SMTP ${SMTP_HOST}:${SMTP_PORT} as ${SMTP_USER} — credentials ${smtpConfigured ? 'configured' : 'NOT configured (set SMTP_PASS in .env)'}`);
});
