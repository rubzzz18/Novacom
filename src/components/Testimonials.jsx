import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { testimonials } from '../data/testimonials'
import TestimonialCard from './TestimonialCard'

export default function Testimonials() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section id="temoignages" className="testimonials" aria-label="Témoignages clients">
      <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
        <div className="section-subtitle">Témoignages</div>
        <h2 className="section-title">Ils Nous Font Confiance</h2>
        <p className="section-description">Découvrez ce que nos clients disent de leur expérience avec Novacom Business.</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  )
}
