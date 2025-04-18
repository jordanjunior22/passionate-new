"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const CareersSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-neutral-lightest rounded-large">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-dodger-blue font-heading font-medium">
            Join
          </span>
          <h2 className="mt-2 mb-4">Explore Careers in Mental Health Care</h2>
          <p className="text-neutral-dark mb-8">
            At Passionate Center & Homes, we are dedicated to fostering a
            supportive environment for mental health professionals. Join our
            team and make a meaningful impact in the lives of those we serve.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              className="flex flex-col"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-2">
                <i className="bx bx-cube text-4xl text-fruit-salad"></i>
              </div>
              <h4 className="text-lg font-bold font-heading mb-2">
                Current Openings
              </h4>
              <p className="text-neutral-dark">
                Check our latest job listings and find your perfect role.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-2">
                <i className="bx bx-cube text-4xl text-dodger-blue"></i>
              </div>
              <h4 className="text-lg font-bold font-heading mb-2">
                Application Process
              </h4>
              <p className="text-neutral-dark">
                Learn how to apply and what to expect.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href="/careers">
              Apply
            </Button>
            <Button variant="outline" icon="bx-right-arrow-alt" href="/careers">
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-neutral-white rounded-medium aspect-video">
            <img
              src="/images/124.jpg"
              alt="Mental health careers"
              className="w-full h-full object-cover rounded-medium"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersSection;
