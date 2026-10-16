import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, ShieldCheck, Phone, Cloud, Sparkles } from 'lucide-react';

interface ServiceCostCalculatorProps {
  onQuoteGenerated: (quoteSummary: string) => void;
}

export const ServiceCostCalculator: React.FC<ServiceCostCalculatorProps> = ({ onQuoteGenerated }) => {
  const [users, setUsers] = useState<number>(20);
  const [phoneType, setPhoneType] = useState<'none' | '3cx' | 'yeastar'>('3cx');
  const [securityTier, setSecurityTier] = useState<'standard' | 'advanced'>('advanced');
  const [includeCloud, setIncludeCloud] = useState<boolean>(true);
  const [includeBackup, setIncludeBackup] = useState<boolean>(true);

  // Approximate cost estimation in KES (Kenyan Shillings)
  const baseSupportPerUser = 2500; // KES per user / month
  const phoneCostPerUser = phoneType === '3cx' ? 950 : phoneType === 'yeastar' ? 1200 : 0;
  const securityAddonPerUser = securityTier === 'advanced' ? 850 : 450;
  const cloudAddonPerUser = includeCloud ? 1400 : 0;
  const backupAddon = includeBackup ? 15000 : 0; // Flat base cloud backup quota

  const estimatedMonthlyKES = (users * (baseSupportPerUser + phoneCostPerUser + securityAddonPerUser + cloudAddonPerUser)) + backupAddon;
  const estimatedUSD = Math.round(estimatedMonthlyKES / 130);

  const handleApplyQuote = () => { 
    const summary = `Managed IT Plan Estimate for ${users} Users: Telephony: ${
      phoneType === '3cx' ? '3CX Cloud VoIP' : phoneType === 'yeastar' ? 'Yeastar + Fanvil PBX' : 'None'
    }, Security: ${securityTier === 'advanced' ? 'Sophos Intercept X Advanced XDR' : 'Standard Bitdefender'}, Microsoft 365: ${
      includeCloud ? 'Included' : 'Excluded'
    }, Backup: ${includeBackup ? 'Acronis Immutable Cloud' : 'Excluded'} (~KES ${estimatedMonthlyKES.toLocaleString()} / mo)`;
    onQuoteGenerated(summary);
  };

  return (
    <div id="calculator" className="bg-gradient-to-br from-[#08365F] via-[#0B6BB5] to-[#041B32] rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden my-16">
      {/* Background ambient lighting */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#F26B21]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-[#00a8e8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-orange-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#F26B21]" />
            Instant ROI & Estimate Generator
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold font-['Poppins']">
            Estimate Your Managed IT & Telecom Investment
          </h3>
          <p className="mt-2 text-blue-100/90 text-sm sm:text-base max-w-2xl mx-auto">
            Configure your company parameters to generate an instant estimate tailored for Kenyan businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/15">
            {/* User count slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <span>Number of Team Members / Workstations:</span>
                </label>
                <span className="text-lg font-black text-[#F26B21] bg-white px-3 py-0.5 rounded-lg">
                  {users} Users
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="150"
                step="5"
                value={users}
                onChange={(e) => setUsers(Number(e.target.value))}
                className="w-full h-2.5 bg-blue-950/60 rounded-lg appearance-none cursor-pointer accent-[#F26B21]"
              />
              <div className="flex justify-between text-[11px] text-blue-200 mt-1">
                <span>5 (Small Office)</span>
                <span>50 (Mid-Enterprise)</span>
                <span>150+ (Multi-Branch)</span>
              </div>
            </div>

            {/* Business Phone System Selection */}
            <div>
              <label className="text-sm font-semibold text-white block mb-2 flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-orange-400" />
                Select Business Telephony (VoIP):
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: '3cx', label: '3CX VoIP', desc: 'Software & Softphones' },
                  { id: 'yeastar', label: 'Yeastar + Fanvil', desc: 'IP Desk Phones' },
                  { id: 'none', label: 'None', desc: 'No PBX Needed' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPhoneType(item.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      phoneType === item.id
                        ? 'bg-[#F26B21] border-[#F26B21] text-white shadow-md'
                        : 'bg-white/5 border-white/10 text-blue-100 hover:bg-white/10'
                    }`}
                  >
                    <span className="block text-xs font-bold">{item.label}</span>
                    <span className="block text-[10px] opacity-80">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Security Level */}
            <div>
              <label className="text-sm font-semibold text-white block mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Cybersecurity Defense Level:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSecurityTier('standard')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    securityTier === 'standard'
                      ? 'bg-blue-600 border-blue-400 text-white'
                      : 'bg-white/5 border-white/10 text-blue-100 hover:bg-white/10'
                  }`}
                >
                  <span className="block text-xs font-bold">Bitdefender GravityZone</span>
                  <span className="block text-[10px] opacity-80">Standard Endpoint Antivirus</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSecurityTier('advanced')}
                  className={`p-3 rounded-xl border text-left transition-all relative ${
                    securityTier === 'advanced'
                      ? 'bg-[#F26B21] border-[#F26B21] text-white shadow-md'
                      : 'bg-white/5 border-white/10 text-blue-100 hover:bg-white/10'
                  }`}
                >
                  <span className="absolute -top-2 right-2 bg-emerald-500 text-[9px] font-extrabold px-1.5 py-0.2 rounded text-white uppercase">
                    Recommended
                  </span>
                  <span className="block text-xs font-bold">Sophos Intercept X + XDR</span>
                  <span className="block text-[10px] opacity-80">Ransomware & Firewall Defense</span>
                </button>
              </div>
            </div>

            {/* Checkbox Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <label className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                <input
                  type="checkbox"
                  checked={includeCloud}
                  onChange={(e) => setIncludeCloud(e.target.checked)}
                  className="w-4 h-4 rounded text-[#F26B21] accent-[#F26B21]"
                />
                <span className="text-xs font-medium text-blue-100">Include Microsoft 365 Management</span>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
                <input
                  type="checkbox"
                  checked={includeBackup}
                  onChange={(e) => setIncludeBackup(e.target.checked)}
                  className="w-4 h-4 rounded text-[#F26B21] accent-[#F26B21]"
                />
                <span className="text-xs font-medium text-blue-100">Include Acronis Cloud Backup</span>
              </label>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B6BB5]">
                  Estimated Flat Retainer
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                  Zero Surprise Fees
                </span>
              </div>

              <div className="my-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-bold text-slate-500">KES</span>
                  <span className="text-3xl sm:text-4xl font-black text-[#08365F] font-['Poppins']">
                    {estimatedMonthlyKES.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">/month</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Approx. <span className="font-bold text-slate-700">${estimatedUSD.toLocaleString()} USD</span> / month
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-4 mb-6">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>24/7/365 Proactive monitoring for {users} workstations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Guaranteed &lt;15 min emergency SLA response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>On-site Nairobi engineers & remote helpdesk</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Quarterly vCIO strategic IT roadmapping reviews</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleApplyQuote}
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#F26B21] hover:bg-[#d95610] text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <span>Lock In This Custom Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCostCalculator;
