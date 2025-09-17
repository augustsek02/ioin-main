import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { containerStagger, fadeInUp } from '../anim/variants.js'
import SectionBg from '../ui/SectionBg'

const logos = [
  { name: 'Genetec' },
  { name: 'EasyPark' },
  { name: 'City of Joondalup' },
  { name: 'Avigilon' },
]

export default function SectionPartners() {
  const [paused, setPaused] = useState(false)
  const regionRef = useRef(null)

  useEffect(() => {
    const el = regionRef.current
    if (!el) return
    const onKey = (e) => {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault()
        setPaused((p) => !p)
      }
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section
      id="partners"
      className="relative min-h-screen bg-white text-noir-900 reveal flex items-center justify-center py-20 overflow-hidden"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '600px 420px' }}
      aria-label="Partners & Integrations"
    >
      <SectionBg tone="light" />

      <motion.div
        className="mx-auto max-w-7xl w-full px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
          variants={fadeInUp}
        >
          Partners & Integrations
        </motion.h2>
        <motion.p
          className="mt-3 max-w-2xl mx-auto text-noir-700/80 leading-relaxed mb-12"
          variants={fadeInUp}
        >
          Seamlessly interoperable with Genetec and EasyPark, with Avigilon integration in progress. Support additional vendors via API connectors to standard interfaces or Vendor SDKs.
        </motion.p>

        <div
          ref={regionRef}
          role="region"
          aria-roledescription="marquee"
          aria-label="Partner logos scrolling horizontally"
          aria-live="polite"
          tabIndex={0}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="group relative overflow-hidden rounded-3xl border border-noir-200/50 bg-white/60 backdrop-blur-lg p-1 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-noir-300/80"
        >
          <div
            className="flex gap-10 whitespace-nowrap px-6 py-8 will-change-transform"
            style={{
              animation: paused ? 'none' : 'marquee 28s linear infinite',
            }}
          >
            {[...logos, ...logos, ...logos].map((l, i) => (
              <motion.div
                key={l.name + i}
                className="relative flex h-16 w-64 items-center justify-center rounded-2xl border border-noir-200/40 bg-white/80 px-6 font-medium text-noir-800 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-noir-300/60 hover:bg-white"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <div className="flex flex-col items-center">
                  <span>{l.name}</span>
                  {l.note && <span className="text-xs opacity-70 mt-1">({l.note})</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}