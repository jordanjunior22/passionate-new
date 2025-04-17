"use client";

import React from "react";

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  className?: string;
}

export function Toggle({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  className = "",
}: ToggleProps) {
  const containerClasses = `flex items-start ${
    disabled ? "opacity-50" : ""
  } ${className}`;
  const toggleClasses = `
    relative 
    inline-flex 
    h-6 
    w-11 
    shrink-0 
    cursor-pointer 
    rounded-full 
    border-2 
    border-transparent 
    transition-colors 
    duration-200 
    ease-in-out 
    ${checked ? "bg-fruit-salad" : "bg-neutral-light"}
    ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
    focus:outline-none focus:ring-2 focus:ring-fruit-salad focus:ring-offset-2
  `;

  const toggleHandleClasses = `
    pointer-events-none 
    inline-block 
    h-5 
    w-5 
    transform 
    rounded-full 
    bg-white 
    shadow-lg 
    ring-0 
    transition 
    duration-200 
    ease-in-out
    ${checked ? "translate-x-5" : "translate-x-0"}
  `;

  const handleToggle = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <div className={containerClasses}>
      <button
        type="button"
        className={toggleClasses}
        onClick={handleToggle}
        disabled={disabled}
        role="switch"
        aria-checked={checked}
      >
        <span className="sr-only">Toggle</span>
        <span className={toggleHandleClasses} />
      </button>
      {(label || description) && (
        <div className="ml-3">
          {label && (
            <div className="text-tag-regular font-medium text-neutral-darkest">
              {label}
            </div>
          )}
          {description && (
            <p className="text-tag-small text-neutral mt-1">{description}</p>
          )}
        </div>
      )}
    </div>
  );
}
