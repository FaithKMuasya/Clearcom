import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/clearcomData.ts';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08365F] font-heading">
            Client Success Stories
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Hear from Kenyan businesses that rely on Clearcom every day.
          </p>
        </div>

        {/* Featured Testimonial Spotlight Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 relative">
          <Quote className="w-16 h-16 text-blue-100 absolute top-8 right-8 pointer-events-none" />

          {/* Stars */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#F26B21] text-[#F26B21]" />
            ))}
          </div>

          {/* Content */}
          <blockquote className="text-lg sm:text-2xl text-slate-800 font-medium leading-relaxed mb-8">
            "{current.content}"
          </blockquote>

          {/* Service badge */}
          <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 text-[#0B6BB5] rounded-full text-xs font-semibold mb-6">
            Solution: {current.service}
          </div>

          {/* Author info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#0B6BB5]"
              />
              <div>
                <h4 className="text-base font-bold text-[#08365F] font-heading">
                  {current.name}
                </h4>
                <p className="text-xs text-slate-500">
                  {current.role}, <span className="font-semibold text-slate-700">{current.company}</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  📍 {current.location}
                </p>
              </div>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="p-3 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-semibold text-slate-400 px-2">
                {currentIndex + 1} / {TESTIMONIALS.length}
              </span>
              <button
                onClick={next}
                className="p-3 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Small thumbnail pills */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all ${
                currentIndex === idx ? 'w-8 bg-[#F26B21]' : 'w-2.5 bg-slate-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
