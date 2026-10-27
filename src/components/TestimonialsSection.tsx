"use client";

import React, { useEffect, useRef } from 'react';

export const TestimonialsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = "EmbedSocialHashtagScript";
    const ref = "27fc9248d1c8f0e00643446ca4b05d1a4cf9d892";

    const loadEmbed = () => {
      if (typeof window !== "undefined" && (window as any).EMBEDSOCIALHASHTAG && containerRef.current) {
        (window as any).EMBEDSOCIALHASHTAG.getEmbedData(ref, containerRef.current);
      }
    };

    // If script not present, create and append it
    if (!document.getElementById(scriptId)) {
      const js = document.createElement("script");
      js.id = scriptId;
      js.src = "https://embedsocial.com/cdn/ht.js";
      js.async = true;
      js.onload = () => {
        loadEmbed();
      };
      document.getElementsByTagName("head")[0].appendChild(js);
    } else {
      // Script is already loaded in <head>, re-initialize widget on mount
      loadEmbed();
      const timer = setTimeout(loadEmbed, 400);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section id="reviews" className="py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Anchor for testimonials URL compatibility */}
      <span id="testimonials" className="sr-only">Testimonials</span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#08365F] font-heading">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Real feedback and verified reviews from Kenyan businesses that rely on Clearcom every day.
          </p>
        </div>

        {/* EmbedSocial Customer Reviews Widget */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-xl border border-slate-200/80 min-h-[320px]">
            <div
              ref={containerRef}
              className="embedsocial-hashtag"
              data-ref="27fc9248d1c8f0e00643446ca4b05d1a4cf9d892"
            >
              <a
                className="feed-powered-by-es feed-powered-by-es-feed-img es-widget-branding flex items-center justify-center gap-2 text-xs text-slate-400 hover:text-slate-600 py-4 transition-colors"
                href="https://embedsocial.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Widget by EmbedSocial"
              >
                <img
                  src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp"
                  alt="EmbedSocial"
                  className="h-4 w-auto inline-block"
                />
                <div className="es-widget-branding-text">Widget by EmbedSocial</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


