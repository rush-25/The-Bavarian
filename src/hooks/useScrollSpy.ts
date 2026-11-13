import { useEffect, useState } from 'react';
import { SectionId } from '../types/common';

/**
 * Custom hook to track which section is currently active based on scroll position.
 * Uses requestAnimationFrame throttling for smooth mobile scrolling.
 */
export function useScrollSpy(
  sectionIds: SectionId[],
  offset = 240
): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>(
    sectionIds[0] || 'home'
  );

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + offset;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection((prev) => (prev === id ? prev : id));
          break;
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateActiveSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
