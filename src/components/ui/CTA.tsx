"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export function CTA() {
  const GoPay = () => {
    // Redirect the user to the specified link
    window.open("https://buy.stripe.com/5kAdTa3925zifle7ss", "_blank");
  };
  return (
    <section id="join-us" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-neutral-darkest">
        <img
          src="/images/125.jpg"
          alt="Support group meeting"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 opacity-70 bg-gradient-to-r from-neutral-darkest to-neutral-600"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading text-neutral-white mb-6"
            >
              Join Us in Making a Difference
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-neutral-lighter mb-8"
            >
              Help power our work in volunteer coordination, career development,
              and crucial mental health care with your gift today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" size="large" href="/getinvolved">
                Get Involved
              </Button>
              <Button
                variant="outline"
                size="large"
                className="border-neutral-white text-neutral-white hover:bg-neutral-white hover:text-neutral-darkest"
                icon="bx-heart"
                onClick={GoPay}
              >
                Donate
              </Button>
            </motion.div>
          </div>

          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
