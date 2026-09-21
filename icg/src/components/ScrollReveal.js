import { motion, useReducedMotion } from 'framer-motion';
import { DUR, EASE, VIEWPORT_LOOSE } from '../lib/motion';

/**
 * Enter-once reveal for below-fold sections. Short rise on the shared expo
 * curve — the translate is a transform, so it never reflows content near a
 * section boundary.
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 16,
  duration = DUR.base,
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_LOOSE}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
