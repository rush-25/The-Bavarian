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
    const handleScroll = () => {
      setVisible(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#1D1A17]/90 backdrop-blur-md border border-[#C5A46D]/40 text-[#C5A46D] hover:bg-[#C5A46D] hover:text-[#141311] flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.7)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${className}`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

