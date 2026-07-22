import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import ConsultButton from '../components/ConsultButton'
import ServiceVisual from '../components/ServiceVisual'
import Seo from '../components/Seo'
import { getServiceIcon } from '../components/serviceIcons'
import { CONTACT, getService, services } from '../data/services'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = slug ? getService(slug) : undefined

  if (!service) return <Navigate to="/services" replace />

  const Icon = getServiceIcon(service.icon)
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <article className="pt-28">
      <Seo
        title={service.seoTitle}
        description={service.seoDescription}
        path={`/services/${service.slug}`}
        type="service"
      />

      {/* Hero */}
      <section className="relative overflow-hidden pb-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 circuit-grid opacity-25" aria-hidden />
        <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-cyan/10 blur-[100px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan uppercase"
            >
              <Icon size={14} />
              {service.shortTitle}
            </motion.div>
            <motion.h1
              className="mt-5 font-display text-3xl font-semibold tracking-tight text-mist sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {service.heroHeadline}
            </motion.h1>
            <motion.p
              className="mt-5 text-base leading-relaxed text-mist-muted sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {service.heroSub}
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <ConsultButton />
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-cyan/30 px-6 py-3 font-display text-sm font-semibold text-mist transition-all hover:scale-[1.03] hover:border-cyan"
              >
                All services
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <ServiceVisual type={service.icon} />
          </motion.div>
        </div>
      </section>

      {/* What it is */}
      <section className="border-y border-cyan/10 bg-ink-deep/50 py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <ScrollReveal>
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase">
              What it is
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-mist">
              {service.title}, explained simply.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-mist-muted">{service.whatItIs}</p>
          </ScrollReveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {service.outcomes.map((o, i) => (
              <ScrollReveal key={o.label} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6 text-center">
                  <p className="font-display text-3xl font-bold text-cyan">{o.metric}</p>
                  <p className="mt-2 text-sm text-mist-muted">{o.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {service.platforms && service.platforms.length > 0 ? (
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <ScrollReveal>
              <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase">
                Platforms and tech
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-mist">
                Technologies we implement and integrate.
              </h2>
            </ScrollReveal>
            <div className="mt-10 flex flex-wrap gap-3">
              {service.platforms.map((p, i) => (
                <ScrollReveal key={p} delay={i * 0.03}>
                  <motion.span
                    className="glass inline-flex rounded-full px-4 py-2 font-display text-sm text-mist-muted"
                    whileHover={{ scale: 1.05, color: '#35e6d6' }}
                  >
                    {p}
                  </motion.span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* How it works */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <ScrollReveal>
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase">
              How it works
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-mist">
              From conversation to running systems.
            </h2>
          </ScrollReveal>
          <ol className="relative mt-12 space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
            {service.howItWorks.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <li className="glass relative h-full rounded-2xl p-6">
                  <motion.span
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan font-display text-sm font-bold text-ink"
                    whileInView={{ scale: [0.8, 1.1, 1] }}
                    viewport={{ once: true }}
                  >
                    {i + 1}
                  </motion.span>
                  <h3 className="font-display text-lg font-semibold text-mist">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-muted">{step.detail}</p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Advantages */}
      <section className="border-y border-cyan/10 bg-ink-deep/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <ScrollReveal>
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase">
              Advantages
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-mist">
              What your business gains.
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {service.advantages.map((adv, i) => (
              <ScrollReveal key={adv.title} delay={i * 0.07} direction={i % 2 === 0 ? 'left' : 'right'}>
                <motion.div
                  className="glass flex gap-4 rounded-2xl p-6"
                  whileHover={{ borderColor: 'rgba(53,230,214,0.35)' }}
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-mist">{adv.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist-muted">{adv.detail}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <ScrollReveal>
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase">
              Use cases
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-mist">
              Where this shows up in the real world.
            </h2>
          </ScrollReveal>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {service.useCases.map((uc, i) => (
              <ScrollReveal key={uc} delay={i * 0.05}>
                <li className="flex items-start gap-3 rounded-xl border border-cyan/10 bg-ink-elevated/40 px-4 py-3.5 text-sm text-mist-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan shadow-[0_0_8px_#35e6d6]" />
                  {uc}
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(53,230,214,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-semibold text-mist sm:text-4xl">
              Ready to apply {service.shortTitle.toLowerCase()} to your business?
            </h2>
            <p className="mt-4 text-mist-muted">
              Tell us about your workflows and goals. We’ll outline a practical path - no slide-deck
              theater.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ConsultButton />
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center justify-center rounded-full border border-cyan/30 px-6 py-3 font-display text-sm font-semibold text-mist transition-all hover:border-cyan"
              >
                {CONTACT.email}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-cyan/10 py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-mist">Related capabilities</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="glass group flex items-center justify-between rounded-xl px-4 py-4 text-sm text-mist-muted transition-colors hover:text-cyan"
              >
                {s.title}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
