import { ArrowRight } from 'lucide-react'

const connectors = [
  {
    abbr: 'SAP',
    name: 'SAP S/4HANA',
    protocol: 'RFC / BAPI',
    depth: 'Material Ledger · CO-PA · MM-IM',
  },
  {
    abbr: 'ORA',
    name: 'Oracle Fusion',
    protocol: 'REST / SOAP',
    depth: 'Inventory Org · Cost Accounting · SCM',
  },
  {
    abbr: 'MSD',
    name: 'Microsoft Dynamics 365',
    protocol: 'OData v4',
    depth: 'Finance · Supply Chain · Sustainability',
  },
  {
    abbr: 'SF',
    name: 'Salesforce',
    protocol: 'Bulk API 2.0',
    depth: 'Net Zero Cloud · ESG Reporting',
  },
  {
    abbr: 'WD',
    name: 'Workday',
    protocol: 'SOAP / REST',
    depth: 'Financial Mgmt · Procurement',
  },
]

export function IntegrationsSection() {
  return (
    <section className="py-20 px-6 md:px-12" style={{ background: '#0A0A0A' }}>
      <div className="max-w-5xl mx-auto">
        <span className="font-mono-label block text-center mb-3" style={{ color: '#00D4FF' }}>
          Connectivity Layer
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4" style={{ color: '#FFFFFF' }}>
          Deep-Level ERP Integration.
        </h2>
        <p className="text-center mb-2 max-w-2xl mx-auto" style={{ color: '#8B9AB0' }}>
          Native connectors reach below the API surface — extracting material ledger entries,
          cost-object hierarchies, and procurement records directly from transaction tables.
          No middleware. No data loss.
        </p>
        <p className="font-mono-label text-center mb-12" style={{ color: 'rgba(0,212,255,0.45)' }}>
          Protocol · Connector · Extraction · Reconciliation
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {connectors.map(({ abbr, name, protocol, depth }) => (
            <div
              key={abbr}
              className="p-5 rounded-xl transition-all duration-200"
              style={{
                background: 'rgba(17,24,39,0.8)',
                border: '1px solid rgba(0,212,255,0.15)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(0,255,135,0.4)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 16px rgba(0,255,135,0.08)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(0,212,255,0.15)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-extrabold" style={{ color: '#00FF87' }}>{abbr}</span>
                <span
                  className="font-mono-label px-2 py-0.5 rounded"
                  style={{ color: '#00D4FF', background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}
                >
                  {protocol}
                </span>
              </div>
              <p className="text-sm font-semibold mb-2" style={{ color: '#E2E8F0' }}>{name}</p>
              <div className="flex items-start gap-1.5">
                <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: '#00D4FF' }} />
                <p className="font-mono-label" style={{ color: '#8B9AB0', fontSize: '0.65rem' }}>{depth}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
