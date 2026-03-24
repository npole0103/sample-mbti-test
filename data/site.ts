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
    "24문항으로 알아보는 한국어 베이커리 무드 MBTI 테스트. 고급스러운 결과 카드와 16가지 시그니처 디저트 타입으로 나의 연애 결을 확인해보세요.",
  url: siteUrl,
  keywords: [
    "베이커리 MBTI 테스트",
    "연애 성향 테스트",
    "디저트 성향 검사",
    "한국어 MBTI 테스트",
    "결과 카드 테스트"
  ]
} as const;
