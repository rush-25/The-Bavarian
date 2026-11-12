import React, { useState } from 'react';
import { Flame, Beer, UtensilsCrossed, Layers } from 'lucide-react';

type StorySlideKey = 'interior' | 'steins' | 'roast';

const SLIDES: {
  key: StorySlideKey;
  src: string;
  title: string;
  tag: string;
}[] = [
  {
    key: 'interior',
    src: '/images/bavarian/bavarian-bar-interior.webp',
    title: 'Timber Bar & Dining Hall',
    tag: '11 Galle Face Terrace',
  },
  {
    key: 'steins',
    src: '/images/bavarian/bavarian-steins-cheers.webp',
    title: 'Dimpled Maßkrug Steins',
    tag: 'Signature Glassware',
  },
  {
    key: 'roast',
    src: '/images/bavarian/roast-pork-belly.webp',
    title: 'Crackling Bavarian Roast',
    tag: 'Time-Honoured Craft',
  },
];

export const StorySection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rx: -ny * 10,
      ry: nx * 12,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  const cycleNext = () => {
    setActiveIdx((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section
      id="story"
      className="relative py-24 sm:py-32 bg-[#1D1A17] overflow-hidden border-t border-b border-[#C5A46D]/15"
    >
      <div className="pointer-events-none absolute top-1/3 left-0 w-[420px] h-[420px] rounded-full bg-[#542B32]/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[360px] h-[360px] rounded-full bg-[#C5A46D]/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Clean, Concise Heritage Story */}
          <div className="lg:col-span-6 space-y-7 reveal-3d">
            <div className="inline-flex items-center gap-2.5 text-xs tracking-widest text-[#C5A46D] font-medium">
              <span className="w-6 h-[1px] bg-[#C5A46D]" />
              <span>Our Heritage</span>
            </div>

            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-[#F2EAE0] font-normal">
              A Tradition of German Hospitality.
            </h2>

            <p className="text-base sm:text-lg text-[#F2EAE0]/85 leading-relaxed font-normal border-l-2 border-[#C5A46D]/60 pl-5 py-1 max-w-xl">
              Established in 1983, The Bavarian is Sri Lanka&apos;s pioneering German restaurant—uniting
              authentic Bavarian roasts, European favourites, and warm timber-lined pub hospitality in Colombo.
            </p>

            {/* Three Minimalist Pillars (No text clutter) */}
            <div className="grid grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-2xl bg-[#141311]/80 border border-[#C5A46D]/15 hover:border-[#C5A46D]/50 transition-all duration-300 hover:-translate-y-1">
                <UtensilsCrossed className="w-5 h-5 text-[#C5A46D] mb-2.5" />
                <div className="font-serif-display text-base text-[#F2EAE0]">German Craft</div>
                <div className="text-xs text-[#9E9589] mt-0.5">Sausages &amp; Roasts</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#141311]/80 border border-[#C5A46D]/15 hover:border-[#C5A46D]/50 transition-all duration-300 hover:-translate-y-1">
                <Beer className="w-5 h-5 text-[#C5A46D] mb-2.5" />
                <div className="font-serif-display text-base text-[#F2EAE0]">Timber Pub</div>
                <div className="text-xs text-[#9E9589] mt-0.5">Frosted Steins</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#141311]/80 border border-[#C5A46D]/15 hover:border-[#C5A46D]/50 transition-all duration-300 hover:-translate-y-1">
                <Flame className="w-5 h-5 text-[#C5A46D] mb-2.5" />
                <div className="font-serif-display text-base text-[#F2EAE0]">Since 1983</div>
                <div className="text-xs text-[#9E9589] mt-0.5">Galle Face</div>
              </div>
            </div>

            {/* Minimal Crest Signature */}
            <div className="pt-2 flex items-center gap-3.5">
              <img
                src="/images/bavarian/bavarian-logo.webp"
                alt="The Bavarian 1983 Emblem"
                className="w-12 h-12 rounded-xl object-cover border border-[#C5A46D]/40"
              />
              <div>
                <div className="font-editorial italic text-xl text-[#F2EAE0]">
                  &ldquo;Gemütlichkeit in the Heart of Colombo&rdquo;
                </div>
                <div className="text-xs text-[#C5A46D]">11 Galle Face Terrace</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Stacked Photo Deck */}
          <div className="lg:col-span-6 relative reveal-3d">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={cycleNext}
              style={{
                transform: `perspective(1200px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                transition: 'transform 260ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="relative h-[420px] sm:h-[470px] w-full max-w-lg mx-auto preserve-3d cursor-pointer select-none"
              title="Click to cycle 3D photo deck"
            >
              {SLIDES.map((slide, index) => {
                const offset = (index - activeIdx + SLIDES.length) % SLIDES.length;
                const translateZ = offset === 0 ? 0 : offset === 1 ? -75 : -150;
                const translateX = offset === 0 ? 0 : offset === 1 ? 26 : 48;
                const translateY = offset === 0 ? 0 : offset === 1 ? -14 : -28;
                const rotateZ = offset === 0 ? 0 : offset === 1 ? 3.5 : 7;
                const opacity = offset === 0 ? 1 : offset === 1 ? 0.65 : 0.35;

                return (
                  <div
                    key={slide.key}
                    style={{
                      transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateZ(${rotateZ}deg)`,
                      opacity,
                      zIndex: 30 - offset * 10,
                      transition:
                        'transform 650ms cubic-bezier(0.16, 1, 0.3, 1), opacity 650ms cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    className="absolute inset-0 rounded-3xl overflow-hidden border border-[#C5A46D]/35 bg-[#141311] shadow-[0_30px_80px_rgba(0,0,0,0.85)]"
                  >
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/90 via-transparent to-transparent" />

                    {/* Clean Minimal Caption */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                      <div>
                        <span className="text-xs text-[#C5A46D] font-medium block mb-1">
                          {slide.tag}
                        </span>
                        <div className="font-serif-display text-2xl text-[#F2EAE0]">
                          {slide.title}
                        </div>
                      </div>
                      <span className="px-3 py-1.5 rounded-full bg-[#141311]/80 backdrop-blur-md border border-[#C5A46D]/30 text-xs text-[#C5A46D] inline-flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        <span>{index + 1}/3</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Clean Dot / Pill Selector */}
            <div className="mt-6 flex items-center justify-center gap-2.5">
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.key}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`px-4 py-2 rounded-full text-xs transition-all duration-300 cursor-pointer ${
                    activeIdx === idx
                      ? 'bg-[#C5A46D] text-[#141311] font-semibold shadow-[0_0_20px_rgba(197,164,109,0.35)]'
                      : 'bg-[#141311]/70 text-[#9E9589] border border-[#C5A46D]/20 hover:text-[#F2EAE0]'
                  }`}
                >
                  {slide.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
