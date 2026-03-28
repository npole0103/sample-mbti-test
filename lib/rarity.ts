export type Rarity = "common" | "rare" | "superRare";

export type RarityConfig = {
  probabilities: Record<Rarity, number>;
};

export const rarityConfig: RarityConfig = {
  probabilities: {
    common: 77,
    rare: 20,
    superRare: 3
  }
};

export const rarityMeta: Record<
  Rarity,
  { label: string; accent: string; description: string }
> = {
  common: {
    label: "일반",
    accent: "#8e5633",
    description: "기본 결과 카드"
  },
  rare: {
    label: "레어",
    accent: "#b85ad8",
    description: "조금 더 특별한 결과 카드"
  },
  superRare: {
    label: "슈퍼 레어",
    accent: "#e19b24",
    description: "아주 낮은 확률의 특별 카드"
  }
};

export function resolveRarityFromRoll(roll: number, config: RarityConfig = rarityConfig): Rarity {
  const normalizedRoll = Math.max(0, Math.min(99, Math.floor(roll)));
  const commonCutoff = config.probabilities.common;
  const rareCutoff = commonCutoff + config.probabilities.rare;

  if (normalizedRoll < commonCutoff) {
    return "common";
  }

  if (normalizedRoll < rareCutoff) {
    return "rare";
  }

  return "superRare";
}

export function pickRarity(randomValue = Math.random(), config: RarityConfig = rarityConfig): Rarity {
  const normalizedRandom = Math.min(Math.max(randomValue, 0), 0.999999);
  return resolveRarityFromRoll(normalizedRandom * 100, config);
}

export function parseRarity(value?: string | string[] | null): Rarity | null {
  const candidate = Array.isArray(value) ? value[0] : value;

  if (candidate === "common" || candidate === "rare" || candidate === "superRare") {
    return candidate;
  }

  return null;
}
