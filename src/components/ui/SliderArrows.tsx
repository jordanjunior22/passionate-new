"use client";
import React from "react";

interface SliderArrowsProps {
  onPrevious: () => void;
  onNext: () => void;
  className?: string;
}

export function SliderArrows({
  onPrevious,
  onNext,
  className = "",
}: SliderArrowsProps) {
  const baseButtonStyles = `
    flex
    items-center
    justify-center
    w-10
    h-10
    rounded-lg
    bg-neutral-white
    text-neutral-darkest
    border
    border-neutral-lighter
    transition-colors
    duration-200
    cursor-pointer
  `;

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        type="button"
        onClick={onPrevious}
        className={`${baseButtonStyles} hover:bg-neutral-lightest`}
        aria-label="Previous"
      >
        <i className="bx bx-chevron-left text-xl"></i>
      </button>
      <button
        type="button"
        onClick={onNext}
        className={`${baseButtonStyles} hover:bg-neutral-lightest`}
        aria-label="Next"
      >
        <i className="bx bx-chevron-right text-xl"></i>
      </button>
    </div>
  );
}
