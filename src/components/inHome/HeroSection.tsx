"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full bg-neutral-white py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-neutral-darker font-heading mb-6">
              Personalized Care and Support in the Comfort of Your Home
            </h1>
            <p className="text-neutral-dark mb-8 text-lg">
              Our In-Home Support Program delivers compassionate assistance to individuals 
              who need help with daily living activities, personal care, and building independence — 
              all while remaining in the familiarity of their own homes.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <Button variant="primary" href="/contact">
                Get Started
              </Button>
              <Button variant="outline" href="/programs">
                Other Programs <i className="bx bx-right-arrow-alt ml-1"></i>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-neutral-lightest rounded-large p-4 h-96">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/images/inhome.jpg"
                  alt="In-Home Support Program"
                  className="object-cover h-full w-full rounded-medium"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-neutral-lightest p-6 rounded-medium">
            <h3 className="text-neutral-darker font-heading mb-3">
              Assistance with Daily Living
            </h3>
            <p className="text-neutral-dark">
              From meal preparation to medication reminders, we offer tailored support for everyday needs.
            </p>
          </div>

          <div className="bg-neutral-lightest p-6 rounded-medium">
            <h3 className="text-neutral-darker font-heading mb-3">
              Promoting Independence
            </h3>
            <p className="text-neutral-dark">
              Our caregivers encourage skills development, self-care, and community involvement at home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
