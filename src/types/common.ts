export type SectionId =
  | 'home'
  | 'story'
  | 'menu'
  | 'experience'
  | 'gallery'
  | 'contact';

export interface NavLink {
  id: SectionId;
  label: string;
}

export interface RestaurantContactInfo {
  name: string;
  tagline: string;
  taglineSub: string;
  since: number;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  addressLines: string[];
  googleMapsQuery: string;
  links: {
    uberEats: string;
    instagram: string;
    facebook: string;
    googleMaps: string;
  };
}

