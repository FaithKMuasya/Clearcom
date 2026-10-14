import React from 'react';

interface ClearcomLogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' for white/light bg, 'dark' for navy/dark bg
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showTagline?: boolean;
  layout?: 'horizontal' | 'vertical';
}

export const ClearcomLogo: React.FC<ClearcomLogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  showText = true,
  showTagline = false,
  layout = 'horizontal',
}) => {
  const isDark = variant === 'dark';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const subtitleSizes = {
    sm: 'text-[8px] tracking-[0.2em]',
    md: 'text-[9px] sm:text-[10px] tracking-[0.25em]',
    lg: 'text-xs tracking-[0.3em]',
    xl: 'text-sm tracking-[0.35em]',
  };

  return (
    <div
      className={`inline-flex ${
        layout === 'vertical' ? 'flex-col items-center text-center' : 'items-center'
      } gap-3 select-none ${className}`}
    >
      {/* Exact Brand Icon from Screenshot */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`} aria-hidden="true">
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs transition-transform duration-300 hover:scale-105"
        >
          {/* Outer Orange Speech Bubble Outline */}
          <path
            d="M60 12 C33.5 12 12 33.5 12 60 C12 73.5 17.5 85.5 26.5 94.2 L18 114 L42.5 106 C48 107.4 53.8 108 60 108 C86.5 108 108 86.5 108 60 C108 33.5 86.5 12 60 12 Z"
            stroke="#F26B21"
            strokeWidth="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={isDark ? '#041B32' : '#FFFFFF'}
          />

          {/* Inner Orange Concentric 'C' Arc */}
          <path
            d="M74 44 C69.5 38 62.5 34 54 34 C40 34 29 45 29 59 C29 73 40 84 54 84 C65 84 73 77 76 68"
            stroke="#F26B21"
            strokeWidth="8.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Cyan/Blue Origin Signal Dot at top-right */}
          <circle cx="74" cy="44" r="4.5" fill="#00A8E8" />

          {/* Blue Concentric Signal Wave Arcs emanating top-right */}
          <path
            d="M84 36 C89 42 91 50 91 58"
            stroke="#00A8E8"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M96 28 C103 36 106 47 106 58"
            stroke="#00A8E8"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Brand Typography Wordmark matching screenshot */}
      {showText && (
        <div className={`flex flex-col leading-none ${layout === 'vertical' ? 'items-center mt-1' : ''}`}>
          <div className="flex items-baseline">
            <span
              className={`font-black font-['Poppins'] tracking-tight ${titleSizes[size]} ${
                isDark ? 'text-white' : 'text-[#0B6BB5]'
              }`}
            >
              CLEARCOM
            </span>
          </div>

          <span
            className={`font-bold font-['Inter'] uppercase mt-0.5 ${subtitleSizes[size]} ${
              isDark ? 'text-orange-400' : 'text-[#08365F]'
            }`}
          >
            ENTERPRISES LTD
          </span>

          {showTagline && (
            <span className="text-[11px] text-slate-500 font-medium italic mt-1">
              Effortless IT Support, like it never even happened
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ClearcomLogo;
