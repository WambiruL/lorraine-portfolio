import type { Metadata } from "next";
import { Fraunces, Outfit, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "@/styles/globals.css";
import SoftCursor from "@/components/shared/SoftCursor";
import PageTransition from "@/components/shared/PageTransition";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display",
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lorraine Wambiru",
  description: "Design that thinks. Work that stays with you.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Lorraine Wambiru — Product & Visual Designer",
    description: "Design that thinks. Work that stays with you.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${outfit.variable} ${spaceMono.variable}`}>
        <SoftCursor />
        <PageTransition>
          {children}
        </PageTransition>
        <Analytics />
      </body>
    </html>
  );
}