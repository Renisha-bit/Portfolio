import { NextResponse } from 'next/server'

/**
 * Contact endpoint with validation, spam protection, and a graceful mailto fallback.
 * Configure an email provider before treating this endpoint as a delivery service.
 */

const IP_RE = /^(?:\d{1,3}(?:\.\d{1,3}){3}|[a-fA-F0-9:]+)$/

function getClientKey(req: Request) {
  const forwarded = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  return forwarded && IP_RE.test(forwarded) ? forwarded : 'unknown'
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isSpam(value: unknown) {
  return typeof value === 'string' && value.trim().length > 0
}

function mailtoFallback(email: string, subject: string, message: string) {
  const to = process.env.CONTACT_EMAIL_TO || 'sp3llmanvictoria@gmail.com'
  const params = new URLSearchParams({ subject, body: message })
  return `mailto:${to}?${params.toString()}`
}

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
  const ip = getClientKey(req)

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

  if (!isRecord(body)) {
    return NextResponse.json({ error: 'Invalid payload.' }, { status: 400 })
  }

  if (isSpam(body.company_hp)) {
    return NextResponse.json({ ok: true })
  }

  const name = clean(body.name, 100)
  const email = clean(body.email, 160)
  const subject = clean(body.subject, 140)
  const message = clean(body.message, 2000)

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

  const fallbackUrl = mailtoFallback(email, subject, `From: ${name} <${email}>\n\n${message}`)
  return NextResponse.json(
    {
      ok: false,
      fallbackUrl,
      error: 'Email delivery is not configured. Your email app can open a draft instead.',
    },
    { status: 503 },
  )
}
