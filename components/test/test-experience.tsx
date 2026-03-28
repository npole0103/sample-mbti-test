"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";

import { ProgressBar } from "@/components/test/progress-bar";
import { QuestionCard } from "@/components/test/question-card";
import { questions, type Trait } from "@/data/questions";
import { pickRarity } from "@/lib/rarity";
import { getResultFromAnswers } from "@/lib/scoring";

const chapterLabels = [
  { until: 6, label: "첫 반죽의 온도" },
  { until: 12, label: "마음이 부푸는 시간" },
  { until: 18, label: "사르르 향이 깊어지는 중" },
  { until: 24, label: "쇼윈도에 진열 완료" }
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
  const chapter = chapterLabels.find((item) => currentQuestion <= item.until)?.label ?? "갓 구워짐";

  const handleSelect = (trait: Trait) => {
    if (isAdvancing || isPending) {
      return;
    }

    setIsAdvancing(true);
    const nextAnswers = [...answers, trait];
    setAnswers(nextAnswers);

    if (index === questions.length - 1) {
      const result = getResultFromAnswers(nextAnswers);
      const rarity = pickRarity();
      startTransition(() => {
        router.push(`/result/${result.slug}?rarity=${rarity}`);
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
        질문을 푸는 동안에는 광고 없이, 오직 테스트 흐름에만 집중할 수 있도록 가볍고 빠르게
        구성했어요.
      </p>
      {isPending ? <p className="micro-copy">결과 카드를 오븐에서 꺼내는 중이에요...</p> : null}
    </div>
  );
}
