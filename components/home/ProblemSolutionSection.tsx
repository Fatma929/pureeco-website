export function ProblemSolutionSection() {
  return (
    <section className="py-24 px-6 md:px-12" style={{ background: '#24292E' }}>
      <div className="max-w-6xl mx-auto space-y-0">

        {/* Header */}
        <div
          className="p-8 md:p-10 rounded-t-2xl"
          style={{ background: 'rgba(0,61,51,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <span className="section-label mb-3 inline-block">The Risk Is Real</span>
          <h2 className="text-2xl md:text-3xl mt-3 mb-3" style={{ color: '#FFFFFF', fontWeight: 500 }}>
            One reporting error can cost you access to EU markets.
          </h2>
          <p className="text-base leading-relaxed max-w-3xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
            EU regulators are tightening CBAM enforcement. Industrial exporters relying on
            manual spreadsheets face growing financial exposure — and most don't know it yet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Problem */}
          <div
            className="p-10 md:p-14 md:rounded-bl-2xl"
            style={{ background: '#2E3439', border: '1px solid rgba(255,255,255,0.08)', borderTop: 'none' }}
          >
            <span className="section-label mb-4 inline-block">The Cost of Inaction</span>
            <h2 className="text-2xl md:text-3xl mb-6 leading-snug mt-3" style={{ color: '#FFFFFF', fontWeight: 500 }}>
              Your competitors are already compliant.
            </h2>
            <ul className="space-y-5" style={{ color: 'rgba(255,255,255,0.65)' }}>
              <li className="flex gap-3">
                <span style={{ color: '#4ADE80', flexShrink: 0 }}>→</span>
                <span><strong style={{ color: '#FFFFFF' }}>CBAM penalties activate January 2026.</strong> Every quarter of non-compliance compounds your financial liability.</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#4ADE80', flexShrink: 0 }}>→</span>
                <span><strong style={{ color: '#FFFFFF' }}>EU buyers now require Scope 3 data.</strong> Without it, you lose tenders before the conversation starts.</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#4ADE80', flexShrink: 0 }}>→</span>
                <span><strong style={{ color: '#FFFFFF' }}>Water non-compliance costs up to €500K per incident</strong> — affecting 60% of industrial manufacturers.</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#4ADE80', flexShrink: 0 }}>→</span>
                <span><strong style={{ color: '#FFFFFF' }}>320 staff-hours per quarter</strong> wasted on manual reporting — with no audit trail and no accuracy guarantee.</span>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div
            className="p-10 md:p-14 md:rounded-br-2xl"
            style={{ background: '#003D33', border: '1px solid rgba(255,255,255,0.1)', borderTop: 'none', borderLeft: 'none' }}
          >
            <span className="section-label mb-4 inline-block">One Platform. Full Coverage.</span>
            <h2 className="text-2xl md:text-3xl mb-6 leading-snug mt-3" style={{ color: '#FFFFFF', fontWeight: 500 }}>
              Carbon, water, and CBAM — automated from your ERP.
            </h2>
            <ul className="space-y-5" style={{ color: 'rgba(255,255,255,0.75)' }}>
              <li className="flex gap-3">
                <span style={{ color: '#4ADE80', flexShrink: 0 }}>✓</span>
                <span><strong style={{ color: '#FFFFFF' }}>Reduce reporting time by up to 80%</strong> — from months of manual work to hours of automated output.</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#4ADE80', flexShrink: 0 }}>✓</span>
                <span><strong style={{ color: '#FFFFFF' }}>Eliminate manual data errors</strong> with direct ERP integration — no spreadsheets, no reconciliation.</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#4ADE80', flexShrink: 0 }}>✓</span>
                <span><strong style={{ color: '#FFFFFF' }}>Stay continuously audit-ready</strong> — CBAM declarations, Scope 1–3 reports, and water compliance in one place.</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#4ADE80', flexShrink: 0 }}>✓</span>
                <span>Full CBAM readiness in <strong style={{ color: '#FFFFFF' }}>6 weeks or less.</strong> Zero compliance penalties across 120+ deployments.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
