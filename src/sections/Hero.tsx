import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import ConsultButton from '../components/ConsultButton'
import BrandOrbit from '../components/BrandOrbit'
import { CONTACT } from '../data/services'

const HEADLINE = 'Simplifying Tomorrow, Today.'

type Props = {
  ready: boolean
}

function Typewriter({ text, active }: { text: string; active: boolean }) {
  const [shown, setShown] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!active) return
    let i = 0
    setShown('')
    setDone(false)
    const id = window.setInterval(() => {
      i += 1
      setShown(text.slice(0, i))
      if (i >= text.length) {
        window.clearInterval(id)
        setDone(true)
      }
    }, 28)
    return () => window.clearInterval(id)
  }, [active, text])

  return (
    <h1 className="font-display text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-[1.12] tracking-tight text-mist">
      {shown}
      <span
        className={`ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.08em] bg-cyan align-middle ${
          done ? 'animate-pulse' : ''
        }`}
        aria-hidden
      />
    </h1>
  )
}

function ParticleField({ scrollY }: { scrollY: MotionValue<number> }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 53) % 100}%`,
        size: 2 + (i % 4),
        delay: (i % 8) * 0.35,
        duration: 4 + (i % 5),
      })),
    [],
  )

  const ySlow = useTransform(scrollY, [0, 600], [0, 80])
  const yFast = useTransform(scrollY, [0, 600], [0, 140])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div style={{ y: ySlow }} className="absolute inset-0 circuit-grid opacity-50" />
      <motion.svg
        style={{ y: yFast }}
        className="absolute inset-0 h-full w-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="circuitStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#35e6d6" stopOpacity="0" />
            <stop offset="50%" stopColor="#35e6d6" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#35e6d6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 180 H220 L280 120 H420 L480 180 H720"
          stroke="url(#circuitStroke)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M80 420 H200 L260 360 H400 L460 420 H900"
          stroke="url(#circuitStroke)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M-40 280 H140 L200 340 H340"
          stroke="url(#circuitStroke)"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="280" cy="120" r="3" fill="#35e6d6" opacity="0.7" />
        <circle cx="460" cy="420" r="3" fill="#35e6d6" opacity="0.7" />
        <circle cx="200" cy="340" r="2.5" fill="#35e6d6" opacity="0.55" />
      </motion.svg>

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-cyan"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            boxShadow: '0 0 8px rgba(53,230,214,0.7)',
          }}
          animate={{ opacity: [0.15, 0.85, 0.15], scale: [1, 1.4, 1] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a1418_75%)]" />
      <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-cyan/10 blur-[100px]" />
      <div className="absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-cyan-dim/20 blur-[110px]" />
    </div>
  )
}

export default function Hero({ ready }: Props) {
  const ref = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const [typeActive, setTypeActive] = useState(false)

  useEffect(() => {
    if (!ready) return
    const t = window.setTimeout(() => setTypeActive(true), 400)
    return () => window.clearTimeout(t)
  }, [ready])

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      <ParticleField scrollY={scrollY} />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 flex items-center gap-3"
          >
            <img
              src="/logo-emblem.png"
              alt="Quobol"
              className="h-14 w-14 object-contain drop-shadow-[0_0_18px_rgba(53,230,214,0.4)] sm:h-16 sm:w-16"
              width={64}
              height={64}
            />
            <span className="font-display text-2xl font-bold tracking-[0.22em] text-mist sm:text-3xl">
              QUOBOL
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
          >
            <Typewriter text={HEADLINE} active={typeActive} />
          </motion.div>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-mist-muted sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            Full-spectrum software development under one roof - AI integration, web & mobile, RPA,
            cloud infrastructure, databases, and enterprise systems. One partner for your entire
            digital ecosystem.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <ConsultButton className="px-7 py-3.5" />
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border border-cyan/30 bg-ink-elevated/40 px-7 py-3.5 font-display text-sm font-semibold text-mist transition-all duration-300 hover:scale-[1.04] hover:border-cyan hover:shadow-[0_0_24px_rgba(53,230,214,0.2)]"
            >
              Our Services
            </Link>
          </motion.div>
          <motion.p
            className="mt-4 text-xs tracking-wide text-mist-faint"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ delay: 0.85 }}
          >
            {CONTACT.tagline}
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto hidden w-full max-w-md lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={ready ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <BrandOrbit />
        </motion.div>
      </div>
    </section>
  )
}
