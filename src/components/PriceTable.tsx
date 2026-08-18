import React from 'react';
import { Plane, Tag, Info, Phone, MessageCircle } from 'lucide-react';
import { AIRPORT_GUIDE_PRICES, PRICING_DISCLAIMER } from '../data/pricingData';
import { BUSINESS_CONFIG, getWhatsAppBookingLink } from '../config/business';

interface PriceTableProps {
  onNavigate?: (path: string, state?: Record<string, unknown>) => void;
  showCTA?: boolean;
}

export const PriceTable: React.FC<PriceTableProps> = ({ onNavigate, showCTA = true }) => {
  return (
    <div id="airport-guide-prices-section" className="w-full">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">
              <Tag className="w-3 h-3" />
              <span>Transparent Rates</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Airport Guide Prices
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Standard saloon vehicle guide rates from Thame & surrounding areas to major UK airports.
            </p>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-xs bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1.5 rounded-lg">
              24/7 Transfers
            </span>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider">
                <th className="py-3.5 px-4 sm:px-6">Pickup Location</th>
                <th className="py-3.5 px-4 sm:px-6">Destination Airport</th>
                <th className="py-3.5 px-4 sm:px-6 text-right">Guide Price</th>
                <th className="py-3.5 px-4 sm:px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-800">
              {AIRPORT_GUIDE_PRICES.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-emerald-50/50 transition-colors group"
                >
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">
                    {item.from}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 flex items-center gap-2 text-slate-700">
                    <Plane className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{item.to}</span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-right font-bold text-slate-900 text-base">
                    <span className="text-emerald-600 font-extrabold">{item.priceRange}</span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-center">
                    <a
                      href={getWhatsAppBookingLink(
                        `Hello O2Taxi, I would like to book a transfer from ${item.from} to ${item.to}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold text-xs transition-colors"
                      title="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>Book</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Disclaimer Box */}
        <div className="p-4 sm:p-5 bg-emerald-50/80 border-t border-emerald-200/60 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
          <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-emerald-950">Important Notice:</p>
            <p className="text-emerald-900 mt-0.5">{PRICING_DISCLAIMER}</p>
          </div>
        </div>
      </div>

      {showCTA && (
        <div className="mt-6 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-white">Need a quote for another airport or vehicle size?</h4>
            <p className="text-xs text-slate-400 mt-0.5">
              We cater for Stansted, Luton, Birmingham, Gatwick, Heathrow, and London City with MPVs and saloons.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={BUSINESS_CONFIG.phoneHref}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>
            {onNavigate && (
              <a
                href="/book-your-taxi/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/book-your-taxi/', { journeyType: 'Airport Transfer' });
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-xs sm:text-sm"
              >
                <span>Book Airport Taxi</span>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
