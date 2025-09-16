import { motion } from 'framer-motion'

const badges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    text: "GDPR-aligned",
    description: "Privacy-first design and GDPR compliance"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    text: "Confirm-first (HITL)",
    description: "Human-in-the-loop confirmation for critical decisions"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10,9 9,9 8,9"/>
      </svg>
    ),
    text: "Audit Trails",
    description: "Automatic audit trails for all actions"
  }
]

export default function HeroBadges() {
  return (
    <motion.div 
      className="flex flex-wrap gap-3 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      {badges.map((badge, index) => (
        <motion.div
          key={badge.text}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm text-white/90 hover:bg-white/10 transition-colors"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
          title={badge.description}
        >
          <span className="text-cyan-300">{badge.icon}</span>
          <span>{badge.text}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
