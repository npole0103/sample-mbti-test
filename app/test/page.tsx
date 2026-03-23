import Link from "next/link";

import { TestExperience } from "@/components/test/test-experience";

export const metadata = {
  title: "테스트 시작",
  description: "24문항으로 나의 디저트형 연애 스타일을 알아보는 질문 페이지"
};

export default function TestPage() {
  return (
    <main className="test-page">
      <Link className="mini-link" href="/">
        ← 홈으로
      </Link>
      <TestExperience />
    </main>
  );
}
