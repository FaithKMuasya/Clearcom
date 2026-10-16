import type { Metadata } from "next";
import type { ReactNode } from "react";
import { COMPANY_INFO } from "../src/data/clearcomData";
import "../src/index.css";

const description = `${COMPANY_INFO.tagline} Managed IT services, business phone systems, cybersecurity, cloud, and networking for Kenyan businesses.`;

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_INFO.website),
  title: `${COMPANY_INFO.shortName} | Managed IT & Business Phone Systems`,
  description,
  applicationName: COMPANY_INFO.name,
  authors: [{ name: COMPANY_INFO.name }],
  alternates: { canonical: "/" },
  icons: { icon: "/logo-mark.png" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "/",
    siteName: COMPANY_INFO.name,
    title: `${COMPANY_INFO.name} | Managed IT Services Kenya`,
    description,
    images: [{ url: "/logo.png", alt: COMPANY_INFO.name }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@clearcomltd",
    title: `${COMPANY_INFO.name} | Managed IT Services Kenya`,
    description,
    images: ["/logo.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${COMPANY_INFO.website}/#organization`,
  name: COMPANY_INFO.name,
  url: COMPANY_INFO.website,
  logo: `${COMPANY_INFO.website}/logo.png`,
  description,
  telephone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY_INFO.address,
    addressLocality: COMPANY_INFO.city,
    addressCountry: "KE",
  },
  sameAs: Object.values(COMPANY_INFO.socialLinks),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
