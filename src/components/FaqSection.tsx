import React, { useState } from 'react';
import { FAQS } from '../data/clearcomData.ts';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC<{ headingAs?: 'h1' | 'h2' }> = ({ headingAs: Heading = 'h2' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Heading className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08365F] font-heading">
            Frequently Asked Questions
          </Heading>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Find answers about our IT services, phone systems, and support.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#08365F] font-heading">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#0B6BB5] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
