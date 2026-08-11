'use client'

import { motion } from 'motion/react'
import {
  Code2,
  ShieldCheck,
  Network,
  Cloud,
  MonitorCog,
  Wrench,
  Users,
} from 'lucide-react'
import { SectionHeading, SectionShell } from './section-heading'
import { RevealGroup, RevealItem } from '@/components/effects/reveal'
import { skillGroups } from '@/lib/portfolio-data'

const icons: Record<string, typeof Code2> = {
  Programming: Code2,
  Cybersecurity: ShieldCheck,
  Networking: Network,
  Cloud: Cloud,
  'Operating Systems': MonitorCog,
  Tools: Wrench,
  'Soft Skills': Users,
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-foreground/90">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-secondary via-primary to-pop glow-sm"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <SectionShell id="skills">
      <SectionHeading
        index="03"
        label="skills"
        title="Technical toolkit"
        description="Categorized skills spanning offensive fundamentals, defensive hygiene, and the systems in between."
      />

      <RevealGroup
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.07}
      >
        {skillGroups.map((group) => {
          const Icon = icons[group.category] ?? Code2
          return (
            <RevealItem key={group.category}>
              <div className="glass h-full rounded-2xl p-6 transition-all hover:glow-sm">
                <div className="mb-5 flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold">{group.category}</h3>
                </div>
                <div className="space-y-4">
                  {group.skills.map((s) => (
                    <SkillBar key={s.name} name={s.name} level={s.level} />
                  ))}
                </div>
              </div>
            </RevealItem>
          )
        })}
      </RevealGroup>
    </SectionShell>
  )
}
