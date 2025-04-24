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
    <section className="w-full bg-neutral-white pt-24 md:pt-32 pb-12 md:pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-8">
          <motion.div
            className="mb-4 md:mb-0 md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-neutral-darker font-heading">
              Take the Next Step Today
            </h1>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex flex-col md:flex-wrap items-start md:items-stretch gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-neutral-dark text-tag-medium md:text-tag-large">
              Your journey towards developmental/intellectual disability wellness starts here. Whether you're
              looking to schedule a consultation, volunteer, or join an event,
              we're here to support you.
            </p>
            <div className="flex flex-col md:flex-row md:items-center w-full gap-4">
              <Button variant="primary" href="#contactform">
                Get Started
              </Button>
              <Button variant="secondary" icon="bx-heart" onClick={GoPay}>
                Donate
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
