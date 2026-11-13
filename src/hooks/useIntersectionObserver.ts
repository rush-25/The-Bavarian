import { useEffect } from 'react';

/**
 * Custom hook to observe elements matching `selector` (default: .reveal-3d)
 * and add 'is-visible' once they enter the viewport.
 * Unobserves elements after reveal to keep mobile scrolling smooth.
 */
export function useIntersectionObserver(selector = '.reveal-3d'): void {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector));
    if (elements.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const isMobile = window.innerWidth < 640;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: isMobile ? 0.04 : 0.08,
        rootMargin: isMobile ? '0px 0px -10px 0px' : '0px 0px -30px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}
