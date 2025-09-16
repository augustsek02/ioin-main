import { motion } from 'framer-motion'

export default function AuroraBackground({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute inset-0 bg-slate-950" />

      <motion.div
        className="absolute -top-1/3 -left-1/4 w-[1000px] h-[1000px] rounded-full"
        style={{
          background:
            'radial-gradient(42% 42% at 50% 50%, rgba(99,102,241,0.70), transparent 60%)',
          filter: 'blur(80px)'
        }}
        initial={{ x: -80, y: -40, opacity: 0.95 }}
        animate={{ x: [ -80, 60, -10, -80 ], y: [ -40, -10, 30, -40 ] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute -right-1/4 -top-1/4 w-[820px] h-[820px] rounded-full"
        style={{
          background:
            'radial-gradient(42% 42% at 50% 50%, rgba(56,189,248,0.65), transparent 60%)',
          filter: 'blur(80px)'
        }}
        initial={{ x: 80, y: -20, opacity: 0.95 }}
        animate={{ x: [ 80, -10, 50, 80 ], y: [ -20, 40, -10, -20 ] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute left-1/3 bottom-[-30%] w-[900px] h-[900px] rounded-full"
        style={{
          background:
            'radial-gradient(42% 42% at 50% 50%, rgba(16,185,129,0.55), transparent 60%)',
          filter: 'blur(80px)'
        }}
        initial={{ x: 0, y: 40, opacity: 0.9 }}
        animate={{ x: [ 0, -40, 30, 0 ], y: [ 40, 10, -10, 40 ] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Additional aurora accents for stronger color presence */}
      <motion.div
        className="absolute left-[-10%] top-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            'radial-gradient(42% 42% at 50% 50%, rgba(139,92,246,0.45), transparent 60%)',
          filter: 'blur(70px)'
        }}
        initial={{ x: -60, y: 0, opacity: 0.85 }}
        animate={{ x: [ -60, -10, -40, -60 ], y: [ 0, -20, 10, 0 ] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute right-[-8%] bottom-[-10%] w-[680px] h-[680px] rounded-full"
        style={{
          background:
            'radial-gradient(42% 42% at 50% 50%, rgba(244,63,94,0.35), transparent 60%)',
          filter: 'blur(70px)'
        }}
        initial={{ x: 40, y: 60, opacity: 0.75 }}
        animate={{ x: [ 40, 10, 30, 40 ], y: [ 60, 20, 80, 60 ] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
    </div>
  )
}


