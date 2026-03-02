import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const valeurs = [
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    color: '#7ed957',
    title: 'Fiabilité',
    desc: 'Support 24/7, engagements contractuels clairs et équipe réactive pour ne jamais vous laisser sans solution.',
  },
  {
    icon: '<circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>',
    color: '#3b82f6',
    title: 'Innovation',
    desc: "Nous intégrons les dernières technologies (IA, cloud, 3CX) pour garder votre entreprise à la pointe de son secteur.",
  },
  {
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    color: '#a855f7',
    title: 'Proximité',
    desc: "Un interlocuteur dédié pour chaque client. Nous prenons le temps de comprendre votre métier avant de proposer une solution.",
  },
]

export default function APropos() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="apropos" className="apropos" aria-label="À propos de Novacom Business">
      <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
        <div className="section-subtitle">À Propos</div>
        <h2 className="section-title">Qui Sommes-Nous ?</h2>
        <p className="section-description">
          Fondée en 2012, Novacom Business accompagne les TPE et PME franciliennes dans leur transformation numérique.
          +250 clients nous font confiance pour leurs infrastructures IT, leurs communications et leur croissance digitale.
        </p>
      </div>

      <div className="apropos-grid">
        {valeurs.map((v, i) => (
          <div className={`apropos-card fade-in ${isVisible ? 'visible' : ''}`} key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="apropos-icon" style={{ background: `${v.color}18`, border: `1px solid ${v.color}40` }}>
              <svg viewBox="0 0 24 24" fill="none" stroke={v.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: v.icon }} />
            </div>
            <h3 style={{ color: v.color }}>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>

      <div className={`apropos-bottom fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.35s' }}>
        <div className="apropos-stat">
          <span className="apropos-stat-num">+12</span>
          <span className="apropos-stat-label">Années d'expérience</span>
        </div>
        <div className="apropos-divider" />
        <div className="apropos-stat">
          <span className="apropos-stat-num">95360</span>
          <span className="apropos-stat-label">Montmagny, Île-de-France</span>
        </div>
        <div className="apropos-divider" />
        <div className="apropos-stat">
          <span className="apropos-stat-num">24/7</span>
          <span className="apropos-stat-label">Support disponible</span>
        </div>
      </div>
    </section>
  )
}
