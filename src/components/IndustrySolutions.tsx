import React from 'react';
import { INDUSTRY_SOLUTIONS } from '../data/clearcomData.ts';
import { GraduationCap, Activity, Briefcase, Truck, Globe, Building2, Check, ArrowRight } from 'lucide-react';

interface IndustrySolutionsProps {
  onRequestQuote: (industry: string) => void;
}

export const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({ onRequestQuote }) => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#0B6BB5]' };
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Truck': return <Truck {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Building2': return <Building2 {...props} />;
      default: return <Building2 {...props} />;
    }
  };

  return (
    <section id="industries" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0B6BB5] text-xs font-bold uppercase tracking-wider mb-4">
            Tailored Industry Frameworks
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08365F] font-['Poppins']">
            Tailored IT Solutions by Industry
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Every sector in Kenya operates under unique compliance requirements and operational workflows. Here is how we customize our services for your specific vertical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRY_SOLUTIONS.map((industry, index) => (
            <div
              key={index}
              className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200/80 hover:bg-white hover:border-[#0B6BB5]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-5 group-hover:bg-[#0B6BB5]/10 transition-colors shadow-2xs">
                  {getIcon(industry.icon)}
                </div>

                <h3 className="text-xl font-bold text-[#08365F] font-['Poppins'] mb-3 group-hover:text-[#0B6BB5] transition-colors">
                  {industry.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {industry.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200/60 mb-6">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Core Focus Areas:
                  </span>
                  {industry.keyNeeds.map((need, nIdx) => (
                    <div key={nIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{need}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onRequestQuote(`Industry Solution: ${industry.title}`)}
                className="w-full py-2.5 px-4 bg-white group-hover:bg-[#F26B21] text-slate-700 group-hover:text-white border border-slate-200 group-hover:border-transparent rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs group-hover:shadow-md cursor-pointer"
              >
                <span>Request {industry.title.split(' ')[0]} IT Scope</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
