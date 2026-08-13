/** Centralized image registry — Shringar photography */
export const shringarImages = {
  flatlay: {
    src: "/images/shringar/shringar-flatlay.png",
    alt: "Shringar flat lay — silk, crown, pearls, flowers and peacock feather",
    width: 1200,
    height: 900,
  },
  peacockJewelry: {
    src: "/images/shringar/peacock-jewelry.png",
    alt: "Pearl jewelry and peacock feather close-up",
    width: 1200,
    height: 900,
  },
  ladduGopalAltar: {
    src: "/images/shringar/laddu-gopal-altar.png",
    alt: "Laddu Gopal in sacred altar presentation",
    width: 900,
    height: 1100,
  },
  ladduGopalShringar: {
    src: "/images/shringar/laddu-gopal-shringar.png",
    alt: "Fully adorned Laddu Gopal in complete Shringar",
    width: 900,
    height: 1100,
  },
} as const;

export const images = {
  hero: shringarImages.ladduGopalShringar,
  story: shringarImages.flatlay,
  reveal: shringarImages.ladduGopalShringar,
  deity: shringarImages.ladduGopalAltar,
  festival: shringarImages.ladduGopalAltar,
  fabric: shringarImages.flatlay,
  jewelry: shringarImages.peacockJewelry,
  crown: shringarImages.flatlay,
  flowers: shringarImages.flatlay,
  feather: shringarImages.peacockJewelry,
} as const;
