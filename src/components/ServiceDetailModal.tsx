import React from 'react';
import { ServiceDetail } from '../data/clearcomData.ts';
import { X, CheckCircle2, Shield, ArrowRight, Zap, Building, Users } from 'lucide-react';
import { PartnerLogoSvg } from './PartnerLogosSvg.tsx';

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full my-8 shadow-2xl border border-slate-100 overflow-hidden relative max-h-[90vh] flex flex-col">
        {/* Header with Hero Image & Overlay */}
        <div className="relative h-48 sm:h-64 flex-shrink-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08365F] via-[#08365F]/70 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-xs z-10"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Badge Over Image */}
          <div className="absolute bottom-6 left-6 right-6">
            {service.badge && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#F26B21] text-white shadow-sm mb-2">
                {service.badge}
              </span>
            )}
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-['Poppins']">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 divide-y divide-slate-100 flex-1">
          {/* Overview */}
          <div>
            <h3 className="text-lg font-bold text-[#08365F] font-['Poppins'] mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#F26B21]" />
              Executive Overview
            </h3>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
              {service.fullDesc}
            </p>
          </div>

          {/* What's Included */}
          <div className="pt-6">
            <h3 className="text-lg font-bold text-[#08365F] font-['Poppins'] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              What's Included in This Service
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.included.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0B6BB5] mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-800 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="pt-6">
            <h3 className="text-lg font-bold text-[#08365F] font-['Poppins'] mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#0B6BB5]" />
              Key Business Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.keyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 text-sm font-semibold text-[#08365F]"
                >
                  ⚡ {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Ideal For & Technology Partners */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-200/60">
              <h4 className="text-xs font-bold text-[#F26B21] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4" /> Ideal For
              </h4>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                {service.idealFor}
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Building className="w-4 h-4" /> Powered by Certified Partners
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                {service.techPartners.map((partner, index) => (
                  <div key={index} className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs">
                    <PartnerLogoSvg name={partner} className="h-6 max-w-[100px]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer with Quote CTA */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span className="font-semibold text-slate-700">Need a tailored scope or SLA?</span> Our engineers assess on-site along Mombasa Rd & Nairobi.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-800 rounded-xl transition-colors w-full sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(service.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F26B21] hover:bg-[#d95610] text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <span>Request Quote for This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
