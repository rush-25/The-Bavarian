import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  threshold?: number;
  className?: string;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({
  threshold = 400,
  className = '',
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      setVisible(window.scrollY > threshold);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateVisibility);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateVisibility();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`touch-press fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 w-11 h-11 rounded-full bg-[#1D1A17]/90 backdrop-blur-md border border-[#C5A46D]/40 text-[#C5A46D] hover:bg-[#C5A46D] hover:text-[#141311] flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.7)] transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer ${
        visible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-90 pointer-events-none'
      } ${className}`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
