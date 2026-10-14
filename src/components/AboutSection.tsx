import React from 'react';
import { COMPANY_INFO } from '../data/clearcomData.ts';
import { ShieldCheck, Target, HeartHandshake, Zap, MapPin, Award, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image & Trust Elements on Left */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Clearcom Enterprises certified engineering team collaborating in Nairobi Kenya"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08365F]/80 via-transparent to-transparent" />

              {/* Floating SLA Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F26B21] flex items-center justify-center font-bold">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 font-['Poppins']">
                      Nairobi Headquarters
                    </span>
                    <span className="text-[11px] text-slate-500">Vision Plaza, 5th Floor, Suite 35, Mombasa Rd</span>
                  </div>
                </div>
                <span className="text-xs font-extrabold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-lg">
                  Est. 2012
                </span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-center">
                <div className="text-2xl font-black text-[#0B6BB5] font-['Poppins']">150+</div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">Kenyan Firms Supported</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-center">
                <div className="text-2xl font-black text-[#F26B21] font-['Poppins']">15 Mins</div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">Guaranteed Emergency SLA</div>
              </div>
            </div>
          </div>

          {/* Story & Pillars on Right */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0B6BB5] text-xs font-bold uppercase tracking-wider mb-4">
              About Clearcom Enterprises LTD
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08365F] font-['Poppins'] leading-tight">
              Your Trusted Technology Department in Kenya
            </h2>

            <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed">
              Founded over a decade ago in Nairobi, <span className="font-bold text-slate-900">CLEARCOM ENTERPRISES LTD</span> was established with a singular, resolute mission: to liberate Kenyan businesses from the endless frustration of IT disruptions, erratic phone lines, and unpredictable repair invoices.
            </p>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Our brand tagline—<span className="font-bold text-[#F26B21] italic">"Effortless IT Support, like it never even happened"</span>—defines our everyday operating standard. When systems operate seamlessly in the background, your team can focus on servicing your clients and driving profitability.
            </p>

            {/* Core Values / Commitments */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#0B6BB5] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-['Poppins']">Proactive Resilience</h4>
                  <p className="text-xs text-slate-600 mt-0.5">We don't wait for servers to crash. We actively patch, audit, and isolate anomalies before you notice them.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#F26B21] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-['Poppins']">Speed & Accountability</h4>
                  <p className="text-xs text-slate-600 mt-0.5">A 15-minute response SLA backed by engineers situated on Mombasa Road who know Nairobi inside out.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-['Poppins']">100% Genuine Certified Solutions</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Official 3CX, Yeastar, Fanvil, Sophos, Microsoft, Bitdefender, Acronis, and Dell hardware warranties.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
