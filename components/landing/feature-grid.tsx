const features = [
  {
    eyebrow: "Step 1",
    title: "베이커리 카운터처럼 가볍고 귀엽게",
    body:
      "질문 화면은 군더더기 없이 깔끔하게, 대신 버터빛 컬러와 포근한 카드 질감으로 디저트 가게에 들어온 듯한 분위기를 담았어요."
  },
  {
    eyebrow: "Step 2",
    title: "결과는 수집하고 싶은 카드처럼",
    body:
      "16가지 결과를 카드 컬렉션처럼 보여줘서 한 번 보고 끝나는 테스트보다 저장하고 공유하고 싶은 감성을 더했어요."
  },
  {
    eyebrow: "Step 3",
    title: "10대와 20대가 좋아할 말랑한 무드",
    body:
      "크림 베이지, 카라멜 브라운, 살구빛 포인트를 섞어 귀엽지만 유치하지 않은 카페 무드로 전체 화면을 연결했어요."
  }
];

export function FeatureGrid() {
  return (
    <section className="feature-grid" id="how-it-works">
      {features.map((feature) => (
        <article className="feature-card" key={feature.title}>
          <p className="eyebrow">{feature.eyebrow}</p>
          <h2>{feature.title}</h2>
          <p>{feature.body}</p>
        </article>
      ))}
    </section>
  );
}
