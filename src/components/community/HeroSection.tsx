"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-neutral-white">
      <div className="container responsive-px mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <div className="mb-4">
            <span className="text-fruit-salad font-medium">Empowerment</span>
          </div>
          <h1 className="font-heading mb-6">
            Transform Your Life with Our Community Support Program
          </h1>
          <p className="text-neutral-dark mb-8 max-w-xl">
            Our Community Support Program offers personalized guidance to help
            you navigate daily challenges. Experience enhanced well-being
            through tailored resources and a supportive network.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button href="/contact">Get In Touch</Button>
            <Button variant="outline" href="/programs">
              Other Programs
              <i className="bx bx-right-arrow-alt ml-1"></i>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <div className="bg-neutral-lightest rounded-large aspect-video flex items-center justify-center">
            <img
              src="/images/img2.jpg"
              alt="Community Support"
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
