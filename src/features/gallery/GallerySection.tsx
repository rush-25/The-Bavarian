import React, { useEffect, useRef, useState } from 'react';
import { Expand, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS, GALLERY_FILTERS, GalleryFilter } from '../../data/galleryData';
import { GalleryItem } from '../../types/menu';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  const filteredGallery =
    activeFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredGallery.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredGallery.length) % filteredGallery.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredGallery.length]);

  const currentLightboxItem: GalleryItem | null =
    lightboxIndex !== null && filteredGallery[lightboxIndex]
      ? filteredGallery[lightboxIndex]
      : null;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null || lightboxIndex === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
      } else {
        setLightboxIndex(
          (lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length
        );
      }
    }
  };

  return (
    <section
      id="gallery"
      className="relative py-16 sm:py-24 lg:py-32 bg-[#1D1A17] border-t border-b border-[#C5A46D]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Minimal Header + Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-12 reveal-3d">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2.5 text-xs tracking-widest text-[#C5A46D] font-medium">
              <span className="w-6 h-[1px] bg-[#C5A46D]" />
              <span>Visual Archive</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#F2EAE0] font-normal">
              Inside The Bavarian.
            </h2>
          </div>

          <div className="flex sm:flex-wrap items-center gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-1">
            {GALLERY_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => {
                  setLightboxIndex(null);
                  setActiveFilter(filter);
                }}
                className={`shrink-0 px-4 py-2 min-h-[40px] rounded-full text-xs tracking-wide border transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#C5A46D] text-[#141311] border-[#C5A46D] font-semibold shadow-[0_0_20px_rgba(197,164,109,0.28)]'
                    : 'bg-[#141311]/75 text-[#F2EAE0]/80 border-[#C5A46D]/15 hover:border-[#C5A46D]/45'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Asymmetric Bento Grid with 3D Hover Depth */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 auto-rows-[230px] sm:auto-rows-[260px] lg:auto-rows-[280px] gap-4 sm:gap-5">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className={`${
                activeFilter === 'All'
                  ? item.spanClass
                  : 'sm:col-span-1 md:col-span-4 md:row-span-1'
              } group relative rounded-3xl overflow-hidden bg-[#141311] border border-[#C5A46D]/20 hover:border-[#C5A46D]/65 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:hover:[transform:perspective(1000px)_translateY(-6px)_rotateX(2deg)] shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-pointer`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/90 via-transparent to-transparent opacity-75 group-hover:opacity-95 transition-opacity" />

              {/* Top Right Expand Orb */}
              <div className="absolute top-3.5 sm:top-4 right-3.5 sm:right-4">
                <span className="w-9 h-9 rounded-full bg-[#141311]/75 backdrop-blur-md border border-[#C5A46D]/30 text-[#F2EAE0] group-hover:bg-[#C5A46D] group-hover:text-[#141311] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <Expand className="w-4 h-4" />
                </span>
              </div>

              {/* Clean Minimal Bottom Title */}
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 transition-transform duration-300 group-hover:-translate-y-1">
                <span className="text-[11px] text-[#C5A46D] block mb-0.5">
                  {item.category}
                </span>
                <h3 className="font-serif-display text-lg sm:text-2xl text-[#F2EAE0]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen 3D Lightbox Modal */}
      {currentLightboxItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#141311]/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label={currentLightboxItem.title}
        >
          <div
            className="max-w-6xl w-full mx-auto flex items-center justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="px-3.5 py-1.5 rounded-full bg-[#1D1A17] border border-[#C5A46D]/35 text-xs text-[#C5A46D]">
              {lightboxIndex + 1} / {filteredGallery.length}
            </span>
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="inline-flex items-center gap-2 px-4 py-2 min-h-[40px] rounded-full bg-[#1D1A17] border border-[#C5A46D]/35 text-xs text-[#F2EAE0] hover:bg-[#C5A46D] hover:text-[#141311] transition-colors cursor-pointer"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          <div
            className="relative max-w-5xl w-full mx-auto my-auto flex items-center justify-center py-2 sm:py-4 animate-modal-3d"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length
                )
              }
              className="absolute left-2 sm:-left-4 z-20 w-11 h-11 rounded-full bg-[#141311]/90 border border-[#C5A46D]/40 text-[#F2EAE0] hover:bg-[#C5A46D] hover:text-[#141311] flex items-center justify-center transition-colors cursor-pointer shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <img
              src={currentLightboxItem.image}
              alt={currentLightboxItem.title}
              className="max-h-[65dvh] sm:max-h-[72dvh] w-auto max-w-full rounded-2xl sm:rounded-3xl object-contain border border-[#C5A46D]/30 shadow-[0_25px_80px_rgba(0,0,0,0.9)]"
            />

            <button
              type="button"
              onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredGallery.length)}
              className="absolute right-2 sm:-right-4 z-20 w-11 h-11 rounded-full bg-[#141311]/90 border border-[#C5A46D]/40 text-[#F2EAE0] hover:bg-[#C5A46D] hover:text-[#141311] flex items-center justify-center transition-colors cursor-pointer shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div
            className="max-w-2xl w-full mx-auto text-center space-y-1 px-2"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif-display text-xl sm:text-2xl text-[#F2EAE0]">
              {currentLightboxItem.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#9E9589]">{currentLightboxItem.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

