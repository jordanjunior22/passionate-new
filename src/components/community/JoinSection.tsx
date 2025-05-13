"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function JoinSection() {
  return (
    <section id="sign-up" className="w-full py-16 md:py-24 bg-neutral-lightest">
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
              Join Our Community Support Program
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
              Take the first step towards recovery by enrolling in our Community
              Support Program. Whether for yourself or a loved one, our
              dedicated team is here to provide the guidance and support needed
              for a brighter future.
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
