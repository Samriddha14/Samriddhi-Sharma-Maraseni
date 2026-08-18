import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '../lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  delayMs?: number
}

/**
 * Lightweight scroll-reveal. Items already in the viewport on load are shown
 * immediately (no hidden-first-paint flash); everything else fades up when it
 * scrolls into view. Uses the native IntersectionObserver and respects
 * prefers-reduced-motion via the CSS safety net in index.css (transitions are
 * shortened to ~0ms there, so content simply appears with no animation).
 */
export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    // Show immediately if already visible (e.g. the hero above the fold).
    const rect = el.getBoundingClientRect()
    const viewportHeight = window.innerHeight || 1
    if (rect.top < viewportHeight && rect.bottom > 0) {
      setInView(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.01 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-500 ease-out opacity-0 translate-y-2',
        inView && 'opacity-100 translate-y-0',
        className,
      )}
      style={inView ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  )
}
