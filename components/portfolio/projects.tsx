'use client'

import Image from 'next/image'
import { ExternalLink, Star, Circle } from 'lucide-react'
import { GithubIcon } from '@/components/icons'
import { SectionHeading, SectionShell } from './section-heading'
import { RevealGroup, RevealItem } from '@/components/effects/reveal'
import { projects } from '@/lib/portfolio-data'

function StatusBadge({ status }: { status: string }) {
  const active = status.toLowerCase() === 'active'
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${
        active
          ? 'bg-primary/15 text-primary'
          : 'bg-pop/15 text-pop'
      }`}
    >
      <Circle
        className={`h-2 w-2 ${active ? 'fill-primary' : 'fill-pop'}`}
      />
      {status}
    </span>
  )
}

export function Projects() {
  return (
    <SectionShell id="projects">
      <SectionHeading
        index="04"
        label="projects"
        title="Featured work"
        description="Security-focused builds exploring encrypted networking and interactive learning."
      />

      <RevealGroup className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <RevealItem key={p.title}>
            <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-all hover:glow-md">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={p.image || '/placeholder.svg'}
                  alt={`${p.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  {p.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-background/70 px-2.5 py-1 text-[11px] font-medium text-pop backdrop-blur">
                      <Star className="h-3 w-3 fill-pop" />
                      Featured
                    </span>
                  )}
                </div>
                <div className="absolute right-4 top-4">
                  <StatusBadge status={p.status} />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-0.5 font-mono text-xs text-primary">
                  {p.subtitle}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-background/40 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Code
                  </a>
                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground/50">
                      <ExternalLink className="h-4 w-4" />
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </SectionShell>
  )
}
