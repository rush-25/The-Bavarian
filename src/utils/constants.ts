import { RestaurantContactInfo, SectionId } from '../types/common';

export const SECTION_IDS: SectionId[] = [
  'home',
  'story',
  'menu',
  'experience',
  'gallery',
  'contact',
];

export const RESTAURANT_INFO: RestaurantContactInfo = {
  name: 'The Bavarian German Restaurant & Pub',
  tagline: 'A Taste of Germany. An Experience Beyond the Ordinary.',
  taglineSub:
    'Authentic Bavarian roasts, European cuisine, and frosted steins in Colombo since 1983.',
  since: 1983,
  phoneDisplay: '+94 11 242 2226',
  phoneHref: 'tel:+94112422226',
  email: 'info@thebavarian.lk',
  emailHref: 'mailto:info@thebavarian.lk',
  addressLines: [
    '11 Galle Face Terrace',
    'Kollupitiya, Colombo 00300',
    'Western Province, Sri Lanka',
  ],
  googleMapsQuery:
    'The+Bavarian+German+Restaurant+and+pub+11+Galle+Face+Terrace+Colombo+Sri+Lanka',
  links: {
    uberEats:
      'https://www.ubereats.com/lk/store/the-bavarian/_msBhO0wRoW7b9SxjDwUig',
    instagram: 'https://www.instagram.com/thebavarianlk/',
    facebook: 'https://www.facebook.com/TheBavarianGermanRestaurantAndPub/',
    googleMaps:
      'https://www.google.com/maps/search/?api=1&query=The+Bavarian+German+Restaurant+and+pub+11+Galle+Face+Terrace+Colombo+Sri+Lanka',
  },
};

export const BRAND_COLORS = {
  bgPrimary: '#141311',
  bgSecondary: '#1D1A17',
  brandBurgundy: '#542B32',
  brandForest: '#344237',
  brandGold: '#C5A46D',
  textCream: '#F2EAE0',
  textMuted: '#9E9589',
};

