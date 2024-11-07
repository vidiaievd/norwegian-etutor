import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dir } from "i18next";
import { languages } from "@/i18n/settings";
import { LayoutProps } from "@/types/layoutProps";
import { ThemeProvider } from "@/components/ThemeProvider";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams(): Promise<{ lng: string }[]> {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: "Learn Norwegian",
  description: "Learn Norwegian",
};

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lng } = await params;
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
