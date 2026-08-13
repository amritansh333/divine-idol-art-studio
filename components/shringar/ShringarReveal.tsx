"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { shringarRevealContent } from "@/data/content";
import { shringarImages } from "@/data/images";
import { Reveal } from "@/components/animations/Reveal";
import { PeacockFeather } from "@/components/decorative/Ornaments";
import { useReducedMotion } from "@/lib/animations/useReducedMotion";

export function ShringarReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageReveal = useTransform(scrollYProgress, [0.15, 0.5, 0.72], [0, 0.65, 1]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.12, 0.28], [1, 1, 0]);
  const accentOpacity = useTransform(scrollYProgress, [0.55, 0.68, 0.78], [0, 1, 1]);
  const finalTextOpacity = useTransform(scrollYProgress, [0.65, 0.78, 0.92], [0, 1, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0.12, 0.45, 0.68], [0.88, 0.35, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0.5, 0.75], [0.2, 0.55]);
  const clipPath = useTransform(
    imageReveal,
    [0, 1],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  // Layered pre-reveal elements
  const fabricOpacity = useTransform(scrollYProgress, [0.2, 0.32, 0.42], [0, 0.7, 0]);
  const flowerOpacity = useTransform(scrollYProgress, [0.28, 0.38, 0.48], [0, 0.6, 0]);
  const jewelOpacity = useTransform(scrollYProgress, [0.36, 0.46, 0.56], [0, 0.65, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[140vh] bg-charcoal section-padding"
    >
      <div className="sticky top-0 flex min-h-screen flex-col items-center justify-center overflow-hidden py-16">
        <motion.p
          className="relative z-20 mb-2 font-serif text-3xl text-warm-cream/90 md:text-5xl"
          style={reducedMotion ? {} : { opacity: introOpacity }}
        >
          {shringarRevealContent.intro}
        </motion.p>

        <motion.p
          className="relative z-20 mb-8 font-serif text-3xl italic text-deep-rani md:text-5xl"
          style={reducedMotion ? {} : { opacity: accentOpacity }}
        >
          {shringarRevealContent.accent}
        </motion.p>

        <div className="relative w-full max-w-2xl" data-cursor="EXPLORE">
          <motion.div
            className="absolute inset-0 z-10 bg-charcoal"
            style={reducedMotion ? { opacity: 0 } : { opacity: overlayOpacity }}
          />

          <div className="relative aspect-[4/5] overflow-hidden">
            {/* Pre-reveal texture layers */}
            {!reducedMotion && (
              <>
                <motion.div
                  className="absolute inset-0 z-[1]"
                  style={{ opacity: fabricOpacity }}
                >
                  <Image
                    src={shringarImages.flatlay.src}
                    alt=""
                    fill
                    className="object-cover"
                    style={{ objectPosition: "20% 25%" }}
                    sizes="90vw"
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 z-[2]"
                  style={{ opacity: flowerOpacity }}
                >
                  <Image
                    src={shringarImages.flatlay.src}
                    alt=""
                    fill
                    className="object-cover"
                    style={{ objectPosition: "75% 70%" }}
                    sizes="90vw"
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 z-[3]"
                  style={{ opacity: jewelOpacity }}
                >
                  <Image
                    src={shringarImages.peacockJewelry.src}
                    alt=""
                    fill
                    className="object-cover"
                    style={{ objectPosition: "55% 40%" }}
                    sizes="90vw"
                  />
                </motion.div>
              </>
            )}

            {reducedMotion ? (
              <Image
                src={shringarImages.ladduGopalShringar.src}
                alt={shringarImages.ladduGopalShringar.alt}
                fill
                className="object-cover"
                sizes="90vw"
              />
            ) : (
              <motion.div className="relative z-[4] h-full w-full" style={{ clipPath }}>
                <Image
                  src={shringarImages.ladduGopalShringar.src}
                  alt={shringarImages.ladduGopalShringar.alt}
                  fill
                  className="object-cover"
                  sizes="90vw"
                />
              </motion.div>
            )}
            <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-charcoal/50 via-transparent to-soft-gold/10" />
          </div>

          <PeacockFeather className="absolute -bottom-8 -right-6 hidden h-32 w-12 rotate-12 opacity-40 md:block" />
        </div>

        <motion.div
          className="relative z-20 mt-12 max-w-lg text-center"
          style={reducedMotion ? {} : { opacity: finalTextOpacity }}
        >
          <Reveal>
            <p className="font-serif text-2xl leading-snug text-warm-cream md:text-4xl whitespace-pre-line">
              {shringarRevealContent.closing}
            </p>
          </Reveal>
        </motion.div>

        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 warm-glow"
          style={reducedMotion ? { opacity: 0.3 } : { opacity: glowOpacity }}
        />
      </div>
    </section>
  );
}
