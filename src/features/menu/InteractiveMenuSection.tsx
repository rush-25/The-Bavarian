import React, { useMemo, useState } from 'react';
import { ExternalLink, Search, X } from 'lucide-react';
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  formatLkrPrice,
} from '../../data/menuData';
import { RESTAURANT_INFO } from '../../utils/constants';
import { MenuCategory as CategoryType, MenuItem as MenuItemType } from '../../types/menu';
import { MenuCategory } from './MenuCategory';
import { MenuItem } from './MenuItem';

export interface InteractiveMenuSectionProps {
  selectedCategory: CategoryType | 'All';
  onCategoryChange: (cat: CategoryType | 'All') => void;
}

export const InteractiveMenuSection: React.FC<InteractiveMenuSectionProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDish, setSelectedDish] = useState<MenuItemType | null>(null);

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
      className="relative py-16 sm:py-24 lg:py-32 bg-[#1D1A17] border-t border-b border-[#C5A46D]/15 overflow-hidden"
    >
      <div className="pointer-events-none absolute top-20 right-0 w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full bg-[#542B32]/15 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-20 left-0 w-[300px] sm:w-[440px] h-[300px] sm:h-[440px] rounded-full bg-[#344237]/15 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Minimal Header + Search */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-10 reveal-3d">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2.5 text-xs tracking-widest text-[#C5A46D] font-medium">
              <span className="w-6 h-[1px] bg-[#C5A46D]" />
              <span>The Menu</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#F2EAE0] font-normal">
              Culinary Repertoire.
            </h2>
          </div>

          {/* Search Input & Direct Uber Eats Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <div className="relative flex-1 sm:min-w-[260px]">
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
                className="w-full pl-10 pr-10 py-2.5 min-h-[44px] rounded-full bg-[#141311] border border-[#C5A46D]/25 text-sm text-[#F2EAE0] placeholder-[#9E9589]/60 focus:outline-none focus:border-[#C5A46D] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-[#9E9589] hover:text-[#F2EAE0] cursor-pointer"
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
              className="touch-press inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-full bg-[#C5A46D] text-[#141311] text-xs font-semibold tracking-wider hover:bg-[#F2EAE0] transition-all shrink-0"
            >
              <span>Order Online</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Sleek Horizontal Category Pill Bar */}
        <MenuCategory
          categories={MENU_CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={onCategoryChange}
          className="mb-8 sm:mb-10"
        />

        {/* Menu Grid with Smooth Category Switch Entrance */}
        {filteredItems.length === 0 ? (
          <div className="animate-card-enter py-12 sm:py-14 text-center rounded-3xl bg-[#141311]/75 border border-[#C5A46D]/20 p-6 sm:p-8">
            <p className="font-serif-display text-2xl text-[#F2EAE0] mb-3">
              No matching dishes found
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('All');
              }}
              className="touch-press px-6 py-2.5 min-h-[44px] rounded-full bg-[#C5A46D] text-[#141311] text-xs font-semibold tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            key={`${selectedCategory}-${searchQuery ? 'search' : 'all'}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {filteredItems.map((item, idx) => (
              <MenuItem
                key={item.id}
                item={item}
                index={idx}
                onClick={() => setSelectedDish(item)}
              />
            ))}
          </div>
        )}

        {/* Minimal Footer Row */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-[#C5A46D]/15 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-[#9E9589] text-center sm:text-left">
          <p>
            Listed LKR amounts are reference prices and subject to change.
          </p>
          <a
            href={RESTAURANT_INFO.links.uberEats}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A46D] hover:text-[#F2EAE0] font-medium inline-flex items-center gap-1.5 transition-colors min-h-[36px]"
          >
            <span>Full Live Menu on Uber Eats</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Responsive Bottom-Sheet (Mobile) / 3D Modal (Desktop) Dish Quick-Inspect */}
      {selectedDish && (
        <div
          className="animate-backdrop-fade fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/82 backdrop-blur-md"
          onClick={() => setSelectedDish(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90dvh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-[#1D1A17] border-t sm:border border-[#C5A46D]/40 shadow-[0_30px_90px_rgba(0,0,0,0.9)] animate-sheet-up sm:animate-modal-3d"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Sheet Handle */}
            <div className="sm:hidden absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-10 h-1 rounded-full bg-[#F2EAE0]/35" />

            <button
              type="button"
              onClick={() => setSelectedDish(null)}
              className="touch-press absolute top-3.5 right-3.5 z-20 w-11 h-11 rounded-full bg-[#141311]/90 border border-[#C5A46D]/35 text-[#F2EAE0] hover:text-[#C5A46D] flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close dish details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12">
              <div className="sm:col-span-6 relative h-56 sm:h-auto sm:min-h-[340px] bg-[#141311]">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="sm:col-span-6 p-5 sm:p-7 flex flex-col justify-between space-y-5 pb-7 sm:pb-7">
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
                    className="touch-press w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 min-h-[46px] rounded-full bg-[#C5A46D] text-[#141311] text-xs font-semibold tracking-wider hover:bg-[#F2EAE0] transition-colors"
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
