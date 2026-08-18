import React from 'react';
import { MapPin, Compass, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { LOCAL_SERVICE_AREAS, LONG_DISTANCE_STATEMENT } from '../data/areasData';
import { BUSINESS_CONFIG } from '../config/business';

interface ServiceAreasProps {
  onNavigate?: (path: string) => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ onNavigate }) => {
  const handleAreaClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(`/${slug}/`);
    }
  };

  const handleHubClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/service-areas/');
    }
  };

  return (
    <section id="service-areas-section" className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-semibold text-xs mb-3">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            Oxfordshire & Buckinghamshire Coverage
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Local Taxi Service Areas
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            O2Taxi is based in Thame and provides prompt, professional taxi services across South Oxfordshire, Buckinghamshire borders, and nationwide long-distance routes. Click your local area for dedicated guides & fares.
          </p>
        </div>

        {/* Areas Grid - Fully Clickable for SEO & User Experience */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 mb-6">
          {LOCAL_SERVICE_AREAS.map((area, idx) => (
            <a
              key={idx}
              href={`/${area.slug}/`}
              onClick={(e) => handleAreaClick(e, area.slug)}
              className="bg-white rounded-xl border border-slate-200 p-3.5 text-center shadow-xs hover:border-emerald-500 hover:shadow-sm hover:translate-y-[-2px] transition-all group block cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center mx-auto mb-2 text-emerald-600 transition-colors">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {area.name}
              </h3>
              <span className="text-[10px] text-slate-500 font-medium block mt-0.5">
                {area.type}
              </span>
              <span className="text-[10px] text-emerald-700 font-semibold mt-1.5 flex items-center justify-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Taxi info</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </span>
            </a>
          ))}
        </div>

        {/* Link to Hub Page */}
        <div className="text-center mb-8">
          <a
            href="/service-areas/"
            onClick={handleHubClick}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-100 hover:bg-emerald-200 px-4 py-2 rounded-lg transition-colors shadow-xs"
          >
            <span>Explore Full Service Areas Directory & Fares</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Long Distance Banner */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Long-Distance Travel Throughout the UK
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                {LONG_DISTANCE_STATEMENT}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto justify-end">
            <a
              href={BUSINESS_CONFIG.phoneHref}
              className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {BUSINESS_CONFIG.phone}</span>
            </a>
            <a
              href={BUSINESS_CONFIG.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
