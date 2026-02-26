import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kyzylorda Hub — IT-экосистема Кызылординской области",
  description:
    "Kyzylorda Hub — региональный IT-хаб и технопарк. Поддержка стартапов, обучение, коворкинг, менторство и инвестиции в Кызылординской области.",
  keywords: "Kyzylorda Hub, стартапы, IT, технопарк, коворкинг, Кызылорда, Astana Hub",
  authors: [{ name: "Kyzylorda Hub" }],
  openGraph: {
    title: "Kyzylorda Hub — IT-экосистема Кызылординской области",
    description: "Развиваем IT-экосистему Кызылординской области. Поддержка стартапов, обучение и коворкинг.",
    url: "https://www.kyzylordahub.kz",
    siteName: "Kyzylorda Hub",
    locale: "ru_KZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyzylorda Hub",
    description: "Региональный IT-хаб Кызылординской области",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
