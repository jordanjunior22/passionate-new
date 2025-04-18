"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-fruit-salad font-heading font-medium">
            Engage
          </span>
          <h1 className="mt-2 mb-4">Join Us in Making a Difference</h1>
          <p className="text-neutral-dark mb-8">
            Volunteering with us offers a unique chance to support individuals
            on their mental health journey. Your time and skills can create a
            lasting impact in our community.
          </p>
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
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-neutral-lightest rounded-medium aspect-video">
            <img
              src="/images/125.jpg"
              alt="Mental health support"
              className="w-full h-full object-cover rounded-medium"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
