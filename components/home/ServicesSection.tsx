import { BarChart3, Droplets, FileCheck2, Database } from 'lucide-react'

const capabilities = [
  {
    icon: BarChart3,
    tag: 'MODULE_01',
    title: 'Carbon Accounting Engine',
    description:
      'Scope 1–3 emission ingestion, factor-mapping, and ledger reconciliation against GHG Protocol and ISO 14064 verification standards.',
  },
  {
    icon: Droplets,
    tag: 'MODULE_02',
    title: 'Water Discharge Monitoring',
    description:
      'Volumetric intake and effluent tracking per facility node. Threshold enforcement against EU Water Framework Directive parameters.',
  },
  {
    icon: FileCheck2,
    tag: 'MODULE_03',
    title: 'CBAM Declaration Engine',
    description:
      'Embedded carbon extraction from bill-of-materials, declarant-reference generation, and quarterly submission to EU CBAM Registry.',
  },
  {
    icon: Database,
    tag: 'MODULE_04',
    title: 'Regulatory Advisory Protocol',
    description:
      'Structured gap-analysis, jurisdiction-mapping, and CSRD/GRI disclosure architecture delivered by domain verification specialists.',
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 px-6 md:px-12 blueprint-grid" style={{ background: '#0D1117' }}>
      <div className="max-w-5xl mx-auto">
        <span className="font-mono-label block text-center mb-3" style={{ color: '#00D4FF' }}>
          System Capabilities
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3" style={{ color: '#FFFFFF' }}>
          Precision Modules. Zero Ambiguity.
        </h2>
        <p className="text-center mb-2 max-w-xl mx-auto" style={{ color: '#8B9AB0' }}>
          Moving beyond spreadsheets into immutable digital carbon ledgers.
        </p>
        <p className="font-mono-label text-center mb-12" style={{ color: 'rgba(0,212,255,0.5)' }}>
          Verification · Ledger · Engine · Protocol · Registry
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map(({ icon: Icon, tag, title, description }) => (
            <div
              key={title}
              className="flex gap-5 p-6 rounded-xl transition-all duration-200"
              style={{
                background: 'rgba(17, 24, 39, 0.8)',
                border: '1px solid rgba(0, 212, 255, 0.12)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(0, 255, 135, 0.35)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 20px rgba(0,255,135,0.06)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(0, 212, 255, 0.12)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
              }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(0, 255, 135, 0.1)', border: '1px solid rgba(0,255,135,0.2)' }}
              >
                <Icon className="w-6 h-6" style={{ color: '#00FF87' }} aria-hidden="true" />
              </div>
              <div>
                <span className="font-mono-label block mb-1" style={{ color: 'rgba(0,212,255,0.5)' }}>{tag}</span>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#E2E8F0' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8B9AB0' }}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
