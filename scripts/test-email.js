/**
 * Verify SMTP credentials and send a test email.
 * Usage: npm run mail:test
 */
import 'dotenv/config';
import nodemailer from 'nodemailer';

const requiredKeys = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];
const missingKeys = requiredKeys.filter((key) => !process.env[key]);

if (missingKeys.length) {
  console.error(`Missing required environment variables: ${missingKeys.join(', ')}`);
  process.exit(1);
}

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const MAIL_TO = process.env.MAIL_TO || SMTP_USER;
const MAIL_FROM = process.env.MAIL_FROM || SMTP_USER;

if (!Number.isInteger(SMTP_PORT) || SMTP_PORT < 1 || SMTP_PORT > 65535) {
  console.error('SMTP_PORT must be a valid TCP port.');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
  connectionTimeout: 15000,
  greetingTimeout: 10000,
});

console.log(`Connecting to ${SMTP_HOST}:${SMTP_PORT} as ${SMTP_USER} ...`);

try {
  await transporter.verify();
  console.log('SMTP connection + authentication: OK');

  const info = await transporter.sendMail({
    from: `"Clearcom Website" <${MAIL_FROM}>`,
    to: MAIL_TO,
    subject: 'Clearcom website SMTP test',
    text: `This is a test email sent by the Clearcom website server at ${new Date().toISOString()}. If you are reading it, outbound SMTP is fully functional.`,
  });
  console.log(`Test email sent to ${MAIL_TO} — messageId: ${info.messageId}`);
  console.log('Outbound email is functional.');
} catch (err) {
  console.error(`FAILED: ${err.code || ''} ${err.message}`);
  if (/auth|credential|535|invalid/i.test(String(err.message)) || err.code === 'EAUTH') {
    console.error('Hint: verify SMTP_USER and SMTP_PASS in .env.');
  }
  process.exit(1);
}
