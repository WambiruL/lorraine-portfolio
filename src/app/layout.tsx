import type { Metadata } from "next";
import "@/styles/globals.css";
import SoftCursor from "@/components/shared/SoftCursor";
import PageTransition from "@/components/shared/PageTransition";

export const metadata: Metadata = {
  title: "Lorraine Wambiru — Product & Visual Designer",
  description: "Crafting interfaces that think and visuals that feel.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Lorraine Wambiru — Product & Visual Designer",
    description: "Crafting interfaces that think and visuals that feel.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SoftCursor />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
