"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { SliderArrows } from "@/components/ui/SliderArrows";

interface SlideData {
  id: number;
  imageUrl: string;
  heading: string;
  description: string;
}

export function Hero() {
  const slides: SlideData[] = [
    {
      id: 1,
      imageUrl: "/images/img1.jpg",
      heading: "Short heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      imageUrl: "/images/124.jpg",
      heading: "Short heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      imageUrl: "/images/125.jpg",
      heading: "Short heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const autoSlideTimer = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlideTimer);
  }, []);

  return (
    <section className="pt-24 md:pt-32 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 z-10">
            <div className="min-h-[300px] flex flex-col justify-center">
              <h1 className="font-heading text-neutral-darkest mb-4">
                Your Development / Intellectual Disability is Our Passionate
                Priority
              </h1>
              <p className="text-tag-regular text-neutral-dark mb-6">
                We take clients with most Developmental Disability (DD) or
                Intellectual & Developmental Disability (IDD) diagnoses on a
                Medicaid DD Waiver or private pay.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Button variant="primary" href="/about">
                  Learn More
                </Button>
                <Button variant="outline" href="#contactform">
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-2 relative rounded-medium overflow-hidden">
            <div className="bg-neutral-lighter aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] rounded-medium overflow-hidden relative">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={slide.imageUrl}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            {/*
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-neutral-lightest bg-opacity-90 p-4 rounded-small">
                <p className="text-tag-small text-neutral-dark">
                  {slides[currentSlide].heading}
                </p>
                <p className="text-tag-tiny text-neutral">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>*/}
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${
                  currentSlide === index
                    ? "w-6 bg-fruit-salad"
                    : "w-2 bg-neutral-light"
                } h-2 rounded-full transition-all duration-300`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <SliderArrows onPrevious={prevSlide} onNext={nextSlide} />
        </div>
      </div>
    </section>
  );
}
