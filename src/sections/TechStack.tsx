import ScrollReveal from '../components/ScrollReveal'

const tech = [
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'AWS',
  'Azure',
  'Kubernetes',
  'Docker',
  'PostgreSQL',
  'MongoDB',
  'TensorFlow',
  'LangChain',
  'Terraform',
  'GitHub Actions',
  'Flutter',
  'Next.js',
  'GraphQL',
  'Redis',
]

export default function TechStack() {
  const doubled = [...tech, ...tech]

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" aria-labelledby="tech-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <ScrollReveal>
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase">
            Technology
          </p>
          <h2
            id="tech-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-mist sm:text-4xl"
          >
            Stacks we ship with every day.
          </h2>
        </ScrollReveal>
      </div>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-28" />
        <div className="marquee-track flex w-max gap-4 py-2">
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="glass flex h-14 min-w-[9.5rem] items-center justify-center rounded-xl px-5 font-display text-sm font-semibold tracking-wide text-mist-muted transition-colors hover:text-cyan"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
