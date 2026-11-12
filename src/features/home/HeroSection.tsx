import React from 'react';
import { ArrowDownRight, Compass, Utensils, MapPin } from 'lucide-react';
import { HeroStein3D } from './HeroStein3D';
import barInteriorImg from '../../assets/images/bavarian-bar-interior.webp';

export interface HeroSectionProps {
  onExploreMenu: () => void;
  onDiscoverStory: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMenu,
  onDiscoverStory,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] pt-24 pb-12 sm:pt-28 sm:pb-16 flex items-center overflow-hidden bg-[#141311]"
    >
      {/* Atmospheric Dark Restaurant Photography Background with Vignette */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={barInteriorImg}
          alt="The Bavarian Restaurant Bar Interior"
          className="w-full h-full object-cover object-center opacity-20 scale-105 filter contrast-115 saturate-90"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(110deg, #141311 22%, rgba(20,19,17,0.88) 55%, rgba(29,26,23,0.78) 85%, #141311 100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-transparent to-[#141311]/90" />
      </div>

      {/* Ambient Light Orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full bg-[#542B32]/25 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] rounded-full bg-[#344237]/20 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Clean Typography & CTAs (6 columns) */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-7 text-left">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1D1A17]/90 border border-[#C5A46D]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
              <span className="text-[11px] sm:text-xs tracking-widest text-[#C5A46D] font-medium">
                Est. 1983 · Galle Face, Colombo
              </span>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl xl:text-[5.2rem] leading-[0.98] tracking-tight text-[#F2EAE0] font-semibold">
                The Bavarian
              </h1>
              <p className="font-editorial italic text-xl sm:text-2xl md:text-3xl text-[#C5A46D] leading-snug max-w-xl">
                A Taste of Germany. An Experience Beyond the Ordinary.
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#9E9589] leading-relaxed max-w-md">
              Pioneering German roasts, traditional sausages, and frosted dimpled steins in the heart of Colombo.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 pt-1">
              <button
                type="button"
                onClick={onExploreMenu}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 min-h-[48px] rounded-full bg-[#C5A46D] text-[#141311] text-sm font-semibold tracking-wide hover:bg-[#F2EAE0] transition-all duration-300 shadow-[0_12px_35px_rgba(197,164,109,0.28)] hover:-translate-y-0.5 cursor-pointer"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Menu</span>
                <ArrowDownRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={onDiscoverStory}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 min-h-[48px] rounded-full bg-[#1D1A17]/85 hover:bg-[#2A241E] text-[#F2EAE0] border border-[#C5A46D]/30 hover:border-[#C5A46D] text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#C5A46D]" />
                <span>Our Story</span>
              </button>
            </div>

            {/* Minimalist Heritage Strip */}
            <div className="pt-5 sm:pt-6 border-t border-[#C5A46D]/15 grid grid-cols-3 gap-3 sm:gap-6 max-w-md">
              <div>
                <div className="font-serif-display text-xl sm:text-3xl text-[#F2EAE0]">1983</div>
                <div className="text-[11px] sm:text-xs text-[#9E9589] mt-0.5">Founded</div>
              </div>
              <div className="border-l border-[#C5A46D]/15 pl-3 sm:pl-5">
                <div className="font-serif-display text-xl sm:text-3xl text-[#C5A46D]">12</div>
                <div className="text-[11px] sm:text-xs text-[#9E9589] mt-0.5">Menu Chapters</div>
              </div>
              <div className="border-l border-[#C5A46D]/15 pl-3 sm:pl-5">
                <div className="flex items-center gap-1 sm:gap-1.5 font-serif-display text-lg sm:text-2xl text-[#F2EAE0]">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C5A46D] shrink-0" />
                  <span className="truncate">Colombo</span>
                </div>
                <div className="text-[11px] sm:text-xs text-[#9E9589] mt-0.5">Galle Face</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Beer Stein & Pretzel Stage (6 columns) */}
          <div className="lg:col-span-6">
            <HeroStein3D />
          </div>
        </div>
      </div>
    </section>
  );
};

