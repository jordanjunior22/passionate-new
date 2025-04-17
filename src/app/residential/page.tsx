"use client";

import React from "react";
import HeroSection from "@/components/residential/HeroSection";
import TestimonialSection from "@/components/residential/TestimonialSection";
import OverviewSection from "@/components/residential/OverviewSection";
import FeaturesSection from "@/components/residential/FeaturesSection";
import ProgramDetailsSection from "@/components/residential/ProgramDetailsSection";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { CTA } from "@/components/ui/CTA";
import { motion, useScroll, useSpring } from "framer-motion";

const ResidentialPage = () => {
  // Progress bar at the top of the page
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="min-h-screen bg-neutral-white">
      <Header />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-fruit-salad to-dodger-blue z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <main>
        <HeroSection />
        <TestimonialSection />
        <OverviewSection />
        <FeaturesSection />
        <ProgramDetailsSection />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default ResidentialPage;
