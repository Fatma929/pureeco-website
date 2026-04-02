'use client'

import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the container enters the viewport, adds `is-visible` to all
 * child elements matching `selector` (default: '[data-reveal]').
 * Per-element stagger is driven by `data-reveal-delay` (ms).
 */
export function useReveal(selector = '[data-reveal]', threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const targets = Array.from(
      container.querySelectorAll<HTMLElement>(selector)
    )

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        targets.forEach((el, i) => {
          const delay = Number(el.dataset.revealDelay ?? i * 80)
          setTimeout(() => el.classList.add('is-visible'), delay)
        })
        observer.disconnect()
      },
      { threshold }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [selector, threshold])

  return ref
}
