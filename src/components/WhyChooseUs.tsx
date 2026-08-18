import React from 'react';
import {
  Clock,
  MapPin,
  ShieldCheck,
  Sparkles,
  Plane,
  PhoneCall,
  MessageSquare,
  Globe,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description:
        'Round-the-clock taxi transportation every single day of the year, including early morning airport flights and late-night station pickups.',
    },
    {
      icon: MapPin,
      title: 'Comprehensive Local Knowledge',
      description:
        'Drivers with in-depth knowledge of Thame, Oxfordshire country roads, bypasses, and traffic patterns for efficient journey routing.',
    },
    {
      icon: ShieldCheck,
      title: 'Professional & Licensed',
      description:
        'Fully licensed professional drivers committed to passenger safety, punctuality, and courteous service.',
    },
    {
      icon: Sparkles,
      title: 'Comfortable & Clean Vehicles',
      description:
        'Well-maintained, spacious vehicles providing a relaxed, peaceful ride whether for a short trip across town or a long motorway journey.',
    },
    {
      icon: Plane,
      title: 'Airport Transfer Experience',
      description:
        'Specialised airport transfers to Heathrow, Gatwick, Luton, Stansted, and Birmingham with live flight tracking and terminal meet & greet.',
    },
    {
      icon: PhoneCall,
      title: 'Easy Phone Booking',
      description:
        `Direct one-touch phone dispatch on ${BUSINESS_CONFIG.phone} with no complicated automated menus.`,
    },
    {
      icon: MessageSquare,
      title: 'Quick WhatsApp Booking',
      description:
        'Instant messaging support for quotations, updates, train delays, and journey bookings via WhatsApp.',
    },
    {
      icon: Globe,
      title: 'Local & Long-Distance',
      description:
        'Complete flexibility from short hops across Thame to direct nationwide journeys anywhere in mainland UK.',
    },
  ];

  return (
    <section id="why-choose-o2taxi" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-semibold text-xs mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            Reliability & Service
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose O2Taxi
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Dedicated to providing Thame and Oxfordshire with dependable, punctual, and high-quality passenger transport.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-500 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mb-3.5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">{pt.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
