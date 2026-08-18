import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  ShieldCheck,
  ChevronRight,
  Plane,
  Train,
  Building2,
  Navigation,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  Car,
  Compass,
} from 'lucide-react';
import { LocationSEOItem, LOCATIONS_DATA, getLocationBySlug } from '../data/locationSEOData';
import { BUSINESS_CONFIG } from '../config/business';

interface LocationPageProps {
  location: LocationSEOItem;
  onNavigate: (path: string) => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ location, onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const nearbyLocations = location.nearbySlugs
    .map((slug) => getLocationBySlug(slug))
    .filter((item): item is LocationSEOItem => item !== undefined);

  const encodedLocation = encodeURIComponent(location.name);
  const customWhatsAppUrl = `https://wa.me/447923360048?text=${encodeURIComponent(
    `Hello O2Taxi, I would like to enquire about / book a taxi from ${location.name}.`
  )}`;

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="bg-slate-900 text-slate-400 text-xs py-2.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-1.5">
          <a
            href="/"
            onClick={(e) => handleNav(e, '/')}
            className="hover:text-emerald-400 transition-colors"
          >
            Home
          </a>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <a
            href="/service-areas/"
            onClick={(e) => handleNav(e, '/service-areas/')}
            className="hover:text-emerald-400 transition-colors"
          >
            Service Areas
          </a>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-emerald-400 font-medium">{location.name} Taxi</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-14 sm:py-20 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>
                {location.type} • {location.county} ({location.postcodes.join(', ')})
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {location.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              {location.heroTagline}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={`/book-your-taxi/?pickup=${encodedLocation}`}
                onClick={(e) => handleNav(e, `/book-your-taxi/?pickup=${encodedLocation}`)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-emerald-500/20 transition-all active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Taxi in {location.name}</span>
              </a>

              <a
                href={BUSINESS_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm sm:text-base transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>

              <a
                href={customWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 pt-8 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Licensed Drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Fixed Fares</span>
              </div>
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Airport Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Local Highlights */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Detailed Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  Local Expertise & Service
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Comprehensive Taxi Services in {location.name}
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                {location.introText.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Local Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {location.localHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs"
                  >
                    <h3 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{highlight.title}</span>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quick Booking & Call Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl sticky top-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Need a Taxi Now?</h3>
                    <p className="text-xs text-slate-400">Direct dispatch in {location.name}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Call our dispatch desk for immediate availability or pre-book your journey online for guaranteed prompt arrival.
                </p>

                <div className="space-y-3">
                  <a
                    href={BUSINESS_CONFIG.phoneHref}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {BUSINESS_CONFIG.phone}</span>
                  </a>

                  <a
                    href={customWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Booking</span>
                  </a>

                  <a
                    href={`/book-your-taxi/?pickup=${encodedLocation}`}
                    onClick={(e) => handleNav(e, `/book-your-taxi/?pickup=${encodedLocation}`)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all"
                  >
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span>Online Booking Form</span>
                  </a>
                </div>

                {/* Key connections */}
                <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300 block mb-2">
                    Key Road & Transport Links in {location.name}:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {location.keyConnections.map((conn, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded-md bg-slate-800 text-slate-300 text-[11px]"
                      >
                        {conn}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes & Guide Fares from this location */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
              Transparent Travel Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Popular Taxi Routes & Fares from {location.name}
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Typical travel durations and guide rates from {location.name} to major railway stations, airports, hospitals, and surrounding centres.
            </p>
          </div>

          {/* Routes Table / Cards */}
          <div className="overflow-hidden bg-white border border-slate-200 rounded-xl shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-900 text-white text-xs uppercase font-semibold">
                  <tr>
                    <th scope="col" className="px-4 sm:px-6 py-3.5">
                      Destination
                    </th>
                    <th scope="col" className="px-4 sm:px-6 py-3.5 hidden sm:table-cell">
                      Category
                    </th>
                    <th scope="col" className="px-4 sm:px-6 py-3.5">
                      Typical Time
                    </th>
                    <th scope="col" className="px-4 sm:px-6 py-3.5">
                      Guide Price
                    </th>
                    <th scope="col" className="px-4 sm:px-6 py-3.5 text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {location.popularRoutes.map((route, idx) => (
                    <tr key={idx} className="hover:bg-emerald-50/40 transition-colors">
                      <td className="px-4 sm:px-6 py-3.5 font-bold text-slate-900 flex items-center gap-2">
                        {route.category === 'Airport' && (
                          <Plane className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        )}
                        {route.category === 'Railway Station' && (
                          <Train className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        )}
                        {route.category === 'Hospital / Medical' && (
                          <Building2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        )}
                        {(route.category === 'City / Town' || route.category === 'Local Landmark') && (
                          <Navigation className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        )}
                        <span>{route.destination}</span>
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 hidden sm:table-cell">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                          {route.category}
                        </span>
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 text-xs sm:text-sm text-slate-600">
                        {route.typicalTime}
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 font-extrabold text-emerald-700 text-xs sm:text-sm">
                        {route.guidePrice}
                      </td>
                      <td className="px-4 sm:px-6 py-3.5 text-right">
                        <a
                          href={`/book-your-taxi/?pickup=${encodedLocation}&dest=${encodeURIComponent(
                            route.destination
                          )}`}
                          onClick={(e) =>
                            handleNav(
                              e,
                              `/book-your-taxi/?pickup=${encodedLocation}&dest=${encodeURIComponent(
                                route.destination
                              )}`
                            )
                          }
                          className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-100 hover:bg-emerald-200 px-3 py-1.5 rounded-lg transition-colors"
                        >
                          <span>Book</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs text-slate-500 mt-3">
            * Guide prices shown are indicative for standard saloon vehicles. Actual fares may vary depending on exact collection point, vehicle class, peak travel periods, and luggage volume.
          </p>
        </div>
      </section>

      {/* Services Breakdown in this area */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Taxi Services Available in {location.name}
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Full spectrum professional driver and taxi solutions tailored for individuals, commuters, families, and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-3">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                Airport Transfers from {location.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                Direct transfers to Heathrow, Gatwick, Luton, Stansted, and Birmingham. Includes flight tracking and meet & greet service.
              </p>
              <a
                href="/airport-transfers/"
                onClick={(e) => handleNav(e, '/airport-transfers/')}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
              >
                <span>Airport Guide & Prices</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-3">
                <Train className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                Railway Station Transfers
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                Prompt connections to Haddenham & Thame Parkway, Princes Risborough, and Oxford rail stations for London and Birmingham commuters.
              </p>
              <a
                href="/train-station-transfers/"
                onClick={(e) => handleNav(e, '/train-station-transfers/')}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
              >
                <span>Station Transfer Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-3">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                Local Town & Village Trips
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                Short hops to the supermarket, doctors, high street shopping, family visits, and local dining spots across {location.county}.
              </p>
              <a
                href="/local-taxi-service/"
                onClick={(e) => handleNav(e, '/local-taxi-service/')}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
              >
                <span>Local Taxi Info</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                Business & Corporate Travel
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                Executive chauffeur drivers for corporate clients, business parks, client hospitality, and inter-city business meetings.
              </p>
              <a
                href="/business-corporate-travel/"
                onClick={(e) => handleNav(e, '/business-corporate-travel/')}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
              >
                <span>Corporate Travel Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                Hospital & Medical Appointments
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                Patient and visitor journeys to John Radcliffe, Churchill Hospital, Stoke Mandeville, and local health centres with door-to-door care.
              </p>
              <a
                href={`/book-your-taxi/?pickup=${encodedLocation}&dest=Hospital`}
                onClick={(e) => handleNav(e, `/book-your-taxi/?pickup=${encodedLocation}&dest=Hospital`)}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
              >
                <span>Book Medical Transfer</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                UK Long-Distance Travel
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                Nationwide long-distance taxi transfers to London, Birmingham, Manchester, Southampton cruise terminals, and beyond.
              </p>
              <a
                href="/long-distance-travel/"
                onClick={(e) => handleNav(e, '/long-distance-travel/')}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
              >
                <span>Long Distance Travel</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions: Taxi in {location.name}
            </h2>
          </div>

          <div className="space-y-3">
            {location.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        isOpen ? 'rotate-90 text-emerald-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Surrounding & Nearby Service Areas Grid (SEO Internal Linking Mesh) */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
              Regional Coverage
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Nearby Taxi Service Areas
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              O2Taxi also operates across adjacent villages and neighbouring towns in South Oxfordshire and Buckinghamshire:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {LOCATIONS_DATA.filter((l) => l.id !== location.id).map((otherLoc) => (
              <a
                key={otherLoc.id}
                href={`/${otherLoc.slug}/`}
                onClick={(e) => handleNav(e, `/${otherLoc.slug}/`)}
                className="bg-white rounded-xl p-3 border border-slate-200 hover:border-emerald-500 hover:shadow-xs transition-all text-center group"
              >
                <MapPin className="w-4 h-4 text-emerald-600 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-slate-900 block group-hover:text-emerald-700 transition-colors">
                  {otherLoc.name}
                </span>
                <span className="text-[10px] text-slate-500">{otherLoc.type}</span>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/service-areas/"
              onClick={(e) => handleNav(e, '/service-areas/')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-900 bg-emerald-100 hover:bg-emerald-200 px-4 py-2 rounded-lg transition-colors"
            >
              <span>View All 14 Oxfordshire & Buckinghamshire Service Areas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-slate-950 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Ready to Book Your Taxi in {location.name}?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Contact O2Taxi right now. We are available 24 hours a day, 7 days a week for immediate dispatch and advance bookings.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={`/book-your-taxi/?pickup=${encodedLocation}`}
              onClick={(e) => handleNav(e, `/book-your-taxi/?pickup=${encodedLocation}`)}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all"
            >
              Book Online Now
            </a>
            <a
              href={BUSINESS_CONFIG.phoneHref}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm transition-all"
            >
              Call {BUSINESS_CONFIG.phone}
            </a>
            <a
              href={customWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
