import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const testimonials = [
  {
    quote:
      'Quobol did not just staff a team - they stabilized our delivery model. Architecture decisions were crisp, and every sprint produced something we could put in front of customers.',
    name: 'Priya Nair',
    role: 'VP Engineering, Meridian Logistics',
  },
  {
    quote:
      'Their AI automation work paid for itself in a quarter. Claims handling that used to take days now clears in hours, with audit trails our compliance team trusts.',
    name: 'James Ortega',
    role: 'COO, Northbridge Mutual',
  },
  {
    quote:
      'We needed cloud migration without drama. Quobol delivered a phased plan, zero downtime cutovers, and left our internal team stronger than when they arrived.',
    name: 'Elena Voss',
    role: 'CTO, Helix Capital',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 6000)
    return () => window.clearInterval(id)
  }, [])

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-24 sm:py-28" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <ScrollReveal>
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-tight text-mist sm:text-4xl"
          >
            Trusted by teams who ship.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="glass relative mt-12 overflow-hidden rounded-2xl px-6 py-10 sm:px-12 sm:py-14">
            <Quote className="absolute top-6 right-6 h-10 w-10 text-cyan/20" aria-hidden />
            <div className="relative min-h-[11rem] sm:min-h-[9rem]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45 }}
                  className="max-w-3xl"
                >
                  <p className="text-lg leading-relaxed text-mist sm:text-xl">
                    “{testimonials[index].quote}”
                  </p>
                  <footer className="mt-6">
                    <cite className="not-italic">
                      <span className="font-display font-semibold text-cyan">
                        {testimonials[index].name}
                      </span>
                      <span className="mt-1 block text-sm text-mist-muted">
                        {testimonials[index].role}
                      </span>
                    </cite>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? 'w-8 bg-cyan' : 'w-3 bg-cyan/25 hover:bg-cyan/50'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => go(-1)}
                  className="rounded-full border border-cyan/20 p-2 text-mist-muted transition-all hover:scale-110 hover:border-cyan/50 hover:text-cyan"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => go(1)}
                  className="rounded-full border border-cyan/20 p-2 text-mist-muted transition-all hover:scale-110 hover:border-cyan/50 hover:text-cyan"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
