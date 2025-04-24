"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function About() {
  return (
    <section className="py-16 bg-neutral-darkest text-neutral-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <span className="text-tag-medium uppercase font-medium text-neutral-light">
              Mission
            </span>
            <h2 className="font-heading text-neutral-white">
              Our Commitment to Developmental/Intellectual Disability
            </h2>
            <div className="flex flex-row gap-4">
              <Button variant="primary" href="/about">
                Learn More
              </Button>
              <Button
                variant="outline"
                className="border-neutral-white text-neutral-white hover:bg-neutral-white hover:text-neutral-darkest"
                href="/contact"
              >
                Contact
              </Button>
            </div>
          </div>

          <div className="relative md:mt-8">
            <p className="text-tag-regular text-neutral-lighter leading-relaxed">
              Our mission is to provide an opportunity for individuals dealing
              with developmental/intellectual disability struggles to find solace, support, and reclaim
              their sense of independence. Let's be{" "}
              <strong>
                &ldquo;A Haven for your Intellectual & Developmental Disability
                Support&rdquo;
              </strong>
              .
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-neutral-darker rounded-medium overflow-hidden">
            <div className="aspect-[16/9] relative">
              <Image
                src="/images/img3.jpg"
                alt="Mental health professionals providing care"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
