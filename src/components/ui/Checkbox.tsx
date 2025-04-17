"use client";

import React, { forwardRef } from "react";

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  description?: string;
  error?: string;
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { label, description, error, className = "", disabled = false, ...props },
    ref
  ) => {
    const containerClasses = `flex items-start ${
      disabled ? "opacity-50" : ""
    } ${className}`;
    const checkboxClasses = `
      h-5 
      w-5 
      rounded-small 
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
          type="checkbox"
          className={checkboxClasses}
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

Checkbox.displayName = "Checkbox";
