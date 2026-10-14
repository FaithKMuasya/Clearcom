import React, { useState, useEffect } from 'react';
import { ClearcomLogo } from './ClearcomLogo.tsx';
import { COMPANY_INFO, SERVICES_LIST } from '../data/clearcomData.ts';
import { Phone, Mail, MapPin, Menu, X, ChevronDown, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string, serviceSlug?: string) => void;
  onOpenConsultationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenConsultationModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'telephony-compare', label: '3CX vs Yeastar' },
    { id: 'calculator', label: 'Cost Estimator' },
    { id: 'industries', label: 'Industries' },
    { id: 'partners', label: 'Partners' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string, serviceSlug?: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(id, serviceSlug);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Bar with Real Contact & Hours */}
      <div className="bg-[#08365F] text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-blue-950/50 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-[#F26B21] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F26B21]" />
              <span className="font-semibold">{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-[#F26B21] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#F26B21]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#F26B21]" />
              <span>Vision Plaza, Mombasa Rd, Nairobi</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Helpdesk Response &lt; 15 Mins
            </span>
            <div className="h-3 w-px bg-blue-800" />
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Clearcom%2C%20I%20need%20IT%20support.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-400 transition-colors flex items-center gap-1 text-xs font-semibold"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
            : 'bg-white py-4 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo on Left */}
          <button
            onClick={() => handleLinkClick('home')}
            className="focus:outline-none focus:ring-2 focus:ring-[#0B6BB5] rounded-lg text-left"
            aria-label="Clearcom Enterprises Home"
          >
            <ClearcomLogo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleLinkClick('services')}
                      className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1 ${
                        activeSection === 'services'
                          ? 'text-[#0B6BB5] bg-blue-50/80'
                          : 'text-slate-700 hover:text-[#0B6BB5] hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="px-4 py-2 border-b border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-400">
                          Clearcom IT Solutions
                        </div>
                        <div className="max-h-96 overflow-y-auto py-1">
                          {SERVICES_LIST.map((srv) => (
                            <button
                              key={srv.id}
                              onClick={() => handleLinkClick('services', srv.id)}
                              className="w-full text-left px-4 py-2.5 hover:bg-blue-50/70 transition-colors flex items-start gap-2.5 group"
                            >
                              <div className="mt-0.5 w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#F26B21] transition-colors" />
                              <div>
                                <span className="block text-xs font-bold text-slate-800 group-hover:text-[#0B6BB5] transition-colors">
                                  {srv.title}
                                </span>
                                <span className="block text-[11px] text-slate-500 line-clamp-1">
                                  {srv.shortDesc}
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                        <div className="p-2 border-t border-slate-100 bg-slate-50 rounded-b-xl text-center">
                          <button
                            onClick={() => handleLinkClick('services')}
                            className="text-xs font-bold text-[#0B6BB5] hover:text-[#F26B21] inline-flex items-center gap-1 transition-colors"
                          >
                            <span>Browse All 10 Services</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    activeSection === link.id
                      ? 'text-[#0B6BB5] bg-blue-50/80'
                      : 'text-slate-700 hover:text-[#0B6BB5] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Action: Orange CTA button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenConsultationModal}
              className="relative group px-5 py-2.5 bg-[#F26B21] hover:bg-[#d95610] text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-orange-200" />
              <span>Get a Free Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-[#0B6BB5] hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top-4 duration-200 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                    activeSection === link.id
                      ? 'bg-blue-50 text-[#0B6BB5]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Quick Contacts in Mobile Menu */}
            <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-3 text-slate-700 font-medium text-xs p-2 rounded-lg bg-slate-50"
              >
                <Phone className="w-4 h-4 text-[#F26B21]" />
                <span>Call Us: {COMPANY_INFO.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 text-slate-700 font-medium text-xs p-2 rounded-lg bg-slate-50"
              >
                <Mail className="w-4 h-4 text-[#0B6BB5]" />
                <span>Email: {COMPANY_INFO.email}</span>
              </a>
            </div>

            {/* Mobile CTA */}
            <div className="mt-5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full py-3.5 px-4 bg-[#F26B21] hover:bg-[#d95610] text-white rounded-xl font-bold text-sm shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get a Free Consultation</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
