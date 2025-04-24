"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const ResidentialSupport: React.FC = () => {
  return (
    <section className="w-full bg-neutral-lightest py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="rounded-large overflow-hidden shadow-large h-96 bg-neutral-lighter">
              <img
                src="/images/img5.jpg"
                alt="Residential Support Program"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-neutral-darker mb-4">
              Empowering Lives Through Our Comprehensive Residential Support
              Program
            </h2>
            <p className="text-neutral-dark mb-6">
              Our Residential Support Program offers a safe and nurturing
              environment for individuals facing developmental/intellectual disability challenges. With
              personalized care plans and 24/7 support, we focus on fostering
              independence and promoting support.
            </p>

            <div className="bg-fruit-salad-lightest rounded-medium p-6 mb-8 border-l-4 border-fruit-salad">
              <h5 className="text-fruit-salad-darker mb-2 flex items-center">
                <i className="bx bx-home-heart text-fruit-salad text-2xl mr-2"></i>
                Structured Living Environment
              </h5>
              <p className="text-neutral-dark">
                Our group homes provide a supportive community setting where
                residents can develop independence while receiving personalized
                developmental/intellectual disability support.
              </p>
            </div>

            <Button
              variant="primary"
              href="/residential"
              size="large"
              icon="bx-building-house"
            >
              Explore Residential Program
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialSupport;
