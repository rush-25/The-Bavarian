import { useState } from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { HeroSection } from './features/home/HeroSection';
import { StorySection } from './features/story/StorySection';
import { SignatureExperienceSection } from './features/experience/SignatureExperienceSection';
import { InteractiveMenuSection } from './features/menu/InteractiveMenuSection';
import { BavarianExperienceSection } from './features/experience/BavarianExperienceSection';
import { GallerySection } from './features/gallery/GallerySection';
import { ContactSection } from './features/contact/ContactSection';
import { ReservationModal } from './features/reservations/ReservationModal';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { scrollToSection } from './utils/scrollToSection';
import { SECTION_IDS } from './utils/constants';
import { MenuCategory } from './types/menu';

export default function App() {
  const activeSection = useScrollSpy(SECTION_IDS, 240);
  const [selectedMenuCategory, setSelectedMenuCategory] = useState<MenuCategory | 'All'>('All');
  const [reservationOpen, setReservationOpen] = useState<boolean>(false);

  // Initialize 3D Scroll Reveal system
  useIntersectionObserver('.reveal-3d');

  const handleNavigate = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  const handleSignatureCardSelect = (category: MenuCategory) => {
    setSelectedMenuCategory(category);
    scrollToSection('menu');
  };

  return (
    <MainLayout
      activeSection={activeSection}
      onNavigate={handleNavigate}
      onOpenReservation={() => setReservationOpen(true)}
    >
      <HeroSection
        onExploreMenu={() => handleNavigate('menu')}
        onDiscoverStory={() => handleNavigate('story')}
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

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </MainLayout>
  );
}
