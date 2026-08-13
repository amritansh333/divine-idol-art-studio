import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "public", "images");
fs.mkdirSync(dir, { recursive: true });
fs.mkdirSync(path.join(__dirname, "..", "public", "ornaments"), { recursive: true });

const themes = {
  "hero-laddu-gopal": { w: 800, h: 1000, c1: "#FFF8ED", c2: "#B51F4B", c3: "#B88932", label: "Laddu Gopal Shringar" },
  "story-shringar": { w: 700, h: 900, c1: "#F8F0E3", c2: "#64152D", c3: "#D7B56D", label: "The Art of Seva" },
  "reveal-laddu-gopal": { w: 900, h: 1100, c1: "#64152D", c2: "#B51F4B", c3: "#B88932", label: "Divine Reveal" },
  "deity-feature": { w: 800, h: 1000, c1: "#FFF8ED", c2: "#126C75", c3: "#B88932", label: "For Kanha" },
  "festival-janmashtami": { w: 900, h: 700, c1: "#8F1738", c2: "#B51F4B", c3: "#D7B56D", label: "Janmashtami" },
  "craft-vastra": { w: 600, h: 800, c1: "#F8F0E3", c2: "#B51F4B", c3: "#236B55", label: "Vastra" },
  "craft-abhushan": { w: 600, h: 800, c1: "#FFF8ED", c2: "#B88932", c3: "#64152D", label: "Abhushan" },
  "craft-mukut": { w: 600, h: 800, c1: "#F8F0E3", c2: "#D7B56D", c3: "#8F1738", label: "Mukut" },
  "craft-phool": { w: 600, h: 800, c1: "#FFF8ED", c2: "#B51F4B", c3: "#236B55", label: "Phool" },
  "craft-morpankh": { w: 600, h: 800, c1: "#F8F0E3", c2: "#126C75", c3: "#236B55", label: "Mor Pankh" },
  "craft-seva": { w: 600, h: 800, c1: "#64152D", c2: "#B51F4B", c3: "#B88932", label: "Seva" },
  "detail-pearls": { w: 500, h: 500, c1: "#FFF8ED", c2: "#F8F0E3", c3: "#B88932", label: "Pearls" },
  "detail-jewelry": { w: 500, h: 500, c1: "#F8F0E3", c2: "#B88932", c3: "#64152D", label: "Jewelry" },
  "detail-fabric": { w: 500, h: 500, c1: "#B51F4B", c2: "#8F1738", c3: "#D7B56D", label: "Fabric" },
  "detail-flowers": { w: 500, h: 500, c1: "#FFF8ED", c2: "#B51F4B", c3: "#236B55", label: "Flowers" },
  "detail-crown": { w: 500, h: 500, c1: "#F8F0E3", c2: "#D7B56D", c3: "#64152D", label: "Crown" },
  "detail-feather": { w: 500, h: 500, c1: "#FFF8ED", c2: "#126C75", c3: "#236B55", label: "Peacock" },
  "collection-daily": { w: 600, h: 750, c1: "#F8F0E3", c2: "#B88932", c3: "#64152D", label: "Daily" },
  "collection-festival": { w: 600, h: 750, c1: "#8F1738", c2: "#B51F4B", c3: "#D7B56D", label: "Festival" },
  "collection-janmashtami": { w: 600, h: 750, c1: "#64152D", c2: "#B51F4B", c3: "#B88932", label: "Janmashtami" },
  "collection-floral": { w: 600, h: 750, c1: "#FFF8ED", c2: "#B51F4B", c3: "#236B55", label: "Floral" },
  "collection-royal": { w: 600, h: 750, c1: "#64152D", c2: "#D7B56D", c3: "#B88932", label: "Royal" },
  "collection-custom": { w: 600, h: 750, c1: "#F8F0E3", c2: "#126C75", c3: "#B88932", label: "Custom" },
  "gallery-1": { w: 500, h: 650, c1: "#FFF8ED", c2: "#B51F4B", c3: "#B88932", label: "Gallery" },
  "gallery-2": { w: 700, h: 450, c1: "#F8F0E3", c2: "#64152D", c3: "#D7B56D", label: "Gallery" },
  "gallery-3": { w: 500, h: 500, c1: "#FFF8ED", c2: "#126C75", c3: "#236B55", label: "Gallery" },
  "gallery-4": { w: 500, h: 650, c1: "#8F1738", c2: "#B51F4B", c3: "#D7B56D", label: "Gallery" },
  "gallery-5": { w: 700, h: 450, c1: "#F8F0E3", c2: "#236B55", c3: "#126C75", label: "Gallery" },
  "gallery-6": { w: 500, h: 500, c1: "#64152D", c2: "#B88932", c3: "#D7B56D", label: "Gallery" },
};

function makeSvg(name, { w, h, c1, c2, c3, label }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg-${name}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="55%" stop-color="${c2}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${c3}" stop-opacity="0.25"/>
    </linearGradient>
    <radialGradient id="glow-${name}" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="${c3}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${c1}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg-${name})"/>
  <rect width="${w}" height="${h}" fill="url(#glow-${name})"/>
  <ellipse cx="${w * 0.5}" cy="${h * 0.42}" rx="${w * 0.18}" ry="${h * 0.14}" fill="${c3}" opacity="0.15"/>
  <ellipse cx="${w * 0.5}" cy="${h * 0.38}" rx="${w * 0.12}" ry="${h * 0.1}" fill="${c2}" opacity="0.2"/>
  <path d="M${w * 0.5} ${h * 0.55} C${w * 0.35} ${h * 0.48} ${w * 0.3} ${h * 0.35} ${w * 0.5} ${h * 0.22} C${w * 0.7} ${h * 0.35} ${w * 0.65} ${h * 0.48} ${w * 0.5} ${h * 0.55}Z" fill="${c2}" opacity="0.12"/>
  <circle cx="${w * 0.5}" cy="${h * 0.3}" r="${Math.min(w, h) * 0.04}" fill="${c3}" opacity="0.5"/>
  <text x="${w * 0.5}" y="${h * 0.88}" text-anchor="middle" fill="${c2}" opacity="0.4" font-family="Georgia, serif" font-size="${Math.min(w, h) * 0.035}">${label}</text>
  <text x="${w * 0.5}" y="${h * 0.93}" text-anchor="middle" fill="${c3}" opacity="0.35" font-family="Georgia, serif" font-size="${Math.min(w, h) * 0.022}" letter-spacing="3">Replace with photo</text>
</svg>`;
}

for (const [name, theme] of Object.entries(themes)) {
  fs.writeFileSync(path.join(dir, `${name}.svg`), makeSvg(name, theme));
}

const jaali = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
  <path d="M0 60 Q30 30 60 60 T120 60" fill="none" stroke="#B88932" stroke-width="0.4" opacity="0.15"/>
  <path d="M0 30 Q30 0 60 30 T120 30" fill="none" stroke="#B88932" stroke-width="0.4" opacity="0.1"/>
  <path d="M0 90 Q30 60 60 90 T120 90" fill="none" stroke="#B88932" stroke-width="0.4" opacity="0.1"/>
  <circle cx="60" cy="60" r="8" fill="none" stroke="#B88932" stroke-width="0.4" opacity="0.12"/>
</svg>`;
fs.writeFileSync(path.join(__dirname, "..", "public", "ornaments", "jaali.svg"), jaali);

console.log(`Generated ${Object.keys(themes).length} placeholder images.`);
