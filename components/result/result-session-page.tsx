"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { ResultDetails } from "@/components/result/result-details";
import { dessertResultMap, type DessertResult } from "@/data/results";
import { type Rarity } from "@/lib/rarity";
import { readResultSession } from "@/lib/result-session";

type ResolvedResultSession = {
  rarity: Rarity;
  result: DessertResult;
};

function resolveSessionResult(): ResolvedResultSession | null {
  const storedResult = readResultSession();
  if (!storedResult) {
    return null;
  }

  const result = dessertResultMap[storedResult.slug];
  if (!result) {
    return null;
  }

  return {
    result,
    rarity: storedResult.rarity
  };
}

export function ResultSessionPage() {
  const router = useRouter();
  const [sessionResult] = useState<ResolvedResultSession | null>(() => resolveSessionResult());

  useEffect(() => {
    if (!sessionResult) {
      router.replace("/test");
    }
  }, [router, sessionResult]);

  if (!sessionResult) {
    return null;
  }

  return <ResultDetails rarity={sessionResult.rarity} result={sessionResult.result} />;
}
