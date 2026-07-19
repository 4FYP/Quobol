import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import { Compass, Layout, Code2, Rocket, LifeBuoy } from 'lucide-react'

const steps = [
  {
    icon: Compass,
    title: 'Discover',
    detail: 'Goals, constraints, and success metrics clarified with stakeholders.',
  },
  {
    icon: Layout,
    title: 'Design',
    detail: 'Architecture, UX flows, and delivery plan aligned before code lands.',
  },
  {
    icon: Code2,
    title: 'Develop',
    detail: 'Iterative builds with reviews, automated tests, and continuous feedback.',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    detail: 'Hardened releases with CI/CD, monitoring, and rollback confidence.',
  },
  {
    icon: LifeBuoy,
    title: 'Support',
    detail: 'Ongoing optimization, incident response, and roadmap evolution.',
  },
]

export default function Process() {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start end', 'end start'],
  })
  const lineScale = useTransform(scrollYProgress, [0.15, 0.75], [0, 1])

  return (
    <section id="process" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <ScrollReveal>
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase">
            Process
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
            A clear path from idea to production.
          </h2>
          <p className="mt-4 max-w-2xl text-mist-muted">
            Connected delivery stages that keep scope, quality, and velocity in balance.
          </p>
        </ScrollReveal>

        <div ref={trackRef} className="relative mt-16">
          {/* Desktop horizontal timeline */}
          <div className="relative hidden lg:block">
            <div className="absolute top-[2.15rem] right-8 left-8 h-px bg-cyan/15" />
            <motion.div
              className="absolute top-[2.15rem] left-8 h-px origin-left bg-gradient-to-r from-cyan via-cyan to-cyan/30"
              style={{ scaleX: lineScale, width: 'calc(100% - 4rem)' }}
            />
            <ol className="grid grid-cols-5 gap-4">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <ScrollReveal key={step.title} delay={i * 0.1}>
                    <li className="relative flex flex-col items-center text-center">
                      <motion.div
                        className="relative z-10 flex h-[4.3rem] w-[4.3rem] items-center justify-center rounded-full border border-cyan/30 bg-ink-elevated text-cyan shadow-[0_0_24px_rgba(53,230,214,0.15)]"
                        whileHover={{ scale: 1.08, boxShadow: '0 0 32px rgba(53,230,214,0.35)' }}
                      >
                        <Icon size={22} strokeWidth={1.75} />
                      </motion.div>
                      <h3 className="mt-5 font-display text-base font-semibold text-mist">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-mist-muted">{step.detail}</p>
                    </li>
                  </ScrollReveal>
                )
              })}
            </ol>
          </div>

          {/* Mobile vertical timeline */}
          <ol className="relative space-y-6 border-l border-cyan/20 pl-6 lg:hidden">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <ScrollReveal key={step.title} delay={i * 0.06}>
                  <li className="relative">
                    <span className="absolute top-1 -left-[1.9rem] flex h-8 w-8 items-center justify-center rounded-full border border-cyan/30 bg-ink-elevated text-cyan">
                      <Icon size={14} />
                    </span>
                    <h3 className="font-display text-base font-semibold text-mist">{step.title}</h3>
                    <p className="mt-1 text-sm text-mist-muted">{step.detail}</p>
                  </li>
                </ScrollReveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
