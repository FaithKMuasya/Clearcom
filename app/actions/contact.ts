"use server";

import nodemailer from "nodemailer";

export type ContactActionResult =
  | { ok: true; ticket: string }
  | { ok: false; error: string };

export interface ContactInquiryInput {
  name: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website?: string;
}

export interface ConsultationInput {
  name: string;
  email: string;
  phone: string;
  service: string;
  datePref: string;
  website?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+0-9\s()-]{8,30}$/;

function clean(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function getMailConfig() {
  const host = clean(process.env.SMTP_HOST, 255);
  const port = Number(process.env.SMTP_PORT);
  const user = clean(process.env.SMTP_USER, 254);
  const pass = process.env.SMTP_PASS ?? "";
  const to = clean(process.env.MAIL_TO, 254) || user;
  const from = clean(process.env.MAIL_FROM, 254) || user;

  if (!host || !Number.isInteger(port) || port < 1 || port > 65535 || !user || !pass || !to || !from) {
    throw new Error("SMTP environment variables are incomplete.");
  }

  return { host, port, user, pass, to, from };
}

async function deliverMessage({
  type,
  ticket,
  name,
  company,
  email,
  phone,
  service,
  message,
  datePref,
}: {
  type: "contact" | "consultation";
  ticket: string;
  name: string;
  company?: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  datePref?: string;
}) {
  const config = getMailConfig();
  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: { user: config.user, pass: config.pass },
    connectionTimeout: 15_000,
    greetingTimeout: 10_000,
  });

  const subject =
    type === "consultation"
      ? `Free IT Audit Booking [${ticket}] — ${name}`
      : `Website Inquiry: ${service} [${ticket}] — ${name}`;

  const lines = [
    `Type: ${type === "consultation" ? "Consultation / Audit booking" : "Contact form inquiry"}`,
    `Ticket: ${ticket}`,
    "",
    `Name: ${name}`,
    `Company: ${company || "Not specified"}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service: ${service || "Not specified"}`,
  ];

  if (type === "consultation") {
    lines.push(`Preferred timeframe: ${datePref || "Not specified"}`);
  }

  lines.push(
    "",
    "Message:",
    message || "(no message provided)",
    "",
    `Submitted: ${new Date().toISOString()}`,
  );

  await transporter.sendMail({
    from: { name: "Clearcom Website", address: config.from },
    to: config.to,
    replyTo: { name: name.replace(/["\r\n]/g, ""), address: email },
    subject,
    text: lines.join("\n"),
  });
}

export async function submitContactInquiry(
  input: ContactInquiryInput,
): Promise<ContactActionResult> {
  const honeypot = clean(input.website, 500);
  if (honeypot) {
    return { ok: true, ticket: "received" };
  }

  const name = clean(input.name, 200);
  const company = clean(input.company, 200);
  const email = clean(input.email, 254);
  const phone = clean(input.phone, 40);
  const service = clean(input.service, 200) || "Not specified";
  const message = clean(input.message, 4_000);

  if (!name || !emailPattern.test(email) || !phonePattern.test(phone) || !message) {
    return { ok: false, error: "Please complete all required fields with valid contact details." };
  }

  const ticket = `CLR-${new Date().getFullYear()}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;

  try {
    await deliverMessage({ type: "contact", ticket, name, company, email, phone, service, message });
    return { ok: true, ticket };
  } catch (error) {
    console.error("[contact action] Email delivery failed:", error);
    return { ok: false, error: "Unable to deliver your message right now. Please try again shortly." };
  }
}

export async function submitConsultationRequest(
  input: ConsultationInput,
): Promise<ContactActionResult> {
  const honeypot = clean(input.website, 500);
  if (honeypot) {
    return { ok: true, ticket: "received" };
  }

  const name = clean(input.name, 200);
  const email = clean(input.email, 254);
  const phone = clean(input.phone, 40);
  const service = clean(input.service, 200) || "Not specified";
  const datePref = clean(input.datePref, 100);

  if (!name || !emailPattern.test(email) || !phonePattern.test(phone)) {
    return { ok: false, error: "Please enter a valid name, email address, and phone number." };
  }

  const ticket = `CLR-AUDIT-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;

  try {
    await deliverMessage({ type: "consultation", ticket, name, email, phone, service, datePref });
    return { ok: true, ticket };
  } catch (error) {
    console.error("[consultation action] Email delivery failed:", error);
    return { ok: false, error: "Unable to send your booking right now. Please try again shortly." };
  }
}
