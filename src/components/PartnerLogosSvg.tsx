import React from 'react';

interface PartnerLogoProps {
  name: string;
  className?: string;
}

export const PartnerLogoSvg: React.FC<PartnerLogoProps> = ({ name, className = '' }) => {
  switch (name) {
    // 1. Ubiquiti Networks
    case 'Ubiquiti':
      return (
        <div className={`inline-flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/partners/ubiquiti.png"
            alt="Ubiquiti Networks"
            className="h-10 sm:h-11 max-w-[140px] object-contain"
          />
        </div>
      );

    // 2. TP-Link
    case 'TP-Link':
      return (
        <div className={`inline-flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/partners/tp-link.png"
            alt="TP-Link"
            className="h-9 sm:h-10 max-w-[140px] object-contain"
          />
        </div>
      );

    // 3. Logitech
    case 'Logitech':
      return (
        <div className={`inline-flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/partners/logitech.png"
            alt="Logitech"
            className="h-7 sm:h-8 max-w-[130px] object-contain"
          />
        </div>
      );

    // 4. HP Business Partner
    case 'HP':
      return (
        <div className={`inline-flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/partners/hp.png"
            alt="HP Business Partner"
            className="h-9 sm:h-10 max-w-[140px] object-contain"
          />
        </div>
      );

    // 5. Hikvision Certified Partner
    case 'Hikvision':
      return (
        <div className={`inline-flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/partners/hikvision.png"
            alt="Hikvision Certified Partner"
            className="h-8 sm:h-9 max-w-[160px] w-auto object-contain"
          />
        </div>
      );

    // 6. Fanvil
    case 'Fanvil':
      return (
        <div className={`inline-flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/partners/fanvil.png"
            alt="Fanvil"
            className="h-8 sm:h-9 max-w-[140px] object-contain"
          />
        </div>
      );

    // 7. VMware Partner (Boxed)
    case 'VMware':
      return (
        <div className={`inline-flex flex-col items-center justify-center bg-white border border-slate-400/80 rounded-[2px] px-3 py-1 shadow-[0_1px_2px_rgba(0,0,0,0.04)] select-none ${className}`}>
          <span className="text-slate-900 font-extrabold text-base tracking-tight lowercase font-sans leading-none">
            vmware<sup className="text-[7px] font-normal not-italic ml-0.5">®</sup>
          </span>
          <span className="text-[9px] font-bold text-slate-800 tracking-wider uppercase font-sans mt-0.5 leading-none">
            PARTNER
          </span>
        </div>
      );

    // 8. Yeastar Certified Partner
    case 'Yeastar':
      return (
        <div className={`inline-flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/partners/yeastar.png"
            alt="Yeastar Certified Partner"
            className="h-10 sm:h-11 max-w-[140px] object-contain"
          />
        </div>
      );

    // 9. Microsoft Cloud Solution Provider (Boxed)
    case 'Microsoft':
      return (
        <div className={`inline-flex items-center justify-center gap-2 bg-white border border-slate-400/80 rounded-[2px] px-3 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] select-none ${className}`}>
          <div className="grid grid-cols-2 gap-[2px] w-5 h-5 flex-shrink-0">
            <span className="bg-[#F25022] w-2.5 h-2.5" />
            <span className="bg-[#7FBA00] w-2.5 h-2.5" />
            <span className="bg-[#00A4EF] w-2.5 h-2.5" />
            <span className="bg-[#FFB900] w-2.5 h-2.5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-slate-700 font-bold text-sm tracking-tight font-sans leading-tight">
              Microsoft
            </span>
            <span className="text-slate-500 font-medium text-[8px] tracking-tight leading-tight">
              Cloud Solution Provider
            </span>
          </div>
        </div>
      );

    // 10. 3CX Partner (Boxed with Blue Bar)
    case '3CX':
      return (
        <div className={`inline-flex flex-col items-center justify-center bg-white border border-slate-400/80 rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.04)] select-none overflow-hidden ${className}`}>
          <div className="px-3 pt-1 pb-0.5 flex items-baseline">
            <span className="text-[#00A8E8] font-black text-xl tracking-tighter">
              3
            </span>
            <span className="text-[#2E363E] font-black text-xl tracking-tighter">
              CX
            </span>
            <sup className="text-[7px] text-slate-500 font-semibold ml-0.5">®</sup>
          </div>
          <div className="w-full bg-[#00A8E8] text-white text-center py-[2px] px-3">
            <span className="text-[8px] font-extrabold uppercase tracking-widest leading-none block font-sans">
              PARTNER
            </span>
          </div>
        </div>
      );

    // 11. ESET (Teal Capsule Pill)
    case 'ESET':
      return (
        <div className={`inline-flex items-center border-[2.5px] border-[#00828A] rounded-full overflow-hidden select-none shadow-xs ${className}`}>
          <div className="bg-white text-[#00828A] font-black text-base px-2.5 py-0.5 lowercase font-sans">
            es
          </div>
          <div className="bg-[#00828A] text-white font-black text-base px-2.5 py-0.5 uppercase font-sans">
            eT
          </div>
        </div>
      );

    // 12. Sophos Partner
    case 'Sophos':
      return (
        <div className={`inline-flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/partners/sophos.png"
            alt="Sophos Partner"
            className="h-9 sm:h-10 max-w-[140px] object-contain"
          />
        </div>
      );

    // 13. Bitdefender
    case 'Bitdefender':
      return (
        <div className={`inline-flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/partners/bitdefender.png"
            alt="Bitdefender"
            className="h-8 sm:h-9 max-w-[140px] object-contain"
          />
        </div>
      );

    // 14. Lenovo Business Partner Classic (Red Square + Black Vertical Lenovo)
    case 'Lenovo':
      return (
        <div className={`inline-flex items-stretch border border-slate-400/80 rounded-[2px] overflow-hidden select-none shadow-[0_1px_2px_rgba(0,0,0,0.04)] ${className}`}>
          <div className="bg-[#E2231A] text-white p-1.5 flex flex-col justify-between min-w-[70px]">
            <div className="text-[8.5px] font-bold leading-tight font-sans">
              <div>Business</div>
              <div>Partner</div>
            </div>
            <div className="text-[7px] font-medium text-white/80 mt-1">
              Classic
            </div>
          </div>
          <div className="bg-black text-white px-1 py-1 flex items-center justify-center">
            <span className="text-[9px] font-black uppercase tracking-tight [writing-mode:vertical-lr] transform rotate-180">
              Lenovo
            </span>
          </div>
        </div>
      );

    // 15. Yealink
    case 'Yealink':
      return (
        <div className={`inline-flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/partners/yealink.png"
            alt="Yealink"
            className="h-8 sm:h-9 max-w-[140px] object-contain"
          />
        </div>
      );

    // 16. Acronis
    case 'Acronis':
      return (
        <div className={`inline-flex items-center justify-center select-none ${className}`}>
          <img
            src="/images/partners/acronis.png"
            alt="Acronis"
            className="h-8 sm:h-9 max-w-[140px] object-contain"
          />
        </div>
      );

    default:
      return (
        <span className="text-sm font-bold text-slate-800">{name}</span>
      );
  }
};

export default PartnerLogoSvg;
