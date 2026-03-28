const integrations = [
  { name: 'SAP', abbr: 'SAP' },
  { name: 'Oracle', abbr: 'ORC' },
  { name: 'Microsoft Dynamics', abbr: 'MSD' },
  { name: 'Salesforce', abbr: 'SF' },
  { name: 'Workday', abbr: 'WD' },
]

export function IntegrationsSection() {
  return (
    <section className="py-20 px-6 md:px-12 bg-brand-slate">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Integrates With Your ERP
        </h2>
        <p className="text-white/70 mb-12 max-w-lg mx-auto">
          Connect your existing ERP in days, not months, with zero custom development.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {integrations.map(({ name, abbr }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center w-36 h-24 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors px-3"
            >
              <span className="text-brand-green-light font-bold text-lg leading-none mb-1">
                {abbr}
              </span>
              <span className="text-white text-xs font-medium text-center leading-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
