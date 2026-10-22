import React from 'react';
import Image from 'next/image';
import { SERVICES_LIST, ServiceDetail } from '../data/clearcomData.ts';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  headingAs?: 'h1' | 'h2';
  onSelectService: (service: ServiceDetail) => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  headingAs: Heading = 'h2',
  onSelectService,
  onRequestQuote,
}) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Heading className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08365F] font-heading tracking-tight">
            Comprehensive IT & Telephony Services
          </Heading>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Engineered to remove friction, enhance team collaboration, protect critical corporate assets, and deliver reliable technology you can count on every single day.
          </p>
        </div>

        {/* Services Grid (cards styled after Nerds On Site & TeamLogic IT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl border border-slate-200/70 hover:border-[#0B6BB5]/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="mb-5 overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    width={800}
                    height={450}
                    sizes="(min-width: 1280px) 350px, (min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                    className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#08365F] font-heading group-hover:text-[#0B6BB5] transition-colors mb-2.5">
                  {service.title}
                </h3>

                {/* Short Intro */}
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-5">
                  {service.shortDesc}
                </p>

              </div>

              {/* Bottom Actions: View Details & Request Quote */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectService(service)}
                  type="button"
                  className="text-xs font-bold text-[#0B6BB5] hover:text-[#08365F] inline-flex items-center gap-1 transition-colors group-hover:translate-x-0.5 duration-200"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <button
                  onClick={() => onRequestQuote(service.title)}
                  type="button"
                  className="px-3.5 py-2 bg-[#F26B21] hover:bg-[#d95610] text-white rounded-xl text-xs font-bold transition-all shadow-xs hover:shadow-md cursor-pointer"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
