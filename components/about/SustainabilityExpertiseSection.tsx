'use client'

import { BarChart3, FileCheck2, Droplets, ClipboardList } from 'lucide-react'

const expertiseAreas = [
  { icon: BarChart3,     title: 'Carbon Accounting',          description: 'Deep expertise in Scope 1, 2, and 3 emissions measurement, verification, and reporting aligned to GHG Protocol and ISO 14064 standards.' },
  { icon: FileCheck2,    title: 'CBAM Regulatory Compliance', description: 'Comprehensive knowledge of the EU Carbon Border Adjustment Mechanism — from embedded carbon calculations to quarterly declaration filing.' },
  { icon: Droplets,      title: 'Water Resource Management',  description: 'Industrial water usage monitoring, discharge tracking, and compliance with the EU Water Framework Directive across multi-site operations.' },
  { icon: ClipboardList, title: 'ESG Reporting',              description: 'Integrated ESG disclosure workflows aligned to GRI Standards and CSRD requirements, enabling audit-ready sustainability reports.' },
]

export function SustainabilityExpertiseSection() {
  return (
    <section className="py-20 px-6 md:px-12" style={{ background: '#0C2E19' }}>
      <div className="max-w-5xl mx-auto">
        <span
          className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3"
          style={{ background: 'rgba(74,222,128,0.12)', color: '#4ADE80', border: '1px solid rgba(74,222,128,0.25)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
        >
          Expertise
        </span>
        <h2 className="text-3xl md:text-4xl mt-3 mb-4" style={{ color: '#FFFFFF', fontWeight: 600 }}>
          Our Sustainability Expertise
        </h2>
        <p className="mb-12 max-w-xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
          Years of domain knowledge across the full spectrum of industrial sustainability and EU regulatory compliance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseAreas.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-5 p-6 rounded-xl transition-all duration-200"
              style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.15)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = 'rgba(74,222,128,0.12)'
                el.style.borderColor = 'rgba(74,222,128,0.4)'
                el.style.boxShadow = '0 8px 24px rgba(74,222,128,0.1)'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = 'rgba(74,222,128,0.06)'
                el.style.borderColor = 'rgba(74,222,128,0.15)'
                el.style.boxShadow = 'none'
                el.style.transform = 'translateY(0)'
              }}
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.3)' }}
              >
                <Icon className="w-6 h-6" style={{ color: '#4ADE80' }} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg mb-2" style={{ color: '#FFFFFF', fontWeight: 600 }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
