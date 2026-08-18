import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface MobileBookingBarProps {
  onNavigate: (path: string) => void;
}

export const MobileBookingBar: React.FC<MobileBookingBarProps> = ({ onNavigate }) => {
  const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate('/book-your-taxi/');
  };

  return (
    <aside
      id="mobile-sticky-booking-bar"
      aria-label="Quick booking actions"
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] px-3 py-2.5"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          id="sticky-call-btn"
          href={BUSINESS_CONFIG.phoneHref}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all active:scale-95 shadow-sm"
          aria-label={`Call O2Taxi on ${BUSINESS_CONFIG.phone}`}
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="truncate">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          id="sticky-whatsapp-btn"
          href={BUSINESS_CONFIG.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition-all active:scale-95 shadow-sm"
          aria-label="WhatsApp O2Taxi"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* Book Button */}
        <a
          id="sticky-book-btn"
          href="/book-your-taxi/"
          onClick={handleBookClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 font-bold text-xs transition-all active:scale-95"
          aria-label="Book your taxi online"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="truncate">Book</span>
        </a>
      </div>
    </aside>
  );
};
