import Link from 'next/link'
import { FileBarChart2, Droplets, Globe, ArrowRight } from 'lucide-react'

const reports = [
  { caption: 'CBAM Quarterly Declaration',    icon: Globe,         rows: ['Embedded Carbon (tCO₂)', 'Carbon Price Paid', 'Declarant Reference'] },
  { caption: 'Carbon Footprint Summary',      icon: FileBarChart2, rows: ['Scope 1 Emissions', 'Scope 2 Emissions', 'Reduction vs. Baseline'] },
  { caption: 'Water Usage Compliance Report', icon: Droplets,      rows: ['Total Consumption (m³)', 'Recycled Water %', 'Regulatory Threshold'] },
]

export function ReportsPreviewSection() {
  return (
    <section className="py-20 px-6 md:px-12" style={{ background: '#24292E' }}>
      <div className="max-w-5xl mx-auto">
        <span className="section-label mb-3 inline-block">Output</span>
        <h2 className="text-3xl md:text-4xl mt-3 mb-4" style={{ color: '#FFFFFF', fontWeight: 500, letterSpacing: '0.02em' }}>
          Reports That Speak to Regulators
        </h2>
        <p className="mb-12 max-w-xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Auto-generated, audit-ready sustainability reports tailored to EU compliance standards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reports.map(({ caption, icon: Icon, rows }) => (
            <div key={caption} className="rounded-2xl overflow-hidden" style={{ background: '#2E3439', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="px-5 py-4 flex items-center gap-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,61,51,0.4)' }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.25)' }}>
                  <Icon className="w-5 h-5" style={{ color: '#4ADE80' }} aria-hidden="true" />
                </div>
                <span className="text-sm font-medium" style={{ color: '#FFFFFF' }}>{caption}</span>
              </div>
              <div className="px-5 py-4 space-y-3">
                {rows.map((row) => (
                  <div key={row} className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{row}</span>
                    <div className="h-2 w-16 rounded" style={{ background: 'rgba(74,222,128,0.15)' }} aria-hidden="true" />
                  </div>
                ))}
                <div className="pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="h-2 w-24 rounded" style={{ background: 'rgba(255,255,255,0.06)' }} aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/contact" className="btn-lime">
            Request a Demo to See Full Reports
            <ArrowRight className="w-4 h-4" style={{ color: '#1A1A1A' }} />
          </Link>
        </div>
      </div>
    </section>
  )
}
