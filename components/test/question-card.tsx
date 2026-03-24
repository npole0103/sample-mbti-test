"use client";

import { useEffect, useRef } from "react";

import type { Question } from "@/data/questions";

type QuestionCardProps = {
  question: Question;
  onSelect: (trait: Question["options"][number]["trait"]) => void;
  disabled?: boolean;
};

export function QuestionCard({ question, onSelect, disabled = false }: QuestionCardProps) {
  const firedRef = useRef<string | null>(null);

  useEffect(() => {
    firedRef.current = null;
  }, [question.id]);

  const triggerSelect = (trait: Question["options"][number]["trait"]) => {
    if (disabled) {
      return;
    }

    const key = `${question.id}:${trait}`;
    if (firedRef.current === key) {
      return;
    }

    firedRef.current = key;
    onSelect(trait);
  };

  return (
    <section className="question-card">
      <p className="eyebrow">Question {question.id}</p>
      <h1>{question.prompt}</h1>
      <div className="option-stack">
        {question.options.map((option) => (
          <button
            className="option-button"
            disabled={disabled}
            key={`${question.id}-${option.trait}`}
            onClick={() => triggerSelect(option.trait)}
            onTouchEnd={() => triggerSelect(option.trait)}
            onPointerUp={() => triggerSelect(option.trait)}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>
    </section>
  );
}
