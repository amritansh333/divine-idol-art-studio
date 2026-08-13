"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "@/lib/animations/useReducedMotion";
import { cn } from "@/lib/utils/cn";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "y" | "x";
};

export function Parallax({
  children,
  className,
  speed = 0.3,
  direction = "y",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const range = [-80 * speed, 80 * speed];
  const y = useTransform(scrollYProgress, [0, 1], range);
  const x = useTransform(scrollYProgress, [0, 1], range);

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={direction === "y" ? { y } : { x }}
    >
      {children}
    </motion.div>
  );
}

type ScrollScaleProps = {
  children: ReactNode;
  className?: string;
  scaleFrom?: number;
  scaleTo?: number;
};

export function ScrollScale({
  children,
  className,
  scaleFrom = 1,
  scaleTo = 1.08,
}: ScrollScaleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [scaleFrom, scaleTo]);

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={className} style={{ scale }}>
      {children}
    </motion.div>
  );
}

type ImageRevealProps = {
  children: ReactNode;
  className?: string;
};

export function ImageReveal({ children, className }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.3, 0.8, 1]);

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={className} style={{ clipPath, opacity }}>
      {children}
    </motion.div>
  );
}

type FloatingDecorationProps = {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
};

export function FloatingDecoration({
  children,
  className,
  amplitude = 6,
  duration = 4,
}: FloatingDecorationProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [-amplitude / 2, amplitude / 2, -amplitude / 2] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
