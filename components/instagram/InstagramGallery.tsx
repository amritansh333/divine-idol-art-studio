"use client";

import Image from "next/image";
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
import { galleryItems, instagramContent } from "@/data/gallery";
import { siteConfig } from "@/lib/constants/site";
import { Reveal } from "@/components/animations/Reveal";
import { MagneticButton } from "@/components/animations/MagneticButton";

const aspectClasses = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

export function InstagramGallery() {
  return (
    <section id="gallery" className="bg-ivory section-padding">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-xs tracking-[0.3em] text-deep-rani uppercase">
            {siteConfig.instagram.handle}
          </p>
          <h2 className="editorial-heading text-charcoal">{instagramContent.heading}</h2>
        </Reveal>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {galleryItems.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.04}
              className={`relative overflow-hidden ${aspectClasses[item.aspect]}`}
            >
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full w-full"
                data-cursor="VIEW"
                aria-label={`View on Instagram — ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={700}
                  height={650}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-maroon/0 transition-colors duration-300 group-hover:bg-maroon/50">
                  <InstagramIcon className="h-6 w-6 text-warm-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="mt-2 text-xs tracking-[0.15em] text-warm-cream uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View on Instagram
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <MagneticButton href={siteConfig.instagram.url} variant="secondary">
            {instagramContent.cta}
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
