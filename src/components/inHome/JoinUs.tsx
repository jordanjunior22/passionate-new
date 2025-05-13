"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function JoinSection() {
  return (
    <section id="sign-up" className="w-full py-16 md:py-24 bg-white">
      <div className="container responsive-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <h2 className="font-heading mb-6">
              Join Our In-Home Support Program
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <p className="text-neutral-dark mb-8">
              Take the first step toward compassionate in-home support for yourself or a loved one. 
              Our dedicated caregivers are ready to help you maintain independence, dignity, and comfort — 
              all from the familiar surroundings of home.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <Button
                className="bg-gradient-to-r from-fruit-salad to-dodger-blue text-neutral-white"
                href="/contact"
              >
                Get In Touch
              </Button>
              <Button variant="tertiary" href="/programs">
                Other Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
