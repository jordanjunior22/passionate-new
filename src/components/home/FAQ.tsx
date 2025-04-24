"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

export function FAQ() {
  const faqItems: FAQItem[] = [
    {
      question: "What Are My Rights, As a Resident?",
      answer: (
        <>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>To be treated with dignity and respect.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>To have privacy in the home.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>To have a key to each lockable entrance.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>To have a choice of roommates.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>To decorate identified areas as per the lease.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>To have visitors at any time.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>To control and have support for schedules and activities.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>To have access to food anytime.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>To be told about and have a say in your treatment.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>To speak to others in private.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>To have complaints resolved.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>To express preferences, ask questions, and get help with your rights.</p>
          </div>
        </>
      ),
    },
    {
      question: "What Are My Options for Community Participation?",
      answer: (
        <>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>
              You are encouraged to be involved in the community, including joining clubs, church choirs,
              volunteering, and other local opportunities.
            </p>
          </div>
        </>
      ),
    },
    {
      question: "What Are The Guidelines for Activities for Residents?",
      answer: (
        <>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>Age-appropriate activities will be planned for all residents.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>Direct Support Professionals (DSPs) will be trained to address individual needs and desires.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>Freedom of choice in activities will be encouraged, ensuring individuals take part in community activities.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>Transportation options will be made available to access community activities.</p>
          </div>
        </>
      ),
    },
    {
      question: "What Are My Home and Community-Based Services Rights?",
      answer: (
        <>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>Make choices about when and where I want to go in the community.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>Have privacy, dignity, and respect in my services.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>Refuse services that I do not want.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>Have my own money, clothing, and personal property.</p>
          </div>
        </>
      ),
    },
    {
      question: "What Are My Person-Centered Planning Rights?",
      answer: (
        <>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>Be in charge of my planning meetings.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>Choose who attends my meetings.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>Pick the services I want from the available choices.</p>
          </div>
        </>
      ),
    },
    {
      question: "What Are My Home and Community-Based Setting Rights?",
      answer: (
        <>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>Lock my bedroom door for privacy.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>Have friends over whenever I want.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>Have a written lease agreement and choose a roommate if applicable.</p>
          </div>
        </>
      ),
    },
    {
      question: "What Are My Responsibilities As A Resident?",
      answer: (
        <>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>Listen to others' ideas and respect their privacy.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>Follow the choices I make in my personal plan and services.</p>
          </div>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>Ensure my actions contribute to the safety of myself and others.</p>
          </div>
        </>
      ),
    },
    {
      question: "Can I use the phone? Can I bring my cell phone?",
      answer: (
        <>
          <div className="flex items-center">
            <i className="bx bx-check-circle text-fruit-salad text-lg mr-2"></i>
            <p>Yes. Each house has two program phones (a staff phone and a client phone).</p>
          </div>
        </>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 sm:py-12 md:py-16 bg-neutral-lightest">
      <div className="container mx-auto px-4 max-w-xl md:max-w-3xl lg:max-w-5xl">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-heading font-semibold mb-2 sm:mb-4">
          FAQs
        </h2>
        <p className="text-center text-sm sm:text-base text-neutral-dark mb-8 sm:mb-10 md:mb-12 px-2 sm:px-8 md:px-16 lg:px-20">
          Find answers to your questions about our services, your rights, and how we support you.
        </p>

        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-neutral-lighter last:border-b-0"
            >
              <button
                className="flex justify-between items-center w-full py-3 sm:py-4 text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-sm sm:text-base md:text-lg text-neutral-darkest pr-2">
                  {item.question}
                </span>
                <motion.i
                  className={`bx ${
                    openIndex === index ? "bx-chevron-up" : "bx-chevron-down"
                  } text-xl sm:text-2xl text-fruit-salad flex-shrink-0`}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.i>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-3 sm:pb-4 text-sm sm:text-base text-neutral-dark space-y-2">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2">
            Still have questions?
          </h3>
          <p className="text-sm sm:text-base text-neutral-dark mb-4 sm:mb-6">
            We're here to help you find the answers.
          </p>
          <a
            href="/contact"
            className="text-fruit-salad font-medium hover:underline transition-all duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
