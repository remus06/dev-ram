import type { Metadata } from "next";
import localFont from "next/font/local";
import { DevGridToggle } from "@/components/dev-grid";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "./fonts/Inter-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Inter-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = localFont({
  src: [
    { path: "./fonts/IBMPlexMono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexMono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://s-fservices.fr";
const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alliance Corps Esprit — Nawel Billali",
    template: "%s",
  },
  description:
    "Cabinet de Nawel Billali à La Destrousse (13112) : hypnose éricksonienne, sophrologie RNCP, soins énergétiques. Séances au cabinet ou en visio.",
  robots: allowIndexing
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    title: "Alliance Corps Esprit — Nawel Billali",
    description:
      "Hypnose éricksonienne, sophrologie RNCP et soins énergétiques à La Destrousse (13112).",
    url: siteUrl,
    siteName: "Alliance Corps Esprit",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        {process.env.NODE_ENV !== "production" && <DevGridToggle />}
      </body>
    </html>
  );
}
