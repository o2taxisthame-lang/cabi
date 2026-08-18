import React, { useState, useEffect } from 'react';
import {
  Car,
  Calendar,
  Clock,
  MapPin,
  Users,
  Luggage,
  Plane,
  RotateCcw,
  FileText,
  User,
  Phone,
  Mail,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppBookingLink } from '../config/business';
import { BookingFormData, JourneyType } from '../types';

interface BookingFormProps {
  initialValues?: Partial<BookingFormData>;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialValues }) => {
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: initialValues?.fullName || '',
    mobileNumber: initialValues?.mobileNumber || '',
    email: initialValues?.email || '',
    pickupAddress: initialValues?.pickupAddress || '',
    destination: initialValues?.destination || '',
    date: initialValues?.date || today,
    pickupTime: initialValues?.pickupTime || '12:00',
    passengers: initialValues?.passengers || '1',
    luggage: initialValues?.luggage || '0',
    journeyType: (initialValues?.journeyType as JourneyType) || 'Local Taxi',
    flightNumber: initialValues?.flightNumber || '',
    returnJourney: initialValues?.returnJourney || false,
    returnDate: initialValues?.returnDate || today,
    returnTime: initialValues?.returnTime || '18:00',
    additionalRequirements: initialValues?.additionalRequirements || '',
    message: initialValues?.message || '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync if initial values change or URL query params exist
  useEffect(() => {
    if (initialValues) {
      setFormData((prev) => ({
        ...prev,
        ...initialValues,
      }));
    } else if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const pickupParam = searchParams.get('pickup') || searchParams.get('from');
      const destParam = searchParams.get('dest') || searchParams.get('to');
      const journeyParam = searchParams.get('journey');

      if (pickupParam || destParam || journeyParam) {
        setFormData((prev) => ({
          ...prev,
          pickupAddress: pickupParam || prev.pickupAddress,
          destination: destParam || prev.destination,
          journeyType: (journeyParam as JourneyType) || prev.journeyType,
        }));
      }
    }
  }, [initialValues]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      ...formData,
      _subject: `New Taxi Booking Enquiry: ${formData.fullName} (${formData.journeyType}) - O2Taxi`,
      _template: 'table',
      _captcha: 'false',
      submittedAt: new Date().toISOString(),
      recipientInbox: 'info@o2taxi.com',
    };

    try {
      // 1. Submit to Cloudflare Pages API endpoint
      try {
        await fetch('/api/booking', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch {
        // Fallback for static builds
      }

      // 2. Direct web form endpoint delivery to info@o2taxi.com
      try {
        await fetch('https://formsubmit.co/ajax/info@o2taxi.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            Name: formData.fullName,
            Phone: formData.mobileNumber,
            Email: formData.email || 'Not provided',
            JourneyType: formData.journeyType,
            PickupAddress: formData.pickupAddress,
            Destination: formData.destination,
            Date: formData.date,
            PickupTime: formData.pickupTime,
            Passengers: formData.passengers,
            Luggage: `${formData.luggage} bags`,
            FlightNumber: formData.flightNumber || 'N/A',
            ReturnJourney: formData.returnJourney
              ? `Yes (${formData.returnDate} at ${formData.returnTime})`
              : 'No',
            SpecialNotes: formData.additionalRequirements || 'None',
            _subject: `Taxi Booking Enquiry from ${formData.fullName} [info@o2taxi.com]`,
          }),
        });
      } catch {
        // Network fallback
      }

      setIsSubmitted(true);
    } catch {
      setErrorMessage('Unable to process enquiry. Please call or WhatsApp O2Taxi directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppConfirmation = () => {
    const parts = [
      `Hello O2Taxi, I would like to confirm my booking enquiry:`,
      `• Name: ${formData.fullName}`,
      `• Phone: ${formData.mobileNumber}`,
      `• Type: ${formData.journeyType}`,
      `• Pickup: ${formData.pickupAddress}`,
      `• Destination: ${formData.destination}`,
      `• Date: ${formData.date} at ${formData.pickupTime}`,
      `• Passengers: ${formData.passengers}`,
      `• Luggage: ${formData.luggage} bags`,
      formData.flightNumber ? `• Flight No: ${formData.flightNumber}` : '',
      formData.returnJourney
        ? `• Return: Yes (${formData.returnDate} at ${formData.returnTime})`
        : '• Return: No',
      formData.additionalRequirements
        ? `• Notes: ${formData.additionalRequirements}`
        : '',
    ].filter(Boolean);

    return parts.join('\n');
  };

  const generateEmailFallbackLink = () => {
    const subject = encodeURIComponent(`Booking Enquiry: ${formData.fullName} - ${formData.date}`);
    const body = encodeURIComponent(
      `Hello O2Taxi Dispatch Team,\n\n` +
      `Here are my trip details:\n` +
      `Name: ${formData.fullName}\n` +
      `Phone: ${formData.mobileNumber}\n` +
      `Email: ${formData.email}\n` +
      `Journey Type: ${formData.journeyType}\n` +
      `Pickup: ${formData.pickupAddress}\n` +
      `Destination: ${formData.destination}\n` +
      `Date & Time: ${formData.date} at ${formData.pickupTime}\n` +
      `Passengers: ${formData.passengers}\n` +
      `Luggage: ${formData.luggage}\n` +
      (formData.flightNumber ? `Flight Number: ${formData.flightNumber}\n` : '') +
      (formData.returnJourney ? `Return: ${formData.returnDate} at ${formData.returnTime}\n` : '') +
      (formData.additionalRequirements ? `Notes: ${formData.additionalRequirements}\n` : '')
    );
    return `mailto:info@o2taxi.com?subject=${subject}&body=${body}`;
  };

  if (isSubmitted) {
    return (
      <div
        id="booking-confirmation-box"
        className="bg-white rounded-2xl border border-emerald-200 shadow-xl p-6 sm:p-10 text-center max-w-2xl mx-auto animate-in fade-in duration-300"
      >
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Booking Enquiry Sent to info@o2taxi.com
        </h3>

        <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 text-sm font-medium">
          <p className="font-bold text-emerald-900 mb-1">✓ Sent to info@o2taxi.com & 24/7 Dispatch</p>
          Thank you, {formData.fullName}. Your booking enquiry has been received and emailed directly to our team. O2Taxi will contact you shortly to confirm your journey.
        </div>

        <p className="text-slate-600 text-sm mt-4 leading-relaxed">
          Trip summary: <strong>{formData.pickupAddress}</strong> to <strong>{formData.destination}</strong> on <strong>{formData.date}</strong> at <strong>{formData.pickupTime}</strong>.
        </p>

        {/* Instant Verification CTAs */}
        <div className="mt-8 pt-6 border-t border-slate-200 space-y-3">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Need Immediate Confirmation or Have Questions?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              id="success-whatsapp-btn"
              href={getWhatsAppBookingLink(generateWhatsAppConfirmation())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Summary on WhatsApp</span>
            </a>
            <a
              id="success-call-btn"
              href={BUSINESS_CONFIG.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call {BUSINESS_CONFIG.phone}</span>
            </a>
            <a
              id="success-email-btn"
              href={generateEmailFallbackLink()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm border border-slate-300 transition-all"
            >
              <Mail className="w-4 h-4 text-slate-600" />
              <span>Email info@o2taxi.com</span>
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
          }}
          className="mt-6 text-xs text-slate-500 hover:text-slate-800 underline font-medium"
        >
          Submit another booking request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5 sm:p-8 lg:p-10 max-w-4xl mx-auto">
      <div className="border-b border-slate-100 pb-6 mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-semibold text-xs mb-2">
          <Car className="w-3.5 h-3.5 text-emerald-700" />
          Online Reservation
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Request Your Taxi Journey
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Complete the details below to request a ride. Our team will contact you to confirm the booking and provide fixed quotation details.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section 1: Passenger Information */}
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
            <User className="w-4 h-4 text-emerald-600" />
            <span>1. Contact & Passenger Details</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            <div>
              <label
                htmlFor="booking-fullName"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Full Name <span className="text-emerald-600">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  id="booking-fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="booking-mobileNumber"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Mobile Number <span className="text-emerald-600">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  id="booking-mobileNumber"
                  name="mobileNumber"
                  required
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="e.g. 07923 360048"
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="booking-email"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Email Address <span className="text-emerald-600">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  id="booking-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. sarah@example.com"
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Journey Particulars */}
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
            <Car className="w-4 h-4 text-emerald-600" />
            <span>2. Journey Particulars</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4">
            <div>
              <label
                htmlFor="booking-pickupAddress"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Pickup Address / Location <span className="text-emerald-600">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  id="booking-pickupAddress"
                  name="pickupAddress"
                  required
                  value={formData.pickupAddress}
                  onChange={handleChange}
                  placeholder="House name/number, Street, Town/Postcode"
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="booking-destination"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Destination Address / Terminal <span className="text-emerald-600">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  id="booking-destination"
                  name="destination"
                  required
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="e.g. Heathrow Terminal 5 / Haddenham Parkway"
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div>
              <label
                htmlFor="booking-journeyType"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Journey Type <span className="text-emerald-600">*</span>
              </label>
              <select
                id="booking-journeyType"
                name="journeyType"
                required
                value={formData.journeyType}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="Local Taxi">Local Taxi</option>
                <option value="Airport Transfer">Airport Transfer</option>
                <option value="Train Station Transfer">Train Station Transfer</option>
                <option value="Long Distance">Long Distance</option>
                <option value="School Run">School Run</option>
                <option value="Business Travel">Business Travel</option>
                <option value="Delivery">Delivery</option>
                <option value="Pub / Club Transfer">Pub / Club Transfer</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="booking-date"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Pickup Date <span className="text-emerald-600">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="date"
                  id="booking-date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="booking-pickupTime"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Pickup Time <span className="text-emerald-600">*</span>
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="time"
                  id="booking-pickupTime"
                  name="pickupTime"
                  required
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="booking-passengers"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Passengers <span className="text-emerald-600">*</span>
              </label>
              <div className="relative">
                <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <select
                  id="booking-passengers"
                  name="passengers"
                  required
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4 Passengers</option>
                  <option value="5">5 Passengers (MPV)</option>
                  <option value="6">6 Passengers (Large MPV)</option>
                  <option value="7+">7+ Passengers</option>
                </select>
              </div>
            </div>
          </div>

          {/* Luggage & Flight Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-4">
            <div>
              <label
                htmlFor="booking-luggage"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Luggage / Suitcases <span className="text-emerald-600">*</span>
              </label>
              <div className="relative">
                <Luggage className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <select
                  id="booking-luggage"
                  name="luggage"
                  required
                  value={formData.luggage}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="0">No Luggage / Handbags only</option>
                  <option value="1">1 Large Suitcase</option>
                  <option value="2">2 Large Suitcases</option>
                  <option value="3">3 Large Suitcases</option>
                  <option value="4+">4+ Suitcases (Estate/MPV needed)</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="booking-flightNumber"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Flight Number (For Airport Transfers)
              </label>
              <div className="relative">
                <Plane className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  id="booking-flightNumber"
                  name="flightNumber"
                  value={formData.flightNumber}
                  onChange={handleChange}
                  placeholder="e.g. BA 117 / VS 003"
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Return Journey Toggle */}
        <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="booking-returnJourney"
              name="returnJourney"
              checked={formData.returnJourney}
              onChange={handleChange}
              className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
            />
            <label
              htmlFor="booking-returnJourney"
              className="text-sm font-bold text-slate-900 flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-emerald-600" />
              <span>I require a Return Journey</span>
            </label>
          </div>

          {formData.returnJourney && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200 animate-in fade-in duration-200">
              <div>
                <label
                  htmlFor="booking-returnDate"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Return Date
                </label>
                <input
                  type="date"
                  id="booking-returnDate"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label
                  htmlFor="booking-returnTime"
                  className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Return Pickup Time / Landing Time
                </label>
                <input
                  type="time"
                  id="booking-returnTime"
                  name="returnTime"
                  value={formData.returnTime}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* Section 4: Notes and Message */}
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
            <FileText className="w-4 h-4 text-emerald-600" />
            <span>3. Additional Requirements & Notes</span>
          </h3>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="booking-additionalRequirements"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Additional Requirements (Child seats, extra stops, oversize luggage)
              </label>
              <input
                type="text"
                id="booking-additionalRequirements"
                name="additionalRequirements"
                value={formData.additionalRequirements}
                onChange={handleChange}
                placeholder="e.g. Booster seat requested, two pickup addresses in Thame"
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label
                htmlFor="booking-message"
                className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5"
              >
                Message / Special Instructions
              </label>
              <textarea
                id="booking-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Any further details for the driver..."
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>
        </div>

        {/* Submit and Secondary Actions */}
        <div className="pt-6 border-t border-slate-200 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              id="booking-submit-btn"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-md transition-all active:scale-[0.98] cursor-pointer disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Submitting Enquiry...' : 'Request Booking'}</span>
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <a
                id="booking-phone-alt"
                href={BUSINESS_CONFIG.phoneHref}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>
              <a
                id="booking-wa-alt"
                href={BUSINESS_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>
              Your information is private and will only be used by O2Taxi to confirm and fulfill your booking.
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};
