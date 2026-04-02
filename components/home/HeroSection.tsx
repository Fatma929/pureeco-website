import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden scanlines" style={{ minHeight: '92vh' }}>
      {/* Cinematic video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.35) saturate(0.8)', animationDuration: '4s' }}
      >
        {/* Royalty-free industrial plant video — replace src with your own asset */}
        <source
          src="https://www.pexels.com/download/video/3571264/"
          type="video/mp4"
        />
      </video>

      {/* Dark-teal vignette overlay (60% opacity) */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,30,40,0.0) 0%, rgba(0,20,30,0.6) 60%, rgba(0,10,15,0.85) 100%)',
        }}
      />

      {/* Fallback gradient when video unavailable */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(135deg, #0D1117 0%, #0A1628 50%, #0D1117 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-[2] flex flex-col items-center justify-center text-center px-6 md:px-12" style={{ minHeight: '92vh' }}>
        {/* Technical label */}
        <span
          className="font-mono-label mb-6 px-3 py-1 rounded"
          style={{
            color: '#00D4FF',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            background: 'rgba(0, 212, 255, 0.06)',
          }}
        >
          Carbon Accounting Engine · v2.4.1
        </span>

        <h1
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 max-w-4xl"
          style={{
            color: '#FFFFFF',
            fontFamily: 'Inter, system-ui, sans-serif',
            textShadow: '0 0 60px rgba(0,255,135,0.15)',
          }}
        >
          Autonomous Carbon Accounting{' '}
          <span style={{ color: '#00FF87' }}>for Heavy Industry.</span>
        </h1>

        <p
          className="text-lg md:text-xl mb-10 max-w-2xl"
          style={{ color: 'rgba(226, 232, 240, 0.75)', fontFamily: 'Geist Mono, monospace' }}
        >
          Automated CBAM Compliance and Scope 1–3 Monitoring.
          From ERP to Audit-Ready Ledger.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-lg font-bold text-base btn-demo"
            style={{
              background: '#00FF87',
              color: '#0A0A0A',
            }}
          >
            Request Demo
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 rounded-lg font-semibold text-base transition-colors"
            style={{
              border: '1px solid rgba(226, 232, 240, 0.25)',
              color: 'rgba(226, 232, 240, 0.8)',
            }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
