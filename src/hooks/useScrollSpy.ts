import { useEffect, useState } from 'react';
import { SectionId } from '../types/common';

/**
 * Custom hook to track which section is currently active based on scroll position.
 */
export function useScrollSpy(
  sectionIds: SectionId[],
  offset = 240
): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>(
    sectionIds[0] || 'home'
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}

