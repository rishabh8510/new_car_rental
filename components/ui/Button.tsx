"use client";

import "./button.css";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "btn-primary bg-gradient-to-r from-[#D41331] to-[#890018] text-white hover:opacity-90 shadow-sm border border-transparent",
  secondary:
    "btn-secondary bg-white text-black hover:bg-black hover:text-white border border-transparent",
  outline:
    "btn-outline bg-transparent border border-white text-white hover:bg-white hover:text-black",
};

export default function Button({
  type = "button",
  variant = "primary",
  href,
  onClick,
  disabled = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "btn inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed";
  const selectedVariantClass = variantClasses[variant] || variantClasses.primary;
  const combinedClasses = `${baseClasses} ${selectedVariantClass} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
