'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useMagneticButton } from '@/hooks/useMagneticButton'

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const demoRef = useMagneticButton<HTMLAnchorElement>(0.3)

  // Parallax: video scrolls at 40% the rate of the page
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const onScroll = () => {
      video.style.transform = `translateY(${window.scrollY * 0.4}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative overflow-hidden scanlines" style={{ minHeight: '92vh' }}>
      {/* Parallax video */}
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
        style={{ filter: 'brightness(0.35) saturate(0.8)' }}
      >
        <source src="https://www.pexels.com/download/video/3571264/" type="video/mp4" />
      </video>

      {/* Dark-teal vignette 60% */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,30,40,0) 0%, rgba(0,20,30,0.6) 60%, rgba(0,10,15,0.85) 100%)',
        }}
      />

      {/* Fallback gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #0D1117 0%, #0A1628 50%, #0D1117 100%)' }}
      />

      {/* Content — staggered fade-in-up */}
      <div
        className="relative z-[2] flex flex-col items-center justify-center text-center px-6 md:px-12"
        style={{ minHeight: '92vh' }}
      >
        <span
          className="font-mono-label mb-6 px-3 py-1 rounded animate-fade-in-up"
          style={{
            color: '#00D4FF',
            border: '1px solid rgba(0,212,255,0.3)',
            background: 'rgba(0,212,255,0.06)',
          }}
        >
          Carbon Accounting Engine · v2.4.1
        </span>

        <h1
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 max-w-4xl animate-fade-in-up animate-fade-in-up-delay-1"
          style={{
            color: '#FFFFFF',
            fontFamily: 'Inter, system-ui, sans-serif',
            textShadow: '0 0 60px rgba(0,255,135,0.15)',
          }}
        >
          Autonomous Carbon Accounting{' '}
          <span style={{ color: '#00FF87' }}>for Heavy Industry.</span>
        </h1>

        <p
          className="text-lg md:text-xl mb-10 max-w-2xl animate-fade-in-up animate-fade-in-up-delay-2"
          style={{ color: 'rgba(226,232,240,0.75)', fontFamily: 'Geist Mono, monospace' }}
        >
          Automated CBAM Compliance and Scope 1–3 Monitoring.{' '}
          From ERP to Audit-Ready Ledger.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center animate-fade-in-up animate-fade-in-up-delay-3">
          {/* Magnetic + high-contrast border demo button */}
          <Link
            ref={demoRef}
            href="/contact"
            className="px-8 py-4 rounded-lg font-bold text-base btn-magnetic"
            style={{ background: '#00FF87', color: '#0A0A0A' }}
          >
            Book a Demo
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 rounded-lg font-semibold text-base transition-colors"
            style={{
              border: '1px solid rgba(226,232,240,0.25)',
              color: 'rgba(226,232,240,0.8)',
            }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
