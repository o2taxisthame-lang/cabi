import React from 'react';
import {
  Car,
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  MapPin,
  ShieldCheck,
  Plane,
  ArrowRight,
  Sparkles,
  Award,
  Navigation,
  Train,
} from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppBookingLink } from '../config/business';
import { SERVICES_LIST } from '../data/servicesData';
import { O2TaxiLogo } from '../components/O2TaxiLogo';
import { QuickBookingHeroForm } from '../components/QuickBookingHeroForm';
import { ServiceCard } from '../components/ServiceCard';
import { PriceTable } from '../components/PriceTable';
import { ServiceAreas } from '../components/ServiceAreas';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { GoogleReviewsAndMap } from '../components/GoogleReviewsAndMap';
import { FAQSection } from '../components/FAQSection';

interface HomePageProps {
  onNavigate: (path: string, state?: Record<string, unknown>) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        id="hero-section"
        className="relative bg-slate-950 text-white pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 overflow-hidden border-b border-slate-800"
      >
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>24/7 Available in Thame & Surrounding Oxfordshire</span>
              </div>

              {/* Exact H1 requested */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Reliable Taxi Service in{' '}
                <span className="text-emerald-400">Thame, Oxfordshire</span>
              </h1>

              {/* Exact Supporting copy requested */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Fast, friendly and professional taxi service covering Thame, Oxfordshire and surrounding areas. Local taxis, airport transfers and long-distance travel.
              </p>

              {/* 3 Main Action Buttons requested */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                {/* Primary Button */}
                <a
                  id="hero-primary-book-btn"
                  href="/book-your-taxi/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/book-your-taxi/');
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Your Taxi</span>
                </a>

                {/* Secondary Button */}
                <a
                  id="hero-secondary-call-btn"
                  href={BUSINESS_CONFIG.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-base shadow-sm transition-all active:scale-[0.98]"
                >
                  <Phone className="w-5 h-5 text-emerald-400 animate-pulse" />
                  <span>Call {BUSINESS_CONFIG.phone}</span>
                </a>

                {/* Additional Button */}
                <a
                  id="hero-whatsapp-btn"
                  href={BUSINESS_CONFIG.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base shadow-sm transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Quick Feature Pill Row */}
              <div className="pt-6 border-t border-slate-900 grid grid-cols-3 gap-2 text-slate-400 text-xs font-medium max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>24/7 Service</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                  <Plane className="w-3.5 h-3.5 text-emerald-400" />
                  <span>All UK Airports</span>
                </div>
                <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Licensed & Vetted</span>
                </div>
              </div>
            </div>

            {/* Right Card / Visual Brand Showcase */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                {/* Subtle Emerald glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-center justify-between pb-4 border-b border-slate-800 relative z-10">
                  <div className="flex items-center gap-3">
                    <O2TaxiLogo variant="badge" size="sm" />
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-white block">
                        O2Taxi Dispatch
                      </span>
                      <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                        Available Now in Thame
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-md">
                    OX9 & 24/7
                  </span>
                </div>

                <div className="mt-5 space-y-3.5 text-sm relative z-10">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3 hover:border-emerald-500/30 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Plane className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Airport Transfers</h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Fixed prices to Heathrow, Gatwick, Luton & Birmingham with flight monitoring.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3 hover:border-emerald-500/30 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Train className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Station Transfers</h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Seamless pickups at Haddenham & Thame Parkway and Princes Risborough.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3 hover:border-emerald-500/30 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Direct Phone & WhatsApp</h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Call {BUSINESS_CONFIG.phone} or tap WhatsApp for immediate dispatch.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 relative z-10">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Licensed Drivers
                  </span>
                  <a
                    href="/about-us/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/about-us/');
                    }}
                    className="text-emerald-400 hover:text-emerald-300 font-semibold"
                  >
                    Learn about O2Taxi →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Area immediately below Hero */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <QuickBookingHeroForm onNavigate={onNavigate} />
      </section>

      {/* Services Grid Section */}
      <section id="services-overview-section" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-semibold text-xs mb-3">
              <Car className="w-3.5 h-3.5 text-emerald-700" />
              Comprehensive Transport
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Professional Taxi Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From everyday local trips in Thame to 24/7 airport transfers and corporate travel throughout the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_LIST.map((service) => (
              <ServiceCard key={service.id} service={service} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </section>

      {/* Airport Transfers & Guide Prices Highlight */}
      <section className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-semibold text-xs mb-3">
              <Plane className="w-3.5 h-3.5 text-emerald-700" />
              24/7 Airport Travel
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Airport Transfers & Guide Prices
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Punctual transfers to Heathrow, Gatwick, Luton, Stansted, Birmingham, and London City with flight tracking and meet & greet.
            </p>
          </div>

          <PriceTable onNavigate={onNavigate} />
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Google Reviews & Google Business Map */}
      <GoogleReviewsAndMap />

      {/* Service Areas */}
      <ServiceAreas onNavigate={onNavigate} />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final Call to Action Strip */}
      <section className="bg-slate-950 text-white py-12 sm:py-16 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Ready to Book Your Taxi in Thame?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Contact O2Taxi today for prompt local journeys, airport transfers, and long-distance travel. Available 24 hours a day, 7 days a week.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="/book-your-taxi/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/book-your-taxi/');
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Online</span>
            </a>
            <a
              href={BUSINESS_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm sm:text-base"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call {BUSINESS_CONFIG.phone}</span>
            </a>
            <a
              href={BUSINESS_CONFIG.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
