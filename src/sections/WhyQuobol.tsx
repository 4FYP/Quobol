import { useRef } from 'react'
import { useInView } from 'framer-motion'
import ScrollReveal, { useCountUp } from '../components/ScrollReveal'

const stats = [
  { value: 12, suffix: '+', label: 'Years of experience' },
  { value: 180, suffix: '+', label: 'Projects delivered' },
  { value: 95, suffix: '+', label: 'Clients served' },
]

function Stat({
  value,
  suffix,
  label,
  active,
}: {
  value: number
  suffix: string
  label: string
  active: boolean
}) {
  const count = useCountUp(value, 1600, active)

  return (
    <div className="text-center">
      <p className="font-display text-4xl font-bold tracking-tight text-cyan sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-mist-muted sm:text-base">{label}</p>
    </div>
  )
}

export default function WhyQuobol() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="why" className="relative overflow-hidden py-24 sm:py-28">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-cyan/8 blur-[100px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal direction="left">
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase">
              Why Quobol
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
              Technical credibility you can measure in outcomes.
            </h2>
            <p className="mt-4 leading-relaxed text-mist-muted">
              We pair senior engineering judgment with disciplined delivery. Whether you need a
              product built end-to-end or specialists who raise the bar inside your org, Quobol
              stays accountable to quality, timeline, and total cost of ownership.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-mist-muted">
              {[
                'Architecture-first approach with production-ready defaults',
                'Transparent communication and measurable milestones',
                'Security, observability, and maintainability baked in',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan shadow-[0_0_8px_#35e6d6]" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.15} direction="right">
            <div
              ref={ref}
              className="glass grid grid-cols-1 gap-10 rounded-2xl p-8 sm:grid-cols-3 sm:gap-6 sm:p-10"
            >
              {stats.map((stat) => (
                <Stat key={stat.label} {...stat} active={inView} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
