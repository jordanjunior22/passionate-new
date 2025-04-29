"use client";

import React, { useEffect } from "react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from "@/components/CompanionCare/HeroSection";
import { CTA } from "@/components/ui/CTA";
import TestimonialSection from "@/components/CompanionCare/TestimonialSectoin";
import OverviewSection from "@/components/CompanionCare/OverviewSection";
import JoinSection from "@/components/CompanionCare/JoinSection";

const ProgramsPage: React.FC = () => {
  // Progress bar at the top of the page
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="min-h-screen bg-neutral-white">
      <Header />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-fruit-salad to-dodger-blue z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />
        <HeroSection />
        <TestimonialSection />
        <OverviewSection/>
        <JoinSection/>
        <CTA />
      <Footer />
    </main>
  );
};

export default ProgramsPage;
