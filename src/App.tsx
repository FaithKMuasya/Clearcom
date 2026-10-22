"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "./components/Navbar.tsx";
import { HeroSection } from "./components/HeroSection.tsx";
import { ServicesSection } from "./components/ServicesSection.tsx";
import { IndustrySolutions } from "./components/IndustrySolutions.tsx";
import { PartnersCarousel } from "./components/PartnersCarousel.tsx";
import { TestimonialsSection } from "./components/TestimonialsSection.tsx";
import { FaqSection } from "./components/FaqSection.tsx";
import { CtaBanner } from "./components/CtaBanner.tsx";
import { ContactSection } from "./components/ContactSection.tsx";
import { AboutSection } from "./components/AboutSection.tsx";
import { Footer } from "./components/Footer.tsx";
import { FloatingActions } from "./components/FloatingActions.tsx";
import { CookieBanner } from "./components/CookieBanner.tsx";
import { ServiceDetailModal } from "./components/ServiceDetailModal.tsx";
import { LegalModal } from "./components/LegalModals.tsx";
import { SERVICES_LIST, ServiceDetail, FAQS } from "./data/clearcomData.ts";

export function App({ servicesPage = false, contactPage = false, aboutPage = false, industriesPage = false, faqPage = false }: { servicesPage?: boolean; contactPage?: boolean; aboutPage?: boolean; industriesPage?: boolean; faqPage?: boolean }) {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>(faqPage ? "faq" : industriesPage ? "industries" : aboutPage ? "about" : contactPage ? "contact" : servicesPage ? "services" : "home");
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(
    null,
  );
  const [preselectedServiceTitle, setPreselectedServiceTitle] =
    useState<string>("Managed IT Support");
  const [legalModalType, setLegalModalType] = useState<
    "privacy" | "terms" | null
  >(null);

  // FAQ structured data generated from the same FAQS data the page renders,
  // so the JSON-LD always matches the visible content (Google FAQ rich results requirement)
  useEffect(() => {
    if (!faqPage) return;
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-page-jsonld";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [faqPage]);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string, serviceSlug?: string) => {
    setActiveSection(sectionId);

    if (serviceSlug) {
      const match = SERVICES_LIST.find(
        (s) => s.id === serviceSlug || s.slug === serviceSlug,
      );
      if (match) {
        setSelectedService(match);
        return;
      }
    }

    if (sectionId === "home") {
      if (servicesPage || contactPage || aboutPage || industriesPage || faqPage) {
        router.push("/");
        return;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (sectionId === "faq") {
      router.push("/faq");
      return;
    }

    if (sectionId === "industries") {
      router.push("/industries");
      return;
    }

    if (sectionId === "about") {
      router.push("/about");
      return;
    }

    if (sectionId === "contact") {
      router.push("/contact");
      return;
    }

    if (sectionId === "services") {
      router.push("/services");
      return;
    }

    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (servicesPage || contactPage || aboutPage || industriesPage || faqPage) {
      router.push(`/#${sectionId}`);
    }
  };

  // When user clicks "Request Quote" on a service
  const handleRequestQuote = (serviceTitle: string) => {
    setPreselectedServiceTitle(serviceTitle);
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-[#F26B21] selection:text-white">
      {/* 1. Sticky Translucent Navbar with Mobile Menu & Topbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleNavigate("contact")}
      />

      <main className="flex-1">
        {aboutPage && <AboutSection headingAs="h1" />}
        {industriesPage && <IndustrySolutions headingAs="h1" />}
        {faqPage && <FaqSection headingAs="h1" />}
        {!servicesPage && !contactPage && !aboutPage && !industriesPage && !faqPage && (
          <>
            {/* 2. Hero Section with Background Image, Dark Blue Gradient, Tagline & Trust Stats */}
            <HeroSection
              onOpenConsultation={() => handleNavigate("contact")}
              onExploreServices={() => handleNavigate("services")}
            />

            {/* 3. Partners Marquee Carousel (Infinite Scroll Right-to-Left, Grayscale to Color) */}
            <PartnersCarousel
              onSelectService={(serviceId) => {
                const match = SERVICES_LIST.find((s) => s.id === serviceId);
                if (match) setSelectedService(match);
              }}
            />
          </>
        )}

        {/* 4. Comprehensive Services Grid (Cards in style of Nerds On Site / TeamLogic IT) */}
        {!contactPage && !aboutPage && !industriesPage && !faqPage && <ServicesSection
          headingAs={servicesPage ? "h1" : "h2"}
          onSelectService={(service) => setSelectedService(service)}
          onRequestQuote={handleRequestQuote}
        />}

        {!servicesPage && !contactPage && !aboutPage && !industriesPage && !faqPage && (
          <>
            {/* 10. About Us (Nairobi Headquarters, Vision Plaza Mombasa Rd, Mission & Values) */}
            <AboutSection />

            {/* 11. Testimonials Slider (Kenyan Business Case Scenarios) */}
            <TestimonialsSection />

          </>
        )}

        {/* 13. Final Call to Action Banner */}
        {!contactPage && !faqPage && !industriesPage && <CtaBanner
          onOpenConsultation={() => handleNavigate("contact")}
        />}

        {/* 14. Contact Section with Map, Form Validation, Honeypot & Direct Contacts */}
        {!faqPage && !industriesPage && <ContactSection
          headingAs={contactPage ? "h1" : "h2"}
          preselectedService={preselectedServiceTitle}
        />}
      </main>

      {/* 15. Comprehensive Footer with 7 Socials, Working Hours, Quick Links & Copyright */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setLegalModalType("privacy")}
        onOpenTerms={() => setLegalModalType("terms")}
      />

      {/* Floating Actions: WhatsApp Click-to-Chat & Back-to-Top Button */}
      <FloatingActions />

      {/* Cookie Consent Banner */}
      <CookieBanner />

      {/* Modal: Service Deep-Dive Details */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={handleRequestQuote}
      />

      {/* Modal: Privacy Policy & Terms of Service */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
