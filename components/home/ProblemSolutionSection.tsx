export function ProblemSolutionSection() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Problem */}
        <div className="bg-brand-slate text-white p-10 md:p-14 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green-light mb-4">
            The Problem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Compliance deadlines are tightening — fast
          </h2>
          <ul className="space-y-4 text-white/80 text-base leading-relaxed">
            <li>
              <strong className="text-white">Over 50,000 EU exporters</strong> face mandatory CBAM
              compliance by January 2026, with quarterly reporting already required since October 2023.
            </li>
            <li>
              <strong className="text-white">Carbon reporting complexity</strong> has increased 3×
              since 2020 — companies now track Scope 1, 2, and 3 emissions across dozens of suppliers.
            </li>
            <li>
              <strong className="text-white">Water usage regulations</strong> in the EU Water Framework
              Directive affect 60% of industrial manufacturers, with non-compliance fines up to €500,000
              per incident.
            </li>
            <li>
              Manual spreadsheet-based compliance processes consume an average of{' '}
              <strong className="text-white">320 staff-hours per quarter</strong> in mid-size
              manufacturing firms.
            </li>
          </ul>
        </div>

        {/* Solution */}
        <div className="bg-brand-green text-white p-10 md:p-14 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-green-light mb-4">
            The Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            PureEco cuts compliance time by 80%
          </h2>
          <ul className="space-y-4 text-white/80 text-base leading-relaxed">
            <li>
              <strong className="text-white">Automated CBAM reporting</strong> pulls embedded carbon
              data directly from your ERP (SAP, Oracle, Dynamics) and generates EU-compliant quarterly
              declarations in under 2 hours.
            </li>
            <li>
              <strong className="text-white">Real-time carbon dashboards</strong> consolidate Scope 1,
              2, and 3 data across all facilities, reducing manual data collection from 320 hours to
              fewer than 40 hours per quarter.
            </li>
            <li>
              <strong className="text-white">Water compliance monitoring</strong> tracks usage against
              EU Water Framework thresholds and alerts your team 30 days before a regulatory deadline.
            </li>
            <li>
              Customers achieve full CBAM readiness in{' '}
              <strong className="text-white">6 weeks or less</strong>, with zero compliance penalties
              reported across 120+ active deployments.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
