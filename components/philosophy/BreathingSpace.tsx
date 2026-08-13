"use client";

import { breathingSpaceContent } from "@/data/content";
import { Reveal } from "@/components/animations/Reveal";
import { GoldThread } from "@/components/animations/GoldThread";

export function BreathingSpace() {
  return (
    <section className="relative bg-warm-cream section-padding">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-serif text-3xl leading-snug text-charcoal/90 md:text-5xl md:leading-snug">
            {breathingSpaceContent.heading}
          </h2>
          <p className="mt-6 text-base text-charcoal/50 md:text-lg">
            {breathingSpaceContent.subheading}
          </p>
          <GoldThread className="mt-12 opacity-50" />
        </Reveal>
      </div>
    </section>
  );
}
