'use client'

import { useRef, useEffect } from 'react'

/**
 * Applies a magnetic pull toward the cursor on hover,
 * snapping back smoothly on mouse-leave.
 */
export function useMagneticButton<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect()
      const dx = (e.clientX - (rect.left + rect.width / 2)) * strength
      const dy = (e.clientY - (rect.top + rect.height / 2)) * strength
      el!.style.transform = `translate(${dx}px, ${dy}px)`
    }

    function onLeave() {
      el!.style.transform = 'translate(0, 0)'
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])

  return ref
}
