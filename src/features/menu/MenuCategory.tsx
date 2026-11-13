import React, { useEffect, useRef } from 'react';
import { MenuCategory as CategoryType } from '../../types/menu';

export interface MenuCategoryProps {
  categories: CategoryType[];
  selectedCategory: CategoryType | 'All';
  onSelectCategory: (category: CategoryType | 'All') => void;
  className?: string;
}

export const MenuCategory: React.FC<MenuCategoryProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  className = '',
}) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = listRef.current;
    if (!container) return;
    const activeTab = container.querySelector<HTMLButtonElement>('[aria-selected="true"]');
    if (!activeTab) return;
    const targetLeft =
      activeTab.offsetLeft - container.clientWidth / 2 + activeTab.clientWidth / 2;
    container.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
  }, [selectedCategory]);

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label="Menu Categories"
      className={`flex items-center gap-2 overflow-x-auto pb-4 border-b border-[#C5A46D]/15 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 snap-x ${className}`}
    >
      <button
        type="button"
        role="tab"
        aria-selected={selectedCategory === 'All'}
        onClick={() => onSelectCategory('All')}
        className={`shrink-0 snap-start px-4 py-2 min-h-[44px] rounded-full text-xs tracking-wide transition-all duration-300 cursor-pointer border touch-press ${
          selectedCategory === 'All'
            ? 'bg-[#C5A46D] text-[#141311] border-[#C5A46D] font-semibold shadow-[0_0_20px_rgba(197,164,109,0.28)]'
            : 'bg-[#141311]/75 text-[#F2EAE0]/80 border-[#C5A46D]/15 hover:border-[#C5A46D]/45 hover:text-[#C5A46D]'
        }`}
      >
        All Dishes
      </button>

      {categories.map((category) => {
        const active = selectedCategory === category;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onSelectCategory(category)}
            className={`shrink-0 snap-start px-4 py-2 min-h-[44px] rounded-full text-xs tracking-wide transition-all duration-300 cursor-pointer border touch-press ${
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
  );
};

