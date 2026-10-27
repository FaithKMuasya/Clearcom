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
              Who We Are
            </Heading>

            <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed">
              Clearcom Enterprises Ltd is a Nairobi-based ICT solutions provider dedicated to helping businesses leverage technology for growth, efficiency, and resilience. With more than 10 years of combined industry experience, we specialize in providing secure, cost-effective, and innovative IT solutions tailored to the needs of small and mid-sized businesses across Africa. We bridge the gap between technology investments and measurable business growth. Our approach is strategic, customer-centric, and focused on empowering organizations to thrive in today’s dynamic digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
