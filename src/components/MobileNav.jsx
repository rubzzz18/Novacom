export default function MobileNav({ isOpen, onClose, openModal }) {
  return (
    <div className={`mobile-nav ${isOpen ? 'open' : ''}`} role="dialog" aria-label="Menu mobile" aria-hidden={!isOpen}>
      <button className="mobile-nav-close" onClick={onClose} aria-label="Fermer le menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <a href="#services" onClick={onClose}>Services</a>
      <a href="#temoignages" onClick={onClose}>Témoignages</a>
      <a href="#apropos" onClick={onClose}>À Propos</a>
      <a href="https://calendly.com/novacom-business/30min" target="_blank" rel="noopener noreferrer" className="nav-btn" onClick={onClose}>Prendre RDV</a>
    </div>
  )
}
