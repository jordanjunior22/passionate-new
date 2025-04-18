"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-16 bg-gradient-to-r from-fruit-salad-lighter to-dodger-blue-lightest rounded-large p-8 shadow-medium"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="font-heading text-neutral-darker mb-2">
            Ready to Learn More?
          </h2>
          <p className="text-neutral-dark max-w-lg">
            Contact us today to schedule a visit to one of our locations or to
            learn more about our residential and community support programs.
          </p>
        </div>
        <div className="shrink-0">
          <Button href="/contact" variant="primary" icon="bx-envelope">
            Contact Us
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
