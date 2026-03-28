import { NextRequest, NextResponse } from 'next/server'
import { validateContactPayload, ContactPayload } from '@/lib/validateContact'

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json()
    const errors = validateContactPayload(body)

    if (Object.keys(errors).length > 0) {
      // Determine which error message to return
      if (errors.email === 'Please enter a valid email address') {
        return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
      }
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    console.log('Contact form submission:', body)
    return NextResponse.json({ success: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
