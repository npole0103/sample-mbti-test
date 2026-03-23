import type { Question } from "@/data/questions";

type QuestionCardProps = {
  question: Question;
  onSelect: (trait: Question["options"][number]["trait"]) => void;
};

export function QuestionCard({ question, onSelect }: QuestionCardProps) {
  return (
    <section className="question-card">
      <p className="eyebrow">Question {question.id}</p>
      <h1>{question.prompt}</h1>
      <div className="option-stack">
        {question.options.map((option) => (
          <button
            className="option-button"
            key={`${question.id}-${option.trait}`}
            onClick={() => onSelect(option.trait)}
            type="button"
          >
            {option.label}
          </button>
        ))}
      </div>
    </section>
  );
}
