export type Axis = "expression" | "conflict" | "dateStyle" | "pace";
export type Trait =
  | "bold"
  | "gentle"
  | "immediate"
  | "reflective"
  | "playful"
  | "cozy"
  | "fast"
  | "steady";

export type QuestionOption = {
  label: string;
  trait: Trait;
};

export type Question = {
  id: number;
  axis: Axis;
  weight: number;
  prompt: string;
  options: [QuestionOption, QuestionOption];
};

export const questions: Question[] = [
  { id: 1, axis: "expression", weight: 2, prompt: "좋아하는 사람이 생기면 나는", options: [{ label: "티가 꽤 나는 편이다", trait: "bold" }, { label: "마음이 생겨도 쉽게 티내지 않는다", trait: "gentle" }] },
  { id: 2, axis: "expression", weight: 1, prompt: "애정 표현은", options: [{ label: "말로 분명하게 하는 게 좋다", trait: "bold" }, { label: "행동으로 보여주는 게 더 편하다", trait: "gentle" }] },
  { id: 3, axis: "expression", weight: 1, prompt: "상대가 예뻐 보일 때 나는", options: [{ label: "바로 칭찬한다", trait: "bold" }, { label: "눈에 담아두고 챙겨준다", trait: "gentle" }] },
  { id: 4, axis: "expression", weight: 1, prompt: "연애 초반 연락 톤은", options: [{ label: "꽤 적극적이고 반응이 빠르다", trait: "bold" }, { label: "조심스럽고 간을 보는 편이다", trait: "gentle" }] },
  { id: 5, axis: "expression", weight: 1, prompt: "보고 싶다는 마음이 들면", options: [{ label: "그 말을 바로 한다", trait: "bold" }, { label: "은근히 돌려 말한다", trait: "gentle" }] },
  { id: 6, axis: "expression", weight: 1, prompt: "애정 확인 방식은", options: [{ label: "자주 표현하고 자주 듣고 싶다", trait: "bold" }, { label: "굳이 말하지 않아도 느끼면 된다", trait: "gentle" }] },
  { id: 7, axis: "conflict", weight: 2, prompt: "서운한 일이 생기면 나는", options: [{ label: "빨리 이야기해서 푸는 편", trait: "immediate" }, { label: "정리할 시간이 먼저 필요하다", trait: "reflective" }] },
  { id: 8, axis: "conflict", weight: 1, prompt: "갈등 상황에서 더 편한 건", options: [{ label: "그 자리에서 방향을 정하는 것", trait: "immediate" }, { label: "생각해보고 다시 이야기하는 것", trait: "reflective" }] },
  { id: 9, axis: "conflict", weight: 1, prompt: "싸운 뒤 연락 템포는", options: [{ label: "길게 끌기 싫어 빨리 보낸다", trait: "immediate" }, { label: "조금 진정한 뒤 보내는 편", trait: "reflective" }] },
  { id: 10, axis: "conflict", weight: 1, prompt: "갈등 해결에서 중요한 건", options: [{ label: "감정이라도 바로 꺼내는 것", trait: "immediate" }, { label: "말이 정리된 뒤 꺼내는 것", trait: "reflective" }] },
  { id: 11, axis: "conflict", weight: 1, prompt: "상대가 화났을 때 나는", options: [{ label: "왜 그런지 바로 묻는다", trait: "immediate" }, { label: "조금 두고 분위기를 본다", trait: "reflective" }] },
  { id: 12, axis: "conflict", weight: 1, prompt: "사과를 할 때 더 가까운 건", options: [{ label: "타이밍 놓치기 전에 바로 말하기", trait: "immediate" }, { label: "어떻게 말할지 정리한 뒤 말하기", trait: "reflective" }] },
  { id: 13, axis: "dateStyle", weight: 2, prompt: "데이트를 고를 때 더 끌리는 건", options: [{ label: "새롭고 사진 잘 나오는 코스", trait: "playful" }, { label: "편하고 오래 이야기할 수 있는 코스", trait: "cozy" }] },
  { id: 14, axis: "dateStyle", weight: 1, prompt: "주말 데이트 취향은", options: [{ label: "계획을 꽉 채워 움직이기", trait: "playful" }, { label: "느슨하게 흘러가는 하루 보내기", trait: "cozy" }] },
  { id: 15, axis: "dateStyle", weight: 1, prompt: "기념일을 보내는 방식은", options: [{ label: "특별한 이벤트를 만들고 싶다", trait: "playful" }, { label: "둘만의 편한 시간을 더 소중히 여긴다", trait: "cozy" }] },
  { id: 16, axis: "dateStyle", weight: 1, prompt: "연애에서 설레는 순간은", options: [{ label: "예상 밖 장소와 새로운 경험", trait: "playful" }, { label: "익숙한 공간에서 느끼는 편안함", trait: "cozy" }] },
  { id: 17, axis: "dateStyle", weight: 1, prompt: "데이트 계획을 세울 때", options: [{ label: "재밌는 걸 최대한 많이 넣는다", trait: "playful" }, { label: "무리 없는 동선과 분위기를 본다", trait: "cozy" }] },
  { id: 18, axis: "dateStyle", weight: 1, prompt: "좋아하는 데이트 사진은", options: [{ label: "활동감 있고 화사한 순간", trait: "playful" }, { label: "차분하고 따뜻한 일상 장면", trait: "cozy" }] },
  { id: 19, axis: "pace", weight: 2, prompt: "마음이 맞는 사람을 만나면 나는", options: [{ label: "빠르게 친해지고 싶다", trait: "fast" }, { label: "천천히 가까워지는 편이 좋다", trait: "steady" }] },
  { id: 20, axis: "pace", weight: 1, prompt: "관계 속도를 생각할 때", options: [{ label: "초반 템포가 중요하다", trait: "fast" }, { label: "천천히 쌓이는 신뢰가 더 중요하다", trait: "steady" }] },
  { id: 21, axis: "pace", weight: 1, prompt: "연락 빈도는", options: [{ label: "자주 주고받을수록 좋다", trait: "fast" }, { label: "리듬이 맞으면 많지 않아도 괜찮다", trait: "steady" }] },
  { id: 22, axis: "pace", weight: 1, prompt: "스킨십이나 친밀감도", options: [{ label: "자연스럽게 빠르게 가까워질 수 있다", trait: "fast" }, { label: "충분히 편해진 뒤가 좋다", trait: "steady" }] },
  { id: 23, axis: "pace", weight: 1, prompt: "연애 시작 후 더 가까운 모습은", options: [{ label: "초반부터 많이 표현한다", trait: "fast" }, { label: "시간이 갈수록 깊어진다", trait: "steady" }] },
  { id: 24, axis: "pace", weight: 1, prompt: "이상적인 관계 온도는", options: [{ label: "초반부터 설렘이 확실한 관계", trait: "fast" }, { label: "잔잔하지만 오래 가는 관계", trait: "steady" }] }
];
