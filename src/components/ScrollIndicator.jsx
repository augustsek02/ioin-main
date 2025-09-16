import { motion } from 'framer-motion'

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <motion.div
        className="flex flex-col items-center gap-2 text-cyan-300/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs font-medium tracking-wider">SCROLL</span>
        <motion.svg
          className="w-6 h-6"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M12 5l-7 7h4v5h6v-5h4l-7-7z"
            fill="currentColor"
            opacity="0.8"
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}
