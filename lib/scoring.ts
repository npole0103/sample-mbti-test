import type { Axis, Question, Trait } from "@/data/questions";
import { questions } from "@/data/questions";
import { dessertResultMap, type DessertResult } from "@/data/results";

export type AxisScores = Record<Axis, Record<string, number>>;

export const initialAxisScores = (): AxisScores => ({
  expression: { bold: 0, gentle: 0 },
  conflict: { immediate: 0, reflective: 0 },
  dateStyle: { playful: 0, cozy: 0 },
  pace: { fast: 0, steady: 0 }
});

const traitAxisMap: Record<Trait, Axis> = {
  bold: "expression",
  gentle: "expression",
  immediate: "conflict",
  reflective: "conflict",
  playful: "dateStyle",
  cozy: "dateStyle",
  fast: "pace",
  steady: "pace"
};

const resultKeyToSlug: Record<string, string> = {
  "bold-immediate-playful-fast": "donut",
  "bold-immediate-playful-steady": "tart",
  "bold-immediate-cozy-fast": "baguette",
  "bold-immediate-cozy-steady": "salt-bread",
  "bold-reflective-playful-fast": "crumble",
  "bold-reflective-playful-steady": "pretzel",
  "bold-reflective-cozy-fast": "muffin",
  "bold-reflective-cozy-steady": "butter-rice-cake",
  "gentle-immediate-playful-fast": "croissant",
  "gentle-immediate-playful-steady": "roll-cake",
  "gentle-immediate-cozy-fast": "cream-bread",
  "gentle-immediate-cozy-steady": "milk-bread",
  "gentle-reflective-playful-fast": "canele",
  "gentle-reflective-playful-steady": "financier",
  "gentle-reflective-cozy-fast": "chewy-cookie",
  "gentle-reflective-cozy-steady": "scone"
};

export const calculateScores = (
  answers: Trait[],
  sourceQuestions: Question[] = questions
): AxisScores => {
  return answers.reduce((scores, trait, index) => {
    const axis = traitAxisMap[trait];
    const weight = sourceQuestions[index]?.weight ?? 1;
    scores[axis][trait] += weight;
    return scores;
  }, initialAxisScores());
};

export const resolveResultSlug = (scores: AxisScores): string => {
  const expression = scores.expression.bold > scores.expression.gentle ? "bold" : "gentle";
  const conflict =
    scores.conflict.immediate > scores.conflict.reflective ? "immediate" : "reflective";
  const dateStyle = scores.dateStyle.playful > scores.dateStyle.cozy ? "playful" : "cozy";
  const pace = scores.pace.fast > scores.pace.steady ? "fast" : "steady";

  return resultKeyToSlug[`${expression}-${conflict}-${dateStyle}-${pace}`];
};

export const getResultFromAnswers = (answers: Trait[]): DessertResult => {
  const slug = resolveResultSlug(calculateScores(answers));
  return dessertResultMap[slug];
};
