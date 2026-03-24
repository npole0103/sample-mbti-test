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
      <p className="question-note">지금 가장 자연스럽게 느껴지는 쪽을 골라주세요.</p>
      <div className="option-stack">
        {question.options.map((option, optionIndex) => (
          <button
            className="option-button"
            disabled={disabled}
            key={`${question.id}-${option.trait}`}
            onClick={() => triggerSelect(option.trait)}
            onTouchEnd={() => triggerSelect(option.trait)}
            onPointerUp={() => triggerSelect(option.trait)}
            type="button"
          >
            <span className="option-button__index">{optionIndex === 0 ? "A" : "B"}</span>
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
