export interface AreaInfo {
  name: string;
  slug: string;
  type: 'Primary Hub' | 'Local Village' | 'Town / City' | 'Regional';
  description: string;
}

export const LOCAL_SERVICE_AREAS: AreaInfo[] = [
  {
    name: 'Thame',
    slug: 'taxi-thame',
    type: 'Primary Hub',
    description: 'Our central operating base with fast local response times for town journeys, station runs, and airport transfers.',
  },
  {
    name: 'Haddenham',
    slug: 'taxi-haddenham',
    type: 'Town / City',
    description: 'Frequent transfers to Haddenham & Thame Parkway station, local village trips, and regional connections.',
  },
  {
    name: 'Chinnor',
    slug: 'taxi-chinnor',
    type: 'Town / City',
    description: 'Full 24/7 taxi coverage for Chinnor residents travelling locally or onwards to airports and London.',
  },
  {
    name: 'Long Crendon',
    slug: 'taxi-long-crendon',
    type: 'Local Village',
    description: 'Prompt local collections, school runs, and direct airport transfer service.',
  },
  {
    name: 'Moreton',
    slug: 'taxi-moreton',
    type: 'Local Village',
    description: 'Dedicated rural taxi service connecting Moreton to Thame town centre, stations, and airports.',
  },
  {
    name: 'Tiddington',
    slug: 'taxi-tiddington',
    type: 'Local Village',
    description: 'Reliable door-to-door transportation for local village residents and business commuters.',
  },
  {
    name: 'Towersey',
    slug: 'taxi-towersey',
    type: 'Local Village',
    description: 'Local taxi bookings, evening pub transport, and airport travel from Towersey.',
  },
  {
    name: 'Sydenham',
    slug: 'taxi-sydenham',
    type: 'Local Village',
    description: 'Rural Oxfordshire taxi coverage for pre-booked airport and local station journeys.',
  },
  {
    name: 'Postcombe',
    slug: 'taxi-postcombe',
    type: 'Local Village',
    description: 'Quick links to the M40 corridor, airport routes, and local Oxfordshire destinations.',
  },
  {
    name: 'Lewknor',
    slug: 'taxi-lewknor',
    type: 'Local Village',
    description: 'Transfers to and from the Lewknor M40 junction, Oxford Tube connection points, and local journeys.',
  },
  {
    name: 'Oxford',
    slug: 'taxi-oxford',
    type: 'Town / City',
    description: 'Regular transfers between Thame, surrounding villages, and central Oxford colleges, hospitals, and train stations.',
  },
  {
    name: 'Princes Risborough',
    slug: 'taxi-princes-risborough',
    type: 'Town / City',
    description: 'Transfers to Princes Risborough railway station, town centre, and major UK airport hubs.',
  },
  {
    name: 'Aylesbury',
    slug: 'taxi-aylesbury',
    type: 'Town / City',
    description: 'Direct taxi links between Thame, Aylesbury Vale, Stoke Mandeville, and beyond.',
  },
  {
    name: 'Surrounding Oxfordshire Villages',
    slug: 'taxi-oxfordshire-villages',
    type: 'Regional',
    description: 'Comprehensive taxi coverage across all surrounding South Oxfordshire and Buckinghamshire border villages.',
  },
];

export const LONG_DISTANCE_STATEMENT =
  'Long-distance travel available throughout the UK. Whether you require a transfer to London, the Midlands, coastal seaports, or regional UK cities, O2Taxi offers pre-booked direct travel 24 hours a day.';
