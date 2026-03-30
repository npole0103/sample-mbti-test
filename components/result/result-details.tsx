import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

import { ShareActions } from "@/components/result/share-actions";
import { getResultImagePath } from "@/data/result-assets";
import type { DessertResult } from "@/data/results";
import { rarityMeta, type Rarity } from "@/lib/rarity";

type ResultDetailsProps = {
  result: DessertResult;
  rarity: Rarity;
};

export function ResultDetails({ result, rarity }: ResultDetailsProps) {
  const rarityInfo = rarityMeta[rarity];
  const imagePath = getResultImagePath(result, rarity);

  const style = {
    "--accent": result.palette.accent,
    "--accent-soft": result.palette.soft,
    "--accent-text": result.palette.text,
    "--accent-glaze": result.palette.glaze,
    "--rarity-accent": rarityInfo.accent
  } as CSSProperties;

  return (
    <article className={`result-card result-card--${rarity}`} style={style}>
      <section className="result-banner">
        <div className="result-badge">
          <div className="result-badge__glow" />
          {imagePath ? (
            <Image
              alt={`${result.name} ${rarityInfo.label} 캐릭터`}
              className="result-badge__image"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 420px"
              src={imagePath}
            />
          ) : null}
          <div className="result-badge__meta">
            <div className="result-badge__garnish">{result.icon.garnish}</div>
            <div className="result-badge__label">{result.icon.badge}</div>
          </div>
        </div>

        <div className="result-banner__copy">
          <p className="eyebrow">Result {result.mbti}</p>
          <div className={`rarity-pill rarity-pill--${rarity}`}>{rarityInfo.label} 카드</div>
          <h1>
            {result.name} <span>{result.subtitle}</span>
          </h1>
          <p className="lead">{result.summary}</p>
          <p className="micro-copy">{rarityInfo.description}</p>
          <div className="tag-row">
            {result.tags.map((tag) => (
              <span className="tag-pill" key={tag}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="result-section">
        <p className="eyebrow">Flavor Notes</p>
        <div className="flavor-grid">
          {result.flavorNotes.map((note) => (
            <div className="flavor-chip" key={note}>
              {note}
            </div>
          ))}
        </div>
      </section>

      <section className="result-section">
        <h2>당신과 가장 닮아 있는 이유</h2>
        <p>{result.description}</p>
      </section>

      <section className="result-columns">
        <div className="result-section">
          <h2>연애에서 더 빛나는 포인트</h2>
          <ul>
            {result.strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="result-section">
          <h2>관계에서 조심하면 좋은 점</h2>
          <ul>
            {result.cautions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="result-columns">
        <div className="result-section">
          <h2>잘 맞는 케미 조합</h2>
          <p>{result.bestMatch}</p>
        </div>
        <div className="result-section">
          <h2>천천히 맞춰보면 좋은 타입</h2>
          <p>{result.trickyMatch}</p>
        </div>
      </section>

      <section className="result-section">
        <h2>추천 데이트 무드</h2>
        <p>{result.dateMood}</p>
      </section>

      <ShareActions
        highlights={result.flavorNotes}
        rarityLabel={rarityInfo.label}
        title={`${result.name} | ${result.subtitle}`}
        text={`${result.summary} ${result.tags.map((tag) => `#${tag}`).join(" ")}`}
      />

      <div className="result-footer">
        <Link className="secondary-button" href="/test">
          다시 테스트하기
        </Link>
        <Link className="secondary-button" href="/">
          메인 화면으로 돌아가기
        </Link>
      </div>
    </article>
  );
}
