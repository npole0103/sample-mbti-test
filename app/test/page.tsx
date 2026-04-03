import { TestExperience } from "@/components/test/test-experience";

export const metadata = {
  title: "테스트 시작",
  description: "24문항으로 지금의 연애 무드를 닮은 디저트 카드를 찾아보는 테스트 페이지"
};

export default function TestPage() {
  return (
    <main className="test-page">
      <TestExperience />
    </main>
  );
}
