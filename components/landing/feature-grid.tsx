const features = [
  {
    title: "스토리처럼 흐르는 질문",
    body: "연애의 장면을 따라가듯 24문항이 이어져서, 테스트를 푼다기보다 한 편의 쇼윈도 무드를 지나가는 느낌으로 설계했어요."
  },
  {
    title: "베이커리 세계관 결과 카드",
    body: "사워도우 로프부터 두쫀쿠, 버터떡까지. 16가지 디저트를 하나의 브랜드 컬렉션처럼 정리해 결과 화면의 완성도를 높였어요."
  },
  {
    title: "공유하기 좋은 모바일 화면",
    body: "결과 카드 핵심 문구와 맛 노트를 모바일에서 한눈에 읽히게 배치했고, 질문 플로우에는 광고 없이 빠르게 몰입할 수 있게 구성했어요."
  }
];

export function FeatureGrid() {
  return (
    <section className="feature-grid" id="how-it-works">
      {features.map((feature) => (
        <article className="feature-card" key={feature.title}>
          <p className="eyebrow">Signature Point</p>
          <h2>{feature.title}</h2>
          <p>{feature.body}</p>
        </article>
      ))}
    </section>
  );
}
