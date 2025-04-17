"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  title: string;
  description: string;
  delay: number;
}

const TeamMember = ({ name, title, description, delay }: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center"
    >
      <div className="bg-neutral-lightest mb-4 rounded-medium overflow-hidden">
        <img src="/images/dp.webp " alt={name} className="w-full h-auto" />
      </div>
      <h3 className="font-heading text-neutral-darkest mb-1">{name}</h3>
      <p className="text-fruit-salad font-medium mb-2">{title}</p>
      <p className="text-neutral-dark text-tag-small mb-4">{description}</p>
      <div className="flex space-x-3">
        <a
          href="#"
          className="text-neutral-dark hover:text-dodger-blue transition-colors"
          aria-label="LinkedIn"
        >
          <i className="bx bxl-linkedin text-xl"></i>
        </a>
        <a
          href="#"
          className="text-neutral-dark hover:text-dodger-blue transition-colors"
          aria-label="Twitter"
        >
          <i className="bx bxl-twitter text-xl"></i>
        </a>
        <a
          href="#"
          className="text-neutral-dark hover:text-dodger-blue transition-colors"
          aria-label="Website"
        >
          <i className="bx bx-globe text-xl"></i>
        </a>
      </div>
    </motion.div>
  );
};

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Solomon Nchinda",
      title: "Executive Director",
      description:
        "Committed to creating personalized pathways for mental wellness and growth.",
    },
    {
      name: "Miriane Melong",
      title: "Program Director",
      description:
        "Passionate about empowering individuals through mental health recovery and support.",
    },
    {
      name: "Raissa Fombe",
      title: "Coordinator",
      description:
        "Focused on providing empathetic and effective support to our clients.",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-neutral-dark text-tag-medium font-medium mb-2 block">
            Dedicated
          </span>
          <h2 className="font-heading text-neutral-darkest mb-4">Our Team</h2>
          <p className="text-neutral-dark max-w-2xl mx-auto">
            Meet the compassionate professionals behind our mission.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {teamMembers.slice(0, 7).map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              title={member.title}
              description={member.description}
              delay={index * 0.1}
            />
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-neutral-lightest mb-4 rounded-medium overflow-hidden">
              <img
                src="/images/123.jpg"
                alt="Join Our Team"
                className="w-full h-auto"
              />
            </div>
            <h3 className="font-heading text-neutral-darkest mb-1">Join Us</h3>
            <p className="text-fruit-salad mb-2">Career Opportunities</p>
            <p className="text-neutral-dark text-tag-small mb-4">
              Explore a fulfilling career in mental health support and make a
              difference.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-neutral-dark hover:text-dodger-blue transition-colors"
                aria-label="LinkedIn"
              >
                <i className="bx bxl-linkedin text-xl"></i>
              </a>
              <a
                href="#"
                className="text-neutral-dark hover:text-dodger-blue transition-colors"
                aria-label="Twitter"
              >
                <i className="bx bxl-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-neutral-dark hover:text-dodger-blue transition-colors"
                aria-label="Website"
              >
                <i className="bx bx-globe text-xl"></i>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <h3 className="font-heading text-neutral-darkest mb-4">
            We're Hiring!
          </h3>
          <p className="text-neutral-dark mb-6 max-w-2xl mx-auto">
            Join our dedicated team and make an impact.
          </p>
          <Button variant="outline" size="medium">
            Open Positions
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
