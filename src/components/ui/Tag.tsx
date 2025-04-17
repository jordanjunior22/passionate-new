import React from "react";

interface TagProps {
  label: string;
  variant?: "default" | "primary" | "secondary" | "outlined";
  onClose?: () => void;
  className?: string;
}

export function Tag({
  label,
  variant = "default",
  onClose,
  className = "",
}: TagProps) {
  const variantStyles = {
    default: "bg-neutral-lighter text-neutral-darkest",
    primary: "bg-fruit-salad-lightest text-fruit-salad-dark",
    secondary: "bg-dodger-blue-lightest text-dodger-blue-dark",
    outlined: "bg-transparent border border-neutral-light text-neutral-dark",
  };

  const baseStyles =
    "inline-flex items-center px-2 py-1 rounded-small text-tag-small font-medium";
  const tagStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <div className={tagStyles}>
      <span>{label}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-1 flex items-center justify-center hover:bg-neutral-lighter rounded-full h-4 w-4"
        >
          <i className="bx bx-x text-xs"></i>
        </button>
      )}
    </div>
  );
}
