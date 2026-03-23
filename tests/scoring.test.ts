import { describe, expect, it } from "vitest";

import { questions, type Trait } from "@/data/questions";
import { dessertResults } from "@/data/results";
import { calculateScores, getResultFromAnswers, resolveResultSlug } from "@/lib/scoring";

describe("dessert scoring", () => {
  it("returns a deterministic result for 24 answers", () => {
    const answers: Trait[] = [
      "bold", "bold", "bold", "bold", "bold", "bold",
      "immediate", "immediate", "immediate", "immediate", "immediate", "immediate",
      "playful", "playful", "playful", "playful", "playful", "playful",
      "fast", "fast", "fast", "fast", "fast", "fast"
    ];

    expect(getResultFromAnswers(answers).slug).toBe("donut");
  });

  it("uses weighted answers so ties resolve deterministically", () => {
    const answers: Trait[] = [
      "gentle", "bold", "bold", "bold", "gentle", "gentle",
      "reflective", "immediate", "immediate", "reflective", "reflective", "reflective",
      "cozy", "playful", "cozy", "playful", "cozy", "playful",
      "steady", "fast", "steady", "fast", "steady", "fast"
    ];

    const scores = calculateScores(answers, questions);
    expect(resolveResultSlug(scores)).toBe("scone");
  });

  it("keeps 24 questions and 16 results in sync with the product rules", () => {
    expect(questions).toHaveLength(24);
    expect(dessertResults).toHaveLength(16);
  });
});
