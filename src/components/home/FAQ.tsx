"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ() {
  // FAQ data
  const faqItems: FAQItem[] = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a range of services including our Residential Support Program and Community Support Program. These programs are designed to help individuals achieve stability and personal growth. Our dedicated team is here to provide the support you need.",
    },
    {
      question: "How can I get involved?",
      answer:
        "You can get involved by volunteering, pursuing a career in mental health care, or participating in our educational programs. We welcome community engagement and appreciate any support you can provide. Check our 'Get Involved' page for more details.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept most major insurance providers. If you have questions about coverage, please contact us directly to discuss your specific insurance provider. Our team will assist you in understanding your coverage options.",
    },
    {
      question: "What is your mission?",
      answer:
        "Our mission is to provide an opportunity for individuals dealing with mental health struggles to find solace, recover, and reclaim their sense of independence.",
    },
    {
      question: "How to access support?",
      answer:
        "You can access support by reaching out through our contact form or calling us directly. Our team is ready to assist you in finding the right resources. Don't hesitate to get in touch for guidance.",
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
          Find answers to your questions about our mental health services and
          support options.
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
                    <p className="pb-3 sm:pb-4 text-sm sm:text-base text-neutral-dark">
                      {item.answer}
                    </p>
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
