"use client";

import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "outline" | "icon";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string;
  children?: React.ReactNode;
  href?: string;
  disabled?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  full?: boolean;
  target?: string;
  rel?: string;
}

export function Button({
  variant = "primary",
  size = "medium",
  icon,
  children,
  href,
  disabled = false,
  className = "",
  onClick,
  type = "button",
  full = false,
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    "font-heading font-medium transition-colors duration-200 flex items-center justify-center gap-2";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-fruit-salad to-dodger-blue bg-fruit-salad text-neutral-white hover:bg-neutral-lighter focus:ring-2 focus:ring-neutral-white focus:ring-opacity-50",
    secondary:
      "bg-neutral-lighter text-neutral-dark hover:bg-neutral-lightest focus:ring-2 focus:ring-neutral-lightest focus:ring-opacity-50",
    tertiary:
      "bg-neutral-lightest text-neutral-dark hover:bg-neutral-white focus:ring-2 focus:ring-white focus:ring-opacity-50",
    outline:
      "bg-transparent border border-fruit-salad text-fruit-salad hover:bg-fruit-salad-lightest focus:ring-2 focus:ring-fruit-salad-light focus:ring-opacity-50",
    icon: "bg-neutral-lightest text-neutral-dark rounded-full hover:bg-neutral-lighter focus:ring-2 focus:ring-neutral-lighter focus:ring-opacity-50",
  };

  const sizeStyles = {
    small: "text-tag-small py-1 px-3 rounded-small",
    medium: "text-tag-regular py-2 px-4 rounded-medium",
    large: "text-tag-large py-3 px-6 rounded-medium",
  };

  const iconOnlyStyles = !children ? "p-2" : "";
  const fullWidthStyles = full ? "w-full" : "";
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${iconOnlyStyles} ${fullWidthStyles} ${disabledStyles} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={buttonStyles} target={target} rel={rel}>
        {icon && <i className={`bx ${icon}`}></i>}
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={buttonStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <i className={`bx ${icon}`}></i>}
      {children}
    </button>
  );
}
