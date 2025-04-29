"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const InHomeSupport: React.FC = () => {
  return (
    <section className="w-full bg-neutral-white py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 order-2 md:order-1"
          >
            <h2 className="text-neutral-darker mb-4">
              Enhancing Quality of Life with Our In-Home Support Program
            </h2>
            <p className="text-neutral-dark mb-6">
              Our In-Home Support Program provides personalized assistance to individuals,
              helping them maintain independence and improve quality of life within the comfort of their own environment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-neutral-darker mb-3">Key Benefits</h4>
                <p className="text-neutral-dark">
                  Personalized support plans, increased independence, and improved daily living experiences.
                </p>
              </div>
              <div>
                <h4 className="text-neutral-darker mb-3">Program Features</h4>
                <p className="text-neutral-dark">
                  Assistance with daily activities, personalized care routines, and community connection support.
                </p>
              </div>
            </div>

            <Button
              variant="primary"
              href="/in-home-support-program"
              size="large"
              icon="bx-plus-circle"
            >
              Learn More About In-Home Support
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 order-1 md:order-2"
          >
            <div className="rounded-large overflow-hidden shadow-large h-96 bg-neutral-lighter">
              <img
                src="/images/inhome.jpg"
                alt="In-Home Support Program"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InHomeSupport;
