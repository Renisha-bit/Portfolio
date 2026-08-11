import { NextResponse } from 'next/server'

/**
 * Contact endpoint (Phase 1: validation + logging).
 * Phase 2 will persist submissions to the database and/or forward via email.
 * Includes basic in-memory rate limiting and input validation/sanitization.
 */

const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5
const hits = new Map<string, { count: number; reset: number }>()

function rateLimit(ip: string) {
  const now = Date.now()
  const entry = hits.get(ip)
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS })
    return true
  }
  if (entry.count >= MAX_PER_WINDOW) return false
  entry.count += 1
  return true
}

function clean(value: unknown, max: number) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, max)
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again shortly.' },
      { status: 429 },
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid payload.' }, { status: 400 })
  }

  const data = body as Record<string, unknown>
  const name = clean(data.name, 100)
  const email = clean(data.email, 160)
  const subject = clean(data.subject, 140)
  const message = clean(data.message, 2000)

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: 'All fields are required.' },
      { status: 400 },
    )
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: 'Please provide a valid email address.' },
      { status: 400 },
    )
  }

  // Phase 1: log only. Phase 2: persist to DB / send email.
  console.log('[v0] contact submission:', { name, email, subject })

  return NextResponse.json({ ok: true })
}
