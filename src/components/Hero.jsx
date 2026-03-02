export default function Hero() {
  return (
    <section className="hero" id="accueil" aria-label="Section d'accueil Novacom Business">

      <div className="hero-content">
        <div className="hero-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
          </svg>
          Agence Digitale Certifiée
        </div>

        <h1 className="hero-title">
          <span className="gradient-text">Innover, Connecter,</span><br />
          Accompagner
        </h1>

        <p className="hero-subtitle">
          Novacom Business accompagne les entreprises dans leur transformation numérique avec des solutions
          web sur-mesure, des stratégies marketing performantes et un support 24/7.
        </p>

        <div className="hero-actions">
          <a
            href="https://calendly.com/novacom-business/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            aria-label="Prendre rendez-vous avec Novacom Business"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
            </svg>
            Prendre rendez-vous
          </a>
          <a
            href="#services"
            className="btn btn-secondary"
            aria-label="Découvrir nos services"
          >
            Découvrir nos services
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" />
              <polyline points="12 5 19 12 12 19" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>
        </div>

        <div className="hero-trust">
          <div className="trust-avatars" aria-hidden="true">
            {['M', 'S', 'A', 'J'].map((initial, i) => (
              <div key={i} className="trust-avatar">{initial}</div>
            ))}
          </div>
          <p className="trust-text">
            <strong>+250 clients</strong> nous font confiance
          </p>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-card floating">
          <div className="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="card-label">Performance</div>
            <div className="card-value">+187%</div>
          </div>
        </div>

        <div className="hero-mascot-wrapper">
          <img
            src="/robot-mascotte.png"
            alt=""
            className="hero-mascot"
            loading="eager"
          />
        </div>

        <div className="hero-card floating" style={{ animationDelay: '1s' }}>
          <div className="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="17 6 23 6 23 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="card-label">Croissance</div>
            <div className="card-value">99%</div>
          </div>
        </div>
      </div>

      <a href="#services" className="scroll-indicator" aria-label="Faire défiler vers les services">
        <div className="scroll-dot" />
      </a>
    </section>
  );
}
