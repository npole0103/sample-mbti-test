import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ResultDetails } from "@/components/result/result-details";
import { dessertResultMap, dessertResults } from "@/data/results";

type ResultPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return dessertResults.map((result) => ({ slug: result.slug }));
}

export async function generateMetadata({ params }: ResultPageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = dessertResultMap[slug];

  if (!result) {
    return {};
  }

  return {
    title: `${result.name} | ${result.subtitle}`,
    description: `${result.summary} ${result.description}`,
    openGraph: {
      title: `${result.name} | ${result.subtitle}`,
      description: result.summary
    }
  };
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { slug } = await params;
  const result = dessertResultMap[slug];

  if (!result) {
    notFound();
  }

  return (
    <main className="result-page">
      <div className="result-page-header">
        <Link className="mini-link" href="/">
          메인 쇼윈도로 돌아가기
        </Link>
      </div>
      <ResultDetails result={result} />
    </main>
  );
}
