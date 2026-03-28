import Image from "next/image";

import { allResultImageCards } from "@/data/result-assets";

function shuffleCards() {
  const cards = [...allResultImageCards];
  let seed = 17;

  const nextRandom = () => {
    seed = (seed * 48271) % 0x7fffffff;
    return seed / 0x7fffffff;
  };

  for (let index = cards.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(nextRandom() * (index + 1));
    [cards[index], cards[swapIndex]] = [cards[swapIndex], cards[index]];
  }

  return cards;
}

const dessertNamesByMbti: Record<string, string> = {
  INTJ: "사워도우",
  INTP: "까눌레",
  INFJ: "라벤더 마들렌",
  ISTJ: "우유식빵",
  ENTP: "두바이 쿠키",
  ISTP: "퀸아망",
  INFP: "몽블랑",
  ENFJ: "딸기 쇼트케이크",
  ENTJ: "오페라 케이크",
  ESTJ: "프레첼",
  ISFJ: "상하이 버터떡",
  ESFJ: "과일 타르트",
  ENFP: "마카롱 타워",
  ESTP: "츄러스",
  ISFP: "복숭아 데니시",
  ESFP: "크림 퍼프"
};

const cards = shuffleCards();
const trackCards = [...cards, ...cards];

export function DessertMarquee() {
  return (
    <section className="marquee-section" aria-label="다양한 디저트 결과 카드">
      <div className="marquee-shell">
        <div className="marquee-track">
          {trackCards.map((card, index) => (
            <article className="marquee-card" key={`${card.id}-${index}`}>
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
                <span>{dessertNamesByMbti[card.mbti] ?? card.mbti}</span>
                <strong className={`rarity-label rarity-label--${card.rarity}`}>
                  {card.mbti} · {card.rarity}
                </strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
