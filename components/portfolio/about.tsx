'use client'

import { Target, Compass, GraduationCap } from 'lucide-react'
import { SectionHeading, SectionShell } from './section-heading'
import { Reveal, RevealGroup, RevealItem } from '@/components/effects/reveal'
import { AnimatedCounter } from '@/components/effects/animated-counter'
import { profile, stats, timeline, education } from '@/lib/portfolio-data'

export function About() {
  return (
    <SectionShell id="about">
      <SectionHeading
        index="01"
        label="about"
        title="Building a foundation in security"
        description="A short introduction to who I am and where I'm headed."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="glass h-full rounded-2xl p-7">
            <p className="text-pretty text-lg leading-relaxed text-foreground/90">
              {profile.summary}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-background/40 p-4">
                <div className="mb-2 flex items-center gap-2 text-primary">
                  <Compass className="h-4 w-4" />
                  <span className="text-sm font-semibold">Career Objective</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {profile.objective}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background/40 p-4">
                <div className="mb-2 flex items-center gap-2 text-primary">
                  <Target className="h-4 w-4" />
                  <span className="text-sm font-semibold">Focus Areas</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  System security, threat analysis, digital forensics, and clear
                  technical documentation.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 gap-4 lg:col-span-2">
          {stats.map((s) => (
            <RevealItem key={s.label}>
              <div className="glass flex h-full flex-col justify-center rounded-2xl p-6 text-center transition-all hover:glow-sm">
                <div className="text-3xl font-bold text-glow sm:text-4xl">
                  <AnimatedCounter
                    value={s.value}
                    decimals={'decimals' in s ? (s.decimals as number) : 0}
                    suffix={s.suffix}
                  />
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {/* Timeline + education */}
      <div className="mt-8 grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="glass rounded-2xl p-7">
            <h3 className="mb-6 font-mono text-sm text-primary">// journey</h3>
            <ol className="relative ml-3 border-l border-border">
              {timeline.map((t, i) => (
                <li key={i} className="mb-6 ml-6 last:mb-0">
                  <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary glow-sm" />
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-mono text-xs text-primary">
                      {t.year}
                    </span>
                    <span className="text-sm font-semibold">{t.title}</span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {t.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <RevealGroup className="grid gap-4 lg:col-span-2">
          {education.map((e) => (
            <RevealItem key={e.institution}>
              <div className="glass rounded-2xl p-6 transition-all hover:glow-sm">
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <GraduationCap className="h-5 w-5" />
                  <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-medium">
                    {e.highlight}
                  </span>
                </div>
                <h4 className="text-base font-semibold">{e.institution}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{e.degree}</p>
                <p className="mt-2 font-mono text-xs text-muted-foreground">
                  {e.period}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </SectionShell>
  )
}
