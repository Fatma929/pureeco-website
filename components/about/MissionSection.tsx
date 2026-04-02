export function MissionSection() {
  return (
    <section className="py-20 px-6 md:px-12" style={{ background: '#0A0A0A' }}>
      <div className="max-w-3xl mx-auto text-center">
        <span className="font-mono-label block mb-4" style={{ color: '#00D4FF' }}>Mission</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: '#FFFFFF' }}>Our Mission</h2>
        <p className="text-lg leading-relaxed" style={{ color: '#8B9AB0' }}>
          PureEco exists to make sustainability compliance effortless for industrial companies. We
          believe that meeting carbon, water, and CBAM regulations should not require armies of
          consultants or months of manual work. Our platform automates the hard parts so your team
          can focus on reducing emissions, not filing paperwork.
        </p>
      </div>
    </section>
  )
}
