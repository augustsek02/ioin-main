import { useState } from 'react'
import { motion } from 'framer-motion'
import { containerStagger, fadeInUp } from '../anim/variants.js'
import SectionBg from '../ui/SectionBg'

export default function SectionOpsFaq() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: 'On-prem or hybrid?',
      a: 'Supported. Deploy on-prem, hybrid, or SaaS with strict data boundaries.',
    },
    {
      q: 'Add my system via API connectors?',
      a: 'Yes. We integrate via standard interfaces or vendor SDKs.',
    },
    {
      q: 'Confirm-first approvals?',
      a: 'Human-in-the-loop approvals for sensitive actions are built-in.',
    },
  ]

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section
      id="ops-faq"
      className="relative min-h-screen bg-white text-noir-900 flex items-center justify-center"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '800px 600px' }}
      aria-label="Ops & FAQ"
    >
      <SectionBg tone="light" />
      <motion.div
        className="mx-auto max-w-5xl px-6 py-20 w-full text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        <motion.h2
          className="text-3xl md:text-4xl tracking-tight"
          variants={fadeInUp}
        >
          Ops & FAQ
        </motion.h2>
        <motion.p
          className="mt-3 max-w-2xl mx-auto text-noir-700/80 text-base"
          variants={fadeInUp}
        >
          Common questions about our integration solutions and operational practices.
        </motion.p>
        <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
          <a className="underline" href="/product">Product</a>
          <a className="underline" href="/security-policy">Security policy</a>
          <a className="underline" href="/privacy-policy">Privacy policy</a>
        </div>
        <motion.div className="mt-12 space-y-4 text-left" variants={containerStagger}>
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={f.q}
                variants={fadeInUp}
                className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-md p-4 sm:p-5 transition-all duration-300 hover:bg-white/20"
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between text-left text-base text-noir-800 focus:outline-none"
                >
                  <span className="leading-tight">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-lg"
                  >
                    +
                  </motion.span>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden text-noir-700/80 mt-2 text-sm leading-snug"
                >
                  {f.a}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
