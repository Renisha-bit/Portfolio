'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const sx = useSpring(x, { stiffness: 350, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 350, damping: 40, mass: 0.4 })

  useEffect(() => {
    // Only for fine pointers (desktop) and when motion is allowed
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 220)
      y.set(e.clientY - 220)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-30 h-[440px] w-[440px] rounded-full"
      style={{
        left: sx,
        top: sy,
        background:
          'radial-gradient(circle, color-mix(in oklab, var(--accent) 20%, transparent) 0%, transparent 62%)',
      }}
    />
  )
}
