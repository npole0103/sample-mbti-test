import Link from "next/link";

const showcaseItems = [
  { label: "시그니처", value: "두쫀쿠" },
  { label: "포근한 인기", value: "버터떡" },
  { label: "결과 타입", value: "16가지" }
];

export function LandingHero() {
  return (
    <section className="hero-card">
      <div className="hero-copy">
        <p className="eyebrow">Maison Butter Atelier</p>
        <h1>당신의 연애 온도에 어울리는 시그니처 빵은 무엇일까요?</h1>
        <p className="lead">
          24개의 질문으로 알아보는 베이커리 무드 MBTI. 쇼윈도처럼 감각적인 메인 비주얼과
          결과 카드로 나의 관계 스타일을 한눈에 만나보세요.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" href="/test">
            오븐 열고 테스트 시작하기
          </Link>
          <a className="secondary-button" href="#how-it-works">
            결과 카드 미리 보기
          </a>
        </div>
        <div className="hero-notes">
          <span>24문항</span>
          <span>16개 타입</span>
          <span>모바일 우선 UX</span>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-window">
          <div className="hero-window__badge">Maison Butter</div>
          <div className="hero-pastry hero-pastry--main" />
          <div className="hero-garnish hero-garnish--left" />
          <div className="hero-garnish hero-garnish--right" />
          <div className="hero-ribbon">Baked for Your Type</div>
        </div>

        <div className="hero-showcase">
          {showcaseItems.map((item) => (
            <div className="showcase-pill" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
