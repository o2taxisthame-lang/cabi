import React from 'react';
import {
  Plane,
  Clock,
  ShieldCheck,
  Luggage,
  Users,
  Calendar,
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PriceTable } from '../components/PriceTable';
import { AirportCardGrid } from '../components/AirportCard';
import { FAQSection } from '../components/FAQSection';

interface AirportTransfersPageProps {
  onNavigate: (path: string, state?: Record<string, unknown>) => void;
}

export const AirportTransfersPage: React.FC<AirportTransfersPageProps> = ({ onNavigate }) => {
  const highlights = [
    {
      title: 'Flight Tracking',
      desc: 'We monitor live flight arrival times to adjust your pickup schedule in case of delays or early landings.',
      icon: Plane,
    },
    {
      title: 'Meet and Greet',
      desc: 'Our driver meets you inside the terminal arrival hall with a personalized name board to guide you directly to the car.',
      icon: Users,
    },
    {
      title: 'Luggage Assistance',
      desc: 'Full assistance with your heavy bags, suitcases, and child equipment from your doorstep to the airport terminal.',
      icon: Luggage,
    },
    {
      title: 'Comfortable Vehicles',
      desc: 'Clean, spacious, climate-controlled saloons and estate vehicles offering ample room for passengers and luggage.',
      icon: ShieldCheck,
    },
    {
      title: '24/7 Service',
      desc: 'Round-the-clock availability for early dawn departures, red-eye arrivals, and late-night scheduled flights.',
      icon: Clock,
    },
    {
      title: 'Pre-Booking',
      desc: 'Secure your airport travel weeks or days in advance for complete peace of mind before your holiday or business trip.',
      icon: Calendar,
    },
  ];

  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: 'Airport Transfers' }]} onNavigate={onNavigate} />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold">
              <Plane className="w-3.5 h-3.5" />
              24/7 UK Airport Travel
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Reliable Airport Transfers from{' '}
              <span className="text-emerald-400">Thame & Oxfordshire</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              O2Taxi provides dedicated, round-the-clock airport transportation between Thame, Oxfordshire, and all major UK international airports. Enjoy a comfortable, punctual, stress-free start and finish to your journey.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="/book-your-taxi/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/book-your-taxi/', { journeyType: 'Airport Transfer' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Airport Taxi</span>
              </a>
              <a
                href={BUSINESS_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>
              <a
                href={BUSINESS_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Prices Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Transparent Pricing
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Airport Guide Prices
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Estimated saloon fare ranges from Thame, Haddenham, Chinnor, and surrounding villages.
            </p>
          </div>

          <PriceTable onNavigate={onNavigate} showCTA={false} />
        </div>
      </section>

      {/* Key Airport Transfer Features */}
      <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Why Travel With Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Airport Transfer Highlights
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Designed to take the anxiety and hassle out of airport travel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:border-emerald-500 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Covered Airports Grid */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Destinations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Major UK Airports Covered
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Direct point-to-terminal travel to London and regional international airports.
            </p>
          </div>

          <AirportCardGrid onNavigate={onNavigate} />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />
    </div>
  );
};
