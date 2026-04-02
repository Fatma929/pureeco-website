'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { validateContactPayload, ContactPayload, FormErrors } from '@/lib/validateContact'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const initialState: ContactPayload = { name: '', email: '', company: '', message: '' }

export function ContactForm() {
  const [formState, setFormState] = useState<ContactPayload>(initialState)
  const [status, setStatus]       = useState<FormStatus>('idle')
  const [errors, setErrors]       = useState<FormErrors>({})

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactPayload]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const validationErrors = validateContactPayload(formState)
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return }
    setStatus('submitting'); setErrors({})
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formState) })
      setStatus(res.ok ? 'success' : 'error')
    } catch { setStatus('error') }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl p-8 text-center" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
        <div className="text-4xl mb-4" style={{ color: '#16a34a' }}>✓</div>
        <h3 className="text-xl mb-2" style={{ color: '#111827', fontWeight: 600 }}>Message Sent!</h3>
        <p style={{ color: '#6b7280' }}>Thank you for reaching out. We&apos;ll be in touch with you shortly.</p>
      </div>
    )
  }

  const inputStyle = (field: keyof ContactPayload) => ({
    background: '#FFFFFF',
    border: errors[field] ? '1px solid #ef4444' : '1px solid #d1d5db',
    color: '#111827',
    borderRadius: '8px',
    padding: '0.625rem 1rem',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.15s ease',
    fontSize: '0.95rem',
  })

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === 'error' && (
        <div className="rounded-lg p-4 text-sm" style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626' }}>
          Something went wrong. Please try again.
        </div>
      )}

      {(['name', 'email', 'company'] as const).map((field) => (
        <div key={field}>
          <label htmlFor={field} className="block text-sm font-medium mb-1.5" style={{ color: '#374151' }}>
            {field.charAt(0).toUpperCase() + field.slice(1)} <span style={{ color: '#ef4444' }}>*</span>
          </label>
          <input
            id={field} name={field}
            type={field === 'email' ? 'email' : 'text'}
            value={formState[field]}
            onChange={handleChange}
            style={inputStyle(field)}
            onFocus={(e) => { e.currentTarget.style.borderColor = '#4ADE80'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(74,222,128,0.15)' }}
            onBlur={(e)  => { e.currentTarget.style.borderColor = errors[field] ? '#ef4444' : '#d1d5db'; e.currentTarget.style.boxShadow = 'none' }}
            placeholder={field === 'email' ? 'you@company.com' : field === 'name' ? 'Your full name' : 'Your company name'}
          />
          {errors[field] && <p className="mt-1 text-sm" style={{ color: '#ef4444' }}>{errors[field]}</p>}
        </div>
      ))}

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: '#374151' }}>
          Message <span style={{ color: '#ef4444' }}>*</span>
        </label>
        <textarea
          id="message" name="message" rows={5}
          value={formState.message} onChange={handleChange}
          style={{ ...inputStyle('message'), resize: 'none' }}
          onFocus={(e) => { e.currentTarget.style.borderColor = '#4ADE80'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(74,222,128,0.15)' }}
          onBlur={(e)  => { e.currentTarget.style.borderColor = errors.message ? '#ef4444' : '#d1d5db'; e.currentTarget.style.boxShadow = 'none' }}
          placeholder="Tell us about your sustainability goals..."
        />
        {errors.message && <p className="mt-1 text-sm" style={{ color: '#ef4444' }}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-lime w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
        {status !== 'submitting' && <ArrowRight className="w-4 h-4" style={{ color: '#1A1A1A' }} />}
      </button>
    </form>
  )
}
