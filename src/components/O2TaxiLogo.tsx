import React from 'react';

interface O2TaxiLogoProps {
  variant?: 'badge' | 'full' | 'inline' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  theme?: 'dark' | 'light';
  className?: string;
  showSubtext?: boolean;
}

export const O2TaxiLogo: React.FC<O2TaxiLogoProps> = ({
  variant = 'full',
  size = 'md',
  theme = 'dark',
  className = '',
  showSubtext = true,
}) => {
  // Dimensions for the O-badge
  const badgeSizes = {
    sm: { width: 32, height: 32, fontSize2: 18, fontSizeTaxi: 5 },
    md: { width: 44, height: 44, fontSize2: 24, fontSizeTaxi: 6.5 },
    lg: { width: 56, height: 56, fontSize2: 30, fontSizeTaxi: 8 },
    xl: { width: 72, height: 72, fontSize2: 40, fontSizeTaxi: 10.5 },
    hero: { width: 110, height: 110, fontSize2: 60, fontSizeTaxi: 16 },
  };

  const currentSize = badgeSizes[size] || badgeSizes.md;

  const renderBadge = () => (
    <div
      className="relative flex-shrink-0 flex items-center justify-center transition-transform group-hover:scale-105"
      style={{ width: currentSize.width, height: currentSize.height }}
    >
      <svg
        viewBox="0 0 100 110"
        className="w-full h-full drop-shadow-sm select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle 3D gradient for premium depth */}
          <linearGradient id="o2greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E676" />
            <stop offset="40%" stopColor="#00C853" />
            <stop offset="100%" stopColor="#009624" />
          </linearGradient>
          <linearGradient id="taxiGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <filter id="badgeShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Outer Green 'O' Oval Loop */}
        <ellipse
          cx="50"
          cy="55"
          rx="46"
          ry="51"
          fill="url(#o2greenGrad)"
          filter="url(#badgeShadow)"
        />

        {/* Inner Clean White Oval Cutout */}
        <ellipse cx="50" cy="55" rx="25" ry="34" fill="#FFFFFF" />

        {/* Central Bold Black Numeral '2' */}
        <text
          x="50"
          y="61"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="38"
          fontWeight="900"
          fill="#0f172a"
          textAnchor="middle"
          letterSpacing="-1"
        >
          2
        </text>

        {/* Golden-Yellow Capitalized 'TAXI' Under the '2' */}
        <text
          x="50"
          y="76"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="10"
          fontWeight="900"
          fill="url(#taxiGoldGrad)"
          textAnchor="middle"
          letterSpacing="1.2"
        >
          TAXI
        </text>
      </svg>
    </div>
  );

  if (variant === 'badge') {
    return <div className={`inline-flex items-center ${className}`}>{renderBadge()}</div>;
  }

  const textColor =
    theme === 'dark'
      ? {
          brand: 'text-white',
          accent: 'text-emerald-400',
          sub: 'text-emerald-400/90',
        }
      : {
          brand: 'text-slate-950',
          accent: 'text-emerald-600',
          sub: 'text-emerald-700',
        };

  return (
    <div className={`inline-flex items-center gap-3 group ${className}`}>
      {renderBadge()}

      <div className="flex flex-col text-left leading-none">
        <div className="flex items-baseline gap-1">
          <span
            className={`font-black tracking-tight ${textColor.brand} ${
              size === 'sm'
                ? 'text-lg'
                : size === 'md'
                ? 'text-2xl'
                : size === 'lg'
                ? 'text-3xl'
                : 'text-4xl'
            }`}
          >
            O<span className={textColor.accent}>2</span>Taxi
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
        </div>

        {showSubtext && (
          <span
            className={`font-bold tracking-wider uppercase text-[10px] mt-1 ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Thame • Oxfordshire
          </span>
        )}
      </div>
    </div>
  );
};
