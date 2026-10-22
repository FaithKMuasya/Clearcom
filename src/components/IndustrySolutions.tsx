import React from 'react';
import { INDUSTRY_SOLUTIONS } from '../data/clearcomData.ts';

export const IndustrySolutions: React.FC<{ headingAs?: 'h1' | 'h2' }> = ({ headingAs: Heading = 'h2' }) => {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08365F] font-heading">
            Tailored IT Solutions by Industry
          </Heading>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Every sector in Kenya operates under unique compliance requirements and operational workflows. Here is how we customize our services for your specific vertical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRY_SOLUTIONS.map((industry, index) => (
            <div
              key={index}
              className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200/80 hover:bg-white hover:border-[#0B6BB5]/40 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <h3 className="text-xl font-bold text-[#08365F] font-heading mb-3 group-hover:text-[#0B6BB5] transition-colors">
                  {industry.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {industry.description}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
