"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BannerSection() {
  return (
    <section className="w-full py-16 bg-neutral-darker">
      <div className="container mx-auto max-w-7xl responsive-px">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="font-heading font-bold text-neutral-white mb-4">
            Community Support Program
          </h2>
          <p className="text-neutral-lighter max-w-3xl mx-auto">
            Empowering individuals through tailored support, fostering
            independence and personal growth in a compassionate environment.
          </p>

          <div className="mt-8 relative w-full max-w-2xl aspect-video bg-neutral-darkest/30 rounded-medium flex items-center justify-center">
            <img
              src="/images/125.jpg"
              alt="Community Support"
              className="rounded-medium opacity-50 object-cover"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-fruit-salad/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-fruit-salad transition-colors">
                <i className="bx bx-play text-white text-2xl"></i>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
