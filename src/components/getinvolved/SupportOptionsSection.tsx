"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface SupportOptionProps {
  title: string;
  description: string;
  icon: string;
  linkText: string;
  linkHref: string;
  delay?: number;
}

const SupportOption = ({
  title,
  description,
  icon,
  linkText,
  linkHref,
  delay = 0,
}: SupportOptionProps) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="mb-4">
        <i className={`bx ${icon} text-5xl`}></i>
      </div>
      <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
      <p className="mb-4 text-neutral-dark">{description}</p>
      <Link
        href={linkHref}
        className="flex items-center text-fruit-salad font-medium hover:text-fruit-salad-dark transition-colors"
      >
        {linkText} <i className="bx bx-right-arrow-alt ml-1"></i>
      </Link>
    </motion.div>
  );
};

const SupportOptionsSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4">
          Discover Meaningful Ways to Support Mental Health in Our Community
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <SupportOption
          title="Join Us in Making a Difference for Mental Health"
          description="Explore opportunities to volunteer and help those on their mental health journey."
          icon="bx-cube"
          linkText="Volunteer"
          linkHref="/careers"
          delay={0.1}
        />

        <SupportOption
          title="Build a Rewarding Career in Mental Health Support Services"
          description="Learn about career opportunities that allow you to make a real impact."
          icon="bx-cube"
          linkText="Careers"
          linkHref="/careers"
          delay={0.2}
        />

        <SupportOption
          title="Support Our Mission with Your Donation"
          description="Your generous donation helps fund our initiatives and make a real difference in the community."
          icon="bx-cube"
          linkText="Donate Now"
          linkHref="https://buy.stripe.com/5kAdTa3925zifle7ss"
          delay={0.3}
        />
      </div>
    </section>
  );
};

export default SupportOptionsSection;
