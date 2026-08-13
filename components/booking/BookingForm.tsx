"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { bookingContent, occasionOptions } from "@/data/content";
import { siteConfig } from "@/lib/constants/site";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { OrnamentalDivider, PeacockFeather, Lotus } from "@/components/decorative/Ornaments";
import { useReducedMotion } from "@/lib/animations/useReducedMotion";
import { cn } from "@/lib/utils/cn";

type FormData = {
  name: string;
  mobile: string;
  address: string;
  message: string;
  occasion: string;
};

const initialForm: FormData = {
  name: "",
  mobile: "",
  address: "",
  message: "",
  occasion: "",
};

/** Placeholder for backend integration — wire to API/email service */
async function submitSevaEnquiry(_data: FormData): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 800));
}

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function BookingForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitSevaEnquiry(form);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-maroon via-crimson to-[#4a1020] section-padding text-warm-cream"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 warm-glow opacity-30" />
      <PeacockFeather className="pointer-events-none absolute -bottom-4 -right-2 h-40 w-14 rotate-12 opacity-10 md:right-8" />
      <Lotus className="pointer-events-none absolute left-6 top-12 h-16 w-28 opacity-10" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-4 border border-soft-gold/15 md:inset-10"
      />

      <div className="relative mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <OrnamentalDivider className="mx-auto mb-8 w-48 opacity-60" />
          <h2 className="editorial-heading text-warm-cream">
            {bookingContent.heading}
          </h2>
          <p className="mt-4 text-lg text-warm-cream/75">
            {bookingContent.supporting}
          </p>
        </div>

        <div className="relative rounded-sm bg-warm-cream p-8 text-charcoal shadow-[0_32px_80px_rgba(0,0,0,0.25)] md:p-12">
          <div aria-hidden className="pointer-events-none absolute inset-3 border border-antique-gold/20" />

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-8 text-center"
              >
                <Lotus className="mx-auto mb-6 h-12 w-20 text-antique-gold" />
                <h3 className="font-serif text-3xl text-maroon md:text-4xl">
                  {bookingContent.success.heading}
                </h3>
                <p className="mt-4 text-lg text-charcoal/80">
                  {bookingContent.success.body}
                </p>
                <p className="mt-2 text-charcoal/60">
                  {bookingContent.success.subtext}
                </p>
                <p className="mt-8 font-script text-3xl text-antique-gold">
                  {bookingContent.success.sign}
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {[
                  {
                    id: "name" as const,
                    label: "Your Name",
                    placeholder: "Enter your name",
                    type: "text" as const,
                  },
                  {
                    id: "mobile" as const,
                    label: "Mobile Number",
                    placeholder: "Enter your mobile number",
                    type: "tel" as const,
                  },
                  {
                    id: "address" as const,
                    label: "Address",
                    placeholder: "Where should your Shringar Seva reach?",
                    type: "text" as const,
                  },
                ].map((field, i) => (
                  <motion.div
                    key={field.id}
                    custom={i}
                    variants={reducedMotion || inView ? undefined : fieldVariants}
                    initial={reducedMotion ? false : "hidden"}
                    animate={reducedMotion || inView ? "visible" : "hidden"}
                  >
                    <label htmlFor={field.id} className="mb-2 block text-xs tracking-[0.15em] text-charcoal/60 uppercase">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required={field.id !== "address"}
                      value={form[field.id]}
                      onChange={update(field.id)}
                      placeholder={field.placeholder}
                      className="w-full border-b border-antique-gold/30 bg-transparent px-1 py-3 text-charcoal placeholder:text-charcoal/35 focus:border-antique-gold focus:outline-none"
                    />
                  </motion.div>
                ))}

                <motion.div
                  custom={3}
                  variants={reducedMotion || inView ? undefined : fieldVariants}
                  initial={reducedMotion ? false : "hidden"}
                  animate={reducedMotion || inView ? "visible" : "hidden"}
                >
                  <label htmlFor="occasion" className="mb-2 block text-xs tracking-[0.15em] text-charcoal/60 uppercase">
                    Preferred Occasion
                  </label>
                  <select
                    id="occasion"
                    value={form.occasion}
                    onChange={update("occasion")}
                    className="w-full border-b border-antique-gold/30 bg-transparent px-1 py-3 text-charcoal focus:border-antique-gold focus:outline-none"
                  >
                    <option value="">Select an occasion</option>
                    {occasionOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  custom={4}
                  variants={reducedMotion || inView ? undefined : fieldVariants}
                  initial={reducedMotion ? false : "hidden"}
                  animate={reducedMotion || inView ? "visible" : "hidden"}
                >
                  <label htmlFor="message" className="mb-2 block text-xs tracking-[0.15em] text-charcoal/60 uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us about your Shringar requirement..."
                    className="w-full resize-none border border-antique-gold/25 bg-transparent px-3 py-3 text-charcoal placeholder:text-charcoal/35 focus:border-antique-gold focus:outline-none"
                  />
                </motion.div>

                <motion.div
                  custom={5}
                  variants={reducedMotion || inView ? undefined : fieldVariants}
                  initial={reducedMotion ? false : "hidden"}
                  animate={reducedMotion || inView ? "visible" : "hidden"}
                  className="pt-4"
                >
                  <button
                    type="submit"
                    disabled={submitting}
                    className={cn(
                      "group inline-flex w-full items-center justify-center gap-2 bg-maroon px-8 py-4 text-xs tracking-[0.2em] text-warm-cream uppercase transition-colors hover:bg-antique-gold hover:text-charcoal disabled:opacity-60 sm:w-auto",
                      submitting && "cursor-wait"
                    )}
                  >
                    {submitting ? "Sending…" : bookingContent.submitCta}
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-warm-cream/60">{bookingContent.instagramLabel}</p>
          <p className="mt-1 font-serif text-xl text-soft-gold">
            {siteConfig.instagram.handle}
          </p>
          <div className="mt-6">
            <MagneticButton href={siteConfig.instagram.url} variant="outline">
              {bookingContent.instagramCta}
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
