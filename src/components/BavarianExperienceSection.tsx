import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EXPERIENCE_CHAPTERS } from '../data/bavarianData';

export const BavarianExperienceSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = EXPERIENCE_CHAPTERS.length;

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 bg-[#141311] overflow-hidden"
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 reveal-3d">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2.5 text-xs tracking-widest text-[#C5A46D] font-medium">
              <span className="w-6 h-[1px] bg-[#C5A46D]" />
              <span>The Atmosphere</span>
            </div>
            <h2 className="font-serif-display text-4xl sm:text-5xl text-[#F2EAE0] font-normal">
              More Than Just a Meal.
            </h2>
          </div>

          {/* 3D Carousel Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              className="w-11 h-11 rounded-full border border-[#C5A46D]/30 bg-[#1D1A17] text-[#F2EAE0] hover:bg-[#C5A46D] hover:text-[#141311] flex items-center justify-center transition-all duration-300 cursor-pointer"
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
              className="w-11 h-11 rounded-full border border-[#C5A46D]/30 bg-[#1D1A17] text-[#F2EAE0] hover:bg-[#C5A46D] hover:text-[#141311] flex items-center justify-center transition-all duration-300 cursor-pointer"
              aria-label="Next experience chapter"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3D Perspective Coverflow Stage */}
        <div className="relative h-[430px] sm:h-[500px] w-full flex items-center justify-center perspective-1400 preserve-3d select-none reveal-3d">
          {EXPERIENCE_CHAPTERS.map((chap, idx) => {
            // Compute circular signed distance in [-2, -1, 0, 1, 2]
            let diff = idx - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isCenter = diff === 0;
            const translateX = diff * 52; // percentage
            const translateZ = isCenter ? 0 : Math.abs(diff) === 1 ? -210 : -380;
            const rotateY = diff * -26;
            const opacity = isCenter ? 1 : Math.abs(diff) === 1 ? 0.55 : 0.18;
            const zIndex = 30 - Math.abs(diff) * 10;

            return (
              <div
                key={chap.id}
                onClick={() => setActiveIndex(idx)}
                style={{
                  transform: `translate3d(${translateX}%, 0px, ${translateZ}px) rotateY(${rotateY}deg)`,
                  opacity,
                  zIndex,
                  transition:
                    'transform 700ms cubic-bezier(0.16, 1, 0.3, 1), opacity 700ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className={`absolute w-[90%] sm:w-[74%] lg:w-[64%] h-full rounded-3xl overflow-hidden bg-[#1D1A17] border shadow-[0_30px_90px_rgba(0,0,0,0.85)] cursor-pointer preserve-3d ${
                  isCenter ? 'border-[#C5A46D]/55' : 'border-[#C5A46D]/15'
                }`}
              >
                <img
                  src={chap.image}
                  alt={chap.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-[#141311]/35 to-transparent" />

                {/* Top Minimal Chapter Tag */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#141311]/80 backdrop-blur-md border border-[#C5A46D]/30 text-xs text-[#C5A46D] font-medium">
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
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Bottom Clean Title & Concise Subtitle */}
                <div className="absolute bottom-7 left-7 right-7 max-w-xl space-y-1.5">
                  <h3 className="font-serif-display text-2xl sm:text-4xl text-[#F2EAE0] leading-tight">
                    {chap.title}
                  </h3>
                  <p className="font-editorial italic text-lg sm:text-xl text-[#C5A46D]">
                    {chap.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Chapter Indicator Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {EXPERIENCE_CHAPTERS.map((chap, idx) => (
            <button
              key={chap.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 rounded-full text-xs transition-all duration-300 cursor-pointer ${
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
