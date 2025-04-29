"use client";

import React, { useEffect } from "react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from "@/components/inHome/HeroSection";
import EmpoweringSection from "@/components/inHome/EmpoweringSection";
import JoinSection from "@/components/inHome/JoinUs";
import { Testimonial } from "@/components/home/Testimonial";
import { CTA } from "@/components/ui/CTA";

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
        <EmpoweringSection />
        <JoinSection />
        <Testimonial />
        <CTA />
      <Footer />
    </main>
  );
};

export default ProgramsPage;
