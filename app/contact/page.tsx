import { ContactForm } from '@/components/ContactForm'

export const dynamic = 'force-static'

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: '#FFFFFF' }}>
      <section className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <div className="mb-10 text-center">
          <span
            className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-4"
            style={{ background: 'rgba(74,222,128,0.1)', color: '#16a34a', border: '1px solid rgba(74,222,128,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            Contact
          </span>
          <h1 className="text-4xl font-semibold sm:text-5xl mt-2" style={{ color: '#111827', letterSpacing: '-0.02em' }}>
            Request a Demo
          </h1>
          <p className="mt-4 text-lg" style={{ color: '#6b7280' }}>
            Tell us about your sustainability goals and we&apos;ll be in touch shortly.
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  )
}
