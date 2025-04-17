"use client";

import React, { useState } from "react";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  content: React.ReactNode;
  position?: TooltipPosition;
  children: React.ReactNode;
  className?: string;
}

export function Tooltip({
  content,
  position = "top",
  children,
  className = "",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionStyles = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowPositionStyles = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-neutral-darkest border-x-transparent border-b-transparent",
    bottom:
      "bottom-full left-1/2 -translate-x-1/2 border-b-neutral-darkest border-x-transparent border-t-transparent",
    left: "left-full top-1/2 -translate-y-1/2 border-l-neutral-darkest border-y-transparent border-r-transparent",
    right:
      "right-full top-1/2 -translate-y-1/2 border-r-neutral-darkest border-y-transparent border-l-transparent",
  };

  const tooltipClasses = `
    absolute 
    z-50 
    whitespace-nowrap 
    bg-neutral-darkest 
    text-neutral-white 
    py-1 
    px-2 
    rounded-small 
    text-tag-small
    transition-opacity 
    duration-200
    ${positionStyles[position]}
    ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
    ${className}
  `;

  const arrowClasses = `
    absolute 
    h-0 
    w-0 
    border-4
    ${arrowPositionStyles[position]}
  `;

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <div className={tooltipClasses}>
        {content}
        <span className={arrowClasses}></span>
      </div>
    </div>
  );
}
