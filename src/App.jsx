import { useState } from 'react';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import AnimatedBackground from './components/AnimatedBackground';
import Stats from './components/Stats';
import Services from './components/Services';
import ClientLogos from './components/ClientLogos';
import Testimonials from './components/Testimonials';
import APropos from './components/APropos';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import Modal from './components/Modal';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
    setMenuOpen(false);
  };

  const closeModal = () => setActiveModal(null);

  return (
    <>
      <div className="page-bg"><AnimatedBackground /></div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} openModal={openModal} />

      <main>
        <Hero />
        <Stats />
        <Services />
        <ClientLogos />
        <Testimonials />
        <APropos />
        <CtaSection />
      </main>

      <Footer openModal={openModal} />
      <WhatsAppButton />

      {activeModal && (
        <Modal modalName={activeModal} onClose={closeModal} />
      )}
    </>
  );
}
