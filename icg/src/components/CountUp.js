import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
import { EASE } from '../lib/motion';

// "$300M+" -> { prefix: "$", number: 300, suffix: "M+" }
const PARTS = /^(\D*)([\d][\d,]*(?:\.\d+)?)(.*)$/s;

function format(n, sample) {
  const grouped = sample.includes(',');
  const decimals = (sample.split('.')[1] || '').length;
  const fixed = n.toFixed(decimals);
  if (!grouped) return fixed;
  const [int, frac] = fixed.split('.');
  const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return frac ? `${withCommas}.${frac}` : withCommas;
}

/**
 * Counts a stat up to its final value the first time it scrolls into view.
 * Takes the display string as-is ("20+", "$300M+") and animates only the
 * numeric run, so prefixes and suffixes stay put and the box never reflows.
 */
export default function CountUp({ value, className = '', duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();

  const match = String(value).match(PARTS);
  const prefix = match ? match[1] : '';
  const sample = match ? match[2] : '';
  const suffix = match ? match[3] : '';
  const target = match ? parseFloat(sample.replace(/,/g, '')) : null;

  const [shown, setShown] = useState(target == null ? null : 0);

  useEffect(() => {
    if (target == null || reduceMotion || !inView) return undefined;
    const controls = animate(0, target, {
      duration,
      ease: EASE,
      onUpdate: (v) => setShown(v),
    });
    return () => controls.stop();
  }, [inView, target, duration, reduceMotion]);

  if (target == null) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  const body = reduceMotion || !inView
    ? reduceMotion
      ? sample
      : format(0, sample)
    : format(shown, sample);

  return (
    <span ref={ref} className={className}>
      {/* Reserve the final width so the row never jitters while counting. */}
      <span className="invisible block h-0 overflow-hidden" aria-hidden>
        {value}
      </span>
      <span aria-hidden>
        {prefix}
        {body}
        {suffix}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
