import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import ConsultButton from '../components/ConsultButton'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-28 pb-20 text-center">
      <Seo
        title="Page not found | Quobol"
        description="The page you requested could not be found. Return to Quobol services or book a consultation."
        path="/404"
      />
      <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-mist sm:text-4xl">
        This page does not exist.
      </h1>
      <p className="mt-4 max-w-md text-mist-muted">
        The link may be outdated, or the URL was typed incorrectly. Head back home or browse
        services.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full border border-cyan/30 px-6 py-3 font-display text-sm font-semibold text-mist transition-all hover:border-cyan"
        >
          Home
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center justify-center rounded-full border border-cyan/30 px-6 py-3 font-display text-sm font-semibold text-mist transition-all hover:border-cyan"
        >
          All services
        </Link>
        <ConsultButton />
      </div>
    </div>
  )
}
