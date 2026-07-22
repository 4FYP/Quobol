import { lazy, Suspense } from 'react'
import { useOutletContext } from 'react-router-dom'
import Hero from '../sections/Hero'
import Seo from '../components/Seo'
import { CONTACT } from '../data/services'

const Services = lazy(() => import('../sections/Services'))
const WhyQuobol = lazy(() => import('../sections/WhyQuobol'))
const Process = lazy(() => import('../sections/Process'))
const TechStack = lazy(() => import('../sections/TechStack'))
const CaseStudies = lazy(() => import('../sections/CaseStudies'))
const Testimonials = lazy(() => import('../sections/Testimonials'))
const Faq = lazy(() => import('../sections/Faq'))
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
      <Seo
        title="Quobol | Software Development, Salesforce CRM, AI & IT Consulting"
        description="Quobol is a full-spectrum software company: Salesforce and CRM, AI integration, web and mobile apps, RPA, cloud DevOps, and IT consulting. Simplifying Tomorrow, Today."
        path="/"
      />
      <Hero ready={ready} />
      <Suspense fallback={<Fallback />}>
        <Services />
        <WhyQuobol />
        <Process />
        <TechStack />
        <CaseStudies />
        <Testimonials />
        <Faq />
        <Contact />
      </Suspense>
      <p className="sr-only">
        Contact Quobol at {CONTACT.email}. Follow Quobol on LinkedIn, Instagram (
        {CONTACT.instagram}), Facebook ({CONTACT.facebook}), and TikTok ({CONTACT.tiktok}).
      </p>
    </>
  )
}
