'use client'

import { Award, BadgeCheck, Trophy, Users } from 'lucide-react'
import { SectionHeading, SectionShell } from './section-heading'
import { Reveal, RevealGroup, RevealItem } from '@/components/effects/reveal'
import { certificates, achievements, memberships } from '@/lib/portfolio-data'

export function Certificates() {
  return (
    <SectionShell id="certificates">
      <SectionHeading
        index="05"
        label="credentials"
        title="Certifications & recognition"
        description="Certificates, professional memberships, and achievements along the way."
      />

      {/* Certificates */}
      <RevealGroup className="grid gap-5 md:grid-cols-3">
        {certificates.map((c) => (
          <RevealItem key={c.title}>
            <div className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-all hover:glow-sm">
              <div
                aria-hidden
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/15 blur-2xl transition-opacity group-hover:opacity-100"
              />
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold leading-snug">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              <p className="mt-3 flex items-center gap-1.5 font-mono text-xs text-primary">
                <BadgeCheck className="h-3.5 w-3.5" />
                {c.date}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* Memberships + Achievements */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass h-full rounded-2xl p-7">
            <div className="mb-5 flex items-center gap-2 text-primary">
              <Users className="h-5 w-5" />
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Professional Memberships
              </h3>
            </div>
            <ul className="space-y-4">
              {memberships.map((m) => (
                <li
                  key={m.org}
                  className="flex items-center justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-medium">{m.org}</p>
                    <p className="text-xs text-muted-foreground">{m.role}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {m.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass h-full rounded-2xl p-7">
            <div className="mb-5 flex items-center gap-2 text-primary">
              <Trophy className="h-5 w-5" />
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Achievements
              </h3>
            </div>
            <ul className="space-y-4">
              {achievements.map((a) => (
                <li key={a.title} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary glow-sm" />
                  <div>
                    <p className="text-sm font-medium">{a.title}</p>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {a.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}
