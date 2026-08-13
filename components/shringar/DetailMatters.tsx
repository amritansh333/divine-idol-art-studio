"use client";

import Image from "next/image";
import { detailImages, detailSectionContent } from "@/data/content";
import { Reveal, TextReveal } from "@/components/animations/Reveal";
import { Parallax } from "@/components/animations/Parallax";
import { GoldThread } from "@/components/animations/GoldThread";

const layoutClasses = [
  "col-span-6 row-span-2 md:col-span-5 md:row-span-2 md:col-start-1",
  "col-span-6 row-span-1 md:col-span-3 md:col-start-6 md:row-span-1 md:row-start-1",
  "col-span-6 row-span-1 md:col-span-4 md:col-start-9 md:row-span-2",
  "col-span-6 row-span-1 md:col-span-4 md:col-start-6 md:row-span-1 md:row-start-2",
  "col-span-6 row-span-1 md:col-span-3 md:col-start-1 md:row-span-1 md:row-start-3",
  "col-span-6 row-span-1 md:col-span-5 md:col-start-4 md:row-span-1 md:row-start-3",
];

export function DetailMatters() {
  return (
    <section className="relative overflow-hidden bg-[#f3ebe0] section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 max-w-xl md:mb-16">
          <p className="editorial-eyebrow mb-4">{detailSectionContent.eyebrow}</p>
          <TextReveal
            text={detailSectionContent.heading}
            as="h2"
            className="editorial-heading text-charcoal"
          />
          <GoldThread className="mt-8 !mx-0 max-w-xs" />
        </Reveal>

        <div className="grid grid-cols-6 grid-rows-3 gap-3 md:gap-5">
          {detailImages.map((item, i) => (
            <Parallax
              key={`${item.label}-${i}`}
              speed={0.1 + (i % 3) * 0.12}
              className={`relative overflow-hidden ${layoutClasses[i]}`}
            >
              <div
                className="group relative h-full min-h-[160px] w-full md:min-h-[200px]"
                data-cursor="VIEW"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ objectPosition: item.objectPosition }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-antique-gold/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 text-xs tracking-[0.2em] text-warm-cream uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
