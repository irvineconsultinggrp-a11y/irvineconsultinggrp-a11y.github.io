import { ChevronDown } from "lucide-react";
import React, { useId, useState } from 'react';

export default function FAQItem({ question, answer, isLast }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const buttonId = useId();

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

        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          hidden={!isOpen}
          className={`overflow-hidden px-6 transition-[max-height,opacity] duration-300 ease-in-out ${
            isOpen ? 'max-h-[28rem] opacity-100 pb-5' : 'max-h-0 opacity-0 pb-0'
          }`}
        >
          {isOpen && (
            <p className="max-w-[calc(100%-3rem)] break-words leading-relaxed text-xs md:text-sm text-white/95 font-normal [text-rendering:geometricPrecision]">
              {answer}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
