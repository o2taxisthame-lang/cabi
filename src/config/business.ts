/**
 * Central Business Configuration for O2Taxi
 * Authoritative business information used across all components and pages.
 * Do not hard-code contact information independently elsewhere.
 */

export const BUSINESS_CONFIG = {
  name: 'O2Taxi',
  tagline: 'Reliable 24/7 Taxi Service in Thame & Oxfordshire',
  location: 'Thame, Oxfordshire, UK',
  county: 'Oxfordshire',
  town: 'Thame',
  country: 'United Kingdom',
  phone: '07923 360048',
  internationalPhone: '+44 7923 360048',
  phoneHref: 'tel:+447923360048',
  whatsappNumber: '+447923360048',
  whatsappDisplay: '07923 360048',
  whatsappHref: 'https://wa.me/447923360048',
  whatsappDefaultMessage: 'Hello O2Taxi, I would like to make a booking.',
  email: 'info@o2taxi.com',
  emailHref: 'mailto:info@o2taxi.com',
  website: 'www.o2taxi.com',
  websiteUrl: 'https://www.o2taxi.com',
  availability: '24 hours a day, 7 days a week',
  openingHoursDisplay: '24/7 (365 Days a Year)',
  
  // Social, Reviews & Maps Links
  facebookUrl: 'https://www.facebook.com/people/O2taxi/61557639907906/?sk=about',
  googleReviewUrl: 'https://g.page/r/CXE06gz8cm7gEBM/review',
  googleMapsUrl: 'https://maps.app.goo.gl/Ty2H4791WxyFzf5t6',
  googleRating: '5.0',
  googleReviewCount: '50+',
} as const;

export function getWhatsAppBookingLink(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || BUSINESS_CONFIG.whatsappDefaultMessage);
  return `https://wa.me/447923360048?text=${text}`;
}
