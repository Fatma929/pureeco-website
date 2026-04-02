import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AboutCTASection() {
  return (
    <section
      className="py-24 px-6 md:px-12 relative overflow-hidden"
      style={{ background: '#0C2E19', borderTop: '1px solid rgba(255,255,255,0.1)' }}
    >
      {/* Subtle glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ width: '500px', height: '250px', background: 'radial-gradient(ellipse, rgba(0,163,255,0.1) 0%, transparent 70%)' }}
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <span
          className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-4"
          style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.2)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
        >
          Contact
        </span>
        <h2 className="text-3xl md:text-4xl mt-4 mb-4" style={{ color: '#FFFFFF', fontWeight: 600, letterSpacing: '-0.01em' }}>
          Talk to Our Sustainability Experts
        </h2>
        <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Ready to simplify your compliance journey? Our team is here to help you get started.
        </p>
        <Link href="/contact" className="btn-lime">
          Get in Touch
          <ArrowRight className="w-4 h-4" style={{ color: '#1A1A1A' }} />
        </Link>
      </div>
    </section>
  )
}
