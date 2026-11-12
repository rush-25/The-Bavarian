# The Bavarian — German Restaurant & Pub (Est. 1983)

A high-performance, responsive luxury web application for **The Bavarian German Restaurant & Pub** located at 11 Galle Face Terrace, Colombo, Sri Lanka.

Built with **React 19**, **Vite 8**, **Tailwind CSS v4**, and **Three.js** featuring interactive 3D spatial models, smooth coverflow carousels, responsive bento galleries, and verified menu pricing in Sri Lankan Rupees (LKR).

---

## 🏛️ Project Architecture

```
The-Bavarian/
├── public/
│   ├── images/
│   │   ├── logo/            # Official vector & webp crest logos
│   │   ├── hero/            # Hero section visuals
│   │   ├── menu/            # Menu photography
│   │   ├── gallery/         # Visual archive photos
│   │   └── restaurant/      # Dining hall & timber bar interior
│   ├── icons/               # Custom UI icons
│   └── favicon.png          # High-resolution favicon
│
├── src/
│   ├── assets/
│   │   ├── images/          # Bundled WebP photographic assets
│   │   ├── fonts/           # Typography definitions
│   │   └── icons/           # Asset icons
│   │
│   ├── components/
│   │   ├── common/          # Reusable shared components
│   │   │   ├── Button.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Loading.tsx
│   │   │   ├── ScrollToTop.tsx
│   │   │   └── BavarianCrestLogo.tsx
│   │   │
│   │   ├── layout/          # Page layout structures
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MainLayout.tsx
│   │   │
│   │   └── ui/              # Interactive UI primitives
│   │       ├── Modal.tsx
│   │       ├── Card.tsx
│   │       └── GalleryImage.tsx
│   │
│   ├── features/            # Domain-driven feature sections
│   │   ├── home/            # Hero & interactive 3D beer stein
│   │   │   ├── HeroSection.tsx
│   │   │   └── HeroStein3D.tsx
│   │   ├── story/           # 40-year heritage & 3D photo deck
│   │   │   └── StorySection.tsx
│   │   ├── menu/            # Live Uber Eats repertoire & search
│   │   │   ├── InteractiveMenuSection.tsx
│   │   │   ├── MenuCategory.tsx
│   │   │   └── MenuItem.tsx
│   │   ├── experience/      # 3D coverflow atmosphere & signatures
│   │   │   ├── SignatureExperienceSection.tsx
│   │   │   └── BavarianExperienceSection.tsx
│   │   ├── gallery/         # Bento gallery archive & lightbox
│   │   │   └── GallerySection.tsx
│   │   ├── contact/         # Location map & direct lines
│   │   │   └── ContactSection.tsx
│   │   └── reservations/    # Table booking experience
│   │       ├── ReservationModal.tsx
│   │       ├── ReservationForm.tsx
│   │       └── ReservationSuccess.tsx
│   │
│   ├── data/                # Data stores & menu catalogs
│   │   ├── bavarianData.ts   # Central re-export & atmosphere chapters
│   │   ├── menuData.ts       # Full dish repertoire with verified LKR prices
│   │   ├── galleryData.ts    # Filtered visual archive
│   │   └── navigationData.ts # Navigation & footer links
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── useScrollSpy.ts
│   │   └── useIntersectionObserver.ts
│   │
│   ├── types/               # TypeScript declarations
│   │   ├── menu.ts
│   │   ├── reservation.ts
│   │   └── common.ts
│   │
│   ├── utils/               # Helper utilities & constants
│   │   ├── scrollToSection.ts
│   │   └── constants.ts
│   │
│   ├── styles/              # CSS & animation keyframes
│   │   └── animations.css
│   │
│   ├── App.tsx              # Root orchestration component
│   ├── main.tsx             # Application entrypoint
│   └── index.css            # Tailwind CSS v4 & theme tokens
│
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ⚡ Features

- **Interactive 3D Maßkrug Stein:** Hand-crafted WebGL Three.js model with dimpled crystal glass refraction, rising carbonation bubbles, frothy foam cap, lighting mood selector (Amber, Ember, Helles), and celebratory toast animations (`Prost!`).
- **Touch-Friendly & Fully Responsive:** Designed for mobile (`375px`), tablet (`768px`), and desktop (`1440px+`) with touch-swipe gesture support on 3D photo decks, coverflow carousels, and lightbox modals.
- **Verified Menu & LKR Prices:** Sourced directly from The Bavarian's official Uber Eats store in Colombo.
- **Modern Asset Delivery:** All photography delivered in modern **WebP** format with responsive art direction.
- **WCAG 2.1 AA Compliance:** Minimum `44×44px` touch targets, `:focus-visible` states, and `prefers-reduced-motion` fallbacks.

---

## 🚀 Development & Build

```bash
# Install dependencies
pnpm install

# Start Vite dev server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

