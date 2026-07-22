import { motion } from 'framer-motion'
import type { ServiceIcon } from '../data/services'
import BrandOrbit from './BrandOrbit'

/** Animated visual explaining each service at a glance. */
export default function ServiceVisual({ type }: { type: ServiceIcon }) {
  if (type === 'ai') {
    return (
      <div className="relative mx-auto aspect-square w-full max-w-sm">
        <motion.div
          className="absolute inset-[18%] rounded-full border border-cyan/25"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-[30%] rounded-full border border-dashed border-cyan/40"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
        {['CRM', 'ERP', 'App', 'Data'].map((label, i) => {
          const angle = (i / 4) * Math.PI * 2 - Math.PI / 2
          const x = 50 + Math.cos(angle) * 38
          const y = 50 + Math.sin(angle) * 38
          return (
            <motion.div
              key={label}
              className="absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan/30 bg-ink-elevated text-[0.65rem] font-semibold text-cyan"
              style={{ left: `${x}%`, top: `${y}%` }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.4, delay: i * 0.3, repeat: Infinity }}
            >
              {label}
            </motion.div>
          )
        })}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="rounded-full bg-cyan/15 px-5 py-3 font-display text-sm font-semibold text-cyan shadow-[0_0_30px_rgba(53,230,214,0.25)]"
            animate={{ boxShadow: ['0 0 20px rgba(53,230,214,0.2)', '0 0 40px rgba(53,230,214,0.45)', '0 0 20px rgba(53,230,214,0.2)'] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            AI Core
          </motion.div>
        </div>
      </div>
    )
  }

  if (type === 'crm') {
    const hubs = [
      { label: 'Salesforce', x: 50, y: 18 },
      { label: 'HubSpot', x: 82, y: 42 },
      { label: 'Dynamics', x: 72, y: 78 },
      { label: 'Custom', x: 28, y: 78 },
      { label: 'Zoho', x: 18, y: 42 },
    ]
    return (
      <div className="relative mx-auto aspect-square w-full max-w-sm">
        <motion.div
          className="absolute inset-[12%] rounded-full border border-cyan/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
          {hubs.map((h) => (
            <motion.line
              key={h.label}
              x1="50"
              y1="50"
              x2={h.x}
              y2={h.y}
              stroke="#35e6d6"
              strokeWidth="0.4"
              strokeOpacity="0.35"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0.2, 1, 0.2], strokeOpacity: [0.2, 0.55, 0.2] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </svg>
        <motion.div
          className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-cyan/40 bg-ink-elevated text-center shadow-[0_0_32px_rgba(53,230,214,0.3)]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.8, repeat: Infinity }}
        >
          <span className="font-display text-[0.65rem] font-bold tracking-wide text-cyan">CRM</span>
          <span className="text-[0.55rem] text-mist-muted">Core</span>
        </motion.div>
        {hubs.map((h, i) => (
          <motion.div
            key={h.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan/30 bg-ink-deep px-2 py-1.5 text-[0.58rem] font-semibold text-cyan"
            style={{ left: `${h.x}%`, top: `${h.y}%` }}
            animate={{ y: [0, -4, 0], boxShadow: ['0 0 0 rgba(53,230,214,0)', '0 0 14px rgba(53,230,214,0.35)', '0 0 0 rgba(53,230,214,0)'] }}
            transition={{ duration: 2.4, delay: i * 0.25, repeat: Infinity }}
          >
            {h.label}
          </motion.div>
        ))}
        <motion.div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-[0.6rem] text-mist-muted"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Leads · Accounts · Cases · Pipeline
        </motion.div>
      </div>
    )
  }

  if (type === 'web') {
    return (
      <div className="relative mx-auto flex h-72 w-full max-w-sm items-end justify-center gap-4">
        <motion.div
          className="h-44 w-28 rounded-xl border border-cyan/25 bg-ink-elevated/80 p-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="mb-2 flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-cyan/30" />
          </div>
          <motion.div className="space-y-1.5" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity }}>
            <div className="h-2 w-full rounded bg-cyan/20" />
            <div className="h-2 w-4/5 rounded bg-cyan/15" />
            <div className="h-16 w-full rounded bg-cyan/10" />
          </motion.div>
          <p className="mt-2 text-center text-[0.6rem] text-mist-muted">Web</p>
        </motion.div>
        <motion.div
          className="h-56 w-20 rounded-[1.25rem] border border-cyan/35 bg-ink-elevated p-1.5 shadow-[0_0_28px_rgba(53,230,214,0.15)]"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: [0, -6, 0], opacity: 1 }}
          transition={{ y: { duration: 3, repeat: Infinity }, opacity: { delay: 0.2 } }}
        >
          <div className="h-full rounded-[1rem] border border-cyan/10 bg-ink-deep p-2">
            <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-cyan/30" />
            <div className="space-y-1.5">
              <div className="h-2 w-full rounded bg-cyan/25" />
              <div className="h-10 w-full rounded bg-cyan/15" />
              <div className="h-2 w-3/4 rounded bg-cyan/20" />
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  if (type === 'rpa') {
    return (
      <div className="relative mx-auto flex h-64 w-full max-w-sm flex-col items-center justify-center gap-3">
        {['Intake', 'Validate', 'Update systems', 'Exception?'].map((step, i) => (
          <motion.div
            key={step}
            className="flex w-56 items-center gap-3 rounded-xl border border-cyan/20 bg-ink-elevated/70 px-3 py-2 text-sm text-mist"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.15 }}
          >
            <motion.span
              className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan/15 text-xs font-bold text-cyan"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ delay: i * 0.4, duration: 1.8, repeat: Infinity }}
            >
              {i + 1}
            </motion.span>
            {step}
          </motion.div>
        ))}
        <motion.div
          className="absolute -right-2 top-1/2 h-24 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-cyan/0 via-cyan to-cyan/0"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
    )
  }

  if (type === 'cloud') {
    return (
      <div className="relative mx-auto h-64 w-full max-w-sm">
        {['Dev', 'Staging', 'Prod'].map((env, i) => (
          <motion.div
            key={env}
            className="absolute left-1/2 w-48 -translate-x-1/2 rounded-xl border border-cyan/25 bg-ink-elevated/80 px-4 py-3 text-center"
            style={{ top: 28 + i * 52 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.5, delay: i * 0.25, repeat: Infinity }}
          >
            <p className="font-display text-sm font-semibold text-cyan">{env}</p>
            <p className="text-[0.65rem] text-mist-muted">IaC · CI/CD · Observability</p>
          </motion.div>
        ))}
      </div>
    )
  }

  // Generic circuit pulse for remaining types
  return (
    <div className="relative mx-auto w-full max-w-xs">
      <BrandOrbit logoClassName="h-[58%] w-[58%] opacity-95" />
    </div>
  )
}
