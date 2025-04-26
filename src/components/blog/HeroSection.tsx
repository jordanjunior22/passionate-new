"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BlogHeroSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-neutral-white">
      <div className="container responsive-px mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <span className="text-fruit-salad font-medium uppercase tracking-wide mb-2 block">Blog</span>
          <h1 className="font-heading text-neutral-darkest mb-4">
            Discover Ideas That Inspire
          </h1>
          <p className="text-neutral-dark max-w-xl text-lg">
            Curated articles, insights, and perspectives—explore topics that matter to you.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <div className="bg-neutral-lightest rounded-large aspect-video flex items-center justify-center overflow-hidden">
            <img
              src="/images/blog.jpg"
              alt="Blog cover visual"
              className="rounded-large object-cover w-full h-full"
              width={600}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
