'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 text-white"
      style={{
        background: 'rgba(10, 10, 10, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(139, 154, 176, 0.18)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl tracking-tight" style={{ color: '#00FF87' }}>
            Pure<span className="text-white">Eco</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-mono-label transition-colors"
                style={{
                  color: pathname === href ? '#00FF87' : '#8B9AB0',
                  borderBottom: pathname === href ? '1px solid #00FF87' : 'none',
                  paddingBottom: pathname === href ? '2px' : '0',
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-4 py-2 rounded font-semibold text-sm btn-demo"
              style={{
                background: 'transparent',
                border: '1px solid #00FF87',
                color: '#00FF87',
              }}
            >
              Request Demo
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-4 flex flex-col gap-3"
          style={{ borderTop: '1px solid rgba(139, 154, 176, 0.18)' }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-mono-label py-2 transition-colors"
              style={{ color: pathname === href ? '#00FF87' : '#8B9AB0' }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-2 rounded font-semibold text-sm text-center btn-demo"
            style={{ border: '1px solid #00FF87', color: '#00FF87' }}
          >
            Request Demo
          </Link>
        </div>
      )}
    </nav>
  )
}
