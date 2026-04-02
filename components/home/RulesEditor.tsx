'use client'

import { useReveal } from '@/hooks/useReveal'

type Token = ['kw' | 'str' | 'num' | 'op' | 'cm' | 'plain', string]
type Line  = { num: number; tokens: Token[] }

const lines: Line[] = [
  { num:  1, tokens: [['cm', '// PureEco Compliance Rule Engine — CBAM v2.4']] },
  { num:  2, tokens: [['plain', '']] },
  { num:  3, tokens: [['kw', 'rule '], ['str', '"CBAM_QUARTERLY_THRESHOLD"'], ['plain', ' {']] },
  { num:  4, tokens: [['plain', '  '], ['kw', 'applies_to'], ['plain', ':  '], ['str', '"EU_IMPORTER"']] },
  { num:  5, tokens: [['plain', '  '], ['kw', 'commodity'], ['plain', ':  '], ['str', '"HS_7206–7229"'], ['plain', '  '], ['cm', '// Steel']] },
  { num:  6, tokens: [['plain', '  '], ['kw', 'threshold'], ['plain', ':  '], ['num', '2500'], ['plain', '  '], ['cm', '// tCO₂e / quarter']] },
  { num:  7, tokens: [['plain', '  '], ['kw', 'action'], ['plain', ':   '], ['str', '"GENERATE_DECLARATION"']] },
  { num:  8, tokens: [['plain', '  '], ['kw', 'deadline'], ['plain', ':  '], ['str', '"T+30d"'], ['plain', '  '], ['cm', '// 30 days post-quarter']] },
  { num:  9, tokens: [['plain', '}']] },
  { num: 10, tokens: [['plain', '']] },
  { num: 11, tokens: [['kw', 'rule '], ['str', '"SCOPE3_BOUNDARY_CHECK"'], ['plain', ' {']] },
  { num: 12, tokens: [['plain', '  '], ['kw', 'supplier_tiers'], ['plain', ': '], ['num', '3']] },
  { num: 13, tokens: [['plain', '  '], ['kw', 'emission_factor'], ['plain', ': '], ['str', '"IPCC_AR6_GWP100"']] },
  { num: 14, tokens: [['plain', '  '], ['kw', 'verification'], ['plain', ':  '], ['str', '"ISO_14064_3"']] },
  { num: 15, tokens: [['plain', '  '], ['kw', 'alert_on'], ['plain', ':  '], ['str', '"DELTA_GT_5PCT"']] },
  { num: 16, tokens: [['plain', '}']] },
  { num: 17, tokens: [['plain', '']] },
  { num: 18, tokens: [['cm', '// Status: 2 rules active · last compiled 08:14:09 UTC']] },
]

const colorMap: Record<Token[0], string> = {
  kw:    '#4ADE80',
  str:   'rgba(255,255,255,0.85)',
  num:   '#4ADE80',
  op:    'rgba(255,255,255,0.6)',
  cm:    'rgba(255,255,255,0.35)',
  plain: 'rgba(255,255,255,0.75)',
}

export function RulesEditor() {
  const ref = useReveal('[data-reveal]', 0.1)

  return (
    <section className="py-20 px-6 md:px-12 blueprint-grid" style={{ background: '#003D33' }}>
      <div ref={ref as React.RefObject<HTMLDivElement>} className="max-w-4xl mx-auto">
        <span data-reveal className="section-label mb-3 inline-block reveal-blur">Compliance Logic</span>
        <h2 data-reveal data-reveal-delay="100" className="text-3xl md:text-4xl mt-3 mb-4 reveal-blur" style={{ color: '#FFFFFF', fontWeight: 500 }}>
          Rules Editor.
        </h2>
        <p data-reveal data-reveal-delay="200" className="mb-10 max-w-xl reveal-blur" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Compliance logic is declarative, version-controlled, and auditable. No black-box algorithms.
        </p>

        <div data-reveal data-reveal-delay="300" className="ide-surface overflow-hidden reveal-blur">
          <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.2)' }}>
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#888' }} />
            <div className="w-2.5 h-2.5 rounded-full glow-pulse" style={{ background: '#4ADE80' }} />
            <span className="font-mono-label ml-3" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.65rem' }}>compliance-rules.peco  ·  read-only</span>
          </div>
          <div className="overflow-x-auto p-4">
            {lines.map(({ num, tokens }) => (
              <div key={num} className="flex">
                <span className="ide-line-num">{num}</span>
                <span>{tokens.map(([type, text], i) => <span key={i} style={{ color: colorMap[type] }}>{text}</span>)}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between px-4 py-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.2)' }}>
            <span className="font-mono-label" style={{ color: '#4ADE80', fontSize: '0.6rem' }}>● 2 rules active</span>
            <span className="font-mono-label" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.6rem' }}>UTF-8 · PECO-DSL · Ln 18</span>
          </div>
        </div>
      </div>
    </section>
  )
}
