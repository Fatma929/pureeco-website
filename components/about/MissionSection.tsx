export function MissionSection() {
  return (
    <section className="py-20 px-6 md:px-12" style={{ background: '#0C2E19' }}>
      <div className="max-w-3xl mx-auto text-center">
        <span
          className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-4"
          style={{ background: 'rgba(0,163,255,0.12)', color: '#00A3FF', border: '1px solid rgba(0,163,255,0.25)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
        >
          Mission
        </span>
        <h2 className="text-3xl md:text-4xl mt-4 mb-6" style={{ color: '#FFFFFF', fontWeight: 600, letterSpacing: '-0.01em' }}>
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
          PureEco exists to make sustainability compliance effortless for industrial companies. We
          believe that meeting carbon, water, and CBAM regulations should not require armies of
          consultants or months of manual work. Our platform automates the hard parts so your team
          can focus on reducing emissions, not filing paperwork.
        </p>
      </div>
    </section>
  )
}
