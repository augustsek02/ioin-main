import { motion } from 'framer-motion'

export default function NoirAuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* Base dark space */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Aurora streams */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="aurora-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="aurora-purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="aurora-teal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
          </linearGradient>
          <filter id="glow-aurora" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Aurora stream 1 - flowing from top-left */}
        <motion.path
          d="M0,200 Q400,150 800,200 Q1200,250 1600,180 Q1920,160 1920,300"
          stroke="url(#aurora-blue)"
          strokeWidth="3"
          fill="none"
          filter="url(#glow-aurora)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Aurora stream 2 - flowing from top-right */}
        <motion.path
          d="M1920,100 Q1500,80 1000,120 Q500,160 200,140 Q0,120 0,250"
          stroke="url(#aurora-purple)"
          strokeWidth="2.5"
          fill="none"
          filter="url(#glow-aurora)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />

        {/* Aurora stream 3 - flowing from center */}
        <motion.path
          d="M960,0 Q1200,200 1000,400 Q800,600 600,500 Q400,400 200,600 Q0,800 0,1080"
          stroke="url(#aurora-teal)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow-aurora)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 4 }}
        />

        {/* Subtle circuit-like patterns */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.circle
            key={`circuit-${i}`}
            r="2"
            fill="rgba(96,165,250,0.3)"
            cx={200 + i * 200}
            cy={300 + (i % 3) * 200}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.6, 0], scale: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </svg>

      {/* Floating particles */}
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-cyan-300/40 rounded-full"
          style={{
            left: `${(i * 47) % 100}%`,
            top: `${(i * 23) % 100}%`,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0], 
            y: [0, -20, 0],
            x: [0, Math.sin(i) * 10, 0]
          }}
          transition={{ 
            duration: 6 + (i % 3), 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 0.3 
          }}
        />
      ))}
    </div>
  )
}
