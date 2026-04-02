'use client'

import { useEffect, useState } from 'react'
import { PureEcoLogo } from './PureEcoLogo'

const bootLines = [
  'Initializing PureEco Carbon Engine...',
  'Loading emission factor registry...',
  'Establishing ERP connector pool...',
  'Verifying cryptographic ledger...',
  'System ready.',
]

export function SystemLoader({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([])
  const [done, setDone]   = useState(false)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < bootLines.length) { setLines(prev => [...prev, bootLines[i]]); i++ }
      else { clearInterval(interval); setTimeout(() => { setDone(true); setTimeout(onComplete, 400) }, 300) }
    }, 340)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
      style={{ background: '#24292E', opacity: done ? 0 : 1, transition: 'opacity 0.4s ease', pointerEvents: done ? 'none' : 'all' }}
    >
      <div className="mb-8">
        <PureEcoLogo height={40} />
      </div>
      <div className="w-64 h-0.5 rounded-full overflow-hidden mb-6" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div className="h-full rounded-full loader-bar" style={{ background: 'linear-gradient(90deg, #003D33, #D4E971)' }} />
      </div>
      <div className="w-64 space-y-1">
        {lines.map((line, i) => (
          <p key={i} className="font-mono-label" style={{ color: i === lines.length - 1 ? '#D4E971' : 'rgba(255,255,255,0.35)', fontSize: '0.65rem' }}>
            {i === lines.length - 1 ? '▶ ' : '✓ '}{line}
            {i === lines.length - 1 && <span className="loader-cursor ml-0.5">_</span>}
          </p>
        ))}
      </div>
    </div>
  )
}
