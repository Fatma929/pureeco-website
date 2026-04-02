import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function BottomCTASection() {
  return (
    <section
      className="py-28 px-6 md:px-12 relative overflow-hidden"
      style={{ background: '#0C2E19', borderTop: '1px solid rgba(255,255,255,0.1)' }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ width: '700px', height: '350px', background: 'radial-gradient(ellipse, rgba(74,222,128,0.08) 0%, transparent 70%)' }}
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <span className="section-label mb-4 inline-block">Take Action Now</span>
        <h2
          className="text-3xl md:text-5xl mt-4 mb-5 leading-tight"
          style={{ color: '#FFFFFF', fontWeight: 500, letterSpacing: '0.01em' }}
        >
          Ready to see your real carbon &amp; compliance risk?
        </h2>
        <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Get a personalised CBAM readiness assessment and see exactly where your exposure lies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/contact" className="btn-lime text-base">
            Book a Demo
            <ArrowRight className="w-4 h-4" style={{ color: '#1A1A1A' }} />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-8 py-4 rounded-full font-medium text-base transition-all"
            style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)' }}
          >
            Get Your CBAM Readiness Assessment
            <ArrowRight className="w-4 h-4" style={{ color: '#4ADE80' }} />
          </Link>
        </div>
        <p className="font-mono-label" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.65rem' }}>
          ⚠ CBAM financial obligations begin January 2026 — most deployments take 6 weeks
        </p>
      </div>
    </section>
  )
}
