import { lazy, Suspense } from 'react'
import { useOutletContext } from 'react-router-dom'
import Hero from '../sections/Hero'

const Services = lazy(() => import('../sections/Services'))
const WhyQuobol = lazy(() => import('../sections/WhyQuobol'))
const Process = lazy(() => import('../sections/Process'))
const TechStack = lazy(() => import('../sections/TechStack'))
const CaseStudies = lazy(() => import('../sections/CaseStudies'))
const Testimonials = lazy(() => import('../sections/Testimonials'))
const Contact = lazy(() => import('../sections/Contact'))

function Fallback() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24" aria-hidden>
      <div className="h-40 animate-pulse rounded-2xl bg-ink-elevated/60" />
    </div>
  )
}

export default function HomePage() {
  const { ready } = useOutletContext<{ ready: boolean }>()

  return (
    <>
      <Hero ready={ready} />
      <Suspense fallback={<Fallback />}>
        <Services />
        <WhyQuobol />
        <Process />
        <TechStack />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </Suspense>
    </>
  )
}
