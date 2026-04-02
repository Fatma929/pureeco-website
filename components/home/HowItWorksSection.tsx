const steps = [
  {
    number: '01',
    tag: 'Ingestion',
    title: 'ERP Connector Deployment',
    description:
      'RFC/BAPI or OData connector installed against your SAP, Oracle, or Dynamics instance. Material ledger and cost-object extraction configured in under 30 minutes.',
  },
  {
    number: '02',
    tag: 'Configuration',
    title: 'Emission Factor & Rule Mapping',
    description:
      'Sector-specific emission factors, CBAM commodity codes, and water-threshold parameters bound to your facility hierarchy. Verification protocol selected per jurisdiction.',
  },
  {
    number: '03',
    tag: 'Output',
    title: 'Ledger Compilation & Declaration',
    description:
      'Immutable carbon ledger compiled per reporting period. CBAM declarations, Scope 1–3 disclosures, and audit packages generated without manual data entry.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 px-6 md:px-12 blueprint-grid" style={{ background: '#0D1117' }}>
      <div className="max-w-5xl mx-auto">
        <span className="font-mono-label block text-center mb-3" style={{ color: '#00D4FF' }}>
          Execution Pipeline
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4" style={{ color: '#FFFFFF' }}>
          From ERP Transaction to Audit-Ready Ledger.
        </h2>
        <p className="text-center mb-12 max-w-xl mx-auto" style={{ color: '#8B9AB0' }}>
          Three deterministic stages. No spreadsheets. No manual reconciliation.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          {steps.map(({ number, tag, title, description }, i) => (
            <div key={number} className="flex-1 relative">
              {/* Connector line between steps */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-7 left-full w-6 h-px z-10"
                  style={{ background: 'rgba(0,212,255,0.3)' }}
                />
              )}
              <div
                className="p-6 rounded-xl h-full"
                style={{
                  background: 'rgba(13,17,23,0.9)',
                  border: '1px solid rgba(0,212,255,0.15)',
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(0,255,135,0.08)',
                      border: '1px solid rgba(0,255,135,0.4)',
                      boxShadow: '0 0 20px rgba(0,255,135,0.12)',
                    }}
                  >
                    <span className="font-extrabold" style={{ color: '#00FF87', fontFamily: 'Geist Mono, monospace', fontSize: '0.85rem' }}>{number}</span>
                  </div>
                  <span
                    className="font-mono-label px-2 py-0.5 rounded"
                    style={{ color: '#00D4FF', background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}
                  >
                    {tag}
                  </span>
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#E2E8F0' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8B9AB0' }}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
