"use client";

import React from "react";
import { motion } from "framer-motion";

export const MissionSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-heading text-neutral-darkest mb-6">
              Empowering Mental Health Recovery Through Compassionate Support
              and Community Engagement
            </h2>
            <p className="text-neutral-dark mb-6">
              At Passionate Center & Homes Healthcare Services, our goal is
              to create a safe haven for individuals seeking mental health
              recovery. With a rich history rooted in compassion and support, we
              strive to empower our clients to reclaim their independence and
              thrive in their communities.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <img
              src="/images/img2.png"
              alt="Our Mission"
              className="w-full h-auto rounded-large shadow-large"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
