import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/config/siteConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Irvan pramana",
  description: siteConfig.description,
  keywords: [
    "Irvan pramana",
    "Irvan",
    "Pramana",
    "Irvan Pramana",
    "irvan.xyz",
    "irvanpramana",
    "irvan .xyz",
    "0x476569636f",
    "irvanberuq",
    "Portfolio",
    "Portfolio Irvan Pramana",
    "Portfolio Irvan",
    "irvan pramana putra",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col px-4 py-4 md:container md:w-[45rem] md:px-0 md:py-8">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
