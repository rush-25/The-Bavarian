import React from 'react';
import { MenuItem as MenuItemType } from '../../types/menu';
import { formatLkrPrice } from '../../data/menuData';

export interface MenuItemProps {
  item: MenuItemType;
  onClick: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item, onClick }) => {
  const priceString = formatLkrPrice(item);
  const hasVerifiedPrice = typeof item.priceLkr === 'number';

  return (
    <article
      onClick={onClick}
      className="group relative rounded-3xl overflow-hidden bg-[#141311] border border-[#C5A46D]/15 hover:border-[#C5A46D]/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:hover:[transform:perspective(900px)_translateY(-6px)_rotateX(2.5deg)] shadow-[0_18px_45px_rgba(0,0,0,0.55)] cursor-pointer"
    >
      {/* Dish Image Container */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#1D1A17]">
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
      <div className="p-4 sm:p-5 space-y-1.5">
        <h3 className="font-serif-display text-lg sm:text-xl text-[#F2EAE0] group-hover:text-[#C5A46D] transition-colors truncate">
          {item.name}
        </h3>
        <p className="text-xs text-[#9E9589] line-clamp-1">
          {item.description}
        </p>
      </div>
    </article>
  );
};

