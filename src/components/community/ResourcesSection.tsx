"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function ResourcesSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const resources = [
    "Workshops on coping strategies and self-care techniques.",
    "Access to online support groups and forums.",
    "Educational materials on various developmental and intellectual disabilities.",
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-neutral-white">
      <div className="container responsive-px mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <div className="mb-4">
            <span className="text-seance font-medium">Empower</span>
          </div>
          <h2 className="font-heading mb-6">
            Explore Our Community Support Resources Today
          </h2>
          <p className="text-neutral-dark mb-8 max-w-xl">
          Our Community Support Program offers a wealth of educational and wellness resources tailored for individuals with developmental and intellectual disabilities. Designed to foster resilience and personal growth, these tools empower individuals on their journey to greater independence.
          </p>

          <ul className="mb-8 space-y-4">
            {resources.map((resource, index) => (
              <motion.li
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <i className="bx bx-check-circle text-fruit-salad text-xl"></i>
                <span>{resource}</span>
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button href="/contact">Get Started</Button>
            <Button variant="outline" href="/blog">
              Our Blog
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
              src="/images/img1.jpg"
              alt="Community Resources"
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
