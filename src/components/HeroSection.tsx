import React from 'react';
import { COMPANY_INFO, TRUST_STATS } from '../data/clearcomData.ts';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, PhoneCall, Headphones } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
  onRequestVoIPDemo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onExploreServices,
  onRequestVoIPDemo,
}) => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#041B32]">
      {/* Background Image: High-tech network server room infrastructure */}
      <img
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=85"
        alt="Clearcom Enterprises modern server room and network infrastructure in Nairobi Kenya"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105 transform animate-pulse-subtle"
        loading="eager"
      />

      {/* Corporate Blue / Navy Gradient Overlay for optimal contrast & text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#041B32] via-[#08365F]/90 to-[#0B6BB5]/70" />
      <div className="absolute inset-0 bg-radial at-center from-transparent via-transparent to-[#041B32]/60 pointer-events-none" />

      {/* Decorative subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-white w-full">
        <div className="max-w-3xl">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-orange-300 text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#F26B21] animate-ping" />
            <span>Nairobi's Trusted Managed IT & Telephony Partner</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Poppins'] tracking-tight leading-[1.15] text-white">
            Effortless IT Support,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26B21] via-orange-300 to-amber-200">
              like it never even happened.
            </span>
          </h1>

          {/* Subheading / Value Proposition */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl">
            We manage your servers, workstations, cloud workspaces, and business telephony—so downtime, cyber threats, and dropped calls become a thing of the past. Proudly serving Nairobi and businesses across Kenya.
          </p>

          {/* Bullet Trust Signals */}
          <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>&lt; 15-Minute Emergency SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Certified 3CX & Yeastar PBX</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Local On-Site Mombasa Rd Team</span>
            </div>
          </div>

          {/* Dual Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-7 py-4 bg-[#F26B21] hover:bg-[#d95610] text-white rounded-xl font-bold text-base shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-orange-200" />
              <span>Get a Free Consultation</span>
            </button>

            <button
              onClick={onExploreServices}
              className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-base backdrop-blur-md border border-white/25 transition-all duration-200 flex items-center justify-center gap-2 hover:border-white/50 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Highlighted VoIP Badge Link */}
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <PhoneCall className="w-4 h-4 text-[#F26B21]" />
              <span>Looking to replace an old office PBX?</span>
            </div>
            <button
              onClick={onRequestVoIPDemo}
              className="text-xs font-bold text-orange-300 hover:text-white underline underline-offset-4 flex items-center gap-1 transition-colors"
            >
              <span>Compare 3CX vs Yeastar P-Series phone systems →</span>
            </button>
          </div>
        </div>

        {/* Trust Stats Bar underneath Hero */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_STATS.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-white/25 transition-all">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-['Poppins'] text-white">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-orange-300 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-300 mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
