export function AboutHeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: '50vh',
        backgroundImage: 'url(/pexels-tieugiang007-35246230.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundColor: '#1a3a5c',
      }}
    >
      {/* Light blue-tinted overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'rgba(20, 60, 100, 0.45)' }}
      />
      {/* Bottom fade into baby blue */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[2]"
        style={{ background: 'linear-gradient(to bottom, transparent, #DAEEF9)' }}
      />

      <div
        className="relative z-[3] flex flex-col items-center justify-center text-center px-6 md:px-12"
        style={{ minHeight: '50vh' }}
      >
        <span
          className="font-mono-label mb-4 px-4 py-1.5 rounded-full"
          style={{
            color: '#FFFFFF',
            border: '1px solid rgba(255,255,255,0.3)',
            background: 'rgba(255,255,255,0.1)',
            fontSize: '0.65rem',
          }}
        >
          About PureEco
        </span>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl"
          style={{
            color: '#FFFFFF',
            fontWeight: 600,
            letterSpacing: '0.01em',
            textShadow: '0 2px 32px rgba(0,0,0,0.5)',
          }}
        >
          Built for the Industries That Shape Our Planet.
        </h1>
      </div>
    </section>
  )
}
