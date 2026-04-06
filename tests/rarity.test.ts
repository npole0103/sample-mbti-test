import { describe, expect, it } from "vitest";

import { parseRarity, pickRarity, resolveRarityFromRoll } from "@/lib/rarity";

describe("rarity selection", () => {
  it("maps roll ranges to configured rarity buckets", () => {
    expect(resolveRarityFromRoll(0)).toBe("normal");
    expect(resolveRarityFromRoll(76)).toBe("normal");
    expect(resolveRarityFromRoll(77)).toBe("rare");
    expect(resolveRarityFromRoll(96)).toBe("rare");
    expect(resolveRarityFromRoll(97)).toBe("unique");
    expect(resolveRarityFromRoll(99)).toBe("unique");
  });

  it("turns random-like values into deterministic rarity", () => {
    expect(pickRarity(0)).toBe("normal");
    expect(pickRarity(0.77)).toBe("rare");
    expect(pickRarity(0.98)).toBe("unique");
  });

  it("accepts only supported rarity query values", () => {
    expect(parseRarity("normal")).toBe("normal");
    expect(parseRarity("rare")).toBe("rare");
    expect(parseRarity("unique")).toBe("unique");
    expect(parseRarity("legendary")).toBeNull();
    expect(parseRarity(undefined)).toBeNull();
  });
});
