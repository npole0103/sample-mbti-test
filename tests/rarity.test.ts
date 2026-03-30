import { describe, expect, it } from "vitest";

import { parseRarity, pickRarity, resolveRarityFromRoll } from "@/lib/rarity";

describe("rarity selection", () => {
  it("maps roll ranges to configured rarity buckets", () => {
    expect(resolveRarityFromRoll(0)).toBe("common");
    expect(resolveRarityFromRoll(76)).toBe("common");
    expect(resolveRarityFromRoll(77)).toBe("rare");
    expect(resolveRarityFromRoll(96)).toBe("rare");
    expect(resolveRarityFromRoll(97)).toBe("superRare");
    expect(resolveRarityFromRoll(99)).toBe("superRare");
  });

  it("turns random-like values into deterministic rarity", () => {
    expect(pickRarity(0)).toBe("common");
    expect(pickRarity(0.77)).toBe("rare");
    expect(pickRarity(0.98)).toBe("superRare");
  });

  it("accepts only supported rarity query values", () => {
    expect(parseRarity("common")).toBe("common");
    expect(parseRarity("rare")).toBe("rare");
    expect(parseRarity("superRare")).toBe("superRare");
    expect(parseRarity("legendary")).toBeNull();
    expect(parseRarity(undefined)).toBeNull();
  });
});
