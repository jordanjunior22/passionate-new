"use client";

import React, { forwardRef, useState } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  label?: string;
  options: SelectOption[];
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  className?: string;
  onChange?: (value: string) => void;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      helperText,
      error,
      fullWidth = true,
      className = "",
      onChange,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const containerClasses = `${fullWidth ? "w-full" : ""} ${className}`;
    const selectClasses = `
      appearance-none
      bg-neutral-lightest 
      text-neutral-darkest 
      text-tag-regular
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
      pr-10
    `;

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    return (
      <div className={containerClasses}>
        {label && (
          <label className="block text-tag-small text-neutral-dark mb-1 font-medium">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={selectClasses}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleChange}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
            <i className="bx bx-chevron-down text-neutral"></i>
          </div>
        </div>
        {helperText && !error && (
          <p className="text-tag-small text-neutral mt-1">{helperText}</p>
        )}
        {error && <p className="text-tag-small text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
