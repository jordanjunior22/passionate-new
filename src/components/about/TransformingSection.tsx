"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export const TransformingSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-w-16 aspect-h-9"
          >
            <img
              src="/images/125.jpg"
              alt="Transforming Lives"
              className="w-full h-full object-cover rounded-large shadow-large"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-fruit-salad text-tag-medium font-medium font-heading mb-2 block">
              Empowerment
            </span>
            <h2 className="font-heading text-neutral-darkest mb-6">
              Transforming Lives Through Comprehensive Support
            </h2>
            <p className="text-neutral-dark mb-8">
              Our mental health programs are designed to foster recovery and
              resilience. By providing tailored support, we empower individuals
              to reclaim their independence and enhance their quality of life.
              Join us in creating a community where mental health is prioritized
              and celebrated.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href='/programs'>
              <Button variant="outline" size="medium">
                Learn More
              </Button>
              </Link>
              <Link href='/getinvolved'>
              <Button variant="secondary" size="medium">
                Get Involved <i className="bx bx-right-arrow-alt ml-1"></i>
              </Button>
              </Link>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
