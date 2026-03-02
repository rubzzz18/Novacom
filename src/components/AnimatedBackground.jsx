import { useRef, useEffect } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []
    let shootingStars = []
    let pulseRings = []

    const isMobile = window.innerWidth < 768
    const PARTICLE_COUNT   = isMobile ? 80  : 220
    const SHOOTING_COUNT   = isMobile ? 2   : 6
    const MAX_DIST         = isMobile ? 140 : 200
    const RING_INTERVAL    = 1800 // ms entre chaque anneau

    const COLORS = [
      { r: 126, g: 217, b: 87  },  // vert (x3)
      { r: 126, g: 217, b: 87  },
      { r: 126, g: 217, b: 87  },
      { r: 59,  g: 130, b: 246 },  // bleu (x2)
      { r: 59,  g: 130, b: 246 },
      { r: 34,  g: 211, b: 238 },  // cyan
      { r: 168, g: 85,  b: 247 },  // violet
      { r: 251, g: 191, b: 36  },  // ambre
      { r: 236, g: 72,  b: 153 },  // rose (rare)
    ]

    function resize() {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width  = parent.offsetWidth
      canvas.height = parent.offsetHeight
    }

    function randomColor() {
      return COLORS[Math.floor(Math.random() * COLORS.length)]
    }

    /* ── Particules normales ── */
    function createParticle() {
      const c = randomColor()
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size:       Math.random() * 3.5 + 0.5,
        speedX:     (Math.random() - 0.5) * 1.4,
        speedY:     (Math.random() - 0.5) * 1.0,
        opacity:    Math.random() * 0.65 + 0.2,
        pulseSpeed: Math.random() * 0.025 + 0.008,
        pulsePhase: Math.random() * Math.PI * 2,
        r: c.r, g: c.g, b: c.b,
      }
    }

    /* ── Étoiles filantes ── */
    function createShootingStar() {
      const c = COLORS[Math.floor(Math.random() * 3)] // surtout vert/bleu
      const angle = Math.random() * Math.PI * 0.5 - Math.PI * 0.25 // diagonal
      const speed = 8 + Math.random() * 8
      return {
        x:      Math.random() * canvas.width,
        y:      Math.random() * canvas.height * 0.5,
        vx:     Math.cos(angle) * speed,
        vy:     Math.sin(angle) * speed + speed * 0.3,
        length: 80 + Math.random() * 120,
        alpha:  0,
        fadeIn: true,
        r: c.r, g: c.g, b: c.b,
      }
    }

    /* ── Anneaux de pulsion ── */
    function createRing(x, y, color) {
      return {
        x, y,
        radius:    5,
        maxRadius: 120 + Math.random() * 80,
        alpha:     0.6,
        speed:     1.8 + Math.random() * 1.2,
        r: color.r, g: color.g, b: color.b,
      }
    }

    function init() {
      resize()
      particles     = Array.from({ length: PARTICLE_COUNT }, createParticle)
      shootingStars = Array.from({ length: SHOOTING_COUNT }, createShootingStar)
    }

    /* ── Connexions entre particules ── */
    function drawConnections() {
      if (isMobile) return
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x
          const dy   = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const alpha = 0.35 * (1 - dist / MAX_DIST)
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${particles[i].r},${particles[i].g},${particles[i].b},${alpha})`
            ctx.lineWidth   = 0.9
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    let lastRingTime = 0
    function animate(time = 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      /* ── Étoiles filantes ── */
      shootingStars.forEach((s, idx) => {
        if (s.fadeIn) {
          s.alpha += 0.04
          if (s.alpha >= 0.9) s.fadeIn = false
        } else {
          s.alpha -= 0.025
        }
        if (s.alpha <= 0) {
          shootingStars[idx] = createShootingStar()
          return
        }

        s.x += s.vx
        s.y += s.vy

        // Traîne lumineuse
        const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * (s.length / 10), s.y - s.vy * (s.length / 10))
        grad.addColorStop(0, `rgba(${s.r},${s.g},${s.b},${s.alpha})`)
        grad.addColorStop(1, `rgba(${s.r},${s.g},${s.b},0)`)
        ctx.beginPath()
        ctx.strokeStyle = grad
        ctx.lineWidth   = 2.5
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x - s.vx * (s.length / 10), s.y - s.vy * (s.length / 10))
        ctx.stroke()

        // Reset si hors écran
        if (s.x > canvas.width + 200 || s.y > canvas.height + 200) {
          shootingStars[idx] = createShootingStar()
        }
      })

      /* ── Anneaux de pulsion ── */
      if (time - lastRingTime > RING_INTERVAL) {
        lastRingTime = time
        const p = particles[Math.floor(Math.random() * particles.length)]
        pulseRings.push(createRing(p.x, p.y, { r: p.r, g: p.g, b: p.b }))
      }

      pulseRings = pulseRings.filter(ring => ring.alpha > 0.01)
      pulseRings.forEach(ring => {
        ring.radius += ring.speed
        ring.alpha  *= 0.962
        ctx.beginPath()
        ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(${ring.r},${ring.g},${ring.b},${ring.alpha})`
        ctx.lineWidth   = 1.5
        ctx.stroke()
      })

      /* ── Particules ── */
      particles.forEach(p => {
        p.x += p.speedX
        p.y += p.speedY
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width)  p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const pulse          = Math.sin(time * p.pulseSpeed + p.pulsePhase) * 0.25
        const currentOpacity = Math.max(0.05, p.opacity + pulse)

        // Halo pour toutes les particules > 2px
        if (p.size > 2) {
          const glowR  = p.size * 5
          const glow   = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR)
          glow.addColorStop(0, `rgba(${p.r},${p.g},${p.b},${currentOpacity * 0.7})`)
          glow.addColorStop(1, `rgba(${p.r},${p.g},${p.b},0)`)
          ctx.beginPath()
          ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2)
          ctx.fillStyle = glow
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${currentOpacity})`
        ctx.fill()
      })

      drawConnections()
      animationId = requestAnimationFrame(animate)
    }

    init()
    animate()

    const onResize = () => {
      resize()
      particles = Array.from({ length: PARTICLE_COUNT }, createParticle)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <>
      <div className="animated-gradient" />
      <canvas ref={canvasRef} className="particles-canvas" />
    </>
  )
}
