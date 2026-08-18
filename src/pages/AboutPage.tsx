import React from 'react';
import {
  Car,
  MapPin,
  Clock,
  ShieldCheck,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Plane,
  Train,
  Package,
  GraduationCap,
  Briefcase,
  Compass,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { GoogleReviewsAndMap, FacebookIcon } from '../components/GoogleReviewsAndMap';
import { ServiceAreas } from '../components/ServiceAreas';
import { O2TaxiLogo } from '../components/O2TaxiLogo';
import { Star, ExternalLink, Navigation } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string, state?: Record<string, unknown>) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const serviceHighlights = [
    { title: 'Local Taxi Journeys', desc: 'Door-to-door transportation across Thame and nearby Oxfordshire villages.', icon: Car },
    { title: 'Airport Transfers', desc: 'Dedicated 24/7 airport runs with flight tracking to Heathrow, Gatwick, Luton, Stansted, and Birmingham.', icon: Plane },
    { title: 'Long-Distance Travel', desc: 'Comfortable nationwide journeys across the UK with fixed pre-agreed quotes.', icon: Compass },
    { title: 'Train Station Transfers', desc: 'Timely transfers to Haddenham & Thame Parkway, Princes Risborough, and Oxford stations.', icon: Train },
    { title: 'Delivery Service', desc: 'Fast, secure courier transport for urgent parcels, documents, and packages.', icon: Package },
    { title: 'School Runs', desc: 'Safe, punctual daily school runs for local schools and colleges.', icon: GraduationCap },
    { title: 'Business Travel', desc: 'Professional, executive corporate transport for business meetings and client airport transfers.', icon: Briefcase },
  ];

  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: 'About O2Taxi' }]} onNavigate={onNavigate} />

      {/* Hero Header */}
      <section className="bg-slate-950 text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              Thame, Oxfordshire
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              About O2Taxi
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              O2Taxi is a professional local taxi service based in Thame, Oxfordshire. We are dedicated to providing fast, friendly, and dependable passenger transport 24 hours a day, 7 days a week.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: About O2Taxi Narrative */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Our Local Mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Dependable Passenger Transport in the Heart of Oxfordshire
              </h2>
              <p>
                Based in the historic market town of Thame, O2Taxi serves local residents, commuters, businesses, and visitors across Oxfordshire and Buckinghamshire borders. We understand the importance of punctuality and courteous service, whether you need a quick ride across town, a 4:00 AM airport pickup, or direct long-distance travel.
              </p>
              <p>
                Our drivers hold comprehensive local knowledge of Thame, Haddenham, Chinnor, Long Crendon, and surrounding countryside routes. This local familiarity ensures the most efficient routes and minimal delays.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-slate-800">
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>24/7 Availability</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Licensed Drivers</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Based in Thame, OX9</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <O2TaxiLogo variant="full" size="sm" theme="dark" />
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  24/7 Base
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">Direct Contact & Dispatch</h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                Speak directly with our team for quick bookings, quotes, or recurring transport arrangements.
              </p>

              <div className="space-y-3 pt-2 text-sm">
                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  <span className="text-xs text-slate-400 block">Phone (24 Hours):</span>
                  <a
                    href={BUSINESS_CONFIG.phoneHref}
                    className="text-emerald-400 font-bold text-base hover:underline"
                  >
                    {BUSINESS_CONFIG.phone}
                  </a>
                </div>

                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  <span className="text-xs text-slate-400 block">WhatsApp Booking:</span>
                  <a
                    href={BUSINESS_CONFIG.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-bold text-base hover:underline"
                  >
                    {BUSINESS_CONFIG.whatsappDisplay}
                  </a>
                </div>

                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  <span className="text-xs text-slate-400 block">Email Address:</span>
                  <a
                    href={BUSINESS_CONFIG.emailHref}
                    className="text-slate-200 hover:text-emerald-400 text-sm hover:underline"
                  >
                    {BUSINESS_CONFIG.email}
                  </a>
                </div>
              </div>

              <a
                href="/book-your-taxi/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/book-your-taxi/');
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow transition-all mt-4"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Taxi Online</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Services */}
      <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Our Services
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Comprehensive passenger transport solutions tailored for individuals, families, businesses, and groups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceHighlights.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:border-emerald-500 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">{srv.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose O2Taxi */}
      <WhyChooseUs />

      {/* Section 4: Reviews & Google Presence */}
      <GoogleReviewsAndMap />

      {/* Section 5: Our Service Area */}
      <ServiceAreas onNavigate={onNavigate} />

      {/* Section 6: Our Commitment */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            Punctuality & Safety
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Commitment to Every Passenger
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            At O2Taxi, every journey matters. We commit to prompt arrival times, spotless and comfortable vehicles, respectful communication, and clear, transparent pricing. We treat every customer with the care and professionalism expected of a premier local service.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/book-your-taxi/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/book-your-taxi/');
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Taxi</span>
            </a>
            <a
              href={BUSINESS_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call {BUSINESS_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
