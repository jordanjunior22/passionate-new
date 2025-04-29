"use client";

import React from "react";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  return (
    <section className="w-full bg-neutral-lightest py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <i
                key={star}
                className="bx bxs-star text-fruit-salad text-2xl mx-1"
              ></i>
            ))}
          </div>

          <blockquote className="text-xl md:text-2xl mb-8 text-neutral-darker">
            "The Companion Care Program gave me the friendship, support, and encouragement I needed. I now feel more independent and connected to life again."
          </blockquote>

          <div className="flex items-center justify-center">
            <div className="bg-neutral-lighter w-16 h-16 rounded-full flex items-center justify-center mr-4">
              <i className="bx bx-user text-3xl text-neutral"></i>
            </div>
            <div className="text-left">
              <p className="font-heading font-medium text-lg text-neutral-darker">
                Linda Evans
              </p>
              <p className="text-neutral">Companion Care Client</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
