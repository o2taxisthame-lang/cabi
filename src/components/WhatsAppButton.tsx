import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppBookingLink } from '../config/business';

interface WhatsAppButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'header' | 'green';
  className?: string;
  showText?: boolean;
  text?: string;
  customMessage?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  variant = 'green',
  className = '',
  showText = true,
  text = 'WhatsApp Us',
  customMessage,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-base gap-2',
    lg: 'px-6 py-3 text-lg gap-2.5',
  }[size];

  const variantClasses = {
    green:
      'bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm active:scale-[0.98]',
    primary:
      'bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm active:scale-[0.98]',
    secondary:
      'bg-slate-900 hover:bg-slate-800 text-white font-medium shadow-sm active:scale-[0.98]',
    outline:
      'border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold active:scale-[0.98]',
    header:
      'bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm active:scale-[0.98]',
  }[variant];

  const href = getWhatsAppBookingLink(customMessage);

  return (
    <a
      id="whatsapp-btn"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 whitespace-nowrap cursor-pointer ${sizeClasses} ${variantClasses} ${className}`}
      aria-label={`Chat with O2Taxi on WhatsApp at ${BUSINESS_CONFIG.whatsappDisplay}`}
    >
      <MessageCircle className="w-4 h-4 flex-shrink-0" />
      {showText && <span>{text}</span>}
    </a>
  );
};
