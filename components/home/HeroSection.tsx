import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-brand-slate to-brand-green py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Simplify Carbon Compliance and Drive Sustainable Growth
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          PureEco automates CBAM reporting, carbon tracking, and water compliance so your team stays ahead of regulations.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-brand-green-light text-white font-semibold px-8 py-4 rounded-lg text-base hover:opacity-90 transition-opacity btn-demo"
        >
          Request Demo
        </Link>
      </div>
    </section>
  )
}
