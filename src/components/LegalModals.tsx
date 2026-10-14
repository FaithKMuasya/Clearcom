import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/clearcomData.ts';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full my-8 shadow-2xl border border-slate-100 overflow-hidden relative max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-100 text-[#0B6BB5] rounded-xl">
              {type === 'privacy' ? <Shield className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#08365F] font-['Poppins']">
                {type === 'privacy' ? 'Data Privacy Policy' : 'Terms of Service & SLA Agreements'}
              </h3>
              <p className="text-xs text-slate-500">
                {COMPANY_INFO.name} • Last updated: October 2026
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto text-sm text-slate-700 space-y-4 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <h4 className="text-base font-bold text-slate-900 font-['Poppins']">1. Commitment to Kenya Data Protection Act (KDPA)</h4>
              <p>
                CLEARCOM ENTERPRISES LTD, headquartered at Vision Plaza, Mombasa Road, 5th Floor, Suite 35, Nairobi, is dedicated to upholding the highest standards of data security and confidentiality in compliance with the Data Protection Act, 2019 of the Republic of Kenya.
              </p>

              <h4 className="text-base font-bold text-slate-900 font-['Poppins']">2. Information Collection</h4>
              <p>
                When you request a quote, consultation, or technical audit on clearcom.co.ke, we collect basic business contact details: company name, representative name, business email, and telephone number. We do not sell, rent, or trade your contact information to third-party marketing entities.
              </p>

              <h4 className="text-base font-bold text-slate-900 font-['Poppins']">3. Technical & Telemetry Safeguards</h4>
              <p>
                Our remote monitoring agents (Kaseya, Sophos, 3CX, Yeastar) collect solely technical health telemetries (CPU load, network throughput, disk health, patch levels) required to maintain your SLA and prevent system outages.
              </p>

              <h4 className="text-base font-bold text-slate-900 font-['Poppins']">4. Contact Our Data Protection Officer</h4>
              <p>
                For data privacy requests or erasure inquiries, please email our security officer at <a href="mailto:info@clearcom.co.ke" className="text-[#0B6BB5] underline">info@clearcom.co.ke</a> or telephone +254 795 768 010.
              </p>
            </>
          ) : (
            <>
              <h4 className="text-base font-bold text-slate-900 font-['Poppins']">1. Service Scope & Managed IT Agreements</h4>
              <p>
                All Managed IT Support, 3CX VoIP PBX, Yeastar installations, and cloud migrations provided by CLEARCOM ENTERPRISES LTD are governed by an agreed Master Service Level Agreement (SLA).
              </p>

              <h4 className="text-base font-bold text-slate-900 font-['Poppins']">2. Response Times & Guarantees</h4>
              <p>
                We maintain an aggressive response commitment: critical severity (P1) incidents are triaged within 15 minutes of ticket initiation during contracted SLA coverage. Urgent on-site dispatch is provided throughout Nairobi and adjacent commercial zones.
              </p>

              <h4 className="text-base font-bold text-slate-900 font-['Poppins']">3. Genuine Hardware & Warranties</h4>
              <p>
                All hardware supplied (Dell, HP, Lenovo, Logitech, Hikvision, Fanvil) carries official manufacturer warranty. In the rare event of equipment defect, Clearcom coordinates warranty replacements directly with authorized Kenyan service centers.
              </p>

              <h4 className="text-base font-bold text-slate-900 font-['Poppins']">4. Jurisdiction</h4>
              <p>
                These terms are governed in accordance with the laws of Kenya.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end flex-shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#0B6BB5] hover:bg-[#08548F] text-white rounded-xl text-sm font-semibold transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
