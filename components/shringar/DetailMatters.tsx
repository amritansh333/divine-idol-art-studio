"use client";

import Image from "next/image";
import { detailImages } from "@/data/content";
import { Reveal, TextReveal } from "@/components/animations/Reveal";
import { Parallax } from "@/components/animations/Parallax";

const layoutClasses = [
  "col-span-6 row-span-2 md:col-span-4 md:row-span-2",
  "col-span-6 row-span-1 md:col-span-4 md:col-start-5 md:row-span-1",
  "col-span-6 row-span-1 md:col-span-3 md:col-start-9 md:row-span-2",
  "col-span-6 row-span-1 md:col-span-5 md:row-span-1",
  "col-span-6 row-span-1 md:col-span-4 md:col-start-6 md:row-span-1",
  "col-span-6 row-span-1 md:col-span-3 md:col-start-10 md:row-span-1",
];

export function DetailMatters() {
  return (
    <section className="relative overflow-hidden bg-ivory section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 max-w-xl md:mb-16">
          <TextReveal
            text={"Every pearl.\nEvery flower.\nEvery detail.\nChosen with devotion."}
            as="h2"
            className="font-serif text-3xl leading-snug text-charcoal md:text-5xl"
          />
        </Reveal>

        <div className="grid grid-cols-6 grid-rows-4 gap-3 md:gap-4">
          {detailImages.map((item, i) => (
            <Parallax
              key={item.src}
              speed={0.15 + (i % 3) * 0.1}
              className={`relative overflow-hidden ${layoutClasses[i]}`}
            >
              <div
                className="relative h-full min-h-[140px] w-full md:min-h-[180px]"
                data-cursor="VIEW"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <span className="absolute bottom-3 left-3 text-xs tracking-[0.2em] text-warm-cream uppercase opacity-0 transition-opacity duration-300 hover:opacity-100">
                  {item.label}
                </span>
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
}
