const steps = [
  {
    number: 1,
    title: 'Connect Your ERP',
    description:
      'Link SAP, Oracle, or Dynamics in under 30 minutes using our pre-built connectors.',
  },
  {
    number: 2,
    title: 'Configure Compliance Rules',
    description:
      'Set your CBAM, carbon, and water thresholds in a guided 2-hour onboarding session.',
  },
  {
    number: 3,
    title: 'Generate Reports Automatically',
    description:
      'Receive audit-ready compliance reports every quarter with zero manual data entry.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-brand-slate">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          How It Works
        </h2>
        <p className="text-brand-slate-muted text-center mb-12 max-w-xl mx-auto">
          Get up and running in days, not months.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="flex-1 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center mb-5 flex-shrink-0">
                <span className="text-white text-xl font-bold">{number}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-brand-slate-muted text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
