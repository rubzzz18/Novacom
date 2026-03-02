import { useEffect } from 'react'

export function useScrollEffect(navRef) {
  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return
      const scrollY = window.pageYOffset
      if (scrollY > 100) {
        navRef.current.style.padding = '0.6rem 0'
        navRef.current.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)'
      } else {
        navRef.current.style.padding = '1rem 0'
        navRef.current.style.boxShadow = 'none'
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navRef])
}
