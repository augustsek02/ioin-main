import { motion } from 'framer-motion'
import { containerStagger, fadeInUp } from '../anim/variants.js'
import SectionBg from '../ui/SectionBg'

export default function SectionAgentic() {
  const features = [
    {
      title: 'Automated Workflow Management',
      desc: 'Manage multi-agent pipelines with HITL safeguards, real-time monitoring, and audit-ready logs for safe and scalable automation.',
      size: 'large'
    },
    {
      title: 'Task Scheduling',
      desc: 'Execute tasks on schedule or events with full observability, transparent logs, and compliance-ready reporting.',
      size: 'small'
    },
    {
      title: 'Custom Tasks',
      desc: 'Create bespoke tasks with configurable thresholds and safeguards to meet your specific workflow needs.',
      size: 'small'
    }
  ]

  const getCardClasses = (feature) => {
    switch (feature.size) {
      case 'large':
        return 'md:col-span-2 md:row-span-1'
      case 'small':
        return 'md:col-span-1 md:row-span-1' 
      default:
        return 'md:col-span-1 md:row-span-1'
    }
  }

  return (
    <section
      id="agentic"
      className="relative min-h-screen bg-noir-900 text-white overflow-hidden reveal flex items-center justify-center py-20"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '800px 600px' }}
      aria-label="AI & Agentic (in development)"
    >
      <SectionBg tone="dark" />

      <motion.div
        className="mx-auto max-w-7xl w-full px-6 text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
       
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            AI & Agentic Systems
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-noir-700/80 text-white/70 text-lg">
            Automated workflow management, intelligent task scheduling, and comprehensive reporting — all designed for enterprise-grade AI operations.
          </p>
        
        </motion.div>

        
        <motion.div className="flex justify-center" variants={containerStagger}>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-3 max-w-2xl auto-rows-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className={`
                  group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-300
                  ${getCardClasses(feature)}
                `}
                variants={fadeInUp}
                whileHover={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <h3 className="text-xl font-bold text-white mb-3 text-left">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed text-left">
                  {feature.desc}
                </p>
                <div className="absolute bottom-6 left-6 right-6 h-px bg-white/10"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
