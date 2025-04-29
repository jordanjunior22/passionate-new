"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="w-full bg-neutral-white py-24 md:py-32">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

                    <motion.div
                        className="w-full md:w-1/2 mt-8 md:mt-0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="bg-neutral-lightest rounded-large p-4 h-96">
                            <div className="w-full h-full flex items-center justify-center">
                                <img
                                    src="/images/companion.jpg"
                                    alt="Companion Care Program"
                                    className="object-cover h-full w-full rounded-medium"
                                />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-neutral-darker font-heading mb-6">
                            Compassionate Companion Care for Every Step of the Journey
                        </h1>
                        <p className="text-neutral-dark mb-8 text-lg">
                            Our Companion Care Program offers friendly, supportive assistance to individuals who need help with daily living activities and emotional support. We aim to enhance well-being, foster independence, and promote a fulfilling lifestyle.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4">
                            <Button variant="primary" href="/contact">
                                Get Started
                            </Button>
                            <Button variant="outline" href="/programs">
                                Other Programs <i className="bx bx-right-arrow-alt ml-1"></i>
                            </Button>
                        </div>
                    </motion.div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    <div className="bg-neutral-lightest p-6 rounded-medium">
                        <h3 className="text-neutral-darker font-heading mb-3">
                            Emotional Support
                        </h3>
                        <p className="text-neutral-dark">
                            Our compassionate companions offer emotional reassurance and meaningful conversation to brighten your day.
                        </p>
                    </div>

                    <div className="bg-neutral-lightest p-6 rounded-medium">
                        <h3 className="text-neutral-darker font-heading mb-3">
                            Daily Assistance
                        </h3>
                        <p className="text-neutral-dark">
                            We help with everyday activities like light housekeeping, meal preparation, errands, and social engagement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
