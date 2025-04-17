"use client";

import React from "react";
import HeroSection from "@/components/community/HeroSection";
import EmpoweringSection from "@/components/community/EmpoweringSection";
import ResourcesSection from "@/components/community/ResourcesSection";
import FeedbackSection from "@/components/community/FeedbackSection";
import ProgramStepsSection from "@/components/community/ProgramStepsSection";
import JoinSection from "@/components/community/JoinSection";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { CTA } from "@/components/ui/CTA";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Community() {
  // Progress bar at the top of the page
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <main className="min-h-screen">
      <Header />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-fruit-salad to-dodger-blue z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <HeroSection />
      <EmpoweringSection />
      <ResourcesSection />
      <FeedbackSection />
      <ProgramStepsSection />
      <JoinSection />
      <CTA />
      <Footer />
    </main>
  );
}
