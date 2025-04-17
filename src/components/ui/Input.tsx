"use client";

import React, { forwardRef, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  helperText?: string;
  error?: string;
  icon?: string;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      label,
      helperText,
      error,
      icon,
      iconPosition = "left",
      fullWidth = true,
      className = "",
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const containerClasses = `${fullWidth ? "w-full" : ""} ${className}`;
    const inputClasses = `
      bg-neutral-lightest 
      text-neutral-darkest 
      text-tag-regular
      placeholder:text-neutral 
      border 
      ${
        error
          ? "border-red-500"
          : isFocused
          ? "border-fruit-salad"
          : "border-neutral-lighter"
      } 
      rounded-medium 
      p-3 
      w-full 
      outline-none 
      transition-colors 
      duration-200
      ${icon && iconPosition === "left" ? "pl-10" : ""} 
      ${icon && iconPosition === "right" ? "pr-10" : ""}
    `;

    return (
      <div className={containerClasses}>
        {label && (
          <label className="block text-tag-small text-neutral-dark mb-1 font-medium">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && iconPosition === "left" && (
            <i
              className={`bx ${icon} absolute left-3 top-1/2 -translate-y-1/2 text-neutral`}
            ></i>
          )}
          <input
            ref={ref}
            className={inputClasses}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
          {icon && iconPosition === "right" && (
            <i
              className={`bx ${icon} absolute right-3 top-1/2 -translate-y-1/2 text-neutral`}
            ></i>
          )}
        </div>
        {helperText && !error && (
          <p className="text-tag-small text-neutral mt-1">{helperText}</p>
        )}
        {error && <p className="text-tag-small text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
