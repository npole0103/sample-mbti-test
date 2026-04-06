import type { DessertResult } from "@/data/results";
import type { Rarity } from "@/lib/rarity";

const imageFolderByMbti: Record<string, string> = {
  INTJ: "sourdough-loaf-intj",
  INTP: "canele-intp",
  INFJ: "lavender-madeleine-infj",
  ISTJ: "milk-bread-loaf-istj",
  ENTP: "dubai-chewy-cookie-entp",
  ISTP: "kouign-amann-istp",
  INFP: "mont-blanc-infp",
  ENFJ: "strawberry-shortcake-enfj",
  ENTJ: "opera-cake-entj",
  ESTJ: "pretzel-estj",
  ISFJ: "shanghai-buttertteok-isfj",
  ESFJ: "fruit-tart-esfj",
  ENFP: "macaron-tower-enfp",
  ESTP: "churros-estp",
  ISFP: "peach-danish-isfp",
  ESFP: "cream-puff-esfp"
};

export type ResultImageCard = {
  id: string;
  mbti: string;
  rarity: Rarity;
  src: string;
};

export function getResultImagePath(
  result: Pick<DessertResult, "mbti">,
  rarity: Rarity = "normal"
) {
  const folder = imageFolderByMbti[result.mbti];
  if (!folder) {
    return null;
  }

  return `/images/results/${folder}/${rarity}/${folder}-${rarity}-01-service-v2.png`;
}

const rarityOrder: Rarity[] = ["normal", "rare", "unique"];

export const allResultImageCards: ResultImageCard[] = Object.entries(imageFolderByMbti).flatMap(
  ([mbti, folder]) =>
    rarityOrder.map((rarity) => ({
      id: `${folder}-${rarity}`,
      mbti,
      rarity,
      src: `/images/results/${folder}/${rarity}/${folder}-${rarity}-01-service-v2.png`
    }))
);
