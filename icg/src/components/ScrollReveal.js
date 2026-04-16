import { motion, useReducedMotion } from 'framer-motion';

const variants = {
  hidden: {
    opacity: 0.55,
    filter: 'grayscale(0.38)',
    y: 28,
  },
  visible: {
    opacity: 1,
    filter: 'grayscale(0)',
    y: 0,
  },
};

/**
 * Scroll-linked section: fades in and lifts slightly when entering view;
 * dims and desaturates when scrolled away (once: false), similar to montlakeconsulting.com-style pages.
 */
export default function ScrollReveal({ children, className = '', delay = 0 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{
        once: false,
        amount: 0.22,
        margin: '0px 0px -8% 0px',
      }}
      transition={{
        duration: 0.52,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
