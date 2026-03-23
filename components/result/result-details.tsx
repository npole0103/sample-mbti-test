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
    "--accent-text": result.palette.text
  } as CSSProperties;

  return (
    <article className="result-card" style={style}>
      <section className="result-banner">
        <p className="eyebrow">Dessert Result</p>
        <h1>
          {result.name} <span>{result.subtitle}</span>
        </h1>
        <p className="lead">{result.summary}</p>
      </section>

      <section className="result-section">
        <h2>연애할 때 나는 이런 사람</h2>
        <p>{result.description}</p>
      </section>

      <section className="result-columns">
        <div className="result-section">
          <h2>이럴 때 특히 매력적</h2>
          <ul>
            {result.strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="result-section">
          <h2>이럴 땐 조심해요</h2>
          <ul>
            {result.cautions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="result-columns">
        <div className="result-section">
          <h2>잘 맞는 디저트형</h2>
          <p>{result.bestMatch}</p>
        </div>
        <div className="result-section">
          <h2>조심할 조합</h2>
          <p>{result.trickyMatch}</p>
        </div>
      </section>

      <section className="result-section">
        <h2>추천 데이트 무드</h2>
        <p>{result.dateMood}</p>
      </section>

      <ShareActions
        title={`${result.name} · ${result.subtitle}`}
        text={`나는 ${result.name}이래. ${result.summary}`}
      />

      <div className="result-footer">
        <Link className="secondary-button" href="/test">
          다시 테스트하기
        </Link>
        <Link className="secondary-button" href="/">
          랜딩으로 돌아가기
        </Link>
      </div>
    </article>
  );
}
