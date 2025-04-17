"use client";

import React from "react";

export function Careers() {
  return (
    <section id="careers" className="py-10 sm:py-12 md:py-16 bg-neutral-lightest">
      <div className="container mx-auto px-4 max-w-xl md:max-w-3xl lg:max-w-4xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold mb-4 sm:mb-6">
          Careers
        </h2>
        <p className="text-sm sm:text-base text-neutral-dark mb-8 sm:mb-10 md:mb-12 px-4 sm:px-10">
          We appreciate your interest in joining our team. At this time, there are no open positions available. However, we’re always looking for passionate individuals committed to making a difference.
        </p>

        <div className="text-center">
          <i className="bx bxs-briefcase text-4xl text-fruit-salad mb-4"></i>
          <p className="text-base sm:text-lg text-neutral-dark mb-2">
            Please check back later for future opportunities.
          </p>
          <a
            href="/"
            className="inline-block mt-4 text-fruit-salad font-medium hover:underline transition-all duration-200"
          >
            Return to Home
          </a>
        </div>
      </div>
    </section>
  );
}
