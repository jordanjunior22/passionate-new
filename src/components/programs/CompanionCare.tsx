"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const CompanionCare: React.FC = () => {
  return (
    <section className="w-full bg-neutral-lightest py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="rounded-large overflow-hidden shadow-large h-96 bg-neutral-lighter">
              <img
                src="/images/companion.jpg"
                alt="Companion Care Program"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-neutral-darker mb-4">
              Building Connections Through Our Companion Care Program
            </h2>
            <p className="text-neutral-dark mb-6">
              Our Companion Care Program focuses on creating warm, supportive relationships 
              and engaging activities that nurture emotional well-being and social connections.
            </p>

            <div className="bg-cerulean-lightest rounded-medium p-6 mb-8 border-l-4 border-cerulean">
              <h5 className="text-cerulean-darker mb-2 flex items-center">
                <i className="bx bx-smile text-cerulean text-2xl mr-2"></i>
                Emotional and Social Support
              </h5>
              <p className="text-neutral-dark">
                Through meaningful companionship, shared experiences, and personalized attention, 
                we help individuals combat loneliness and build fulfilling relationships.
              </p>
            </div>

            <Button
              variant="primary"
              href="/companion-care-program"
              size="large"
              icon="bx-user-plus"
            >
              Discover Companion Care
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanionCare;
