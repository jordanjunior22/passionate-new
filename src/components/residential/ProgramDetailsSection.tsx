"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const ProgramDetailsSection = () => {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

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
          <p className="text-fruit-salad font-medium mb-2">Support</p>
          <h2 className="text-neutral-darker font-heading mb-6">
            Understanding Our Residential Support Program
          </h2>
          <p className="text-neutral-dark text-lg">
            Our Residential Support Program is designed to provide a structured
            environment where individuals can thrive. We focus on personalized
            care, ensuring each resident receives the support they need for
            recovery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            className="bg-neutral-white p-6 rounded-medium shadow-small"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
          >
            <div className="mb-4">
              <i className="bx bxs-cube text-3xl text-fruit-salad"></i>
            </div>
            <h3 className="text-neutral-darker font-heading mb-3">
              Daily Routines That Foster Growth
            </h3>
            <p className="text-neutral-dark mb-4">
              Each day includes therapeutic activities, skill-building sessions,
              and community engagement.
            </p>
          </motion.div>

          <motion.div
            className="bg-neutral-white p-6 rounded-medium shadow-small"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
          >
            <div className="mb-4">
              <i className="bx bxs-cube text-3xl text-dodger-blue"></i>
            </div>
            <h3 className="text-neutral-darker font-heading mb-3">
              Comprehensive Support Services Available
            </h3>
            <p className="text-neutral-dark mb-4">
              Our team offers 24/7 support and guidance.
            </p>
          </motion.div>

          <motion.div
            className="bg-neutral-white p-6 rounded-medium shadow-small"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
          >
            <div className="mb-4">
              <i className="bx bxs-cube text-3xl text-seance"></i>
            </div>
            <h3 className="text-neutral-darker font-heading mb-3">
              A Safe Space for Healing
            </h3>
            <p className="text-neutral-dark mb-4">
              Residents are encouraged to express themselves and build
              connections.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="large" href="/getinvolved">
            Get Involved
          </Button>
          <Button variant="secondary" size="large" href="#contactform">
            Sign Up <i className="bx bx-right-arrow-alt ml-1"></i>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetailsSection;
