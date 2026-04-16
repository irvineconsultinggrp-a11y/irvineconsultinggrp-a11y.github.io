import { ChevronDown } from "lucide-react";
import React, { useState } from 'react';

export default function FAQItem({ question, answer, isLast }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`min-w-0 ${!isLast ? 'mb-3' : ''}`}>
      <div
        className={`min-w-0 rounded-xl border transition-colors transition-shadow duration-300 ease-out ${
          isOpen
            ? 'bg-icgblue border-icgblue shadow-lg shadow-icgblue/30'
            : 'bg-white border-gray-200 hover:border-icgblue/40 hover:shadow-md'
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div
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
              className={`h-5 w-5 transition-transform duration-300 ease-out will-change-transform ${
                isOpen ? 'rotate-180 text-white' : 'text-icgblue'
              }`}
            />
          </span>
        </div>

        {/* px-6 always so horizontal width does not change when opening; only max-height + opacity animate */}
        <div
          className={`overflow-hidden px-6 transition-[max-height,opacity] duration-300 ease-in-out ${
            isOpen ? 'max-h-[28rem] opacity-100 pb-5' : 'max-h-0 opacity-0 pb-0'
          }`}
        >
          <p
            className={`max-w-[calc(100%-3rem)] break-words leading-relaxed text-xs md:text-sm [text-rendering:geometricPrecision] ${
              isOpen ? 'text-white/95 font-normal' : 'text-gray-600 font-normal'
            }`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
