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

  const lockupHeights = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-16',
    xl: 'h-20',
  };

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  return (
    <div
      className={`inline-flex ${
        layout === 'vertical' ? 'flex-col items-center text-center' : 'items-center'
      } gap-3 select-none ${className}`}
    >
      {/* Brand logo artwork (new Clearcom Enterprises lockup) */}
      <span
        className={`inline-flex flex-shrink-0 items-center ${
          isDark && showText ? 'bg-white px-3 py-2.5 rounded-2xl shadow-xs' : ''
        }`}
      >
        <img
          src={showText ? '/logo-lockup.png' : '/logo-mark.png'}
          alt="Clearcom Enterprises LTD"
          width={showText ? 900 : 512}
          height={showText ? 550 : 512}
          className={`${showText ? lockupHeights[size] : iconSizes[size]} w-auto transition-transform duration-300 hover:scale-105`}
        />
      </span>

      {showTagline && (
        <span className="text-[11px] text-slate-500 font-medium italic">
          Effortless IT Support, like it never even happened
        </span>
      )}
    </div>
  );
};

export default ClearcomLogo;
