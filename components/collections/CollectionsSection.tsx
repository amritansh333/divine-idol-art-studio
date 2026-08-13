"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { collections } from "@/data/collections";
import { Reveal } from "@/components/animations/Reveal";
import { GoldThread } from "@/components/animations/GoldThread";

export function CollectionsSection() {
  return (
    <section id="collections" className="bg-ivory section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.3em] text-deep-rani uppercase">
              Seva Collections
            </p>
            <h2 className="editorial-heading text-charcoal">Choose Your Shringar</h2>
          </div>
          <p className="max-w-sm text-charcoal/60">
            Each collection is a starting point — every Shringar is crafted with care
            and devotion.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <a
                href="#contact"
                className="group relative block overflow-hidden"
                data-cursor="VIEW"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={750}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent transition-opacity duration-500 group-hover:from-maroon/80" />
                  <div className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-antique-gold/50" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-warm-cream">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-2xl transition-transform duration-300 group-hover:-translate-y-1 md:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-warm-cream/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {item.description}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <GoldThread className="mt-16" />
      </div>
    </section>
  );
}
