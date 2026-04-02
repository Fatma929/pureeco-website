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
      <div
        className="rounded-lg p-8 text-center"
        style={{ background: 'rgba(0,255,135,0.06)', border: '1px solid rgba(0,255,135,0.3)' }}
      >
        <div className="text-4xl mb-4" style={{ color: '#00FF87' }}>✓</div>
        <h3 className="text-xl font-semibold mb-2" style={{ color: '#E2E8F0' }}>Message Sent!</h3>
        <p style={{ color: '#8B9AB0' }}>
          Thank you for reaching out. We&apos;ll be in touch with you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {status === 'error' && (
        <div
          className="rounded-md p-4 text-sm"
          style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.3)', color: '#FCA5A5' }}
        >
          Something went wrong. Please try again.
        </div>
      )}

      {(['name', 'email', 'company'] as const).map((field) => (
        <div key={field}>
          <label
            htmlFor={field}
            className="block text-sm font-medium mb-1 font-mono-label"
            style={{ color: '#8B9AB0' }}
          >
            {field.charAt(0).toUpperCase() + field.slice(1)} <span style={{ color: '#FF4D4D' }}>*</span>
          </label>
          <input
            id={field}
            name={field}
            type={field === 'email' ? 'email' : 'text'}
            value={formState[field]}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-2.5 focus:outline-none transition-colors"
            style={{
              background: '#111827',
              border: errors[field] ? '1px solid rgba(239,68,68,0.6)' : '1px solid rgba(0,212,255,0.2)',
              color: '#E2E8F0',
            }}
            placeholder={field === 'email' ? 'you@company.com' : field === 'name' ? 'Your full name' : 'Your company name'}
          />
          {errors[field] && (
            <p className="mt-1 text-sm" style={{ color: '#FCA5A5' }}>{errors[field]}</p>
          )}
        </div>
      ))}

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1 font-mono-label" style={{ color: '#8B9AB0' }}>
          Message <span style={{ color: '#FF4D4D' }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formState.message}
          onChange={handleChange}
          className="w-full rounded-md px-4 py-2.5 focus:outline-none resize-none transition-colors"
          style={{
            background: '#111827',
            border: errors.message ? '1px solid rgba(239,68,68,0.6)' : '1px solid rgba(0,212,255,0.2)',
            color: '#E2E8F0',
          }}
          placeholder="Tell us about your sustainability goals..."
        />
        {errors.message && (
          <p className="mt-1 text-sm" style={{ color: '#FCA5A5' }}>{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-md px-6 py-3 font-bold transition-all btn-demo disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ background: '#00FF87', color: '#0A0A0A' }}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
