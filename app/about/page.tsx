import type { Metadata } from "next";
import App from "../../src/App";
import { COMPANY_INFO } from "../../src/data/clearcomData";

const title = `About Us | ${COMPANY_INFO.shortName}`;
const description = "Learn about Clearcom Enterprises, your Nairobi-based partner for managed IT support, business telephony, and technology services across Kenya.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about" },
  twitter: { title, description },
};

export default function AboutPage() {
  return <App aboutPage />;
}
