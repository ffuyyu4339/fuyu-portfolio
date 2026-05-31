import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_SC, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const headlineFont = Space_Grotesk({ subsets: ["latin"], variable: "--font-headline" });
const bodyFont = Noto_Sans_SC({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "700", "900"] });
const monoFont = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "付钰的个人作品集",
  description: "软件工程背景的 AI 应用开发者作品集，聚焦项目实践、工程化能力与 AI 辅助开发流程。",
  keywords: ["付钰", "Fu Yu", "AI 应用开发", "数据分析", "Job Tracker", "记账本 APP", "作品集"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${headlineFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
