import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Car,
  ChevronDown,
  Clock,
  ShieldCheck,
  MapPin,
  Calendar,
  Star,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { SERVICES_LIST } from '../data/servicesData';
import { LOCAL_SERVICE_AREAS } from '../data/areasData';
import { FacebookIcon } from './GoogleReviewsAndMap';
import { O2TaxiLogo } from './O2TaxiLogo';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAreasDropdownOpen(false);
  }, [currentPath]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAreasDropdownOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950 text-white shadow-md border-b border-slate-800">
      {/* Top Notice Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 text-slate-300">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Available 24/7 in Thame & Oxfordshire</span>
            </div>
            <a
              href={BUSINESS_CONFIG.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:underline font-semibold"
            >
              <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
              <span>5.0 Star Google Reviews</span>
            </a>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Licensed Drivers</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blue-400 transition-colors inline-flex items-center gap-1"
              title="Follow O2Taxi on Facebook"
            >
              <FacebookIcon className="w-3.5 h-3.5 fill-current" />
              <span>Facebook</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={BUSINESS_CONFIG.emailHref}
              className="text-slate-300 hover:text-emerald-400 transition-colors"
            >
              {BUSINESS_CONFIG.email}
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={BUSINESS_CONFIG.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <a
            id="brand-logo"
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1"
            aria-label="O2Taxi Home"
          >
            <O2TaxiLogo variant="full" size="md" theme="dark" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-200">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, '/')}
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive('/') && currentPath === '/'
                  ? 'text-emerald-400 bg-slate-900 font-semibold'
                  : 'hover:text-emerald-400 hover:bg-slate-900/60'
              }`}
            >
              Home
            </a>
            <a
              href="/about-us/"
              onClick={(e) => handleNavClick(e, '/about-us/')}
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive('/about')
                  ? 'text-emerald-400 bg-slate-900 font-semibold'
                  : 'hover:text-emerald-400 hover:bg-slate-900/60'
              }`}
            >
              About
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                type="button"
                id="services-menu-btn"
                onClick={() => {
                  setServicesDropdownOpen(!servicesDropdownOpen);
                  setAreasDropdownOpen(false);
                }}
                onMouseEnter={() => {
                  setServicesDropdownOpen(true);
                  setAreasDropdownOpen(false);
                }}
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                  SERVICES_LIST.some((s) => currentPath.includes(s.slug))
                    ? 'text-emerald-400 bg-slate-900 font-semibold'
                    : 'hover:text-emerald-400 hover:bg-slate-900/60'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className={`absolute top-full left-0 w-64 pt-2 ${
                  servicesDropdownOpen ? 'block' : 'hidden group-hover:block'
                }`}
              >
                <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-xl py-2 px-1 divide-y divide-slate-800/60">
                  <div className="pb-1">
                    {SERVICES_LIST.map((service) => (
                      <a
                        key={service.id}
                        href={`/${service.slug}/`}
                        onClick={(e) => handleNavClick(e, `/${service.slug}/`)}
                        className={`block px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          currentPath === `/${service.slug}/`
                            ? 'text-emerald-400 bg-slate-800'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                        }`}
                      >
                        {service.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas Dropdown */}
            <div className="relative group">
              <button
                type="button"
                id="areas-menu-btn"
                onClick={() => {
                  setAreasDropdownOpen(!areasDropdownOpen);
                  setServicesDropdownOpen(false);
                }}
                onMouseEnter={() => {
                  setAreasDropdownOpen(true);
                  setServicesDropdownOpen(false);
                }}
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                  currentPath.includes('taxi-') || currentPath.includes('service-areas')
                    ? 'text-emerald-400 bg-slate-900 font-semibold'
                    : 'hover:text-emerald-400 hover:bg-slate-900/60'
                }`}
                aria-expanded={areasDropdownOpen}
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Areas</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              {/* Areas Dropdown Menu */}
              <div
                onMouseLeave={() => setAreasDropdownOpen(false)}
                className={`absolute top-full left-0 w-72 pt-2 ${
                  areasDropdownOpen ? 'block' : 'hidden group-hover:block'
                }`}
              >
                <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-xl py-2 px-1 max-h-96 overflow-y-auto">
                  <div className="px-3 py-1.5 border-b border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase text-slate-400">Local Service Areas</span>
                    <a
                      href="/service-areas/"
                      onClick={(e) => handleNavClick(e, '/service-areas/')}
                      className="text-[11px] font-semibold text-emerald-400 hover:underline"
                    >
                      View All (14)
                    </a>
                  </div>
                  <div className="py-1">
                    {LOCAL_SERVICE_AREAS.map((area) => (
                      <a
                        key={area.slug}
                        href={`/${area.slug}/`}
                        onClick={(e) => handleNavClick(e, `/${area.slug}/`)}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          currentPath === `/${area.slug}/`
                            ? 'text-emerald-400 bg-slate-800 font-semibold'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                        }`}
                      >
                        <span>{area.name}</span>
                        <span className="text-[10px] text-slate-500">{area.type}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/airport-transfers/"
              onClick={(e) => handleNavClick(e, '/airport-transfers/')}
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive('/airport-transfers')
                  ? 'text-emerald-400 bg-slate-900 font-semibold'
                  : 'hover:text-emerald-400 hover:bg-slate-900/60'
              }`}
            >
              Airport Transfers
            </a>
            <a
              href="/contact/"
              onClick={(e) => handleNavClick(e, '/contact/')}
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive('/contact')
                  ? 'text-emerald-400 bg-slate-900 font-semibold'
                  : 'hover:text-emerald-400 hover:bg-slate-900/60'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="header-phone-cta"
              href={BUSINESS_CONFIG.phoneHref}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-emerald-400 font-semibold text-sm transition-all focus:ring-2 focus:ring-emerald-500"
            >
              <Phone className="w-4 h-4 animate-pulse text-emerald-400" />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>

            <a
              id="header-book-cta"
              href="/book-your-taxi/"
              onClick={(e) => handleNavClick(e, '/book-your-taxi/')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-sm transition-all focus:ring-2 focus:ring-emerald-500 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Taxi</span>
            </a>
          </div>

          {/* Mobile Right Action Buttons */}
          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
            <a
              id="mobile-header-call-btn"
              href={BUSINESS_CONFIG.phoneHref}
              className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 font-bold transition-all"
              aria-label={`Call ${BUSINESS_CONFIG.phone}`}
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              id="mobile-header-wa-btn"
              href={BUSINESS_CONFIG.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-all"
              aria-label="WhatsApp O2Taxi"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            {/* Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            <a
              href={BUSINESS_CONFIG.phoneHref}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              href={BUSINESS_CONFIG.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-700 text-white font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="space-y-1">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, '/')}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                currentPath === '/'
                  ? 'text-emerald-400 bg-slate-800 font-semibold'
                  : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              Home
            </a>
            <a
              href="/about-us/"
              onClick={(e) => handleNavClick(e, '/about-us/')}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                currentPath.includes('/about')
                  ? 'text-emerald-400 bg-slate-800 font-semibold'
                  : 'text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              About O2Taxi
            </a>

            <div className="pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-slate-400 px-3">
              Services
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pl-2">
              {SERVICES_LIST.map((service) => (
                <a
                  key={service.id}
                  href={`/${service.slug}/`}
                  onClick={(e) => handleNavClick(e, `/${service.slug}/`)}
                  className={`block px-3 py-2 rounded-lg text-sm ${
                    currentPath === `/${service.slug}/`
                      ? 'text-emerald-400 bg-slate-800 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/50'
                  }`}
                >
                  {service.title}
                </a>
              ))}
            </div>

            <div className="pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 flex items-center justify-between">
              <span>Service Areas</span>
              <a
                href="/service-areas/"
                onClick={(e) => handleNavClick(e, '/service-areas/')}
                className="text-[11px] text-emerald-400 lowercase hover:underline font-normal"
              >
                (view all 14)
              </a>
            </div>
            <div className="grid grid-cols-2 gap-1 pl-2 max-h-48 overflow-y-auto">
              {LOCAL_SERVICE_AREAS.map((area) => (
                <a
                  key={area.slug}
                  href={`/${area.slug}/`}
                  onClick={(e) => handleNavClick(e, `/${area.slug}/`)}
                  className={`block px-2.5 py-1.5 rounded-lg text-xs ${
                    currentPath === `/${area.slug}/`
                      ? 'text-emerald-400 bg-slate-800 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/50'
                  }`}
                >
                  {area.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800">
              <a
                href="/book-your-taxi/"
                onClick={(e) => handleNavClick(e, '/book-your-taxi/')}
                className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                  currentPath === '/book-your-taxi/'
                    ? 'text-emerald-400 bg-slate-800'
                    : 'text-emerald-400 hover:bg-slate-800/60'
                }`}
              >
                Book Your Taxi
              </a>
              <a
                href="/contact/"
                onClick={(e) => handleNavClick(e, '/contact/')}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  currentPath === '/contact/'
                    ? 'text-emerald-400 bg-slate-800 font-semibold'
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                Contact O2Taxi
              </a>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={BUSINESS_CONFIG.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-semibold"
              >
                <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                <span>Google 5.0★</span>
              </a>
              <a
                href={BUSINESS_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-300 font-semibold"
              >
                <FacebookIcon className="w-3.5 h-3.5 fill-current" />
                <span>Facebook</span>
              </a>
            </div>
            <p className="text-[11px] text-slate-400 text-center">
              Direct line: {BUSINESS_CONFIG.phone} • 24/7 Service
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
