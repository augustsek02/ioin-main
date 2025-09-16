import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { containerStagger, fadeInUp } from '../anim/variants.js';
import SectionBg from '../ui/SectionBg';

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

export default function SectionSecurity() {
  const securityFeatures = [
    {
      title: 'GDPR Compliance',
  desc: 'GDPR-aligned, data processing & residency info on request, privacy-first approach'
},
    {
      title: 'Data Minimisation',
      desc: 'Least-privilege access, secrets hygiene, controlled data handling'
    },
    {
      title: 'Security Practices',
      desc: 'Encryption in transit & at rest, change control, observability, threat detection, access monitoring'
    },
    {
      title: 'ISO-Certified Cloud',
      desc: 'ISO-certified cloud datacentres, health probes, rollbacks, reliability by design'
    }
  ];

  const TiltedCard = ({ children }) => {
    const ref = useRef(null);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);

    function handleMouse(e) {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;

      rotateX.set((offsetY / (rect.height / 2)) * -10);
      rotateY.set((offsetX / (rect.width / 2)) * 10);
    }

    function handleMouseEnter() {
      scale.set(1.03);
    }

    function handleMouseLeave() {
      scale.set(1);
      rotateX.set(0);
      rotateY.set(0);
    }

    return (
      <motion.div
        ref={ref}
        className="relative w-full [perspective:800px]"
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="relative [transform-style:preserve-3d] w-full"
          style={{ rotateX, rotateY, scale }}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section
      id="security"
      className="relative min-h-screen bg-noir-900 text-white flex items-center justify-center py-20 overflow-hidden"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '700px 500px' }}
      aria-label="Security & Reliability"
    >
      <SectionBg tone="dark" />

      <motion.div
        className="mx-auto max-w-4xl px-6 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        <motion.div className="mb-12 text-center" variants={fadeInUp}>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl mb-4">
            Security & Reliability
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Enterprise-grade security measures and reliable infrastructure for your peace of mind
          </p>
         
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {securityFeatures.map((feature) => (
            <motion.div key={feature.title} variants={fadeInUp}>
              <TiltedCard>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden w-full h-full p-4 flex flex-col justify-between">
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/60 text-sm">{feature.desc}</p>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-30"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10"></div>
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20 rounded-tl-2xl"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 rounded-tr-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 rounded-bl-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20 rounded-br-2xl"></div>
                </div>
              </TiltedCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
