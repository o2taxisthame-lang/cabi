import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBookingBar } from './components/MobileBookingBar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AirportTransfersPage } from './pages/AirportTransfersPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LocationPage } from './pages/LocationPage';
import { ServiceAreasHubPage } from './pages/ServiceAreasHubPage';
import { SERVICES_LIST } from './data/servicesData';
import { LOCATIONS_DATA, getLocationBySlug } from './data/locationSEOData';
import { updateSEO } from './utils/seo';
import { BUSINESS_CONFIG } from './config/business';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      return pathname === '' ? '/' : pathname;
    }
    return '/';
  });

  const [routeState, setRouteState] = useState<Record<string, unknown> | undefined>(undefined);

  // Normalize path helper
  const normalizePath = (path: string) => {
    let clean = path.split('?')[0].split('#')[0];
    if (!clean.startsWith('/')) clean = '/' + clean;
    if (clean !== '/' && !clean.endsWith('/')) clean = clean + '/';
    return clean;
  };

  const navigate = (path: string, state?: Record<string, unknown>) => {
    const targetPath = normalizePath(path);
    setCurrentPath(targetPath);
    setRouteState(state);

    if (typeof window !== 'undefined') {
      window.history.pushState(state || {}, '', targetPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const newPath = normalizePath(window.location.pathname);
      setCurrentPath(newPath);
      setRouteState(event.state || undefined);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update SEO on route change
  useEffect(() => {
    const normalized = normalizePath(currentPath);

    if (normalized === '/') {
      updateSEO({
        title: 'Taxi in Thame, Oxfordshire | O2Taxi | 24/7 Taxi Service',
        description:
          'Reliable 24/7 taxi service in Thame, Oxfordshire. Local taxis, airport transfers, long-distance travel, train station transfers and more. Call or WhatsApp O2Taxi.',
        canonicalPath: '/',
        areaServedName: 'Thame, Oxfordshire',
      });
    } else if (normalized.includes('about')) {
      updateSEO({
        title: 'About O2Taxi | Reliable Local Taxi Service in Thame, Oxfordshire',
        description:
          'Learn about O2Taxi, your local 24/7 taxi service with professional drivers based in Thame, Oxfordshire. Local journeys, airport transfers, and corporate travel.',
        canonicalPath: '/about-us/',
      });
    } else if (normalized.includes('airport-transfers')) {
      updateSEO({
        title: 'Reliable Airport Transfers from Thame & Oxfordshire | O2Taxi',
        description:
          'Dedicated 24/7 airport transfers from Thame and Oxfordshire to Heathrow, Gatwick, Luton, Stansted, and Birmingham. Flight tracking and meet & greet included.',
        canonicalPath: '/airport-transfers/',
      });
    } else if (normalized.includes('service-areas') || normalized.includes('local-service-areas')) {
      updateSEO({
        title: 'Local Taxi Service Areas in Oxfordshire & Buckinghamshire | O2Taxi',
        description:
          'Explore O2Taxi service areas across Thame, Haddenham, Chinnor, Oxford, Princes Risborough, Aylesbury, Long Crendon, and surrounding villages.',
        canonicalPath: '/service-areas/',
      });
    } else if (normalized.includes('book-your-taxi') || normalized.includes('booking')) {
      updateSEO({
        title: 'Book Your Taxi Online | O2Taxi Thame, Oxfordshire',
        description:
          'Book your taxi online with O2Taxi. Fast, dependable booking enquiry service for local Oxfordshire trips, airport transfers, and long-distance travel.',
        canonicalPath: '/book-your-taxi/',
      });
    } else if (normalized.includes('contact')) {
      updateSEO({
        title: `Contact O2Taxi | 24/7 Taxi in Thame, Oxfordshire | Call ${BUSINESS_CONFIG.phone}`,
        description:
          `Contact O2Taxi in Thame, Oxfordshire 24 hours a day, 7 days a week. Phone: ${BUSINESS_CONFIG.phone}, WhatsApp: ${BUSINESS_CONFIG.whatsappDisplay}, Email: ${BUSINESS_CONFIG.email}.`,
        canonicalPath: '/contact/',
      });
    } else if (normalized.includes('privacy-policy')) {
      updateSEO({
        title: 'Privacy Policy | O2Taxi Thame, Oxfordshire',
        description: 'Read the privacy policy and data protection commitments for O2Taxi.',
        canonicalPath: '/privacy-policy/',
      });
    } else if (normalized.includes('terms-of-service')) {
      updateSEO({
        title: 'Terms of Service | O2Taxi Thame, Oxfordshire',
        description: 'Terms of service and booking conditions for O2Taxi passenger transport.',
        canonicalPath: '/terms-of-service/',
      });
    } else {
      // Check if it matches a Location SEO page
      const foundLocation = LOCATIONS_DATA.find(
        (loc) => normalized === `/${loc.slug}/` || normalized.includes(loc.slug)
      );

      if (foundLocation) {
        updateSEO({
          title: foundLocation.metaTitle,
          description: foundLocation.metaDescription,
          canonicalPath: `/${foundLocation.slug}/`,
          faqs: foundLocation.faqs,
          areaServedName: `${foundLocation.name}, ${foundLocation.county}`,
        });
        return;
      }

      // Check if it matches a Service page
      const foundService = SERVICES_LIST.find((s) => normalized.includes(s.slug));
      if (foundService) {
        updateSEO({
          title: `${foundService.title} in Thame & Oxfordshire | O2Taxi`,
          description: foundService.shortDescription,
          canonicalPath: `/${foundService.slug}/`,
          faqs: foundService.faqs,
        });
        return;
      }

      // Fallback 404
      updateSEO({
        title: 'Page Not Found | O2Taxi',
        description: 'The requested page could not be found.',
        canonicalPath: normalized,
        noindex: true,
      });
    }
  }, [currentPath]);

  // Determine active view
  const renderActivePage = () => {
    const path = normalizePath(currentPath);

    if (path === '/') {
      return <HomePage onNavigate={navigate} />;
    }

    if (path === '/about-us/' || path === '/about/') {
      return <AboutPage onNavigate={navigate} />;
    }

    if (path === '/airport-transfers/') {
      return <AirportTransfersPage onNavigate={navigate} />;
    }

    if (path === '/service-areas/' || path === '/local-service-areas/') {
      return <ServiceAreasHubPage onNavigate={navigate} />;
    }

    if (path === '/book-your-taxi/' || path === '/booking/') {
      return <BookingPage initialValues={routeState} onNavigate={navigate} />;
    }

    if (path === '/contact/' || path === '/contact-us/') {
      return <ContactPage onNavigate={navigate} />;
    }

    if (path === '/privacy-policy/') {
      return <PrivacyPolicyPage onNavigate={navigate} />;
    }

    if (path === '/terms-of-service/') {
      return <TermsOfServicePage onNavigate={navigate} />;
    }

    // Check specific location SEO page
    const matchedLocation = LOCATIONS_DATA.find(
      (loc) => path === `/${loc.slug}/` || path.includes(loc.slug)
    );

    if (matchedLocation) {
      return <LocationPage location={matchedLocation} onNavigate={navigate} />;
    }

    // Check specific service slug
    const matchedService = SERVICES_LIST.find(
      (s) => path === `/${s.slug}/` || path.includes(s.slug)
    );

    if (matchedService) {
      return <ServiceDetailPage service={matchedService} onNavigate={navigate} />;
    }

    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased pb-20 lg:pb-0">
      <Header currentPath={normalizePath(currentPath)} onNavigate={navigate} />
      <main className="flex-grow w-full">{renderActivePage()}</main>
      <Footer onNavigate={navigate} />
      <MobileBookingBar onNavigate={navigate} />
    </div>
  );
}
