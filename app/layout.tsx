import "./globals.css";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import MenuProvider from "@/components/MenuProvider";
import Cursor from "@/components/CustomCursor";

// Professional fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Shrenik Dubal | Full Stack Developer",
  description:
    "Professional portfolio of Shrenik Dubal, Full Stack Developer specializing in React.js, Next.js, Node.js, and modern web technologies.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        {/* Global Background Pattern */}
        <div className="fixed inset-0 z-[-2] pattern-bg" />
        <Cursor />
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  );
}
