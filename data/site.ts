const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined) ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
  "http://127.0.0.1:3000";

export const siteConfig = {
  name: "나는 어떤 디저트형 연애일까?",
  description:
    "24문항으로 알아보는 연애 성향 MBTI 테스트. 16가지 디저트 캐릭터로 나의 연애 타입과 분위기를 감성적으로 보여드려요.",
  url: siteUrl,
  keywords: [
    "디저트 연애 테스트",
    "MBTI 연애 테스트",
    "심리 테스트",
    "연애 성향 테스트",
    "연애 유형 테스트"
  ]
} as const;
