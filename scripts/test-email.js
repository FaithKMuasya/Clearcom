/**
 * Verify SMTP credentials and send a test email.
 * Usage: npm run mail:test
 */
import 'dotenv/config';
import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST || 'mail.clearcom.co.ke';
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_USER = process.env.SMTP_USER || 'info@clearcom.co.ke';
const SMTP_PASS = process.env.SMTP_PASS || '';
const MAIL_TO = process.env.MAIL_TO || SMTP_USER;
const MAIL_FROM = process.env.MAIL_FROM || SMTP_USER;

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
    console.error('Hint: set the real mailbox password for info@clearcom.co.ke as SMTP_PASS in .env');
  }
  process.exit(1);
}
