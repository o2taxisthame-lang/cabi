import { ServiceItem } from '../types';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'local-taxi',
    slug: 'local-taxi-services',
    title: 'Local Taxi Services',
    shortDescription:
      'Reliable local taxi journeys throughout Thame and surrounding Oxfordshire areas.',
    fullDescription:
      'O2Taxi offers fast, dependable local taxi services throughout Thame, Haddenham, Chinnor, Long Crendon, and surrounding Oxfordshire villages. Whether you are shopping in Thame town centre, visiting local medical centres, attending appointments, or meeting friends, our drivers provide friendly, punctual door-to-door transport.',
    heroHeadline: 'Reliable Local Taxi Service in Thame & Oxfordshire',
    heroCopy:
      'Fast, friendly and dependable local transport for everyday journeys, shopping trips, appointments, and town travel.',
    iconName: 'Car',
    keyFeatures: [
      '24/7 availability across Thame & Oxfordshire',
      'Fast response times for local collections',
      'Clean, comfortable, and well-maintained vehicles',
      'Experienced drivers with comprehensive local knowledge',
      'Transparent phone & WhatsApp booking',
    ],
    faqs: [
      {
        question: 'How quickly can a local taxi arrive in Thame?',
        answer:
          'We provide prompt local dispatch across Thame and nearby villages. For guaranteed pickup times or peak hours, pre-booking via phone or WhatsApp is recommended.',
      },
      {
        question: 'Can I pay the driver directly?',
        answer:
          'Yes, we offer straightforward payment methods for all journeys. Contact us for details when booking.',
      },
    ],
  },
  {
    id: 'airport-transfers',
    slug: 'airport-transfers',
    title: 'Airport Transfers',
    shortDescription:
      'Transfers to Heathrow, Gatwick, Luton, Stansted, Birmingham, and London City.',
    fullDescription:
      'Start or conclude your holiday and business flights stress-free with O2Taxi airport transfers. Operating 24 hours a day, 7 days a week, we provide dedicated door-to-terminal travel between Thame, Oxfordshire, and all major UK international airports.',
    heroHeadline: 'Reliable Airport Transfers from Thame & Oxfordshire',
    heroCopy:
      'Dependable 24/7 airport transportation to Heathrow, Gatwick, Luton, Stansted, Birmingham and London City with flight tracking and luggage assistance.',
    iconName: 'Plane',
    keyFeatures: [
      'Coverage for all major UK airports (Heathrow, Gatwick, Luton, Stansted, Birmingham, London City)',
      'Flight tracking for timely arrivals and delay monitoring',
      'Meet and greet service available on terminal returns',
      'Luggage assistance provided with every booking',
      'Comfortable vehicles suitable for individuals and families',
      'Pre-booking available 24/7',
    ],
    faqs: [
      {
        question: 'Do you track incoming flights?',
        answer:
          'Yes, we monitor incoming flight numbers so your pickup is scheduled accurately even if your flight is delayed.',
      },
      {
        question: 'Are child seats or extra luggage supported?',
        answer:
          'Please specify your passenger and luggage details in the booking form or when messaging us so we can assign an appropriately sized vehicle.',
      },
    ],
  },
  {
    id: 'long-distance',
    slug: 'long-distance-taxi',
    title: 'Long Distance Taxi',
    shortDescription: 'Long-distance journeys throughout the UK.',
    fullDescription:
      'Need to travel beyond Oxfordshire? O2Taxi provides direct, private long-distance taxi journeys to any destination across the United Kingdom. Avoid train delays, crowded carriages, and multiple interchanges by booking a comfortable, direct chauffeur-level taxi ride.',
    heroHeadline: 'Direct Long-Distance Taxi Travel Across the UK',
    heroCopy:
      'Comfortable, reliable direct transport from Thame and Oxfordshire to any destination nationwide.',
    iconName: 'Compass',
    keyFeatures: [
      'UK-wide destinations: London, Birmingham, Manchester, seaports, and beyond',
      'Direct, non-stop private vehicle travel',
      'Spacious interiors with ample luggage capacity',
      'Fixed, transparent quotations agreed in advance',
      '24/7 door-to-door nationwide service',
    ],
    faqs: [
      {
        question: 'How do I get a price for a long-distance trip?',
        answer:
          'Contact O2Taxi via phone, WhatsApp, or our booking enquiry form with your pickup location and destination for a quotation.',
      },
      {
        question: 'Can we schedule comfort stops during long journeys?',
        answer:
          'Certainly. Your driver will accommodate comfort or coffee breaks on motorway service routes as requested.',
      },
    ],
  },
  {
    id: 'train-station',
    slug: 'train-station-transfers',
    title: 'Train Station Transfers',
    shortDescription: 'Transfers to local and regional railway stations.',
    fullDescription:
      'Ensure you never miss a connection. O2Taxi delivers timely station transfers to Haddenham & Thame Parkway, Princes Risborough, Aylesbury, Oxford, Bicester Village, and central London rail terminals. We get you to your platform on time and pick you up promptly upon your return.',
    heroHeadline: 'Punctual Train Station Transfers in Oxfordshire',
    heroCopy:
      'Timely transfers to Haddenham & Thame Parkway, Princes Risborough, Oxford, and regional railway stations.',
    iconName: 'Train',
    keyFeatures: [
      'Frequent connections to Haddenham & Thame Parkway station',
      'Early morning commuter pickups and late-night station arrivals',
      'Transfers to Oxford, Princes Risborough, Aylesbury, and Bicester',
      'Luggage handling to the station entrance',
      'Pre-scheduled return bookings',
    ],
    faqs: [
      {
        question: 'How far in advance should I book my station transfer?',
        answer:
          'For peak morning commuter trains, we recommend pre-booking the day before or via WhatsApp for guaranteed scheduling.',
      },
      {
        question: 'What if my return train is delayed?',
        answer:
          'Simply send a quick WhatsApp message or call us with your updated arrival time, and we will adjust your pickup.',
      },
    ],
  },
  {
    id: 'delivery-service',
    slug: 'delivery-service',
    title: 'Delivery Service',
    shortDescription: 'Parcel and delivery journeys.',
    fullDescription:
      'Fast, direct, and secure courier transportation for urgent documents, parcels, keys, and packages. When standard postal services or courier networks are too slow, O2Taxi delivers your items directly from hand to hand on a dedicated vehicle.',
    heroHeadline: 'Fast & Secure Parcel & Document Delivery Service',
    heroCopy:
      'Dedicated courier journeys for urgent packages, essential documents, medical supplies, and local parcels.',
    iconName: 'Package',
    keyFeatures: [
      'Same-day direct point-to-point courier delivery',
      'Urgent business document and contract delivery',
      'Safe transport for keys, passports, and essential items',
      'Direct receipt and hand-to-hand delivery confirmation',
      'Available 24 hours a day, 7 days a week',
    ],
    faqs: [
      {
        question: 'What types of items do you transport?',
        answer:
          'We transport legal documents, business parcels, keys, laptops, medical packets, and general boxed deliveries that fit safely inside our vehicles.',
      },
    ],
  },
  {
    id: 'school-runs',
    slug: 'school-runs',
    title: 'School Runs',
    shortDescription: 'School transportation.',
    fullDescription:
      'O2Taxi provides safe, dependable, and vetted daily school transport for students across Thame and nearby Oxfordshire villages. We ensure students arrive safely at school in the morning and return promptly home in the afternoon.',
    heroHeadline: 'Safe & Dependable School Transport Services',
    heroCopy:
      'Punctual and secure school journeys across Thame, Lord Williams’s School, and local Oxfordshire educational establishments.',
    iconName: 'GraduationCap',
    keyFeatures: [
      'Regular morning and afternoon school runs',
      'Consistent, experienced local drivers',
      'Strict punctuality to ensure students arrive before registration',
      'Clean, comfortable, and fully insured vehicles',
      'Direct parent communication via phone and WhatsApp',
    ],
    faqs: [
      {
        question: 'Can we arrange term-time recurring school runs?',
        answer:
          'Yes. Contact O2Taxi directly by phone or email to discuss recurring weekly schedules.',
      },
    ],
  },
  {
    id: 'business-travel',
    slug: 'business-travel',
    title: 'Business & Corporate Travel',
    shortDescription: 'Professional corporate transportation.',
    fullDescription:
      'Elevate your corporate travel with O2Taxi. We provide discreet, professional, and punctual transport for executives, clients, delegates, and employees attending meetings, conferences, corporate events, and airport departures.',
    heroHeadline: 'Professional Business & Corporate Travel in Oxfordshire',
    heroCopy:
      'Punctual, executive transportation for meetings, client hospitality, conferences, and corporate airport travel.',
    iconName: 'Briefcase',
    keyFeatures: [
      'Punctual executive travel for business meetings and conferences',
      'Professional, discreet drivers',
      'Direct transport between business parks, Oxford, London, and airports',
      'Clean, executive-grade passenger environment',
      'Reliable corporate transport booking via phone and email',
    ],
    faqs: [
      {
        question: 'Can you provide invoices or receipts for corporate expense claims?',
        answer:
          'Yes, full receipts and journey documentation can be provided for your accounting records.',
      },
    ],
  },
  {
    id: 'pub-club',
    slug: 'pub-club-transfers',
    title: 'Pub & Club Transfers',
    shortDescription: 'Safe local evening transportation.',
    fullDescription:
      'Enjoy your evening out in Thame, Oxford, or surrounding village pubs without worrying about driving or parking. O2Taxi provides safe, reliable evening and weekend transport so you and your group get home securely at the end of the night.',
    heroHeadline: 'Safe Evening, Pub & Club Transfers in Thame & Oxford',
    heroCopy:
      'Dependable evening transportation for dining out, pub visits, celebrations, and late-night returns.',
    iconName: 'Sparkles',
    keyFeatures: [
      'Late-night weekend pickup service',
      'Group transport for celebrations and dining out',
      'Door-to-door drop-offs right to your home',
      'Pre-book your return time in advance to avoid waiting',
      '24/7 availability for late night returns',
    ],
    faqs: [
      {
        question: 'Should we pre-book our pickup for the end of the night?',
        answer:
          'Yes, we strongly recommend pre-booking your evening return journey in advance, especially on Friday and Saturday nights.',
      },
    ],
  },
];
