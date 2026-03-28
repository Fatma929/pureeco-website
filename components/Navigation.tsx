'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation(): JSX.Element {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-brand-slate text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" className="text-brand-green-light font-bold text-xl tracking-tight">
            PureEco
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={
                  pathname === href
                    ? 'text-brand-green-light font-semibold underline underline-offset-4'
                    : 'text-white hover:text-brand-green-light transition-colors'
                }
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-4 py-2 rounded bg-brand-green-light text-white font-semibold hover:bg-brand-green transition-colors btn-demo"
            >
              Request Demo
            </Link>
          </div>

          {/* Hamburger button — visible below md */}
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
        <div className="md:hidden bg-brand-slate border-t border-brand-slate-muted px-4 pb-4 flex flex-col gap-3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={
                pathname === href
                  ? 'text-brand-green-light font-semibold underline underline-offset-4 py-1'
                  : 'text-white hover:text-brand-green-light transition-colors py-1'
              }
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-2 rounded bg-brand-green-light text-white font-semibold text-center hover:bg-brand-green transition-colors btn-demo"
          >
            Request Demo
          </Link>
        </div>
      )}
    </nav>
  )
}
