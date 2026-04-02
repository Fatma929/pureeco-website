'use client'

import { useReveal } from '@/hooks/useReveal'
import { TrendingDown, Droplets, FileCheck2, Activity } from 'lucide-react'

const metrics = [
  { icon: Activity,    label: 'Scope 1 Emissions',  value: '12,480', unit: 'tCO₂e', delta: '-8.3%',  positive: true, bar: 62  },
  { icon: TrendingDown,label: 'Scope 2 Emissions',  value: '4,210',  unit: 'tCO₂e', delta: '-14.1%', positive: true, bar: 38  },
  { icon: Droplets,    label: 'Water Consumption',  value: '98,340', unit: 'm³',    delta: '-3.7%',  positive: true, bar: 55  },
  { icon: FileCheck2,  label: 'CBAM Declarations',  value: '4 / 4',  unit: 'filed', delta: '100%',   positive: true, bar: 100 },
]

const logLines = [
  { time: '08:14:02', msg: 'SAP RFC connector — material ledger sync complete', ok: true },
  { time: '08:14:05', msg: 'Emission factor mapping applied — 1,204 records',   ok: true },
  { time: '08:14:09', msg: 'CBAM Q1 declaration compiled — pending signature',  ok: true },
  { time: '08:14:11', msg: 'Water threshold check — facility NODE-07 nominal',  ok: true },
  { time: '08:14:14', msg: 'Scope 3 boundary expansion — 38 suppliers ingested',ok: true },
]

export function CarbonDashboard() {
  const ref = useReveal('[data-reveal]', 0.1)

  return (
    <section className="py-20 px-6 md:px-12" style={{ background: '#0d1f3c' }}>
      <div ref={ref as React.RefObject<HTMLDivElement>} className="max-w-5xl mx-auto">
        <span data-reveal className="section-label mb-3 inline-block reveal-blur">Live System Preview</span>
        <h2 data-reveal data-reveal-delay="100" className="text-3xl md:text-4xl mt-3 mb-12 reveal-blur" style={{ color: '#FFFFFF', fontWeight: 500 }}>
          Carbon Dashboard.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map(({ icon: Icon, label, value, unit, delta, positive, bar }, i) => (
            <div key={label} data-reveal data-reveal-delay={String(i * 100)} className="glass-card p-5 reveal-blur">
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-md flex items-center justify-center glow-pulse" style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <Icon className="w-4 h-4" style={{ color: '#4ADE80' }} />
                </div>
                <span className="font-mono-label" style={{ color: positive ? '#4ADE80' : '#FF4D4D', fontSize: '0.65rem' }}>{delta}</span>
              </div>
              <p className="font-mono-label mb-1" style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.65rem' }}>{label}</p>
              <p className="text-2xl font-extrabold" style={{ color: '#FFFFFF', fontFamily: 'Geist Mono, monospace' }}>
                {value}<span className="text-xs font-normal ml-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{unit}</span>
              </p>
              <div className="mt-3 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <div className="h-full rounded-full" style={{ width: `${bar}%`, background: 'linear-gradient(90deg, #003D33, #4ADE80)', transition: 'width 1.4s cubic-bezier(0.22,1,0.36,1)' }} />
              </div>
            </div>
          ))}
        </div>

        <div data-reveal data-reveal-delay="500" className="ide-surface p-5 reveal-blur">
          <div className="flex items-center gap-2 mb-4 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#888' }} />
            <div className="w-2.5 h-2.5 rounded-full glow-pulse" style={{ background: '#4ADE80' }} />
            <span className="font-mono-label ml-2" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.65rem' }}>pureeco-ledger · activity-log · live</span>
          </div>
          {logLines.map(({ time, msg, ok }) => (
            <div key={time} className="flex gap-3 py-0.5">
              <span className="ide-line-num flex-shrink-0">{time}</span>
              <span style={{ color: ok ? '#4ADE80' : '#FF4D4D' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>{msg}</span>
            </div>
          ))}
          <div className="flex gap-3 py-0.5 mt-1">
            <span className="ide-line-num flex-shrink-0">08:14:15</span>
            <span style={{ color: '#4ADE80' }}>›</span>
            <span style={{ color: '#FFFFFF' }}>_<span className="loader-cursor">|</span></span>
          </div>
        </div>
      </div>
    </section>
  )
}
