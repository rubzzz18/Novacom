export default function Footer({ openModal }) {
  return (
    <footer id="apropos" role="contentinfo">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Novacom Business</h3>
          <p>Expert en solutions IT depuis 12 ans. Nous accompagnons les TPE/PME dans leur transformation digitale avec des solutions innovantes et sécurisées.</p>
          <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" style={{ verticalAlign: 'middle', marginRight: '4px' }} aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            novacombusiness@gmail.com
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" style={{ verticalAlign: 'middle', marginRight: '4px' }} aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            01 75 43 04 63
          </p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Automatisation IA</a></li>
            <li><a href="#services">Télécom 3CX</a></li>
            <li><a href="#services">Cybersécurité</a></li>
            <li><a href="#services">Infrastructure IT</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Entreprise</h4>
          <ul>
            <li><a href="#apropos">À Propos</a></li>
            <li><a href="#temoignages">Témoignages</a></li>
            <li><a href="https://calendly.com/novacombusiness" target="_blank" rel="noopener noreferrer">Prendre RDV</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Localisation</h4>
          <ul>
            <li><span>26 Rue des Sablons</span></li>
            <li><span>95360 Montmagny</span></li>
            <li><span>Île-de-France</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>&copy; 2026 Novacom Business. Tous droits réservés.</div>
        <div className="footer-links">
          <button onClick={() => openModal('mentionsLegales')}>Mentions Légales</button>
          <button onClick={() => openModal('confidentialite')}>Confidentialité</button>
        </div>
      </div>
    </footer>
  )
}
