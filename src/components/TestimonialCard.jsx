import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function TestimonialCard({ testimonial }) {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <div className={`testimonial-card fade-in ${isVisible ? 'visible' : ''}`} ref={ref} role="article">
      <div className="testimonial-quote" aria-hidden="true">"</div>
      <div className="testimonial-stars" aria-label={`${testimonial.stars} étoiles sur 5`}>
        {'★'.repeat(testimonial.stars)}
      </div>
      <div className="testimonial-content">
        {testimonial.content}
      </div>
      <div className="testimonial-author">
        <div className="author-avatar" style={{ background: testimonial.gradient }}>
          {testimonial.initials}
        </div>
        <div className="author-info">
          <h4>{testimonial.name}</h4>
          <p>{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}
