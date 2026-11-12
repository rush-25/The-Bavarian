import bavarianLogo from '../assets/images/bavarian-logo.webp';
import barInteriorImg from '../assets/images/bavarian-bar-interior.webp';
import steinsCheersImg from '../assets/images/bavarian-steins-cheers.webp';
import { GalleryItem } from '../types/menu';

export type GalleryFilter =
  | 'All'
  | 'Signature Dishes'
  | 'Drinks & Steins'
  | 'Interiors & Bar'
  | 'Grill & Sausages';

export const GALLERY_FILTERS: GalleryFilter[] = [
  'All',
  'Signature Dishes',
  'Grill & Sausages',
  'Drinks & Steins',
  'Interiors & Bar',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-steins-cheers',
    title: 'Prost at The Bavarian',
    category: 'Drinks & Steins',
    caption: 'Signature dimpled glass steins emblazoned with The Bavarian gothic crest.',
    image: steinsCheersImg,
    spanClass: 'md:col-span-7 md:row-span-2',
    isOfficialPhoto: true,
  },
  {
    id: 'gal-roast-pork',
    title: 'Crispy Crackling Roast Pork',
    category: 'Signature Dishes',
    caption: 'Golden crackling pork belly served with braised red cabbage, sauerkraut and rich gravy.',
    image: 'https://images.unsplash.com/photo-1782150924851-f0c28295647f?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=80&w=1080',
    spanClass: 'md:col-span-5 md:row-span-1',
    isOfficialPhoto: true,
  },
  {
    id: 'gal-munich-sausage',
    title: 'Munich White Sausage & Pretzel',
    category: 'Grill & Sausages',
    caption: 'Traditional poached Weisswurst in herb broth with warm pretzel and duo of mustards.',
    image: 'https://images.unsplash.com/photo-1511951786553-1d4f975424c9?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=80&w=1080',
    spanClass: 'md:col-span-5 md:row-span-1',
    isOfficialPhoto: true,
  },
  {
    id: 'gal-bar-interior',
    title: 'The Bavarian Timber Bar',
    category: 'Interiors & Bar',
    caption: 'Warm mahogany panelling, overhead stemware, carved wooden stools and amber lamps.',
    image: barInteriorImg,
    spanClass: 'md:col-span-6 md:row-span-2',
    isOfficialPhoto: true,
  },
  {
    id: 'gal-bacon-cheddar-ribs',
    title: 'Bacon & Cheddar Wrapped Ribs',
    category: 'Grill & Sausages',
    caption: 'Flame-roasted pork ribs wrapped in smoky bacon and cheddar glaze.',
    image: 'https://images.unsplash.com/photo-1761315412952-a3a9e3ed06ff?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=80&w=1080',
    spanClass: 'md:col-span-6 md:row-span-1',
    isOfficialPhoto: true,
  },
  {
    id: 'gal-ruby-cocktail',
    title: 'Signature Bavarian Cocktail',
    category: 'Drinks & Steins',
    caption: 'Ruby house cocktail garnished with fresh orange, lemon spiral and crest swizzle stick.',
    image: 'https://images.unsplash.com/photo-1754922271382-d8c4d0b79327?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=80&w=1080',
    spanClass: 'md:col-span-3 md:row-span-1',
    isOfficialPhoto: true,
  },
  {
    id: 'gal-espresso-martini',
    title: 'Cocoa Dusted Espresso Martini',
    category: 'Drinks & Steins',
    caption: 'Velvety coffee cocktail topped with roasted beans and cocoa.',
    image: 'https://images.unsplash.com/photo-1774921676768-d89b18e32c3c?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=80&w=1080',
    spanClass: 'md:col-span-3 md:row-span-1',
    isOfficialPhoto: true,
  },
  {
    id: 'gal-honey-bbq-ribs',
    title: 'Glazed Honey BBQ Pork Ribs',
    category: 'Grill & Sausages',
    caption: 'Slow-cooked ribs coated in a rich caramelised honey BBQ reduction.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=80&w=1080',
    spanClass: 'md:col-span-4 md:row-span-1',
    isOfficialPhoto: true,
  },
  {
    id: 'gal-pork-chili-burger',
    title: 'Pork & Bacon Chili Jam Burger',
    category: 'Signature Dishes',
    caption: 'Grilled pork patty, bacon chili jam, cheddar cheese and special sauce in sesame brioche.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=80&w=1080',
    spanClass: 'md:col-span-4 md:row-span-1',
    isOfficialPhoto: true,
  },
  {
    id: 'gal-heritage-crest',
    title: 'The Bavarian 1983 Emblem',
    category: 'Interiors & Bar',
    caption: 'The iconic Gothic "B" insignia of The Bavarian German Restaurant & Pub, Since 1983.',
    image: bavarianLogo,
    spanClass: 'md:col-span-4 md:row-span-1',
    isOfficialPhoto: true,
  },
];

