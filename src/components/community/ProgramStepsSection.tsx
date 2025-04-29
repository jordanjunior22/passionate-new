"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function ProgramStepsSection() {
  const steps = [
    {
      icon: "bx-cube",
      title: "Step 1: Initial Intake Process",
      description:
        "We begin with a comprehensive assessment to understand individual needs.",
    },
    {
      icon: "bx-cube",
      title: "Step 2: Personalized Support Planning",
      description:
        "Participants receive tailored support plans based on their goals.",
    },
    {
      icon: "bx-cube",
      title: "Step 3: Ongoing Support and Engagement",
      description:
        "We provide continuous support through regular check-ins and resources.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-neutral-white">
      <div className="container responsive-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-5/12"
          >
            <div className="mb-4">
              <span className="text-dodger-blue font-medium">Support</span>
            </div>
            <h2 className="font-heading mb-6">
              Understanding Our Community Support Program
            </h2>
            <div className="mb-8 flex flex-col md:flex-row gap-4">
              <Button variant="outline" href="/blog">
                Our Blog
                <i className="bx bx-right-arrow-alt ml-1"></i>
              </Button>
              <Button href="contact">
                Get Started
                <i className="bx bx-right-arrow-alt ml-1"></i>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-7/12"
          >
            <p className="text-neutral-dark mb-8">
            Our Community Support Program is designed to empower individuals facing developmental and intellectual disabilities. Through personalized support and resources, we help participants navigate their journey towards independence. From initial intake to ongoing assistance, we are committed to fostering resilience and personal growth.


            </p>

            <div className="grid gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex gap-6"
                >
                  <div className="text-3xl text-fruit-salad">
                    <i className={`bx ${step.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="font-heading font-medium mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-dark">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
