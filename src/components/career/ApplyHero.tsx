"use client";

import React from "react";
import { motion } from "framer-motion";

const ApplyHero = () => {
  return (
    <section className="relative bg-neutral-lightest pt-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Pattern (optional) */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-neutral-darkest"
        >
          Join Our Passionate Team
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-neutral-dark max-w-2xl mx-auto"
        >
          At Passionate Center & Homes, we’re more than a team — we’re a family.
          Help us provide support, care, and love to our communities across Virginia.
        </motion.p>

      </div>
    </section>
  );
};

export default ApplyHero;
