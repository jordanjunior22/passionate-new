"use client";

import React from "react";
// Make sure this path is correct for your project structure
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function HeroSection() {
  const GoPay = () => {
    // Redirect the user to the specified link
    window.open("https://buy.stripe.com/5kAdTa3925zifle7ss", "_blank");
  };
  return (
    <section className="w-full bg-neutral-white py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-8">
          <motion.div
            className="mb-8 md:mb-0 md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-neutral-darker font-heading">
              Take the Next Step Today
            </h1>
            <p className="text-neutral-dark text-tag-medium md:text-tag-large">
              Your journey towards mental wellness starts here. Whether you're
              looking to schedule a consultation, volunteer, or join an event,
              we're here to support you.
            </p>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex flex-col md:flex-row items-start md:items-stretch gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              variant="primary"
              size="large"
              href="#contactform"
              className="w-full bg-gradient-to-r from-fruit-salad to-dodger-blue"
            >
              Get Started
            </Button>
            <Button
              variant="secondary"
              size="large"
              icon="bx-heart"
              className="w-full"
              onClick={GoPay}
            >
              Donate
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
