"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ImageCursor() {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("VIEW");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    const touch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(touch);
    if (touch) return;

    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("[data-cursor]");
      if (interactive) {
        setVisible(true);
        setLabel(interactive.getAttribute("data-cursor") || "VIEW");
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-0 z-[90] mix-blend-difference"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        aria-hidden
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <div className="h-2 w-2 rounded-full bg-soft-gold" />
        </div>
      </div>

      <AnimatePresence>
        {visible && (
          <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[89]"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            aria-hidden
          >
            <div className="relative -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 items-center justify-center rounded-full border border-antique-gold/40 bg-maroon/10 backdrop-blur-sm">
              <span className="text-[10px] tracking-[0.2em] text-maroon uppercase">
                {label}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
