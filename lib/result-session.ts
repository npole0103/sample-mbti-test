import type { Rarity } from "@/lib/rarity";

const RESULT_SESSION_KEY = "dessert-mood-lab-result";

export type StoredResultSession = {
  rarity: Rarity;
  slug: string;
};

function canReadSessionStorage() {
  return typeof window !== "undefined" && typeof window.sessionStorage?.getItem === "function";
}

export function saveResultSession(value: StoredResultSession) {
  if (!canReadSessionStorage()) {
    return;
  }

  window.sessionStorage.setItem(RESULT_SESSION_KEY, JSON.stringify(value));
}

export function readResultSession(): StoredResultSession | null {
  if (!canReadSessionStorage()) {
    return null;
  }

  const rawValue = window.sessionStorage.getItem(RESULT_SESSION_KEY);
  if (!rawValue) {
    return null;
  }

  try {
    const parsedValue = JSON.parse(rawValue) as Partial<StoredResultSession>;

    if (
      typeof parsedValue.slug === "string" &&
      (parsedValue.rarity === "normal" ||
        parsedValue.rarity === "rare" ||
        parsedValue.rarity === "unique")
    ) {
      return {
        slug: parsedValue.slug,
        rarity: parsedValue.rarity
      };
    }
  } catch {
    // Ignore malformed storage values and treat them as missing.
  }

  return null;
}
