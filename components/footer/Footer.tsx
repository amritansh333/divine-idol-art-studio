import { siteConfig, navLinks } from "@/lib/constants/site";
import { BrandMark, OrnamentalDivider } from "@/components/decorative/Ornaments";

export function Footer() {
  return (
    <footer className="bg-charcoal text-warm-cream/80 section-padding pb-10 pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <BrandMark className="mb-6 h-12 w-12 opacity-70" />
          <h2 className="font-serif text-2xl text-warm-cream md:text-3xl">
            {siteConfig.name}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-warm-cream/60">
            Bringing devotion to life with beautiful Shringar.
          </p>
          <OrnamentalDivider className="my-8 w-48 opacity-50" />
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div className="text-center md:text-left">
            <p className="mb-3 text-xs tracking-[0.2em] text-soft-gold uppercase">
              Follow
            </p>
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-cream transition-colors hover:text-soft-gold"
            >
              {siteConfig.instagram.handle}
            </a>
          </div>

          <nav aria-label="Footer navigation" className="text-center">
            <p className="mb-3 text-xs tracking-[0.2em] text-soft-gold uppercase">
              Explore
            </p>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-soft-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-center md:text-right">
            <p className="mb-3 text-xs tracking-[0.2em] text-soft-gold uppercase">
              Contact
            </p>
            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors hover:text-soft-gold"
            >
              Message on Instagram
            </a>
          </div>
        </div>

        <OrnamentalDivider className="mx-auto my-10 w-64 opacity-30" />

        <p className="text-center font-script text-3xl text-soft-gold/80">
          Radhe Radhe
        </p>
        <p className="mt-6 text-center text-xs text-warm-cream/30">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
