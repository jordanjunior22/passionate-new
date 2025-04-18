"use client";

import React, { useState, useEffect } from "react";
import { SliderArrows } from "@/components/ui/SliderArrows";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

type Location = {
  id: number;
  name: string;
  address: string;
  images: string[];
  description: string;
};

interface LocationGalleryProps {
  location: Location;
}

export function LocationGallery({ location }: LocationGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === location.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? location.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    setCurrentImageIndex(0);
    setIsLoading(true);
  }, [location.id]);

  return (
    <motion.div
      key={location.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-neutral-white rounded-large overflow-hidden shadow-medium"
    >
      <div className="relative aspect-[16/9] w-full bg-neutral-lightest overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="relative w-full h-full">
              <img
                src={location.images[currentImageIndex]}
                alt={`${location.name} location image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                onLoad={() => setIsLoading(false)}
              />

              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-lightest">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-fruit-salad"></div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 right-4 z-10">
          <SliderArrows onPrevious={handlePrevious} onNext={handleNext} />
        </div>

        <div className="absolute bottom-4 left-4 z-10 bg-neutral-darkest bg-opacity-60 px-3 py-1 rounded-medium text-neutral-white">
          {currentImageIndex + 1} / {location.images.length}
        </div>
      </div>

      <div className="p-6">
        <h2 className="font-heading text-neutral-darker mb-3">
          {location.name} Residence
        </h2>
        <p className="text-neutral-dark mb-6">{location.description}</p>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2 text-neutral">
            <i className="bx bx-map text-fruit-salad text-lg"></i>
            <span>{location.address}</span>
          </div>
          <div className="flex items-center gap-2 text-neutral">
            <i className="bx bx-home-heart text-fruit-salad text-lg"></i>
            <span>Residential Support Available</span>
          </div>
          <div className="flex items-center gap-2 text-neutral">
            <i className="bx bx-support text-fruit-salad text-lg"></i>
            <span>24/7 Staff Support</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            href={`https://maps.google.com/?q=${encodeURIComponent(
              location.address
            )}`}
            variant="outline"
            icon="bx-map-alt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </Button>
          <Button href="/contact" variant="primary" icon="bx-calendar">
            Schedule a Visit
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
