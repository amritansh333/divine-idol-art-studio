"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "@/lib/animations/useReducedMotion";
import { cn } from "@/lib/utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.8,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });
  const reducedMotion = useReducedMotion();

  const offsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = offsets[direction];

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

type TextRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
};

export function TextReveal({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });
  const reducedMotion = useReducedMotion();

  const lines = text.split("\n");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: delay },
    },
  };

  const lineVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  if (reducedMotion) {
    return (
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <motion.span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={cn("block", className)}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {lines.map((line, i) => (
        <motion.span key={i} className="block overflow-hidden" variants={lineVariants}>
          <span className="block">{line}</span>
        </motion.span>
      ))}
    </motion.span>
  );
}
