"use client";

import React from "react";
import { motion } from "framer-motion";

type Location = {
  id: number;
  name: string;
  address: string;
  images: string[];
  description: string;
};

interface LocationsListProps {
  locations: Location[];
  selectedLocation: number | null;
  onSelectLocation: (index: number) => void;
}

export function LocationsList({
  locations,
  selectedLocation,
  onSelectLocation,
}: LocationsListProps) {
  return (
    <div className="bg-neutral-lightest rounded-large p-6 shadow-medium">
      <h2 className="font-heading text-neutral-darker mb-6">Our Locations</h2>
      <div className="space-y-6">
        {locations.map((location, index) => (
          <motion.div
            key={location.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelectLocation(index)}
            className={`cursor-pointer border-l-4 pl-4 transition-all duration-200 ${
              selectedLocation === index
                ? "border-fruit-salad"
                : "border-neutral-lighter hover:border-neutral-light"
            }`}
          >
            <h3 className="font-heading text-neutral-darker mb-2">
              {location.name}
            </h3>
            <p className="text-neutral text-tag-small">{location.address}</p>
            <div className="mt-3">
              <button
                className="text-dodger-blue text-tag-small flex items-center gap-1 hover:text-dodger-blue-dark transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(
                    `https://maps.google.com/?q=${encodeURIComponent(
                      location.address
                    )}`,
                    "_blank"
                  );
                }}
              >
                View Map <i className="bx bx-map text-lg"></i>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
