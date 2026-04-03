"use client";

import type { CSSProperties } from "react";

import Image from "next/image";
import { useMemo, useSyncExternalStore } from "react";

import { useUiPreferences } from "@/components/providers/ui-preferences";
import { allResultImageCards } from "@/data/result-assets";

function shuffleCards() {
  const cards = [...allResultImageCards];

  for (let index = cards.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [cards[index], cards[swapIndex]] = [cards[swapIndex], cards[index]];
  }

  return cards;
}

const MARQUEE_DURATION = "126s";

function subscribe() {
  return () => {};
}

const dessertNamesByMbti: Record<string, { ko: string; en: string }> = {
  INTJ: { ko: "사워도우 로프", en: "Sourdough Loaf" },
  INTP: { ko: "까눌레", en: "Canele" },
  INFJ: { ko: "라벤더 마들렌", en: "Lavender Madeleine" },
  ISTJ: { ko: "우유 식빵 로프", en: "Milk Bread Loaf" },
  ENTP: { ko: "두바이쫀득쿠키", en: "Dubai Chewy Cookie" },
  ISTP: { ko: "쿠인아망", en: "Kouign-Amann" },
  INFP: { ko: "몽블랑", en: "Mont Blanc" },
  ENFJ: { ko: "딸기 쇼트케이크", en: "Strawberry Shortcake" },
  ENTJ: { ko: "오페라 케이크", en: "Opera Cake" },
  ESTJ: { ko: "프레첼", en: "Pretzel" },
  ISFJ: { ko: "상하이 버터떡", en: "Shanghai Buttertteok" },
  ESFJ: { ko: "과일 타르트", en: "Fruit Tart" },
  ENFP: { ko: "마카롱 타워", en: "Macaron Tower" },
  ESTP: { ko: "츄러스", en: "Churros" },
  ISFP: { ko: "복숭아 데니시", en: "Peach Danish" },
  ESFP: { ko: "슈크림 퍼프", en: "Cream Puff" }
};

const rarityNames = {
  common: { ko: "노멀", en: "Normal" },
  rare: { ko: "레어", en: "Rare" },
  superRare: { ko: "유니크", en: "Unique" }
} as const;

export function DessertMarquee() {
  const { lang, t } = useUiPreferences();
  const isClient = useSyncExternalStore(subscribe, () => true, () => false);
  const cards = useMemo(() => (isClient ? shuffleCards() : allResultImageCards), [isClient]);

  const trackCards = [...cards, ...cards];

  return (
    <section
      aria-label={t("슬라이딩 디저트 카드 미리보기", "Sliding dessert card preview")}
      className="marquee-section marquee-section--figma"
    >
      <div className="marquee-shell">
        <div
          className="marquee-track"
          style={{ "--marquee-duration": MARQUEE_DURATION } as CSSProperties}
        >
          {trackCards.map((card, index) => (
            <article className={`marquee-card marquee-card--theme-${index % 6}`} key={`${card.id}-${index}`}>
              <div className="marquee-card__frame">
                <Image
                  alt={`${card.mbti} ${card.rarity} dessert card`}
                  className="marquee-card__image"
                  height={220}
                  sizes="(max-width: 767px) 144px, 166px"
                  src={card.src}
                  width={166}
                />
              </div>
              <div className="marquee-card__meta">
                <span className="marquee-card__dessert-name">
                  {lang === "KOR"
                    ? dessertNamesByMbti[card.mbti]?.ko ?? card.mbti
                    : dessertNamesByMbti[card.mbti]?.en ?? card.mbti}
                </span>
                <div className="marquee-card__pills">
                  <strong className="marquee-pill marquee-pill--mbti">{card.mbti}</strong>
                  <strong className={`marquee-pill marquee-pill--rarity marquee-pill--${card.rarity}`}>
                    {lang === "KOR" ? rarityNames[card.rarity].ko : rarityNames[card.rarity].en}
                  </strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
