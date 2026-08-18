import React, { useState } from 'react';
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Car,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppBookingLink } from '../config/business';
import { JourneyType } from '../types';

interface QuickBookingHeroFormProps {
  onNavigate: (path: string, state?: Record<string, unknown>) => void;
}

export const QuickBookingHeroForm: React.FC<QuickBookingHeroFormProps> = ({ onNavigate }) => {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    pickupLocation: '',
    destination: '',
    date: today,
    time: '12:00',
    passengers: '1',
    journeyType: 'Local Taxi' as JourneyType,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to full booking form with state pre-filled
    onNavigate('/book-your-taxi/', {
      pickupAddress: formData.pickupLocation,
      destination: formData.destination,
      date: formData.date,
      pickupTime: formData.time,
      passengers: formData.passengers,
      journeyType: formData.journeyType,
    });
  };

  const generateWhatsAppMessage = () => {
    const parts = [
      `Hello O2Taxi, I would like to request a taxi:`,
      `• Type: ${formData.journeyType}`,
      formData.pickupLocation ? `• From: ${formData.pickupLocation}` : '',
      formData.destination ? `• To: ${formData.destination}` : '',
      formData.date ? `• Date: ${formData.date}` : '',
      formData.time ? `• Time: ${formData.time}` : '',
      `• Passengers: ${formData.passengers}`,
    ].filter(Boolean);
    return parts.join('\n');
  };

  return (
    <div
      id="quick-booking-section"
      className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-5 sm:p-8 -mt-8 relative z-20 max-w-6xl mx-auto"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-semibold text-xs mb-2">
            <Car className="w-3.5 h-3.5 text-emerald-700" />
            24/7 Fast Booking Service
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Quick Journey Enquiry & Fare Estimate
          </h2>
          <p className="text-sm text-slate-500 mt-0.5">
            Enter your journey details for an instant direct quotation from O2Taxi Thame.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto">
          <a
            href={BUSINESS_CONFIG.phoneHref}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>Call {BUSINESS_CONFIG.phone}</span>
          </a>
          <a
            href={getWhatsAppBookingLink(generateWhatsAppMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      <form onSubmit={handleQuickSubmit} className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {/* Pickup */}
          <div>
            <label
              htmlFor="quick-pickup"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Pickup Location <span className="text-emerald-600">*</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                id="quick-pickup"
                name="pickupLocation"
                required
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="e.g. Thame High Street / Postcode"
                className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>

          {/* Destination */}
          <div>
            <label
              htmlFor="quick-destination"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Destination <span className="text-emerald-600">*</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                id="quick-destination"
                name="destination"
                required
                value={formData.destination}
                onChange={handleChange}
                placeholder="e.g. Heathrow T5 / Oxford Rail"
                className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>

          {/* Journey Type */}
          <div>
            <label
              htmlFor="quick-journey-type"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Journey Type
            </label>
            <div className="relative">
              <Car className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                id="quick-journey-type"
                name="journeyType"
                value={formData.journeyType}
                onChange={handleChange}
                className="w-full pl-10 pr-8 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              >
                <option value="Local Taxi">Local Taxi (Thame & villages)</option>
                <option value="Airport Transfer">Airport Transfer (Heathrow, Gatwick, etc.)</option>
                <option value="Train Station Transfer">Train Station Transfer (Parkway/Oxford)</option>
                <option value="Long Distance">Long Distance UK Travel</option>
                <option value="School Run">School Run</option>
                <option value="Business Travel">Business & Corporate Travel</option>
                <option value="Delivery">Delivery / Courier Service</option>
                <option value="Pub / Club Transfer">Pub & Club Evening Transfer</option>
                <option value="Other">Other Requirement</option>
              </select>
            </div>
          </div>

          {/* Date */}
          <div>
            <label
              htmlFor="quick-date"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Date
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="date"
                id="quick-date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>

          {/* Time */}
          <div>
            <label
              htmlFor="quick-time"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Time
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="time"
                id="quick-time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>

          {/* Passengers */}
          <div>
            <label
              htmlFor="quick-passengers"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
            >
              Passengers
            </label>
            <div className="relative">
              <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                id="quick-passengers"
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                className="w-full pl-10 pr-8 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              >
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4 Passengers</option>
                <option value="5">5 Passengers (MPV / Estate)</option>
                <option value="6">6 Passengers (Large MPV)</option>
                <option value="7+">7+ Passengers</option>
              </select>
            </div>
          </div>
        </div>

        {/* Form Action Footer */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>24/7 Instant response • No obligation quotations • Direct driver confirmation</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="submit"
              id="quick-book-submit-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Continue Booking</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
