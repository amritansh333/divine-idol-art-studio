import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Great_Vibes } from "next/font/google";
import { ClientProviders } from "@/components/providers/ClientProviders";
import { siteConfig } from "@/lib/constants/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shringar by Muskan | Beautiful Shringar Seva",
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shringar by Muskan | Beautiful Shringar Seva",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shringar by Muskan | Beautiful Shringar Seva",
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${greatVibes.variable} h-full`}
    >
      <body className="min-h-full bg-warm-cream font-sans text-charcoal antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
