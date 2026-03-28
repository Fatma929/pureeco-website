import { ContactForm } from '@/components/ContactForm'

export const dynamic = 'force-static'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-brand-slate sm:text-5xl">
            Request a Demo
          </h1>
          <p className="mt-4 text-lg text-brand-slate-muted">
            Tell us about your sustainability goals and we&apos;ll be in touch shortly.
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  )
}
