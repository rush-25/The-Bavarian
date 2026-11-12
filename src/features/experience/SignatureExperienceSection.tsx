import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SIGNATURE_CARDS } from '../../data/menuData';
import { MenuCategory, SignatureCard } from '../../types/menu';

export interface SignatureExperienceSectionProps {
  onSelectCategory: (category: MenuCategory) => void;
}

const TiltCard: React.FC<{
  card: SignatureCard;
  onSelect: (cat: MenuCategory) => void;
}> = ({ card, onSelect }) => {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, glowX: 50, glowY: 50, hovered: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) {
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({
      rx: -(py - 0.5) * 14,
      ry: (px - 0.5) * 16,
      glowX: px * 100,
      glowY: py * 100,
      hovered: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, glowX: 50, glowY: 50, hovered: false });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(card.targetCategory)}
      style={{
        transform: `perspective(1100px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale3d(${
          tilt.hovered ? '1.02, 1.02, 1.02' : '1, 1, 1'
        })`,
        transition: 'transform 260ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className="group relative rounded-3xl overflow-hidden bg-[#1D1A17] border border-[#C5A46D]/20 hover:border-[#C5A46D]/70 shadow-[0_25px_65px_rgba(0,0,0,0.75)] cursor-pointer flex flex-col justify-between min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] preserve-3d reveal-3d"
    >
      {/* Full-bleed Photographic Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-[#141311]/45 to-transparent" />
        {/* Interactive 3D specular spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(197,164,109,0.28), transparent 60%)`,
          }}
        />
      </div>

      {/* Top Row: Minimal Index & Floating 3D Action Orb */}
      <div
        style={{ transform: 'translateZ(26px)' }}
        className="relative z-10 p-5 sm:p-6 flex items-center justify-between"
      >
        <span className="font-serif-display text-lg text-[#C5A46D]/90">{card.number}</span>
        <span className="w-10 h-10 rounded-full bg-[#141311]/75 backdrop-blur-md border border-[#C5A46D]/35 flex items-center justify-center text-[#F2EAE0] group-hover:bg-[#C5A46D] group-hover:text-[#141311] transition-all duration-300 group-hover:scale-110">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>

      {/* Bottom Floating 3D Content Panel */}
      <div
        style={{ transform: 'translateZ(34px)' }}
        className="relative z-10 p-5 sm:p-7 space-y-1.5 sm:space-y-2"
      >
        <div className="text-xs tracking-wider text-[#C5A46D] font-medium">
          {card.targetCategory}
        </div>
        <h3 className="font-serif-display text-2xl sm:text-3xl text-[#F2EAE0] group-hover:text-[#C5A46D] transition-colors">
          {card.title}
        </h3>
        <p className="font-editorial italic text-base sm:text-lg text-[#F2EAE0]/80 leading-snug">
          {card.subtitle}
        </p>
      </div>
    </div>
  );
};

export const SignatureExperienceSection: React.FC<SignatureExperienceSectionProps> = ({
  onSelectCategory,
}) => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#141311] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Minimal Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14 reveal-3d">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2.5 text-xs tracking-widest text-[#C5A46D] font-medium">
              <span className="w-6 h-[1px] bg-[#C5A46D]" />
              <span>House Signatures</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#F2EAE0] font-normal">
              Made to Be Savoured.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9E9589] max-w-xs">
            Select a culinary chapter to explore in the menu below.
          </p>
        </div>

        {/* Four 3D Perspective Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          {SIGNATURE_CARDS.map((card) => (
            <TiltCard key={card.id} card={card} onSelect={onSelectCategory} />
          ))}
        </div>
      </div>
    </section>
  );
};

