"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

interface ProgramFeature {
  icon: string;
  title: string;
  description: string;
}

export function Programs() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const programFeatures: ProgramFeature[] = [
    {
      icon: "bx-home",
      title: "Residential Support Programs",
      description:
        "Experience the difference with Passionate Center & Homes communal environment.",
    },
    {
      icon: "bx-group",
      title: "Community Support Programs",
      description:
        "Build meaningful relationships in a supportive environment that fosters growth, understanding, and mutual respect.",
    },
    {
      icon: "bx-bed",
      title: "In-Home Support Program",
      description:
        "Personalized support to enhance quality of life in their chosen environment.",
    },
    {
      icon: "bx-heart",
      title: "Companion Care Program",
      description:
        "Warm and supportive relationships and engaging activities that nurture emotional well-being and social connections.",
    },

  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-neutral-100 rounded-lg overflow-hidden h-full shadow-md relative">
              <div className="aspect-square w-full">
                <Image
                  src="/images/img2.jpg"
                  alt="Mental health programs in action"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <span className="text-tag-medium uppercase font-medium text-neutral-600">
                Programs
              </span>
              <h2 className="font-heading text-neutral-900 mt-2">
                Empowering Developmental/Intellectual Disability Through Tailored Programs
              </h2>
              <p className="text-neutral-600 mt-4">
                Our evidence-based programs are designed to empower individuals
                on their developmental/intellectual disability journey. We provide compassionate care
                that addresses each person's unique needs, fostering resilience
                and sustainable well-being.
              </p>
            </div>

            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="space-y-4"
            >
              {programFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="border border-neutral-200 rounded-lg p-4 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="flex items-center">
                    <div className="mr-4 text-neutral-600">
                      <i className={`bx ${feature.icon} text-2xl`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-neutral-900">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 text-sm mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-row gap-4">
              <Button variant="primary" href="/programs">
                Learn More
              </Button>
              <Button variant="outline" href="#contactform">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
