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
  isOfficialPhoto?: boolean;
  badge?: string;
  pairingNote?: string;
}

export interface SignatureCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  targetCategory: MenuCategory;
  highlights: string[];
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
  category: 'Signature Dishes' | 'Drinks & Steins' | 'Interiors & Bar' | 'Grill & Sausages';
  caption: string;
  image: string;
  spanClass: string;
  isOfficialPhoto: boolean;
}

export const RESTAURANT_INFO = {
  name: 'The Bavarian German Restaurant & Pub',
  shortName: 'THE BAVARIAN',
  tagline: 'A Taste of Germany. An Experience Beyond the Ordinary.',
  established: 1983,
  city: 'Colombo, Sri Lanka',
  addressLines: ['11 Galle Face Terrace,', 'Colombo 00300,', 'Sri Lanka.'],
  fullAddress: '11 Galle Face Terrace, Colombo 00300, Sri Lanka',
  phoneDisplay: '+94 11 242 1577',
  phoneHref: 'tel:+94112421577',
  email: 'bavarianrestaurant1983@gmail.com',
  emailHref: 'mailto:bavarianrestaurant1983@gmail.com',
  links: {
    googleMaps: 'https://www.google.com/maps/place/The+Bavarian+German+Restaurant+and+pub/',
    facebook: 'https://www.facebook.com/TheBavarianSL/',
    instagram: 'https://www.instagram.com/thebavarian_sl/',
    uberEats: 'https://www.ubereats.com/lk/store/the-bavarian/_msBhO0wRoW7b9SxjDwUig',
  },
};

export const MENU_CATEGORIES: MenuCategory[] = [
  'Starters',
  'Soups',
  'Salads',
  'Sausages',
  'Pork Ribs',
  'Main Courses',
  'Schnitzel',
  'Pasta',
  'Grill & Steaks',
  'Gourmet Burgers',
  'Desserts',
  'Beverages & Cocktails',
];

export const SIGNATURE_CARDS: SignatureCard[] = [
  {
    id: 'german-classics',
    number: '01',
    title: 'German Classics',
    subtitle: 'Sausages, schnitzel and traditional favourites.',
    description:
      'Munich white sausage with pretzel and mustard, hearty Currywurst, and grand 5-variety sausage platters.',
    image: '/images/bavarian/munich-white-sausage.jpg',
    targetCategory: 'Sausages',
    highlights: ['Munich White Sausage', 'Currywurst', 'Sausage Platter'],
    isOfficialPhoto: true,
  },
  {
    id: 'from-the-grill',
    number: '02',
    title: 'From the Grill',
    subtitle: 'Steaks, ribs and grilled specialities.',
    description:
      'Slow-roasted honey BBQ and bacon-cheddar wrapped pork ribs, woodcutter steaks, and mixed grill platters.',
    image: '/images/bavarian/bacon-cheddar-ribs.jpg',
    targetCategory: 'Pork Ribs',
    highlights: ['Bacon & Cheddar Ribs', 'Honey BBQ Ribs', 'Meat Mixed Grill'],
    isOfficialPhoto: true,
  },
  {
    id: 'european-favourites',
    number: '03',
    title: 'European Favourites',
    subtitle: 'Pork knuckle, goulash, pasta and seafood.',
    description:
      'Whole crispy pork knuckle, slow-braised Australian lamb shank, beef goulash, and black truffle fettuccini.',
    image: '/images/bavarian/roast-pork-belly.jpg',
    targetCategory: 'Main Courses',
    highlights: ['Pork Knuckle', 'Australian Lamb Shank', 'Beef Goulash'],
    isOfficialPhoto: true,
  },
  {
    id: 'drinks-cocktails',
    number: '04',
    title: 'Drinks & Cocktails',
    subtitle: 'Refreshing beverages and pub favourites.',
    description:
      'Chilled dimpled Maßkrug steins brimming with golden draught beer, signature house cocktails, and espresso martinis.',
    image: '/images/bavarian/bavarian-steins-cheers.jpg',
    targetCategory: 'Beverages & Cocktails',
    highlights: ['Dimpled Beer Steins', 'Bavarian Ruby Citrus', 'Espresso Martini'],
    isOfficialPhoto: true,
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // ==================== STARTERS (Uber Eats Verified) ====================
  {
    id: 'starter-chicken-wings',
    name: 'Chicken Wings',
    category: 'Starters',
    priceLkr: 1750,
    description:
      'Crisp-roasted chicken wings served with your choice of honey mustard or spicy buffalo sauce.',
    image:
      'https://images.unsplash.com/photo-1606502973842-f64bc2785fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Popular',
  },
  {
    id: 'starter-garlic-bread-rolls',
    name: 'Mozzarella, Butter & Roasted Garlic Bread Rolls',
    category: 'Starters',
    priceLkr: 1640,
    description:
      'Warm oven-baked bread rolls brushed with roasted garlic butter and melted mozzarella.',
    image:
      'https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'starter-ham-rolls',
    name: 'Pork or Chicken Ham Rolls',
    category: 'Starters',
    priceLkr: 1640,
    description:
      'Savory pork or chicken ham rolls filled with chopped egg salad and topped with crisp shoestring potato.',
    image:
      'https://images.unsplash.com/photo-1541529086526-db283c563270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'starter-pork-meatballs',
    name: 'Pork Meatballs',
    category: 'Starters',
    priceLkr: 3000,
    description:
      'Pan-seared seasoned pork meatballs served with traditional mustard sauce and bacon sauerkraut.',
    image:
      'https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'House Special',
  },
  {
    id: 'starter-breaded-brie',
    name: 'Breaded Brie',
    category: 'Starters',
    priceLkr: 3270,
    description:
      'Golden herb-crumbed brie fried until molten inside and accompanied by house chutney.',
    image:
      'https://images.unsplash.com/photo-1637273484026-11d51fb64024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'starter-cream-cheese-prawns',
    name: 'Bacon & Herb Cream Cheese Prawns',
    category: 'Starters',
    priceLkr: 3900,
    description:
      'Succulent prawns wrapped in bacon with herb cream cheese, served with roasted garlic aioli.',
    image:
      'https://images.unsplash.com/photo-1625943558005-1a8aa87b1b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Chef’s Pick',
  },

  // ==================== SOUPS (Uber Eats Verified) ====================
  {
    id: 'soup-roasted-tomato',
    name: 'Roasted Tomato Soup',
    category: 'Soups',
    priceLkr: 1250,
    description:
      'Velvety slow-roasted vine tomato soup finished with fragrant basil oil.',
    image:
      'https://images.unsplash.com/photo-1616689314353-046ee6021f56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'soup-chicken-mushroom',
    name: 'Cream of Chicken & Mushroom Soup',
    category: 'Soups',
    priceLkr: 1250,
    description:
      'Rich country cream broth with tender chicken, sautéed mushrooms, and homemade noodles.',
    image:
      'https://images.unsplash.com/photo-1527976746453-f363eac4d889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'soup-beef-goulash',
    name: 'Slow Braised Beef Goulash Soup',
    category: 'Soups',
    priceLkr: 1580,
    description:
      'Hearty Central European beef broth slow-simmered with tender beef cubes, paprika, and vegetables.',
    image:
      'https://images.unsplash.com/photo-1780019676104-79da19c02d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Heritage Recipe',
  },
  {
    id: 'soup-french-onion',
    name: 'Rich French Onion Soup',
    category: 'Soups',
    priceLkr: 1800,
    description:
      'Caramelised onions in a deep beef broth topped with a baked golden cheese crust.',
    image:
      'https://images.unsplash.com/photo-1552298013-de2af4b94854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },

  // ==================== SALADS (Uber Eats Verified) ====================
  {
    id: 'salad-roasted-vegetable-chickpea',
    name: 'Roasted Vegetable & Chickpea Salad',
    category: 'Salads',
    priceLkr: 1360,
    description:
      'Oven-roasted seasonal vegetables and chickpeas finished with balsamic glaze, pomegranate, and yoghurt dressing.',
    image:
      'https://images.unsplash.com/photo-1761315600943-d8a5bb0c499f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Vegetarian',
  },
  {
    id: 'salad-spinach-poached-egg',
    name: 'Fresh Spinach, Poached Egg & Bacon Salad',
    category: 'Salads',
    priceLkr: 1525,
    description:
      'Tender baby spinach leaves tossed in citrus vinaigrette with a soft poached egg, herb croutons, and crispy bacon.',
    image:
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'salad-classic-caesar',
    name: 'Classic Caesar Salad',
    category: 'Salads',
    priceLkr: 1970,
    description:
      'Crisp romaine lettuce with anchovy and egg yolk dressing, grated parmesan, and crunchy herb croutons.',
    image:
      'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'salad-grilled-chicken-bacon-caesar',
    name: 'Caesar Salad with Grilled Chicken or Bacon',
    category: 'Salads',
    priceLkr: 3050,
    description:
      'Our signature Caesar salad topped with your choice of chargrilled chicken breast or smoky streaky bacon.',
    image:
      'https://images.unsplash.com/photo-1773067752070-e1d3923caf71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Featured',
  },

  // ==================== SAUSAGES (Uber Eats Verified) ====================
  {
    id: 'sausage-munich-white',
    name: 'Munich White Sausage with Mustard & Pretzel',
    category: 'Sausages',
    priceLkr: 3050,
    description:
      'Authentic Bavarian Weisswurst served in warm herb broth alongside a freshly baked pretzel and traditional mustard.',
    image: '/images/bavarian/munich-white-sausage.jpg',
    isOfficialPhoto: true,
    badge: '1983 Signature',
  },
  {
    id: 'sausage-currywurst',
    name: 'Currywurst',
    category: 'Sausages',
    priceLkr: 3270,
    description:
      'German-style sausages smothered in homemade spiced curry sauce, served with braised red cabbage and fries.',
    image:
      'https://images.unsplash.com/photo-1585325701165-351af916e581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'German Icon',
  },
  {
    id: 'sausage-pork-chicken-sauerkraut',
    name: '2 Pork or Chicken Sausages with Mustard & Sauerkraut',
    category: 'Sausages',
    priceLkr: 3270,
    description:
      'Two pan-seared pork or chicken sausages served over warm barrel sauerkraut with German mustard.',
    image:
      'https://images.unsplash.com/photo-1551135020-39e4ca508d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Featured',
  },
  {
    id: 'sausage-platter',
    name: 'Sausage Platter (5 Varieties)',
    category: 'Sausages',
    priceLkr: 6200,
    description:
      'A grand assortment of 5 German sausage varieties accompanied by braised red cabbage, sauerkraut, and potato salad.',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Sharing Platter',
  },

  // ==================== PORK RIBS (Uber Eats Verified) ====================
  {
    id: 'ribs-honey-bbq',
    name: 'Honey BBQ Ribs (4 Ribs)',
    category: 'Pork Ribs',
    priceLkr: 4470,
    description:
      'Slow-roasted individual pork ribs basted in a glossy caramelized honey barbecue glaze.',
    image: '/images/bavarian/honey-bbq-ribs.jpg',
    isOfficialPhoto: true,
    badge: 'Popular',
  },
  {
    id: 'ribs-spicy-sriracha',
    name: 'Spicy Sriracha Ribs (4 Ribs)',
    category: 'Pork Ribs',
    priceLkr: 4470,
    description:
      'Slow-roasted individual pork ribs glazed with a fiery sriracha-garlic reduction.',
    image:
      'https://images.unsplash.com/photo-1761315412952-a3a9e3ed06ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Spicy Glaze',
  },
  {
    id: 'ribs-bacon-cheddar',
    name: 'Bacon & Cheddar Wrapped Ribs (4 Ribs)',
    category: 'Pork Ribs',
    priceLkr: 5500,
    description:
      'Slow-roasted pork ribs wrapped in smoky streaky bacon and melted cheddar cheese.',
    image: '/images/bavarian/bacon-cheddar-ribs.jpg',
    isOfficialPhoto: true,
    badge: 'Showstopper',
  },

  // ==================== MAIN COURSES (Uber Eats Verified) ====================
  {
    id: 'main-potato-dumplings',
    name: 'German Potato Dumplings',
    category: 'Main Courses',
    priceLkr: 1620,
    description:
      'Traditional house-made German potato dumplings served in a rich woodland mushroom ragu.',
    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Traditional',
  },
  {
    id: 'main-braised-chicken-fillets',
    name: 'Braised Chicken Fillets',
    category: 'Main Courses',
    priceLkr: 3340,
    description:
      'Tender chicken fillets braised with mushrooms and tarragon cream, served alongside homemade noodles.',
    image:
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'main-fish-and-chips',
    name: 'Beer Batter Fish & Chips',
    category: 'Main Courses',
    priceLkr: 4340,
    description:
      'Crisp beer-battered white fish fillet served with golden fries, house tartar sauce, and lemon.',
    image:
      'https://images.unsplash.com/photo-1667451417729-73e944a796a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'main-chicken-cordon-bleu',
    name: 'Chicken Cordon Bleu',
    category: 'Main Courses',
    priceLkr: 4450,
    description:
      'Crispy crumbed chicken breast filled with melted cheese and chicken ham or bacon, served with fries.',
    image:
      'https://images.unsplash.com/photo-1599921841143-819065a55cc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'main-pork-cordon-bleu',
    name: 'Pork Cordon Bleu',
    category: 'Main Courses',
    priceLkr: 5760,
    description:
      'Crispy golden pork escalope stuffed with cheese and pork ham or bacon, served with golden fries.',
    image:
      'https://images.unsplash.com/photo-1560611588-163f295eb145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'main-beef-goulash',
    name: 'Beef Goulash',
    category: 'Main Courses',
    priceLkr: 5760,
    description:
      'Slow-braised beef cooked with sweet paprika and vegetables, served over creamy mashed potato.',
    image:
      'https://images.unsplash.com/photo-1743362818809-5291a1566ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Bavarian Classic',
  },
  {
    id: 'main-australian-lamb-shank',
    name: 'Australian Lamb Shank',
    category: 'Main Courses',
    priceLkr: 10250,
    description:
      'Whole Australian lamb shank slow-braised in red wine reduction and served over creamy mashed potato.',
    image:
      'https://images.unsplash.com/photo-1556269923-e4ef51d69638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Chef’s Reserve',
  },
  {
    id: 'main-pork-knuckle',
    name: 'Pork Knuckle (Schweinshaxe)',
    category: 'Main Courses',
    priceLkr: 11200,
    description:
      'Boiled or crispy whole roasted Bavarian pork knuckle served with mashed potato, rich gravy, and braised red cabbage.',
    image: '/images/bavarian/roast-pork-belly.jpg',
    isOfficialPhoto: true,
    badge: 'Bavarian Feast',
  },

  // ==================== SCHNITZEL (Uber Eats Verified) ====================
  {
    id: 'schnitzel-chicken',
    name: 'Chicken Schnitzel',
    category: 'Schnitzel',
    priceLkr: 4400,
    description:
      'Hand-crumbed golden chicken schnitzel pan-fried until crisp and served with your choice of traditional side and sauce.',
    image:
      'https://images.unsplash.com/photo-1640346060848-ad6921833885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'schnitzel-pork',
    name: 'Pork Schnitzel',
    category: 'Schnitzel',
    priceLkr: 5480,
    description:
      'Classic tenderloin pork schnitzel in a crisp golden breadcrumb coat, served with your choice of side and sauce.',
    image:
      'https://images.unsplash.com/photo-1560611588-163f295eb145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'House Classic',
  },

  // ==================== PASTA (Uber Eats Verified) ====================
  {
    id: 'pasta-homemade-noodle-cheese',
    name: 'Homemade Noodle Baked with Cheese & Onion',
    category: 'Pasta',
    priceLkr: 1640,
    description:
      'Bavarian Käsespätzle-style homemade noodles baked golden with melted cheese and sweet caramelized onions.',
    image:
      'https://images.unsplash.com/photo-1611280422374-fa3c1110c16e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'German Comfort',
  },
  {
    id: 'pasta-macaroni-cheese',
    name: 'Macaroni & Cheese with Herb Crust',
    category: 'Pasta',
    priceLkr: 2200,
    description:
      'Creamy baked macaroni folded into a rich cheese sauce and topped with a golden toasted herb crust.',
    image:
      'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'pasta-black-truffle-fettuccine',
    name: 'Black Truffle, Cream & Mushroom Fettuccini',
    category: 'Pasta',
    priceLkr: 2940,
    description:
      'Ribbon fettuccini tossed in a fragrant black truffle, wild mushroom, and cream reduction.',
    image:
      'https://images.unsplash.com/photo-1588013273468-315fd88ea34c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Vegetarian',
  },
  {
    id: 'pasta-spaghetti-bolognese',
    name: 'Spaghetti Bolognaise with Parmesan',
    category: 'Pasta',
    priceLkr: 3330,
    description:
      'Slow-simmered beef and tomato ragù over al dente spaghetti, finished with grated parmesan.',
    image:
      'https://images.unsplash.com/photo-1626300006988-42a927fd80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'pasta-grilled-chicken-fettuccine',
    name: 'Spice Rubbed Grilled Chicken Fettuccini',
    category: 'Pasta',
    priceLkr: 3330,
    description:
      'Chargrilled spice-rubbed chicken breast strips served over creamy fettuccini pasta.',
    image:
      'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'pasta-bacon-mushroom-leeks',
    name: 'Bacon, Mushroom, Crispy Leeks & Creamy Parmesan Pasta',
    category: 'Pasta',
    priceLkr: 3330,
    description:
      'Smoky bacon, sautéed mushrooms, and crisp leeks folded into a velvety parmesan cream pasta.',
    image:
      'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'pasta-spicy-garlic-prawn',
    name: 'Spicy Garlic Prawn Spaghetti',
    category: 'Pasta',
    priceLkr: 3800,
    description:
      'Al dente spaghetti tossed with ocean prawns, roasted garlic, chili flakes, and olive oil.',
    image:
      'https://images.unsplash.com/photo-1556761223-4c4282c73f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Featured',
  },
  {
    id: 'pasta-mixed-seafood',
    name: 'Mixed Seafood Pasta',
    category: 'Pasta',
    priceLkr: 5300,
    description:
      'Salmon, prawns, calamari, and sea clams simmered in white wine with ribbon fettuccini.',
    image:
      'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Seafood Selection',
  },

  // ==================== GRILL & STEAKS (Uber Eats Verified) ====================
  {
    id: 'grill-half-chicken',
    name: '½ Grilled Chicken Boneless',
    category: 'Grill & Steaks',
    priceLkr: 3950,
    description:
      'Flame-grilled half boneless chicken served with your choice of side dish and signature sauce.',
    image:
      'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'grill-modha-fillet',
    name: 'Modha Fillet',
    category: 'Grill & Steaks',
    priceLkr: 4460,
    description:
      'Pan-seared local Modha (barramundi) fillet served with your choice of side dish and sauce.',
    image:
      'https://images.unsplash.com/photo-1626203313658-886791f37e46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Featured',
  },
  {
    id: 'grill-pork-fillet-steak',
    name: 'Pork Fillet Steak',
    category: 'Grill & Steaks',
    priceLkr: 4800,
    description:
      'Tender chargrilled pork fillet medallion served with your choice of side dish and sauce.',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'grill-fillet-steak-250',
    name: 'Fillet Steak (250g)',
    category: 'Grill & Steaks',
    priceLkr: 5480,
    description:
      '250g prime beef fillet steak grilled to order with your choice of side dish and sauce.',
    image:
      'https://images.unsplash.com/photo-1600891964532-839fb6407dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'grill-pork-loin-chops',
    name: 'Pork Loin Chops',
    category: 'Grill & Steaks',
    priceLkr: 5600,
    description:
      'Thick-cut Bavarian pork loin chops from the grill, served with your choice of side dish and sauce.',
    image: '/images/bavarian/roast-pork-belly.jpg',
    isOfficialPhoto: true,
    badge: 'Featured',
  },
  {
    id: 'grill-steak-stack',
    name: 'Steak Stack',
    category: 'Grill & Steaks',
    priceLkr: 5990,
    description:
      'Layered chargrilled steak stack crowned with sweet caramelized onions and melted cheese.',
    image:
      'https://images.unsplash.com/photo-1558030006-450675393462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'grill-woodcutter-steak',
    name: '400g Woodcutter Steak',
    category: 'Grill & Steaks',
    priceLkr: 6990,
    description:
      'Hearty 400-gram woodcutter steak topped with sautéed onions and woodland mushrooms.',
    image:
      'https://images.unsplash.com/photo-1546964124-0cce460f38ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: '400g Cut',
  },
  {
    id: 'grill-jumbo-prawns',
    name: 'Grilled Jumbo Prawns',
    category: 'Grill & Steaks',
    priceLkr: 8050,
    description:
      'Flame-grilled jumbo ocean prawns served with lemon butter, side dish, and sauce.',
    image:
      'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'grill-norwegian-salmon',
    name: 'Norwegian Salmon Fillet',
    category: 'Grill & Steaks',
    priceLkr: 8300,
    description:
      'Crisp-skinned imported Norwegian salmon fillet served with your choice of side and sauce.',
    image:
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'grill-surf-and-turf',
    name: 'Surf and Turf (For 1)',
    category: 'Grill & Steaks',
    priceLkr: 10200,
    description:
      'Prime chargrilled steak paired with grilled ocean prawns, served with side dish and sauce.',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'grill-meat-mixed-grill',
    name: 'Meat Mixed Grill Platter',
    category: 'Grill & Steaks',
    priceLkr: 12540,
    description:
      'Sliced beef fillet, grilled chicken, pork chops, pork ribs, lamb skewers, sausages, bacon, and fried egg.',
    image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Grand Feast',
  },
  {
    id: 'grill-grass-fed-tenderloin',
    name: 'Young Grass-Fed Tenderloin (250g)',
    category: 'Grill & Steaks',
    priceLkr: 13900,
    description:
      'Premium 250g young grass-fed beef tenderloin seared to perfection with side dish and sauce.',
    image:
      'https://images.unsplash.com/photo-1600891964532-839fb6407dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Reserve Cut',
  },
  {
    id: 'grill-lamb-rack-chops',
    name: 'Premium Australian Lamb Rack Chops',
    category: 'Grill & Steaks',
    priceLkr: 14900,
    description:
      'Chargrilled imported Australian lamb rack chops served with your choice of side and sauce.',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Premium Cut',
  },
  {
    id: 'grill-rib-eye-300',
    name: 'Rib Eye Steak (300g)',
    category: 'Grill & Steaks',
    priceLkr: 16800,
    description:
      '300g richly marbled prime rib eye steak flame-grilled to order with side dish and sauce.',
    image:
      'https://images.unsplash.com/photo-1558030006-450675393462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: '300g Prime',
  },

  // ==================== GOURMET BURGERS (Uber Eats Verified) ====================
  {
    id: 'burger-pork-bacon-chili-jam',
    name: 'Pork & Bacon Chili Jam Burger',
    category: 'Gourmet Burgers',
    priceLkr: 2750,
    description:
      'Grilled pork patty, house bacon chili jam, cheddar cheese, and special burger sauce with natural chips.',
    image: '/images/bavarian/pork-chili-jam-burger.jpg',
    isOfficialPhoto: true,
    badge: 'House Burger',
  },
  {
    id: 'burger-angus-single',
    name: 'Angus Smashed Beef Single Patty Burger',
    category: 'Gourmet Burgers',
    priceLkr: 2750,
    description:
      '100% Australian Angus smashed beef patty, grilled onions, cheddar cheese, and special sauce with natural chips.',
    image:
      'https://images.unsplash.com/photo-1598401863352-3de5501f4890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'burger-lamb',
    name: 'Australian Lamb Burger',
    category: 'Gourmet Burgers',
    priceLkr: 3100,
    description:
      'Grilled Australian lamb patty with Dijon mustard and caramelized onion, served with natural chips.',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'burger-angus-double',
    name: 'Angus Smashed Beef Double Patty Burger',
    category: 'Gourmet Burgers',
    priceLkr: 3900,
    description:
      '100% Australian Angus double patty, grilled onions, special burger sauce, cheddar cheese, lettuce, and tomato with natural chips.',
    image:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Double Angus',
  },

  // ==================== DESSERTS (Uber Eats Verified) ====================
  {
    id: 'dessert-sticky-toffee-pudding',
    name: 'Sticky Toffee Pudding',
    category: 'Desserts',
    priceLkr: 1375,
    description:
      'Warm date and toffee sponge pudding served with rich caramel sauce and vanilla ice cream.',
    image:
      'https://images.unsplash.com/photo-1648471690460-820ae9b83589?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Uber Eats Favourite',
  },

  // ==================== BEVERAGES & COCKTAILS (Dine-in Bar Signatures) ====================
  {
    id: 'drink-bavarian-steins',
    name: 'Signature Dimpled Maßkrug Beer & Frozen Cooler',
    category: 'Beverages & Cocktails',
    priceLabel: 'Dine-In Bar',
    description:
      'Served in our heavy dimpled glass steins emblazoned with The Bavarian crest.',
    image: '/images/bavarian/bavarian-steins-cheers.jpg',
    isOfficialPhoto: true,
    badge: 'Iconic Since 1983',
  },
  {
    id: 'drink-ruby-citrus-cocktail',
    name: 'The Bavarian Ruby Citrus Cocktail',
    category: 'Beverages & Cocktails',
    priceLabel: 'Dine-In Bar',
    description:
      'Jewel-toned house cocktail served over ice with fresh orange wheel, lemon spiral, and crest swizzle.',
    image: '/images/bavarian/bavarian-ruby-cocktail.jpg',
    isOfficialPhoto: true,
    badge: 'Bar Signature',
  },
  {
    id: 'drink-espresso-martini',
    name: 'Velvet Cocoa Espresso Martini',
    category: 'Beverages & Cocktails',
    priceLabel: 'Dine-In Bar',
    description:
      'Chilled espresso shaken with coffee liqueur to a rich crema head, dusted with cocoa and coffee beans.',
    image: '/images/bavarian/espresso-martini.jpg',
    isOfficialPhoto: true,
    badge: 'After-Dinner',
  },
];

export const EXPERIENCE_CHAPTERS: ExperienceChapter[] = [
  {
    id: 'exp-wooden-interiors',
    index: '01',
    tag: 'WARM WOODEN INTERIORS',
    title: 'Old-World Timber & Amber Glow',
    subtitle: 'An intimate sanctuary of polished mahogany, brass and warm pendant light.',
    description:
      'Step off Galle Face Terrace into a world shaped by over four decades of hospitality.',
    image: '/images/bavarian/bavarian-bar-interior.jpg',
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
    image: '/images/bavarian/bavarian-steins-cheers.jpg',
    secondaryImage: '/images/bavarian/bavarian-ruby-cocktail.jpg',
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
      'https://images.unsplash.com/photo-1779372178902-5d355e0dfe06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
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
      'https://images.unsplash.com/photo-1786654735906-6e472c374c46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
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
    image: '/images/bavarian/roast-pork-belly.jpg',
    secondaryImage: '/images/bavarian/bacon-cheddar-ribs.jpg',
    detailNote: 'Hearty portions crafted for shared table rituals',
    isOfficialPhoto: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-steins-cheers',
    title: 'Prost at The Bavarian',
    category: 'Drinks & Steins',
    caption: 'Signature dimpled glass steins emblazoned with The Bavarian gothic crest.',
    image: '/images/bavarian/bavarian-steins-cheers.jpg',
    spanClass: 'md:col-span-7 md:row-span-2',
    isOfficialPhoto: true,
  },
  {
    id: 'gal-roast-pork',
    title: 'Crispy Crackling Roast Pork',
    category: 'Signature Dishes',
    caption: 'Golden crackling pork belly served with braised red cabbage, sauerkraut and rich gravy.',
    image: '/images/bavarian/roast-pork-belly.jpg',
    spanClass: 'md:col-span-5 md:row-span-1',
    isOfficialPhoto: true,
  },
  {
    id: 'gal-munich-sausage',
    title: 'Munich White Sausage & Pretzel',
    category: 'Grill & Sausages',
    caption: 'Traditional poached Weisswurst in herb broth with warm pretzel and duo of mustards.',
    image: '/images/bavarian/munich-white-sausage.jpg',
    spanClass: 'md:col-span-5 md:row-span-1',
    isOfficialPhoto: true,
  },
  {
    id: 'gal-bar-interior',
    title: 'The Bavarian Timber Bar',
    category: 'Interiors & Bar',
    caption: 'Warm mahogany panelling, overhead stemware, carved wooden stools and amber lamps.',
    image: '/images/bavarian/bavarian-bar-interior.jpg',
    spanClass: 'md:col-span-6 md:row-span-2',
    isOfficialPhoto: true,
  },
  {
    id: 'gal-bacon-cheddar-ribs',
    title: 'Bacon & Cheddar Wrapped Ribs',
    category: 'Grill & Sausages',
    caption: 'Flame-roasted pork ribs wrapped in smoky bacon and cheddar glaze.',
    image: '/images/bavarian/bacon-cheddar-ribs.jpg',
    spanClass: 'md:col-span-6 md:row-span-1',
    isOfficialPhoto: true,
  },
  {
    id: 'gal-ruby-cocktail',
    title: 'Signature Bavarian Cocktail',
    category: 'Drinks & Steins',
    caption: 'Ruby house cocktail garnished with fresh orange, lemon spiral and crest swizzle stick.',
    image: '/images/bavarian/bavarian-ruby-cocktail.jpg',
    spanClass: 'md:col-span-3 md:row-span-1',
    isOfficialPhoto: true,
  },
  {
    id: 'gal-espresso-martini',
    title: 'Cocoa Dusted Espresso Martini',
    category: 'Drinks & Steins',
    caption: 'Velvety coffee cocktail topped with roasted beans and cocoa.',
    image: '/images/bavarian/espresso-martini.jpg',
    spanClass: 'md:col-span-3 md:row-span-1',
    isOfficialPhoto: true,
  },
  {
    id: 'gal-honey-bbq-ribs',
    title: 'Glazed Honey BBQ Pork Ribs',
    category: 'Grill & Sausages',
    caption: 'Slow-cooked ribs coated in a rich caramelised honey BBQ reduction.',
    image: '/images/bavarian/honey-bbq-ribs.jpg',
    spanClass: 'md:col-span-4 md:row-span-1',
    isOfficialPhoto: true,
  },
  {
    id: 'gal-pork-chili-burger',
    title: 'Pork & Bacon Chili Jam Burger',
    category: 'Signature Dishes',
    caption: 'Grilled pork patty, bacon chili jam, cheddar cheese and special sauce in sesame brioche.',
    image: '/images/bavarian/pork-chili-jam-burger.jpg',
    spanClass: 'md:col-span-4 md:row-span-1',
    isOfficialPhoto: true,
  },
  {
    id: 'gal-heritage-crest',
    title: 'The Bavarian 1983 Emblem',
    category: 'Interiors & Bar',
    caption: 'The iconic Gothic "B" insignia of The Bavarian German Restaurant & Pub, Since 1983.',
    image: '/images/bavarian/bavarian-logo.jpg',
    spanClass: 'md:col-span-4 md:row-span-1',
    isOfficialPhoto: true,
  },
];

export function formatLkrPrice(item: MenuItem): string {
  if (typeof item.priceLkr === 'number') {
    return `LKR ${item.priceLkr.toLocaleString('en-US')}`;
  }
  return item.priceLabel || 'See Current Menu';
}
