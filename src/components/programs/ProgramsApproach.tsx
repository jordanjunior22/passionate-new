"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

interface ApproachCardProps {
  icon: string;
  title: string;
  description: string;
}

const ApproachCard: React.FC<ApproachCardProps> = ({
  icon,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`bg-neutral-white rounded-large p-6 shadow-medium transition-all duration-300 ${
        isHovered ? "shadow-large" : ""
      }`}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-12 h-12 rounded-full bg-seance-lightest flex items-center justify-center mb-4 transition-all duration-300 ${
          isHovered ? "bg-seance text-neutral-dark" : "text-seance"
        }`}
      >
        <i className={`bx ${icon} text-2xl`}></i>
      </div>
      <h4 className="text-neutral-darker mb-3">{title}</h4>
      <p className="text-neutral-dark">{description}</p>
    </motion.div>
  );
};

const ProgramsApproach: React.FC = () => {
  const approaches = [
    {
      icon: "bx-user-circle",
      title: "Personalized Care Plans",
      description:
        "We develop individualized treatment plans that address unique developmental/intellectual disability needs and personal goals.",
    },
    {
      icon: "bx-group",
      title: "Community Integration",
      description:
        "Our programs emphasize meaningful community engagement to build social skills and support networks.",
    },
    {
      icon: "bx-brain",
      title: "Skill Development",
      description:
        "We focus on building practical life skills that promote independence and long-term mental wellness.",
    },
    {
      icon: "bx-heart",
      title: "Holistic Wellness",
      description:
        "Our approach considers physical, emotional, social, and spiritual aspects of developmental/intellectual disability support.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-neutral-white to-neutral-lightest py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-seance-lightest text-seance px-4 py-1 rounded-full mb-4">
            <span className="font-medium">Our Approach</span>
          </div>
          <h2 className="text-neutral-darker mb-4">
            Tailored Approaches for Diverse Developmental/Intellectual Disability Challenges
          </h2>
          <p className="text-neutral-dark max-w-3xl mx-auto">
            We adapt our programs to meet the unique needs of each individual,
            providing comprehensive support for a variety of developmental/intellectual disability
            conditions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <ApproachCard
                icon={approach.icon}
                title={approach.title}
                description={approach.description}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mt-12"
        >
          <Button
            variant="primary"
            href="/contact"
            size="large"
            icon="bx-right-arrow-alt"
          >
            Get Started Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsApproach;
