import Link from 'next/link'

export function AboutCTASection() {
  return (
    <section
      className="py-24 px-6 md:px-12 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D1117 0%, #0A1628 50%, #0D1117 100%)',
        borderTop: '1px solid rgba(0,255,135,0.12)',
      }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '500px',
          height: '250px',
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.07) 0%, transparent 70%)',
        }}
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <span className="font-mono-label block mb-4" style={{ color: '#00D4FF' }}>Contact</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#FFFFFF' }}>
          Talk to Our Sustainability Experts
        </h2>
        <p className="text-lg mb-10" style={{ color: '#8B9AB0' }}>
          Ready to simplify your compliance journey? Our team is here to help you get started.
        </p>
        <Link
          href="/contact"
          className="inline-block font-bold px-8 py-4 rounded-lg text-base btn-demo"
          style={{ background: '#00FF87', color: '#0A0A0A' }}
        >
          Get in Touch
        </Link>
      </div>
    </section>
  )
}
