import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { containerStagger, fadeInUp } from '../anim/variants.js'
import SectionBg from '../ui/SectionBg'

const chips = [
  'noise-reduced alerts',
  'policy-ready deploys',
  'observability',
  'agentic (dev)',
  'retry-safe pipelines',
]

const sectors = [
  {
    title: 'Councils & Local Government',
    description: 'Purpose-built solutions for public sector integration challenges.',
    features: [
      'GDPR-compliant data handling',
      'Public sector security standards',
      'Citizen privacy protection',
      'Audit trail compliance',
      'Multi-vendor integration',
    ],
    useCases: [
      'Smart Parking Management',
      'Security Infrastructure',
      'Civic Operations',
    ],
    accent: 'emerald',
  },
  {
    title: 'Private Industry',
    description: 'Enterprise-grade integrations for security, mobility, and campus estates.',
    features: [
      'Enterprise scalability',
      '24/7 monitoring & support',
      'Custom API development',
      'High-availability deployment',
      'Advanced analytics',
    ],
    useCases: [
      'Campus Security',
      'Fleet Management',
      'Facility Analytics',
    ],
    accent: 'blue',
  },
]

const getAccentColor = (accent) => {
  switch (accent) {
    case 'emerald':
      return 'text-emerald-400 border-emerald-400/30 hover:bg-emerald-400/5'
    case 'blue':
      return 'text-blue-400 border-blue-400/30 hover:bg-blue-400/5'
    default:
      return 'text-cyan-400 border-cyan-400/30 hover:bg-cyan-400/5'
  }
}

export default function SectionIndustries() {
  return (
    <section
      id="industries"
      className="relative min-h-screen bg-noir-800 text-white flex flex-col items-center justify-center py-20 overflow-hidden"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '800px 600px' }}
      aria-label="Industries"
    >
      <SectionBg tone="dark" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        className="mx-auto max-w-7xl px-6 w-full flex flex-col items-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        <motion.h2
          className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent"
          variants={fadeInUp}
        >
          Industries
        </motion.h2>

        <motion.p
          className="text-center text-white/80 max-w-2xl mb-12 text-lg leading-relaxed"
          variants={fadeInUp}
        >
          Specialized solutions for complex integration challenges across sectors
          engineered for compliance, scale, and real-world resilience.
        </motion.p>
        <motion.div
          className="grid gap-3 md:grid-cols-2 w-full max-w-5xl mb-16"
          variants={containerStagger}
        >
          {sectors.map((sector) => (
            <motion.article
              key={sector.title}
              className={`group relative rounded-2xl border bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-${sector.accent}-400/10 ${getAccentColor(
                sector.accent
              )} w-full`}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 blur-xl"></div>

              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                {sector.title}
              </h3>
              <p className="text-white/80 mb-4 leading-relaxed">{sector.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-current inline-block"></span>
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {sector.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-white/80 text-sm group/item"
                    >
                      <CheckCircle
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          sector.accent === 'emerald'
                            ? 'text-emerald-400'
                            : 'text-blue-400'
                        } transition-transform duration-300 group-hover/item:scale-110`}
                      />
                      <span className="transition-colors duration-300 group-hover/item:text-white">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-current inline-block"></span>
                  Common Use Cases
                </h4>
                <ul className="space-y-2">
                  {sector.useCases.map((useCase, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-white/80 text-sm group/item"
                    >
                      <CheckCircle
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          sector.accent === 'emerald'
                            ? 'text-emerald-300'
                            : 'text-blue-300'
                        } transition-transform duration-300 group-hover/item:scale-110`}
                      />
                      <span className="transition-colors duration-300 group-hover/item:text-white">
                        {useCase}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={fadeInUp}
        >
          {chips.map((c) => (
            <motion.span
              key={c}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105 cursor-pointer"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {c}
            </motion.span>
          ))}
        </motion.div>

        <div className="absolute -z-10 top-1/4 left-10 w-20 h-20 bg-emerald-500/5 rounded-full blur-xl animate-blob"></div>
        <div className="absolute -z-10 bottom-1/4 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-blob animation-delay-2000"></div>
      </motion.div>
      <style>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </section>
  )
}