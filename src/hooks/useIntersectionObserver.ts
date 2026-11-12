import { useEffect } from 'react';

/**
 * Custom hook to observe elements with a selector (default: .reveal-3d)
 * and add 'is-visible' once they enter the viewport.
 */
export function useIntersectionObserver(
  selector = '.reveal-3d',
  options: IntersectionObserverInit = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  }
): void {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, options]);
}

