"use client";

import React, { forwardRef } from "react";

interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  description?: string;
  error?: string;
  className?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    { label, description, error, className = "", disabled = false, ...props },
    ref
  ) => {
    const containerClasses = `flex items-start ${
      disabled ? "opacity-50" : ""
    } ${className}`;
    const radioClasses = `
      h-5 
      w-5 
      rounded-full 
      border 
      border-neutral 
      focus:outline-none 
      focus:ring-2 
      focus:ring-fruit-salad 
      text-fruit-salad
      transition-colors
      duration-200
      mt-0.5
      mr-3
    `;

    return (
      <div className={containerClasses}>
        <input
          ref={ref}
          type="radio"
          className={radioClasses}
          disabled={disabled}
          {...props}
        />
        <div>
          {label && (
            <label
              className={`text-tag-regular font-medium text-neutral-darkest ${
                disabled ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-tag-small text-neutral mt-1">{description}</p>
          )}
          {error && <p className="text-tag-small text-red-500 mt-1">{error}</p>}
        </div>
      </div>
    );
  }
);

Radio.displayName = "Radio";
