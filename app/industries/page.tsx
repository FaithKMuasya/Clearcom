import type { Metadata } from "next";
import App from "../../src/App";
import { COMPANY_INFO } from "../../src/data/clearcomData";

const title = `Industries | ${COMPANY_INFO.shortName}`;
const description = "Explore Clearcom's IT solutions for Kenyan businesses across education, healthcare, professional services, logistics, and more.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/industries" },
  openGraph: { title, description, url: "/industries" },
  twitter: { title, description },
};

export default function IndustriesPage() {
  return <App industriesPage />;
}
