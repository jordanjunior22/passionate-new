// app/apply/page.tsx

"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CTA } from "@/components/ui/CTA";
import { ClientApplication } from "@/components/client-application/ClientApplication";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { ClientHero } from "@/components/client-application/ClientHero";
const ApplyPage: React.FC = () => {
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
            <ClientHero/>
            <ClientApplication />
            <CTA/>
            <Footer />
        </main>
    );
};
export default ApplyPage;
