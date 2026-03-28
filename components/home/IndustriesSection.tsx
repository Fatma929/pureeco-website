import {
  Flame,
  Building2,
  FlaskConical,
  Layers,
  Factory,
  Truck,
  Zap,
  Wheat,
} from 'lucide-react'

const industries = [
  { label: 'Steel', icon: Flame },
  { label: 'Cement', icon: Building2 },
  { label: 'Chemicals', icon: FlaskConical },
  { label: 'Aluminum', icon: Layers },
  { label: 'Manufacturing', icon: Factory },
  { label: 'Logistics', icon: Truck },
  { label: 'Energy', icon: Zap },
  { label: 'Agriculture', icon: Wheat },
]

export function IndustriesSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-slate text-center mb-4">
          Industries We Serve
        </h2>
        <p className="text-brand-slate-muted text-center mb-12 max-w-xl mx-auto">
          Purpose-built compliance tools for the sectors that matter most.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {industries.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-brand-green" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium text-brand-slate">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
