"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const ProgramsCTA: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-fruit-salad to-dodger-blue py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-neutral-white rounded-large shadow-large p-8 md:p-12"
        >
          <div className="flex flex-col items-center gap-8">
            <div>
              <h2 className="text-neutral-darker mb-4">
                Ready to Begin Your Mental Health Journey?
              </h2>
              <p className="text-neutral-dark max-w-xl">
                Our compassionate team is here to help you or your loved one
                find the right program for lasting recovery and personal growth.
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="large"
                href="/contact"
                icon="bx-envelope"
                className="w-full md:w-auto"
              >
                Contact Us
              </Button>
              <Button
                variant="outline"
                size="large"
                href="/ooops"
                icon="bx-clipboard"
                className="w-full md:w-auto"
              >
                Free Assessment
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsCTA;
