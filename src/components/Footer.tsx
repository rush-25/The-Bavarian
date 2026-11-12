import React from 'react';
import { ExternalLink, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/bavarianData';
import { BavarianCrestLogo } from './BavarianCrestLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#141311] py-14 border-t border-[#C5A46D]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10">
          {/* Brand Identity */}
          <div className="flex items-center gap-3.5">
            <BavarianCrestLogo className="w-11 h-11" />
            <div>
              <div className="font-serif-display text-xl tracking-widest text-[#F2EAE0] font-semibold">
                THE BAVARIAN
              </div>
              <div className="text-xs text-[#9E9589]">
                11 Galle Face Terrace, Colombo · {RESTAURANT_INFO.phoneDisplay}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6">
            {[
              { id: 'home', label: 'Home' },
              { id: 'story', label: 'Story' },
              { id: 'menu', label: 'Menu' },
              { id: 'experience', label: 'Atmosphere' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'contact', label: 'Contact' },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(link.id);
                }}
                className="text-xs tracking-wider text-[#9E9589] hover:text-[#C5A46D] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={RESTAURANT_INFO.links.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-wider text-[#C5A46D] hover:text-[#F2EAE0] inline-flex items-center gap-1 transition-colors"
            >
              <span>Uber Eats</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="h-[1px] w-full gold-divider-line mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9589]">
          <p>© 2026 The Bavarian German Restaurant &amp; Pub. Est. 1983.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs text-[#C5A46D] hover:text-[#F2EAE0] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
