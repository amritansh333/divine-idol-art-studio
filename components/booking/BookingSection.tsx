"use client";

import { bookingContent } from "@/data/content";
import { siteConfig } from "@/lib/constants/site";
import { Reveal, TextReveal } from "@/components/animations/Reveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { OrnamentalDivider } from "@/components/decorative/Ornaments";
import { GoldThread } from "@/components/animations/GoldThread";

export function BookingSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-maroon via-crimson to-deep-rani section-padding text-warm-cream"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-4 border border-soft-gold/20 md:inset-8"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <OrnamentalDivider className="mx-auto mb-10 w-56 opacity-70" />
          <TextReveal
            text={bookingContent.heading}
            as="h2"
            className="editorial-heading text-warm-cream"
          />
          <p className="mt-6 text-lg text-warm-cream/80">
            {bookingContent.supporting}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton
              href={siteConfig.instagram.url}
              variant="outline"
            >
              {bookingContent.primaryCta}
            </MagneticButton>
            <MagneticButton
              href={siteConfig.instagram.url}
              variant="ghost"
              className="!text-warm-cream hover:!text-soft-gold"
            >
              {bookingContent.secondaryCta}
            </MagneticButton>
          </div>
        </Reveal>

        <GoldThread className="my-16 opacity-60" />

        <Reveal delay={0.15}>
          <TextReveal
            text={bookingContent.closingHeading}
            as="h3"
            className="font-serif text-2xl text-soft-gold md:text-4xl"
          />
          <p className="mt-4 font-script text-3xl text-warm-cream/90 md:text-4xl">
            {bookingContent.closingSubheading}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton href={siteConfig.instagram.url} variant="outline">
              {bookingContent.closingCta}
            </MagneticButton>
            <MagneticButton
              href={siteConfig.instagram.url}
              variant="ghost"
              className="!text-warm-cream hover:!text-soft-gold"
            >
              {bookingContent.closingSecondary}
            </MagneticButton>
          </div>
        </Reveal>

        <p className="mt-12 text-sm text-warm-cream/40">
          Contact details can be added in{" "}
          <code className="text-soft-gold/60">lib/constants/site.ts</code>
        </p>
      </div>
    </section>
  );
}
