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

export function Footer(): JSX.Element {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-slate text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Company name */}
          <p className="text-brand-green-light font-bold text-lg">
            PureEco for Sustainability Solutions
          </p>

          {/* Nav links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-brand-slate-muted hover:text-white transition-colors text-sm"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-brand-slate-muted pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Copyright */}
          <p className="text-brand-slate-muted text-sm">
            &copy; {year} PureEco for Sustainability Solutions. All rights reserved.
          </p>

          {/* Legal links */}
          <div className="flex gap-4">
            {legalLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-brand-slate-muted hover:text-white transition-colors text-sm"
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
