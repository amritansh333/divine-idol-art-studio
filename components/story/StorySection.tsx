"use client";

import Image from "next/image";
import { storyContent } from "@/data/content";
import { images } from "@/data/images";
import { Reveal, TextReveal } from "@/components/animations/Reveal";
import { ImageReveal, Parallax } from "@/components/animations/Parallax";
import { GoldThread } from "@/components/animations/GoldThread";
import { Paisley } from "@/components/decorative/Ornaments";

export function StorySection() {
  return (
    <section id="story" className="relative overflow-hidden bg-ivory section-padding">
      <Paisley className="pointer-events-none absolute right-8 top-16 h-24 w-16 opacity-20" />
      <Paisley className="pointer-events-none absolute bottom-24 left-12 h-20 w-14 rotate-180 opacity-15" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:col-start-1">
          <Reveal direction="left">
            <p className="mb-3 text-xs tracking-[0.3em] text-deep-rani uppercase">
              Our Philosophy
            </p>
            <TextReveal
              text={storyContent.heading}
              as="h2"
              className="editorial-heading text-charcoal"
            />
            <TextReveal
              text={storyContent.subheading}
              as="h3"
              className="mt-2 font-serif text-3xl text-maroon md:text-4xl"
              delay={0.2}
            />
          </Reveal>

          <Reveal delay={0.2} className="mt-8 space-y-5">
            {storyContent.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-base leading-relaxed text-charcoal/75 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.35} className="mt-10">
            <GoldThread className="!mx-0" />
          </Reveal>
        </div>

        <div className="relative lg:col-span-6 lg:col-start-7">
          <Parallax speed={0.2} className="relative">
            <ImageReveal>
              <div
                className="relative aspect-[7/9] overflow-hidden"
                data-cursor="VIEW"
              >
                <Image
                  src={images.story.src}
                  alt={images.story.alt}
                  width={images.story.width}
                  height={images.story.height}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </ImageReveal>
          </Parallax>
          <div
            aria-hidden
            className="absolute -bottom-6 -left-6 hidden h-32 w-32 border border-antique-gold/25 lg:block"
          />
        </div>
      </div>

      <Reveal className="mx-auto mt-24 max-w-4xl text-center">
        <blockquote className="font-serif text-2xl leading-snug text-maroon md:text-4xl md:leading-snug">
          {storyContent.brandStatement.split("\n").map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </blockquote>
        <GoldThread className="mt-10" />
      </Reveal>
    </section>
  );
}
