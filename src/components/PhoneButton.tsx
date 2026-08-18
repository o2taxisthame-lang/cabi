import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface PhoneButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark' | 'header';
  className?: string;
  showText?: boolean;
  textPrefix?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PhoneButton: React.FC<PhoneButtonProps> = ({
  variant = 'primary',
  className = '',
  showText = true,
  textPrefix = 'Call',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-base gap-2',
    lg: 'px-6 py-3 text-lg gap-2.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm active:scale-[0.98]',
    secondary:
      'bg-slate-900 hover:bg-slate-800 text-white font-medium shadow-sm active:scale-[0.98]',
    outline:
      'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold active:scale-[0.98]',
    dark:
      'bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 font-semibold active:scale-[0.98]',
    header:
      'bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm active:scale-[0.98]',
  }[variant];

  return (
    <a
      id={`phone-btn-${variant}`}
      href={BUSINESS_CONFIG.phoneHref}
      className={`inline-flex items-center justify-center rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 whitespace-nowrap cursor-pointer ${sizeClasses} ${variantClasses} ${className}`}
      aria-label={`Call O2Taxi at ${BUSINESS_CONFIG.phone}`}
    >
      <Phone className="w-4 h-4 flex-shrink-0 animate-pulse" />
      {showText && (
        <span>
          {textPrefix ? `${textPrefix} ` : ''}
          <strong className="font-bold">{BUSINESS_CONFIG.phone}</strong>
        </span>
      )}
    </a>
  );
};
