import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function CtaSection() {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section className={`cta-section fade-in ${isVisible ? 'visible' : ''}`} ref={ref} aria-label="Appel à l'action">
      <div className="cta-box">
        <h2>Prêt à Transformer Votre IT ?</h2>
        <p>Discutons de votre projet et découvrez comment nous pouvons vous aider à atteindre vos objectifs avec excellence.</p>
        <div className="cta-buttons">
          <a href="https://calendly.com/novacombusiness" target="_blank" rel="noopener noreferrer" className="btn-dark">Planifier mon RDV</a>
          <a href="mailto:novacombusiness@gmail.com" className="btn-outline">Nous Contacter</a>
        </div>
      </div>
    </section>
  )
}
