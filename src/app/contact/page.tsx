"use client";

import React from "react";
import { Header } from "@/components/ui/Header";
import { HeroSection } from "@/components/contact/HeroSection";
import { ContactInfoSection } from "@/components/contact/ContactInfoSection";
import { ContactForm } from "@/components/home/ContactForm";
import { CTA } from "@/components/ui/CTA";
import { Footer } from "@/components/ui/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ContactPage() {
  // Progress bar at the top of the page
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-fruit-salad to-dodger-blue z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <HeroSection />
      <ContactInfoSection />
      <ContactForm />
      <CTA />
      <Footer />
    </main>
  );
}
