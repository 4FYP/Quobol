import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { CONTACT, services } from '../data/services'

function IconLinkedIn({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.84v1.98h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.66c0-1.59-.03-3.63-2.21-3.63-2.21 0-2.55 1.73-2.55 3.51V23h-4V8.5z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-cyan/10 bg-ink-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo className="mb-4" emblemClassName="h-9 w-9" />
          <p className="max-w-xs text-sm leading-relaxed text-mist-muted">
            {CONTACT.tagline} Full-spectrum software development and IT consulting - one team for
            every layer of your digital ecosystem.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Quobol on LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan/15 text-mist-muted transition-all duration-300 hover:scale-110 hover:border-cyan/50 hover:text-cyan hover:shadow-[0_0_18px_rgba(53,230,214,0.35)]"
            >
              <IconLinkedIn />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-wide text-mist">Company</h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href="/#why" className="underline-draw text-sm text-mist-muted hover:text-cyan">
                About
              </a>
            </li>
            <li>
              <a href="/#work" className="underline-draw text-sm text-mist-muted hover:text-cyan">
                Case Studies
              </a>
            </li>
            <li>
              <a href="/#process" className="underline-draw text-sm text-mist-muted hover:text-cyan">
                How We Work
              </a>
            </li>
            <li>
              <Link to="/contact" className="underline-draw text-sm text-mist-muted hover:text-cyan">
                Book a Consultation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-wide text-mist">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="underline-draw text-sm text-mist-muted hover:text-cyan"
                >
                  {s.shortTitle}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="underline-draw text-sm text-cyan hover:text-mist">
                View all →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-wide text-mist">Connect</h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link to="/contact" className="underline-draw text-sm text-mist-muted hover:text-cyan">
                Contact
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="underline-draw text-sm text-mist-muted hover:text-cyan"
              >
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="underline-draw text-sm text-mist-muted hover:text-cyan"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cyan/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-5 text-xs text-mist-faint sm:flex-row sm:items-center sm:px-6">
          <p>© {new Date().getFullYear()} Quobol. All rights reserved.</p>
          <p>{CONTACT.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
