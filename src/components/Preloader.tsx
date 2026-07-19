import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Props = {
  onComplete: () => void
}

export default function Preloader({ onComplete }: Props) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const startLeave = window.setTimeout(() => setLeaving(true), 1800)
    return () => window.clearTimeout(startLeave)
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!leaving && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink-deep"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-0 circuit-grid opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
          />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0, rotate: -12 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-cyan/20 blur-2xl"
                animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative flex flex-col items-center gap-3">
                <img
                  src="/logo-emblem.png"
                  alt="Quobol"
                  className="relative h-20 w-20 object-contain drop-shadow-[0_0_24px_rgba(53,230,214,0.5)] sm:h-24 sm:w-24"
                  width={96}
                  height={96}
                />
                <span className="font-display text-xl font-bold tracking-[0.28em] text-mist">
                  QUOBOL
                </span>
              </div>
            </motion.div>
            <motion.div
              className="h-[2px] w-40 overflow-hidden rounded-full bg-ink-soft"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full bg-cyan"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
            <motion.p
              className="font-display text-xs tracking-[0.35em] text-mist-muted uppercase"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              Simplifying Tomorrow, Today.
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
