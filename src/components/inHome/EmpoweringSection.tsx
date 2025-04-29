"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function EmpoweringSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-neutral-lightest">
      <div className="container responsive-px mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
      <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <div className="bg-neutral-lightest rounded-large aspect-video flex items-center justify-center">
            <img
              src="/images/inhome-support.jpg"
              alt="In-Home Care Support"
              className="rounded-large object-cover"
              width={600}
              height={400}
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 mb-8 md:mb-0"
        >
          <div className="mb-4">
            <span className="text-dodger-blue font-medium">In-Home Care</span>
          </div>
          <h2 className="font-heading mb-6">
            Supporting Independence with Compassionate In-Home Care
          </h2>
          <p className="text-neutral-dark mb-8 max-w-xl">
            Our In-Home Care Support Program is dedicated to helping individuals maintain their independence 
            and quality of life. Through personalized daily assistance and encouragement, 
            we ensure clients receive the care they need without leaving the comfort of their own homes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-heading font-semibold mb-3">
                Daily Living Assistance
              </h3>
              <p className="text-neutral-dark">
                Help with everyday tasks like meal preparation, hygiene, medication reminders, and more.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold mb-3">
                Personalized Support Plans
              </h3>
              <p className="text-neutral-dark">
                Services tailored to match each individual's unique needs, promoting comfort and dignity.
              </p>
            </div>
          </div>

          {/* Optional Buttons if needed later
          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" href="/about">
              Learn More
            </Button>
            <Button variant="outline" href="/contact">
              Contact Us
              <i className="bx bx-right-arrow-alt ml-1"></i>
            </Button>
          </div> 
          */}
        </motion.div>


      </div>
    </section>
  );
}
