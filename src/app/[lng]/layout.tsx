import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import { languages } from "@/i18n/settings";

// import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams(): Promise<{ lng: string }[]> {
  return languages.map((lng) => ({ lng }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}

export const metadata: Metadata = {
  title: "Learn Norwegian",
  description: "Learn Norwegian",
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const {lng} = await params;
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}