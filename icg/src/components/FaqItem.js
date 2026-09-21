import { ChevronDown } from "lucide-react";
import React, { useId, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { EASE, EASE_IN_OUT } from '../lib/motion';

export default function FAQItem({ question, answer, isLast }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const buttonId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <div className={`min-w-0 ${!isLast ? 'mb-3' : ''}`}>
      <motion.div
        className={`card-lift min-w-0 rounded-xl border ${
          isOpen
            ? 'bg-icgblue border-icgblue shadow-lg shadow-icgblue/30'
            : 'bg-white border-gray-200 hover:border-icgblue/40 hover:shadow-md'
        }`}
        animate={reduceMotion ? undefined : { scale: isOpen ? 1.012 : 1 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
          className={`grid w-full grid-cols-[minmax(0,1fr)_2.25rem] items-start gap-x-3 px-6 py-5 text-left transition-colors duration-300 ${
            isOpen ? 'text-white' : 'text-icgblue'
          }`}
        >
          <h3 className="min-w-0 max-w-full break-words text-lg md:text-xl font-normal leading-snug [text-rendering:geometricPrecision]">
            {question}
          </h3>
          <span
            className="inline-flex h-9 w-full items-center justify-center rounded-md"
            aria-hidden
          >
            <motion.span
              animate={reduceMotion ? undefined : { rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.42, ease: EASE }}
              className="inline-flex"
            >
              <ChevronDown
                className={`h-5 w-5 transition-colors duration-300 ${
                  isOpen ? 'text-white' : 'text-icgblue'
                }`}
              />
            </motion.span>
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              key="panel"
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.42, ease: EASE_IN_OUT },
                opacity: { duration: 0.28, ease: EASE_IN_OUT },
              }}
              className="overflow-hidden"
            >
              {/* Copy lags the panel slightly so the text arrives into an
                  already-open box instead of stretching with it. */}
              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE, delay: reduceMotion ? 0 : 0.1 }}
                className="px-6 pb-5 break-words leading-relaxed text-xs md:text-sm text-white/95 font-normal [text-rendering:geometricPrecision]"
              >
                {answer}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
