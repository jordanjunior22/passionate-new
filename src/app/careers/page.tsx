"use client";

import React from "react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { Careers } from "@/components/career/Careers";
import CareerHero from "@/components/career/HeroSection";
import JobListings from "@/components/career/JobListing";

export default function CareerPage() {
  // Progress bar at the top of the page
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <main className="min-h-screen">
      {/* Main content sections */}
      <Header />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-fruit-salad to-dodger-blue z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <CareerHero/>
      <JobListings/>
      <Footer />
    </main>
  );
}
