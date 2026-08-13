export const siteConfig = {
  name: "Shringar by Muskan",
  tagline: "Where Devotion Becomes Beauty.",
  description:
    "Handcrafted Shringar Seva for Laddu Gopal and Hindu deity idols, created with love and devotion.",
  instagram: {
    handle: "@shringar_by_muskan",
    url: "https://www.instagram.com/shringar_by_muskan/",
  },
  contact: {
    whatsapp: "", // Add WhatsApp number when available
    email: "", // Add email when available
  },
  url: "https://shringarbymuskan.com", // Placeholder canonical URL
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Shringar", href: "#shringar" },
  { label: "Gallery", href: "#gallery" },
  { label: "Festivals", href: "#festivals" },
  { label: "Contact", href: "#contact" },
] as const;
