import { Reveal } from '@/components/effects/reveal'

export function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string
  label: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <div className="mb-3 flex items-center justify-center gap-2 font-mono text-xs text-primary">
        <span className="text-muted-foreground">{index}</span>
        <span className="h-px w-8 bg-primary/40" />
        {label}
      </div>
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  )
}

export function SectionShell({
  id,
  children,
  className,
}: {
  id: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-28 ${className ?? ''}`}
    >
      {children}
    </section>
  )
}
