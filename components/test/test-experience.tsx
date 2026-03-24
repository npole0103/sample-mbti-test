"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";

import { questions, type Trait } from "@/data/questions";
import { getResultFromAnswers } from "@/lib/scoring";
import { ProgressBar } from "@/components/test/progress-bar";
import { QuestionCard } from "@/components/test/question-card";

const chapterLabels = [
  { until: 6, label: "오븐 예열" },
  { until: 12, label: "반죽 정리" },
  { until: 18, label: "굽는 중" },
  { until: 24, label: "쇼윈도 포장" }
];

export function TestExperience() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Trait[]>([]);
  const [isAdvancing, setIsAdvancing] = useState(false);
  const [isPending, startTransition] = useTransition();
  const unlockTimerRef = useRef<number | null>(null);

  const question = questions[index];
  const currentQuestion = index + 1;
  const chapter = chapterLabels.find((item) => currentQuestion <= item.until)?.label ?? "완성";

  const handleSelect = (trait: Trait) => {
    if (isAdvancing || isPending) {
      return;
    }

    setIsAdvancing(true);
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
    unlockTimerRef.current = window.setTimeout(() => {
      setIsAdvancing(false);
    }, 320);
  };

  useEffect(() => {
    return () => {
      if (unlockTimerRef.current !== null) {
        window.clearTimeout(unlockTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="test-shell">
      <div className="chapter-chip">{chapter}</div>
      <ProgressBar current={currentQuestion} total={questions.length} />
      <QuestionCard disabled={isAdvancing || isPending} question={question} onSelect={handleSelect} />
      <p className="micro-copy">
        질문을 푸는 동안에는 광고가 노출되지 않아요. 흐름이 끊기지 않도록 가볍고 빠른 모바일
        경험에 집중했습니다.
      </p>
      {isPending ? <p className="micro-copy">결과 카드를 쇼윈도에 올리는 중이에요...</p> : null}
    </div>
  );
}
