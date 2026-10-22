import React from 'react';
import { COMPANY_INFO } from '../data/clearcomData.ts';
import { PhoneCall } from 'lucide-react';

interface CtaBannerProps {
  onOpenConsultation: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#041B32] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#F26B21]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#0B6BB5]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight max-w-3xl mx-auto">
          Let’s simplify your IT.
        </h2>

        <p className="mt-6 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Book a free consultation to find the right IT and telephony services for your business.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 bg-[#F26B21] hover:bg-[#d95610] text-white rounded-xl font-bold text-base shadow-xl shadow-orange-500/30 hover:shadow-orange-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Schedule Free Consultation</span>
          </button>

          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-base backdrop-blur-md border border-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-orange-300" />
            <span>Call: {COMPANY_INFO.phoneDisplay}</span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default CtaBanner;
