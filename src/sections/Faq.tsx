import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import { CONTACT } from '../data/services'

const faqs = [
  {
    q: 'What services does Quobol offer?',
    a: 'Quobol delivers full-spectrum software and IT services: AI integration, Salesforce and CRM platforms (including HubSpot and Dynamics 365), web and mobile development, RPA automation, cloud infrastructure and DevOps, custom enterprise software, databases and APIs, cybersecurity and QA, IT consulting, and staff augmentation with ongoing support.',
  },
  {
    q: 'Do you implement and customize Salesforce?',
    a: 'Yes. Quobol implements Salesforce Sales Cloud, Service Cloud, and Experience Cloud, plus Lightning customization, Apex, Flow automation, data migration, and integrations with ERP, marketing, and support tools. We also work with HubSpot, Microsoft Dynamics 365, Zoho CRM, and custom CRM builds.',
  },
  {
    q: 'Can Quobol be our single technology partner?',
    a: 'That is our model. Instead of juggling separate vendors for AI, CRM, web, cloud, and automation, Quobol designs, builds, integrates, and supports under one accountable team - from discovery through production maintenance.',
  },
  {
    q: 'How do we start a project with Quobol?',
    a: `Book a consultation via the contact form or email ${CONTACT.email}. We typically respond within one business day with next steps for a discovery call covering goals, constraints, timeline, and recommended approach.`,
  },
  {
    q: 'Which industries do you work with?',
    a: 'We support startups and enterprises across logistics, financial services, insurance, healthcare, energy, agriculture/veterinary tech, and general B2B operations - wherever custom software, CRM, or automation creates measurable ROI.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 sm:py-28" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <ScrollReveal>
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-mist sm:text-4xl"
          >
            Questions buyers usually ask.
          </h2>
          <p className="mt-4 text-mist-muted">
            Straight answers about Quobol services, Salesforce and CRM work, and how engagement
            starts.
          </p>
        </ScrollReveal>

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <ScrollReveal key={item.q} delay={i * 0.04}>
                <div className="glass overflow-hidden rounded-2xl">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-display text-base font-semibold text-mist">{item.q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-cyan transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="border-t border-cyan/10 px-5 py-4 text-sm leading-relaxed text-mist-muted">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
