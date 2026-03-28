'use client'

import { useState } from 'react'
import { validateContactPayload, ContactPayload, FormErrors } from '@/lib/validateContact'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const initialState: ContactPayload = {
  name: '',
  email: '',
  company: '',
  message: '',
}

export function ContactForm() {
  const [formState, setFormState] = useState<ContactPayload>(initialState)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<FormErrors>({})

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
    // Clear the error for this field as the user types
    if (errors[name as keyof ContactPayload]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const validationErrors = validateContactPayload(formState)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')
    setErrors({})

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-brand-green/10 border border-brand-green p-8 text-center">
        <div className="text-brand-green text-4xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-brand-slate mb-2">Message Sent!</h3>
        <p className="text-brand-slate-muted">
          Thank you for reaching out. We&apos;ll be in touch with you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {status === 'error' && (
        <div className="rounded-md bg-red-50 border border-red-200 p-4 text-red-700 text-sm">
          Something went wrong. Please try again.
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-slate mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formState.name}
          onChange={handleChange}
          className={`w-full rounded-md border px-4 py-2.5 text-brand-slate placeholder-brand-slate-muted focus:outline-none focus:ring-2 focus:ring-brand-green-light ${
            errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
          }`}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-slate mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          className={`w-full rounded-md border px-4 py-2.5 text-brand-slate placeholder-brand-slate-muted focus:outline-none focus:ring-2 focus:ring-brand-green-light ${
            errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
          }`}
          placeholder="you@company.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-brand-slate mb-1">
          Company <span className="text-red-500">*</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formState.company}
          onChange={handleChange}
          className={`w-full rounded-md border px-4 py-2.5 text-brand-slate placeholder-brand-slate-muted focus:outline-none focus:ring-2 focus:ring-brand-green-light ${
            errors.company ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
          }`}
          placeholder="Your company name"
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-600">{errors.company}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-slate mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formState.message}
          onChange={handleChange}
          className={`w-full rounded-md border px-4 py-2.5 text-brand-slate placeholder-brand-slate-muted focus:outline-none focus:ring-2 focus:ring-brand-green-light resize-none ${
            errors.message ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
          }`}
          placeholder="Tell us about your sustainability goals..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-md bg-brand-green px-6 py-3 text-white font-semibold hover:bg-brand-green-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
