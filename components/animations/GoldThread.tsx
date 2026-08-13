"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/lib/animations/useReducedMotion";
import { cn } from "@/lib/utils/cn";

export function GoldThread({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className={cn("pointer-events-none w-full max-w-md mx-auto", className)}>
      <svg
        className="w-full"
        viewBox="0 0 400 24"
        fill="none"
        aria-hidden
      >
      <motion.path
        d="M0 12 H160 M240 12 H400 M200 12 m-8 0 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0"
        stroke="var(--antique-gold)"
        strokeWidth="1"
        strokeLinecap="round"
        style={reducedMotion ? {} : { pathLength }}
      />
      </svg>
    </div>
  );
}

export function SectionTransition({
  from = "warm-cream",
  to = "ivory",
}: {
  from?: string;
  to?: string;
}) {
  return (
    <div
      aria-hidden
      className="h-24 w-full"
      style={{
        background: `linear-gradient(to bottom, var(--${from}), var(--${to}))`,
      }}
    />
  );
}

export function FloatingPetals({ count = 6 }: { count?: number }) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
  }, [reducedMotion]);

  if (reducedMotion) return null;

  const petals = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${8 + (i * 11) % 84}%`,
    top: `${(i * 17) % 90}%`,
    size: 8 + (i % 3) * 4,
    delay: i * 0.7,
    duration: 6 + (i % 4) * 2,
    opacity: 0.15 + (i % 3) * 0.08,
  }));

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      {petals.map((petal) => (
        <motion.span
          key={petal.id}
          className="absolute rounded-full bg-deep-rani/30"
          style={{
            left: petal.left,
            top: petal.top,
            width: petal.size,
            height: petal.size * 1.4,
            opacity: petal.opacity,
            borderRadius: "50% 0 50% 50%",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, -5, 0],
            rotate: [0, 15, -10, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
