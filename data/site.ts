const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined) ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
  "http://127.0.0.1:3000";

export const siteConfig = {
  name: "메종 버터 테스트",
  description:
    "24문항으로 찾아보는 디저트 무드 MBTI 테스트. 달콤하고 포근한 결과 카드와 함께 16가지 베이커리 타입으로 나의 연애 결을 확인해 보세요.",
  url: siteUrl,
  keywords: [
    "베이커리 MBTI 테스트",
    "연애 성향 테스트",
    "디저트 성향 결과",
    "감성 MBTI 테스트",
    "결과 카드 테스트"
  ]
} as const;
