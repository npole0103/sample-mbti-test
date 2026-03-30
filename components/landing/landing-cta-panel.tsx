import Link from "next/link";

export function LandingCtaPanel() {
  return (
    <>
      <section className="hero-card hero-card--editorial hero-card--cta">
        <div className="hero-copy hero-copy--editorial hero-copy--cta">
          <div className="hero-summary" aria-label="테스트 소개">
            <p className="lead hero-summary__item">
              <span className="hero-summary__bullet" aria-hidden="true" />
              <span>24문항에 답하면 지금의 연애 텐션을 닮은 디저트 카드가 나와요.</span>
            </p>
            <p className="lead hero-summary__item">
              <span className="hero-summary__bullet" aria-hidden="true" />
              <span>가볍게 시작하고, 결과는 오래 남게. 48종의 카드 중 어떤 분위기가 나올지는 아직 비밀이에요.</span>
            </p>
          </div>

          <div className="hero-actions hero-actions--single">
            <a className="primary-button primary-button--hero" href="#start-modal">
              테스트 시작하기
            </a>
          </div>
        </div>
      </section>

      <div aria-labelledby="start-modal-title" aria-modal="true" className="start-modal" id="start-modal" role="dialog">
        <a aria-label="모달 닫기" className="start-modal__backdrop" href="#" />
        <div className="start-modal__card">
          <div aria-hidden="true" className="start-modal__icon">
            START
          </div>
          <h2 id="start-modal-title">테스트를 시작할게요</h2>
          <p className="start-modal__copy">
            <span>24개의 질문에 솔직하게 답해 주세요.</span>
            <span>지금의 연애 무드를 닮은 디저트 카드를 구워드릴게요.</span>
          </p>

          <div className="start-modal__actions">
            <Link className="primary-button primary-button--modal" href="/test">
              시작하기
            </Link>
            <a className="ghost-button" href="#">
              돌아가기
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
