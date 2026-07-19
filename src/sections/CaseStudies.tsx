import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const cases = [
  {
    title: 'Logistics Command Platform',
    sector: 'Supply Chain',
    summary: 'Real-time fleet orchestration cutting dispatch latency by 40%.',
    gradient: 'from-[#0d2a32] via-[#12353f] to-[#0a1418]',
  },
  {
    title: 'Claims Automation Suite',
    sector: 'Insurance',
    summary: 'AI document intake and RPA that reduced manual review hours by 65%.',
    gradient: 'from-[#0f2430] via-[#163a45] to-[#0a1418]',
  },
  {
    title: 'Cloud Migration Factory',
    sector: 'Financial Services',
    summary: 'Zero-downtime migration of core APIs onto Kubernetes with full observability.',
    gradient: 'from-[#102830] via-[#1a3f48] to-[#0a1418]',
  },
  {
    title: 'Field Ops Mobile Suite',
    sector: 'Energy',
    summary: 'Offline-first mobile apps connecting 2,000+ technicians to a unified backend.',
    gradient: 'from-[#0e222c] via-[#15404a] to-[#0a1418]',
  },
]

export default function CaseStudies() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="work" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <ScrollReveal>
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase">
            Case Studies
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
            Outcomes that hold up in production.
          </h2>
          <p className="mt-4 max-w-2xl text-mist-muted">
            A sample of engagements where Quobol owned delivery from architecture through launch -
            and stayed for the long haul.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {cases.map((item, i) => {
            const active = hovered === i
            return (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <article
                  className="group relative h-64 overflow-hidden rounded-2xl border border-cyan/10 sm:h-72"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  tabIndex={0}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 ease-out ${
                      active ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 20% 30%, rgba(53,230,214,0.25), transparent 45%), radial-gradient(circle at 80% 70%, rgba(53,230,214,0.12), transparent 40%)',
                    }}
                  />
                  <div className="absolute inset-0 circuit-grid opacity-20" />
                  <div
                    className={`absolute inset-0 bg-ink/50 transition-opacity duration-500 ${
                      active ? 'opacity-100' : 'opacity-40'
                    }`}
                  />

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <p className="font-display text-xs tracking-[0.18em] text-cyan uppercase">
                      {item.sector}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-mist">
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm text-mist-muted transition-all duration-500 ${
                        active
                          ? 'mt-3 max-h-24 translate-y-0 opacity-100'
                          : 'mt-0 max-h-0 translate-y-3 opacity-0'
                      }`}
                    >
                      {item.summary}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
