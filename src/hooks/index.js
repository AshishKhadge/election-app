import { useState, useEffect, useRef, useCallback } from 'react'

// ─── useSwipe — touch gesture detection ───────────────────────
export function useSwipe(onSwipeLeft, onSwipeRight, threshold = 50) {
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }, [])

  const handleTouchEnd = useCallback(
    (e) => {
      if (touchStartX.current === null) return
      const deltaX = touchStartX.current - e.changedTouches[0].clientX
      const deltaY = Math.abs(touchStartY.current - e.changedTouches[0].clientY)

      // Ignore if more vertical than horizontal
      if (deltaY > Math.abs(deltaX)) return

      if (deltaX > threshold) onSwipeLeft?.()
      else if (deltaX < -threshold) onSwipeRight?.()

      touchStartX.current = null
      touchStartY.current = null
    },
    [onSwipeLeft, onSwipeRight, threshold]
  )

  return { handleTouchStart, handleTouchEnd }
}

// ─── useScrollAnimation — IntersectionObserver ────────────────
export function useScrollAnimation(options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, ...options }
    )

    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  return [ref, isVisible]
}

// ─── useLoading — fake loading state ─────────────────────────
export function useLoading(duration = 1400) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), duration)
    return () => clearTimeout(t)
  }, [duration])

  return loading
}

// ─── useMediaQuery ────────────────────────────────────────────
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mq = window.matchMedia(query)
    const handler = (e) => setMatches(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [query])

  return matches
}
