import { BarChart3, FileCheck2, Droplets, ClipboardList } from 'lucide-react'

const expertiseAreas = [
  {
    icon: BarChart3,
    title: 'Carbon Accounting',
    description:
      'Deep expertise in Scope 1, 2, and 3 emissions measurement, verification, and reporting aligned to GHG Protocol and ISO 14064 standards.',
  },
  {
    icon: FileCheck2,
    title: 'CBAM Regulatory Compliance',
    description:
      'Comprehensive knowledge of the EU Carbon Border Adjustment Mechanism — from embedded carbon calculations to quarterly declaration filing.',
  },
  {
    icon: Droplets,
    title: 'Water Resource Management',
    description:
      'Industrial water usage monitoring, discharge tracking, and compliance with the EU Water Framework Directive across multi-site operations.',
  },
  {
    icon: ClipboardList,
    title: 'ESG Reporting',
    description:
      'Integrated ESG disclosure workflows aligned to GRI Standards and CSRD requirements, enabling audit-ready sustainability reports.',
  },
]

export function SustainabilityExpertiseSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-slate text-center mb-4">
          Our Sustainability Expertise
        </h2>
        <p className="text-brand-slate-muted text-center mb-12 max-w-xl mx-auto">
          Years of domain knowledge across the full spectrum of industrial sustainability and EU
          regulatory compliance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-5 p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
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
