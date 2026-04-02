'use client'

import { FlaskConical, Building2, Flame, Layers, Factory, Zap, Wheat, Truck } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

const prioritySectors = [
  {
    icon: FlaskConical,
    label: 'Fertilizer & Agrochemicals',
    tag: 'CBAM Exposed',
    detail: 'N₂O emissions · Nitric acid processes · Chapter 31 CBAM compliance',
  },
  {
    icon: Building2,
    label: 'Cement & Clinker',
    tag: 'CBAM Exposed',
    detail: 'Calcination CO₂ · Kiln fuel tracking · EU ETS reconciliation',
  },
  {
    icon: Flame,
    label: 'Petrochemicals & Refining',
    tag: 'CBAM Exposed',
    detail: 'Flaring & fugitive emissions · Scope 1 monitoring · CBAM Chapter 27/29',
  },
]

const additionalSectors = [
  { label: 'Steel & Iron',             icon: Layers  },
  { label: 'Aluminum Smelting',        icon: Zap     },
  { label: 'Industrial Manufacturing', icon: Factory },
  { label: 'Agricultural Processing',  icon: Wheat   },
  { label: 'Logistics & Freight',      icon: Truck   },
]

export function IndustriesSection() {
  const headerRef = useReveal('[data-reveal]', 0.2)
  const cardsRef  = useReveal('[data-reveal]', 0.1)

  return (
    <section className="py-24 px-6 md:px-12" style={{ background: '#0C2E19' }}>
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef as React.RefObject<HTMLDivElement>}>
          <span data-reveal className="section-label mb-3 inline-block reveal-blur" style={{ color: '#F5F0E8', borderColor: 'rgba(245,240,232,0.3)' }}>Built for Heavy Industry</span>
          <h2
            data-reveal data-reveal-delay="100"
            className="text-3xl md:text-4xl mt-3 mb-3 reveal-blur"
            style={{ color: '#F5F0E8', fontWeight: 500 }}
          >
            Cement. Fertilizers. Petrochemicals.
          </h2>
          <p
            data-reveal data-reveal-delay="200"
            className="mb-12 max-w-xl reveal-blur"
            style={{ color: 'rgba(245,240,232,0.7)' }}
          >
            Pre-configured for the sectors most exposed to CBAM and EU ETS.
            Industry-specific compliance from day one.
          </p>
        </div>

        <div ref={cardsRef as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {prioritySectors.map(({ icon: Icon, label, tag, detail }, i) => (
            <div
              key={label}
              data-reveal
              data-reveal-delay={String(i * 130)}
              className="p-6 rounded-xl transition-all duration-200 slide-in-left"
              style={{ background: '#F5F0E8', border: '1px solid rgba(12,46,25,0.15)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.border = '1px solid rgba(12,46,25,0.4)'
                el.style.background = '#edeae2'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.border = '1px solid rgba(12,46,25,0.15)'
                el.style.background = '#F5F0E8'
                el.style.transform = 'translateY(0)'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(12,46,25,0.08)', border: '1px solid rgba(12,46,25,0.2)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#0C2E19' }} aria-hidden="true" />
                </div>
                <span
                  className="font-mono-label px-2 py-0.5 rounded"
                  style={{ color: '#0C2E19', background: 'rgba(12,46,25,0.08)', border: '1px solid rgba(12,46,25,0.2)', fontSize: '0.6rem' }}
                >
                  {tag}
                </span>
              </div>
              <h3 className="text-base mb-2" style={{ color: '#0C2E19', fontWeight: 600 }}>{label}</h3>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(12,46,25,0.6)' }}>{detail}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {additionalSectors.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-200"
              style={{ background: '#F5F0E8', border: '1px solid rgba(12,46,25,0.12)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.border = '1px solid rgba(12,46,25,0.35)'
                el.style.background = '#edeae2'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.border = '1px solid rgba(12,46,25,0.12)'
                el.style.background = '#F5F0E8'
              }}
            >
              <Icon className="w-5 h-5" style={{ color: '#0C2E19' }} aria-hidden="true" />
              <span className="font-mono-label text-center" style={{ color: 'rgba(12,46,25,0.7)', fontSize: '0.65rem' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
