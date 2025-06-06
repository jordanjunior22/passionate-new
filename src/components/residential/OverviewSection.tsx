"use client";

import React from "react";
import { motion } from "framer-motion";

const OverviewSection = () => {
  return (
    <section className="w-full bg-neutral-white py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-neutral-darker font-heading mb-6">
            Residential Support Services
          </h2>
          <p className="text-neutral-dark text-lg">
          Empowering individuals through compassionate care and structured support for those living with developmental and intellectual disabilities.
          </p>
        </motion.div>

        <div className="h-48 md:h-80 w-full bg-neutral-lightest rounded-large mb-16">
          <img
            src="/images/img5.jpg"
            alt="Residential Support Program"
            className="object-cover h-full w-full rounded-medium"
          />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
