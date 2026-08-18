import React from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Calendar,
  ShieldCheck,
  Building,
  Star,
  ExternalLink,
  Navigation,
  ThumbsUp,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import { ServiceAreas } from '../components/ServiceAreas';
import { FacebookIcon } from '../components/GoogleReviewsAndMap';
import { O2TaxiLogo } from '../components/O2TaxiLogo';

interface ContactPageProps {
  onNavigate: (path: string, state?: Record<string, unknown>) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: 'Contact O2Taxi' }]} onNavigate={onNavigate} />

      {/* Hero Header */}
      <section className="bg-slate-950 text-white py-10 sm:py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                Thame, Oxfordshire • 24/7 Service
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Contact O2Taxi
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We are available 24 hours a day, 7 days a week for all local taxi, airport transfer, and long-distance travel inquiries.
              </p>
            </div>
            <div className="hidden md:block">
              <O2TaxiLogo variant="full" size="lg" theme="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Direct Communications
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                  Get in Touch 24/7
                </h2>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Whether you need an immediate taxi in Thame or want to arrange upcoming corporate travel or an airport run, our team is ready to help.
                </p>
              </div>

              {/* Information Cards */}
              <div className="space-y-3">
                {/* Phone */}
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Telephone (24 Hours):</span>
                    <a
                      href={BUSINESS_CONFIG.phoneHref}
                      className="text-slate-900 font-bold text-base hover:text-emerald-600 transition-colors"
                    >
                      {BUSINESS_CONFIG.phone}
                    </a>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      International: {BUSINESS_CONFIG.internationalPhone}
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">WhatsApp Booking:</span>
                    <a
                      href={BUSINESS_CONFIG.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-bold text-base hover:underline"
                    >
                      {BUSINESS_CONFIG.whatsappDisplay}
                    </a>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Fast replies for quotations and updates
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Email Address:</span>
                    <a
                      href={BUSINESS_CONFIG.emailHref}
                      className="text-slate-900 font-semibold text-sm hover:text-emerald-600 transition-colors"
                    >
                      {BUSINESS_CONFIG.email}
                    </a>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Inquiries, receipts & corporate billing
                    </span>
                  </div>
                </div>

                {/* Google My Business & Maps Card */}
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">Google Business Location:</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                        Verified
                      </span>
                    </div>
                    <p className="text-slate-900 font-bold text-sm mt-0.5">{BUSINESS_CONFIG.location}</p>
                    <a
                      id="contact-google-maps-btn"
                      href={BUSINESS_CONFIG.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1 mt-1.5 hover:underline"
                    >
                      <span>Open on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Hours & Availability */}
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Operating Availability:</span>
                    <p className="text-slate-900 font-bold text-sm">{BUSINESS_CONFIG.availability}</p>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      365 Days a Year (including holidays)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social and Review Connect Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  id="contact-google-reviews-card"
                  href={BUSINESS_CONFIG.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/80 hover:bg-emerald-100/70 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-950 block">Google Reviews</span>
                    <span className="text-[11px] text-emerald-800 font-medium group-hover:underline">
                      Rated 5.0 ★ • Review us →
                    </span>
                  </div>
                </a>

                <a
                  id="contact-facebook-card"
                  href={BUSINESS_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-blue-50 border border-blue-200/80 hover:bg-blue-100/70 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    <FacebookIcon className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-950 block">Facebook Page</span>
                    <span className="text-[11px] text-blue-800 font-medium group-hover:underline">
                      Follow O2Taxi →
                    </span>
                  </div>
                </a>
              </div>

              {/* Booking CTA Button */}
              <div className="pt-2">
                <a
                  href="/book-your-taxi/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/book-your-taxi/');
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Taxi Online</span>
                </a>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <ServiceAreas onNavigate={onNavigate} />
    </div>
  );
};
