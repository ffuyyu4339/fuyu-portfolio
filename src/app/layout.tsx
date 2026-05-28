import type { Metadata } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Fu Yu | AI Engineering Portfolio",
  description:
    "Software engineering portfolio focused on AI application development, Android background, data analytics, and AI-assisted engineering workflow.",
  keywords: [
    "Fu Yu",
    "付钰",
    "AI Application Development",
    "Software Engineering",
    "Android Developer",
    "Data Analytics",
    "Job Tracker",
    "JD Analyzer",
    "Personal Finance App",
    "AI Engineering Workflow",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${geist.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
