import React, { useEffect, useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../../utils/constants';
import { NAV_LINKS } from '../../data/navigationData';
import { BavarianCrestLogo } from '../common/BavarianCrestLogo';

export interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenReservation,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-2.5 sm:py-3 bg-[#141311]/90 backdrop-blur-xl border-b border-[#C5A46D]/15 shadow-[0_14px_40px_rgba(0,0,0,0.65)]'
          : 'py-3.5 sm:py-5 bg-gradient-to-b from-[#141311]/85 via-[#141311]/30 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        {/* Left: THE BAVARIAN Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="group flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none min-h-[44px]"
        >
          <BavarianCrestLogo className="w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105" />
          <div>
            <span className="block font-serif-display text-base sm:text-lg tracking-[0.14em] sm:tracking-[0.16em] text-[#F2EAE0] font-semibold group-hover:text-[#C5A46D] transition-colors">
              THE BAVARIAN
            </span>
            <span className="block text-[10px] tracking-widest text-[#9E9589]">
              Est. 1983
            </span>
          </div>
        </a>

        {/* Centre: Floating Pill Nav */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#1D1A17]/65 backdrop-blur-md border border-[#C5A46D]/15"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`relative px-4 py-2 rounded-full text-xs tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'text-[#141311] bg-[#C5A46D] font-semibold shadow-[0_0_18px_rgba(197,164,109,0.3)]'
                    : 'text-[#F2EAE0]/80 hover:text-[#C5A46D]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Call + Book a Table + Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href={RESTAURANT_INFO.phoneHref}
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#C5A46D]/25 text-[#C5A46D] hover:bg-[#C5A46D]/15 transition-colors"
            title={`Call ${RESTAURANT_INFO.phoneDisplay}`}
            aria-label={`Call ${RESTAURANT_INFO.phoneDisplay}`}
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenReservation}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-full bg-[#C5A46D] text-[#141311] hover:bg-[#F2EAE0] text-xs font-semibold tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(197,164,109,0.22)] cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book a Table</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#C5A46D]/30 bg-[#1D1A17]/80 text-[#F2EAE0] hover:text-[#C5A46D] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2.5 mx-4 rounded-3xl bg-[#1D1A17]/98 backdrop-blur-2xl border border-[#C5A46D]/30 p-4 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.85)] animate-modal-3d max-h-[calc(100dvh-5rem)] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`flex items-center justify-between px-4 py-3 min-h-[44px] rounded-2xl text-xs tracking-wider transition-colors ${
                    isActive
                      ? 'bg-[#C5A46D] text-[#141311] font-semibold'
                      : 'text-[#F2EAE0] hover:bg-[#141311]/60 hover:text-[#C5A46D]'
                  }`}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          <div className="my-3.5 h-[1px] gold-divider-line" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 min-h-[44px] rounded-2xl bg-[#C5A46D] text-[#141311] text-xs font-semibold tracking-wider hover:bg-[#F2EAE0] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Table</span>
            </button>

            <a
              href={RESTAURANT_INFO.phoneHref}
              className="w-full py-3 min-h-[44px] rounded-2xl bg-[#141311] border border-[#C5A46D]/30 text-[#F2EAE0] text-xs font-medium tracking-wider hover:border-[#C5A46D] transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C5A46D]" />
              <span>{RESTAURANT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

