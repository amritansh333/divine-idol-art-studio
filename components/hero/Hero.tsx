"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroContent } from "@/data/content";
import { images } from "@/data/images";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { FloatingDecoration } from "@/components/animations/Parallax";
import {
  OrnamentalDivider,
  PeacockFeather,
  Lotus,
} from "@/components/decorative/Ornaments";
import { GoldThread } from "@/components/animations/GoldThread";
import { TextReveal } from "@/components/animations/Reveal";
import { useReducedMotion } from "@/lib/animations/useReducedMotion";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgTone = useTransform(
    scrollYProgress,
    [0, 1],
    ["#FFF8ED", "#F8F0E3"]
  );
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 0.15]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100dvh] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 jaali-pattern opacity-30"
        style={reducedMotion ? {} : { backgroundColor: bgTone }}
      />
      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 bg-maroon"
          style={{ opacity: overlayOpacity }}
        />
      )}

      <FloatingDecoration
        className="absolute right-[5%] top-[18%] hidden opacity-40 md:block"
        amplitude={8}
      >
        <PeacockFeather className="h-32 w-12 rotate-12" />
      </FloatingDecoration>
      <FloatingDecoration
        className="absolute bottom-[20%] left-[4%] hidden opacity-30 md:block"
        amplitude={5}
        duration={5}
      >
        <Lotus className="h-16 w-28 -rotate-12" />
      </FloatingDecoration>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center section-padding pt-28 pb-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:pt-32">
        {/* Mobile: image first */}
        <motion.div
          className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none"
          style={reducedMotion ? {} : { scale: imageScale }}
          data-cursor="EXPLORE"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_24px_80px_color-mix(in_srgb,var(--maroon)_12%,transparent)]">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              width={images.hero.width}
              height={images.hero.height}
              priority
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 90vw, 45vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maroon/10 via-transparent to-soft-gold/10" />
          </div>
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-antique-gold/30"
          />
        </motion.div>

        <motion.div
          className="order-2 mt-10 lg:order-1 lg:mt-0"
          style={reducedMotion ? {} : { y: headingY }}
        >
          <motion.p
            className="mb-4 text-xs tracking-[0.35em] text-deep-rani"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {heroContent.eyebrow}
          </motion.p>

          <TextReveal
            text={heroContent.heading}
            as="h1"
            className="editorial-heading text-charcoal"
            delay={0.35}
          />

          <motion.div
            className="my-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <OrnamentalDivider className="w-48 md:w-64" />
          </motion.div>

          <motion.p
            className="editorial-subheading max-w-md text-charcoal/75"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {heroContent.supporting}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <MagneticButton href="#shringar" variant="primary">
              {heroContent.primaryCta}
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              {heroContent.secondaryCta}
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <GoldThread />
      </div>
    </section>
  );
}
