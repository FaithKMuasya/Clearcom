import React from 'react';
import { ShieldAlert, Clock, Award, MapPin, TrendingUp, CheckCircle2, Sparkles, Check, Server } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Clock,
      title: "< 15-Minute Response SLA",
      description: "When an IT emergency strikes, every minute of downtime costs money. Our Nairobi helpdesk guarantees immediate triage and rapid remote resolution."
    },
    {
      icon: MapPin,
      title: "Local Kenyan Engineers on Mombasa Rd",
      description: "Based at Vision Plaza, our mobile field engineering team is readily dispatched across Nairobi, Mombasa, and throughout Kenya for on-site emergencies."
    },
    {
      icon: Award,
      title: "Direct Manufacturer Certifications",
      description: "Certified partners for 3CX, Yeastar, Fanvil, Sophos, Microsoft, Bitdefender, Acronis, Dell, and Ubiquiti—guaranteeing genuine hardware and expert deployment."
    },
    {
      icon: TrendingUp,
      title: "Proactive 24/7 Monitoring",
      description: "We prevent problems before they occur. Our automated sensors track server health, disk thresholds, and security anomalies round the clock."
    },
    {
      icon: ShieldAlert,
      title: "Zero-Downtime Migration Philosophy",
      description: "Switching PBXs, moving to Microsoft 365, or upgrading firewalls happens during scheduled off-hours so your staff experiences zero disruption."
    },
    {
      icon: CheckCircle2,
      title: "Predictable Flat-Rate Pricing",
      description: "No surprise hourly fees, hidden charges, or inflated call out rates. Enjoy transparent monthly retainers aligned with your headcount."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0B6BB5] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F26B21]" />
            The Clearcom Difference
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08365F] font-['Poppins']">
            Why Kenyan Enterprises Trust Clearcom
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            We don't just fix computers when they break. We act as your dedicated, strategic technology department—guaranteeing that your systems remain resilient, secure, and effortlessly reliable.
          </p>
        </div>

        {/* Visual Showcase Banner Image: Certified Engineers in Server Room */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual Image Side with live overlay badges */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                alt="Clearcom certified engineers managing enterprise servers and network infrastructure in Nairobi Kenya"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900" />

              {/* Floating Real-Time Response Tag */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-white/60 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-slate-800">24/7 Nairobi NOC Active Monitoring</span>
              </div>

              {/* Floating SLA metric */}
              <div className="absolute bottom-6 left-6 bg-[#08365F]/95 backdrop-blur-md px-4 py-2.5 rounded-xl text-white shadow-xl border border-white/20">
                <div className="text-lg font-black text-[#F26B21] font-['Poppins']">&lt; 15 Mins</div>
                <div className="text-[11px] text-slate-300">Guaranteed Emergency SLA Response</div>
              </div>
            </div>

            {/* Content Side with highlights */}
            <div className="lg:col-span-5 p-8 lg:p-10 text-white space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider">
                <Server className="w-3.5 h-3.5 text-[#F26B21]" />
                Zero-Downtime Commitment
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Poppins']">
                Local Presence, Global Standards
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Headquartered along Mombasa Road at Vision Plaza, our Tier-2 and Tier-3 certified engineers are always within rapid dispatch distance of your Nairobi office, eliminating the frustrating wait times common with overseas or call-center IT providers.
              </p>

              <div className="pt-2 space-y-2.5 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Certified engineers for 3CX, Yeastar, Sophos, Microsoft & Dell</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>On-site emergency dispatch across Nairobi and Mombasa</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% transparent per-user flat monthly rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-[#0B6BB5]/40 hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0B6BB5] group-hover:bg-[#F26B21] group-hover:text-white transition-all duration-300 mb-6 shadow-2xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#08365F] font-['Poppins'] mb-3 group-hover:text-[#0B6BB5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-[#0B6BB5]">
                  <span>Clearcom Standard</span>
                  <div className="h-1 w-8 bg-[#F26B21] rounded-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
