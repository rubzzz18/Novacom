import { useRef, useEffect, useState } from 'react'
import { stats } from '../data/stats'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function Stats() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.3 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const numberRefs = useRef([])

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true)
      stats.forEach((stat, index) => {
        if (stat.fixed || !numberRefs.current[index]) return
        const el = numberRefs.current[index]
        const target = stat.target
        const prefix = stat.prefix || ''
        const suffix = stat.suffix || ''
        const duration = 2000
        let startTime = null

        function step(timestamp) {
          if (!startTime) startTime = timestamp
          const progress = Math.min((timestamp - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          el.textContent = prefix + Math.floor(eased * target) + suffix
          if (progress < 1) {
            requestAnimationFrame(step)
          } else {
            el.textContent = prefix + target + suffix
          }
        }
        requestAnimationFrame(step)
      })
    }
  }, [isVisible, hasAnimated])

  return (
    <section className={`stats fade-in ${isVisible ? 'visible' : ''}`} ref={sectionRef} aria-label="Chiffres clés">
      {stats.map((stat, index) => (
        <div className="stat-item" key={index}>
          <div
            className="stat-number"
            ref={(el) => (numberRefs.current[index] = el)}
          >
            {stat.fixed || (stat.prefix || '') + '0' + (stat.suffix || '')}
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </section>
  )
}
