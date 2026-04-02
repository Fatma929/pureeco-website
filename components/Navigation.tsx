'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { PureEcoLogo } from './PureEcoLogo'

const navLinks = [
  { href: '/',        label: 'Home'    },
  { href: '/about',   label: 'About'   },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const pathname  = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(36,41,46,0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" aria-label="PureEco home">
            <PureEcoLogo height={32} />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium transition-colors"
                style={{
                  color: pathname === href ? '#4ADE80' : 'rgba(255,255,255,0.65)',
                  letterSpacing: '0.04em',
                  borderBottom: pathname === href ? '1px solid #4ADE80' : 'none',
                  paddingBottom: pathname === href ? '2px' : '0',
                }}
              >
                {label}
              </Link>
            ))}
            <Link href="/contact" className="btn-lime ml-2 text-sm">
              Request Demo
              <ArrowRight className="w-3.5 h-3.5" style={{ color: '#1A1A1A' }} />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(p => !p)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-4 pb-4 flex flex-col gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium transition-colors"
              style={{ color: pathname === href ? '#4ADE80' : 'rgba(255,255,255,0.65)' }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-lime mt-2 justify-center text-sm"
          >
            Request Demo
            <ArrowRight className="w-3.5 h-3.5" style={{ color: '#1A1A1A' }} />
          </Link>
        </div>
      )}
    </nav>
  )
}
