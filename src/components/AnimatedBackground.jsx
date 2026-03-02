import { useRef, useEffect } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []
    const isMobile = window.innerWidth < 768
    const PARTICLE_COUNT = isMobile ? 50 : 120

    // Color palette: green, blue, purple, cyan
    const COLORS = [
      { r: 126, g: 217, b: 87 },   // green primary
      { r: 126, g: 217, b: 87 },   // green (double weight)
      { r: 59,  g: 130, b: 246 },  // blue
      { r: 34,  g: 211, b: 238 },  // cyan
      { r: 168, g: 85,  b: 247 },  // purple
    ]

    function resize() {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
    }

    function createParticle() {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 1.2,
        speedY: (Math.random() - 0.5) * 0.9,
        opacity: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulsePhase: Math.random() * Math.PI * 2,
        r: color.r, g: color.g, b: color.b,
      }
    }

    function init() {
      resize()
      particles = Array.from({ length: PARTICLE_COUNT }, createParticle)
    }

    function drawConnections(time) {
      if (isMobile) return
      const maxDist = 180
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            const alpha = 0.25 * (1 - dist / maxDist)
            const ri = particles[i].r, gi = particles[i].g, bi = particles[i].b
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${ri}, ${gi}, ${bi}, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    let lastTime = 0
    function animate(time = 0) {
      const delta = time - lastTime
      lastTime = time
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Pulse opacity
        const pulse = Math.sin(time * p.pulseSpeed + p.pulsePhase) * 0.2
        const currentOpacity = Math.max(0.05, p.opacity + pulse)

        // Glow effect for larger particles
        if (p.size > 2.5) {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4)
          gradient.addColorStop(0, `rgba(${p.r}, ${p.g}, ${p.b}, ${currentOpacity})`)
          gradient.addColorStop(1, `rgba(${p.r}, ${p.g}, ${p.b}, 0)`)
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${currentOpacity})`
        ctx.fill()
      })

      drawConnections(time)
      animationId = requestAnimationFrame(animate)
    }

    init()
    animate()
    window.addEventListener('resize', () => { resize(); particles = Array.from({ length: PARTICLE_COUNT }, createParticle) })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <div className="animated-gradient" />
      <canvas ref={canvasRef} className="particles-canvas" />
    </>
  )
}
