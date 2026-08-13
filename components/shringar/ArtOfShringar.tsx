"use client";

import Image from "next/image";
import { craftChapters, artOfShringarContent } from "@/data/content";
import { shringarImages } from "@/data/images";
import { HorizontalStory } from "@/components/animations/HorizontalStory";
import { Reveal, TextReveal } from "@/components/animations/Reveal";
import { GoldThread } from "@/components/animations/GoldThread";
import { Parallax } from "@/components/animations/Parallax";

function CraftPanel({
  chapter,
  index,
}: {
  chapter: (typeof craftChapters)[number];
  index: number;
}) {
  const objectPosition =
    "objectPosition" in chapter ? chapter.objectPosition : "center";

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
          fill
          className="object-cover"
          style={{ objectPosition }}
          sizes="90vw"
        />
      </div>
      <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
        <Parallax speed={0.12} className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={chapter.image}
            alt={`${chapter.title} — ${chapter.subtitle}`}
            fill
            className="object-cover transition-transform duration-700 hover:scale-[1.04]"
            style={{ objectPosition }}
            sizes="35vw"
          />
          <div className="pointer-events-none absolute inset-0 border border-antique-gold/20" />
        </Parallax>
        <div>
          <p className="editorial-eyebrow !text-xs">{chapter.subtitle}</p>
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
        <p className="editorial-eyebrow !text-xs">{chapter.subtitle}</p>
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
        <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="editorial-eyebrow mb-3">{artOfShringarContent.eyebrow}</p>
            <TextReveal
              text={artOfShringarContent.heading}
              as="h2"
              className="editorial-heading text-charcoal"
            />
            <p className="mt-4 max-w-md font-serif text-xl text-charcoal/70 md:text-2xl">
              {artOfShringarContent.subheading}
            </p>
          </Reveal>
          <Parallax speed={0.15} className="relative hidden aspect-[4/3] overflow-hidden lg:block">
            <Image
              src={shringarImages.flatlay.src}
              alt={shringarImages.flatlay.alt}
              fill
              className="object-cover"
              style={{ objectPosition: "center" }}
              sizes="40vw"
            />
            <div className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full border border-antique-gold/25" />
          </Parallax>
        </div>
      </div>

      <HorizontalStory className="bg-warm-cream">
        {craftChapters.map((chapter, index) => (
          <CraftPanel key={chapter.id} chapter={chapter} index={index} />
        ))}
      </HorizontalStory>
    </section>
  );
}
