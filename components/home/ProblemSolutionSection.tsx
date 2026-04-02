export function ProblemSolutionSection() {
  return (
    <section className="py-20 px-6 md:px-12" style={{ background: '#0A0A0A' }}>
      <div className="max-w-6xl mx-auto space-y-0">

        {/* System Logic block */}
        <div
          className="p-8 md:p-10 rounded-t-2xl"
          style={{ background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.12)' }}
        >
          <span className="font-mono-label block mb-3" style={{ color: '#00D4FF' }}>
            System Logic
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ color: '#FFFFFF' }}>
            Moving beyond spreadsheets into immutable digital carbon ledgers.
          </h2>
          <p className="text-sm leading-relaxed max-w-3xl" style={{ color: '#8B9AB0' }}>
            Legacy compliance workflows rely on manual extraction, version-controlled spreadsheets,
            and human reconciliation — introducing transcription error, audit lag, and regulatory
            exposure. PureEco replaces this with a deterministic ingestion pipeline: ERP transaction
            data flows into a structured emission ledger, timestamped, hash-verified, and
            declaration-ready without human intervention.
          </p>
        </div>

        {/* Problem / Solution grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Problem */}
          <div
            className="p-10 md:p-14 md:rounded-bl-2xl"
            style={{ background: '#0D1117', border: '1px solid rgba(139,154,176,0.12)', borderTop: 'none' }}
          >
            <span className="font-mono-label block mb-4" style={{ color: '#00D4FF' }}>
              Constraint Analysis
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug" style={{ color: '#FFFFFF' }}>
              Regulatory exposure is compounding quarterly.
            </h2>
            <ul className="space-y-4 text-base leading-relaxed" style={{ color: 'rgba(226,232,240,0.65)' }}>
              <li>
                <strong style={{ color: '#00FF87' }}>50,000+ EU importers</strong> entered mandatory
                CBAM transitional-phase reporting in Q4 2023. Full financial liability activates January 2026.
              </li>
              <li>
                <strong style={{ color: '#00FF87' }}>Scope 3 boundary expansion</strong> under CSRD
                requires value-chain emission tracing across Tier 1–3 suppliers — a 3× increase in
                data-collection surface since 2020.
              </li>
              <li>
                <strong style={{ color: '#00FF87' }}>EU Water Framework non-compliance</strong> carries
                per-incident penalties up to €500,000, affecting 60% of industrial manufacturers.
              </li>
              <li>
                Manual reconciliation consumes{' '}
                <strong style={{ color: '#00FF87' }}>320 staff-hours per quarter</strong> in
                mid-size facilities — with no audit trail and no version control.
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div
            className="p-10 md:p-14 md:rounded-br-2xl"
            style={{
              background: 'rgba(0,255,135,0.03)',
              border: '1px solid rgba(0,255,135,0.15)',
              borderTop: 'none',
              borderLeft: 'none',
            }}
          >
            <span className="font-mono-label block mb-4" style={{ color: '#00FF87' }}>
              Resolution Engine
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug" style={{ color: '#FFFFFF' }}>
              Audit-Ready. Encrypted. Sovereign.
            </h2>
            <ul className="space-y-4 text-base leading-relaxed" style={{ color: 'rgba(226,232,240,0.65)' }}>
              <li>
                <strong style={{ color: '#00D4FF' }}>CBAM Declaration Engine</strong> extracts
                embedded carbon from ERP bill-of-materials and generates EU-registry-compliant
                quarterly declarations in under 2 hours — no manual input.
              </li>
              <li>
                <strong style={{ color: '#00D4FF' }}>Immutable Emission Ledger</strong> consolidates
                Scope 1, 2, and 3 records with hash-chain verification, reducing reconciliation
                from 320 hours to fewer than 40 per quarter.
              </li>
              <li>
                <strong style={{ color: '#00D4FF' }}>Water Threshold Monitor</strong> enforces
                EU Water Framework parameters per facility node, with 30-day pre-breach alerting
                and automated incident documentation.
              </li>
              <li>
                Full CBAM readiness achieved in{' '}
                <strong style={{ color: '#00D4FF' }}>6 weeks or less</strong> across
                120+ active deployments. Zero compliance penalties on record.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
