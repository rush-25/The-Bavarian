/**
 * Smoothly scrolls the window to a specified section element,
 * factoring in a fixed navbar offset.
 */
export function scrollToSection(sectionId: string, navOffset = 78): void {
  const element = document.getElementById(sectionId);
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

