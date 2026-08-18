import { AirportGuidePrice } from '../types';

export const AIRPORT_GUIDE_PRICES: AirportGuidePrice[] = [
  { from: 'Thame', to: 'Heathrow Airport (LHR)', priceRange: '£75–£95' },
  { from: 'Thame', to: 'Gatwick Airport (LGW)', priceRange: '£110–£130' },
  { from: 'Thame', to: 'Luton Airport (LTN)', priceRange: '£70–£90' },
  { from: 'Thame', to: 'Stansted Airport (STN)', priceRange: '£110–£130' },
  { from: 'Thame', to: 'Birmingham Airport (BHX)', priceRange: '£110–£130' },
  { from: 'Haddenham', to: 'Heathrow Airport (LHR)', priceRange: '£70–£90' },
  { from: 'Chinnor', to: 'Heathrow Airport (LHR)', priceRange: '£80–£100' },
  { from: 'Long Crendon', to: 'Heathrow Airport (LHR)', priceRange: '£75–£95' },
  { from: 'Princes Risborough', to: 'Heathrow Airport (LHR)', priceRange: '£85–£105' },
  { from: 'Oxford', to: 'Heathrow Airport (LHR)', priceRange: '£90–£110' },
];

export const AIRPORTS_COVERED = [
  {
    name: 'Heathrow Airport',
    code: 'LHR',
    terminals: 'Terminals 2, 3, 4 & 5',
    description: 'Direct transfers from Thame, Haddenham and Oxfordshire with flight tracking and terminal pickup options.',
  },
  {
    name: 'Gatwick Airport',
    code: 'LGW',
    terminals: 'North & South Terminals',
    description: 'Reliable long-distance transfers to London Gatwick for early morning and late night flights.',
  },
  {
    name: 'Luton Airport',
    code: 'LTN',
    terminals: 'Main Terminal',
    description: 'Fast, convenient transfers between Oxfordshire and London Luton Airport.',
  },
  {
    name: 'Stansted Airport',
    code: 'STN',
    terminals: 'Main Terminal',
    description: 'Pre-booked direct transfers to London Stansted Airport with 24/7 availability.',
  },
  {
    name: 'Birmingham Airport',
    code: 'BHX',
    terminals: 'Terminals 1 & 2',
    description: 'Comfortable motorway transfers to Birmingham Airport and the NEC.',
  },
  {
    name: 'London City Airport',
    code: 'LCY',
    terminals: 'Main Terminal',
    description: 'Executive and private passenger transfers directly into central London Docklands.',
  },
];

export const PRICING_DISCLAIMER =
  'Guide prices only. Please contact O2Taxi for a confirmed quotation based on your exact pickup point, vehicle requirement, and schedule.';
