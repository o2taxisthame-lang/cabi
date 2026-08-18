import React from 'react';
import {
  Car,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
  Plane,
  Star,
  ExternalLink,
  Navigation,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { SERVICES_LIST } from '../data/servicesData';
import { LOCAL_SERVICE_AREAS } from '../data/areasData';
import { FacebookIcon } from './GoogleReviewsAndMap';
import { O2TaxiLogo } from './O2TaxiLogo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Banner */}
      <div className="bg-slate-900 border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Need a Reliable Taxi in Thame or Oxfordshire?
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Available 24 hours a day, 7 days a week for local travel, airport transfers, and long distance.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              id="footer-call-action"
              href={BUSINESS_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-sm transition-all focus:ring-2 focus:ring-emerald-400"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_CONFIG.phone}</span>
            </a>
            <a
              id="footer-whatsapp-action"
              href={BUSINESS_CONFIG.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <a
              id="footer-google-review-action"
              href={BUSINESS_CONFIG.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-300 font-semibold text-sm border border-slate-700 transition-all"
            >
              <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              <span>Google 5.0★</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & About (Col 1-2 on wide) */}
          <div className="space-y-4 lg:col-span-2">
            <a
              href="/"
              onClick={(e) => handleNav(e, '/')}
              className="inline-block focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
            >
              <O2TaxiLogo variant="full" size="md" theme="dark" />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Reliable Taxi Service in Thame, Oxfordshire. Fast, friendly, and professional taxi transportation covering Thame, surrounding villages, UK airports, and nationwide destinations.
            </p>

            {/* Social & Google Trust Connections */}
            <div className="flex items-center gap-3 pt-1">
              <a
                id="footer-facebook-btn"
                href={BUSINESS_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 text-xs font-semibold transition-colors"
                title="Follow O2Taxi on Facebook"
              >
                <FacebookIcon className="w-4 h-4 fill-current" />
                <span>Facebook</span>
              </a>

              <a
                id="footer-google-review-btn"
                href={BUSINESS_CONFIG.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition-colors"
                title="Review O2Taxi on Google"
              >
                <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                <span>Google Reviews (5.0★)</span>
              </a>
            </div>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{BUSINESS_CONFIG.availability}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>{BUSINESS_CONFIG.location}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Licensed Drivers & Local Taxi</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNav(e, '/')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="/about-us/"
                  onClick={(e) => handleNav(e, '/about-us/')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>About O2Taxi</span>
                </a>
              </li>
              <li>
                <a
                  href="/service-areas/"
                  onClick={(e) => handleNav(e, '/service-areas/')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-emerald-400 font-medium"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Service Areas (14)</span>
                </a>
              </li>
              <li>
                <a
                  href="/airport-transfers/"
                  onClick={(e) => handleNav(e, '/airport-transfers/')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Airport Transfers</span>
                </a>
              </li>
              <li>
                <a
                  href="/book-your-taxi/"
                  onClick={(e) => handleNav(e, '/book-your-taxi/')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-emerald-400 font-medium"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Book Your Taxi</span>
                </a>
              </li>
              <li>
                <a
                  href="/contact/"
                  onClick={(e) => handleNav(e, '/contact/')}
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Contact O2Taxi</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_CONFIG.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Leave a Google Review</span>
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  <span>Facebook Page</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES_LIST.map((service) => (
                <li key={service.id}>
                  <a
                    href={`/${service.slug}/`}
                    onClick={(e) => handleNav(e, `/${service.slug}/`)}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 hover:text-white"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 flex-shrink-0" />
                    <span className="truncate">{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Google Maps */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Contact O2Taxi
            </h4>
            <div className="space-y-3.5 text-sm">
              <div>
                <span className="text-xs text-slate-400 block font-medium">Telephone (24/7):</span>
                <a
                  href={BUSINESS_CONFIG.phoneHref}
                  className="text-emerald-400 font-bold text-base hover:underline inline-flex items-center gap-1.5 mt-0.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>{BUSINESS_CONFIG.phone}</span>
                </a>
              </div>

              <div>
                <span className="text-xs text-slate-400 block font-medium">International Line:</span>
                <a
                  href={BUSINESS_CONFIG.phoneHref}
                  className="text-slate-300 hover:text-white inline-block mt-0.5"
                >
                  {BUSINESS_CONFIG.internationalPhone}
                </a>
              </div>

              <div>
                <span className="text-xs text-slate-400 block font-medium">WhatsApp Booking:</span>
                <a
                  href={BUSINESS_CONFIG.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1.5 mt-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{BUSINESS_CONFIG.whatsappDisplay}</span>
                </a>
              </div>

              <div>
                <span className="text-xs text-slate-400 block font-medium">Email Address:</span>
                <a
                  href={BUSINESS_CONFIG.emailHref}
                  className="text-slate-300 hover:text-emerald-400 hover:underline inline-flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>{BUSINESS_CONFIG.email}</span>
                </a>
              </div>

              <div>
                <span className="text-xs text-slate-400 block font-medium">Base of Operation:</span>
                <p className="text-slate-300 mt-0.5">{BUSINESS_CONFIG.location}</p>
                <a
                  id="footer-google-maps-link"
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:underline inline-flex items-center gap-1 mt-1 font-medium"
                >
                  <Navigation className="w-3 h-3" />
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Local SEO Service Areas Mesh in Footer */}
        <div className="mt-10 pt-8 border-t border-slate-900">
          <div className="flex items-center justify-between mb-3">
            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Local Taxi Service Areas in Oxfordshire & Buckinghamshire</span>
            </h5>
            <a
              href="/service-areas/"
              onClick={(e) => handleNav(e, '/service-areas/')}
              className="text-xs text-emerald-400 hover:underline font-medium hidden sm:inline-block"
            >
              View Full Directory →
            </a>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400">
            {LOCAL_SERVICE_AREAS.map((area) => (
              <a
                key={area.slug}
                href={`/${area.slug}/`}
                onClick={(e) => handleNav(e, `/${area.slug}/`)}
                className="hover:text-emerald-400 transition-colors"
              >
                Taxi {area.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© O2Taxi. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="/privacy-policy/"
              onClick={(e) => handleNav(e, '/privacy-policy/')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="/terms-of-service/"
              onClick={(e) => handleNav(e, '/terms-of-service/')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </a>
            <span>•</span>
            <a
              href="/airport-transfers/"
              onClick={(e) => handleNav(e, '/airport-transfers/')}
              className="hover:text-slate-300 transition-colors"
            >
              Airport Guide Prices
            </a>
            <span>•</span>
            <a
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
            >
              <span>Google Maps</span>
            </a>
            <span>•</span>
            <a
              href={BUSINESS_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors inline-flex items-center gap-1"
            >
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
