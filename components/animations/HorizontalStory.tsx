"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/animations/useReducedMotion";
import { cn } from "@/lib/utils/cn";

type HorizontalStoryProps = {
  children: ReactNode;
  className?: string;
};

export function HorizontalStory({ children, className }: HorizontalStoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const scrollWidth = track.scrollWidth - container.offsetWidth;

      const tween = gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, [reducedMotion]);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <div
        ref={trackRef}
        className="flex flex-col gap-16 lg:flex-row lg:gap-0 lg:w-max lg:min-h-screen lg:items-center"
      >
        {children}
      </div>
    </div>
  );
}
