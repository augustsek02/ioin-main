import { motion } from 'framer-motion'
import { useState } from 'react'

const themes = [
  { id: 'noir-aurora', name: 'Noir Aurora', active: true },
  { id: 'city-grid', name: 'City Grid', active: false },
  { id: 'neo-industrial', name: 'Neo-Industrial', active: false }
]

export default function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState(themes[0])

  return (
    <div className="relative">
      <motion.button
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm text-sm text-white/80 hover:bg-white/10 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>Theme</span>
        <span className="text-cyan-300">{selectedTheme.name}</span>
        <motion.svg
          className="w-4 h-4"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path d="M7 10l5 5 5-5z" fill="currentColor" />
        </motion.svg>
      </motion.button>

      {isOpen && (
        <motion.div
          className="absolute top-full left-0 mt-2 w-48 rounded-lg border border-white/20 bg-slate-900/95 backdrop-blur-sm shadow-xl z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {themes.map((theme) => (
            <motion.button
              key={theme.id}
              className={`w-full px-4 py-3 text-left text-sm transition-colors first:rounded-t-lg last:rounded-b-lg ${
                theme.id === selectedTheme.id
                  ? 'bg-cyan-500/20 text-cyan-300'
                  : 'text-white/80 hover:bg-white/10'
              }`}
              onClick={() => {
                setSelectedTheme(theme)
                setIsOpen(false)
              }}
              whileHover={{ x: 4 }}
            >
              {theme.name}
            </motion.button>
          ))}
        </motion.div>
      )}
    </div>
  )
}
