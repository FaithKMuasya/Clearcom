import React, { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('clearcom_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('clearcom_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('clearcom_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-white rounded-2xl p-5 shadow-2xl border border-slate-200/90 text-slate-800">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-50 text-[#0B6BB5] rounded-xl flex-shrink-0 mt-0.5">
            <Shield className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold text-slate-900 font-heading">
              Cookie & Data Privacy Notice
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              We use necessary cookies and analytics to ensure you receive the most secure browsing and quote consultation experience under the Kenya Data Protection Act (KDPA).
            </p>
            <div className="flex items-center gap-2 mt-3.5">
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-[#F26B21] hover:bg-[#d95610] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Essential Only
              </button>
            </div>
          </div>
          <button
            onClick={handleDecline}
            className="text-slate-400 hover:text-slate-600 p-1"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
