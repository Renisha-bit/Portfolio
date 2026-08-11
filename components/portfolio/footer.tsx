import { Mail, ShieldCheck } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { profile, navItems } from '@/lib/portfolio-data'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-border">
      <div className="bg-grid bg-grid-fade absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-mono text-sm font-semibold"
            >
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span>renisha</span>
              <span className="text-primary">.sec</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Cybersecurity student & digital forensics enthusiast building a
              foundation across offensive and defensive security.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
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
                className="glass grid h-10 w-10 place-items-center rounded-lg text-muted-foreground transition-all hover:text-primary hover:glow-sm"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Secured & built with intent.
          </p>
        </div>
      </div>
    </footer>
  )
}
