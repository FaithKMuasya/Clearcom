import type { Metadata } from "next";
import App from "../../src/App";
import { COMPANY_INFO } from "../../src/data/clearcomData";

const title = `Frequently Asked Questions | ${COMPANY_INFO.shortName}`;
const description = "Find answers about Clearcom’s IT services, phone systems, and support.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  openGraph: { title, description, url: "/faq" },
  twitter: { title, description },
};

export default function FaqPage() {
  return <App faqPage />;
}
