import Link from 'next/link'
import { FileBarChart2, Droplets, Globe } from 'lucide-react'

const reports = [
  {
    caption: 'CBAM Quarterly Declaration',
    icon: Globe,
    rows: ['Embedded Carbon (tCO₂)', 'Carbon Price Paid', 'Declarant Reference'],
    accentColor: '#00D4FF',
  },
  {
    caption: 'Carbon Footprint Summary',
    icon: FileBarChart2,
    rows: ['Scope 1 Emissions', 'Scope 2 Emissions', 'Reduction vs. Baseline'],
    accentColor: '#00FF87',
  },
  {
    caption: 'Water Usage Compliance Report',
    icon: Droplets,
    rows: ['Total Consumption (m³)', 'Recycled Water %', 'Regulatory Threshold'],
    accentColor: '#00D4FF',
  },
]

export function ReportsPreviewSection() {
  return (
    <section className="py-20 px-6 md:px-12" style={{ background: '#0D1117' }}>
      <div className="max-w-5xl mx-auto">
        <span className="font-mono-label block text-center mb-3" style={{ color: '#00D4FF' }}>
          Output
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4" style={{ color: '#FFFFFF' }}>
          Reports That Speak to Regulators
        </h2>
        <p className="text-center mb-12 max-w-xl mx-auto" style={{ color: '#8B9AB0' }}>
          Auto-generated, audit-ready sustainability reports tailored to EU compliance standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reports.map(({ caption, icon: Icon, rows, accentColor }) => (
            <div
              key={caption}
              className="rounded-2xl overflow-hidden"
              style={{ background: '#111827', border: `1px solid ${accentColor}22` }}
            >
              {/* Header */}
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{ borderBottom: `1px solid ${accentColor}22`, background: `${accentColor}08` }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: `${accentColor}15`, border: `1px solid ${accentColor}30` }}
                >
                  <Icon className="w-5 h-5" style={{ color: accentColor }} aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold" style={{ color: '#E2E8F0' }}>{caption}</span>
              </div>

              {/* Body */}
              <div className="px-5 py-4 space-y-3">
                {rows.map((row) => (
                  <div key={row} className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: '#8B9AB0' }}>{row}</span>
                    <div
                      className="h-2 w-16 rounded"
                      style={{ background: `${accentColor}20` }}
                      aria-hidden="true"
                    />
                  </div>
                ))}
                <div className="pt-2" style={{ borderTop: '1px solid rgba(139,154,176,0.1)' }}>
                  <div className="h-2 w-24 rounded" style={{ background: 'rgba(139,154,176,0.1)' }} aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block font-bold px-8 py-4 rounded-lg text-base btn-demo"
            style={{ background: '#00FF87', color: '#0A0A0A' }}
          >
            Request a Demo to See Full Reports
          </Link>
        </div>
      </div>
    </section>
  )
}
