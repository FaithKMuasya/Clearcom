import React, { useState } from 'react';
import { PARTNERS_LIST, Partner } from '../data/clearcomData.ts';
import { PartnerLogoSvg } from './PartnerLogosSvg.tsx';
import { CheckCircle2, ExternalLink, X } from 'lucide-react';

interface PartnersCarouselProps {
  onSelectService?: (serviceId: string) => void;
}

export const PartnersCarousel: React.FC<PartnersCarouselProps> = ({ onSelectService }) => {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  const getRelevantServiceId = (partnerName: string): string => {
    switch (partnerName) {
      case '3CX':
      case 'Yeastar':
      case 'Fanvil':
      case 'Yealink':
        return 'communication-collaboration';
      case 'Sophos':
      case 'Bitdefender':
      case 'ESET':
        return 'cybersecurity';
      case 'Acronis':
      case 'VMware':
        return 'cloud-solutions';
      case 'Microsoft':
        return 'microsoft-365-solutions';
      case 'Ubiquiti':
      case 'TP-Link':
        return 'hardware-procurement';
      case 'Hikvision':
        return 'hardware-procurement';
      case 'Dell':
      case 'HP':
      case 'Lenovo':
      case 'Logitech':
        return 'hardware-procurement';
      case 'Kaseya':
      default:
        return 'managed-it';
    }
  };

  return (
    <section id="partners" className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        {/* Heading: Blue with Orange Underline as shown in screenshot */}
        <div className="inline-block relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B6BB5] font-heading tracking-tight">
            Professional Partners
          </h2>
          {/* Orange Accent Underline */}
          <div className="mt-2.5 mx-auto h-1.5 w-28 sm:w-36 bg-[#F26B21] rounded-full shadow-xs" />
        </div>

        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
          Direct certifications and alliances with the world's leading IT, telecom, security, and cloud vendors to guarantee genuine hardware, licensing, and local warranty across Kenya.
        </p>
      </div>

      {/* Slow, Readable Infinite Marquee */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Subtle gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track: Duplicated list for seamless looping, slower speed, full brand colors */}
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 px-4 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:animate-none">
          {[...PARTNERS_LIST, ...PARTNERS_LIST].map((partner, index) => (
            <button
              key={`${partner.name}-${index}`}
              onClick={() => setSelectedPartner(partner)}
              type="button"
              className="group flex-shrink-0 bg-white rounded-2xl border border-slate-200/90 hover:border-[#0B6BB5] shadow-xs hover:shadow-xl transition-all duration-300 px-6 py-4 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0B6BB5] hover:-translate-y-0.5"
              title={`Click to view ${partner.name} partnership details`}
            >
              {/* Partner Logo */}
              <div className="flex items-center justify-center min-w-[130px] sm:min-w-[150px] h-12 px-2 group-hover:scale-105 transition-transform duration-200">
                <PartnerLogoSvg name={partner.name} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Partner Spotlight Detail Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setSelectedPartner(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center">
                <PartnerLogoSvg name={selectedPartner.name} className="h-10 max-w-[140px]" />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-[#0B6BB5] mb-1">
                  {selectedPartner.tier}
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  {selectedPartner.name}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              {selectedPartner.description}. Clearcom Enterprises LTD maintains direct technical certifications and deployment partnerships with {selectedPartner.name} to guarantee official licensing, local warranty, and certified engineering support across Kenya.
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100% Genuine Manufacturer Licensing & Local Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Certified Engineers in Nairobi for Rapid Implementation</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>24/7 Dedicated Monitoring & Level 2/3 Escalation</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              {onSelectService && (
                <button
                  onClick={() => {
                    const sId = getRelevantServiceId(selectedPartner.name);
                    setSelectedPartner(null);
                    onSelectService(sId);
                  }}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0B6BB5] hover:bg-[#08548F] text-white rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg"
                >
                  <span>Explore Related Service</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setSelectedPartner(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl font-medium text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PartnersCarousel;
