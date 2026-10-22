import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onExploreServices,
}) => {
  return (
    <section className="relative min-h-[600px] sm:min-h-[700px] flex items-center justify-center overflow-hidden bg-[#041B32]">
      <Image
        src="/images/hero/clearcom-slide3.jpg"
        alt="Clearcom IT professionals helping a team in the office"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white w-full">
        <div className="max-w-5xl">
          <h1 className="hero-title">
            Effortless IT Support,
            <span className="block mt-2 text-[0.85em] text-transparent bg-clip-text bg-gradient-to-r from-[#F26B21] via-orange-300 to-amber-200">
              like it never even happened.
            </span>
          </h1>
          <p className="mt-6 text-slate-200 font-normal leading-relaxed max-w-2xl">
            We manage your servers, workstations, cloud workspaces, and business telephony—so downtime, cyber threats, and dropped calls become a thing of the past. Proudly serving Nairobi and businesses across Kenya.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="hero-action px-7 py-4 bg-[#F26B21] hover:bg-[#d95610] text-white rounded-xl transition-colors flex items-center justify-center cursor-pointer"
            >
              Get a Free Consultation
            </button>

            <button
              onClick={onExploreServices}
              className="hero-action px-7 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-md border border-white/25 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
