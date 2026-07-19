import { useEffect, useState } from 'react'
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-cyan/10 bg-ink/70 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-6">
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
                  <ChevronDown size={14} className={servicesOpen ? 'rotate-180 transition' : 'transition'} />
                </NavLink>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute left-1/2 top-full z-50 mt-3 w-[22rem] -translate-x-1/2 rounded-2xl border border-cyan/15 bg-ink-elevated/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
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
                  )}
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
          className="inline-flex rounded-lg border border-cyan/20 p-2 text-mist transition-colors hover:border-cyan/50 hover:text-cyan lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-ink-deep/90 backdrop-blur-md"
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col gap-1 overflow-y-auto border-l border-cyan/15 bg-ink-elevated/95 px-5 pt-24 pb-10"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            >
              <Link
                to="/services"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-display text-lg text-mist hover:bg-cyan/10 hover:text-cyan"
              >
                All Services
              </Link>
              {services.map((s, i) => (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <Link
                    to={`/services/${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-mist-muted hover:bg-cyan/10 hover:text-cyan"
                  >
                    {s.title}
                  </Link>
                </motion.div>
              ))}
              <div className="my-3 h-px bg-cyan/10" />
              {[
                { to: '/#why', label: 'Why Quobol' },
                { to: '/#process', label: 'Process' },
                { to: '/#work', label: 'Work' },
                { to: '/contact', label: 'Contact' },
              ].map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                >
                  {link.to.startsWith('/#') ? (
                    <a
                      href={link.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 font-display text-lg text-mist hover:bg-cyan/10 hover:text-cyan"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 font-display text-lg text-mist hover:bg-cyan/10 hover:text-cyan"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <ConsultButton className="mt-4 w-full" />
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
