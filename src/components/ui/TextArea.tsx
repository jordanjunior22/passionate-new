"use client";

import React, { forwardRef, useState } from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  className?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      name,
      label,
      helperText,
      error,
      fullWidth = true,
      className = "",
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const containerClasses = `${fullWidth ? "w-full" : ""} ${className}`;
    const textareaClasses = `
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
      min-h-[120px] 
      resize-y 
      transition-colors 
      duration-200
    `;

    return (
      <div className={containerClasses}>
        {label && (
          <label className="block text-tag-small text-neutral-dark mb-1 font-medium">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={textareaClasses}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {helperText && !error && (
          <p className="text-tag-small text-neutral mt-1">{helperText}</p>
        )}
        {error && <p className="text-tag-small text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
