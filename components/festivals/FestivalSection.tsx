"use client";

import Image from "next/image";
import { festivalContent } from "@/data/content";
import { images } from "@/data/images";
import { Reveal, TextReveal } from "@/components/animations/Reveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { Diya, PeacockFeather } from "@/components/decorative/Ornaments";
import { FloatingDecoration } from "@/components/animations/Parallax";

export function FestivalSection() {
  return (
    <section
      id="festivals"
      className="relative overflow-hidden bg-gradient-to-br from-crimson via-maroon to-deep-rani section-padding text-warm-cream"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #D7B56D 0%, transparent 40%), radial-gradient(circle at 80% 70%, #126C75 0%, transparent 35%)",
        }}
      />

      <FloatingDecoration className="absolute right-10 top-16 opacity-30">
        <PeacockFeather className="h-24 w-9 rotate-12" />
      </FloatingDecoration>
      <FloatingDecoration className="absolute bottom-20 left-10 opacity-40" amplitude={4}>
        <Diya className="h-12 w-10" />
      </FloatingDecoration>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="mb-3 text-xs tracking-[0.3em] text-soft-gold uppercase">
            Janmashtami
          </p>
          <TextReveal
            text={festivalContent.heading}
            as="h2"
            className="editorial-heading text-warm-cream"
          />
          <p className="mt-6 font-serif text-xl text-soft-gold md:text-2xl">
            {festivalContent.subheading}
          </p>
          <p className="mt-6 max-w-md leading-relaxed text-warm-cream/80">
            {festivalContent.body}
          </p>
          <p className="mt-4 text-sm text-warm-cream/50 italic">
            {festivalContent.note}
          </p>
          <div className="mt-10">
            <MagneticButton href="#contact" variant="outline">
              {festivalContent.cta}
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal direction="left" delay={0.15}>
          <div
            className="relative aspect-[9/7] overflow-hidden border border-soft-gold/25"
            data-cursor="VIEW"
          >
            <Image
              src={images.festival.src}
              alt={images.festival.alt}
              width={images.festival.width}
              height={images.festival.height}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-maroon/30 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
