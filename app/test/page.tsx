import Link from "next/link";

import { TestExperience } from "@/components/test/test-experience";

export const metadata = {
  title: "테스트 시작",
  description:
    "24문항으로 나의 베이커리 무드와 연애 결을 찾아보는 모바일 감성 테스트 페이지"
};

export default function TestPage() {
  return (
    <main className="test-page">
      <Link className="mini-link" href="/">
        메인 화면으로 돌아가기
      </Link>
      <TestExperience />
    </main>
  );
}
