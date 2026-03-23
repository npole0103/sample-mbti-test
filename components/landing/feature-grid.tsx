const features = [
  {
    title: "연애 성향 중심",
    body: "애정표현, 갈등 해결, 데이트 취향, 관계 속도를 4개 축으로 풀어내요."
  },
  {
    title: "디저트 세계관",
    body: "버터떡형, 소금빵형, 타르트형처럼 귀엽고 기억에 남는 결과를 제공해요."
  },
  {
    title: "공유하기 쉬운 결과",
    body: "결과 카드 감성과 한 줄 요약을 중심으로 친구나 연인에게 보내기 쉽게 설계돼요."
  }
];

export function FeatureGrid() {
  return (
    <section className="feature-grid" id="how-it-works">
      {features.map((feature) => (
        <article className="feature-card" key={feature.title}>
          <h2>{feature.title}</h2>
          <p>{feature.body}</p>
        </article>
      ))}
    </section>
  );
}
