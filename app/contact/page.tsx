import { ContactForm } from '@/components/ContactForm'

export const dynamic = 'force-static'

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: '#0A0A0A' }}>
      <section className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <div className="mb-10 text-center">
          <span className="font-mono-label block mb-3" style={{ color: '#00D4FF' }}>Contact</span>
          <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: '#FFFFFF' }}>
            Request a Demo
          </h1>
          <p className="mt-4 text-lg" style={{ color: '#8B9AB0' }}>
            Tell us about your sustainability goals and we&apos;ll be in touch shortly.
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  )
}
