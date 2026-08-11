'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { Particles } from '@/components/effects/particles'
import { TerminalTyping } from '@/components/effects/terminal-typing'
import { profile } from '@/lib/portfolio-data'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 180])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-svh items-center justify-center overflow-hidden noise-overlay"
    >
      {/* Layered parallax background */}
      <div className="bg-grid bg-grid-fade absolute inset-0" />
      <Particles />
      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px] animate-pulse-glow"
      />
      <div
        aria-hidden
        className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-secondary/30 blur-[120px]"
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-6 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for internships & junior security roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mt-4 text-lg font-medium sm:text-xl"
        >
          <span className="accent-gradient">{profile.role}</span>
          <span className="mx-2 text-muted-foreground">·</span>
          <span className="text-muted-foreground">{profile.tagline}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="glass mt-8 w-full max-w-lg rounded-xl px-4 py-3 text-left font-mono text-sm glow-sm"
        >
          <div className="mb-2 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-pop/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
            <span className="ml-2 text-xs text-muted-foreground">
              renisha@sec ~ %
            </span>
          </div>
          <TerminalTyping
            lines={[
              'whoami --role',
              'scan --target curiosity --deep',
              'forensics --analyze evidence.img',
              'learn --topic threat-analysis',
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:glow-md"
          >
            View Projects
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="glass flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-colors hover:bg-primary/10"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex items-center gap-4"
        >
          {[
            { icon: GithubIcon, href: profile.github, label: 'GitHub' },
            { icon: LinkedinIcon, href: profile.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="glass grid h-11 w-11 place-items-center rounded-xl text-muted-foreground transition-all hover:text-primary hover:glow-sm"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  )
}
