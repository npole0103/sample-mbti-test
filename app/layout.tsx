import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";

import { UiPreferencesProvider } from "@/components/providers/ui-preferences";
import { siteConfig } from "@/data/site";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  display: "swap",
  weight: ["400", "500", "700", "800"]
});

const notoSerifKr = Noto_Serif_KR({
  subsets: ["latin"],
  variable: "--font-noto-serif-kr",
  display: "swap",
  weight: ["400", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#fef8f1"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} ${notoSerifKr.variable}`}>
        <UiPreferencesProvider>{children}</UiPreferencesProvider>
      </body>
    </html>
  );
}
