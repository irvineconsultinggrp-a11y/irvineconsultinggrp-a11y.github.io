import { ChevronDown } from "lucide-react";
import React, { useId, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function FAQItem({ question, answer, isLast }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const buttonId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <div className={`min-w-0 ${!isLast ? 'mb-3' : ''}`}>
      <div
        className={`min-w-0 rounded-xl border transition-colors transition-shadow duration-300 ease-out ${
          isOpen
            ? 'bg-icgblue border-icgblue shadow-lg shadow-icgblue/30'
            : 'bg-white border-gray-200 hover:border-icgblue/40 hover:shadow-md'
        }`}
      >
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
          className={`grid w-full grid-cols-[minmax(0,1fr)_2.25rem] items-start gap-x-3 px-6 py-5 text-left ${
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
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-300 ease-out ${
                isOpen ? 'rotate-180 text-white' : 'text-icgblue'
              }`}
            />
          </span>
        </button>

        <motion.div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          aria-hidden={!isOpen}
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
          }
          className="overflow-hidden"
        >
          <p className="px-6 pb-5 break-words leading-relaxed text-xs md:text-sm text-white/95 font-normal [text-rendering:geometricPrecision]">
            {answer}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
