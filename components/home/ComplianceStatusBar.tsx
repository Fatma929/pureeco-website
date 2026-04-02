'use client'

import { useReveal } from '@/hooks/useReveal'
import { Lock, Cpu, FileCheck2 } from 'lucide-react'

const bars = [
  { label: 'CBAM Readiness',     target: 94, color: '#4ADE80' },
  { label: 'Scope 1–3 Coverage', target: 87, color: '#4ADE80' },
  { label: 'Water Framework',    target: 78, color: '#6ee7b7' },
  { label: 'CSRD Disclosure',    target: 61, color: '#6ee7b7' },
]

const trustPoints = [
  {
    icon: Cpu,
    title: 'ERP-Native Integration',
    detail: 'Connects directly to SAP, Oracle, and Dynamics — no middleware, no manual exports.',
  },
  {
    icon: Lock,
    title: 'Secure, Encrypted Pipelines',
    detail: 'AES-256 encryption, EU data sovereignty, SOC 2 Type II certified infrastructure.',
  },
  {
    icon: FileCheck2,
    title: 'Audit-Ready Outputs',
    detail: 'Every report aligned with GHG Protocol, ISO 14064, and EU CBAM registry requirements.',
  },
]

export function ComplianceStatusBar() {
  const ref = useReveal('[data-reveal]', 0.15)

  return (
    <section className="py-24 px-6 md:px-12" style={{ background: '#F8F6F1' }}>
      <div ref={ref as React.RefObject<HTMLDivElement>} className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Compliance bars */}
          <div>
            <span data-reveal className="section-label mb-3 inline-block reveal-blur">Compliance Coverage</span>
            <h2
              data-reveal data-reveal-delay="100"
              className="text-2xl md:text-3xl mt-3 mb-8 reveal-blur"
              style={{ color: '#1a2e1a', fontWeight: 500 }}
            >
              Know exactly where you stand — before regulators do.
            </h2>
            <div className="space-y-5">
              {bars.map(({ label, target, color }, i) => (
                <div key={label} data-reveal data-reveal-delay={String(200 + i * 120)} className="reveal-blur">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm" style={{ color: '#4a6741' }}>{label}</span>
                    <span className="font-mono-label" style={{ color, fontSize: '0.7rem' }}>{target}%</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <div
                      className="h-full rounded-full compliance-bar-fill"
                      style={{
                        '--bar-target': `${target}%`,
                        background: `linear-gradient(90deg, #003D33, ${color})`,
                        animationDelay: `${0.4 + i * 0.15}s`,
                      } as React.CSSProperties}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust points */}
          <div className="space-y-6">
            <span data-reveal className="section-label mb-3 inline-block reveal-blur">Why Teams Trust PureEco</span>
            {trustPoints.map(({ icon: Icon, title, detail }, i) => (
              <div
                key={title}
                data-reveal
                data-reveal-delay={String(i * 120)}
                className="flex gap-4 reveal-blur"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                  style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#4ADE80' }} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: '#1a2e1a' }}>{title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#4a6741' }}>{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
