import Link from "next/link";

export function LandingHero() {
  return (
    <>
      <header className="landing-topbar">
        <div className="landing-topbar__brand">
          <span>Dessert Mood Lab</span>
        </div>
        <div className="landing-topbar__actions">
          <span className="landing-topbar__meta">24문항 · 3분 내외</span>
          <a className="primary-button primary-button--compact" href="#start-modal">
            시작하기
          </a>
        </div>
      </header>

      <section className="hero-card hero-card--editorial">
        <div className="hero-copy hero-copy--editorial">
          <div className="hero-copy__head">
            <p className="hero-brand-mark">Dessert Mood Lab</p>
            <span className="hero-chip">24문항 · 3분 내외</span>
          </div>

          <p className="eyebrow">Bakery Mood Test</p>
          <h1 className="hero-title">
            내 연애 무드는
            <span>어떤 디저트일</span>
            <span>까?</span>
          </h1>
          <p className="lead lead--hero">24문항에 답하면, 지금의 연애 텐션을 닮은 디저트 카드가 나와요.</p>
          <p className="lead lead--hero-sub">48장의 카드가 흐르지만 어떤 결과가 나올지는 아직 비밀이에요.</p>

          <div className="hero-actions hero-actions--single">
            <a className="primary-button primary-button--hero" href="#start-modal">
              테스트 시작하기
            </a>
          </div>
        </div>

        <div className="hero-visual hero-visual--editorial" aria-hidden="true">
          <div className="hero-visual__frame">
            <div className="hero-visual__badge">Freshly baked mood</div>
            <div className="hero-visual__info">
              <span>오늘의 무드 카드</span>
              <strong>48 types</strong>
            </div>

            <div className="hero-visual__copy">
              <p className="hero-visual__eyebrow">Mood Card Preview</p>
              <h2>지금의 연애 텐션을 닮은 디저트 결과 카드</h2>
              <p>질문은 가볍게 답하고, 결과는 저장하고 싶게. 테스트가 끝나면 무드 카드와 레어도까지 한 번에 확인할 수 있어요.</p>

              <div className="hero-visual__list">
                <span>24문항으로 빠르게</span>
                <span>16개 타입으로 분기</span>
                <span>일반 · 레어 · 슈퍼레어 구분</span>
              </div>
            </div>

            <div className="hero-visual__sticker" role="presentation">
              <span>CARD</span>
            </div>

            <div className="hero-ribbon">Baked for Your Heart</div>
          </div>
        </div>
      </section>

      <div aria-labelledby="start-modal-title" aria-modal="true" className="start-modal" id="start-modal" role="dialog">
        <a aria-label="모달 닫기" className="start-modal__backdrop" href="#" />
        <div className="start-modal__card">
          <div aria-hidden="true" className="start-modal__icon">
            START
          </div>
          <h2 id="start-modal-title">테스트를 시작할게요!</h2>
          <p>24개의 질문에 솔직하게 답해주세요. 지금의 연애 텐션을 닮은 디저트 카드가 나와요.</p>

          <div className="start-modal__actions">
            <Link className="primary-button primary-button--modal" href="/test">
              시작하기
            </Link>
            <a className="ghost-button" href="#">
              나중에 하기
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
