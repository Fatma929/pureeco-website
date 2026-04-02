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
    <section className="py-20 px-6 md:px-12 blueprint-grid" style={{ background: '#0D1117' }}>
      <div className="max-w-5xl mx-auto">
        <span className="font-mono-label block text-center mb-3" style={{ color: '#00D4FF' }}>Expertise</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4" style={{ color: '#FFFFFF' }}>
          Our Sustainability Expertise
        </h2>
        <p className="text-center mb-12 max-w-xl mx-auto" style={{ color: '#8B9AB0' }}>
          Years of domain knowledge across the full spectrum of industrial sustainability and EU
          regulatory compliance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseAreas.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-5 p-6 rounded-xl transition-all duration-200"
              style={{
                background: 'rgba(17,24,39,0.8)',
                border: '1px solid rgba(0,212,255,0.12)',
              }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(0,255,135,0.08)', border: '1px solid rgba(0,255,135,0.2)' }}
              >
                <Icon className="w-6 h-6" style={{ color: '#00FF87' }} aria-hidden="true" />
              </div>
              <div>
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
