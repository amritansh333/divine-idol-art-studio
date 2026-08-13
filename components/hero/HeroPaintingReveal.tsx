"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroContent } from "@/data/content";
import { shringarImages } from "@/data/images";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { OrnamentalDivider, PeacockFeather } from "@/components/decorative/Ornaments";
import { useReducedMotion } from "@/lib/animations/useReducedMotion";
import { cn } from "@/lib/utils/cn";

const STAGE_TEXTS = heroContent.stages.map((s) => s.text);

function HeroLayer({
  src,
  alt,
  objectPosition = "center",
  className,
}: {
  src: string;
  alt: string;
  objectPosition?: string;
  className?: string;
}) {
  return (
    <div className={cn("hero-layer", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
        style={{ objectPosition }}
        sizes="(max-width: 768px) 90vw, 45vw"
      />
    </div>
  );
}

function FloatingPetalsHero() {
  const petals = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${10 + i * 11}%`,
    delay: i * 0.7,
    size: 6 + (i % 3) * 4,
    opacity: 0.15 + (i % 4) * 0.08,
  }));

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-deep-rani/30 animate-float-petal"
          style={{
            left: p.left,
            top: `${20 + (p.id % 5) * 12}%`,
            width: p.size,
            height: p.size * 1.4,
            opacity: p.opacity,
            animationDuration: `${4 + p.id * 0.5}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function HeroStatic() {
  return (
    <section id="home" className="relative min-h-[100dvh] overflow-hidden paper-texture">
      <div className="absolute inset-0 jaali-pattern opacity-20" />
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col justify-center section-padding pt-28 pb-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="order-2 lg:order-1">
          <p className="editorial-eyebrow mb-4">{heroContent.eyebrow}</p>
          <h1 className="editorial-heading text-charcoal whitespace-pre-line">
            {heroContent.heading}
          </h1>
          <OrnamentalDivider className="my-6 w-48 md:w-64" />
          <p className="editorial-subheading max-w-md text-charcoal/75">
            {heroContent.scrollHint}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href="#shringar" variant="primary">
              {heroContent.primaryCta}
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              {heroContent.secondaryCta}
            </MagneticButton>
          </div>
        </div>
        <div className="relative order-1 mx-auto w-full max-w-sm lg:max-w-none">
          <div className="hero-artwork relative">
            <Image
              src={shringarImages.ladduGopalShringar.src}
              alt={shringarImages.ladduGopalShringar.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 45vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function HeroPaintingReveal() {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [stageIndex, setStageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const layerRefs = {
    canvas: useRef<HTMLDivElement>(null),
    fabric: useRef<HTMLDivElement>(null),
    ornament: useRef<HTMLDivElement>(null),
    flowers: useRef<HTMLDivElement>(null),
    feather: useRef<HTMLDivElement>(null),
    crown: useRef<HTMLDivElement>(null),
    face: useRef<HTMLDivElement>(null),
    full: useRef<HTMLDivElement>(null),
    glow: useRef<HTMLDivElement>(null),
    finalText: useRef<HTMLDivElement>(null),
    stageText: useRef<HTMLParagraphElement>(null),
    ctaBlock: useRef<HTMLDivElement>(null),
    scrollHint: useRef<HTMLParagraphElement>(null),
  };

  useEffect(() => {
    if (reducedMotion || !containerRef.current || !pinRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          pin: pinRef.current,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            let idx = 0;
            if (p > 0.72) idx = 6;
            else if (p > 0.6) idx = 5;
            else if (p > 0.48) idx = 4;
            else if (p > 0.36) idx = 3;
            else if (p > 0.24) idx = 2;
            else if (p > 0.12) idx = 1;
            else idx = 0;
            setStageIndex(idx);
          },
        },
      });

      // Canvas glow
      tl.fromTo(
        layerRefs.glow.current,
        { opacity: 0.3 },
        { opacity: 0.6, duration: 0.15 },
        0
      );

      // Fabric
      tl.fromTo(
        layerRefs.fabric.current,
        { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
        { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.12 },
        0.08
      );

      // Ornament
      tl.fromTo(
        layerRefs.ornament.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.1 },
        0.2
      );

      // Flowers
      tl.fromTo(
        layerRefs.flowers.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 0.1 },
        0.32
      );

      // Feather
      tl.fromTo(
        layerRefs.feather.current,
        { opacity: 0, x: 40, rotate: 8 },
        { opacity: 1, x: 0, rotate: 0, duration: 0.1 },
        0.44
      );

      // Crown
      tl.fromTo(
        layerRefs.crown.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.1 },
        0.56
      );

      // Face
      tl.fromTo(
        layerRefs.face.current,
        { opacity: 0, filter: "blur(8px)", scale: 1.08 },
        { opacity: 1, filter: "blur(0px)", scale: 1, duration: 0.14 },
        0.66
      );

      // Full reveal
      tl.fromTo(
        layerRefs.full.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.1 },
        0.78
      );

      // Hide partial layers as full appears
      tl.to(
        [layerRefs.fabric.current, layerRefs.ornament.current, layerRefs.flowers.current, layerRefs.feather.current, layerRefs.crown.current, layerRefs.face.current],
        { opacity: 0, duration: 0.08 },
        0.8
      );

      // Glow intensify
      tl.to(layerRefs.glow.current, { opacity: 1, duration: 0.1 }, 0.78);

      // Stage text fade out, final text in
      tl.to(layerRefs.stageText.current, { opacity: 0, duration: 0.06 }, 0.72);
      tl.fromTo(
        layerRefs.finalText.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.1 },
        0.82
      );
      tl.fromTo(
        layerRefs.ctaBlock.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.08 },
        0.88
      );
      tl.to(layerRefs.scrollHint.current, { opacity: 0, duration: 0.05 }, 0.1);
    }, containerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  if (reducedMotion) {
    return <HeroStatic />;
  }

  const scrollHeight = isMobile ? "350vh" : "500vh";

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative"
      style={{ height: scrollHeight }}
    >
      <div
        ref={pinRef}
        className="relative flex h-screen flex-col overflow-hidden paper-texture"
      >
        <div className="absolute inset-0 jaali-pattern opacity-15" />
        <FloatingPetalsHero />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center section-padding pt-24 pb-12 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:pt-28">
          {/* Typography column */}
          <div className="order-2 flex flex-col justify-center lg:order-1">
            <p className="editorial-eyebrow mb-3">{heroContent.eyebrow}</p>
            <h1 className="editorial-heading text-charcoal whitespace-pre-line">
              {heroContent.heading}
            </h1>
            <OrnamentalDivider className="my-5 w-40 md:w-56" />

            <p
              ref={layerRefs.scrollHint}
              className="mb-4 text-sm italic text-charcoal/50"
            >
              {heroContent.scrollHint}
            </p>

            <p
              ref={layerRefs.stageText}
              className="font-serif text-xl text-maroon transition-opacity md:text-2xl"
            >
              {STAGE_TEXTS[stageIndex]}
            </p>

            <div ref={layerRefs.finalText} className="opacity-0">
              <p className="font-serif text-2xl leading-snug text-charcoal md:text-3xl whitespace-pre-line">
                {heroContent.finalHeading}
              </p>
              <p className="mt-3 font-serif text-lg text-maroon md:text-xl">
                {heroContent.finalTagline}
              </p>
            </div>

            <div ref={layerRefs.ctaBlock} className="mt-8 flex flex-col gap-3 opacity-0 sm:flex-row">
              <MagneticButton href="#shringar" variant="primary">
                {heroContent.primaryCta}
              </MagneticButton>
              <MagneticButton href="#contact" variant="secondary">
                {heroContent.secondaryCta}
              </MagneticButton>
            </div>
          </div>

          {/* Artwork column */}
          <div className="relative order-1 mx-auto w-full max-w-[340px] lg:max-w-none">
            <div className="hero-artwork relative mx-auto w-full max-w-md">
              {/* Canvas base */}
              <div
                ref={layerRefs.canvas}
                className="hero-layer bg-gradient-to-br from-ivory via-warm-cream to-[#f0e4d0]"
              />

              {/* Warm glow */}
              <div
                ref={layerRefs.glow}
                className="hero-layer warm-glow opacity-30"
              />

              {/* Fabric layer */}
              <div ref={layerRefs.fabric} className="hero-layer opacity-0">
                <HeroLayer
                  src={shringarImages.flatlay.src}
                  alt="Silk fabric"
                  objectPosition="18% 22%"
                />
              </div>

              {/* Ornament layer */}
              <div ref={layerRefs.ornament} className="hero-layer opacity-0 mix-blend-normal">
                <HeroLayer
                  src={shringarImages.peacockJewelry.src}
                  alt="Pearl jewelry"
                  objectPosition="58% 42%"
                />
              </div>

              {/* Flowers layer */}
              <div ref={layerRefs.flowers} className="hero-layer opacity-0">
                <HeroLayer
                  src={shringarImages.flatlay.src}
                  alt="Fresh flowers"
                  objectPosition="78% 68%"
                />
              </div>

              {/* Peacock feather layer */}
              <div ref={layerRefs.feather} className="hero-layer opacity-0">
                <HeroLayer
                  src={shringarImages.peacockJewelry.src}
                  alt="Peacock feather"
                  objectPosition="42% 58%"
                />
              </div>

              {/* Crown layer */}
              <div ref={layerRefs.crown} className="hero-layer opacity-0">
                <HeroLayer
                  src={shringarImages.flatlay.src}
                  alt="Golden crown"
                  objectPosition="50% 8%"
                />
              </div>

              {/* Face layer */}
              <div ref={layerRefs.face} className="hero-layer opacity-0">
                <HeroLayer
                  src={shringarImages.ladduGopalShringar.src}
                  alt="Laddu Gopal face"
                  objectPosition="50% 18%"
                />
              </div>

              {/* Full deity */}
              <div ref={layerRefs.full} className="hero-layer opacity-0">
                <HeroLayer
                  src={shringarImages.ladduGopalShringar.src}
                  alt={shringarImages.ladduGopalShringar.alt}
                  objectPosition="center"
                />
              </div>

              {/* Decorative border overlay */}
              <div className="pointer-events-none absolute inset-0 border border-antique-gold/25" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maroon/8 via-transparent to-soft-gold/8" />
            </div>

            <PeacockFeather className="absolute -bottom-6 -left-4 hidden h-24 w-10 -rotate-12 opacity-30 lg:block" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] text-charcoal/40 uppercase">
              Scroll
            </span>
            <div className="h-8 w-px bg-antique-gold/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
