import React from 'react';

interface PartnerLogoProps {
  name: string;
  className?: string;
}

export const PartnerLogoSvg: React.FC<PartnerLogoProps> = ({ name, className = 'h-9 max-w-[150px]' }) => {
  switch (name) {
    case 'Microsoft':
      return (
        <div className={`flex items-center gap-2.5 font-medium select-none ${className}`}>
          {/* 4 Colored Squares */}
          <div className="grid grid-cols-2 gap-1 w-5 h-5 flex-shrink-0">
            <span className="bg-[#F25022] w-2 h-2 rounded-[0.5px]" />
            <span className="bg-[#7FBA00] w-2 h-2 rounded-[0.5px]" />
            <span className="bg-[#00A4EF] w-2 h-2 rounded-[0.5px]" />
            <span className="bg-[#FFB900] w-2 h-2 rounded-[0.5px]" />
          </div>
          <span className="text-slate-600 font-semibold text-lg tracking-tight font-sans">
            Microsoft
          </span>
        </div>
      );

    case 'Lenovo':
      return (
        <div className={`flex items-center select-none ${className}`}>
          <div className="bg-[#E2231A] text-white font-extrabold px-3 py-1 text-base tracking-tighter uppercase font-sans">
            Lenovo
          </div>
        </div>
      );

    case 'Hikvision':
      return (
        <div className={`flex items-center select-none ${className}`}>
          <span className="text-[#E60012] font-black italic text-lg tracking-wider font-sans">
            HIKVISION<sup className="text-[9px] font-normal not-italic ml-0.5">®</sup>
          </span>
        </div>
      );

    case 'Acronis':
      return (
        <div className={`flex items-center select-none ${className}`}>
          <span className="text-[#002D62] font-extrabold text-xl tracking-tight font-sans">
            Acronis
          </span>
        </div>
      );

    case 'Kaseya':
      return (
        <div className={`flex items-center gap-1.5 select-none ${className}`}>
          {/* Folded origami blue K logo */}
          <svg viewBox="0 0 40 40" className="w-6 h-6 flex-shrink-0" fill="none">
            <path d="M12 6L24 18L12 30V6Z" fill="#0072CE" />
            <path d="M26 14L34 6H24L18 12L26 14Z" fill="#0099DE" />
            <path d="M18 24L24 30H34L26 22L18 24Z" fill="#005A9C" />
          </svg>
          <span className="text-slate-900 font-black text-xl tracking-tight font-sans">
            Kaseya
          </span>
        </div>
      );

    case 'Yeastar':
      return (
        <div className={`flex items-center gap-1.5 select-none ${className}`}>
          {/* 4-leaf cyan & amber clover emblem */}
          <svg viewBox="0 0 32 32" className="w-6 h-6 flex-shrink-0">
            <ellipse cx="16" cy="7" rx="4" ry="6" fill="#0099DE" />
            <ellipse cx="25" cy="16" rx="6" ry="4" fill="#0099DE" />
            <ellipse cx="16" cy="25" rx="4" ry="6" fill="#0099DE" />
            <ellipse cx="7" cy="16" rx="6" ry="4" fill="#FDB913" />
          </svg>
          <span className="text-slate-800 font-black text-xl tracking-tight font-sans">
            Yeastar
          </span>
        </div>
      );

    case 'Bitdefender':
      return (
        <div className={`flex flex-col items-start select-none ${className}`}>
          {/* Iconic red dragon curved flame flourish */}
          <svg viewBox="0 0 100 24" className="w-16 h-3.5" fill="none">
            <path
              d="M2 18 C25 18 55 12 75 4 C85 0 95 8 98 12 C88 10 75 14 60 16 C40 18 20 22 2 18 Z"
              fill="#ED1C24"
            />
          </svg>
          <span className="text-slate-900 font-extrabold text-base tracking-tight font-sans -mt-0.5">
            Bitdefender
          </span>
        </div>
      );

    case 'Fanvil':
      return (
        <div className={`flex items-center select-none ${className}`}>
          {/* Red bold Fanvil with striped 'a' */}
          <div className="flex items-baseline text-[#ED1C24] font-black text-2xl tracking-tighter uppercase font-sans">
            <span>F</span>
            {/* The striped 'a' */}
            <span className="relative inline-block mx-0.5">
              <span>A</span>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-white" />
              <span className="absolute left-0 top-1/3 -translate-y-1/2 w-full h-[1.5px] bg-white" />
            </span>
            <span>NVIL</span>
          </div>
        </div>
      );

    case 'Logitech':
      return (
        <div className={`flex items-center gap-1.5 select-none ${className}`}>
          <span className="text-slate-900 font-bold text-lg tracking-tight font-sans">
            logitech
          </span>
          {/* Cyan Logitech G shape */}
          <svg viewBox="0 0 32 32" className="w-6 h-6 flex-shrink-0" fill="none">
            <path
              d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C21.6 28 26.3 24.2 27.6 19H16V13H31.5C31.8 14 32 15 32 16C32 24.84 24.84 32 16 32C7.16 32 0 24.84 0 16C0 7.16 7.16 0 16 0C21.4 0 26.2 2.7 29 6.8L25.3 10.5C23.3 7.5 19.9 5.5 16 4Z"
              fill="#00B8FC"
            />
          </svg>
        </div>
      );

    case 'Sophos':
      return (
        <div className={`flex items-center select-none ${className}`}>
          <span className="text-[#007AC2] font-black text-xl tracking-wider uppercase font-sans">
            SOPHOS
          </span>
        </div>
      );

    case 'TP-Link':
      return (
        <div className={`flex items-center gap-1.5 select-none ${className}`}>
          {/* Turquoise tp circle emblem */}
          <svg viewBox="0 0 32 32" className="w-6 h-6 flex-shrink-0" fill="none">
            <path
              d="M8 8 C8 4 12 4 16 4 C20 4 24 8 24 14 C24 20 20 24 16 24 C13 24 11 22 10 20 L10 28 L6 28 L6 8 Z"
              stroke="#00AFB5"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <span className="text-slate-900 font-bold text-lg tracking-tight font-sans">
            tp-link
          </span>
        </div>
      );

    case '3CX':
      return (
        <div className={`flex items-baseline select-none font-sans ${className}`}>
          <span className="text-[#00A8E8] font-black text-2xl tracking-tighter">
            3
          </span>
          <span className="text-[#2E363E] font-black text-2xl tracking-tighter">
            CX
          </span>
          <sup className="text-[10px] text-slate-500 font-semibold ml-0.5">®</sup>
        </div>
      );

    case 'Ubiquiti':
      return (
        <div className={`flex flex-col items-center select-none ${className}`}>
          <div className="flex items-center gap-1">
            {/* Ubiquiti 'U' with cyan digital dots */}
            <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none">
              <path
                d="M10 8V20C10 24.4 13.6 28 18 28C22.4 28 26 24.4 26 20V8H22V20C22 22.2 20.2 24 18 24C15.8 24 14 22.2 14 20V8H10Z"
                fill="#1E293B"
              />
              <circle cx="8" cy="6" r="1.5" fill="#00A4EF" />
              <circle cx="12" cy="4" r="1.2" fill="#00A4EF" />
              <circle cx="6" cy="10" r="1.2" fill="#00A4EF" />
              <circle cx="9" cy="14" r="1" fill="#00A4EF" />
            </svg>
          </div>
          <span className="text-[9px] font-black tracking-widest text-slate-800 uppercase mt-0.5 font-sans">
            UBIQUITI NETWORKS
          </span>
        </div>
      );

    case 'Dell':
      return (
        <div className={`flex items-center justify-center select-none ${className}`}>
          <div className="w-12 h-12 rounded-full border-[2.5px] border-[#007DB8] flex items-center justify-center bg-white">
            <span className="text-[#007DB8] font-black text-xs tracking-tighter flex items-center">
              D<span className="inline-block transform -rotate-20 -mx-0.5">E</span>LL
            </span>
          </div>
        </div>
      );

    case 'HP':
      return (
        <div className={`flex items-center justify-center select-none ${className}`}>
          <div className="w-11 h-11 rounded-full bg-[#0096D6] flex items-center justify-center text-white shadow-xs">
            <span className="font-bold text-xl italic tracking-tighter font-serif">
              hp
            </span>
          </div>
        </div>
      );

    default:
      return (
        <span className="text-sm font-bold text-slate-800">{name}</span>
      );
  }
};

export default PartnerLogoSvg;
