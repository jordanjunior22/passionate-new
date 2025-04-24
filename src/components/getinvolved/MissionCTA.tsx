"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const MissionCTA = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="bg-neutral-lightest rounded-large p-8 sm:p-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl">
          <span className="text-fruit-salad font-heading font-medium">
            Engage
          </span>
          <h2 className="mt-2 mb-4">Join Our Mission</h2>
          <p className="text-neutral-dark mb-8">
            Discover how you can make a difference in developmental/intellectual disability support and
            community well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              className="bg-fruit-salad hover:bg-fruit-salad-dark"
              href="/about"
            >
              Learn More
            </Button>
            <Button variant="secondary" href="/contact">
              Sign Up
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MissionCTA;
