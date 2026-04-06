import type { Metadata } from "next";

import { ResultSessionPage } from "@/components/result/result-session-page";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "테스트 결과",
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} 결과`,
    description: siteConfig.description
  }
};

export default function ResultPage() {
  return (
    <main className="result-page">
      <ResultSessionPage />
    </main>
  );
}
