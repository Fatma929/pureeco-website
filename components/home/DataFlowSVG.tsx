'use client'

import { useEffect, useRef } from 'react'

const ERP_NODES = [
  { id: 'SAP', x: 40,  y: 36,  label: 'SAP' },
  { id: 'ORA', x: 40,  y: 120, label: 'ORA' },
  { id: 'MSD', x: 40,  y: 204, label: 'MSD' },
]
const CORE = { id: 'CORE', x: 330, y: 120, label: 'PUREECO' }

export function DataFlowSVG() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const paths = svg.querySelectorAll<SVGPathElement>('.data-flow-line')

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        paths.forEach((p, i) =>
          setTimeout(() => p.classList.add('is-visible'), i * 320)
        )
        observer.disconnect()
      },
      { threshold: 0.3 }
    )

    observer.observe(svg)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex justify-center my-8">
      <svg
        ref={svgRef}
        viewBox="0 0 420 260"
        width="420"
        height="260"
        aria-hidden="true"
        style={{ overflow: 'visible', maxWidth: '100%' }}
      >
        {/* Animated paths */}
        {ERP_NODES.map((node) => {
          const ax = node.x + 56
          const ay = node.y + 14
          const bx = CORE.x
          const by = CORE.y + 14
          const mx = (ax + bx) / 2
          return (
            <path
              key={node.id}
              className="data-flow-line"
              d={`M ${ax} ${ay} C ${mx} ${ay}, ${mx} ${by}, ${bx} ${by}`}
              fill="none"
              stroke="#00D4FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.55"
            />
          )
        })}

        {/* Travelling dots */}
        {ERP_NODES.map((node, i) => {
          const ax = node.x + 56
          const ay = node.y + 14
          const bx = CORE.x
          const by = CORE.y + 14
          const mx = (ax + bx) / 2
          return (
            <circle key={`dot-${node.id}`} r="3" fill="#00FF87">
              <animateMotion
                dur="2.8s"
                repeatCount="indefinite"
                begin={`${i * 0.7}s`}
                path={`M ${ax} ${ay} C ${mx} ${ay}, ${mx} ${by}, ${bx} ${by}`}
              />
            </circle>
          )
        })}

        {/* ERP node boxes */}
        {ERP_NODES.map((node) => (
          <g key={node.id}>
            <rect
              x={node.x} y={node.y}
              width="56" height="28" rx="6"
              fill="rgba(17,24,39,0.95)"
              stroke="rgba(0,212,255,0.4)"
              strokeWidth="1"
            />
            <text
              x={node.x + 28} y={node.y + 18}
              textAnchor="middle"
              fill="#00FF87"
              fontSize="11"
              fontFamily="Geist Mono, monospace"
              fontWeight="700"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* PureEco core box */}
        <rect
          x={CORE.x} y={CORE.y}
          width="76" height="28" rx="6"
          fill="rgba(0,255,135,0.1)"
          stroke="#00FF87"
          strokeWidth="1.5"
        />
        <text
          x={CORE.x + 38} y={CORE.y + 18}
          textAnchor="middle"
          fill="#00FF87"
          fontSize="9"
          fontFamily="Geist Mono, monospace"
          fontWeight="700"
        >
          {CORE.label}
        </text>
      </svg>
    </div>
  )
}
