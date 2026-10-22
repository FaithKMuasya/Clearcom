import type { Metadata } from "next";
import App from "../../src/App";
import { COMPANY_INFO } from "../../src/data/clearcomData";

const title = `IT Services | ${COMPANY_INFO.shortName}`;
const description = "Explore Clearcom's managed IT support, Microsoft 365, cybersecurity, cloud solutions, communication and collaboration, and IT equipment integration services.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services" },
  twitter: { title, description },
};

export default function ServicesPage() {
  return <App servicesPage />;
}
