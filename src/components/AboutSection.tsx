import React from 'react';

export const AboutSection: React.FC<{ headingAs?: 'h1' | 'h2' }> = ({ headingAs: Heading = 'h2' }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Team Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Clearcom Enterprises certified engineering team collaborating in Nairobi Kenya"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Company Story */}
          <div className="lg:col-span-6">
            <Heading className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08365F] font-heading leading-tight">
              Your Trusted Technology Department in Kenya
            </Heading>

            <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed">
              Founded over a decade ago in Nairobi, <span className="font-bold text-slate-900">CLEARCOM ENTERPRISES LTD</span> was established with a singular, resolute mission: to liberate Kenyan businesses from the endless frustration of IT disruptions, erratic phone lines, and unpredictable repair invoices.
            </p>

            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Our brand tagline—<span className="font-bold text-[#F26B21] italic">"Effortless IT Support, like it never even happened"</span>—defines our everyday operating standard. When systems operate seamlessly in the background, your team can focus on servicing your clients and driving profitability.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
