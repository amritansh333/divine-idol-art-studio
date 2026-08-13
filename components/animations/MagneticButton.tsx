"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/animations/useReducedMotion";
import { cn } from "@/lib/utils/cn";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  type?: "button" | "submit";
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-maroon text-warm-cream hover:bg-crimson shadow-[0_8px_32px_color-mix(in_srgb,var(--maroon)_25%,transparent)]",
  secondary:
    "bg-transparent text-maroon border border-antique-gold/50 hover:border-antique-gold hover:bg-antique-gold/5",
  ghost: "bg-transparent text-charcoal hover:text-maroon",
  outline:
    "bg-transparent text-warm-cream border border-soft-gold/60 hover:bg-soft-gold/10",
};

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "primary",
  type = "button",
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  const baseClass = cn(
    "group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm tracking-[0.12em] uppercase transition-colors duration-300",
    variants[variant],
    className
  );

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-soft-gold transition-all duration-500 group-hover:w-3/4"
      />
    </>
  );

  const motionProps = reducedMotion
    ? {}
    : {
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        style: { transition: "transform 0.3s ease-out" } as const,
      };

  if (href) {
    return (
      <div ref={ref} {...motionProps} className="inline-block">
        <a
          href={href}
          className={baseClass}
          aria-label={ariaLabel}
          onClick={onClick}
        >
          {inner}
        </a>
      </div>
    );
  }

  return (
    <div ref={ref} {...motionProps} className="inline-block">
      <button
        type={type}
        onClick={onClick}
        className={baseClass}
        aria-label={ariaLabel}
      >
        {inner}
      </button>
    </div>
  );
}
