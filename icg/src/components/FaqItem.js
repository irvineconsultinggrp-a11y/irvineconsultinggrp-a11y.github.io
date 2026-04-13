import { ChevronDown } from "lucide-react";
import React, { useState } from 'react';

export default function FAQItem({ question, answer, isLast }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${!isLast ? 'mb-3' : ''}`}>
      <div className={`border border-gray-200 rounded-xl transition-all duration-200 ${isOpen ? 'bg-gray-50' : 'bg-white hover:border-gray-300'}`}>
        <button
          className="flex justify-between items-center w-full px-6 py-5 text-left"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <h3 className="text-base md:text-lg font-medium text-icgblue pr-4">{question}</h3>
          <ChevronDown className={`w-5 h-5 text-icgblue shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 pb-5 px-6' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
}
