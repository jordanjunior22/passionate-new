"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-fruit-salad text-tag-medium font-medium font-heading mt-8 block">
            Mission
          </span>
          <h1 className="font-heading text-neutral-darkest mb-6">
            Our Mission Matters
          </h1>
          <p className="text-neutral-dark mb-2">
            Our mission is to provide an opportunity for individuals dealing
            with mental health struggles to find solace, recover, and reclaim
            their sense of independence. Let's be{" "}
            <strong>
              &ldquo;A Haven for your Intellectual & Developmental Disability
              Support&rdquo;
            </strong>
            .
          </p>
          <p className="text-neutral-dark mb-8">
            Our private, city setting provides an optimal environment for
            healthy, independent living in our vibrant residential group homes.
            Along with support from skilled and caring behavioral health
            recovery support specialists, each resident is offered a
            personalized plan to meet their individual needs and goals.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button variant="primary" size="large" href="/programs">
              Our Programs
            </Button>
            <Button variant="secondary" size="large" href="/contact">
              Contact Us
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <img
            src="/images/img4.jpg"
            alt="Our Mission"
            className="w-full h-auto rounded-large shadow-large"
          />
        </motion.div>
      </div>
    </section>
  );
};
