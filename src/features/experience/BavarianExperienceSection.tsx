import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EXPERIENCE_CHAPTERS } from '../../data/bavarianData';

export const BavarianExperienceSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [dragFraction, setDragFraction] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const didSwipeRef = useRef<boolean>(false);
  const pillsContainerRef = useRef<HTMLDivElement | null>(null);
  const total = EXPERIENCE_CHAPTERS.length;

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 640);
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Keep active chapter pill centered horizontally on mobile without touching vertical scroll
  useEffect(() => {
    const container = pillsContainerRef.current;
    if (!container || !isMobile) return;
    const activeBtn = container.children[activeIndex] as HTMLElement | undefined;
    if (activeBtn) {
      const targetLeft =
        activeBtn.offsetLeft - container.clientWidth / 2 + activeBtn.clientWidth / 2;
      container.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
    }
  }, [activeIndex, isMobile]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
    didSwipeRef.current = false;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.touches[0].clientX - touchStartXRef.current;
    if (Math.abs(deltaX) > 6) {
      didSwipeRef.current = true;
    }
    const normalized = Math.max(-0.85, Math.min(0.85, deltaX / 240));
    setDragFraction(normalized);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(false);
    setDragFraction(0);
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;
    if (Math.abs(deltaX) > 38) {
      if (deltaX < 0) goNext();
      else goPrev();
    }
  };

  const handleCardSelect = (idx: number) => {
    if (didSwipeRef.current) {
      didSwipeRef.current = false;
      return;
    }
    setActiveIndex(idx);
  };

  return (
    <section
      id="experience"
      className="relative py-16 sm:py-24 lg:py-32 bg-[#141311] overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 25%, rgba(84,43,50,0.3), transparent 45%), radial-gradient(circle at 80% 75%, rgba(52,66,55,0.25), transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Minimal Section Header + Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-12 reveal-3d">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2.5 text-xs tracking-widest text-[#C5A46D] font-medium">
              <span className="w-6 h-[1px] bg-[#C5A46D]" />
              <span>The Atmosphere</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-[#F2EAE0] font-normal">
              More Than Just a Meal.
            </h2>
          </div>

          {/* 3D Carousel Controls */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              type="button"
              onClick={goPrev}
              className="touch-press w-11 h-11 rounded-full border border-[#C5A46D]/30 bg-[#1D1A17] text-[#F2EAE0] hover:bg-[#C5A46D] hover:text-[#141311] flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Previous experience chapter"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="px-4 py-2 rounded-full bg-[#1D1A17] border border-[#C5A46D]/20 text-xs tracking-widest text-[#C5A46D]">
              0{activeIndex + 1} / 0{total}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="touch-press w-11 h-11 rounded-full border border-[#C5A46D]/30 bg-[#1D1A17] text-[#F2EAE0] hover:bg-[#C5A46D] hover:text-[#141311] flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Next experience chapter"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3D Perspective Coverflow Stage with Live Swipe Tracking */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative h-[340px] sm:h-[460px] lg:h-[500px] w-full flex items-center justify-center perspective-1400 preserve-3d select-none touch-pan-y reveal-3d"
        >
          {EXPERIENCE_CHAPTERS.map((chap, idx) => {
            // Compute circular signed distance in [-2, -1, 0, 1, 2]
            let diff = idx - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isCenter = diff === 0;
            const liveDiff = diff + dragFraction;
            const absLiveDiff = Math.abs(liveDiff);

            const translateX = liveDiff * (isMobile ? 28 : 52);
            const translateZ = -Math.min(2, absLiveDiff) * (isMobile ? 140 : 190);
            const rotateY = liveDiff * (isMobile ? -16 : -26);
            const opacity = Math.max(0.15, 1 - absLiveDiff * 0.44);
            const zIndex = 30 - Math.round(absLiveDiff * 10);

            return (
              <div
                key={chap.id}
                onClick={() => handleCardSelect(idx)}
                style={{
                  transform: `translate3d(${translateX}%, 0px, ${translateZ}px) rotateY(${rotateY}deg)`,
                  opacity,
                  zIndex,
                  transition: isDragging
                    ? 'none'
                    : 'transform 620ms cubic-bezier(0.22, 1, 0.36, 1), opacity 550ms cubic-bezier(0.22, 1, 0.36, 1)',
                }}
                className={`absolute w-[90%] sm:w-[74%] lg:w-[64%] h-full rounded-3xl overflow-hidden bg-[#1D1A17] border shadow-[0_30px_90px_rgba(0,0,0,0.85)] cursor-pointer preserve-3d ${
                  isCenter ? 'border-[#C5A46D]/55' : 'border-[#C5A46D]/15'
                }`}
              >
                <img
                  src={chap.image}
                  alt={chap.title}
                  className="w-full h-full object-cover object-center pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-[#141311]/40 to-transparent" />

                {/* Top Minimal Chapter Tag */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between">
                  <span className="px-3 sm:px-3.5 py-1.5 rounded-full bg-[#141311]/85 backdrop-blur-md border border-[#C5A46D]/30 text-[11px] sm:text-xs text-[#C5A46D] font-medium">
                    {chap.index} · {chap.tag}
                  </span>
                </div>

                {/* Floating Secondary Inset Photograph */}
                {isCenter && chap.secondaryImage && (
                  <div
                    style={{ transform: 'translateZ(40px)' }}
                    className="hidden md:block absolute top-6 right-6 w-32 h-32 rounded-2xl overflow-hidden border-2 border-[#C5A46D]/60 shadow-2xl"
                  >
                    <img
                      src={chap.secondaryImage}
                      alt={chap.subtitle}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </div>
                )}

                {/* Bottom Clean Title & Concise Subtitle */}
                <div className="absolute bottom-5 sm:bottom-7 left-5 sm:left-7 right-5 sm:right-7 max-w-xl space-y-1 sm:space-y-1.5">
                  <h3 className="font-serif-display text-xl sm:text-4xl text-[#F2EAE0] leading-tight">
                    {chap.title}
                  </h3>
                  <p className="font-editorial italic text-base sm:text-xl text-[#C5A46D]">
                    {chap.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Chapter Indicator Pills — Horizontally Scrollable on Mobile */}
        <div
          ref={pillsContainerRef}
          className="mt-6 sm:mt-8 flex sm:flex-wrap items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-1"
        >
          {EXPERIENCE_CHAPTERS.map((chap, idx) => (
            <button
              key={chap.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`touch-press shrink-0 px-4 py-2 min-h-[40px] rounded-full text-xs transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? 'bg-[#C5A46D] text-[#141311] font-semibold shadow-[0_0_20px_rgba(197,164,109,0.35)]'
                  : 'bg-[#1D1A17] text-[#9E9589] border border-[#C5A46D]/15 hover:text-[#F2EAE0]'
              }`}
            >
              {chap.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
