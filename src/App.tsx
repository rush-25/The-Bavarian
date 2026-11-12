import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { SignatureExperienceSection } from './components/SignatureExperienceSection';
import { InteractiveMenuSection } from './components/InteractiveMenuSection';
import { BavarianExperienceSection } from './components/BavarianExperienceSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { MenuCategory } from './data/bavarianData';

const SECTION_IDS = ['home', 'story', 'menu', 'experience', 'gallery', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedMenuCategory, setSelectedMenuCategory] = useState<MenuCategory | 'All'>('All');
  const [reservationOpen, setReservationOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 78;
      const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleSignatureCardSelect = (category: MenuCategory) => {
    setSelectedMenuCategory(category);
    scrollToSection('menu');
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 240;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // 3D Scroll Reveal Observer
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-3d');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#141311] text-[#F2EAE0] selection:bg-[#C5A46D]/35 selection:text-[#F2EAE0]">
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenReservation={() => setReservationOpen(true)}
      />

      <main>
        <HeroSection
          onExploreMenu={() => scrollToSection('menu')}
          onDiscoverStory={() => scrollToSection('story')}
        />

        <StorySection />

        <SignatureExperienceSection onSelectCategory={handleSignatureCardSelect} />

        <InteractiveMenuSection
          selectedCategory={selectedMenuCategory}
          onCategoryChange={setSelectedMenuCategory}
        />

        <BavarianExperienceSection />

        <GallerySection />

        <ContactSection onOpenReservation={() => setReservationOpen(true)} />
      </main>

      <Footer onNavigate={scrollToSection} />

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </div>
  );
}
