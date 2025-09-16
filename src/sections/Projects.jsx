import { motion } from 'framer-motion';
import { containerStagger, fadeInUp } from '../anim/variants.js';
import SectionBg from '../ui/SectionBg';
import EmblaCarousel from '../ui/EmblaCarousel.jsx';
import ClipReveal from '../ui/ClipReveal.jsx';

export default function SectionProjects() {
  const slides = [
    <CaseStudyCard
      title="City of Joondalup"
      desc="Municipal integrations reducing noise and time-to-action."
      chips={["public sector", "integrations", "noise↓"]}
    />,
    <CaseStudyCard
      title="Genetec ↔ EasyPark"
      desc="Reliable, bidirectional sync with audit trails."
      chips={["parking", "access", "audit"]}
    />,
    <CaseStudyCard
      title="Avigilon (in dev)"
      desc="Planned integration with clear, versioned configs."
      chips={["security", "video", "SDK"]}
    />,
  ];

  return (
    <section
      id="projects"
      className="relative h-screen bg-noir-800 text-white flex items-center justify-center overflow-hidden"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '700px 500px' }}
      aria-label="Current Projects"
    >
      <SectionBg tone="dark" />

      <motion.div
        className="mx-auto max-w-7xl px-6 py-20 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerStagger}
      >
        <motion.h2
          className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl text-center"
          variants={fadeInUp}
        >
          Current Projects
        </motion.h2>
        <motion.p
          className="mt-3 max-w-2xl mx-auto text-noir-700/80 text-center text-white/70"
          variants={fadeInUp}
        >
          Real-world implementations delivering measurable results for our clients
        </motion.p>

        <motion.div className="mt-12" variants={fadeInUp}>
          <ClipReveal>
            <EmblaCarousel slides={slides} />
          </ClipReveal>
        </motion.div>
      </motion.div>
    </section>
  );
}


function CaseStudyCard({ title, desc, chips = [] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-lg h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm md:text-base text-white/80">{desc}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-5">
        {chips.map((c, i) => (
          <span
            key={i}
            className="rounded-full border border-white/20 px-3 py-1 text-xs md:text-sm text-white/70"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
