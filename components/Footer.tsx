import Link from 'next/link'
import { ShieldCheck, Lock, Globe } from 'lucide-react'
import { PureEcoLogo } from './PureEcoLogo'

const navLinks   = [{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }]
const legalLinks = [{ href: '/privacy', label: 'Privacy Policy' }, { href: '/terms', label: 'Terms of Service' }]
const badges     = [
  { icon: Lock,        label: 'AES-256 Encryption' },
  { icon: ShieldCheck, label: 'SOC 2 Type II' },
  { icon: Globe,       label: 'EU Data Sovereignty' },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: '#1E2328', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      {/* Security strip */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,61,51,0.3)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#4ADE80' }} />
              <span className="font-mono-label" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.65rem' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Link href="/" aria-label="PureEco home">
            <PureEcoLogo height={28} />
          </Link>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-6">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            &copy; {year} PureEco for Sustainability Solutions. All rights reserved.
          </p>
          <div className="flex gap-4">
            {legalLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
