/** Replace src paths with real Instagram images when available */
export const galleryItems = [
  {
    id: "1",
    src: "/images/gallery-1.svg",
    alt: "Shringar Seva — floral adornment",
    aspect: "tall" as const,
  },
  {
    id: "2",
    src: "/images/gallery-2.svg",
    alt: "Shringar Seva — jewelry details",
    aspect: "wide" as const,
  },
  {
    id: "3",
    src: "/images/gallery-3.svg",
    alt: "Shringar Seva — crown and mukut",
    aspect: "square" as const,
  },
  {
    id: "4",
    src: "/images/gallery-4.svg",
    alt: "Shringar Seva — festive decoration",
    aspect: "tall" as const,
  },
  {
    id: "5",
    src: "/images/gallery-5.svg",
    alt: "Shringar Seva — peacock feather accent",
    aspect: "wide" as const,
  },
  {
    id: "6",
    src: "/images/gallery-6.svg",
    alt: "Shringar Seva — complete presentation",
    aspect: "square" as const,
  },
] as const;

export const instagramContent = {
  heading: "See the latest Shringar.",
  cta: "Follow @shringar_by_muskan",
};
