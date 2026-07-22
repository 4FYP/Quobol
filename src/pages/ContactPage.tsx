import Contact from '../sections/Contact'
import ScrollReveal from '../components/ScrollReveal'
import Seo from '../components/Seo'
import { CONTACT } from '../data/services'

export default function ContactPage() {
  return (
    <div className="pt-24">
      <Seo
        title="Book a Consultation | Quobol"
        description={`Contact Quobol at ${CONTACT.email} to discuss Salesforce, CRM, AI, software development, or IT consulting.`}
        path="/contact"
      />
      <div className="mx-auto max-w-6xl px-5 pt-8 sm:px-6">
        <ScrollReveal>
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase">
            Book a Consultation
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-mist sm:text-5xl">
            Let us design your next build.
          </h1>
          <p className="mt-4 max-w-2xl text-mist-muted">
            Share your goals and constraints. Reach us at{' '}
            <a href={`mailto:${CONTACT.email}`} className="text-cyan underline-draw">
              {CONTACT.email}
            </a>{' '}
            or connect on{' '}
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-cyan underline-draw"
            >
              LinkedIn
            </a>
            .
          </p>
        </ScrollReveal>
      </div>
      <Contact standalone />
    </div>
  )
}
