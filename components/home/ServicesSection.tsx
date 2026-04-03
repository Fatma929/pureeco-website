'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, BarChart3, Droplets, FileCheck2, ShieldCheck } from 'lucide-react'

/* ── Shared mockup background ── */
const MK = '#051120'
const MK_BORDER = '1px solid rgba(0,163,255,0.2)'

const capabilities = [
  {
    num: '①',
    icon: BarChart3,
    title: 'Carbon Accounting',
    description: 'Measure and analyse your corporate carbon footprint with precision.',
    mockup: (
      <div className="mt-5 rounded-xl overflow-hidden" style={{ background: MK, border: MK_BORDER, padding: '16px' }}>
        <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>Emission per emission category</p>
        <div className="space-y-2.5">
          {[
            { label: 'Total emissions', value: '458,847 tCO₂e', bar: 100, color: '#4ADE80' },
            { label: 'Scope 1',         value: '',               bar: 75,  color: '#4ADE80' },
            { label: 'Scope 2',         value: '',               bar: 45,  color: '#00A3FF' },
            { label: 'Scope 3',         value: '',               bar: 20,  color: '#00A3FF' },
          ].map(({ label, value, bar, color }) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-xs w-24 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.45)' }}>{label}</span>
              <div className="flex-1 h-2.5 rounded-sm overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div className="h-full rounded-sm" style={{ width: `${bar}%`, background: color }} />
              </div>
              {value && <span className="text-xs font-semibold" style={{ color: '#4ADE80' }}>{value}</span>}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    num: '②',
    icon: FileCheck2,
    title: 'Carbon Reporting',
    description: 'Disclose your sustainability progress with integrated carbon footprint reports.',
    mockup: (
      <div className="mt-5 rounded-xl overflow-hidden" style={{ background: MK, border: MK_BORDER, padding: '16px' }}>
        <p className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>Corporate carbon footprint report</p>
        <div className="flex items-center gap-2 mb-3 px-2 py-1 rounded" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Select years</span>
          <span className="ml-auto text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>▾</span>
        </div>
        <div className="flex items-end gap-1 h-14">
          {[40, 55, 70, 60, 80, 65, 75].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i % 2 === 0 ? '#4ADE80' : '#00A3FF' }} />
          ))}
        </div>
        <div className="mt-2 flex justify-end">
          <span className="text-xs px-2 py-1 rounded" style={{ background: '#4ADE80', color: '#051120', fontWeight: 600 }}>Download report</span>
        </div>
      </div>
    ),
  },
  {
    num: '③',
    icon: Droplets,
    title: 'Water Risk Monitoring',
    description: 'Detect overuse and compliance risks before regulators do. Protect your operating licence.',
    mockup: (
      <div className="mt-5 rounded-xl overflow-hidden" style={{ background: MK, border: MK_BORDER, padding: '16px' }}>
        <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>Water consumption analytics</p>
        <div className="flex gap-1 mb-3">
          {['Analytics', 'Targets', 'Actions'].map((t, i) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded" style={{ background: i === 0 ? '#00A3FF' : 'rgba(255,255,255,0.06)', color: i === 0 ? '#051120' : 'rgba(255,255,255,0.45)', fontWeight: i === 0 ? 600 : 400 }}>{t}</span>
          ))}
        </div>
        <div className="flex items-end gap-1 h-12">
          {[30, 50, 40, 65, 45, 70, 55].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i % 2 === 0 ? '#00A3FF' : 'rgba(0,163,255,0.4)' }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    num: '④',
    icon: ShieldCheck,
    title: 'CBAM Automation',
    description: 'Generate EU-compliant CBAM reports directly from ERP data in under 2 hours.',
    mockup: (
      <div className="mt-5 rounded-xl overflow-hidden" style={{ background: MK, border: MK_BORDER, padding: '16px' }}>
        <p className="text-xs mb-3" style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>CBAM declaration status</p>
        <div className="space-y-2">
          {[
            { q: 'Q1 2025', status: 'Filed',       pct: 100 },
            { q: 'Q2 2025', status: 'Filed',       pct: 100 },
            { q: 'Q3 2025', status: 'In progress', pct: 60  },
            { q: 'Q4 2025', status: 'Pending',     pct: 0   },
          ].map(({ q, status, pct }) => (
            <div key={q} className="flex items-center gap-2">
              <span className="text-xs w-14 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.45)' }}>{q}</span>
              <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div className="h-full rounded-full" style={{ width: `${pct}%`, background: pct === 100 ? '#4ADE80' : '#00A3FF' }} />
              </div>
              <span className="text-xs w-20 text-right" style={{ color: pct === 100 ? '#4ADE80' : pct > 0 ? '#00A3FF' : 'rgba(255,255,255,0.25)' }}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
]

export function ServicesSection() {
  const [visible, setVisible]   = useState(false)
  const [toast, setToast]       = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const sectionRef              = useRef<HTMLElement>(null)
  const toastTimer              = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function handleCardClick(index: number) {
    // Toggle: click same card again to deselect
    setActiveCard(prev => prev === index ? null : index)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    setToast(true)
    toastTimer.current = setTimeout(() => setToast(false), 3000)
  }

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 relative overflow-hidden" style={{ background: 'transparent' }}>
      {/* Background image — full cover, no color override */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url(/pexels-saya-azeem-246343485-31415380.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.3) saturate(0.6)',
        }}
      />
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <span
            className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-4"
            style={{ background: 'rgba(74,222,128,0.12)', color: '#4ADE80', border: '1px solid rgba(74,222,128,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            What PureEco Does
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3" style={{ color: '#FFFFFF', letterSpacing: '-0.01em' }}>
            One platform for carbon, water, and CBAM compliance.
          </h2>
          <p className="text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Built for heavy industry. Connected to your ERP. Audit-ready from day one.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map(({ num, title, description, mockup }, i) => (
            <div
              key={title}
              onClick={() => handleCardClick(i)}
              className="rounded-2xl p-6 flex flex-col cursor-pointer"
              style={{
                background: activeCard === i ? '#0C2E19' : '#2E3439',
                border: activeCard === i ? '1px solid rgba(74,222,128,0.6)' : '1px solid rgba(255,255,255,0.1)',
                boxShadow: activeCard === i ? '0 0 24px rgba(74,222,128,0.2)' : '0 2px 8px rgba(0,0,0,0.2)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s, background 0.25s ease, box-shadow 0.25s ease`,
              }}
              onMouseEnter={(e) => {
                if (activeCard === i) return
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 12px 32px rgba(74,222,128,0.2)'
                el.style.background = '#0C2E19'
                el.style.borderColor = 'rgba(74,222,128,0.5)'
              }}
              onMouseLeave={(e) => {
                if (activeCard === i) return
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)'
                el.style.background = '#2E3439'
                el.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg" style={{ color: '#4ADE80' }}>{num}</span>
                <h3 className="text-base font-semibold" style={{ color: '#FFFFFF' }}>{title}</h3>
              </div>

              <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {description}
              </p>

              <Link
                href="/contact"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium self-start transition-all"
                style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.25)', color: '#FFFFFF' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.background = '#4ADE80'
                  el.style.borderColor = '#4ADE80'
                  el.style.color = '#051120'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.background = 'transparent'
                  el.style.borderColor = 'rgba(255,255,255,0.25)'
                  el.style.color = '#FFFFFF'
                }}
              >
                Learn more
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {mockup}
            </div>
          ))}
        </div>
      </div>

      {/* Toast */}
      <div
        className="fixed bottom-6 right-6 z-[9999] max-w-xs px-5 py-4 rounded-xl"
        style={{
          background: '#051120',
          border: '1px solid rgba(0,163,255,0.4)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          opacity: toast ? 1 : 0,
          transform: toast ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          pointerEvents: toast ? 'auto' : 'none',
        }}
        role="status"
        aria-live="polite"
      >
        <p className="text-sm font-medium mb-0.5" style={{ color: '#FFFFFF' }}>
          Module specifications available upon request.
        </p>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Contact sales for API access.
        </p>
        <div className="mt-3 h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
          <div className="h-full rounded-full" style={{ background: '#4ADE80', width: toast ? '0%' : '100%', transition: toast ? 'width 3s linear' : 'none' }} />
        </div>
      </div>
    </section>
  )
}
