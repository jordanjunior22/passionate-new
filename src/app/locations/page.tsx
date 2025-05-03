"use client";

import React, { useState } from "react";
import { LocationsList } from "@/components/locations/LocationsList";
import { LocationGallery } from "@/components/locations/LocationGallery";
import { Contact } from "@/components/locations/Contact";
import { motion } from "framer-motion";

export default function LocationsPage() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(0);

  const locations = [
    {
      id: 1,
      name: "Alexandria",
      address: "5721 Eliot Ct, Unit 173, Alexandria, Virginia 22311",
      images: [
        "/images/first-location/1.jpg", 
        "/images/first-location/2.jpg", 
        "/images/first-location/3.jpg",
        "/images/first-location/4.jpg",
        "/images/first-location/5.jpg",
        "/images/first-location/6.jpg",
        "/images/first-location/7.jpg",
        "/images/first-location/8.jpg",
        "/images/first-location/9.jpg",
        ],
      description:
        "Our flagship location in the heart of historic Alexandria. This peaceful residence offers a serene environment for community intergration, support and growth.",
    },
    // {
    //   id: 2,
    //   name: "Washington",
    //   address: "456 Elm St, Washington DC 20001 USA",
    //   images: ["/images/img6.jpg", "/images/img7.jpg", "/images/img5.jpg"],
    //   description:
    //     "Located in the nation's capital, our Washington location provides convenient access to numerous resources and amenities.",
    // },
    // {
    //   id: 3,
    //   name: "Maryland",
    //   address: "789 Oak St, Bethesda MD 20814 USA",
    //   images: ["/images/img7.jpg", "/images/img5.jpg", "/images/img6.jpg"],
    //   description:
    //     "Our Bethesda location offers a tranquil suburban setting with all the benefits of our therapeutic community approach.",
    // },
  ];

  const selectedLocationData =
    selectedLocation !== null ? locations[selectedLocation] : null;

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-center font-heading text-neutral-darker mb-2">
          Locations
        </h1>
        <p className="text-center text-neutral-dark mb-12 max-w-2xl mx-auto">
          Visit us at our convenient locations in the DMV area. Each of our
          residences offers a supportive environment tailored to
          foster developmental/intellectual disability support and independence.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1">
          <LocationsList
            locations={locations}
            selectedLocation={selectedLocation}
            onSelectLocation={setSelectedLocation}
          />
        </div>
        <div className="lg:col-span-2">
          {selectedLocationData && (
            <LocationGallery location={selectedLocationData} />
          )}
        </div>
      </div>

      <Contact />
    </div>
  );
}
