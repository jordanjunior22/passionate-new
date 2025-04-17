"use client";

import React from "react";
import { motion } from "framer-motion";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  delay?: number;
}

const Testimonial = ({ quote, name, role, delay = 0 }: TestimonialProps) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, index) => (
          <i key={index} className="bx bxs-star text-dodger-blue text-xl"></i>
        ))}
      </div>
      <p className="text-center mb-6 text-neutral-dark italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-neutral-lighter rounded-full flex items-center justify-center">
          <i className="bx bx-user text-xl text-neutral-dark"></i>
        </div>
      </div>
      <h4 className="font-medium mt-4 mb-1">{name}</h4>
      <p className="text-neutral-dark text-sm">{role}</p>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4">Volunteer Experiences</h2>
        <p className="text-neutral-dark max-w-2xl mx-auto">
          Transforming lives through dedicated service and compassion.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Testimonial
          quote="Being part of this team has changed my life for the better."
          name="Emily Johnson"
          role="Volunteer, Community Care"
          delay={0.1}
        />

        <Testimonial
          quote="Every moment spent helping others is a moment well spent."
          name="Michael Smith"
          role="Staff, Support Team"
          delay={0.2}
        />

        <Testimonial
          quote="I found my purpose while making a difference here."
          name="Sarah Davis"
          role="Coordinator, Outreach"
          delay={0.3}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
