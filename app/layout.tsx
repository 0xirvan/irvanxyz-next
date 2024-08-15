import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/config/siteConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [
    "Irvan",
    "Irvan pramana",
    "irvanpramana",
    "irvan pramana putra",
    "irvan .xyz",
    "0x476569636f",
  ],
  robots: "follow, index",
  applicationName: siteConfig.title,
  authors: [{ name: "Irvan Pramana Putra" }],
  creator: "Irvan Pramana Putra",
  publisher: "Irvan Pramana Putra",
  openGraph: {
    type: "website",
    url: "https://irvan.xyz",
    title: siteConfig.title,
    description: siteConfig.description,
  },
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
