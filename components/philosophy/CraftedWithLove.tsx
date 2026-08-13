"use client";

import { philosophyContent } from "@/data/content";
import { Reveal, TextReveal } from "@/components/animations/Reveal";
import { Lotus, Paisley, Diya, PeacockFeather } from "@/components/decorative/Ornaments";
import { FloatingDecoration } from "@/components/animations/Parallax";
import { GoldThread } from "@/components/animations/GoldThread";

export function CraftedWithLove() {
  return (
    <section className="relative overflow-hidden bg-warm-cream section-padding">
      <FloatingDecoration className="absolute left-[10%] top-[20%] opacity-20">
        <Lotus className="h-12 w-20" />
      </FloatingDecoration>
      <FloatingDecoration className="absolute right-[12%] bottom-[25%] opacity-15" amplitude={5}>
        <Paisley className="h-20 w-14" />
      </FloatingDecoration>
      <Diya className="absolute left-[20%] bottom-[15%] h-10 w-8 opacity-25" />
      <PeacockFeather className="absolute right-[18%] top-[18%] h-20 w-8 opacity-20" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-6 text-xs tracking-[0.3em] text-deep-rani uppercase">
            Our Promise
          </p>
          <TextReveal
            text={philosophyContent.lines.join("\n")}
            as="h2"
            className="font-serif text-3xl leading-snug text-charcoal md:text-5xl md:leading-snug"
          />
          <GoldThread className="mt-10" />
          <p className="mt-8 font-script text-3xl text-antique-gold md:text-4xl">
            Radhe Radhe
          </p>
        </Reveal>
      </div>
    </section>
  );
}
