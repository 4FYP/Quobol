import { Link } from 'react-router-dom'

type Props = {
  className?: string
  label?: string
}

/** Primary CTA - always routes to the consultation / contact page. */
export default function ConsultButton({
  className = '',
  label = 'Book a Consultation',
}: Props) {
  return (
    <Link
      to="/contact"
      className={`glow-cyan inline-flex items-center justify-center rounded-full bg-cyan px-6 py-3 font-display text-sm font-semibold text-ink transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_28px_rgba(53,230,214,0.45)] ${className}`}
    >
      {label}
    </Link>
  )
}
