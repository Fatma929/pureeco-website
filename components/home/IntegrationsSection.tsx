'use client'

import { ArrowRight } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'
import { DataFlowSVG } from './DataFlowSVG'

const connectors = [
  { abbr: 'SAP', name: 'SAP S/4HANA',          protocol: 'RFC / BAPI',   depth: 'Material Ledger · CO-PA · MM-IM',         active: true  },
  { abbr: 'ORA', name: 'Oracle Fusion',          protocol: 'REST / SOAP',  depth: 'Inventory Org · Cost Accounting · SCM',   active: true  },
  { abbr: 'MSD', name: 'Microsoft Dynamics 365', protocol: 'OData v4',     depth: 'Finance · Supply Chain · Sustainability', active: true  },
  { abbr: 'SF',  name: 'Salesforce',             protocol: 'Bulk API 2.0', depth: 'Net Zero Cloud · ESG Reporting',          active: false },
  { abbr: 'WD',  name: 'Workday',                protocol: 'SOAP / REST',  depth: 'Financial Mgmt · Procurement',            active: false },
]

const marqueeItems = [...connectors, ...connectors]

export function IntegrationsSection() {
  const sectionRef = useReveal('[data-reveal]', 0.1)

  return (
    <section className="py-20 px-6 md:px-12" style={{ background: '#F8F6F1' }}>
      <div ref={sectionRef as React.RefObject<HTMLDivElement>} className="max-w-5xl mx-auto">
        <span data-reveal className="section-label mb-3 inline-block reveal-blur" style={{ borderColor: 'rgba(23,67,33,0.3)', color: '#174321' }}>Connectivity Layer</span>
        <h2 data-reveal data-reveal-delay="100" className="text-3xl md:text-4xl mt-3 mb-4 reveal-blur" style={{ color: '#1a2e1a', fontWeight: 500 }}>
          Deep-Level ERP Integration.
        </h2>
        <p data-reveal data-reveal-delay="200" className="mb-2 max-w-2xl reveal-blur" style={{ color: '#4a6741' }}>
          Native connectors reach below the API surface — extracting material ledger entries, cost-object hierarchies, and procurement records directly from transaction tables. No middleware. No data loss.
        </p>
        <p data-reveal data-reveal-delay="280" className="font-mono-label mb-10 reveal-blur" style={{ color: 'rgba(23,67,33,0.5)' }}>
          Protocol · Connector · Extraction · Reconciliation
        </p>

        {/* Marquee */}
        <div data-reveal data-reveal-delay="340" className="relative overflow-hidden mb-10 reveal-blur" style={{ maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}>
          <div className="flex marquee-track" style={{ width: 'max-content' }}>
            {marqueeItems.map(({ abbr, name, active }, i) => (
              <div
                key={`${abbr}-${i}`}
                className="flex flex-col items-center justify-center mx-3 px-5 py-3 rounded-xl transition-all duration-300 flex-shrink-0"
                style={{ background: '#24292E', border: '1px solid rgba(255,255,255,0.08)', filter: 'grayscale(1) opacity(0.5)', minWidth: '100px' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.filter = 'grayscale(0) opacity(1)'
                  el.style.border = '1px solid rgba(74,222,128,0.4)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.filter = 'grayscale(1) opacity(0.5)'
                  el.style.border = '1px solid rgba(255,255,255,0.08)'
                }}
              >
                <span className="text-xl font-extrabold" style={{ color: active ? '#4ADE80' : 'rgba(255,255,255,0.5)', fontFamily: 'Geist Mono, monospace' }}>{abbr}</span>
                <span className="font-mono-label mt-1" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem' }}>{name.split(' ')[0]}</span>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal data-reveal-delay="420" className="reveal-blur">
          <DataFlowSVG />
        </div>

        {/* Connector cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {connectors.map(({ abbr, name, protocol, depth, active }, i) => (
            <div
              key={abbr}
              data-reveal
              data-reveal-delay={String(500 + i * 80)}
              className="p-5 rounded-xl transition-all duration-200 reveal-blur"
              style={{ background: '#24292E', border: active ? '1px solid rgba(74,222,128,0.3)' : '1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.border = '1px solid rgba(74,222,128,0.5)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.border = active ? '1px solid rgba(74,222,128,0.3)' : '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-2xl font-extrabold px-2 py-0.5 rounded ${active ? 'glow-pulse' : ''}`} style={{ color: active ? '#4ADE80' : 'rgba(255,255,255,0.4)', background: active ? 'rgba(74,222,128,0.08)' : 'transparent', border: active ? '1px solid rgba(74,222,128,0.2)' : 'none', fontFamily: 'Geist Mono, monospace' }}>{abbr}</span>
                <span className="font-mono-label px-2 py-0.5 rounded" style={{ color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>{protocol}</span>
              </div>
              <p className="text-sm font-medium mb-2" style={{ color: '#FFFFFF' }}>{name}</p>
              <div className="flex items-start gap-1.5">
                <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: '#4ADE80' }} />
                <p className="font-mono-label" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem' }}>{depth}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
