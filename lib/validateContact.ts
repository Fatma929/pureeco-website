export type ContactPayload = {
  name: string
  email: string
  company: string
  message: string
}

export type FormErrors = Partial<Record<keyof ContactPayload, string>>

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactPayload(payload: ContactPayload): FormErrors {
  const errors: FormErrors = {}

  if (!payload.name || payload.name.trim().length === 0) {
    errors.name = 'This field is required'
  }

  if (!payload.email || payload.email.trim().length === 0) {
    errors.email = 'This field is required'
  } else if (!EMAIL_REGEX.test(payload.email.trim())) {
    errors.email = 'Please enter a valid email address'
  }

  if (!payload.company || payload.company.trim().length === 0) {
    errors.company = 'This field is required'
  }

  if (!payload.message || payload.message.trim().length === 0) {
    errors.message = 'This field is required'
  }

  return errors
}
