import React from 'react';
import { ShieldCheck, Mail, Phone } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_CONFIG } from '../config/business';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-slate-50">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} onNavigate={onNavigate} />

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-6 sm:p-12 rounded-2xl border border-slate-200 shadow-xs">
          <div className="border-b border-slate-200 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Legal Information
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 mt-2">
              Last updated: August 2026 • O2Taxi, Thame, Oxfordshire
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-700">
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. Overview</h2>
              <p>
                {BUSINESS_CONFIG.name} ("we", "our", or "us"), operating in {BUSINESS_CONFIG.location}, is committed to protecting and respecting your personal privacy in accordance with applicable UK data protection laws (including the UK GDPR and Data Protection Act 2018).
              </p>
              <p className="mt-2">
                This Privacy Policy explains how we collect, use, store, and protect any personal information that you provide when you use our website ({BUSINESS_CONFIG.website}), book a taxi journey, or contact us via telephone, WhatsApp, or email.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">2. Information We Collect</h2>
              <p>When you make an enquiry or book a transport service with O2Taxi, we may collect the following details:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Full name and contact telephone/mobile number</li>
                <li>Email address</li>
                <li>Pickup and destination addresses, postcodes, or terminal details</li>
                <li>Date, pickup time, and flight numbers for airport transfers</li>
                <li>Number of passengers, luggage volume, and any special assistance notes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">3. How We Use Your Information</h2>
              <p>We process your personal information strictly for legitimate operational purposes, including:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Fulfilling, confirming, and dispatching your requested taxi journey</li>
                <li>Contacting you regarding journey scheduling, driver arrival, or flight delays</li>
                <li>Providing price quotations and invoicing for business or personal accounts</li>
                <li>Responding directly to customer service queries submitted via phone, WhatsApp, or web form</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">4. Data Sharing & Security</h2>
              <p>
                We do not sell, rent, or trade your personal information to third-party marketing companies. Your information is only shared with our assigned drivers for the sole purpose of completing your transportation safely and punctually. We implement appropriate physical, electronic, and administrative procedures to safeguard your data.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">5. Data Retention</h2>
              <p>
                We retain booking records only for as long as necessary to fulfill transport requirements, comply with licensing authority regulations, and satisfy standard accounting and tax obligations.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">6. Your Rights</h2>
              <p>
                Under UK data protection law, you have the right to request access to the personal data we hold about you, request corrections to inaccurate details, or request deletion where applicable.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-2">7. Contact Us About Your Privacy</h2>
              <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact:</p>
              <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-1">
                <p className="font-bold text-slate-900">{BUSINESS_CONFIG.name}</p>
                <p>Location: {BUSINESS_CONFIG.location}</p>
                <p>Email: <a href={BUSINESS_CONFIG.emailHref} className="text-emerald-700 hover:underline">{BUSINESS_CONFIG.email}</a></p>
                <p>Telephone: <a href={BUSINESS_CONFIG.phoneHref} className="text-emerald-700 hover:underline">{BUSINESS_CONFIG.phone}</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
