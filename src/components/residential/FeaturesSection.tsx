"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  return (
    <section className="w-full bg-neutral-lightest py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div
            className="w-full md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-neutral-white rounded-large p-4 h-96">
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src="/images/img7.jpg"
                  alt="Residential Support Program"
                  className="object-cover h-full w-full rounded-medium"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 order-1 md:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-fruit-salad font-medium mb-2">Empowerment</p>
            <h2 className="text-neutral-darker font-heading mb-6">
              Unlock Your Potential with Our Support
            </h2>
            <p className="text-neutral-dark mb-8">
              Our Residential Support Program fosters a nurturing environment
              where individuals can thrive. Experience stability, personal
              growth, and the journey towards independence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-neutral-darker font-heading mb-3">
                  Stability First
                </h4>
                <p className="text-neutral-dark">
                  Create a solid foundation for your mental health recovery and
                  well-being.
                </p>
              </div>

              <div>
                <h4 className="text-neutral-darker font-heading mb-3">
                  Personal Growth
                </h4>
                <p className="text-neutral-dark">
                  Develop essential life skills and regain confidence in a
                  supportive community.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="/getinvolved">
                Get Involved
              </Button>
              <Button variant="secondary" href="#contactform">
                Sign Up <i className="bx bx-right-arrow-alt ml-1"></i>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
