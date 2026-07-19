import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo'
import ConsultButton from './ConsultButton'
import { services } from '../data/services'

const links = [
  { to: '/services', label: 'Services', hasMenu: true },
  { to: '/#why', label: 'Why Quobol' },
  { to: '/#process', label: 'Process' },
  { to: '/#work', label: 'Work' },
  { to: '/contact', label: 'Contact' },
]

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null

  return (
    <div className="mobile-nav-overlay" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="mobile-nav-bar">
        <Logo emblemClassName="h-9 w-9" showWordmark />
        <button
          type="button"
          className="mobile-nav-close"
          aria-label="Close menu"
          onClick={onClose}
        >
          <X size={22} />
        </button>
      </div>

      <nav className="mobile-nav-links">
        <p className="mobile-nav-label">Services</p>
        <Link to="/services" onClick={onClose} className="mobile-nav-link mobile-nav-link--lg">
          All Services
        </Link>
        {services.map((s) => (
          <Link key={s.slug} to={`/services/${s.slug}`} onClick={onClose} className="mobile-nav-link">
            {s.title}
          </Link>
        ))}

        <div className="mobile-nav-divider" />

        {[
          { to: '/#why', label: 'Why Quobol' },
          { to: '/#process', label: 'Process' },
          { to: '/#work', label: 'Work' },
          { to: '/contact', label: 'Contact' },
        ].map((link) =>
          link.to.startsWith('/#') ? (
            <a key={link.to} href={link.to} onClick={onClose} className="mobile-nav-link mobile-nav-link--lg">
              {link.label}
            </a>
          ) : (
            <Link key={link.to} to={link.to} onClick={onClose} className="mobile-nav-link mobile-nav-link--lg">
              {link.label}
            </Link>
          ),
        )}

        <div className="mobile-nav-cta" onClick={onClose}>
          <ConsultButton className="w-full" />
        </div>
      </nav>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  // Lock page scroll on #root only — never on body.
  // Portaled menu lives on body as a sibling of #root, so it stays full-viewport.
  useEffect(() => {
    if (!open) return

    const scrollY = window.scrollY
    const root = document.getElementById('root')
    if (!root) return

    const prev = root.getAttribute('style') ?? ''
    root.style.position = 'fixed'
    root.style.top = `-${scrollY}px`
    root.style.left = '0'
    root.style.right = '0'
    root.style.width = '100%'
    root.style.overflow = 'hidden'

    return () => {
      root.setAttribute('style', prev)
      window.scrollTo(0, scrollY)
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'border-b border-cyan/10 bg-ink/95 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.35)]'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-6">
          <Logo
            emblemClassName={scrolled ? 'h-8 w-8' : 'h-10 w-10'}
            className="transition-all"
          />

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((link) =>
              link.hasMenu ? (
                <li
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `underline-draw inline-flex items-center gap-1 font-display text-sm tracking-wide transition-colors duration-300 ${
                        isActive ? 'text-cyan' : 'text-mist-muted hover:text-mist'
                      }`
                    }
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={servicesOpen ? 'rotate-180 transition' : 'transition'}
                    />
                  </NavLink>
                  <AnimatePresence>
                    {servicesOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute left-1/2 top-full z-50 mt-3 hidden w-[22rem] -translate-x-1/2 rounded-2xl border border-cyan/15 bg-ink-elevated/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] lg:block"
                      >
                        <div className="grid gap-1">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services/${s.slug}`}
                              className="rounded-xl px-3 py-2.5 text-sm text-mist-muted transition-colors hover:bg-cyan/10 hover:text-cyan"
                            >
                              {s.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              ) : link.to.includes('#') ? (
                <li key={link.to}>
                  <a
                    href={link.to}
                    className="underline-draw font-display text-sm tracking-wide text-mist-muted transition-colors duration-300 hover:text-mist"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `underline-draw font-display text-sm tracking-wide transition-colors duration-300 ${
                        isActive ? 'text-cyan' : 'text-mist-muted hover:text-mist'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>

          <div className="hidden lg:block">
            <ConsultButton className="px-5 py-2.5" />
          </div>

          <button
            type="button"
            className="inline-flex touch-manipulation rounded-lg border border-cyan/20 p-2 text-mist transition-colors hover:border-cyan/50 hover:text-cyan lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {mounted
        ? createPortal(
            <MobileMenu open={open} onClose={() => setOpen(false)} />,
            document.body,
          )
        : null}
    </>
  )
}
