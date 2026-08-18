import React from 'react';
import { Plane, Check, ArrowRight } from 'lucide-react';
import { AIRPORTS_COVERED } from '../data/pricingData';
import { getWhatsAppBookingLink } from '../config/business';

interface AirportCardProps {
  onNavigate?: (path: string, state?: Record<string, unknown>) => void;
}

export const AirportCardGrid: React.FC<AirportCardProps> = ({ onNavigate }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {AIRPORTS_COVERED.map((airport) => (
        <div
          key={airport.code}
          className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-slate-900 text-emerald-400">
                {airport.code}
              </span>
              <span className="text-xs text-slate-500 font-medium">{airport.terminals}</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Plane className="w-4 h-4 text-emerald-600" />
              <span>{airport.name}</span>
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm mt-2.5 leading-relaxed">
              {airport.description}
            </p>

            <ul className="mt-4 space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Flight arrival tracking included</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Meet & greet inside terminal</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Luggage loading assistance</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <a
              href={getWhatsAppBookingLink(
                `Hello O2Taxi, I would like to book a transfer to ${airport.name} (${airport.code}).`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800"
            >
              WhatsApp Quote
            </a>

            {onNavigate && (
              <a
                href="/book-your-taxi/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/book-your-taxi/', {
                    destination: `${airport.name} (${airport.code})`,
                    journeyType: 'Airport Transfer',
                  });
                }}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-emerald-700"
              >
                <span>Book Transfer</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
