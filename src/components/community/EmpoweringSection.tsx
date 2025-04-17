"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function EmpoweringSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-neutral-lightest">
      <div className="container responsive-px mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <div className="mb-4">
            <span className="text-dodger-blue font-medium">Support</span>
          </div>
          <h2 className="font-heading mb-6">
            Empowering Individuals Through Personalized Support
          </h2>
          <p className="text-neutral-dark mb-8 max-w-xl">
            Our Community Support Program offers tailored one-on-one assistance
            to help clients navigate their mental health journeys. With
            dedicated professionals, we focus on building trust and fostering
            personal growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-heading font-semibold mb-3">
                Personalized Care
              </h3>
              <p className="text-neutral-dark">
                Receive individualized attention that addresses your unique
                mental health needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold mb-3">
                Ongoing Support
              </h3>
              <p className="text-neutral-dark">
                Access continuous guidance as you work towards recovery and
                independence.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" href="/about">
              Learn
            </Button>
            <Button variant="outline" href="/contact">
              Contact
              <i className="bx bx-right-arrow-alt ml-1"></i>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <div className="bg-neutral-lightest rounded-large aspect-video flex items-center justify-center">
            <img
              src="/images/img3.jpg"
              alt="Personalized Support"
              className="rounded-large object-cover"
              width={600}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
