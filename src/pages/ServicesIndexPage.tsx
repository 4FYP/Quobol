import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import ConsultButton from '../components/ConsultButton'
import Seo from '../components/Seo'
import { getServiceIcon } from '../components/serviceIcons'
import { services } from '../data/services'

export default function ServicesIndexPage() {
  return (
    <div className="pt-28 pb-24">
      <Seo
        title="IT and Software Services | Quobol"
        description="Explore Quobol services: Salesforce and CRM, AI integration, web and mobile development, RPA, cloud DevOps, custom software, and IT consulting."
        path="/services"
      />
      <section className="relative overflow-hidden pb-16">
        <div className="pointer-events-none absolute inset-0 circuit-grid opacity-30" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <ScrollReveal>
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase">
              Services
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-mist sm:text-5xl">
              Full-spectrum software under one roof.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-mist-muted">
              From Salesforce and CRM to AI, RPA, web, mobile, cloud, and enterprise systems -
              explore each capability in depth, then book a consultation when you are ready.
            </p>
            <div className="mt-8">
              <ConsultButton />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = getServiceIcon(service.icon)
            return (
              <ScrollReveal key={service.slug} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 360, damping: 24 }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="glass group flex h-full flex-col rounded-2xl p-6 transition-shadow hover:shadow-[0_0_36px_rgba(53,230,214,0.14)]"
                  >
                    <div className="mb-4 inline-flex rounded-xl border border-cyan/20 bg-cyan/10 p-3 text-cyan">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h2 className="font-display text-lg font-semibold text-mist group-hover:text-cyan">
                      {service.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-muted">
                      {service.cardDescription}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                      Explore
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </section>
    </div>
  )
}
