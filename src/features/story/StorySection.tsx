import React, { useEffect, useRef, useState } from 'react';
import { Flame, Beer, UtensilsCrossed, Layers } from 'lucide-react';
import { BavarianCrestLogo } from '../../components/common/BavarianCrestLogo';
import barInteriorImg from '../../assets/images/bavarian-bar-interior.webp';
import steinsCheersImg from '../../assets/images/bavarian-steins-cheers.webp';

type StorySlideKey = 'interior' | 'steins' | 'roast';

const SLIDES: {
  key: StorySlideKey;
  src: string;
  title: string;
  shortTitle: string;
  tag: string;
}[] = [
  {
    key: 'interior',
    src: barInteriorImg,
    title: 'Timber Bar & Dining Hall',
    shortTitle: 'Timber Hall',
    tag: '11 Galle Face Terrace',
  },
  {
    key: 'steins',
    src: steinsCheersImg,
    title: 'Dimpled Maßkrug Steins',
    shortTitle: 'Maßkrug Steins',
    tag: 'Signature Glassware',
  },
  {
    key: 'roast',
    src: 'https://images.unsplash.com/photo-1782150924851-f0c28295647f?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=80&w=1080',
    title: 'Crackling Bavarian Roast',
    shortTitle: 'Bavarian Roast',
    tag: 'Time-Honoured Craft',
  },
];

export const StorySection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [isCompactViewport, setIsCompactViewport] = useState(false);
  const [dragX, setDragX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const touchStartXRef = useRef<number | null>(null);
  const didSwipeRef = useRef<boolean>(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsCompactViewport(window.innerWidth < 640);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isCompactViewport) return;
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

  const cyclePrev = () => {
    setActiveIdx((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
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
    // Clamp live drag offset so the deck feels elastic and weighted
    const clamped = Math.max(-130, Math.min(130, deltaX * 0.72));
    setDragX(clamped);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(false);
    setDragX(0);
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    touchStartXRef.current = null;
    if (Math.abs(deltaX) > 38) {
      if (deltaX < 0) cycleNext();
      else cyclePrev();
    }
  };

  const handleCardClick = () => {
    if (didSwipeRef.current) {
      didSwipeRef.current = false;
      return;
    }
    cycleNext();
  };

  return (
    <section
      id="story"
      className="relative py-16 sm:py-24 lg:py-32 bg-[#1D1A17] overflow-hidden border-t border-b border-[#C5A46D]/15"
    >
      <div className="pointer-events-none absolute top-1/3 left-0 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full bg-[#542B32]/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[260px] sm:w-[360px] h-[260px] sm:h-[360px] rounded-full bg-[#C5A46D]/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Clean, Concise Heritage Story */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 reveal-3d">
            <div className="inline-flex items-center gap-2.5 text-xs tracking-widest text-[#C5A46D] font-medium">
              <span className="w-6 h-[1px] bg-[#C5A46D]" />
              <span>Our Heritage</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-[#F2EAE0] font-normal">
              A Tradition of German Hospitality.
            </h2>

            <p className="text-sm sm:text-lg text-[#F2EAE0]/85 leading-relaxed font-normal border-l-2 border-[#C5A46D]/60 pl-4 sm:pl-5 py-1 max-w-xl">
              Established in 1983, The Bavarian is Sri Lanka&apos;s pioneering German restaurant—uniting
              authentic Bavarian roasts, European favourites, and warm timber-lined pub hospitality in Colombo.
            </p>

            {/* Three Minimalist Pillars — Responsive 1-col on narrow mobile, 3-col on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 pt-1">
              <div className="touch-press p-3.5 sm:p-4 rounded-2xl bg-[#141311]/80 border border-[#C5A46D]/15 hover:border-[#C5A46D]/50 transition-all duration-300 sm:hover:-translate-y-1 flex sm:block items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#1D1A17] border border-[#C5A46D]/20 flex items-center justify-center shrink-0 sm:mb-2.5">
                  <UtensilsCrossed className="w-4 h-4 text-[#C5A46D]" />
                </div>
                <div>
                  <div className="font-serif-display text-base text-[#F2EAE0]">German Craft</div>
                  <div className="text-xs text-[#9E9589] mt-0.5">Sausages &amp; Roasts</div>
                </div>
              </div>

              <div className="touch-press p-3.5 sm:p-4 rounded-2xl bg-[#141311]/80 border border-[#C5A46D]/15 hover:border-[#C5A46D]/50 transition-all duration-300 sm:hover:-translate-y-1 flex sm:block items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#1D1A17] border border-[#C5A46D]/20 flex items-center justify-center shrink-0 sm:mb-2.5">
                  <Beer className="w-4 h-4 text-[#C5A46D]" />
                </div>
                <div>
                  <div className="font-serif-display text-base text-[#F2EAE0]">Timber Pub</div>
                  <div className="text-xs text-[#9E9589] mt-0.5">Frosted Steins</div>
                </div>
              </div>

              <div className="touch-press p-3.5 sm:p-4 rounded-2xl bg-[#141311]/80 border border-[#C5A46D]/15 hover:border-[#C5A46D]/50 transition-all duration-300 sm:hover:-translate-y-1 flex sm:block items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#1D1A17] border border-[#C5A46D]/20 flex items-center justify-center shrink-0 sm:mb-2.5">
                  <Flame className="w-4 h-4 text-[#C5A46D]" />
                </div>
                <div>
                  <div className="font-serif-display text-base text-[#F2EAE0]">Since 1983</div>
                  <div className="text-xs text-[#9E9589] mt-0.5">Galle Face</div>
                </div>
              </div>
            </div>

            {/* Minimal Crest Signature */}
            <div className="pt-2 flex items-center gap-3.5">
              <BavarianCrestLogo className="w-11 h-11 sm:w-12 sm:h-12" />
              <div>
                <div className="font-editorial italic text-lg sm:text-xl text-[#F2EAE0]">
                  &ldquo;Gemütlichkeit in the Heart of Colombo&rdquo;
                </div>
                <div className="text-xs text-[#C5A46D]">11 Galle Face Terrace</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Stacked Photo Deck with Live Finger Tracking */}
          <div className="lg:col-span-6 relative reveal-3d">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={handleCardClick}
              style={{
                transform: `perspective(1200px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                transition: 'transform 260ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="relative h-[340px] sm:h-[460px] w-[92%] sm:w-full max-w-lg mx-auto preserve-3d cursor-pointer select-none touch-pan-y"
              title="Tap or swipe to cycle 3D photo deck"
            >
              {SLIDES.map((slide, index) => {
                const offset = (index - activeIdx + SLIDES.length) % SLIDES.length;
                const isFront = offset === 0;
                const dragRatio = Math.min(1, Math.abs(dragX) / 130);

                const baseTranslateZ = isFront ? 0 : offset === 1 ? -65 : -130;
                const translateZ = isFront
                  ? -dragRatio * 20
                  : baseTranslateZ + dragRatio * 30;

                const baseTranslateX = isFront
                  ? 0
                  : offset === 1
                    ? isCompactViewport
                      ? 12
                      : 26
                    : isCompactViewport
                      ? 22
                      : 48;
                const translateX = isFront ? baseTranslateX + dragX : baseTranslateX - dragX * 0.12;

                const translateY = isFront
                  ? Math.abs(dragX) * 0.05
                  : offset === 1
                    ? (isCompactViewport ? -8 : -14) + dragRatio * 4
                    : isCompactViewport
                      ? -16
                      : -28;

                const rotateZ = isFront
                  ? dragX * 0.045
                  : offset === 1
                    ? isCompactViewport
                      ? 2
                      : 3.5
                    : isCompactViewport
                      ? 4
                      : 7;

                const rotateY = isFront ? dragX * 0.08 : 0;
                const opacity = isFront ? Math.max(0.75, 1 - dragRatio * 0.25) : offset === 1 ? 0.65 + dragRatio * 0.2 : 0.35;

                return (
                  <div
                    key={slide.key}
                    style={{
                      transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
                      opacity,
                      zIndex: 30 - offset * 10,
                      transition: isDragging
                        ? 'none'
                        : 'transform 580ms cubic-bezier(0.22, 1, 0.36, 1), opacity 520ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                    className="absolute inset-0 rounded-3xl overflow-hidden border border-[#C5A46D]/35 bg-[#141311] shadow-[0_30px_80px_rgba(0,0,0,0.85)]"
                  >
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141311]/92 via-transparent to-transparent" />

                    {/* Clean Minimal Caption */}
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-end justify-between gap-3">
                      <div className="min-w-0">
                        <span className="text-[11px] sm:text-xs text-[#C5A46D] font-medium block mb-0.5 sm:mb-1 truncate">
                          {slide.tag}
                        </span>
                        <div className="font-serif-display text-lg sm:text-2xl text-[#F2EAE0] truncate">
                          {slide.title}
                        </div>
                      </div>
                      <span className="shrink-0 px-3 py-1.5 rounded-full bg-[#141311]/85 backdrop-blur-md border border-[#C5A46D]/30 text-xs text-[#C5A46D] inline-flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        <span>{index + 1}/3</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Clean Responsive Pill Selector */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2">
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.key}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`touch-press px-3.5 sm:px-4 py-2 min-h-[40px] rounded-full text-xs transition-all duration-300 cursor-pointer ${
                    activeIdx === idx
                      ? 'bg-[#C5A46D] text-[#141311] font-semibold shadow-[0_0_20px_rgba(197,164,109,0.35)]'
                      : 'bg-[#141311]/70 text-[#9E9589] border border-[#C5A46D]/20 hover:text-[#F2EAE0]'
                  }`}
                >
                  <span className="sm:hidden">{slide.shortTitle}</span>
                  <span className="hidden sm:inline">{slide.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
