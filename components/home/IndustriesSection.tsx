import { FlaskConical, Building2, Flame, Layers, Factory, Zap, Wheat, Truck } from 'lucide-react'

const prioritySectors = [
  {
    icon: FlaskConical,
    label: 'Fertilizer & Agrochemicals',
    tag: 'HIGH-PRECISION',
    detail: 'N₂O emission-factor mapping · Nitric acid process tracking · CBAM Chapter 31 compliance',
  },
  {
    icon: Building2,
    label: 'Cement & Clinker',
    tag: 'HIGH-PRECISION',
    detail: 'Calcination CO₂ quantification · Kiln fuel-mix ledger · EU ETS allocation reconciliation',
  },
  {
    icon: Flame,
    label: 'Petrochemicals & Refining',
    tag: 'HIGH-PRECISION',
    detail: 'Flaring & fugitive emission capture · Scope 1 stack monitoring · CBAM Chapter 27/29',
  },
]

const additionalSectors = [
  { label: 'Steel & Iron', icon: Layers },
  { label: 'Aluminum Smelting', icon: Zap },
  { label: 'Industrial Manufacturing', icon: Factory },
  { label: 'Agricultural Processing', icon: Wheat },
  { label: 'Logistics & Freight', icon: Truck },
]

export function IndustriesSection() {
  return (
    <section className="py-20 px-6 md:px-12" style={{ background: '#0A0A0A' }}>
      <div className="max-w-5xl mx-auto">
        <span className="font-mono-label block text-center mb-3" style={{ color: '#00D4FF' }}>
          Sector Coverage
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4" style={{ color: '#FFFFFF' }}>
          High-Precision Tracking by Sector.
        </h2>
        <p className="text-center mb-12 max-w-xl mx-auto" style={{ color: '#8B9AB0' }}>
          Emission factors, process parameters, and regulatory mappings are pre-configured
          per industry — not generic templates.
        </p>

        {/* Priority sectors with detail */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {prioritySectors.map(({ icon: Icon, label, tag, detail }) => (
            <div
              key={label}
              className="p-6 rounded-xl transition-all duration-200"
              style={{
                background: 'rgba(17,24,39,0.9)',
                border: '1px solid rgba(0,255,135,0.2)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 24px rgba(0,255,135,0.08)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(0,255,135,0.08)', border: '1px solid rgba(0,255,135,0.2)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#00FF87' }} aria-hidden="true" />
                </div>
                <span
                  className="font-mono-label px-2 py-0.5 rounded"
                  style={{ color: '#00FF87', background: 'rgba(0,255,135,0.08)', border: '1px solid rgba(0,255,135,0.2)', fontSize: '0.6rem' }}
                >
                  {tag}
                </span>
              </div>
              <h3 className="text-base font-bold mb-3" style={{ color: '#E2E8F0' }}>{label}</h3>
              <p className="font-mono-label leading-relaxed" style={{ color: '#8B9AB0', fontSize: '0.65rem' }}>
                {detail}
              </p>
            </div>
          ))}
        </div>

        {/* Additional sectors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {additionalSectors.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-200"
              style={{
                background: 'rgba(17,24,39,0.5)',
                border: '1px solid rgba(0,212,255,0.08)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(0,212,255,0.3)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(0,212,255,0.08)'
              }}
            >
              <Icon className="w-5 h-5" style={{ color: '#8B9AB0' }} aria-hidden="true" />
              <span className="font-mono-label text-center" style={{ color: '#8B9AB0', fontSize: '0.65rem' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
