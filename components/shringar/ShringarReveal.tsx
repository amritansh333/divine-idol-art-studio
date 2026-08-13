"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { images } from "@/data/images";
import { Reveal } from "@/components/animations/Reveal";
import { useReducedMotion } from "@/lib/animations/useReducedMotion";

export function ShringarReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageReveal = useTransform(scrollYProgress, [0.2, 0.55, 0.75], [0, 0.6, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0]);
  const finalTextOpacity = useTransform(scrollYProgress, [0.6, 0.75, 0.9], [0, 1, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0.15, 0.5, 0.7], [0.85, 0.4, 0]);
  const clipPath = useTransform(
    imageReveal,
    [0, 1],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[120vh] bg-charcoal section-padding"
    >
      <div className="sticky top-0 flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <motion.p
          className="relative z-20 mb-8 font-serif text-3xl text-warm-cream/90 md:text-5xl"
          style={reducedMotion ? {} : { opacity: textOpacity }}
        >
          And then…
        </motion.p>

        <div className="relative w-full max-w-2xl" data-cursor="EXPLORE">
          <motion.div
            className="absolute inset-0 z-10 bg-charcoal"
            style={reducedMotion ? { opacity: 0 } : { opacity: overlayOpacity }}
          />

          <div className="relative aspect-[4/5] overflow-hidden">
            {reducedMotion ? (
              <Image
                src={images.reveal.src}
                alt={images.reveal.alt}
                width={images.reveal.width}
                height={images.reveal.height}
                className="h-full w-full object-cover"
                sizes="90vw"
              />
            ) : (
              <motion.div className="h-full w-full" style={{ clipPath }}>
                <Image
                  src={images.reveal.src}
                  alt={images.reveal.alt}
                  width={images.reveal.width}
                  height={images.reveal.height}
                  className="h-full w-full object-cover"
                  sizes="90vw"
                />
              </motion.div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-soft-gold/10" />
          </div>
        </div>

        <motion.div
          className="relative z-20 mt-10 max-w-lg text-center"
          style={reducedMotion ? {} : { opacity: finalTextOpacity }}
        >
          <Reveal>
            <p className="font-serif text-2xl leading-snug text-warm-cream md:text-4xl">
              A little more beautiful.
              <br />
              A little more divine.
            </p>
          </Reveal>
        </motion.div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 warm-glow opacity-40"
        />
      </div>
    </section>
  );
}
