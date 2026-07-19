import { useEffect, useRef } from 'react'

/** Soft cyan glow that follows the cursor within the hero region. */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const trail = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)
  const active = useRef(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (prefersReduced || isTouch) return

    const onMove = (e: MouseEvent) => {
      const hero = document.getElementById('top')
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      const inside =
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right

      active.current = inside
      pos.current = { x: e.clientX, y: e.clientY }

      if (glowRef.current) {
        glowRef.current.style.opacity = inside ? '1' : '0'
      }
      if (trailRef.current) {
        trailRef.current.style.opacity = inside ? '0.55' : '0'
      }
    }

    const loop = () => {
      trail.current.x += (pos.current.x - trail.current.x) * 0.12
      trail.current.y += (pos.current.y - trail.current.y) * 0.12

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 120}px, ${pos.current.y - 120}px)`
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trail.current.x - 40}px, ${trail.current.y - 40}px)`
      }
      raf.current = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-30 hidden md:block" aria-hidden>
      <div
        ref={glowRef}
        className="absolute h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(53,230,214,0.22)_0%,transparent_70%)] opacity-0 transition-opacity duration-300 will-change-transform"
      />
      <div
        ref={trailRef}
        className="absolute h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(53,230,214,0.45)_0%,transparent_70%)] opacity-0 blur-sm will-change-transform"
      />
    </div>
  )
}
