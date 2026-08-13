import { Hero } from "@/components/hero/Hero";
import { StorySection } from "@/components/story/StorySection";
import { ArtOfShringar } from "@/components/shringar/ArtOfShringar";
import { DetailMatters } from "@/components/shringar/DetailMatters";
import { ShringarReveal } from "@/components/shringar/ShringarReveal";
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
      <Hero />
      <SectionTransition from="warm-cream" to="ivory" />
      <StorySection />
      <SectionTransition from="ivory" to="warm-cream" />
      <ArtOfShringar />
      <DetailMatters />
      <ShringarReveal />
      <DeityFeature />
      <FestivalSection />
      <CollectionsSection />
      <CraftedWithLove />
      <InstagramGallery />
      <BookingSection />
      <Footer />
    </main>
  );
}
