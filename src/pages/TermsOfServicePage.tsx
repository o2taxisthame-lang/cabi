import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_CONFIG } from '../config/business';
import { PRICING_DISCLAIMER } from '../data/pricingData';

interface TermsOfServicePageProps {
  onNavigate: (path: string) => void;
}

export const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-slate-50">
      <Breadcrumbs items={[{ label: 'Terms of Service' }]} onNavigate={onNavigate} />

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-6 sm:p-12 rounded-2xl border border-slate-200 shadow-xs">
          <div className="border-b border-slate-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Terms & Conditions
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Last updated: August 2026 • O2Taxi, Thame, Oxfordshire
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-700">
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. Booking & Quotations</h2>
              <p>
                By requesting a journey with {BUSINESS_CONFIG.name} via telephone, WhatsApp, email, or our online enquiry form, you agree to these Terms of Service.
              </p>
              <p className="mt-2">
                All bookings made online or via messages are subject to driver availability and dispatch confirmation. A submitted web enquiry does not constitute a guaranteed booking until confirmed by our dispatch team.
              </p>
              <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900">
                <strong>Pricing Note:</strong> {PRICING_DISCLAIMER}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">2. Passenger Responsibilities</h2>
              <p>
                Passengers are requested to be ready at the designated pickup location at the agreed pickup time. For airport arrivals, passengers must supply correct flight numbers so flight tracking can be applied.
              </p>
              <p className="mt-2">
                Passengers are responsible for ensuring that the vehicle category requested (Saloon, Estate, or MPV) accommodates their full group size and luggage volume safely.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">3. Cancellations & Modifications</h2>
              <p>
                If you need to amend or cancel a booking, please contact O2Taxi via phone on {BUSINESS_CONFIG.phone} or via WhatsApp as soon as possible. Reasonable notice helps us reassign drivers efficiently.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">4. Delays & Circumstances Beyond Control</h2>
              <p>
                {BUSINESS_CONFIG.name} will make every reasonable effort to ensure prompt collection and arrival. However, we cannot be held liable for delays resulting from severe traffic congestion, road closures, severe weather events, mechanical breakdowns, or unforeseen circumstances beyond our reasonable control.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">5. Conduct & Safety</h2>
              <p>
                We maintain a strict smoke-free and vape-free policy across all vehicles. We reserve the right to refuse carriage to any passenger who behaves in a threatening, abusive, or unsafe manner towards our drivers or other passengers.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-2">6. Contact Information</h2>
              <p>For any inquiries regarding these terms, please contact O2Taxi directly:</p>
              <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-1">
                <p className="font-bold text-slate-900">{BUSINESS_CONFIG.name}</p>
                <p>Location: {BUSINESS_CONFIG.location}</p>
                <p>Phone: <a href={BUSINESS_CONFIG.phoneHref} className="text-emerald-700 hover:underline">{BUSINESS_CONFIG.phone}</a></p>
                <p>Email: <a href={BUSINESS_CONFIG.emailHref} className="text-emerald-700 hover:underline">{BUSINESS_CONFIG.email}</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
