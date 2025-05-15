"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-neutral-white py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="mb-6 text-neutral-darker">
            Explore Our Comprehensive Developmental/Intellectual Disability Support Programs for Lasting
            Support
          </h1>
          <p className="text-neutral-dark max-w-3xl mx-auto text-tag-large">
            Explore our tailored programs designed to foster support and
            personal growth for developmental/intellectual disability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-neutral-lightest rounded-large overflow-hidden shadow-medium"
          >
            <div className="p-6">
              <div className="mb-6 h-64 bg-neutral-lighter rounded-medium flex items-center justify-center">
                <img
                  src="/images/img5.jpg"
                  alt="Residential Support Program"
                  className="object-cover h-full w-full rounded-medium"
                />
              </div>
              <h5 className="text-neutral-darker mb-3">
                Residential Group Home Program: A Safe Space for Support and Growth
              </h5>
              <p className="text-neutral-dark mb-6">
                Our Residential Support Program offers a structured environment
                for individuals to thrive.
              </p>
              <Button
                variant="primary"
                href="/residential"
                icon="bx-right-arrow-alt"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-neutral-lightest rounded-large overflow-hidden shadow-medium"
          >
            <div className="p-6">
              <div className="mb-6 h-64 bg-neutral-lighter rounded-medium flex items-center justify-center">
                <img
                  src="/images/inhome.jpg"
                  alt="In-Home Support Program"
                  className="object-cover h-full w-full rounded-medium"
                />
              </div>
              <h5 className="text-neutral-darker mb-3">
              In-Home Support Program: Support and Care for a Better Quality of Life
              </h5>
              <p className="text-neutral-dark mb-6">
              Our In-Home Support Program offers personalized support and care in the comfort of your chosen environment.              </p>
              <Button
                variant="primary"
                href="/in-home-support-program"
                icon="bx-right-arrow-alt"
              >
                Learn More
              </Button>
            </div>
          </motion.div>


          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-neutral-lightest rounded-large overflow-hidden shadow-medium"
          >
            <div className="p-6">
              <div className="mb-6 h-64 bg-neutral-lighter rounded-medium flex items-center justify-center">
                <img
                  src="/images/companion.jpg" // Assuming you'll have a companion care image
                  alt="Companion Care Program"
                  className="object-cover h-full w-full rounded-medium"
                />
              </div>
              <h5 className="text-neutral-darker mb-3">
                Companion Care Program: Fostering Emotional Well-being and Connections
              </h5>
              <p className="text-neutral-dark mb-6">
                Warm and supportive relationships and engaging activities that nurture emotional well-being and social connections.
              </p>
              <Button
                variant="primary"
                href="/companion-care-program"
                icon="bx-right-arrow-alt"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-neutral-lightest rounded-large overflow-hidden shadow-medium"
          >
            <div className="p-6">
              <div className="mb-6 h-64 bg-neutral-lighter rounded-medium flex items-center justify-center">
                <img
                  src="/images/img2.png"
                  alt="Community Support Program"
                  className="object-cover h-full w-full rounded-medium"
                />
              </div>
              <h5 className="text-neutral-darker mb-3">
                Community Support Program: Empowering Individuals Through
                Connection and Resources
              </h5>
              <p className="text-neutral-dark mb-6">
                The Community Support Program fosters independence through
                engagement and tailored assistance.
              </p>
              <Button
                variant="primary"
                href="/community"
                icon="bx-right-arrow-alt"
              >
                Learn More
              </Button>
            </div>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-300 rounded-large overflow-hidden shadow-medium"
          >
            <div className="p-6">
              <div className="mb-6 h-64 bg-neutral-lighter rounded-medium flex items-center justify-center">
                <img
                  src="/images/125.jpg"
                  alt="Tailored Approaches"
                  className="object-cover h-full w-full rounded-medium"
                />
              </div>
              <h5 className="text-neutral-darker mb-3">
                Tailored Approaches for Diverse Developmental/Intellectual Disability Challenges and
                Personal Growth
              </h5>
              <p className="text-neutral-dark mb-6">
                We adapt our programs to meet the unique needs of each
                individual.
              </p>
              <Button
                variant="primary"
                href="/contact"
                icon="bx-right-arrow-alt"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
