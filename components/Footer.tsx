import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#0D1117', borderTop: '1px solid rgba(139,154,176,0.12)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="font-bold text-lg" style={{ color: '#00FF87' }}>
            PureEco <span style={{ color: '#8B9AB0', fontWeight: 400 }}>for Sustainability Solutions</span>
          </p>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-mono-label transition-colors hover:text-white"
                style={{ color: '#8B9AB0' }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ borderTop: '1px solid rgba(139,154,176,0.1)' }}
        >
          <p className="text-sm" style={{ color: '#8B9AB0' }}>
            &copy; {year} PureEco for Sustainability Solutions. All rights reserved.
          </p>
          <div className="flex gap-4">
            {legalLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm transition-colors hover:text-white"
                style={{ color: '#8B9AB0' }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
