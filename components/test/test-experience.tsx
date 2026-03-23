"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { questions, type Trait } from "@/data/questions";
import { getResultFromAnswers } from "@/lib/scoring";
import { ProgressBar } from "@/components/test/progress-bar";
import { QuestionCard } from "@/components/test/question-card";

export function TestExperience() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Trait[]>([]);
  const [isPending, startTransition] = useTransition();

  const question = questions[index];

  const handleSelect = (trait: Trait) => {
    const nextAnswers = [...answers, trait];
    setAnswers(nextAnswers);

    if (index === questions.length - 1) {
      const result = getResultFromAnswers(nextAnswers);
      startTransition(() => {
        router.push(`/result/${result.slug}`);
      });
      return;
    }

    setIndex((current) => current + 1);
  };

  return (
    <div className="test-shell">
      <ProgressBar current={index + 1} total={questions.length} />
      <QuestionCard question={question} onSelect={handleSelect} />
      <p className="micro-copy">
        질문 중 광고는 넣지 않았어요. 흐름에만 집중해서 빠르게 끝낼 수 있게 구성했습니다.
      </p>
      {isPending ? <p className="micro-copy">결과를 굽는 중이에요...</p> : null}
    </div>
  );
}
