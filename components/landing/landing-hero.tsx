import Link from "next/link";

export function LandingHero() {
  return (
    <section className="hero-card">
      <p className="eyebrow">Dessert Love Test</p>
      <h1>나는 어떤 디저트형 연애일까?</h1>
      <p className="lead">
        24문항으로 알아보는 나의 연애 무드. 딱딱한 코드 대신, 기억에 남는 디저트 캐릭터로
        당신의 사랑 스타일을 보여드려요.
      </p>
      <div className="hero-actions">
        <Link className="primary-button" href="/test">
          테스트 시작하기
        </Link>
        <a className="secondary-button" href="#how-it-works">
          어떻게 나오나요?
        </a>
      </div>
      <div className="hero-notes">
        <span>24문항</span>
        <span>16디저트 유형</span>
        <span>모바일 최적화</span>
      </div>
    </section>
  );
}
