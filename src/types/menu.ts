export type MenuCategory =
  | 'Starters'
  | 'Soups'
  | 'Salads'
  | 'Sausages'
  | 'Pork Ribs'
  | 'Main Courses'
  | 'Schnitzel'
  | 'Pasta'
  | 'Grill & Steaks'
  | 'Gourmet Burgers'
  | 'Desserts'
  | 'Beverages & Cocktails';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  priceLkr?: number;
  priceLabel?: string;
  description: string;
  image: string;
  badge?: string;
  isOfficialPhoto?: boolean;
}

export interface SignatureCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description?: string;
  targetCategory: MenuCategory;
  image: string;
  highlights?: string[];
  isOfficialPhoto?: boolean;
}

export interface ExperienceChapter {
  id: string;
  index: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  secondaryImage?: string;
  detailNote: string;
  isOfficialPhoto?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  image: string;
  spanClass: string;
  isOfficialPhoto?: boolean;
}

