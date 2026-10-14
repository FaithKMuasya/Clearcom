import React from 'react';
import { COMPARISON_3CX_VS_YEASTAR } from '../data/clearcomData.ts';
import { Check, Sparkles, Phone, Headphones, ArrowRight, Laptop, Smartphone } from 'lucide-react';

interface PhoneComparisonTableProps {
  onSelectPlan?: (serviceId: string) => void;
  onRequestQuote?: (system: string) => void;
}

export const PhoneComparisonTable: React.FC<PhoneComparisonTableProps> = ({
  onSelectPlan,
  onRequestQuote,
}) => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 my-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#F26B21] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Telephony Decision Guide
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#08365F] font-['Poppins']">
          {COMPARISON_3CX_VS_YEASTAR.title}
        </h3>
        <p className="mt-2 text-slate-600 text-sm sm:text-base">
          {COMPARISON_3CX_VS_YEASTAR.subtitle}
        </p>
      </div>

      {/* Visual Photography Cards showcasing both 3CX (Softphones/Cloud) and Yeastar + Fanvil (IP Hardware) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Card 1: 3CX Modern Cloud Softphone Experience */}
        <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-gradient-to-br from-sky-50 to-white flex flex-col justify-between group hover:shadow-md transition-shadow">
          <div className="relative h-48 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80"
              alt="Remote team member collaborating on 3CX mobile softphone and video conferencing in Kenya"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-xs font-bold uppercase tracking-wider bg-[#00A8E8] px-2.5 py-0.5 rounded-md">
                3CX Software PBX
              </span>
              <span className="text-xs font-medium text-slate-200">iOS • Android • WebRTC</span>
            </div>
          </div>
          <div className="p-5">
            <h4 className="font-bold text-slate-900 text-base font-['Poppins'] mb-1">
              3CX: Work From Anywhere With Your Office Landline
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Slash your telecom bills by up to 80%. Employees make and take calls on laptops and smartphones using their office extension, with integrated WhatsApp, live chat, and CRM call recording.
            </p>
          </div>
        </div>

        {/* Card 2: Yeastar P-Series + Fanvil IP Hardware Experience */}
        <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-gradient-to-br from-blue-50 to-white flex flex-col justify-between group hover:shadow-md transition-shadow">
          <div className="relative h-48 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
              alt="Executive corporate boardroom equipped with Fanvil HD IP desk phones and Yeastar P-Series PBX"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-xs font-bold uppercase tracking-wider bg-[#0288D1] px-2.5 py-0.5 rounded-md">
                Yeastar + Fanvil IP
              </span>
              <span className="text-xs font-medium text-slate-200">Appliance & Hybrid VoIP</span>
            </div>
          </div>
          <div className="p-5">
            <h4 className="font-bold text-slate-900 text-base font-['Poppins'] mb-1">
              Yeastar P-Series: Carrier-Grade Hardware & Fanvil IP Phones
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Turnkey dedicated rack appliances paired with Fanvil executive touch-screen IP phones, hotel video intercoms, call center wallboards, and hybrid analog/GSM backup lines.
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Grid Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[640px]">
          <thead>
            <tr className="border-b-2 border-slate-200">
              <th className="py-4 px-4 text-sm font-bold text-slate-500 uppercase tracking-wider w-1/4">
                Feature / Dimension
              </th>
              <th className="py-4 px-6 text-base font-extrabold text-[#00a8e8] bg-sky-50/60 rounded-t-xl w-[37.5%]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-[#00a8e8] text-white rounded-lg flex items-center justify-center font-bold text-xs">
                    3CX
                  </div>
                  <div>
                    <span className="block text-slate-900 font-bold">3CX Phone System</span>
                    <span className="text-[11px] text-slate-500 font-normal">Software & Cloud PBX Leader</span>
                  </div>
                </div>
              </th>
              <th className="py-4 px-6 text-base font-extrabold text-[#0288d1] bg-blue-50/60 rounded-t-xl w-[37.5%]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-[#0288d1] text-white rounded-lg flex items-center justify-center font-bold text-xs">
                    YS
                  </div>
                  <div>
                    <span className="block text-slate-900 font-bold">Yeastar + Fanvil</span>
                    <span className="text-[11px] text-slate-500 font-normal">Hybrid Appliance & Cloud PBX</span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {COMPARISON_3CX_VS_YEASTAR.features.map((item, index) => (
              <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-4 px-4 font-semibold text-slate-800">
                  {item.criteria}
                </td>
                <td className="py-4 px-6 text-slate-700 bg-sky-50/20 leading-relaxed">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#00a8e8] mt-0.5 flex-shrink-0" />
                    <span>{item.threeCX}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-slate-700 bg-blue-50/20 leading-relaxed">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#0288d1] mt-0.5 flex-shrink-0" />
                    <span>{item.yeastar}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-slate-200">
              <td className="py-6 px-4 font-bold text-slate-800">
                Next Step
              </td>
              <td className="py-6 px-6 bg-sky-50/30">
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => onRequestQuote ? onRequestQuote('3CX Business Phone Systems') : null}
                    type="button"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#00a8e8] hover:bg-[#0094cc] text-white rounded-xl font-bold text-xs shadow-sm hover:shadow transition-all cursor-pointer"
                  >
                    <span>Request 3CX Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  {onSelectPlan && (
                    <button
                      onClick={() => onSelectPlan('3cx-phone-systems')}
                      className="text-xs text-[#00a8e8] font-semibold hover:underline text-center cursor-pointer"
                    >
                      View 3CX Full Specs →
                    </button>
                  )}
                </div>
              </td>
              <td className="py-6 px-6 bg-blue-50/30">
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => onRequestQuote ? onRequestQuote('Yeastar Business Phone Systems') : null}
                    type="button"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0288d1] hover:bg-[#0277bd] text-white rounded-xl font-bold text-xs shadow-sm hover:shadow transition-all cursor-pointer"
                  >
                    <span>Request Yeastar Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  {onSelectPlan && (
                    <button
                      onClick={() => onSelectPlan('yeastar-phone-systems')}
                      className="text-xs text-[#0288d1] font-semibold hover:underline text-center cursor-pointer"
                    >
                      View Yeastar Full Specs →
                    </button>
                  )}
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Advisory Bottom Box */}
      <div className="mt-8 p-5 bg-gradient-to-r from-blue-50/70 to-orange-50/70 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white rounded-xl text-[#F26B21] shadow-xs">
            <Headphones className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Still not sure which telephony platform fits best?</h4>
            <p className="text-xs text-slate-600">Our senior voice engineers in Nairobi offer a 100% free telephony assessment & live demo for your team.</p>
          </div>
        </div>
        <button
          onClick={() => onRequestQuote ? onRequestQuote('Telephony Assessment (3CX vs Yeastar)') : null}
          className="whitespace-nowrap px-5 py-2.5 bg-[#F26B21] hover:bg-[#d95610] text-white rounded-xl font-bold text-xs transition-all shadow-md hover:shadow-lg flex-shrink-0 cursor-pointer"
        >
          Book Free VoIP Demo
        </button>
      </div>
    </div>
  );
};

export default PhoneComparisonTable;
