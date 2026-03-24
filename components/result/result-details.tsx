import type { CSSProperties } from "react";
import Link from "next/link";

import type { DessertResult } from "@/data/results";
import { ShareActions } from "@/components/result/share-actions";

type ResultDetailsProps = {
  result: DessertResult;
};

export function ResultDetails({ result }: ResultDetailsProps) {
  const style = {
    "--accent": result.palette.accent,
    "--accent-soft": result.palette.soft,
    "--accent-text": result.palette.text,
    "--accent-glaze": result.palette.glaze
  } as CSSProperties;

  return (
    <article className="result-card" style={style}>
      <section className="result-banner">
        <div className="result-badge" aria-hidden="true">
          <div className="result-badge__glow" />
          <div className="result-badge__dessert">{result.icon.dessert}</div>
          <div className="result-badge__garnish">{result.icon.garnish}</div>
          <div className="result-badge__label">{result.icon.badge}</div>
        </div>

        <div className="result-banner__copy">
          <p className="eyebrow">Result {result.mbti}</p>
          <h1>
            {result.name} <span>{result.subtitle}</span>
          </h1>
          <p className="lead">{result.summary}</p>
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
        <h2>이 디저트가 당신인 이유</h2>
        <p>{result.description}</p>
      </section>

      <section className="result-columns">
        <div className="result-section">
          <h2>연애에서 더 맛있는 포인트</h2>
          <ul>
            {result.strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="result-section">
          <h2>관계에서 더 부드러워지는 팁</h2>
          <ul>
            {result.cautions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="result-columns">
        <div className="result-section">
          <h2>잘 맞는 빵 조합</h2>
          <p>{result.bestMatch}</p>
        </div>
        <div className="result-section">
          <h2>천천히 맞춰볼 포인트</h2>
          <p>{result.trickyMatch}</p>
        </div>
      </section>

      <section className="result-section">
        <h2>추천 데이트 무드</h2>
        <p>{result.dateMood}</p>
      </section>

      <ShareActions
        highlights={result.flavorNotes}
        title={`${result.name} | ${result.subtitle}`}
        text={`${result.summary} ${result.tags.map((tag) => `#${tag}`).join(" ")}`}
      />

      <div className="result-footer">
        <Link className="secondary-button" href="/test">
          다시 테스트 굽기
        </Link>
        <Link className="secondary-button" href="/">
          메인 쇼윈도로 돌아가기
        </Link>
      </div>
    </article>
  );
}
