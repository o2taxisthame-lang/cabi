export type JourneyType =
  | 'Local Taxi'
  | 'Airport Transfer'
  | 'Train Station Transfer'
  | 'Long Distance'
  | 'School Run'
  | 'Business Travel'
  | 'Delivery'
  | 'Pub / Club Transfer'
  | 'Other';

export interface BookingFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  pickupAddress: string;
  destination: string;
  date: string;
  pickupTime: string;
  passengers: string;
  luggage: string;
  journeyType: JourneyType;
  flightNumber?: string;
  returnJourney: boolean;
  returnDate?: string;
  returnTime?: string;
  additionalRequirements?: string;
  message?: string;
}

export interface QuickBookingFormData {
  pickupLocation: string;
  destination: string;
  date: string;
  time: string;
  passengers: string;
  journeyType: JourneyType;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export interface AirportGuidePrice {
  from: string;
  to: string;
  priceRange: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  heroHeadline: string;
  heroCopy: string;
  iconName: string;
  keyFeatures: string[];
  faqs?: { question: string; answer: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface PageMeta {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: string;
}
