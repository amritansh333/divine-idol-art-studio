import { Hero } from "@/components/hero/Hero";
import { StorySection } from "@/components/story/StorySection";
import { ArtOfShringar } from "@/components/shringar/ArtOfShringar";
import { DetailMatters } from "@/components/shringar/DetailMatters";
import { ShringarReveal } from "@/components/shringar/ShringarReveal";
import { BreathingSpace } from "@/components/philosophy/BreathingSpace";
import { DeityFeature } from "@/components/shringar/DeityFeature";
import { FestivalSection } from "@/components/festivals/FestivalSection";
import { CollectionsSection } from "@/components/collections/CollectionsSection";
import { CraftedWithLove } from "@/components/philosophy/CraftedWithLove";
import { InstagramGallery } from "@/components/instagram/InstagramGallery";
import { BookingSection } from "@/components/booking/BookingSection";
import { Footer } from "@/components/footer/Footer";
import { SectionTransition } from "@/components/animations/GoldThread";

export default function Home() {
  return (
    <main>
      {/* Chapter 01 — The Invitation */}
      <Hero />
      <SectionTransition from="warm-cream" to="ivory" />

      {/* Chapter 02 — The Meaning */}
      <StorySection />
      <SectionTransition from="ivory" to="warm-cream" />

      {/* Chapter 03 — The Craft */}
      <ArtOfShringar />

      {/* Chapter 04 — The Details */}
      <DetailMatters />
      <SectionTransition from="warm-cream" to="ivory" />

      {/* Chapter 05 — The Hands (moved before reveal for story rhythm) */}
      <CraftedWithLove />
      <SectionTransition from="ivory" to="charcoal" />

      {/* Chapter 06 — The Reveal */}
      <ShringarReveal />
      <BreathingSpace />

      <DeityFeature />
      <SectionTransition from="warm-cream" to="maroon" />

      {/* Chapter 07 — The Celebration */}
      <FestivalSection />
      <CollectionsSection />
      <SectionTransition from="maroon" to="warm-cream" />

      {/* Chapter 08 — Gallery */}
      <InstagramGallery />

      {/* Chapter 09 — Your Seva */}
      <BookingSection />

      {/* Farewell */}
      <Footer />
    </main>
  );
}
