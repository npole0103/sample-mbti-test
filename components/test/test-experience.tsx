"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, useTransition } from "react";

import { CroissantOrnament } from "@/components/landing/bakery-ornaments";
import { useUiPreferences } from "@/components/providers/ui-preferences";
import { questionCopy } from "@/data/question-copy";
import { questions, type Trait } from "@/data/questions";
import { pickRarity } from "@/lib/rarity";
import { getResultFromAnswers } from "@/lib/scoring";

const bakingStatuses = {
  ko: [
    "재료를 정성껏 계량하고 있어요 🥣",
    "달콤한 반죽을 동그랗게 만들고 있어요 🥟",
    "오븐을 따뜻하게 예열하고 있어요 🔥",
    "노릇노릇 맛있게 구워지고 있어요 🥐",
    "크림과 토핑을 올리고 있어요 🧁",
    "리본을 묶고 카드를 포장하고 있어요 🎁"
  ],
  en: [
    "Carefully measuring ingredients 🥣",
    "Shaping sweet dough 🥟",
    "Warming up the oven 🔥",
    "Baking beautifully in the oven 🥐",
    "Adding cream and toppings 🧁",
    "Wrapping the card with ribbon 🎁"
  ]
} as const;

export function TestExperience() {
  const router = useRouter();
  const { lang, t } = useUiPreferences();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Trait[]>([]);
  const [isPending, startTransition] = useTransition();
  const unlockTimerRef = useRef<number | null>(null);

  const question = questions[index];
  const copy = questionCopy[question.id];
  const localizedCopy = lang === "KOR" ? copy.ko : copy.en;
  const currentQuestion = index + 1;
  const progress = (currentQuestion / questions.length) * 100;
  const isLastQuestion = currentQuestion === questions.length;
  const currentAnswer = answers[index];
  const currentSelectedOption =
    currentAnswer === question.options[0].trait
      ? "A"
      : currentAnswer === question.options[1].trait
        ? "B"
        : null;
  const bakingStatus = useMemo(() => {
    const statusList = lang === "KOR" ? bakingStatuses.ko : bakingStatuses.en;
    return statusList[Math.min(Math.floor(index / 4), statusList.length - 1)];
  }, [index, lang]);

  const submitResult = (nextAnswers: Trait[]) => {
    const result = getResultFromAnswers(nextAnswers);
    const rarity = pickRarity();
    startTransition(() => {
      router.push(`/result/${result.slug}?rarity=${rarity}`);
    });
  };

  const handleBack = () => {
    if (currentQuestion === 1) {
      router.push("/");
      return;
    }

    if (unlockTimerRef.current !== null) {
      window.clearTimeout(unlockTimerRef.current);
    }

    setIndex((current) => Math.max(0, current - 1));
  };

  const handleAnswer = (option: "A" | "B", trait: Trait) => {
    if (isPending) {
      return;
    }

    const nextAnswers = [...answers.slice(0, index), trait];
    setAnswers(nextAnswers);

    if (isLastQuestion) {
      return;
    }

    unlockTimerRef.current = window.setTimeout(() => {
      setIndex((current) => current + 1);
    }, 220);
  };

  useEffect(() => {
    return () => {
      if (unlockTimerRef.current !== null) {
        window.clearTimeout(unlockTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="test-screen test-screen--figma">
      <div className="test-screen__decor" aria-hidden="true">
        <CroissantOrnament className="test-screen__decor-icon" />
      </div>

      <div className="test-screen__inner">
        <header className="test-screen__header">
          <button
            aria-label={t("이전으로", "Go back")}
            className="test-screen__back"
            onClick={handleBack}
            type="button"
          >
            ‹
          </button>
          <div className="test-screen__step">Q{question.id}</div>
          <div className="test-screen__spacer" />
        </header>

        <div className="test-screen__status-wrap">
          <div className="test-screen__status">{bakingStatus}</div>
        </div>

        <section className="test-progress-panel">
          <div className="test-progress-panel__track">
            <div className="test-progress-panel__fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="test-progress-panel__count">
            {currentQuestion} / {questions.length}
          </div>
        </section>

        <section className="test-question-panel" key={question.id}>
          <h1 className="test-question-panel__title">{localizedCopy.prompt}</h1>

          <div className="test-question-panel__options">
            {localizedCopy.options.map((label, optionIndex) => {
              const optionKey = optionIndex === 0 ? "A" : "B";
              const isSelected = currentSelectedOption === optionKey;
              const trait = question.options[optionIndex].trait;

              return (
                <button
                  className={`test-answer-button ${isSelected ? "is-selected" : ""}`}
                  disabled={isPending}
                  key={`${question.id}-${optionKey}`}
                  onClick={() => handleAnswer(optionKey, trait)}
                  type="button"
                >
                  <span className="test-answer-button__prefix">{optionKey}.</span>
                  <span className="test-answer-button__label">{label}</span>
                </button>
              );
            })}
          </div>

          {isLastQuestion && currentSelectedOption ? (
            <button
              className="test-submit-button"
              disabled={isPending}
              onClick={() => submitResult(answers)}
              type="button"
            >
              {t("제출하기", "Submit")}
              <span aria-hidden="true">🔥</span>
            </button>
          ) : null}

          {isPending ? (
            <p className="test-question-panel__pending">
              {t("당신만의 디저트 카드를 오븐에서 꺼내는 중이에요...", "Taking your dessert card out of the oven...")}
            </p>
          ) : null}
        </section>
      </div>
    </div>
  );
}
