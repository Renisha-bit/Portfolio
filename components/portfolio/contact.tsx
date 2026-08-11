'use client'

import { useState, type FormEvent } from 'react'
import {
  Mail,
  Download,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { SectionHeading, SectionShell } from './section-heading'
import { Reveal } from '@/components/effects/reveal'
import { profile } from '@/lib/portfolio-data'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setMessage('Message sent. I will get back to you soon.')
      form.reset()
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please email me directly.')
    }
  }

  const channels = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: LinkedinIcon, label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedin },
    { icon: GithubIcon, label: 'GitHub', value: profile.githubHandle, href: profile.github },
  ]

  return (
    <SectionShell id="contact">
      <SectionHeading
        index="06"
        label="contact"
        title="Let's connect"
        description="Open to internships, junior security roles, and collaboration. Reach out through any channel."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="glass flex h-full flex-col rounded-2xl p-7">
            <div className="space-y-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-background/40 p-4 transition-all hover:border-primary/40 hover:glow-sm"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="truncate text-sm font-medium">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <a
              href={profile.resumeUrl}
              download
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-all hover:glow-md"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <form onSubmit={onSubmit} className="glass rounded-2xl p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name">
                <input
                  name="name"
                  required
                  maxLength={100}
                  placeholder="Your name"
                  className="input-base"
                />
              </Field>
              <Field label="Email" name="email">
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={160}
                  placeholder="you@example.com"
                  className="input-base"
                />
              </Field>
            </div>
            <Field label="Subject" name="subject" className="mt-4">
              <input
                name="subject"
                required
                maxLength={140}
                placeholder="What's this about?"
                className="input-base"
              />
            </Field>
            <Field label="Message" name="message" className="mt-4">
              <textarea
                name="message"
                required
                maxLength={2000}
                rows={5}
                placeholder="Write your message…"
                className="input-base resize-none"
              />
            </Field>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:glow-md disabled:opacity-60"
            >
              {status === 'loading' ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              Send message
            </button>

            {message && (
              <p
                className={`mt-4 flex items-center gap-2 text-sm ${
                  status === 'success' ? 'text-primary' : 'text-destructive'
                }`}
                role="status"
              >
                {status === 'success' ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <AlertCircle className="h-4 w-4" />
                )}
                {message}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </SectionShell>
  )
}

function Field({
  label,
  name,
  children,
  className,
}: {
  label: string
  name: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <label htmlFor={name} className={`block ${className ?? ''}`}>
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}
