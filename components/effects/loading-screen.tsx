'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

export function LoadingScreen() {
  const [done, setDone] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setDone(true)
      return
    }
    let val = 0
    const id = setInterval(() => {
      val += Math.random() * 18 + 6
      if (val >= 100) {
        val = 100
        clearInterval(id)
        setTimeout(() => setDone(true), 380)
      }
      setProgress(Math.min(val, 100))
    }, 130)
    return () => clearInterval(id)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-grid bg-grid-fade absolute inset-0 opacity-40" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="glass flex h-16 w-16 items-center justify-center rounded-2xl glow-md"
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.4 }}
            >
              <span className="font-mono text-2xl font-bold text-primary text-glow">
                {'</>'}
              </span>
            </motion.div>
            <div className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">$</span> initializing secure
              session…
            </div>
            <div className="h-1 w-56 overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full rounded-full bg-primary glow-sm"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="font-mono text-xs text-muted-foreground">
              {Math.round(progress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
