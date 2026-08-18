import React from 'react';
import {
  Car,
  Plane,
  Compass,
  Train,
  Package,
  GraduationCap,
  Briefcase,
  Sparkles,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle2,
  HelpCircle,
  MapPin,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { ServiceItem } from '../types';
import { BUSINESS_CONFIG, getWhatsAppBookingLink } from '../config/business';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ServiceAreas } from '../components/ServiceAreas';

interface ServiceDetailPageProps {
  service: ServiceItem;
  onNavigate: (path: string, state?: Record<string, unknown>) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, onNavigate }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Car':
        return <Car className="w-8 h-8 text-emerald-600" />;
      case 'Plane':
        return <Plane className="w-8 h-8 text-emerald-600" />;
      case 'Compass':
        return <Compass className="w-8 h-8 text-emerald-600" />;
      case 'Train':
        return <Train className="w-8 h-8 text-emerald-600" />;
      case 'Package':
        return <Package className="w-8 h-8 text-emerald-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-8 h-8 text-emerald-600" />;
      case 'Briefcase':
        return <Briefcase className="w-8 h-8 text-emerald-600" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-emerald-600" />;
      default:
        return <Car className="w-8 h-8 text-emerald-600" />;
    }
  };

  return (
    <div className="w-full">
      <Breadcrumbs items={[{ label: service.title }]} onNavigate={onNavigate} />

      {/* Hero */}
      <section className="bg-slate-950 text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              Thame & Oxfordshire 24/7
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {service.heroHeadline}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {service.heroCopy}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="/book-your-taxi/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/book-your-taxi/', { journeyType: service.title });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>Book {service.title}</span>
              </a>
              <a
                href={BUSINESS_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>
              <a
                href={getWhatsAppBookingLink(`Hello O2Taxi, I would like to inquire about ${service.title}.`)}
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

      {/* Main Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Service Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                  About Our {service.title}
                </h2>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed mt-4">
                  {service.fullDescription}
                </p>
              </div>

              {/* Key Features List */}
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Key Benefits & Features
                </h3>
                <ul className="space-y-3">
                  {service.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service-specific FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-emerald-600" />
                    <span>Frequently Asked Questions</span>
                  </h3>
                  <div className="space-y-3">
                    {service.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-xs"
                      >
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                          {faq.question}
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl space-y-5">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Quick Booking</h4>
                    <p className="text-xs text-emerald-400">Available 24/7</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>24/7 Day & Night Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Licensed & Fully Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>Thame & Oxfordshire Base</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2.5">
                  <a
                    href="/book-your-taxi/"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/book-your-taxi/', { journeyType: service.title });
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Online</span>
                  </a>

                  <a
                    href={BUSINESS_CONFIG.phoneHref}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold text-sm transition-all"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Call {BUSINESS_CONFIG.phone}</span>
                  </a>

                  <a
                    href={getWhatsAppBookingLink(
                      `Hello O2Taxi, I would like to book ${service.title}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <ServiceAreas onNavigate={onNavigate} />
    </div>
  );
};
