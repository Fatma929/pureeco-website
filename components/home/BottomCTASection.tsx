import Link from 'next/link'

export function BottomCTASection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-r from-brand-green to-brand-slate">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Simplify Your Compliance?
        </h2>
        <p className="text-white/80 text-lg mb-10">
          Join industrial leaders using PureEco to automate reporting and stay audit-ready.
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
