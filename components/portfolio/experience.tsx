'use client'

import { Briefcase, ChevronRight } from 'lucide-react'
import { SectionHeading, SectionShell } from './section-heading'
import { RevealGroup, RevealItem } from '@/components/effects/reveal'
import { experience } from '@/lib/portfolio-data'

export function Experience() {
  return (
    <SectionShell id="experience">
      <SectionHeading
        index="02"
        label="experience"
        title="Volunteering & communities"
        description="Hands-on involvement across student security branches, CTF teams, and cloud communities."
      />

      <RevealGroup className="grid gap-5 md:grid-cols-3">
        {experience.map((e) => (
          <RevealItem key={e.org}>
            <div className="glass group flex h-full flex-col rounded-2xl p-6 transition-all hover:glow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                  {e.period}
                </span>
              </div>
              <h3 className="text-base font-semibold leading-snug">{e.org}</h3>
              <p className="mt-1 text-sm text-primary">{e.role}</p>
              <ul className="mt-4 space-y-2">
                {e.points.map((p, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </SectionShell>
  )
}
