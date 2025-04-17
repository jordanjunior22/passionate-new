"use client";

import React, { useState } from "react";
import { SliderArrows } from "@/components/ui/SliderArrows";
import { motion } from "framer-motion";

const galleryImages = ["/images/123.jpg", "/images/124.jpg", "/images/125.jpg"];

export const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-neutral-lightest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="font-heading text-neutral-darkest mb-4">
            Our Gallery
          </h2>
          <p className="text-neutral-dark max-w-2xl mx-auto">
            Explore our vibrant community and supportive environment.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-large"
          >
            <img
              src={galleryImages[activeIndex]}
              alt={`Gallery image ${activeIndex + 1}`}
              className="w-full h-auto"
            />
          </motion.div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex
                    ? "bg-fruit-salad"
                    : "bg-neutral-lighter"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
            <SliderArrows
              onPrevious={handlePrevious}
              onNext={handleNext}
              className="w-full justify-between"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
