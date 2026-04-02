'use client'

import { useState } from 'react'
import { SystemLoader } from './SystemLoader'

export function AppShell({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <SystemLoader onComplete={() => setLoaded(true)} />}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        {children}
      </div>
    </>
  )
}
