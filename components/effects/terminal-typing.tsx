'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Cycles through lines with a typing effect. Used in the hero "terminal".
 */
export function TerminalTyping({
  lines,
  className,
}: {
  lines: string[]
  className?: string
}) {
  const [display, setDisplay] = useState('')
  const [lineIndex, setLineIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const reduceRef = useRef(false)

  useEffect(() => {
    reduceRef.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduceRef.current) {
      setDisplay(lines[0] ?? '')
    }
  }, [lines])

  useEffect(() => {
    if (reduceRef.current) return
    const current = lines[lineIndex] ?? ''
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && display === current) {
      timeout = setTimeout(() => setDeleting(true), 1600)
    } else if (deleting && display === '') {
      setDeleting(false)
      setLineIndex((i) => (i + 1) % lines.length)
    } else {
      timeout = setTimeout(
        () => {
          setDisplay((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1),
          )
        },
        deleting ? 32 : 60,
      )
    }
    return () => clearTimeout(timeout)
  }, [display, deleting, lineIndex, lines])

  return (
    <span className={className}>
      <span className="text-primary">$</span>{' '}
      <span className="text-foreground">{display}</span>
      <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-primary animate-blink" />
    </span>
  )
}
