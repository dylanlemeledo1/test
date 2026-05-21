import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nebula.app"),
  title: {
    default: "Nebula — Workflow intelligence for modern teams",
    template: "%s · Nebula",
  },
  description:
    "Nebula turns your workflows into compounding intelligence. Ship faster, learn deeper, and operate with the clarity of your best engineer — at the speed of your whole team.",
  keywords: [
    "workflow",
    "AI",
    "analytics",
    "product",
    "engineering",
    "automation",
    "SaaS",
  ],
  authors: [{ name: "Nebula" }],
  openGraph: {
    title: "Nebula — Workflow intelligence for modern teams",
    description:
      "Ship faster, learn deeper, and operate with the clarity of your best engineer.",
    url: "https://nebula.app",
    siteName: "Nebula",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nebula — Workflow intelligence for modern teams",
    description:
      "Ship faster, learn deeper, and operate with the clarity of your best engineer.",
    creator: "@nebula",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070710",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} dark`}>
      <body className="min-h-screen antialiased selection:bg-violet-500/40">
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
