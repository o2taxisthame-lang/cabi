import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BookingForm } from '../components/BookingForm';
import { Phone, MessageCircle, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { BookingFormData } from '../types';

interface BookingPageProps {
  initialValues?: Partial<BookingFormData>;
  onNavigate: (path: string, state?: Record<string, unknown>) => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({ initialValues, onNavigate }) => {
  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: 'Book Your Taxi' }]} onNavigate={onNavigate} />

      {/* Hero Header */}
      <section className="bg-slate-950 text-white py-10 sm:py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold">
              <Clock className="w-3.5 h-3.5" />
              24/7 Booking Request
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Book Your Taxi with O2Taxi
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Request a local journey, airport transfer, train station transfer, or long-distance UK trip. We will review your details and confirm your reservation promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Booking Area */}
      <section className="py-10 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingForm initialValues={initialValues} />

          {/* Direct Assistance Card below form */}
          <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Prefer to book immediately by phone or WhatsApp?
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                For urgent or immediate pickups in Thame, please call our 24-hour line directly.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href={BUSINESS_CONFIG.phoneHref}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>
              <a
                href={BUSINESS_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
