"use client";

import React from "react";
import { Header } from "@/components/ui/Header";
import { HeroSection } from "@/components/about/HeroSection";
import { GallerySection } from "@/components/about/GallerySection";
import { TeamSection } from "@/components/about/TeamSection";
import { MissionSection } from "@/components/about/MissionSection";
import { AwardsSection } from "@/components/about/AwardsSection";
import { TransformingSection } from "@/components/about/TransformingSection";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/ui/CTA";
import { Footer } from "@/components/ui/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { Careers } from "@/components/career/Careers";

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
      <Careers/>
      <Footer />
    </main>
  );
}
