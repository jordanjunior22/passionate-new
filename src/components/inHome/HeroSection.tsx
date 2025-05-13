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
              In-Home Support Program: Personalized Support and Care for a Better Quality of Life
            </h1>
            <p className="text-neutral-dark mb-8 text-lg">
              Our In-Home Support Program delivers compassionate assistance to individuals who need
              help with daily living activities, personal care, and building independence — all while remaining in the
              familiarity of your own homes or chosen living settings.
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
                  src="/images/inhome.jpg"
                  alt="In-Home Support Program"
                  className="object-cover h-full w-full rounded-medium"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="bg-neutral-lightest p-6 rounded-medium">
            <h3 className="text-neutral-darker font-heading mb-3">
              Personal Care and Daily Living
            </h3>
            <p className="text-neutral-dark">
              Assistance in performing personal care tasks,
              training and support in activities of daily living, and assistance with housekeeping
              tasks specific to individual needs.
            </p>
          </div>
          <div className="bg-neutral-lightest p-6 rounded-medium">
            <h3 className="text-neutral-darker font-heading mb-3">
              Community Integration
            </h3>
            <p className="text-neutral-dark">
              Support to improve community integration,
              access resources, and develop skills for independent living.
            </p>
          </div>
          <div className="bg-neutral-lightest p-6 rounded-medium">
            <h3 className="text-neutral-darker font-heading mb-3">
              Health and Wellness
            </h3>
            <p className="text-neutral-dark">
              We provide care and support in the monitoring of health, nutrition,
              and physical condition,
              as well as awareness of health and safety precautions.
            </p>
          </div>
          <div className="bg-neutral-lightest p-6 rounded-medium">
            <h3 className="text-neutral-darker font-heading mb-3">
              Behavioral Support
            </h3>
            <p className="text-neutral-dark">
              Assistance with developing skills to reduce or eliminate behavioral episodes,
              implementation of Behavioral Support Plans (BSPs), and positive strategies.
            </p>
          </div>
          <div className="bg-neutral-lightest p-6 rounded-medium">
            <h3 className="text-neutral-darker font-heading mb-3">
              Skill Development and Community Access
            </h3>
            <p className="text-neutral-dark">
              Assistance with acquiring
              new skills or maintaining existing ones,
              and coordinating transportation to community events.
            </p>
          </div>

          <div className="bg-neutral-lightest p-6 rounded-medium">
            <h3 className="text-neutral-darker font-heading mb-3">
              Financial Management
            </h3>
            <p className="text-neutral-dark">
              Enhance management of financial and personal affairs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
