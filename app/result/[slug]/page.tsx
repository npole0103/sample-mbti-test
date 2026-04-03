import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ResultDetails } from "@/components/result/result-details";
import { dessertResultMap, dessertResults } from "@/data/results";
import { parseRarity } from "@/lib/rarity";

type ResultPageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ rarity?: string | string[] }>;
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

export default async function ResultPage({ params, searchParams }: ResultPageProps) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const result = dessertResultMap[slug];
  const rarity = parseRarity(resolvedSearchParams?.rarity) ?? "common";

  if (!result) {
    notFound();
  }

  return (
    <main className="result-page">
      <ResultDetails rarity={rarity} result={result} />
    </main>
  );
}
