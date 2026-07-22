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

function IconInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.12.14 4.59 1.62 4.73 4.73.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.14 3.11-1.61 4.59-4.73 4.73-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.12-.14-4.59-1.62-4.73-4.73C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.37 4.03 3.84 2.55 6.96 2.41 8.23 2.35 8.61 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
    </svg>
  )
}

function IconFacebook({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.95h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07z" />
    </svg>
  )
}

function IconTikTok({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.76 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.82.12v-3.4a6.21 6.21 0 0 0-.82-.06A6.33 6.33 0 0 0 3.16 15.3a6.33 6.33 0 0 0 6.33 6.33 6.33 6.33 0 0 0 6.33-6.33V9.29a8.16 8.16 0 0 0 4.77 1.52V7.36a4.85 4.85 0 0 1-1-.67z" />
    </svg>
  )
}

const socialClass =
  'flex h-10 w-10 items-center justify-center rounded-full border border-cyan/15 text-mist-muted transition-all duration-300 hover:scale-110 hover:border-cyan/50 hover:text-cyan hover:shadow-[0_0_18px_rgba(53,230,214,0.35)]'

const socials = [
  { href: CONTACT.linkedin, label: 'Quobol on LinkedIn', Icon: IconLinkedIn },
  { href: CONTACT.instagram, label: 'Quobol on Instagram', Icon: IconInstagram },
  { href: CONTACT.facebook, label: 'Quobol on Facebook', Icon: IconFacebook },
  { href: CONTACT.tiktok, label: 'Quobol on TikTok', Icon: IconTikTok },
]

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
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={socialClass}
              >
                <Icon />
              </a>
            ))}
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
            <li>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                className="underline-draw text-sm text-mist-muted hover:text-cyan"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noreferrer"
                className="underline-draw text-sm text-mist-muted hover:text-cyan"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={CONTACT.tiktok}
                target="_blank"
                rel="noreferrer"
                className="underline-draw text-sm text-mist-muted hover:text-cyan"
              >
                TikTok
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
