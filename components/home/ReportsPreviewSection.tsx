import Link from 'next/link'
import { FileBarChart2, Droplets, Globe } from 'lucide-react'

const reports = [
  {
    caption: 'CBAM Quarterly Declaration',
    icon: Globe,
    rows: ['Embedded Carbon (tCO₂)', 'Carbon Price Paid', 'Declarant Reference'],
    accent: 'bg-brand-green/10',
    iconColor: 'text-brand-green',
  },
  {
    caption: 'Carbon Footprint Summary',
    icon: FileBarChart2,
    rows: ['Scope 1 Emissions', 'Scope 2 Emissions', 'Reduction vs. Baseline'],
    accent: 'bg-brand-slate/10',
    iconColor: 'text-brand-slate',
  },
  {
    caption: 'Water Usage Compliance Report',
    icon: Droplets,
    rows: ['Total Consumption (m³)', 'Recycled Water %', 'Regulatory Threshold'],
    accent: 'bg-brand-green-light/10',
    iconColor: 'text-brand-green-light',
  },
]

export function ReportsPreviewSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-slate text-center mb-4">
          Reports That Speak to Regulators
        </h2>
        <p className="text-brand-slate-muted text-center mb-12 max-w-xl mx-auto">
          Auto-generated, audit-ready sustainability reports tailored to EU compliance standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reports.map(({ caption, icon: Icon, rows, accent, iconColor }) => (
            <div
              key={caption}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
            >
              {/* Mock report header */}
              <div className={`${accent} px-5 py-4 flex items-center gap-3`}>
                <div className="w-9 h-9 rounded-lg bg-white/70 flex items-center justify-center">
                  <Icon className={`w-5 h-5 ${iconColor}`} aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold text-brand-slate">{caption}</span>
              </div>

              {/* Mock report body */}
              <div className="px-5 py-4 space-y-3">
                {rows.map((row) => (
                  <div key={row} className="flex items-center justify-between">
                    <span className="text-xs text-brand-slate-muted">{row}</span>
                    <div className="h-2.5 w-16 rounded bg-gray-200" aria-hidden="true" />
                  </div>
                ))}
                <div className="pt-2 border-t border-gray-100">
                  <div className="h-2 w-24 rounded bg-gray-100" aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-brand-green text-white font-semibold px-8 py-4 rounded-lg text-base hover:opacity-90 transition-opacity"
          >
            Request a Demo to See Full Reports
          </Link>
        </div>
      </div>
    </section>
  )
}
