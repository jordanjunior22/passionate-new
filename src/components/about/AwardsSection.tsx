"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export const AwardsSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-neutral-dark text-tag-medium font-medium mb-2 block">
              Excellence
            </span>
            <h2 className="font-heading text-neutral-darkest mb-6">
              Recognized for Outstanding Mental Health Support
            </h2>
            <p className="text-neutral-dark mb-8">
              Our commitment to mental health recovery has earned us accolades
              in the community. We are proud to be recognized for our innovative
              programs and compassionate care.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-heading text-neutral-darkest mb-2">
                  Award Winning
                </h3>
                <p className="text-neutral-dark">
                  Honored for our dedication to improving mental health services
                  and community engagement.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-neutral-darkest mb-2">
                  Community Impact
                </h3>
                <p className="text-neutral-dark">
                  Transforming lives through support, education, and advocacy in
                  mental health.
                </p>
              </div>
            </div>

            {/* <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="medium">
                Learn More
              </Button>
              <Button variant="secondary" size="medium">
                Join Us <i className="bx bx-right-arrow-alt ml-1"></i>
              </Button>
            </div> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/images/img1.jpg"
              alt="Awards and Recognition"
              className="w-full h-auto rounded-large shadow-large"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
