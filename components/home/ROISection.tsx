import Link from 'next/link'
import { ArrowRight, TrendingDown, ShieldCheck, Globe, Zap } from 'lucide-react'

const outcomes = [
  {
    icon: TrendingDown,
    stat: '80%',
    label: 'Less reporting time',
    detail: 'Replace weeks of manual work with automated outputs directly from your ERP.',
  },
  {
    icon: ShieldCheck,
    stat: '€0',
    label: 'Compliance penalties',
    detail: 'Zero CBAM or water framework penalties across 120+ active deployments.',
  },
  {
    icon: Globe,
    stat: '100%',
    label: 'EU export protection',
    detail: 'Stay qualified for EU tenders with continuously audit-ready documentation.',
  },
  {
    icon: Zap,
    stat: '6 wks',
    label: 'To full CBAM readiness',
    detail: 'From ERP connection to first compliant declaration — in under six weeks.',
  },
]

export function ROISection() {
  return (
    <section className="py-24 px-6 md:px-12" style={{ background: '#F8F6F1' }}>
      <div className="max-w-5xl mx-auto">
        <span className="section-label mb-3 inline-block" style={{ borderColor: 'rgba(23,67,33,0.3)', color: '#174321' }}>Business Impact</span>
        <h2 className="text-3xl md:text-4xl mt-3 mb-3" style={{ color: '#1a2e1a', fontWeight: 500, letterSpacing: '0.02em' }}>
          This isn't reporting. It's cost &amp; risk reduction.
        </h2>
        <p className="mb-14 max-w-xl" style={{ color: '#4a6741' }}>
          PureEco customers don't just stay compliant — they protect revenue, cut operational waste,
          and win more EU business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {outcomes.map(({ icon: Icon, stat, label, detail }) => (
            <div
              key={label}
              className="p-6 rounded-xl"
              style={{ background: '#FFFFFF', border: '1px solid rgba(23,67,33,0.15)', boxShadow: '0 2px 8px rgba(23,67,33,0.06)' }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: 'rgba(23,67,33,0.08)', border: '1px solid rgba(23,67,33,0.2)' }}
              >
                <Icon className="w-5 h-5" style={{ color: '#174321' }} aria-hidden="true" />
              </div>
              <p
                className="text-4xl font-bold mb-1"
                style={{ color: '#174321', fontFamily: 'Inter, system-ui, sans-serif', letterSpacing: '-0.02em' }}
              >
                {stat}
              </p>
              <p className="text-sm font-medium mb-2" style={{ color: '#1a2e1a' }}>{label}</p>
              <p className="text-xs leading-relaxed" style={{ color: '#6b7a6b' }}>{detail}</p>
            </div>
          ))}
        </div>

        {/* Urgency banner */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-xl"
          style={{ background: '#174321', border: '1px solid rgba(23,67,33,0.3)' }}
        >
          <div>
            <p className="text-base font-medium mb-1" style={{ color: '#FFFFFF' }}>
              CBAM financial obligations begin January 2026.
            </p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Every month without a compliant system increases your exposure. Most deployments take 6 weeks.
            </p>
          </div>
          <Link href="/contact" className="btn-lime flex-shrink-0">
            Get Your CBAM Assessment
            <ArrowRight className="w-4 h-4" style={{ color: '#1A1A1A' }} />
          </Link>
        </div>
      </div>
    </section>
  )
}
