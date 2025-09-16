import { motion } from 'framer-motion'
import { containerStagger, fadeInUp } from '../anim/variants.js'
import SectionBg from '../ui/SectionBg'

import { 
  Search, 
  Boxes, 
  Cog, 
  ShieldCheck, 
  Rocket 
} from 'lucide-react'

const steps = [
  { title: 'Discover', desc: 'Deep research, user interviews, and rapid prototyping', icon: Search },
  { title: 'Architect', desc: 'Agile design and scalable integration into your stack', icon: Boxes },
  { title: 'Implement', desc: 'Agile sprints with continuous delivery and precision builds', icon: Cog },
  { title: 'Validate', desc: 'Automated/manual QA, security reviews, and compliance checks', icon: ShieldCheck },
  { title: 'Operate', desc: 'On-prem, cloud, or edge deployment with ongoing support', icon: Rocket },
]

export default function SectionHowWeBuild() {
  return (
    <section
      id="how-we-build"
      className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900 flex items-center justify-center py-20 overflow-hidden"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '700px 500px' }}
      aria-label="How we build"
    >
      <SectionBg tone="light" />

      <motion.div
        className="mx-auto max-w-6xl w-full px-6 lg:px-8 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerStagger}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
            How We Build
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our proven process ensures quality at every stage of development
          </p>         
        </motion.div>      

        <div className="relative">        
          {/* Vertical timeline line */}
          <motion.div 
            className="absolute left-1/2 w-1 bg-gradient-to-b from-blue-200 to-indigo-200 transform -translate-x-1/2 hidden md:block"
            initial={{ top: "40px", height: 0 }}
            whileInView={{ height: "calc(100% - 120px)" }} // leave padding above first & below last
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />                

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              >            
                {/* Step Card */}
                <motion.div 
                  className={`w-full md:w-5/12 mb-6 md:mb-0 ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <motion.div 
                        className="mr-3"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.2, type: 'spring', stiffness: 400 }}
                      >
                        <step.icon className="w-6 h-6 text-blue-600" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <motion.p 
                      className="text-gray-600 flex-grow"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                    >
                      {step.desc}
                    </motion.p>
                  </div>
                </motion.div>                             

                {/* Step Number */}
                <div className="flex justify-center w-full md:w-2/12 order-first md:order-none">
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.1, type: 'spring', stiffness: 400 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold z-10 relative shadow-lg">
                      {i + 1}
                    </div>
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-blue-400"
                      initial={{ scale: 0.8, opacity: 0.7 }}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0.3, 0] }}
                      transition={{ delay: i * 0.15 + 0.4, duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                {/* Empty spacer for alignment */}
                <div className="w-full md:w-5/12 hidden md:block"></div>
              </motion.div>
            ))}
          </div>         
        </div>       
      </motion.div>
    </section>
  )
}
