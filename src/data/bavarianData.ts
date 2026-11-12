import barInteriorImg from '../assets/images/bavarian-bar-interior.webp';
import steinsCheersImg from '../assets/images/bavarian-steins-cheers.webp';
import { ExperienceChapter } from '../types/menu';

export * from '../types/common';
export * from '../types/menu';
export * from '../types/reservation';
export * from '../utils/constants';
export * from './navigationData';
export * from './menuData';
export * from './galleryData';

export const EXPERIENCE_CHAPTERS: ExperienceChapter[] = [
  {
    id: 'exp-wooden-interiors',
    index: '01',
    tag: 'WARM WOODEN INTERIORS',
    title: 'Old-World Timber & Amber Glow',
    subtitle: 'An intimate sanctuary of polished mahogany, brass and warm pendant light.',
    description:
      'Step off Galle Face Terrace into a world shaped by over four decades of hospitality.',
    image: barInteriorImg,
    detailNote: 'Polished hardwood bar & heritage crest panelling',
    isOfficialPhoto: true,
  },
  {
    id: 'exp-bar-and-drinks',
    index: '02',
    tag: 'THE BAVARIAN BAR & DRAUGHTS',
    title: 'Raised Steins & Crafted Spirits',
    subtitle: 'Where frosted dimpled glassware meets classic European mixology.',
    description:
      'From heavy dimpled Maßkrug steins crowned with dense white foam to ruby-red citrus cocktails.',
    image: steinsCheersImg,
    secondaryImage:
      'https://images.unsplash.com/photo-1754922271382-d8c4d0b79327?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=80&w=1080',
    detailNote: 'Custom crest glassware & signature house pours',
    isOfficialPhoto: true,
  },
  {
    id: 'exp-handcrafted-furniture',
    index: '03',
    tag: 'HANDCRAFTED FURNITURE',
    title: 'Carved Timber Stools & Heritage Tables',
    subtitle: 'Built for unhurried feasts, clinking glasses and long conversations.',
    description:
      'Every carved bar chair, solid wooden table and brass-accented fixture reflects traditional German tavern craftsmanship.',
    image:
      'https://images.unsplash.com/photo-1779372178902-5d355e0dfe06?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=80&w=1080',
    detailNote: 'Solid carved wood seating & classic tavern proportions',
  },
  {
    id: 'exp-outdoor-seating',
    index: '04',
    tag: 'OUTDOOR TERRACE & BENCHES',
    title: 'Al Fresco Evenings by the Breeze',
    subtitle: 'Wooden benches, floral accents and Colombo’s coastal twilight.',
    description:
      'Our terrace seating pairs rustic wooden benches and greenery with the relaxed rhythm of Galle Face.',
    image:
      'https://images.unsplash.com/photo-1786654735906-6e472c374c46?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=80&w=1080',
    detailNote: 'Open-air wooden benches & warm lantern atmosphere',
  },
  {
    id: 'exp-social-dining',
    index: '05',
    tag: 'SOCIAL DINING EXPERIENCES',
    title: 'Generous Platters Made for Sharing',
    subtitle: 'Four decades of family gatherings, celebrations and camaraderie.',
    description:
      'Whether gathering for honey-glazed ribs, Munich white sausages with pretzels, or a celebratory toast.',
    image:
      'https://images.unsplash.com/photo-1782150924851-f0c28295647f?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=80&w=1080',
    secondaryImage:
      'https://images.unsplash.com/photo-1761315412952-a3a9e3ed06ff?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=80&w=1080',
    detailNote: 'Hearty portions crafted for shared table rituals',
    isOfficialPhoto: true,
  },
];
