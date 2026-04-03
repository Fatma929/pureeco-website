'use client'

import Link from 'next/link'
import { ArrowRight, Factory, Award, Cpu } from 'lucide-react'
import { useMagneticButton } from '@/hooks/useMagneticButton'

const trustBadges = [
  { icon: Factory, label: '120+ Industrial Deployments' },
  { icon: Award,   label: 'Zero Compliance Penalties on Record' },
  { icon: Cpu,     label: 'SAP · Oracle · Dynamics Native' },
]

export function HeroSection() {
  const demoRef = useMagneticButton<HTMLAnchorElement>(0.3)

  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '92vh' }}
    >
      {/* Video background — no overlays, no filters */}
      <video
        src="/cement.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div
        className="relative flex flex-col items-center justify-center text-center px-6 md:px-12"
        style={{ minHeight: '92vh' }}
      >
        {/* Urgency badge — white text */}
        <span
          className="font-mono-label mb-5 px-4 py-1.5 rounded-full animate-fade-in-up"
          style={{
            color: '#FFFFFF',
            border: '1px solid rgba(255,255,255,0.25)',
            background: 'rgba(0,61,51,0.5)',
            fontSize: '0.65rem',
          }}
        >
          ⚠ CBAM Financial Obligations Begin 2026
        </span>

        <h1
          className="text-3xl md:text-5xl lg:text-6xl leading-tight mb-5 max-w-4xl animate-fade-in-up animate-fade-in-up-delay-1"
          style={{
            color: '#FFFFFF',
            fontWeight: 600,
            letterSpacing: '0.01em',
            fontFamily: 'Inter, system-ui, sans-serif',
            textShadow: '0 2px 40px rgba(0,0,0,0.9)',
          }}
        >
          The Software Solution to Achieve Your{' '}
          <span style={{ color: '#FFFFFF', opacity: 0.9 }}>Sustainability Goals.</span>
        </h1>

        <p
          className="text-base md:text-lg mb-8 max-w-2xl animate-fade-in-up animate-fade-in-up-delay-2"
          style={{ color: '#FFFFFF', lineHeight: 1.75, fontWeight: 400, opacity: 0.85 }}
        >
          Stop reporting. Start reducing. PureEco turns your emissions data into a clear path to net zero.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-center animate-fade-in-up animate-fade-in-up-delay-3">
          <Link
            ref={demoRef}
            href="/contact"
            className="btn-lime"
            style={{ fontSize: '0.875rem', padding: '0.65rem 1.5rem' }}
          >
            Request a Demo
            <ArrowRight className="w-3.5 h-3.5" style={{ color: '#1A1A1A' }} />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full font-medium transition-all"
            style={{
              fontSize: '0.875rem',
              padding: '0.65rem 1.5rem',
              border: '1px solid rgba(255,255,255,0.35)',
              color: '#FFFFFF',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'rgba(74,222,128,0.55)'
              el.style.background = 'rgba(74,222,128,0.07)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'rgba(255,255,255,0.35)'
              el.style.background = 'transparent'
            }}
          >
            Explore the Platform
            <ArrowRight className="w-3.5 h-3.5" style={{ color: '#4ADE80' }} />
          </Link>
        </div>

        {/* Trust badges — white with icons */}
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animate-fade-in-up-delay-4"
        >
          {trustBadges.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.05)',
              }}
            >
              <Icon className="w-3 h-3 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.6)' }} />
              <span
                className="font-mono-label"
                style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.6rem' }}
              >
                {label}
              </span>
              {i < trustBadges.length - 1 && (
                <span className="hidden sm:inline ml-2" style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
