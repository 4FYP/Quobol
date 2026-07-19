import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import { getServiceIcon } from '../components/serviceIcons'
import { services } from '../data/services'
import ConsultButton from '../components/ConsultButton'

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 circuit-grid opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <ScrollReveal>
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase">
            Services
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
            Full-spectrum capability. One accountable partner.
          </h2>
          <p className="mt-4 max-w-2xl text-mist-muted">
            AI, RPA, web & mobile, cloud, databases, enterprise systems, security, and consulting -
            each with a dedicated page so you can see what it means for your business.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = getServiceIcon(service.icon)
            return (
              <ScrollReveal key={service.slug} delay={i * 0.06}>
                <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 360, damping: 24 }}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="glass group flex h-full flex-col rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[0_0_36px_rgba(53,230,214,0.12)]"
                  >
                    <motion.div
                      className="mb-5 inline-flex rounded-xl border border-cyan/20 bg-cyan/10 p-3 text-cyan"
                      whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                      transition={{ duration: 0.45 }}
                    >
                      <Icon size={24} strokeWidth={1.75} />
                    </motion.div>
                    <h3 className="font-display text-lg font-semibold text-mist group-hover:text-cyan">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-muted">
                      {service.cardDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan">
                      Learn more
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold text-cyan underline-draw"
          >
            View all services
            <ArrowRight size={16} />
          </Link>
          <ConsultButton />
        </ScrollReveal>
      </div>
    </section>
  )
}
