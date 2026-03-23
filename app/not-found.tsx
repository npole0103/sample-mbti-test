import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">Not Found</p>
        <h1>이 디저트는 아직 오븐에 없어요.</h1>
        <p className="lead">주소를 다시 확인하거나 테스트를 새로 시작해보세요.</p>
        <div className="hero-actions">
          <Link className="primary-button" href="/">
            홈으로 돌아가기
          </Link>
          <Link className="secondary-button" href="/test">
            테스트 다시 하기
          </Link>
        </div>
      </section>
    </main>
  );
}
