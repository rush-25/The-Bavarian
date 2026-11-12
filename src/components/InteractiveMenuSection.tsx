import React, { useMemo, useState } from 'react';
import { ExternalLink, Search, X } from 'lucide-react';
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuCategory,
  MenuItem,
  RESTAURANT_INFO,
  formatLkrPrice,
} from '../data/bavarianData';

interface InteractiveMenuSectionProps {
  selectedCategory: MenuCategory | 'All';
  onCategoryChange: (cat: MenuCategory | 'All') => void;
}

export const InteractiveMenuSection: React.FC<InteractiveMenuSectionProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="menu"
      className="relative py-24 sm:py-32 bg-[#1D1A17] border-t border-b border-[#C5A46D]/15 overflow-hidden"
    >
      <div className="pointer-events-none absolute top-20 right-0 w-[480px] h-[480px] rounded-full bg-[#542B32]/15 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-20 left-0 w-[440px] h-[440px] rounded-full bg-[#344237]/15 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Minimal Header + Search */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 reveal-3d">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2.5 text-xs tracking-widest text-[#C5A46D] font-medium">
              <span className="w-6 h-[1px] bg-[#C5A46D]" />
              <span>The Menu</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl text-[#F2EAE0] font-normal">
              Culinary Repertoire.
            </h2>
          </div>

          {/* Search Input & Direct Uber Eats Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative min-w-[240px]">
              <label htmlFor="menu-search-input" className="sr-only">
                Search menu items
              </label>
              <Search className="w-4 h-4 text-[#C5A46D] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="menu-search-input"
                name="menuSearch"
                type="text"
                autoComplete="off"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes..."
                aria-label="Search menu items"
                className="w-full pl-10 pr-9 py-2.5 rounded-full bg-[#141311] border border-[#C5A46D]/25 text-sm text-[#F2EAE0] placeholder-[#9E9589]/60 focus:outline-none focus:border-[#C5A46D] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9E9589] hover:text-[#F2EAE0] cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <a
              href={RESTAURANT_INFO.links.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#C5A46D] text-[#141311] text-xs font-semibold tracking-wider hover:bg-[#F2EAE0] transition-all shrink-0"
            >
              <span>Order Online</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Sleek Horizontal Category Pill Bar */}
        <div
          role="tablist"
          aria-label="Menu Categories"
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#C5A46D]/15 no-scrollbar"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'All'}
            onClick={() => onCategoryChange('All')}
            className={`shrink-0 px-4 py-2 rounded-full text-xs tracking-wide transition-all duration-300 cursor-pointer border ${
              selectedCategory === 'All'
                ? 'bg-[#C5A46D] text-[#141311] border-[#C5A46D] font-semibold shadow-[0_0_20px_rgba(197,164,109,0.28)]'
                : 'bg-[#141311]/75 text-[#F2EAE0]/80 border-[#C5A46D]/15 hover:border-[#C5A46D]/45 hover:text-[#C5A46D]'
            }`}
          >
            All Dishes
          </button>

          {MENU_CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => onCategoryChange(category)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs tracking-wide transition-all duration-300 cursor-pointer border ${
                  active
                    ? 'bg-[#C5A46D] text-[#141311] border-[#C5A46D] font-semibold shadow-[0_0_20px_rgba(197,164,109,0.28)]'
                    : 'bg-[#141311]/75 text-[#F2EAE0]/80 border-[#C5A46D]/15 hover:border-[#C5A46D]/45 hover:text-[#C5A46D]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Menu Grid with 3D Hover Depth */}
        {filteredItems.length === 0 ? (
          <div className="py-14 text-center rounded-3xl bg-[#141311]/75 border border-[#C5A46D]/20 p-8">
            <p className="font-serif-display text-2xl text-[#F2EAE0] mb-3">
              No matching dishes found
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('All');
              }}
              className="px-6 py-2.5 rounded-full bg-[#C5A46D] text-[#141311] text-xs font-semibold tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const priceString = formatLkrPrice(item);
              const hasVerifiedPrice = typeof item.priceLkr === 'number';

              return (
                <article
                  key={item.id}
                  onClick={() => setSelectedDish(item)}
                  className="group relative rounded-3xl overflow-hidden bg-[#141311] border border-[#C5A46D]/15 hover:border-[#C5A46D]/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:[transform:perspective(900px)_translateY(-6px)_rotateX(2.5deg)] shadow-[0_18px_45px_rgba(0,0,0,0.55)] cursor-pointer"
                >
                  {/* Dish Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-[#1D1A17]">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-transparent to-transparent" />

                    {/* Single Clean Badge */}
                    <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#141311]/85 backdrop-blur-md border border-[#C5A46D]/25 text-[11px] text-[#C5A46D]">
                      {item.badge || item.category}
                    </span>

                    {/* Price Pill */}
                    <div
                      className={`absolute bottom-3 right-3.5 px-3.5 py-1 rounded-full backdrop-blur-md border text-xs ${
                        hasVerifiedPrice
                          ? 'bg-[#141311]/90 border-[#C5A46D]/45 text-[#C5A46D] font-semibold'
                          : 'bg-[#1D1A17]/85 border-[#C5A46D]/20 text-[#F2EAE0]/80'
                      }`}
                    >
                      {priceString}
                    </div>
                  </div>

                  {/* Clean Concise Card Text */}
                  <div className="p-5 space-y-1.5">
                    <h3 className="font-serif-display text-xl text-[#F2EAE0] group-hover:text-[#C5A46D] transition-colors truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#9E9589] line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Minimal Footer Row */}
        <div className="mt-10 pt-6 border-t border-[#C5A46D]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9589]">
          <p>
            Listed LKR amounts are reference prices and subject to change.
          </p>
          <a
            href={RESTAURANT_INFO.links.uberEats}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A46D] hover:text-[#F2EAE0] font-medium inline-flex items-center gap-1.5 transition-colors"
          >
            <span>Full Live Menu on Uber Eats</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 3D Animated Dish Quick-Inspect Modal */}
      {selectedDish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedDish(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl overflow-hidden bg-[#1D1A17] border border-[#C5A46D]/40 shadow-[0_30px_90px_rgba(0,0,0,0.9)] animate-modal-3d"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#141311]/85 border border-[#C5A46D]/35 text-[#F2EAE0] hover:text-[#C5A46D] flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close dish details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12">
              <div className="sm:col-span-6 relative min-h-[250px] sm:min-h-[340px] bg-[#141311]">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="sm:col-span-6 p-6 sm:p-7 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="text-xs tracking-wider text-[#C5A46D] font-medium">
                    {selectedDish.category}
                  </div>
                  <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F2EAE0] leading-tight">
                    {selectedDish.name}
                  </h3>
                  <div className="inline-block px-3.5 py-1 rounded-full bg-[#141311] border border-[#C5A46D]/35 text-sm font-semibold text-[#C5A46D]">
                    {formatLkrPrice(selectedDish)}
                  </div>
                  <p className="text-sm text-[#9E9589] leading-relaxed pt-1">
                    {selectedDish.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#C5A46D]/15">
                  <a
                    href={RESTAURANT_INFO.links.uberEats}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#C5A46D] text-[#141311] text-xs font-semibold tracking-wider hover:bg-[#F2EAE0] transition-colors"
                  >
                    <span>Order on Uber Eats</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
