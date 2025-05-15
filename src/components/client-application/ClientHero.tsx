"use client";

import React from "react";
import { motion } from "framer-motion";

export const ClientHero: React.FC = () => {
  return (
    <section className="w-full bg-neutral-white pt-24 md:pt-32 pb-12 md:pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-8">
          <motion.div
            className="mb-4 md:mb-0 md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-neutral-darker font-heading text-4xl md:text-5xl">
              Become a Client Today
            </h1>
            <p className="text-neutral-dark text-tag-medium md:text-tag-large">
              Begin your journey with our personalized support programs. Fill out the application to take the first step toward receiving high-quality, compassionate care.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-fruit-salad to-dodger-blue p-6 rounded-lg shadow-md text-white">
              <p className="text-lg font-semibold">
                Questions? Call us at (703) 200-0983 or message via WhatsApp.
              </p>
              <p className="mt-2">We’re here to support you every step of the way.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
