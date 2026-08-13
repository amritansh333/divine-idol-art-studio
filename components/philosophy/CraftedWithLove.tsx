"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { philosophyContent } from "@/data/content";
import { GoldThread } from "@/components/animations/GoldThread";
import { FloatingDecoration } from "@/components/animations/Parallax";
import { Lotus, PeacockFeather } from "@/components/decorative/Ornaments";
import { useReducedMotion } from "@/lib/animations/useReducedMotion";
import { cn } from "@/lib/utils/cn";

export function CraftedWithLove() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLParagraphElement>(null);
  const line2Ref = useRef<HTMLParagraphElement>(null);
  const line3Ref = useRef<HTMLParagraphElement>(null);
  const ornamentRef = useRef<HTMLDivElement>(null);
  const signRef = useRef<HTMLParagraphElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: false,
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        line1Ref.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          line2Ref.current,
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          line3Ref.current,
          { opacity: 0, clipPath: "inset(0 100% 0 0)" },
          { opacity: 1, clipPath: "inset(0 0% 0 0)", duration: 1.1, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ornamentRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
          "-=0.3"
        )
        .fromTo(
          signRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#faf4ea] section-padding"
    >
      <FloatingDecoration className="absolute left-[6%] top-[18%] opacity-15">
        <Lotus className="h-14 w-24" />
      </FloatingDecoration>
      <FloatingDecoration className="absolute right-[8%] bottom-[20%] opacity-12" amplitude={4}>
        <PeacockFeather className="h-28 w-10 rotate-6" />
      </FloatingDecoration>

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="editorial-eyebrow mb-10 md:mb-14">
          {philosophyContent.eyebrow}
        </p>

        <div className="space-y-2 md:space-y-4">
          <p
            ref={line1Ref}
            className={cn(
              "editorial-heading-xl font-serif text-charcoal",
              reducedMotion ? "opacity-100" : "opacity-0"
            )}
          >
            {philosophyContent.lines[0].text}
          </p>
          <p
            ref={line2Ref}
            className={cn(
              "editorial-heading-xl font-serif italic text-deep-rani",
              reducedMotion ? "opacity-100" : "opacity-0"
            )}
          >
            {philosophyContent.lines[1].text}
          </p>
          <p
            ref={line3Ref}
            className={cn(
              "editorial-heading-xl font-serif text-charcoal",
              reducedMotion ? "opacity-100" : "opacity-0"
            )}
          >
            {philosophyContent.lines[2].text}
          </p>
        </div>

        <div
          ref={ornamentRef}
          className={cn("mx-auto mt-12 origin-center", reducedMotion ? "scale-x-100" : "scale-x-0")}
        >
          <GoldThread />
        </div>

        <p
          ref={signRef}
          className={cn(
            "mt-10 font-script text-3xl text-antique-gold md:text-5xl",
            reducedMotion ? "opacity-100" : "opacity-0"
          )}
        >
          Radhe Radhe
        </p>
      </div>
    </section>
  );
}
