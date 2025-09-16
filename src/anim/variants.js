import { useReducedMotion, motion } from 'framer-motion'

export const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
}

export const containerStagger = {
  hidden: {},
  visible: (delay = 0) => ({
    transition: { staggerChildren: 0.08, delayChildren: delay },
  }),
}

export const float = {
  initial: { y: 0 },
  animate: { y: [0, -6, 0], transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' } },
}

export function useMaybeMotion() {
  // Convenience hook to disable animations when user prefers reduced motion
  const prefersReducedMotion = useReducedMotion()
  return { prefersReducedMotion, Motion: motion }
}


