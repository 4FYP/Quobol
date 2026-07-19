import { Link } from 'react-router-dom'

type Props = {
  className?: string
  emblemClassName?: string
  showWordmark?: boolean
  to?: string
}

export default function Logo({
  className = '',
  emblemClassName = 'h-9 w-9 sm:h-10 sm:w-10',
  showWordmark = true,
  to = '/',
}: Props) {
  return (
    <Link to={to} className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Quobol home">
      <img
        src="/logo-emblem.png"
        alt=""
        className={`${emblemClassName} object-contain drop-shadow-[0_0_12px_rgba(53,230,214,0.35)]`}
        width={80}
        height={80}
      />
      {showWordmark && (
        <span className="font-display text-lg font-bold tracking-[0.2em] text-mist sm:text-xl">
          QUOBOL
        </span>
      )}
    </Link>
  )
}
