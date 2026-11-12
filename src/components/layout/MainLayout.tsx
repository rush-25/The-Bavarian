import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '../common/ScrollToTop';

export interface MainLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenReservation: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  activeSection,
  onNavigate,
  onOpenReservation,
}) => {
  return (
    <div className="min-h-screen bg-[#141311] text-[#F2EAE0] selection:bg-[#C5A46D]/35 selection:text-[#F2EAE0]">
      <Navbar
        activeSection={activeSection}
        onNavigate={onNavigate}
        onOpenReservation={onOpenReservation}
      />

      <main>{children}</main>

      <Footer onNavigate={onNavigate} />

      <ScrollToTop />
    </div>
  );
};

