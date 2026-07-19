import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import ScrollReveal from '../components/ScrollReveal'
import { CONTACT } from '../data/services'

const FORMSPREE_ID = 'xeeygewe'

type FieldProps = {
  id: string
  label: string
  type?: string
  value: string
  onChange: (v: string) => void
  required?: boolean
  as?: 'input' | 'textarea'
  disabled?: boolean
}

function FloatingField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required,
  as = 'input',
  disabled,
}: FieldProps) {
  const [focused, setFocused] = useState(false)
  const floated = focused || value.length > 0

  const shared =
    'peer w-full rounded-xl border border-cyan/15 bg-ink-deep/60 px-4 pt-6 pb-2 text-mist outline-none transition-all duration-300 focus:border-cyan/50 focus:shadow-[0_0_0_3px_rgba(53,230,214,0.12)] disabled:opacity-60'

  return (
    <div className="relative">
      {as === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          required={required}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${shared} resize-none`}
          placeholder=" "
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={shared}
          placeholder=" "
        />
      )}
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 text-mist-muted transition-all duration-300 ${
          floated ? 'top-2 text-[0.65rem] tracking-wide text-cyan' : 'top-4 text-sm'
        }`}
      >
        {label}
      </label>
    </div>
  )
}

function FieldError({ field, errors }: { field: string; errors: Parameters<typeof ValidationError>[0]['errors'] }) {
  return (
    <ValidationError
      prefix={field}
      field={field}
      errors={errors}
      className="mt-1.5 block text-xs text-red-400"
    />
  )
}

function ContactForm({ onReset }: { onReset: () => void }) {
  const [state, handleSubmit] = useForm(FORMSPREE_ID)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex min-h-[280px] flex-col items-center justify-center text-center"
      >
        <div className="mb-4 h-12 w-12 rounded-full border border-cyan/40 bg-cyan/10 text-2xl leading-[3rem] text-cyan">
          ✓
        </div>
        <h3 className="font-display text-xl font-semibold text-mist">Message received</h3>
        <p className="mt-2 max-w-sm text-sm text-mist-muted">
          Thanks for reaching out. A Quobol consultant will follow up shortly at{' '}
          <span className="text-cyan">{CONTACT.email}</span>.
        </p>
        <button type="button" onClick={onReset} className="mt-6 text-sm text-cyan underline-draw">
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
      <input type="hidden" name="_subject" value="Quobol - consultation request" />
      <input type="hidden" name="_replyto" value={form.email} />

      <div>
        <FloatingField
          id="name"
          label="Full name"
          required
          disabled={state.submitting}
          value={form.name}
          onChange={(v) => setForm((f) => ({ ...f, name: v }))}
        />
        <FieldError field="name" errors={state.errors} />
      </div>

      <div>
        <FloatingField
          id="email"
          label="Work email"
          type="email"
          required
          disabled={state.submitting}
          value={form.email}
          onChange={(v) => setForm((f) => ({ ...f, email: v }))}
        />
        <FieldError field="email" errors={state.errors} />
      </div>

      <div>
        <FloatingField
          id="company"
          label="Company"
          disabled={state.submitting}
          value={form.company}
          onChange={(v) => setForm((f) => ({ ...f, company: v }))}
        />
        <FieldError field="company" errors={state.errors} />
      </div>

      <div>
        <FloatingField
          id="message"
          label="How can we help?"
          as="textarea"
          required
          disabled={state.submitting}
          value={form.message}
          onChange={(v) => setForm((f) => ({ ...f, message: v }))}
        />
        <FieldError field="message" errors={state.errors} />
      </div>

      <ValidationError errors={state.errors} className="block text-sm text-red-400" />

      <button
        type="submit"
        disabled={state.submitting}
        className="glow-cyan mt-2 w-full rounded-full bg-cyan py-3.5 font-display text-sm font-semibold text-ink transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(53,230,214,0.45)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
      >
        {state.submitting ? 'Sending…' : 'Book a Consultation'}
      </button>
    </form>
  )
}

type ContactProps = {
  standalone?: boolean
}

export default function Contact({ standalone = false }: ContactProps) {
  const [formKey, setFormKey] = useState(0)

  return (
    <section id="contact" className={`relative ${standalone ? 'pt-10 pb-24' : 'py-24 sm:py-28'}`}>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(53,230,214,0.08),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ScrollReveal>
            {!standalone && (
              <>
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase">
                  Contact
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
                  Ready to build with intention?
                </h2>
              </>
            )}
            <p className={`leading-relaxed text-mist-muted ${standalone ? '' : 'mt-4'}`}>
              Tell us about your roadmap, constraints, and timeline. We typically respond within one
              business day with next steps for a discovery call.
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="text-mist-faint">Email</dt>
                <dd>
                  <a href={`mailto:${CONTACT.email}`} className="underline-draw text-cyan">
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-mist-faint">LinkedIn</dt>
                <dd>
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-draw text-cyan"
                  >
                    linkedin.com/company/Quobol
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-mist-faint">Focus</dt>
                <dd className="text-mist-muted">{CONTACT.tagline}</dd>
              </div>
            </dl>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="gradient-border rounded-2xl bg-ink-elevated/80 p-6 sm:p-8">
              <ContactForm key={formKey} onReset={() => setFormKey((k) => k + 1)} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
