import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CursorGlow from './CursorGlow'
import Preloader from './Preloader'
import JsonLd from './JsonLd'

export default function Layout() {
  const [ready, setReady] = useState(() => sessionStorage.getItem('quobol-loaded') === '1')
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  const handleReady = () => {
    sessionStorage.setItem('quobol-loaded', '1')
    setReady(true)
  }

  return (
    <>
      <JsonLd />
      {!ready && <Preloader onComplete={handleReady} />}
      <div
        className={`min-h-screen bg-ink transition-opacity duration-700 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-cyan focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Navbar />
        <CursorGlow />
        <main id="main" className="relative z-0">
          <Outlet context={{ ready }} />
        </main>
        <Footer />
      </div>
    </>
  )
}
