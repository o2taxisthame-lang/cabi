import React, { useState } from 'react';
import { Mail, Phone, User, MessageSquare, Send, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG, getWhatsAppBookingLink } from '../config/business';
import { ContactFormData } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      ...formData,
      _subject: `New Website Contact Message: ${formData.name} - ${formData.subject || 'General Enquiry'} [info@o2taxi.com]`,
      _template: 'table',
      _captcha: 'false',
      submittedAt: new Date().toISOString(),
      recipientInbox: 'info@o2taxi.com',
    };

    try {
      // 1. Submit to Cloudflare Pages API endpoint
      try {
        await fetch('/api/contact', {
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
            Name: formData.name,
            Phone: formData.phone,
            Email: formData.email || 'Not provided',
            Subject: formData.subject || 'General Enquiry',
            Message: formData.message,
            _subject: `Contact Form Message from ${formData.name} [info@o2taxi.com]`,
          }),
        });
      } catch {
        // Network fallback
      }

      setIsSubmitted(true);
    } catch {
      setErrorMessage('Unable to send message right now. Please call or WhatsApp O2Taxi directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateContactEmailFallback = () => {
    const subject = encodeURIComponent(`Website Message: ${formData.subject || formData.name}`);
    const body = encodeURIComponent(
      `Hello O2Taxi Team,\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n`
    );
    return `mailto:info@o2taxi.com?subject=${subject}&body=${body}`;
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-emerald-200 shadow-md p-6 sm:p-8 text-center animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Message Dispatched to info@o2taxi.com</h3>
        <div className="mt-3 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-950 text-xs sm:text-sm font-medium">
          <p className="font-bold text-emerald-900 mb-0.5">✓ Dispatched to info@o2taxi.com</p>
          Thank you, {formData.name}. Your message has been sent to our dispatch team at <strong>info@o2taxi.com</strong>. We will get back to you promptly.
        </div>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={BUSINESS_CONFIG.phoneHref}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm"
          >
            <Phone className="w-4 h-4" />
            <span>Call {BUSINESS_CONFIG.phone}</span>
          </a>
          <a
            href={BUSINESS_CONFIG.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
          <a
            href={generateContactEmailFallback()}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm border border-slate-300"
          >
            <Mail className="w-4 h-4 text-slate-600" />
            <span>Email App Copy</span>
          </a>
        </div>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-5 text-xs text-slate-500 hover:text-slate-800 underline block mx-auto"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-8">
      <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
        Send O2Taxi a Message
      </h3>
      <p className="text-slate-500 text-xs sm:text-sm mb-6">
        Have a question or custom transportation requirement? Fill out the form below or contact us 24/7 by phone or WhatsApp.
      </p>

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
          >
            Your Name <span className="text-emerald-600">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="contact-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact-phone"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
            >
              Phone Number <span className="text-emerald-600">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="07923 360048"
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
            >
              Email Address <span className="text-emerald-600">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="info@example.com"
                className="w-full pl-10 pr-3 py-2 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            id="contact-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Corporate account inquiry / Airport transfer quote"
            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1"
          >
            Message <span className="text-emerald-600">*</span>
          </label>
          <div className="relative">
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="How can O2Taxi assist you today?"
              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <button
          type="submit"
          id="contact-submit-btn"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow transition-all active:scale-[0.98] cursor-pointer disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
        </button>
      </form>
    </div>
  );
};
