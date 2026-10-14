import React from 'react';
import { HOW_IT_WORKS } from '../data/clearcomData.ts';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HowItWorksProps {
  onStartConsultation: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartConsultation }) => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#F26B21] text-xs font-bold uppercase tracking-wider mb-4">
            Proven Implementation Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08365F] font-['Poppins']">
            How It Works: 4 Simple Steps to Seamless IT
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Whether installing a new 3CX phone system or completely outsourcing your IT department, our zero-friction onboarding ensures effortless adoption.
          </p>
        </div>

        {/* Visual Workflow Showcase Card with Photographic Media */}
        <div className="mb-14 bg-gradient-to-r from-[#08365F] via-[#0B6BB5] to-[#041B32] rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
                alt="Clearcom technicians configuring structured cabling and enterprise server infrastructure"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-slate-900 px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero-Downtime Guarantee</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-300">
                Smooth Onboarding Promise
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Poppins']">
                We Handle the Heavy Lifting Outside Business Hours
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                Migrating phones, emails, or firewalls shouldn't interrupt your business operations. Our Nairobi technicians perform all cutovers, data transfers, and server provisioning during evenings and weekends. On Monday morning, everything just works.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-blue-100">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F26B21]" />
                  <span>Free Initial On-Site Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F26B21]" />
                  <span>Transparent Milestone Timelines</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_IT_WORKS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl border border-slate-200/80 hover:border-[#0B6BB5]/40 transition-all duration-300 relative group flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-['Poppins'] text-[#F26B21] group-hover:scale-110 transition-transform">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0B6BB5] flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#08365F] font-['Poppins'] mb-3 group-hover:text-[#0B6BB5] transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-400 group-hover:text-[#0B6BB5] transition-colors">
                <span>Phase {step.step}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onStartConsultation}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B6BB5] hover:bg-[#08548F] text-white rounded-2xl font-bold text-base shadow-lg shadow-blue-900/10 hover:shadow-xl transition-all cursor-pointer"
          >
            <span>Start Step 1: Book Your Free IT Audit</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
