import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function ServiceCard({ service }) {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <div className={`service-card fade-in ${isVisible ? 'visible' : ''}`} ref={ref} role="article" style={{ '--accent': service.accentColor }}>
      <div className="service-icon" style={{ background: service.iconBg }} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke={service.iconStroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: service.iconPath }} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="service-tags">
        {service.tags.map((tag) => (
          <span className="tag" key={tag} style={{ background: `${service.accentColor}18`, color: service.accentColor, borderColor: `${service.accentColor}40` }}>{tag}</span>
        ))}
      </div>
    </div>
  )
}
