// Shared motion language. One easing family, one set of durations, one
// viewport rule — so every reveal on the site feels like the same hand.

// Expo-out. Fast commit, long settle: the curve that reads as "considered"
// rather than "snappy". Primary curve for everything that enters.
export const EASE = [0.22, 1, 0.36, 1];
// Slightly gentler tail, for large objects (images, panels) that need weight.
export const EASE_SOFT = [0.16, 1, 0.3, 1];
// Symmetric, for state toggles that play in both directions (accordions).
export const EASE_IN_OUT = [0.65, 0, 0.35, 1];

export const DUR = {
  fast: 0.35,
  base: 0.62,
  slow: 0.9,
  image: 1.15,
};

// Trigger a little before the element is fully on screen, and never replay.
export const VIEWPORT = { once: true, amount: 0.2, margin: '0px 0px -8% 0px' };
export const VIEWPORT_LOOSE = { once: true, amount: 0.05, margin: '0px 0px -4% 0px' };

// Distance is deliberately short. Long travel reads as a template.
export const fadeUp = (y = 20, duration = DUR.base) => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0, transition: { duration, ease: EASE } },
});

export const fadeIn = (duration = DUR.base) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration, ease: EASE } },
});

// A longer, heavier rise for headlines.
//
// Deliberately transform + opacity only. An earlier version animated
// clipPath between 'inset(0% 0% 100% 0%)' and 'inset(0% 0% 0% 0%)'; Chrome
// normalises the latter to 'inset(0%)', so the two strings end up with
// different component counts and the interpolation fails silently, leaving
// the element pinned at hidden. For the true wipe, see the mask preset in
// components/Motion.js, which clips with overflow instead.
export const maskUp = (y = 28, duration = DUR.slow) => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0, transition: { duration, ease: EASE } },
});

// Inner half of the overflow wipe: the line slides up from below its own
// clipped box. Percentage translate is relative to the line's own height.
export const wipeLine = (duration = DUR.slow, delay = 0) => ({
  hidden: { y: '115%' },
  visible: { y: '0%', transition: { duration, ease: EASE, delay } },
});

// Image settles from slightly overscaled behind a rising mask.
export const imageReveal = (duration = DUR.image) => ({
  hidden: { clipPath: 'inset(0% 0% 100% 0%)' },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration, ease: EASE_SOFT },
  },
});

export const imageSettle = (duration = DUR.image) => ({
  hidden: { scale: 1.08 },
  visible: { scale: 1, transition: { duration: duration * 1.25, ease: EASE_SOFT } },
});

export const stagger = (staggerChildren = 0.075, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

// A hairline that draws itself left-to-right.
export const ruleDraw = (duration = DUR.slow) => ({
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration, ease: EASE } },
});
