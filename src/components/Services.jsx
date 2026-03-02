import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { services } from '../data/services'
import ServiceCard from './ServiceCard'

export default function Services() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="services" className="services" aria-label="Nos services">
      <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
        <div className="section-subtitle">Nos Services</div>
        <h2 className="section-title">Excellence à Chaque Étape</h2>
        <p className="section-description">Des solutions IT complètes pour accompagner votre croissance et dépasser vos objectifs business.</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  )
}
