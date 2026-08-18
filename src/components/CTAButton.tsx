import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

interface CTAButtonProps {
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'green' | 'amber' | 'dark';
  className?: string;
  children: React.ReactNode;
  icon?: 'arrow' | 'calendar' | 'none';
  size?: 'sm' | 'md' | 'lg';
  id?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  onClick,
  variant = 'primary',
  className = '',
  children,
  icon = 'arrow',
  size = 'md',
  id,
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-base gap-2',
    lg: 'px-6 py-3 text-lg gap-2.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm active:scale-[0.98]',
    green:
      'bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm active:scale-[0.98]',
    amber:
      'bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm active:scale-[0.98]',
    secondary:
      'bg-slate-900 hover:bg-slate-800 text-white font-medium shadow-sm active:scale-[0.98]',
    outline:
      'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold active:scale-[0.98]',
    dark:
      'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-medium active:scale-[0.98]',
  }[variant];

  return (
    <a
      id={id || 'cta-btn'}
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 whitespace-nowrap cursor-pointer ${sizeClasses} ${variantClasses} ${className}`}
    >
      {icon === 'calendar' && <Calendar className="w-4 h-4 flex-shrink-0" />}
      <span>{children}</span>
      {icon === 'arrow' && <ArrowRight className="w-4 h-4 flex-shrink-0" />}
    </a>
  );
};
