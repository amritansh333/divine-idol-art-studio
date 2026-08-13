"use client";

import Image from "next/image";
import { craftChapters } from "@/data/content";
import { HorizontalStory } from "@/components/animations/HorizontalStory";
import { Reveal } from "@/components/animations/Reveal";
import { GoldThread } from "@/components/animations/GoldThread";

function CraftPanel({
  chapter,
  index,
}: {
  chapter: (typeof craftChapters)[number];
  index: number;
}) {
  return (
    <article
      className="relative flex w-full shrink-0 flex-col px-6 lg:h-screen lg:w-[85vw] lg:max-w-4xl lg:justify-center lg:px-16 xl:w-[70vw]"
      data-cursor="EXPLORE"
    >
      <span className="mb-4 font-serif text-6xl text-antique-gold/20 md:text-8xl">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative mb-8 aspect-[3/4] overflow-hidden lg:mb-0 lg:hidden">
        <Image
          src={chapter.image}
          alt={`${chapter.title} — ${chapter.subtitle}`}
          width={600}
          height={800}
          className="h-full w-full object-cover"
          sizes="90vw"
        />
      </div>
      <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={chapter.image}
            alt={`${chapter.title} — ${chapter.subtitle}`}
            width={600}
            height={800}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            sizes="35vw"
          />
          <div className="pointer-events-none absolute inset-0 border border-antique-gold/20" />
        </div>
        <div>
          <p className="text-xs tracking-[0.25em] text-deep-rani uppercase">
            {chapter.subtitle}
          </p>
          <h3 className="mt-3 font-serif text-5xl text-charcoal xl:text-6xl">
            {chapter.title}
          </h3>
          <GoldThread className="my-6 !mx-0" />
          <p className="max-w-sm text-lg leading-relaxed text-charcoal/70">
            {chapter.description}
          </p>
        </div>
      </div>
      <div className="lg:hidden">
        <p className="text-xs tracking-[0.25em] text-deep-rani uppercase">
          {chapter.subtitle}
        </p>
        <h3 className="mt-2 font-serif text-4xl text-charcoal">{chapter.title}</h3>
        <p className="mt-4 text-base leading-relaxed text-charcoal/70">
          {chapter.description}
        </p>
      </div>
    </article>
  );
}

export function ArtOfShringar() {
  return (
    <section id="shringar" className="relative bg-warm-cream">
      <div className="section-padding pb-12">
        <Reveal className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs tracking-[0.3em] text-deep-rani uppercase">
            The Craft
          </p>
          <h2 className="editorial-heading max-w-2xl text-charcoal">
            The Art of Shringar
          </h2>
          <p className="mt-4 max-w-lg text-charcoal/70">
            Six elements of devotion — each a chapter in the story of divine beauty.
          </p>
        </Reveal>
      </div>

      <HorizontalStory className="bg-warm-cream">
        {craftChapters.map((chapter, index) => (
          <CraftPanel key={chapter.id} chapter={chapter} index={index} />
        ))}
      </HorizontalStory>
    </section>
  );
}
