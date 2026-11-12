export type MenuCategory =
  | 'Bavarian Classics'
  | 'Grill & Steaks'
  | 'Pork Specialities'
  | 'Sausages & Wurst'
  | 'Burgers & Sandwiches'
  | 'Appetizers & Soups'
  | 'Seafood'
  | 'Desserts & Sweets'
  | 'Beverages & Steins';

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
  targetCategory: MenuCategory;
  image: string;
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

