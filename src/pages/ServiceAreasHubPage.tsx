import React, { useState } from 'react';
import {
  MapPin,
  Compass,
  ArrowRight,
  Phone,
  MessageCircle,
  Calendar,
  Search,
  Filter,
  CheckCircle2,
  Car,
} from 'lucide-react';
import { LOCATIONS_DATA, LocationSEOItem } from '../data/locationSEOData';
import { BUSINESS_CONFIG } from '../config/business';
import { LONG_DISTANCE_STATEMENT } from '../data/areasData';

interface ServiceAreasHubPageProps {
  onNavigate: (path: string) => void;
}

export const ServiceAreasHubPage: React.FC<ServiceAreasHubPageProps> = ({ onNavigate }) => {
  const [filterType, setFilterType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  const filteredLocations = LOCATIONS_DATA.filter((loc) => {
    const matchesFilter =
      filterType === 'All' ||
      (filterType === 'Towns & Cities' && loc.type === 'Town / City') ||
      (filterType === 'Local Villages' && loc.type === 'Local Village') ||
      (filterType === 'Hubs & Regional' && (loc.type === 'Primary Hub' || loc.type === 'Regional'));

    const matchesSearch =
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.county.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.postcodes.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-slate-950 text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5" />
              Coverage Directory
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Local Taxi Service Areas in Oxfordshire & Buckinghamshire
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed">
              Based in Thame (OX9), O2Taxi delivers 24/7 taxi services with licensed drivers across Thame, Haddenham, Chinnor, Oxford, Aylesbury, and all surrounding countryside villages.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/book-your-taxi/"
                onClick={(e) => handleNav(e, '/book-your-taxi/')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Taxi Online</span>
              </a>
              <a
                href={BUSINESS_CONFIG.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Filter & Search */}
      <section className="py-10 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {['All', 'Towns & Cities', 'Local Villages', 'Hubs & Regional'].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setFilterType(tab)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    filterType === tab
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search town, village or postcode..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((location) => (
              <div
                key={location.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[11px] font-bold">
                      {location.type}
                    </span>
                    <span className="text-xs text-slate-500 font-mono font-medium">
                      {location.postcodes[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                    Taxi in {location.name}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {location.heroTagline}
                  </p>

                  {/* Highlights snippet */}
                  <div className="space-y-1.5 mb-6">
                    {location.localHighlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{h.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`/${location.slug}/`}
                    onClick={(e) => handleNav(e, `/${location.slug}/`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 transition-colors"
                  >
                    <span>View {location.name} Taxi Info</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`/book-your-taxi/?pickup=${encodeURIComponent(location.name)}`}
                    onClick={(e) =>
                      handleNav(e, `/book-your-taxi/?pickup=${encodeURIComponent(location.name)}`)
                    }
                    className="p-2 rounded-lg bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 transition-all text-xs font-semibold"
                    title={`Book taxi in ${location.name}`}
                  >
                    <Car className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredLocations.length === 0 && (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-slate-600 font-medium">
                No location found matching "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setFilterType('All');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs font-bold text-emerald-700 underline"
              >
                Clear search & filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Long Distance UK Travel Card */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Long-Distance Travel Throughout the United Kingdom
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  {LONG_DISTANCE_STATEMENT}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <a
                href="/long-distance-travel/"
                onClick={(e) => handleNav(e, '/long-distance-travel/')}
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md"
              >
                Long Distance Guide
              </a>
              <a
                href={BUSINESS_CONFIG.phoneHref}
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700"
              >
                Call for Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
