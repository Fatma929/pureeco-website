import { BarChart3, Droplets, FileCheck2, Users } from 'lucide-react'

const services = [
  {
    icon: BarChart3,
    title: 'Carbon Management',
    description:
      'Track, measure, and reduce your carbon footprint with automated reporting aligned to EU and global standards.',
  },
  {
    icon: Droplets,
    title: 'Water Sustainability',
    description:
      'Monitor water usage across facilities, identify waste, and meet regulatory thresholds with real-time dashboards.',
  },
  {
    icon: FileCheck2,
    title: 'CBAM Compliance',
    description:
      'Automate Carbon Border Adjustment Mechanism declarations and stay ahead of EU import carbon regulations.',
  },
  {
    icon: Users,
    title: 'Consulting',
    description:
      'Expert guidance on sustainability strategy, regulatory readiness, and ESG reporting tailored to your industry.',
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-slate text-center mb-4">
          Our Services
        </h2>
        <p className="text-brand-slate-muted text-center mb-12 max-w-xl mx-auto">
          End-to-end sustainability solutions built for industrial companies and EU exporters.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-5 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-brand-green" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-slate mb-2">{title}</h3>
                <p className="text-brand-slate-muted text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
