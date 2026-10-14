import React, { useState } from 'react';
import { SERVICES_LIST, ServiceDetail } from '../data/clearcomData.ts';
import {
  ShieldCheck,
  PhoneCall,
  Headphones,
  Compass,
  Lock,
  Database,
  Cloud,
  Wifi,
  Video,
  Laptop,
  CheckCircle2,
  ArrowRight,
  Search,
  Sparkles,
  Layers
} from 'lucide-react';
import { PartnerLogoSvg } from './PartnerLogosSvg.tsx';

interface ServicesSectionProps {
  onSelectService: (service: ServiceDetail) => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Icon mapping
  const renderIcon = (name: string) => {
    const props = { className: 'w-6 h-6 text-[#0B6BB5] group-hover:text-white transition-colors' };
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'PhoneCall': return <PhoneCall {...props} className="w-6 h-6 text-[#00a8e8] group-hover:text-white transition-colors" />;
      case 'Headphones': return <Headphones {...props} className="w-6 h-6 text-[#0288d1] group-hover:text-white transition-colors" />;
      case 'Compass': return <Compass {...props} />;
      case 'Lock': return <Lock {...props} className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" />;
      case 'Database': return <Database {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      case 'Wifi': return <Wifi {...props} />;
      case 'Video': return <Video {...props} />;
      case 'Laptop': return <Laptop {...props} />;
      default: return <ShieldCheck {...props} />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Services (10)' },
    { id: 'voip', label: 'VoIP & Phone Systems (3CX / Yeastar)' },
    { id: 'managed', label: 'Managed IT & Advisory' },
    { id: 'security-cloud', label: 'Cybersecurity & Cloud' },
    { id: 'infrastructure', label: 'Hardware, Cabling & CCTV' },
  ];

  const filteredServices = SERVICES_LIST.filter((service) => {
    // Category match
    let matchCat = true;
    if (selectedCategory === 'voip') {
      matchCat = service.id === '3cx-phone-systems' || service.id === 'yeastar-phone-systems';
    } else if (selectedCategory === 'managed') {
      matchCat = service.id === 'managed-it' || service.id === 'it-consulting';
    } else if (selectedCategory === 'security-cloud') {
      matchCat = service.id === 'cybersecurity' || service.id === 'backup-recovery' || service.id === 'cloud-microsoft-365';
    } else if (selectedCategory === 'infrastructure') {
      matchCat = service.id === 'networking-wifi' || service.id === 'cctv-security' || service.id === 'hardware-procurement';
    }

    // Search query match
    const matchQuery =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.included.some((inc) => inc.toLowerCase().includes(searchQuery.toLowerCase())) ||
      service.techPartners.some((tp) => tp.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchCat && matchQuery;
  });

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0B6BB5] text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5 text-[#F26B21]" />
            Enterprise IT Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08365F] font-['Poppins'] tracking-tight">
            Comprehensive IT & Telephony Services
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Engineered to remove friction, enhance team collaboration, protect critical corporate assets, and deliver reliable technology you can count on every single day.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0B6BB5] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services or tech (e.g. 3CX, Sophos)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200/90 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B6BB5] focus:border-transparent"
            />
          </div>
        </div>

        {/* Services Grid (cards styled after Nerds On Site & TeamLogic IT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl border border-slate-200/70 hover:border-[#0B6BB5]/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Header with Icon & Badge */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center p-3 group-hover:bg-[#0B6BB5] transition-all duration-300 shadow-2xs">
                    {renderIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-orange-50 text-[#F26B21] border border-orange-200/60 shadow-2xs">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#08365F] font-['Poppins'] group-hover:text-[#0B6BB5] transition-colors mb-2.5">
                  {service.title}
                </h3>

                {/* Short Intro */}
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* What's Included Bullets (Top 3 preview) */}
                <div className="space-y-2 border-t border-slate-100 pt-4 mb-5">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    What's Included:
                  </span>
                  {service.included.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-2">{item}</span>
                    </div>
                  ))}
                  {service.included.length > 3 && (
                    <span className="text-[11px] text-[#0B6BB5] font-semibold pl-5 block">
                      +{service.included.length - 3} more capabilities
                    </span>
                  )}
                </div>

                {/* Partner Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 mb-6">
                  <span className="text-[10px] text-slate-400 font-semibold mr-1">Tech:</span>
                  {service.techPartners.map((partner, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
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

        {/* Empty Search Feedback */}
        {filteredServices.length === 0 && (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-500 text-base">No services matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-sm font-bold text-[#0B6BB5] hover:underline"
            >
              Clear filters and view all 10 services
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
