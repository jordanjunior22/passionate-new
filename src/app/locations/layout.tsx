"use client";

import React from "react";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { CTA } from "@/components/ui/CTA";
import { motion, useScroll, useSpring } from "framer-motion";

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Progress bar at the top of the page
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <Header />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-fruit-salad to-dodger-blue z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <main className="min-h-screen pt-20">
        {children}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
