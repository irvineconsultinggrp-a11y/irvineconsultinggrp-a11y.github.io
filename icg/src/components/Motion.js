import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  DUR,
  VIEWPORT,
  fadeUp,
  fadeIn,
  maskUp,
  imageShutter,
  imageCounter,
  imageSettle,
  ruleDraw,
  stagger,
  wipeLine,
} from '../lib/motion';

// The true masked reveal: an overflow-hidden frame with the copy sliding up
// from beneath its own bottom edge. Pure transform, so it cannot fail the
// way an interpolated clipPath string can.
//
// The frame carries bottom padding cancelled by an equal negative margin so
// descenders (g, y, Q) are not shaved off, while layout stays identical.
function WipeFrame({ children, duration, delay }) {
  return (
    <span
      className="block overflow-hidden"
      style={{ paddingBottom: '0.18em', marginBottom: '-0.18em' }}
    >
      <motion.span
        className="block"
        variants={wipeLine(duration ?? DUR.slow, delay)}
      >
        {children}
      </motion.span>
    </span>
  );
}

const PRESETS = {
  up: fadeUp,
  fade: (_, d) => fadeIn(d),
  mask: maskUp,
  rule: (_, d) => ruleDraw(d),
};

// A `transition` prop on a motion component replaces the one declared inside
// its variants — which silently drops the tween that clipPath needs and
// leaves masked elements stuck at hidden. Fold the delay into the variant.
function withDelay(variants, delay) {
  if (!delay) return variants;
  return {
    ...variants,
    visible: {
      ...variants.visible,
      transition: { ...(variants.visible.transition || {}), delay },
    },
  };
}

/**
 * Scroll-triggered entrance for a single element.
 *
 * preset="up"   fade + short rise (default)
 * preset="mask" clip-wipe from the bottom edge — for headlines
 * preset="fade" opacity only — for things that sit near a layout boundary
 * preset="rule" horizontal scale — for hairline dividers
 */
export function Reveal({
  children,
  className = '',
  preset = 'up',
  y,
  delay = 0,
  duration,
  once = true,
  amount,
  as = 'div',
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as] || motion.div;

  if (reduceMotion) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  const viewport = { ...VIEWPORT, once, ...(amount != null ? { amount } : {}) };

  // The observer must sit on the un-translated outer element. Putting it on
  // the sliding line would mean observing a box that starts a full line
  // below its frame, which can keep it from ever registering as in view.
  if (preset === 'mask') {
    return (
      <Tag
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        {...rest}
      >
        <WipeFrame duration={duration} delay={delay}>
          {children}
        </WipeFrame>
      </Tag>
    );
  }

  const build = PRESETS[preset] || fadeUp;
  const variants = withDelay(build(y, duration), delay);

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={viewport}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Parent that cascades its <StaggerItem> children. Put it on the grid/list,
 * not on the section, so the cascade tracks reading order.
 */
export function Stagger({
  children,
  className = '',
  step = 0.075,
  delay = 0,
  once = true,
  amount,
  as = 'div',
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as] || motion.div;

  if (reduceMotion) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      variants={stagger(step, delay)}
      viewport={{ ...VIEWPORT, once, ...(amount != null ? { amount } : {}) }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({
  children,
  className = '',
  preset = 'up',
  y,
  duration,
  as = 'div',
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as] || motion.div;

  if (reduceMotion) {
    const Plain = as;
    return (
      <Plain className={className} {...rest}>
        {children}
      </Plain>
    );
  }

  if (preset === 'mask') {
    return (
      <Tag className={className} {...rest}>
        <WipeFrame duration={duration}>{children}</WipeFrame>
      </Tag>
    );
  }

  const build = PRESETS[preset] || fadeUp;

  return (
    <Tag className={className} variants={build(y, duration)} {...rest}>
      {children}
    </Tag>
  );
}

/**
 * Image that wipes in behind a travelling mask while settling out of a
 * slight overscale.
 *
 * `className` must carry overflow-hidden and the frame's size — the shutter
 * is clipped by it. Inside, two counter-running translates cancel out so the
 * picture holds still while the mask moves across it.
 */
export function ImageReveal({
  children,
  className = '',
  innerClassName = '',
  delay = 0,
  once = true,
  ...rest
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} {...rest}>
        <div className={innerClassName}>{children}</div>
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...VIEWPORT, once }}
      {...rest}
    >
      <motion.div className="h-full w-full" variants={imageShutter(DUR.image, delay)}>
        <motion.div className="h-full w-full" variants={imageCounter(DUR.image, delay)}>
          <motion.div className={innerClassName} variants={imageSettle(DUR.image, delay)}>
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export { DUR };
