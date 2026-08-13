"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants/site";
import { BrandMark, OrnamentalDivider } from "@/components/decorative/Ornaments";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { cn } from "@/lib/utils/cn";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-warm-cream/85 backdrop-blur-md shadow-[0_1px_0_color-mix(in_srgb,var(--antique-gold)_20%,transparent)]"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
          <a
            href="#home"
            className="group flex items-center gap-3"
            aria-label={`${siteConfig.name} — Home`}
          >
            <BrandMark className="h-8 w-8 transition-transform duration-300 group-hover:scale-105" />
            <span className="font-serif text-lg tracking-wide text-charcoal md:text-xl">
              Shringar by Muskan
            </span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-xs uppercase tracking-[0.15em] text-charcoal/80 transition-colors hover:text-maroon after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-antique-gold after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <MagneticButton href="#contact" variant="primary">
              Book Seva
            </MagneticButton>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-charcoal lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-maroon text-warm-cream lg:hidden"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <span className="font-serif text-lg">Menu</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <OrnamentalDivider className="mx-auto w-48 opacity-60" />

            <nav className="flex flex-1 flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-3xl tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <MagneticButton
                  href="#contact"
                  variant="outline"
                  onClick={() => setMenuOpen(false)}
                >
                  Book Seva
                </MagneticButton>
              </motion.div>
            </nav>

            <p className="pb-8 text-center font-script text-2xl text-soft-gold">
              Radhe Radhe
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
