import { motion } from 'framer-motion'

type Props = {
  className?: string
  logoClassName?: string
  animate?: boolean
}

/** Concentric rings with the Quobol emblem perfectly centered. */
export default function BrandOrbit({
  className = '',
  logoClassName = 'h-[55%] w-[55%]',
  animate = true,
}: Props) {
  return (
    <div className={`relative aspect-square w-full ${className}`} aria-hidden>
      <div className="absolute inset-[8%] rounded-full border border-cyan/15" />
      <div className="absolute inset-[18%] rounded-full border border-cyan/25" />
      <motion.div
        className="absolute inset-[28%] rounded-full border border-dashed border-cyan/35"
        animate={animate ? { rotate: 360 } : undefined}
        transition={animate ? { duration: 60, repeat: Infinity, ease: 'linear' } : undefined}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.img
          src="/logo-emblem.png"
          alt=""
          className={`${logoClassName} object-contain drop-shadow-[0_0_40px_rgba(53,230,214,0.45)]`}
          animate={animate ? { scale: [1, 1.04, 1] } : undefined}
          transition={
            animate ? { duration: 3.5, repeat: Infinity, ease: 'easeInOut' } : undefined
          }
        />
      </div>
    </div>
  )
}
