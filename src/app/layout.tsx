import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Instant Review — AI-Powered Ultrasound Feedback | GUSI ScanHub",
  description:
    "Instant Review uses AI to analyze your ultrasound scans and deliver targeted, actionable feedback — in minutes. Available 24/7 through GUSI ScanHub.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
