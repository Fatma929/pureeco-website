import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const steps = [
  { number: '01', tag: 'Ingestion',     title: 'ERP Connector Deployment',        description: 'RFC/BAPI or OData connector installed against your SAP, Oracle, or Dynamics instance. Configured in under 30 minutes.' },
  { number: '02', tag: 'Configuration', title: 'Emission Factor & Rule Mapping',   description: 'Sector-specific emission factors and CBAM commodity codes bound to your facility hierarchy. Verification protocol selected per jurisdiction.' },
  { number: '03', tag: 'Output',        title: 'Ledger Compilation & Declaration', description: 'Immutable carbon ledger compiled per reporting period. CBAM declarations and Scope 1–3 disclosures generated without manual data entry.' },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 px-6 md:px-12 blueprint-grid" style={{ background: '#0C2E19' }}>
      <div className="max-w-5xl mx-auto">
        <span className="section-label mb-3 inline-block">How We Work</span>
        <h2 className="text-3xl md:text-4xl mt-3 mb-4" style={{ color: '#FFFFFF', fontWeight: 500, letterSpacing: '0.02em' }}>
          From ERP Transaction to Audit-Ready Ledger.
        </h2>
        <p className="mb-12 max-w-xl" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Three deterministic stages. No spreadsheets. No manual reconciliation.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {steps.map(({ number, tag, title, description }, i) => (
            <div key={number} className="flex-1 relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-full w-6 h-px z-10" style={{ background: 'rgba(74,222,128,0.25)' }} />
              )}
              <div
                className="p-6 rounded-xl h-full"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.35)' }}
                  >
                    <span className="font-extrabold" style={{ color: '#4ADE80', fontFamily: 'Geist Mono, monospace', fontSize: '0.85rem' }}>{number}</span>
                  </div>
                  <span className="section-label">{tag}</span>
                </div>
                <h3 className="text-base mb-2" style={{ color: '#FFFFFF', fontWeight: 500 }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link href="/contact" className="btn-lime">
          How We Work
          <ArrowRight className="w-4 h-4" style={{ color: '#1A1A1A' }} />
        </Link>
      </div>
    </section>
  )
}
