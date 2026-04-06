export type Rarity = "normal" | "rare" | "unique";

export type RarityConfig = {
  probabilities: Record<Rarity, number>;
};

export const rarityConfig: RarityConfig = {
  probabilities: {
    normal: 77,
    rare: 20,
    unique: 3
  }
};

export const rarityMeta: Record<
  Rarity,
  { label: string; accent: string; description: string }
> = {
  normal: {
    label: "노멀",
    accent: "#8e5633",
    description: "기본 결과 카드"
  },
  rare: {
    label: "레어",
    accent: "#b85ad8",
    description: "조금 더 특별한 결과 카드"
  },
  unique: {
    label: "유니크",
    accent: "#e19b24",
    description: "아주 낮은 확률의 특별 결과 카드"
  }
};

export function resolveRarityFromRoll(roll: number, config: RarityConfig = rarityConfig): Rarity {
  const normalizedRoll = Math.max(0, Math.min(99, Math.floor(roll)));
  const normalCutoff = config.probabilities.normal;
  const rareCutoff = normalCutoff + config.probabilities.rare;

  if (normalizedRoll < normalCutoff) {
    return "normal";
  }

  if (normalizedRoll < rareCutoff) {
    return "rare";
  }

  return "unique";
}

export function pickRarity(randomValue = Math.random(), config: RarityConfig = rarityConfig): Rarity {
  const normalizedRandom = Math.min(Math.max(randomValue, 0), 0.999999);
  return resolveRarityFromRoll(normalizedRandom * 100, config);
}

export function parseRarity(value?: string | string[] | null): Rarity | null {
  const candidate = Array.isArray(value) ? value[0] : value;

  if (candidate === "normal" || candidate === "rare" || candidate === "unique") {
    return candidate;
  }

  return null;
}
