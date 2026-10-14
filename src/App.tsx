import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { PhoneComparisonTable } from './components/PhoneComparisonTable.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { IndustrySolutions } from './components/IndustrySolutions.tsx';
import { PartnersCarousel } from './components/PartnersCarousel.tsx';
import { ServiceCostCalculator } from './components/ServiceCostCalculator.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { CtaBanner } from './components/CtaBanner.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';
import { CookieBanner } from './components/CookieBanner.tsx';
import { ServiceDetailModal } from './components/ServiceDetailModal.tsx';
import { LegalModal } from './components/LegalModals.tsx';
import { ConsultationModal } from './components/ConsultationModal.tsx';
import { SERVICES_LIST, ServiceDetail } from './data/clearcomData.ts';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [preselectedServiceTitle, setPreselectedServiceTitle] = useState<string>('Managed IT Services');
  const [prefilledNotes, setPrefilledNotes] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState<boolean>(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string, serviceSlug?: string) => {
    setActiveSection(sectionId);

    if (serviceSlug) {
      const match = SERVICES_LIST.find((s) => s.id === serviceSlug || s.slug === serviceSlug);
      if (match) {
        setSelectedService(match);
        return;
      }
    }

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // When user clicks "Request Quote" on any service card or comparison table
  const handleRequestQuote = (serviceTitle: string) => {
    setPreselectedServiceTitle(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // When user configures the calculator and locks in a custom quote
  const handleApplyCalculatorQuote = (quoteSummary: string) => {
    setPrefilledNotes(quoteSummary);
    setPreselectedServiceTitle('Managed IT Services');
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-[#F26B21] selection:text-white">
      {/* 1. Sticky Translucent Navbar with Mobile Menu & Topbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenConsultationModal={() => setIsConsultationModalOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section with Background Image, Dark Blue Gradient, Tagline & Trust Stats */}
        <HeroSection
          onOpenConsultation={() => setIsConsultationModalOpen(true)}
          onExploreServices={() => handleNavigate('services')}
          onRequestVoIPDemo={() => handleNavigate('telephony-compare')}
        />

        {/* 3. Partners Marquee Carousel (Infinite Scroll Right-to-Left, Grayscale to Color) */}
        <PartnersCarousel
          onSelectService={(serviceId) => {
            const match = SERVICES_LIST.find((s) => s.id === serviceId);
            if (match) setSelectedService(match);
          }}
        />

        {/* 4. Comprehensive Services Grid (Cards in style of Nerds On Site / TeamLogic IT) */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onRequestQuote={handleRequestQuote}
        />

        {/* 5. 3CX vs Yeastar Business Phone Systems Detailed Comparison Table */}
        <section id="telephony-compare" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <PhoneComparisonTable
            onSelectPlan={(serviceId) => {
              const match = SERVICES_LIST.find((s) => s.id === serviceId);
              if (match) setSelectedService(match);
            }}
            onRequestQuote={handleRequestQuote}
          />
        </section>

        {/* 6. Why Choose Clearcom (Trust Pillars, Response Times, Local Engineers) */}
        <WhyChooseUs />

        {/* 7. How It Works (4-Step Process: Consult → Plan → Implement → Support) */}
        <HowItWorks onStartConsultation={() => setIsConsultationModalOpen(true)} />

        {/* 8. Industry Solutions (Schools, Healthcare, Finance/Legal, Logistics, NGOs, SMEs) */}
        <IndustrySolutions onRequestQuote={handleRequestQuote} />

        {/* 9. Interactive IT Cost & Telephony Estimator Calculator */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceCostCalculator onQuoteGenerated={handleApplyCalculatorQuote} />
        </section>

        {/* 10. About Us (Nairobi Headquarters, Vision Plaza Mombasa Rd, Mission & Values) */}
        <AboutSection />

        {/* 11. Testimonials Slider (Kenyan Business Case Scenarios) */}
        <TestimonialsSection />

        {/* 12. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 13. Final Call to Action Banner */}
        <CtaBanner onOpenConsultation={() => setIsConsultationModalOpen(true)} />

        {/* 14. Contact Section with Map, Form Validation, Honeypot & Direct Contacts */}
        <ContactSection
          preselectedService={preselectedServiceTitle}
          prefilledNotes={prefilledNotes}
        />
      </main>

      {/* 15. Comprehensive Footer with 7 Socials, Working Hours, Quick Links & Copyright */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
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

      {/* Modal: Free Consultation & Audit Booking */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        defaultService={preselectedServiceTitle}
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
