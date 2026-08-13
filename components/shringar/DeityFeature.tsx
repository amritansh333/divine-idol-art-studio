"use client";

import Image from "next/image";
import { deityContent } from "@/data/content";
import { images } from "@/data/images";
import { Reveal, TextReveal } from "@/components/animations/Reveal";
import { FloatingDecoration, Parallax } from "@/components/animations/Parallax";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { PeacockFeather, Lotus } from "@/components/decorative/Ornaments";

export function DeityFeature() {
  return (
    <section className="relative overflow-hidden bg-warm-cream section-padding">
      <FloatingDecoration className="absolute right-[8%] top-[12%] hidden opacity-25 lg:block">
        <PeacockFeather className="h-28 w-10 -rotate-6" />
      </FloatingDecoration>
      <FloatingDecoration
        className="absolute bottom-[15%] left-[6%] hidden opacity-20 lg:block"
        amplitude={4}
        duration={5}
      >
        <Lotus className="h-14 w-24" />
      </FloatingDecoration>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Parallax speed={0.15} className="relative order-1 lg:order-2">
          <div
            className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden lg:max-w-none"
            data-cursor="EXPLORE"
          >
            <Image
              src={images.deity.src}
              alt={images.deity.alt}
              width={images.deity.width}
              height={images.deity.height}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 85vw, 40vw"
            />
            <div className="pointer-events-none absolute inset-0 border border-antique-gold/20" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-maroon/10" />
          </div>
        </Parallax>

        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="mb-3 text-xs tracking-[0.3em] text-deep-rani uppercase">
              Laddu Gopal
            </p>
            <TextReveal
              text={deityContent.heading}
              as="h2"
              className="editorial-heading text-charcoal"
            />
            <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal/70">
              {deityContent.supporting}
            </p>
            <div className="mt-10">
              <MagneticButton href="#collections" variant="primary">
                {deityContent.cta}
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
