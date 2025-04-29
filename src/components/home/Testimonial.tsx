"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SliderArrows } from "@/components/ui/SliderArrows";

type TestimonialItem = {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
};

export function Testimonial() {
  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      quote:
        "The support I received from them, transformed my life. I finally feel hopeful and empowered to take control of my mental health.",
      author: "Michael Carter",
      role: "Client, Advocate",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Passionate Center provided me with the tools and community I needed to rebuild my confidence and discover new purpose.",
      author: "Emily Turner",
      role: "Program Participant",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "The staff at Passionate Center are exceptional. Their genuine care and professional approach made all the difference in my recovery.",
      author: "David Mitchell",
      role: "Outpatient Client",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "I am so grateful for the resources provided here. It’s a place where I feel safe to grow and pursue my goals.",
      author: "Sarah Williams",
      role: "Former Client",
      rating: 5,
    },
    {
      id: 5,
      quote:
        "The support I received has given me the confidence to face challenges I never thought possible. I'm forever thankful.",
      author: "James Brown",
      role: "Support Group Member",
      rating: 5,
    },
    {
      id: 6,
      quote:
        "Joining this program was a life-changing decision. I've learned so much and feel empowered every day.",
      author: "Olivia Harris",
      role: "Client, Advocate",
      rating: 5,
    },
    {
      id: 7,
      quote:
        "Their compassionate staff helped me in ways I can't fully express. I now see my future with optimism and hope.",
      author: "John Robinson",
      role: "Program Participant",
      rating: 5,
    },
    {
      id: 8,
      quote:
        "The experience here has been incredible. The community is supportive, and the individualized care is beyond compare.",
      author: "Sophia Clark",
      role: "Patient",
      rating: 5,
    },
    {
      id: 9,
      quote:
        "The passion and dedication of the team here is unmatched. I’ve never felt more supported in my recovery journey.",
      author: "Daniel Lewis",
      role: "Program Attendee",
      rating: 5,
    },
    {
      id: 10,
      quote:
        "I've made more progress in my mental health with the help of this program than I thought possible. I'm truly grateful.",
      author: "Charlotte Walker",
      role: "Current Client",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalTestimonials = testimonials.length;

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
    }
  };

  const goToPrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
      );
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    // Reset animation state after transition
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-rotate testimonials
  useEffect(() => {
    const autoRotateTimer = setInterval(() => {
      if (!isAnimating) {
        goToNext();
      }
    }, 8000); // Change testimonial every 8 seconds

    return () => clearInterval(autoRotateTimer);
  }, [currentIndex, isAnimating]);

  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-b from-neutral-lightest to-neutral-white"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <span className="text-tag-medium uppercase font-medium text-neutral-600 inline-block bg-white px-4 py-1 rounded-full mb-2 shadow-xsmall">
            Voices of Healing
          </span>
          <h2 className="font-heading text-neutral-darkest mt-2 text-4xl md:text-5xl">
            Stories of Transformation
          </h2>
          <p className="text-tag-regular text-neutral-dark mt-3 max-w-2xl mx-auto">
            Hear from individuals who have experienced real change through our
            programs and services.
          </p>
        </div>

        <div className="relative bg-white rounded-large shadow-large overflow-hidden">
          {/* Testimonial Cards */}
          <div className="relative min-h-[200px] md:min-h-[150px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="p-8 md:p-10"
              >
                {/* Decorative Quote Icon */}
                <div className="absolute top-6 left-6 text-fruit-salad-lighter opacity-50">
                  <i className="bx bxs-quote-alt-left text-5xl"></i>
                </div>

                {/* Quote Content */}
                <div className="max-w-3xl mx-auto text-center">
                  {/* Star Rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`bx bxs-star text-xl ${
                          i < testimonials[currentIndex].rating
                            ? "text-dodger-blue"
                            : "text-neutral-light"
                        }`}
                      ></i>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-2xl font-normal mb-6 text-neutral-darkest font-heading">
                    <span className="text-fruit-salad">"</span>
                    {testimonials[currentIndex].quote}
                    <span className="text-fruit-salad">"</span>
                  </blockquote>

                  {/* Author Info */}
                  <div className="inline-flex items-center mt-4 border-t border-neutral-lightest pt-4">
                    <div className="bg-fruit-salad-lightest w-12 h-12 rounded-full flex items-center justify-center shadow-small mr-4">
                      <i className="bx bx-user text-xl text-fruit-salad"></i>
                    </div>
                    <div className="text-left">
                      <p className="font-heading font-medium text-neutral-darkest">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-neutral-dark text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between border-t border-neutral-lightest px-6 py-4">
            <SliderArrows onPrevious={goToPrevious} onNext={goToNext} />

            {/* Progress Bar */}
            <div className="hidden md:flex flex-1 mx-8 h-1.5 bg-neutral-lightest rounded-full overflow-hidden">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-full transition-all duration-500 ease-in-out ${
                    index <= currentIndex ? "bg-fruit-salad" : "bg-transparent"
                  }`}
                  style={{
                    width: `${100 / testimonials.length}%`,
                    transform:
                      index === currentIndex ? "scale(1.05)" : "scale(1)",
                    transformOrigin: "center",
                  }}
                />
              ))}
            </div>

            {/* Dots Navigation - Mobile Only */}
            <div className="flex md:hidden space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-fruit-salad w-6"
                      : "bg-neutral-lighter hover:bg-neutral-light"
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="hidden md:block text-sm font-medium text-neutral-dark">
              <span className="text-fruit-salad">{currentIndex + 1}</span>
              <span>/</span>
              <span>{totalTestimonials}</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements 
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-fruit-salad-lightest rounded-full opacity-50 hidden md:block" />
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-dodger-blue-lightest rounded-full opacity-50 hidden md:block" />
        */}
      </div>
    </section>
  );
}
