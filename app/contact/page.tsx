import type { Metadata } from "next";
import App from "../../src/App";
import { COMPANY_INFO } from "../../src/data/clearcomData";

const title = `Contact Us | ${COMPANY_INFO.shortName}`;
const description = "Contact Clearcom for IT support, telephony services, and a free consultation for your business in Kenya.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
  twitter: { title, description },
};

export default function ContactPage() {
  return <App contactPage />;
}
