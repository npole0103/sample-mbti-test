import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">Not Found</p>
        <h1>이 페이지는 아직 쇼윈도에 올라오지 않았어요.</h1>
        <p className="lead">
          주소를 다시 확인하거나 메인으로 돌아가 새로운 테스트를 시작해 보세요.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" href="/">
            메인으로 돌아가기
          </Link>
          <Link className="secondary-button" href="/test">
            테스트 시작하기
          </Link>
        </div>
      </section>
    </main>
  );
}
