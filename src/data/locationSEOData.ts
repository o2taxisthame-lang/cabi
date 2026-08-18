export interface LocalDestinationGuide {
  destination: string;
  category: 'Airport' | 'Railway Station' | 'Hospital / Medical' | 'City / Town' | 'Local Landmark';
  typicalTime: string;
  guidePrice: string;
}

export interface LocationSEOItem {
  id: string;
  name: string;
  slug: string;
  type: 'Primary Hub' | 'Town / City' | 'Local Village' | 'Regional';
  postcodes: string[];
  county: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroTagline: string;
  introText: string[];
  localHighlights: {
    title: string;
    description: string;
  }[];
  popularRoutes: LocalDestinationGuide[];
  keyConnections: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  nearbySlugs: string[];
}

export const LOCATIONS_DATA: LocationSEOItem[] = [
  {
    id: 'thame',
    name: 'Thame',
    slug: 'taxi-thame',
    type: 'Primary Hub',
    postcodes: ['OX9', 'OX9 2', 'OX9 3', 'OX9 7'],
    county: 'Oxfordshire',
    metaTitle: 'Taxi in Thame | 24/7 Local Taxis, Station & Airport Transfers | O2Taxi',
    metaDescription: 'Fast, reliable 24/7 taxi service in Thame, Oxfordshire. Local town cabs, airport transfers to Heathrow & Gatwick, Haddenham Parkway station runs. Call 07923 360048.',
    heroHeadline: 'Reliable 24/7 Taxi Service in Thame, Oxfordshire',
    heroTagline: 'Your local taxi operator based directly in Thame (OX9). Prompt local journeys, airport transfers, station runs, and UK-wide long-distance travel.',
    introText: [
      'O2Taxi is proud to be headquartered in the historic market town of Thame. Whether you need a short ride across town to the High Street, a morning commute to Haddenham & Thame Parkway station, or a direct transfer to Heathrow, Gatwick, Luton, Stansted, or Birmingham airports, our fleet of clean, comfortable vehicles is on call 24 hours a day, 7 days a week.',
      'Our local drivers possess an intimate knowledge of Thame and the surrounding Oxfordshire and Buckinghamshire countryside roads, ensuring you arrive safely and on time without unnecessary delays.',
      'We cater to local residents, business commuters, holidaymakers, school runs, and evening restaurant/pub transfers with upfront guide pricing and courteous service.'
    ],
    localHighlights: [
      {
        title: 'Central Thame Base',
        description: 'Instant local dispatch for Thame High Street, Lea Park, Lord Williams’s School, and local business parks.'
      },
      {
        title: 'Haddenham Parkway Transfers',
        description: 'Scheduled station runs connecting Thame passengers to Chiltern Railways into London Marylebone and Birmingham.'
      },
      {
        title: '24/7 UK Airport Transfers',
        description: 'Fixed-quote airport taxis to London Heathrow (from £75), Luton, Gatwick, Stansted, and Birmingham with flight tracking.'
      },
      {
        title: 'Corporate & Account Travel',
        description: 'Professional transport services for local Thame enterprises, client pick-ups, and executive business meetings.'
      }
    ],
    popularRoutes: [
      { destination: 'London Heathrow Airport (LHR)', category: 'Airport', typicalTime: '45 - 55 mins', guidePrice: 'From £75' },
      { destination: 'London Luton Airport (LTN)', category: 'Airport', typicalTime: '50 - 60 mins', guidePrice: 'From £85' },
      { destination: 'London Gatwick Airport (LGW)', category: 'Airport', typicalTime: '75 - 95 mins', guidePrice: 'From £125' },
      { destination: 'Haddenham & Thame Parkway Station', category: 'Railway Station', typicalTime: '6 - 10 mins', guidePrice: 'From £12 - £18' },
      { destination: 'Oxford City Centre / High Street', category: 'City / Town', typicalTime: '25 - 35 mins', guidePrice: 'From £35 - £45' },
      { destination: 'John Radcliffe Hospital (Oxford)', category: 'Hospital / Medical', typicalTime: '25 - 30 mins', guidePrice: 'From £35 - £45' },
      { destination: 'Aylesbury Town Centre', category: 'City / Town', typicalTime: '18 - 25 mins', guidePrice: 'From £25 - £35' },
      { destination: 'Princes Risborough Station', category: 'Railway Station', typicalTime: '15 - 20 mins', guidePrice: 'From £22 - £30' }
    ],
    keyConnections: ['A418', 'M40 Junction 6 (Lewknor) & Junction 7/8', 'Haddenham & Thame Parkway', 'Thame High Street & Market Square'],
    faqs: [
      {
        question: 'How quickly can an O2Taxi arrive in Thame?',
        answer: 'Because our primary hub and drivers are based right here in Thame, local pickups are often available within 10–15 minutes depending on current traffic and booking volume. We always recommend pre-booking for early morning station and airport runs.'
      },
      {
        question: 'Do you offer transfers to Haddenham & Thame Parkway station?',
        answer: 'Yes, we provide frequent daily transfers to and from Haddenham & Thame Parkway station. We synchronize with your Chiltern Railways train schedule.'
      },
      {
        question: 'Can I book an early morning airport taxi from Thame?',
        answer: 'Absolutely. We operate 24 hours a day, 365 days a year. Our drivers regularly complete 3 AM to 6 AM airport transfers to Heathrow, Gatwick, Luton, and Stansted.'
      }
    ],
    nearbySlugs: ['taxi-haddenham', 'taxi-long-crendon', 'taxi-moreton', 'taxi-towersey', 'taxi-tiddington', 'taxi-chinnor']
  },
  {
    id: 'haddenham',
    name: 'Haddenham',
    slug: 'taxi-haddenham',
    type: 'Town / City',
    postcodes: ['HP17', 'HP17 8'],
    county: 'Buckinghamshire',
    metaTitle: 'Taxi in Haddenham | Haddenham & Thame Parkway Station Transfers | O2Taxi',
    metaDescription: 'Need a taxi in Haddenham? Fast transfers to Haddenham & Thame Parkway station, Heathrow airport, Oxford, and local trips. 24/7 service. Call 07923 360048.',
    heroHeadline: '24/7 Taxi Service in Haddenham & Haddenham Parkway',
    heroTagline: 'Reliable local taxis and station transfers serving Haddenham village, Haddenham & Thame Parkway railway station, and surrounding areas.',
    introText: [
      'Looking for a punctual taxi in Haddenham? O2Taxi provides 24-hour taxi services with experienced drivers throughout Haddenham and the surrounding Buckinghamshire and Oxfordshire countryside.',
      'As the primary railway link for the area, Haddenham & Thame Parkway station connects thousands of commuters to London Marylebone, Oxford, and Birmingham. We specialize in fast, reliable station pick-ups and drop-offs, ensuring you never miss a connecting train.',
      'In addition to rail transfers, we provide prompt village transport, school runs, local dining and event transport, as well as fixed-fare airport transfers to all major UK airports.'
    ],
    localHighlights: [
      {
        title: 'Station Pickup & Drop-Off',
        description: 'Direct taxi service to Haddenham & Thame Parkway railway station with meet & greet options for arriving commuters.'
      },
      {
        title: 'Heathrow & UK Airport Runs',
        description: 'Fixed-price transfers from Haddenham to Heathrow Airport (from £75), Luton, Gatwick, and Stansted.'
      },
      {
        title: 'Village & Countryside Taxi',
        description: 'Connecting Haddenham residents to Thame town centre, Long Crendon, Cuddington, Stone, and Aylesbury.'
      },
      {
        title: 'Pre-Bookable 24/7',
        description: 'Guaranteed early morning and late night bookings for flights, train arrivals, and social functions.'
      }
    ],
    popularRoutes: [
      { destination: 'Haddenham & Thame Parkway Station', category: 'Railway Station', typicalTime: '3 - 7 mins', guidePrice: 'From £10 - £15' },
      { destination: 'London Heathrow Airport (LHR)', category: 'Airport', typicalTime: '45 - 55 mins', guidePrice: 'From £75' },
      { destination: 'London Luton Airport (LTN)', category: 'Airport', typicalTime: '45 - 55 mins', guidePrice: 'From £80' },
      { destination: 'Thame Town Centre', category: 'City / Town', typicalTime: '6 - 10 mins', guidePrice: 'From £12 - £18' },
      { destination: 'Aylesbury Town Centre / Stoke Mandeville', category: 'City / Town', typicalTime: '15 - 20 mins', guidePrice: 'From £22 - £30' },
      { destination: 'Oxford Centre', category: 'City / Town', typicalTime: '30 - 40 mins', guidePrice: 'From £38 - £48' }
    ],
    keyConnections: ['Haddenham & Thame Parkway Rail', 'A418', 'Sheerstock', 'Stanbridge Earls', 'Churchway'],
    faqs: [
      {
        question: 'Can you pick me up directly from Haddenham & Thame Parkway station?',
        answer: 'Yes! You can pre-book your taxi to meet your scheduled train arrival time, or contact us upon arrival. Our driver will meet you outside the station entrance.'
      },
      {
        question: 'How far in advance should I book an airport taxi from Haddenham?',
        answer: 'We recommend booking at least 24–48 hours in advance for airport journeys to ensure vehicle availability and guarantee your preferred pickup time.'
      }
    ],
    nearbySlugs: ['taxi-thame', 'taxi-long-crendon', 'taxi-aylesbury', 'taxi-princes-risborough']
  },
  {
    id: 'chinnor',
    name: 'Chinnor',
    slug: 'taxi-chinnor',
    type: 'Town / City',
    postcodes: ['OX39', 'OX39 4'],
    county: 'Oxfordshire',
    metaTitle: 'Taxi in Chinnor | 24/7 Chinnor Taxis & Airport Transfers | O2Taxi',
    metaDescription: 'Dependable 24/7 taxi service in Chinnor, Oxfordshire. Local taxi rides, transfers to Princes Risborough & Thame, and Heathrow airport cabs. Call 07923 360048.',
    heroHeadline: '24/7 Professional Taxi Service in Chinnor, Oxfordshire',
    heroTagline: 'Fast, friendly local taxi transport for Chinnor, Kingston Blount, and the Chiltern Foothills. Airport transfers, station runs, and local travel.',
    introText: [
      'O2Taxi is your trusted local taxi provider serving Chinnor and the surrounding Chiltern villages. Nestled at the foot of the Chiltern Hills, Chinnor residents enjoy quick access to nearby towns, railway links, and the M40 corridor.',
      'Whether you need a ride to Princes Risborough Railway Station, a shopping trip to Thame, an evening out in Oxford, or an early morning airport transfer to Heathrow, Gatwick, or Luton, O2Taxi offers clean, comfortable cars and friendly local drivers.',
      'We operate 24 hours a day, 7 days a week with transparent fixed-fare options and direct telephone and WhatsApp booking support.'
    ],
    localHighlights: [
      {
        title: 'Chiltern Foothills Coverage',
        description: 'Comprehensive coverage of Chinnor, Kingston Blount, Crowell, and Aston Rowant.'
      },
      {
        title: 'Railway Connections',
        description: 'Swift transfers to Princes Risborough and Haddenham & Thame Parkway stations.'
      },
      {
        title: 'M40 Corridor Travel',
        description: 'Fast access to Lewknor M40 Junction 6 for coach connections and motorway routes to London and Birmingham.'
      },
      {
        title: 'Airport Specialists',
        description: 'Direct airport runs to Heathrow (approx 40-45 mins), Gatwick, Luton, and Stansted.'
      }
    ],
    popularRoutes: [
      { destination: 'London Heathrow Airport (LHR)', category: 'Airport', typicalTime: '40 - 50 mins', guidePrice: 'From £75' },
      { destination: 'Princes Risborough Railway Station', category: 'Railway Station', typicalTime: '10 - 15 mins', guidePrice: 'From £18 - £25' },
      { destination: 'Thame Town Centre', category: 'City / Town', typicalTime: '10 - 14 mins', guidePrice: 'From £16 - £22' },
      { destination: 'Lewknor M40 Junction 6 / Oxford Tube', category: 'Local Landmark', typicalTime: '8 - 12 mins', guidePrice: 'From £14 - £20' },
      { destination: 'High Wycombe', category: 'City / Town', typicalTime: '20 - 25 mins', guidePrice: 'From £28 - £38' }
    ],
    keyConnections: ['B4009', 'Chinnor & Princes Risborough Railway', 'M40 J6 Lewknor', 'Chiltern Hills AONB'],
    faqs: [
      {
        question: 'Do you provide taxis from Chinnor to Princes Risborough station?',
        answer: 'Yes, we run regular station transfers between Chinnor and Princes Risborough station, coordinating with morning and evening peak commuter services.'
      },
      {
        question: 'Can you pick up from wedding venues and pubs near Chinnor?',
        answer: 'Yes, we cater for wedding guests, pub visits, and events throughout the Chinnor, Kingston Blount, and Bledlow Ridge areas.'
      }
    ],
    nearbySlugs: ['taxi-thame', 'taxi-princes-risborough', 'taxi-lewknor', 'taxi-postcombe', 'taxi-sydenham']
  },
  {
    id: 'long-crendon',
    name: 'Long Crendon',
    slug: 'taxi-long-crendon',
    type: 'Local Village',
    postcodes: ['HP18', 'HP18 9'],
    county: 'Buckinghamshire',
    metaTitle: 'Taxi in Long Crendon | Reliable Local & Airport Taxi | O2Taxi',
    metaDescription: '24/7 taxi service in Long Crendon. Prompt rides to Thame, Haddenham Parkway station, Oxford, and Heathrow airport. Call 07923 360048 for instant booking.',
    heroHeadline: 'Dependable 24/7 Taxi Service in Long Crendon',
    heroTagline: 'Punctual local taxis, station transfers, and airport transport for residents and businesses in Long Crendon.',
    introText: [
      'Located just across the River Thame, Long Crendon is one of the most picturesque villages on the Buckinghamshire and Oxfordshire border. O2Taxi delivers prompt, dependable taxi transport for Long Crendon residents, visitors, and business park employees.',
      'Whether you require a taxi into Thame for shopping, a business transfer from the Long Crendon Industrial Estate, or an airport taxi to London Heathrow or Luton, we provide prompt collections with courteous drivers.',
      'Our vehicles are clean, licensed, and available around the clock for local trips, school runs, restaurant visits, and long-distance UK journeys.'
    ],
    localHighlights: [
      {
        title: 'Long Crendon Village & Business Park',
        description: 'Serving village residents and corporate clients located within the Long Crendon Business Park.'
      },
      {
        title: 'Station Transfers in Minutes',
        description: 'Fast transfers to Haddenham & Thame Parkway station (approx 8 mins).'
      },
      {
        title: 'Historic Venues & Dining',
        description: 'Reliable transport for dining at The Angel, Churchill Arms, or visiting the Long Crendon Courthouse.'
      },
      {
        title: 'Direct Airport Taxis',
        description: 'Fixed-price door-to-terminal airport transfers with flight tracking.'
      }
    ],
    popularRoutes: [
      { destination: 'Thame Town Centre', category: 'City / Town', typicalTime: '5 - 8 mins', guidePrice: 'From £12 - £16' },
      { destination: 'Haddenham & Thame Parkway Station', category: 'Railway Station', typicalTime: '8 - 12 mins', guidePrice: 'From £14 - £18' },
      { destination: 'London Heathrow Airport (LHR)', category: 'Airport', typicalTime: '45 - 55 mins', guidePrice: 'From £75' },
      { destination: 'Aylesbury Town Centre', category: 'City / Town', typicalTime: '20 - 25 mins', guidePrice: 'From £26 - £34' },
      { destination: 'Oxford City Centre', category: 'City / Town', typicalTime: '30 - 40 mins', guidePrice: 'From £38 - £48' }
    ],
    keyConnections: ['B4011', 'River Thame Crossing', 'Long Crendon Business Park', 'Chearsley Road'],
    faqs: [
      {
        question: 'How quickly can a taxi pick me up in Long Crendon?',
        answer: 'Because Long Crendon is only 2 miles from our base in Thame, our typical response time is fast, often under 10–15 minutes.'
      },
      {
        question: 'Do you service businesses in Long Crendon Business Park?',
        answer: 'Yes, we provide corporate transport, executive airport runs, and visitor pickups for companies across Long Crendon Industrial Estate and Business Park.'
      }
    ],
    nearbySlugs: ['taxi-thame', 'taxi-haddenham', 'taxi-aylesbury']
  },
  {
    id: 'moreton',
    name: 'Moreton',
    slug: 'taxi-moreton',
    type: 'Local Village',
    postcodes: ['OX9', 'OX9 2'],
    county: 'Oxfordshire',
    metaTitle: 'Taxi in Moreton, Oxfordshire | Local Village & Airport Taxis | O2Taxi',
    metaDescription: 'Need a taxi in Moreton, Oxon? 24/7 rural taxi service connecting Moreton to Thame, Haddenham station, Oxford, and UK airports. Call 07923 360048.',
    heroHeadline: '24/7 Taxi Service in Moreton, Oxfordshire',
    heroTagline: 'Fast, dependable local village taxi service connecting Moreton to Thame, rail stations, and nationwide airports.',
    introText: [
      'Moreton is a peaceful hamlet situated just south-west of Thame. O2Taxi offers responsive taxi transport with dedicated local drivers for Moreton residents seeking reliable connections to town, train stations, and regional destinations.',
      'Public transport in rural villages can be limited, but with O2Taxi, you have access to a friendly, licensed 24-hour taxi service right on your doorstep. We handle everything from short grocery and doctor trips in Thame to executive airport transfers and wedding guest transport.',
      'Count on O2Taxi for transparent pricing, clean cars, and courteous drivers who know every local country lane.'
    ],
    localHighlights: [
      {
        title: 'Immediate Proximity to Thame',
        description: 'Just 1.5 miles from our main operating hub for rapid pick-up response times.'
      },
      {
        title: 'Station & Commuter Rides',
        description: 'Effortless morning and evening transfers to Haddenham & Thame Parkway station.'
      },
      {
        title: 'Rural Taxi Reliability',
        description: 'No rural job is too small or too far—available 24 hours every day.'
      },
      {
        title: 'All UK Airports Covered',
        description: 'Direct, stress-free transfers to Heathrow, Gatwick, Luton, Stansted, and Birmingham.'
      }
    ],
    popularRoutes: [
      { destination: 'Thame High Street & Supermarkets', category: 'City / Town', typicalTime: '4 - 7 mins', guidePrice: 'From £10 - £14' },
      { destination: 'Haddenham & Thame Parkway Station', category: 'Railway Station', typicalTime: '8 - 12 mins', guidePrice: 'From £14 - £18' },
      { destination: 'London Heathrow Airport (LHR)', category: 'Airport', typicalTime: '45 - 55 mins', guidePrice: 'From £75' },
      { destination: 'Oxford Hospitals / John Radcliffe', category: 'Hospital / Medical', typicalTime: '25 - 35 mins', guidePrice: 'From £35 - £45' }
    ],
    keyConnections: ['Moreton Lane', 'Thame Road', 'M40 Junction 7 / 8A'],
    faqs: [
      {
        question: 'Can I book a return taxi from Thame back to Moreton late at night?',
        answer: 'Yes, we operate 24/7. You can book in advance or call us when you are ready to head home.'
      }
    ],
    nearbySlugs: ['taxi-thame', 'taxi-towersey', 'taxi-tiddington']
  },
  {
    id: 'tiddington',
    name: 'Tiddington',
    slug: 'taxi-tiddington',
    type: 'Local Village',
    postcodes: ['OX9', 'OX9 2'],
    county: 'Oxfordshire',
    metaTitle: 'Taxi in Tiddington, Oxfordshire | 24/7 Local & Airport Taxis | O2Taxi',
    metaDescription: 'Professional taxi service in Tiddington, Oxon. Local rides to Thame, Oxford, train stations, and Heathrow/Gatwick airports. Call 07923 360048.',
    heroHeadline: '24/7 Taxi Service in Tiddington, Oxfordshire',
    heroTagline: 'Reliable door-to-door transportation for Tiddington, Albury, and the A418 corridor. Local journeys, station transfers, and airport cabs.',
    introText: [
      'Tiddington is a charming Oxfordshire village located along the A418 between Thame and Oxford. O2Taxi delivers premier taxi services for Tiddington residents, commuters, and local pub-goers at The Fox & Goat.',
      'With easy access to the M40 motorway and Oxford, our drivers provide timely transfers whether you are travelling into Thame for business, heading into Oxford for leisure, or catching an international flight from Heathrow or Luton.',
      'We offer saloon, estate, and spacious MPV vehicles for single passengers, families, and business groups.'
    ],
    localHighlights: [
      {
        title: 'A418 Oxford-Thame Corridor',
        description: 'Direct and fast taxi transit between Tiddington, Thame, and Oxford.'
      },
      {
        title: 'The Fox & Goat and Village Events',
        description: 'Safe, reliable transport for dinners, celebrations, and pub visits in Tiddington.'
      },
      {
        title: 'M40 Junction 8A Access',
        description: 'Swift airport routes down the M40 towards London Heathrow and Gatwick.'
      },
      {
        title: 'Fixed Airport Guide Fares',
        description: 'Pre-agreed transparent pricing without surprise surcharges.'
      }
    ],
    popularRoutes: [
      { destination: 'Thame Town Centre', category: 'City / Town', typicalTime: '5 - 8 mins', guidePrice: 'From £12 - £16' },
      { destination: 'Oxford City Centre / Headington', category: 'City / Town', typicalTime: '20 - 25 mins', guidePrice: 'From £30 - £40' },
      { destination: 'London Heathrow Airport (LHR)', category: 'Airport', typicalTime: '45 - 55 mins', guidePrice: 'From £75' },
      { destination: 'Haddenham & Thame Parkway Station', category: 'Railway Station', typicalTime: '10 - 15 mins', guidePrice: 'From £16 - £22' }
    ],
    keyConnections: ['A418', 'Old London Road', 'The Fox & Goat', 'M40 Junction 8A (Wheatley / Oxford)'],
    faqs: [
      {
        question: 'Do you service hospital appointments in Oxford from Tiddington?',
        answer: 'Yes, we regularly transport passengers from Tiddington to the John Radcliffe, Churchill, and Nuffield Orthopaedic hospitals in Headington.'
      }
    ],
    nearbySlugs: ['taxi-thame', 'taxi-oxford', 'taxi-moreton', 'taxi-postcombe']
  },
  {
    id: 'towersey',
    name: 'Towersey',
    slug: 'taxi-towersey',
    type: 'Local Village',
    postcodes: ['OX9', 'OX9 3'],
    county: 'Oxfordshire',
    metaTitle: 'Taxi in Towersey, Oxfordshire | 24/7 Village & Airport Cabs | O2Taxi',
    metaDescription: 'Trusted taxi service in Towersey, Oxon. Local village cabs to Thame, Phoenix Trail, train stations, and airport transfers. Call 07923 360048.',
    heroHeadline: '24/7 Taxi Service in Towersey, Oxfordshire',
    heroTagline: 'Prompt, friendly village taxi transport for Towersey, The Phoenix Trail, and surrounding countryside.',
    introText: [
      'Towersey is a vibrant village located just south of Thame, renowned for its rich community spirit, the historic Three Horseshoes pub, and access to The Phoenix Trail.',
      'O2Taxi ensures that Towersey residents and visitors have round-the-clock access to professional, dependable transport. Whether you are returning from a late night out, catching a morning commuter train at Haddenham Parkway or Princes Risborough, or departing for a holiday from London Heathrow, we are here for you.',
      'All journeys can be booked via our easy online form, WhatsApp, or direct telephone dispatch.'
    ],
    localHighlights: [
      {
        title: 'Minutes from Thame',
        description: 'Fast collection times across Towersey, Manor Road, and Windmill Street.'
      },
      {
        title: 'Phoenix Trail & Walking Trips',
        description: 'Convenient taxi drop-offs and luggage transfers for walkers and cyclists along local trails.'
      },
      {
        title: 'The Three Horseshoes Pickups',
        description: 'Safe, designated driver transport for dinners and social evenings in Towersey.'
      },
      {
        title: 'Airport Travel Made Easy',
        description: 'Doorstep pickup with luggage assistance and flight tracking included.'
      }
    ],
    popularRoutes: [
      { destination: 'Thame Town Centre', category: 'City / Town', typicalTime: '4 - 7 mins', guidePrice: 'From £10 - £14' },
      { destination: 'Haddenham & Thame Parkway Station', category: 'Railway Station', typicalTime: '8 - 12 mins', guidePrice: 'From £14 - £18' },
      { destination: 'Princes Risborough Station', category: 'Railway Station', typicalTime: '12 - 16 mins', guidePrice: 'From £18 - £24' },
      { destination: 'London Heathrow Airport (LHR)', category: 'Airport', typicalTime: '45 - 55 mins', guidePrice: 'From £75' }
    ],
    keyConnections: ['Thame Road', 'Chinnor Road', 'The Phoenix Trail', 'Manor Road'],
    faqs: [
      {
        question: 'Can you transport large luggage or golf clubs from Towersey to the airport?',
        answer: 'Yes, we operate estate cars and MPVs with generous boot capacity for large suitcases, golf bags, and child pushchairs.'
      }
    ],
    nearbySlugs: ['taxi-thame', 'taxi-chinnor', 'taxi-sydenham', 'taxi-moreton']
  },
  {
    id: 'sydenham',
    name: 'Sydenham',
    slug: 'taxi-sydenham',
    type: 'Local Village',
    postcodes: ['OX39', 'OX39 4'],
    county: 'Oxfordshire',
    metaTitle: 'Taxi in Sydenham, Oxfordshire | 24/7 Rural & Airport Taxis | O2Taxi',
    metaDescription: 'Reliable 24/7 taxi service in Sydenham, Oxon. Local journeys to Thame, Chinnor, rail stations, and UK airport transfers. Call 07923 360048.',
    heroHeadline: '24/7 Taxi Service in Sydenham, Oxfordshire',
    heroTagline: 'Dependable rural taxi service for Sydenham, Emmington, and the surrounding South Oxfordshire countryside.',
    introText: [
      'Sydenham is a peaceful rural village situated between Thame and Chinnor, home to The Crown pub and idyllic Oxfordshire scenery. O2Taxi delivers dedicated taxi services with dependable local drivers to ensure rural residents stay fully connected.',
      'We handle early morning airport runs, daily school transportation, medical appointments in Thame and Oxford, and evening dining journeys. We know rural roads and farm access routes intimately, ensuring you are never left waiting.',
      'Book easily via WhatsApp or direct phone call for instant confirmation.'
    ],
    localHighlights: [
      {
        title: 'Rural Taxi Specialists',
        description: 'Punctual service covering all lanes and properties across Sydenham and Emmington.'
      },
      {
        title: 'Local Pub & Dining Rides',
        description: 'Stress-free transport for evenings at The Crown at Sydenham or nearby village gastro-pubs.'
      },
      {
        title: 'Station & Commuting Links',
        description: 'Connecting you to Princes Risborough and Haddenham & Thame Parkway stations.'
      },
      {
        title: 'Direct Airport Transfers',
        description: 'Reliable airport cabs to Heathrow, Gatwick, Luton, and Stansted.'
      }
    ],
    popularRoutes: [
      { destination: 'Thame Town Centre', category: 'City / Town', typicalTime: '7 - 10 mins', guidePrice: 'From £14 - £18' },
      { destination: 'Chinnor Village', category: 'City / Town', typicalTime: '5 - 8 mins', guidePrice: 'From £12 - £16' },
      { destination: 'Princes Risborough Station', category: 'Railway Station', typicalTime: '12 - 16 mins', guidePrice: 'From £18 - £25' },
      { destination: 'London Heathrow Airport (LHR)', category: 'Airport', typicalTime: '45 - 55 mins', guidePrice: 'From £75' }
    ],
    keyConnections: ['Stert Road', 'Sydenham Road', 'B4009', 'The Crown at Sydenham'],
    faqs: [
      {
        question: 'Do you charge extra for rural pickups in Sydenham?',
        answer: 'We provide clear, fair guide quotes without inflated rural call-out fees.'
      }
    ],
    nearbySlugs: ['taxi-thame', 'taxi-chinnor', 'taxi-towersey', 'taxi-postcombe']
  },
  {
    id: 'postcombe',
    name: 'Postcombe',
    slug: 'taxi-postcombe',
    type: 'Local Village',
    postcodes: ['OX9', 'OX9 7'],
    county: 'Oxfordshire',
    metaTitle: 'Taxi in Postcombe, Oxfordshire | 24/7 Local & M40 Airport Cabs | O2Taxi',
    metaDescription: 'Fast, dependable taxi in Postcombe, Oxon. Immediate access to M40 J6, Thame, Oxford, and Heathrow airport. Call 07923 360048.',
    heroHeadline: '24/7 Taxi Service in Postcombe, Oxfordshire',
    heroTagline: 'Convenient taxi transport for Postcombe, Lewknor, and the M40 corridor. Local journeys, station links, and airport transfers.',
    introText: [
      'Postcombe sits along the A40 near Lewknor and the M40 Junction 6, making it an ideal gateway between South Oxfordshire and London. O2Taxi offers prompt, 24/7 taxi services with licensed drivers for Postcombe residents and travellers staying at The Englands Rose or nearby hotels.',
      'Our drivers provide reliable links into Thame, Oxford, local train stations, and fast motorway transfers directly to London Heathrow, Gatwick, Luton, and central London.',
      'Enjoy comfortable, climate-controlled vehicles and experienced local drivers committed to passenger safety.'
    ],
    localHighlights: [
      {
        title: 'M40 Junction 6 Proximity',
        description: 'Fast highway access for quick journeys to London Heathrow (approx 40-45 mins).'
      },
      {
        title: 'Oxford Tube & Coach Links',
        description: 'Transfers to and from the Lewknor Oxford Tube express coach stop.'
      },
      {
        title: 'The Englands Rose & Local Stays',
        description: 'Guest and visitor transport for Postcombe accommodation and pubs.'
      },
      {
        title: 'Thame & Oxford Town Trips',
        description: 'Direct transport into Thame market town and central Oxford.'
      }
    ],
    popularRoutes: [
      { destination: 'Thame Town Centre', category: 'City / Town', typicalTime: '6 - 9 mins', guidePrice: 'From £14 - £18' },
      { destination: 'London Heathrow Airport (LHR)', category: 'Airport', typicalTime: '40 - 50 mins', guidePrice: 'From £75' },
      { destination: 'Lewknor M40 / Oxford Tube Stop', category: 'Local Landmark', typicalTime: '3 - 5 mins', guidePrice: 'From £10 - £14' },
      { destination: 'Oxford City Centre', category: 'City / Town', typicalTime: '22 - 30 mins', guidePrice: 'From £32 - £42' }
    ],
    keyConnections: ['A40', 'M40 Junction 6', 'Englands Rose Pub', 'B4009 to Chinnor / Watlington'],
    faqs: [
      {
        question: 'Can you transfer me from Postcombe to the Lewknor Oxford Tube bus stop with heavy luggage?',
        answer: 'Yes! We frequently assist passengers travelling with heavy bags to and from the Lewknor M40 coach stop.'
      }
    ],
    nearbySlugs: ['taxi-lewknor', 'taxi-thame', 'taxi-chinnor', 'taxi-tiddington']
  },
  {
    id: 'lewknor',
    name: 'Lewknor',
    slug: 'taxi-lewknor',
    type: 'Local Village',
    postcodes: ['OX49', 'OX49 5'],
    county: 'Oxfordshire',
    metaTitle: 'Taxi in Lewknor | M40 Junction 6 & Oxford Tube Taxi Service | O2Taxi',
    metaDescription: 'Need a taxi in Lewknor or M40 J6? Fast taxi service for Oxford Tube drop-offs, Chilterns, Thame, and Heathrow airport. 24/7 service. Call 07923 360048.',
    heroHeadline: '24/7 Taxi Service in Lewknor & M40 Junction 6',
    heroTagline: 'Premier local taxi service for Lewknor village, M40 Junction 6, Oxford Tube coach connections, and Chiltern Hills destinations.',
    introText: [
      'Lewknor is strategically located at Junction 6 of the M40 motorway, serving as a primary transit point with its famous Oxford Tube 24-hour express coach stop. O2Taxi delivers rapid, dependable taxi services for Lewknor residents, hikers on the Ridgeway National Trail, and commuters connecting to London.',
      'We provide seamless transfers to and from the Lewknor coach stop, ensuring you never get stranded in the dark or bad weather. We also provide direct airport runs to Heathrow, Gatwick, Luton, and Stansted, as well as rides to Thame, Watlington, and Oxford.',
      'Available 24 hours a day, 7 days a week with friendly drivers and transparent pricing.'
    ],
    localHighlights: [
      {
        title: 'Oxford Tube Coach Transfers',
        description: 'Punctual collection and drop-off at the Lewknor M40 coach stop day and night.'
      },
      {
        title: 'M40 Motorway Hub',
        description: 'Instant motorway access for direct journeys towards London or the Midlands.'
      },
      {
        title: 'Ridgeway & Chilterns Transport',
        description: 'Luggage transfers and walker drop-offs along The Ridgeway National Trail.'
      },
      {
        title: 'Fixed Airport Guide Fares',
        description: 'Heathrow Airport from £75 with flight tracking and terminal meet & greet.'
      }
    ],
    popularRoutes: [
      { destination: 'London Heathrow Airport (LHR)', category: 'Airport', typicalTime: '40 - 50 mins', guidePrice: 'From £75' },
      { destination: 'Thame Town Centre', category: 'City / Town', typicalTime: '8 - 12 mins', guidePrice: 'From £16 - £22' },
      { destination: 'Oxford City Centre', category: 'City / Town', typicalTime: '22 - 30 mins', guidePrice: 'From £32 - £42' },
      { destination: 'Watlington Town Centre', category: 'City / Town', typicalTime: '5 - 8 mins', guidePrice: 'From £12 - £16' },
      { destination: 'Princes Risborough Station', category: 'Railway Station', typicalTime: '15 - 20 mins', guidePrice: 'From £22 - £30' }
    ],
    keyConnections: ['M40 Junction 6', 'Oxford Tube Coach Stop', 'B4009', 'The Ridgeway National Trail', 'The Leathern Bottle'],
    faqs: [
      {
        question: 'Can you pick me up late at night from the Lewknor Oxford Tube stop?',
        answer: 'Yes! The Oxford Tube operates 24/7 and so do we. You can book your taxi in advance to meet your coach when it pulls in at Junction 6.'
      }
    ],
    nearbySlugs: ['taxi-postcombe', 'taxi-chinnor', 'taxi-thame', 'taxi-oxford']
  },
  {
    id: 'oxford',
    name: 'Oxford',
    slug: 'taxi-oxford',
    type: 'Town / City',
    postcodes: ['OX1', 'OX2', 'OX3', 'OX4'],
    county: 'Oxfordshire',
    metaTitle: 'Taxi from Thame to Oxford | Oxford City, Hospitals & Universities | O2Taxi',
    metaDescription: 'Regular taxi service between Thame and Oxford. Transfers to John Radcliffe Hospital, Oxford University, Oxford Rail Station, and airports. Call 07923 360048.',
    heroHeadline: 'Direct Taxi Service: Thame ⇄ Oxford & County',
    heroTagline: 'Dependable passenger transportation connecting Thame, surrounding villages, and the City of Oxford 24 hours a day.',
    introText: [
      'The City of Oxford is the historic cultural, educational, and medical hub of Oxfordshire. O2Taxi operates regular daily journeys between Thame, surrounding countryside villages, and central Oxford.',
      'Whether you are visiting Oxford University colleges, attending medical appointments at the John Radcliffe, Churchill, or Nuffield Orthopaedic hospitals, shopping at the Westgate Centre, or catching a train from Oxford Railway Station, our professional drivers provide smooth, door-to-door transport.',
      'Avoid parking headaches, clean air zone charges, and traffic stress—let O2Taxi drive you directly to your Oxford destination in comfort.'
    ],
    localHighlights: [
      {
        title: 'Oxford Hospital Appointments',
        description: 'Stress-free, punctual transport to John Radcliffe (JR), Churchill, and Manor Hospital.'
      },
      {
        title: 'University & College Transfers',
        description: 'Transport for students, faculty, visiting academics, and university events.'
      },
      {
        title: 'Shopping & Dining Days Out',
        description: 'Direct drop-offs at Westgate Shopping Centre, Oxford Covered Market, and restaurants.'
      },
      {
        title: 'Oxford Rail & Airport Hubs',
        description: 'Connecting Oxford and Thame passengers to major London international airports.'
      }
    ],
    popularRoutes: [
      { destination: 'John Radcliffe Hospital (Headington)', category: 'Hospital / Medical', typicalTime: '25 - 30 mins', guidePrice: 'From £35 - £45' },
      { destination: 'Oxford City Centre / Westgate', category: 'City / Town', typicalTime: '28 - 38 mins', guidePrice: 'From £38 - £48' },
      { destination: 'Oxford Railway Station', category: 'Railway Station', typicalTime: '30 - 40 mins', guidePrice: 'From £40 - £50' },
      { destination: 'Thame Town Centre', category: 'City / Town', typicalTime: '25 - 35 mins', guidePrice: 'From £35 - £45' },
      { destination: 'London Heathrow Airport (LHR)', category: 'Airport', typicalTime: '55 - 70 mins', guidePrice: 'From £85 - £95' }
    ],
    keyConnections: ['A40 / A418', 'Headington Roundabout', 'Oxford Ring Road', 'John Radcliffe Hospital', 'Westgate Oxford'],
    faqs: [
      {
        question: 'Can you wait for me during a hospital appointment in Oxford and take me home?',
        answer: 'Yes, we can arrange wait-and-return service or schedule a return pick-up once your appointment is finished.'
      },
      {
        question: 'What is the travel time between Thame and Oxford by taxi?',
        answer: 'Typical journey time is approximately 25 to 35 minutes depending on traffic on the A418 and Oxford Ring Road.'
      }
    ],
    nearbySlugs: ['taxi-thame', 'taxi-tiddington', 'taxi-haddenham']
  },
  {
    id: 'princes-risborough',
    name: 'Princes Risborough',
    slug: 'taxi-princes-risborough',
    type: 'Town / City',
    postcodes: ['HP27', 'HP27 0', 'HP27 9'],
    county: 'Buckinghamshire',
    metaTitle: 'Taxi in Princes Risborough | Station Cabs & Airport Transfers | O2Taxi',
    metaDescription: '24/7 taxi service in Princes Risborough. Punctual Chiltern Railways station transfers, trips to Chinnor & Thame, and Heathrow airport cabs. Call 07923 360048.',
    heroHeadline: '24/7 Taxi Service in Princes Risborough',
    heroTagline: 'Professional local taxis and station transfers serving Princes Risborough, Monks Risborough, Longwick, and the Chilterns.',
    introText: [
      'Princes Risborough is a vibrant market town set at the foot of the Chiltern Hills with an essential commuter rail link into London Marylebone, High Wycombe, and Aylesbury. O2Taxi delivers dependable 24/7 taxi transport with vetted professional drivers for Princes Risborough residents and business commuters.',
      'We specialize in reliable station transfers to Princes Risborough Railway Station, local journeys to Chinnor, Thame, and Aylesbury, as well as fixed-fare airport runs to Heathrow, Gatwick, Luton, and Stansted.',
      'Our drivers are fully licensed, DBS checked, and committed to total punctuality.'
    ],
    localHighlights: [
      {
        title: 'Princes Risborough Station Service',
        description: 'Coordinated pick-ups and drop-offs for Chiltern Railways passengers.'
      },
      {
        title: 'Local Town & Village Connectivity',
        description: 'Connecting Princes Risborough, Monks Risborough, Longwick, and Bledlow.'
      },
      {
        title: 'Airport Travel Specialists',
        description: 'Fast, fixed-fare airport transfers down the A4010 and M40 towards London Heathrow.'
      },
      {
        title: 'Executive & Account Travel',
        description: 'Clean, modern saloons and estates for corporate travel and business meetings.'
      }
    ],
    popularRoutes: [
      { destination: 'Princes Risborough Railway Station', category: 'Railway Station', typicalTime: '4 - 8 mins', guidePrice: 'From £10 - £15' },
      { destination: 'London Heathrow Airport (LHR)', category: 'Airport', typicalTime: '40 - 50 mins', guidePrice: 'From £75' },
      { destination: 'Thame Town Centre', category: 'City / Town', typicalTime: '14 - 18 mins', guidePrice: 'From £20 - £28' },
      { destination: 'Chinnor Village', category: 'City / Town', typicalTime: '8 - 12 mins', guidePrice: 'From £16 - £22' },
      { destination: 'Aylesbury Town Centre', category: 'City / Town', typicalTime: '15 - 20 mins', guidePrice: 'From £22 - £30' }
    ],
    keyConnections: ['A4010', 'Princes Risborough Rail Station', 'Chiltern Hills', 'Market Square'],
    faqs: [
      {
        question: 'Do you offer airport transfers from Princes Risborough to Heathrow Airport?',
        answer: 'Yes, we provide direct transfers from Princes Risborough to Heathrow Airport starting from £75 with flight tracking and meet & greet included.'
      }
    ],
    nearbySlugs: ['taxi-chinnor', 'taxi-thame', 'taxi-aylesbury', 'taxi-haddenham']
  },
  {
    id: 'aylesbury',
    name: 'Aylesbury',
    slug: 'taxi-aylesbury',
    type: 'Town / City',
    postcodes: ['HP19', 'HP20', 'HP21'],
    county: 'Buckinghamshire',
    metaTitle: 'Taxi from Thame to Aylesbury | Stoke Mandeville & Aylesbury Vale | O2Taxi',
    metaDescription: 'Reliable taxi service connecting Thame, Haddenham, and Aylesbury. Transfers to Stoke Mandeville Hospital, Aylesbury Station, and airports. Call 07923 360048.',
    heroHeadline: 'Direct Taxi Service: Thame ⇄ Aylesbury Vale',
    heroTagline: 'Professional 24/7 taxi transport between Thame, Haddenham, Aylesbury Town Centre, and Stoke Mandeville Hospital.',
    introText: [
      'Aylesbury is the county town of Buckinghamshire, home to the Waterside Theatre, major shopping centres, Aylesbury Railway Station, and the renowned Stoke Mandeville Hospital. O2Taxi provides frequent, reliable taxi links between Thame, Haddenham, and Aylesbury.',
      'Whether you have a hospital appointment at Stoke Mandeville, an evening theatre show, a business meeting, or need an airport connection from the Aylesbury Vale area, O2Taxi offers fixed guide prices, polite drivers, and 24/7 availability.',
      'Book online or via WhatsApp for immediate, transparent quotations and reliable service.'
    ],
    localHighlights: [
      {
        title: 'Stoke Mandeville Hospital Visits',
        description: 'Dedicated patient and visitor transport to the National Spinal Injuries Centre and main hospital.'
      },
      {
        title: 'Waterside Theatre & Night Out',
        description: 'Safe return taxi journeys after shows, concerts, and dining in Aylesbury.'
      },
      {
        title: 'Aylesbury Vale Connections',
        description: 'Serving Stone, Hartwell, Dinton, and the A418 corridor.'
      },
      {
        title: 'Airport Transfer Options',
        description: 'Fixed-quote airport transport to Luton, Heathrow, Stansted, and Gatwick.'
      }
    ],
    popularRoutes: [
      { destination: 'Stoke Mandeville Hospital', category: 'Hospital / Medical', typicalTime: '15 - 20 mins', guidePrice: 'From £24 - £32' },
      { destination: 'Aylesbury Town Centre / Waterside Theatre', category: 'City / Town', typicalTime: '18 - 25 mins', guidePrice: 'From £25 - £35' },
      { destination: 'London Luton Airport (LTN)', category: 'Airport', typicalTime: '45 - 55 mins', guidePrice: 'From £80' },
      { destination: 'London Heathrow Airport (LHR)', category: 'Airport', typicalTime: '50 - 65 mins', guidePrice: 'From £80 - £90' },
      { destination: 'Thame Town Centre', category: 'City / Town', typicalTime: '18 - 25 mins', guidePrice: 'From £25 - £35' }
    ],
    keyConnections: ['A418', 'Stoke Mandeville Hospital', 'Aylesbury Waterside Theatre', 'Friars Square'],
    faqs: [
      {
        question: 'Can I book a taxi from Thame to Stoke Mandeville Hospital?',
        answer: 'Yes, we provide frequent hospital transfer service with door-to-door assistance for patients and visitors.'
      }
    ],
    nearbySlugs: ['taxi-haddenham', 'taxi-thame', 'taxi-long-crendon', 'taxi-princes-risborough']
  },
  {
    id: 'oxfordshire-villages',
    name: 'Surrounding Oxfordshire Villages',
    slug: 'taxi-oxfordshire-villages',
    type: 'Regional',
    postcodes: ['OX9', 'OX39', 'OX49', 'HP17', 'HP18'],
    county: 'Oxfordshire & Buckinghamshire',
    metaTitle: 'Taxi in Surrounding Oxfordshire Villages | 24/7 Rural Taxis | O2Taxi',
    metaDescription: 'Complete 24/7 rural taxi coverage across all South Oxfordshire and Buckinghamshire border villages. Airport runs, station taxis, local rides. Call 07923 360048.',
    heroHeadline: 'Taxi Service for Surrounding Oxfordshire & Bucks Villages',
    heroTagline: 'Comprehensive 24/7 taxi transport with dedicated local drivers for all rural hamlets, country pubs, and villages across South Oxfordshire.',
    introText: [
      'Living in a rural village should never mean being stranded without reliable transport. O2Taxi proudly covers all surrounding South Oxfordshire and Buckinghamshire border villages, providing round-the-clock taxi services with licensed local drivers.',
      'From Cuddington, Chearsley, Brill, and Ashendon to Great Milton, Tetsworth, Stadhampton, and Watlington, our fleet is equipped to reach your home promptly.',
      'We provide essential daily transport for school runs, commuter train station transfers, hospital appointments in Oxford and Aylesbury, and pre-booked airport transfers to Heathrow, Gatwick, Luton, and Stansted.'
    ],
    localHighlights: [
      {
        title: 'Full Rural Coverage',
        description: 'Serving all country lanes, farms, hamlets, and villages around Thame.'
      },
      {
        title: 'Commuter Station Links',
        description: 'Direct transfers to Haddenham & Thame Parkway and Princes Risborough railway stations.'
      },
      {
        title: 'Country Pub & Wedding Transport',
        description: 'Safe, pre-booked rides for rural wedding venues, farm barns, and village inns.'
      },
      {
        title: 'Fixed Airport Guide Fares',
        description: 'Transparent fixed pricing with flight tracking and 24/7 availability.'
      }
    ],
    popularRoutes: [
      { destination: 'Haddenham & Thame Parkway Station', category: 'Railway Station', typicalTime: '10 - 18 mins', guidePrice: 'From £15 - £24' },
      { destination: 'London Heathrow Airport (LHR)', category: 'Airport', typicalTime: '45 - 60 mins', guidePrice: 'From £75 - £85' },
      { destination: 'Oxford City Centre / Hospitals', category: 'City / Town', typicalTime: '25 - 40 mins', guidePrice: 'From £35 - £48' },
      { destination: 'Thame Town Centre', category: 'City / Town', typicalTime: '8 - 15 mins', guidePrice: 'From £14 - £22' }
    ],
    keyConnections: ['South Oxfordshire Countryside', 'The Chilterns AONB', 'A418 & A40 Corridors', 'Bledlow, Brill, Tetsworth, Cuddington'],
    faqs: [
      {
        question: 'Do you pick up from rural wedding venues and country hotels?',
        answer: 'Yes! We provide reliable pre-booked transport for guests attending weddings and events at barns, manors, and hotels throughout Oxfordshire and Buckinghamshire.'
      },
      {
        question: 'How do I get an exact quote for my village?',
        answer: 'You can use our online booking form, call 07923 360048, or send a WhatsApp message with your pickup postcode for an instant, fixed quotation.'
      }
    ],
    nearbySlugs: ['taxi-thame', 'taxi-haddenham', 'taxi-chinnor', 'taxi-long-crendon', 'taxi-oxford', 'taxi-princes-risborough']
  }
];

export const getLocationBySlug = (slug: string): LocationSEOItem | undefined => {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  return LOCATIONS_DATA.find((loc) => loc.slug === clean || loc.id === clean);
};
