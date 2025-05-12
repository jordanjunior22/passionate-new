"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full bg-neutral-white py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-neutral-darker font-heading mb-6">
              Residential Group Home Support Program: A Safe Space for Support and Growth
            </h1>
            <p className="text-neutral-dark mb-8 text-lg">
              Our Residential Group Home Program offers a safe haven and support for adults
              with developmental/intellectual disability challenges.
              We specialize in providing tailored support for each individual's
              journey in a home-like environment.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <Button variant="primary" href="/contact">
                Get In Touch
              </Button>
              <Button variant="outline" href="/programs">
                Other Programs <i className="bx bx-right-arrow-alt ml-1"></i>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-neutral-lightest rounded-large p-4 h-96">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/images/img6.jpg"
                  alt="Residential Support Program"
                  className="object-cover h-full w-full rounded-medium"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-neutral-lightest p-6 rounded-medium">
            <h3 className="text-neutral-darker font-heading mb-3">
              Safe and Comfortable Living
            </h3>
            <p className="text-neutral-dark">
              Our group homes are designed to provide a safe and comfortable living space for residents.
            </p>
          </div>

          <div className="bg-neutral-lightest p-6 rounded-medium">
            <h3 className="text-neutral-darker font-heading mb-3">
              Inclusive Home Activities
            </h3>
            <p className="text-neutral-dark">
              Participate in various home activities, including meal preparation, household chores, and recreational pursuits.            </p>
          </div>
          <div className="bg-neutral-lightest p-6 rounded-medium">
            <h3 className="text-neutral-darker font-heading mb-3">
              Individualized Support
            </h3>
            <p className="text-neutral-dark">
              We develop customized support plans tailored to each resident’s unique needs and specific goals.
            </p>
          </div>
          <div className="bg-neutral-lightest p-6 rounded-medium">
            <h3 className="text-neutral-darker font-heading mb-3">
              Community Engagement
            </h3>
            <p className="text-neutral-dark">
              Residents have the opportunity to engage in social activities and outings with fellow residents, fostering a sense of belonging and connection.
            </p>
          </div>

          <div className="bg-neutral-lightest p-6 rounded-medium">
            <h3 className="text-neutral-darker font-heading mb-3">
              Healthy Meals
            </h3>
            <p className="text-neutral-dark">
              Enjoy well-balanced, nutritious meals in a communal dining setting.
            </p>
          </div>
          <div className="bg-neutral-lightest p-6 rounded-medium">
            <h3 className="text-neutral-darker font-heading mb-3">
              Experienced Staff
            </h3>
            <p className="text-neutral-dark">
              Our dedicated staff members are experienced in providing care and support, ensuring the well-being of our residents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
