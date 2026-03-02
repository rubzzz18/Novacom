import { useRef } from 'react'
import { useScrollEffect } from '../hooks/useScrollEffect'

export default function Navbar({ menuOpen, setMenuOpen }) {
  const navRef = useRef(null)
  useScrollEffect(navRef)

  return (
    <nav ref={navRef} role="navigation" aria-label="Navigation principale">
      <div className="nav-container">
        <a href="#" className="logo" aria-label="Novacom Business - Accueil">
          <img src="/logo-full.png" alt="Novacom Business" className="logo-full-img" />
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#temoignages">Témoignages</a>
          <a href="#apropos">À Propos</a>
          <a href="https://calendly.com/novacom-business/30min" target="_blank" rel="noopener noreferrer" className="nav-btn">Prendre RDV</a>
        </div>
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
