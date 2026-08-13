export const heroContent = {
  eyebrow: "SHRINGAR BY MUSKAN",
  heading: "Where Devotion\nBecomes Beauty.",
  scrollHint: "A story of devotion, revealed one detail at a time.",
  stages: [
    { text: "It begins with a little love.", progress: 0.05 },
    { text: "A touch of colour.", progress: 0.15 },
    { text: "A little more beauty.", progress: 0.28 },
    { text: "Flowers chosen with care.", progress: 0.4 },
    { text: "A touch of Kanha.", progress: 0.52 },
    { text: "Every detail has a place.", progress: 0.64 },
    { text: "And then… Kanha.", progress: 0.76 },
  ],
  finalHeading: "A little more beautiful.\nA little more divine.",
  finalTagline: "This is Shringar Seva.",
  primaryCta: "Explore the Art of Shringar",
  secondaryCta: "Begin Your Seva",
};

export const storyContent = {
  eyebrow: "THE MEANING",
  heading: "Shringar is not decoration.",
  subheading: "It is Seva.",
  body: [
    "Shringar is an expression of love, devotion and care offered to the deity.",
    "Every thread, every pearl, every flower is chosen with the same tenderness you feel in your heart.",
    "It is not merely adornment — it is an offering of beauty to the one you cherish most.",
  ],
  brandStatement:
    "Shringar is not merely adornment.\nIt is an expression of love.",
};

export const artOfShringarContent = {
  eyebrow: "THE ART OF ADORNMENT",
  heading: "Every detail\nhas a story.",
  subheading: "Every story begins with devotion.",
};

export const craftChapters = [
  {
    id: "vastra",
    title: "Vastra",
    subtitle: "Sacred fabrics",
    description:
      "Silks and velvets draped with reverence — each fold a whisper of devotion.",
    image: "/images/shringar/shringar-flatlay.png",
    objectPosition: "15% 20%",
  },
  {
    id: "abhushan",
    title: "Abhushan",
    subtitle: "Jewelry & ornaments",
    description:
      "Pearls, gold, and precious stones arranged with the precision of a jeweler's art.",
    image: "/images/shringar/peacock-jewelry.png",
    objectPosition: "60% 45%",
  },
  {
    id: "mukut",
    title: "Mukut",
    subtitle: "Crowns & head adornments",
    description:
      "Regal crowns that honour the divine presence of your beloved Kanha.",
    image: "/images/shringar/shringar-flatlay.png",
    objectPosition: "50% 15%",
  },
  {
    id: "phool",
    title: "Phool",
    subtitle: "Floral beauty",
    description:
      "Fresh marigolds, roses, and jasmine woven into garlands of pure love.",
    image: "/images/shringar/shringar-flatlay.png",
    objectPosition: "75% 70%",
  },
  {
    id: "mor-pankh",
    title: "Mor Pankh",
    subtitle: "Peacock feather details",
    description:
      "The iridescent grace of peacock feathers — a signature of divine beauty.",
    image: "/images/shringar/peacock-jewelry.png",
    objectPosition: "45% 55%",
  },
  {
    id: "seva",
    title: "Seva",
    subtitle: "The complete presentation",
    description:
      "When every element comes together — a moment of pure, transcendent beauty.",
    image: "/images/shringar/laddu-gopal-shringar.png",
    objectPosition: "center",
  },
] as const;

export const detailImages = [
  {
    src: "/images/shringar/peacock-jewelry.png",
    alt: "Pearl and gold jewelry details",
    label: "Pearls",
    objectPosition: "55% 40%",
  },
  {
    src: "/images/shringar/shringar-flatlay.png",
    alt: "Ornate crown detail",
    label: "Crown",
    objectPosition: "50% 12%",
  },
  {
    src: "/images/shringar/shringar-flatlay.png",
    alt: "Silk fabric draping",
    label: "Fabric",
    objectPosition: "20% 25%",
  },
  {
    src: "/images/shringar/shringar-flatlay.png",
    alt: "Fresh floral garlands",
    label: "Flowers",
    objectPosition: "80% 65%",
  },
  {
    src: "/images/shringar/peacock-jewelry.png",
    alt: "Jewelry ornament details",
    label: "Jewelry",
    objectPosition: "65% 35%",
  },
  {
    src: "/images/shringar/peacock-jewelry.png",
    alt: "Peacock feather accent",
    label: "Feather",
    objectPosition: "40% 60%",
  },
] as const;

export const detailSectionContent = {
  eyebrow: "THE DETAILS THAT MAKE THE DIVINE",
  heading: "Beauty lives\nin the details.",
};

export const deityContent = {
  eyebrow: "LADDU GOPAL",
  heading: "For the one who deserves the finest.",
  supporting:
    "Celebrate your Laddu Gopal with handcrafted Shringar created with love and devotion.",
  cta: "Explore Seva",
};

export const festivalContent = {
  heading: "A celebration worthy of Kanha.",
  subheading: "This Janmashtami, let your Laddu Gopal shine brighter.",
  body: "Festive Shringar crafted with the colours, flowers, and ornaments that honour the birth of Krishna — a moment your home will remember.",
  cta: "Book Janmashtami Shringar",
  note: "Dates and packages — contact us for details.",
};

export const philosophyContent = {
  eyebrow: "THE HANDS BEHIND THE BEAUTY",
  lines: [
    { text: "Made with hands.", style: "primary" as const },
    { text: "Chosen with heart.", style: "accent" as const },
    { text: "Offered with devotion.", style: "primary" as const },
  ],
};

export const breathingSpaceContent = {
  heading: "Some things are meant to be cherished.",
  subheading: "And some are meant to be offered with love.",
};

export const bookingContent = {
  heading: "Begin Your Shringar Seva.",
  supporting:
    "Tell us a little about you and the divine moment you wish to create.",
  submitCta: "Send My Seva Enquiry",
  instagramLabel: "Prefer Instagram?",
  instagramCta: "Message Us on Instagram",
  success: {
    heading: "Thank you.",
    body: "Your message has reached us.",
    subtext: "We will connect with you soon.",
    sign: "Radhe Radhe",
  },
};

export const occasionOptions = [
  "Daily Shringar",
  "Festival Shringar",
  "Janmashtami",
  "Floral Shringar",
  "Royal Shringar",
  "Custom Shringar",
  "Other",
] as const;

export const shringarRevealContent = {
  intro: "And then…",
  accent: "Kanha.",
  closing: "A little more beautiful.\nA little more divine.",
};
