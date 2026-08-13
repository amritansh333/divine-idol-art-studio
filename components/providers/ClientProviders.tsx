"use client";

import { type ReactNode } from "react";
import { SmoothScrollProvider } from "./SmoothScrollProvider";
import { PageLoader } from "@/components/loader/PageLoader";
import { Navigation } from "@/components/navigation/Navigation";
import { ImageCursor } from "@/components/cursor/ImageCursor";
import { FloatingPetals } from "@/components/animations/GoldThread";

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <PageLoader />
      <Navigation />
      <ImageCursor />
      <FloatingPetals count={8} />
      {children}
    </SmoothScrollProvider>
  );
}
