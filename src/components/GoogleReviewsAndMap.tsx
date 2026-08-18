import React from 'react';
import {
  Star,
  MapPin,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  ThumbsUp,
  MessageSquare,
  Navigation,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface ReviewItem {
  id: string;
  author: string;
  date: string;
  rating: number;
  location: string;
  comment: string;
  serviceType: string;
}

const FEATURED_REVIEWS: ReviewItem[] = [
  {
    id: '1',
    author: 'James H.',
    date: 'Recent Review',
    rating: 5,
    location: 'Thame to Heathrow Airport',
    comment:
      'Superb taxi service! Booked an early morning transfer from Thame to Heathrow T5. Driver arrived 10 minutes early in a clean vehicle and got us there smoothly with zero stress. Highly recommend O2Taxi!',
    serviceType: 'Airport Transfer',
  },
  {
    id: '2',
    author: 'Sarah M.',
    date: 'Recent Review',
    rating: 5,
    location: 'Haddenham & Thame Parkway',
    comment:
      'Always reliable when getting back late from London at Haddenham Parkway station. Quick pickup, fair prices, and very courteous driver. The best taxi service in Thame by far.',
    serviceType: 'Station Transfer',
  },
  {
    id: '3',
    author: 'David P.',
    date: 'Recent Review',
    rating: 5,
    location: 'Long Crendon to Oxford',
    comment:
      'Excellent communication on WhatsApp and spot-on timing. Used them for a trip into Oxford and back late evening. Friendly driver and clean car. 5 stars all the way!',
    serviceType: 'Local & City Taxi',
  },
  {
    id: '4',
    author: 'Emma W.',
    date: 'Recent Review',
    rating: 5,
    location: 'Chinnor to Gatwick Airport',
    comment:
      'Booked O2Taxi for a family holiday run to Gatwick with luggage. Punctual, spacious car, and tracked our return flight delay so they were right there when we landed. Fantastic!',
    serviceType: 'Airport Transfer',
  },
];

export const GoogleReviewsAndMap: React.FC = () => {
  return (
    <section id="google-reviews-section" className="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Google & Facebook CTAs */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 pb-10 border-b border-slate-800">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
              <span>5.0 Star Rated on Google</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Trusted by Passengers in Thame & Oxfordshire
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Read what our local customers and regular commuters say about our 24/7 reliability, punctuality, and friendly service.
            </p>
          </div>

          {/* Direct External Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              id="google-review-cta"
              href={BUSINESS_CONFIG.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
            >
              <Star className="w-4 h-4 fill-white text-white" />
              <span>Leave a Google Review</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/80" />
            </a>

            <a
              id="facebook-page-cta"
              href={BUSINESS_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
            >
              <FacebookIcon className="w-4 h-4 fill-current" />
              <span>Follow on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {FEATURED_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 transition-all shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block">{review.author}</span>
                  <span className="text-[11px] text-slate-400">{review.location}</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-emerald-300 font-medium">
                  {review.serviceType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google My Business & Map Presence Banner */}
        <div className="mt-10 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                <span>Find O2Taxi on Google Maps</span>
                <span className="px-2 py-0.5 text-[10px] uppercase font-bold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Verified Local Business
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Operating base in Thame, Oxfordshire. Providing 24/7 taxi dispatch with professional drivers across OX9, HP17, HP18, OX44 and all surrounding postcodes.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <a
              id="google-maps-listing-btn"
              href={BUSINESS_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-colors"
            >
              <Navigation className="w-4 h-4 text-emerald-400" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              id="google-review-badge-btn"
              href={BUSINESS_CONFIG.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
            >
              <Star className="w-4 h-4 fill-white text-white" />
              <span>Review Us on Google</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Clean Facebook SVG Icon
export function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
