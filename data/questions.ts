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
  {
    id: 1,
    axis: "expression",
    weight: 2,
    prompt: "좋아하는 사람이 생기면 먼저 티가 나는 편은?",
    options: [
      { label: "표정과 말투가 금방 달라져요.", trait: "bold" },
      { label: "조금씩 챙기면서 은근하게 보여줘요.", trait: "gentle" }
    ]
  },
  {
    id: 2,
    axis: "expression",
    weight: 1,
    prompt: "애정 표현 방식으로 더 가까운 쪽은?",
    options: [
      { label: "마음이 생기면 말로 분명히 전해요.", trait: "bold" },
      { label: "행동으로 오래 보여주는 편이에요.", trait: "gentle" }
    ]
  },
  {
    id: 3,
    axis: "expression",
    weight: 1,
    prompt: "상대가 지쳐 보이는 날, 나는?",
    options: [
      { label: "바로 연락해서 상태부터 확인해요.", trait: "bold" },
      { label: "조용히 옆을 지키며 기다려줘요.", trait: "gentle" }
    ]
  },
  {
    id: 4,
    axis: "expression",
    weight: 1,
    prompt: "연애 초반 분위기에서 더 익숙한 모습은?",
    options: [
      { label: "반응이 빠르고 표현도 시원해요.", trait: "bold" },
      { label: "조심스럽게 간격을 보며 다가가요.", trait: "gentle" }
    ]
  },
  {
    id: 5,
    axis: "expression",
    weight: 1,
    prompt: "보고 싶다는 마음이 커졌을 때는?",
    options: [
      { label: "그 마음을 바로 말하는 편이에요.", trait: "bold" },
      { label: "괜히 더 챙기며 마음을 쌓아가요.", trait: "gentle" }
    ]
  },
  {
    id: 6,
    axis: "expression",
    weight: 1,
    prompt: "상대가 감동받는 포인트는 보통 어디에 있나요?",
    options: [
      { label: "솔직하고 또렷한 한마디예요.", trait: "bold" },
      { label: "자꾸 생각나는 다정한 행동이에요.", trait: "gentle" }
    ]
  },
  {
    id: 7,
    axis: "conflict",
    weight: 2,
    prompt: "서운한 일이 생기면 먼저 필요한 건?",
    options: [
      { label: "바로 이야기해서 오해를 줄여야 해요.", trait: "immediate" },
      { label: "생각을 정리할 시간이 먼저 필요해요.", trait: "reflective" }
    ]
  },
  {
    id: 8,
    axis: "conflict",
    weight: 1,
    prompt: "갈등 상황에서 더 중요한 기준은?",
    options: [
      { label: "그 자리에서 방향을 정하는 것", trait: "immediate" },
      { label: "감정이 가라앉은 뒤 다시 말하는 것", trait: "reflective" }
    ]
  },
  {
    id: 9,
    axis: "conflict",
    weight: 1,
    prompt: "미묘하게 거리감이 느껴질 때 나는?",
    options: [
      { label: "왜 그런지 직접 물어보는 편이에요.", trait: "immediate" },
      { label: "조금 더 보고 상황을 읽어봐요.", trait: "reflective" }
    ]
  },
  {
    id: 10,
    axis: "conflict",
    weight: 1,
    prompt: "대화를 풀 때 더 신경 쓰는 것은?",
    options: [
      { label: "감정을 바로 꺼내 솔직해지는 것", trait: "immediate" },
      { label: "말의 온도를 다듬어 전하는 것", trait: "reflective" }
    ]
  },
  {
    id: 11,
    axis: "conflict",
    weight: 1,
    prompt: "상대가 유난히 말이 없는 날엔?",
    options: [
      { label: "지금 마음부터 듣고 싶어요.", trait: "immediate" },
      { label: "편해질 때까지 기다려줄래요.", trait: "reflective" }
    ]
  },
  {
    id: 12,
    axis: "conflict",
    weight: 1,
    prompt: "화해에 더 가까운 방식은?",
    options: [
      { label: "미루지 않고 바로 대화를 열기", trait: "immediate" },
      { label: "한 템포 쉬고 차분히 마주 보기", trait: "reflective" }
    ]
  },
  {
    id: 13,
    axis: "dateStyle",
    weight: 2,
    prompt: "가장 끌리는 데이트 코스는?",
    options: [
      { label: "새로운 공간을 돌며 사진도 남기는 코스", trait: "playful" },
      { label: "한곳에 오래 머무르며 이야기하는 코스", trait: "cozy" }
    ]
  },
  {
    id: 14,
    axis: "dateStyle",
    weight: 1,
    prompt: "주말 약속의 이상적인 그림은?",
    options: [
      { label: "일정이 꽉 찬 활기 있는 하루", trait: "playful" },
      { label: "느슨하게 흘러가는 편안한 하루", trait: "cozy" }
    ]
  },
  {
    id: 15,
    axis: "dateStyle",
    weight: 1,
    prompt: "기념일을 보내는 방식으로 더 맞는 것은?",
    options: [
      { label: "이벤트와 깜짝 포인트를 넣는 것", trait: "playful" },
      { label: "좋아하는 루틴을 더 깊게 즐기는 것", trait: "cozy" }
    ]
  },
  {
    id: 16,
    axis: "dateStyle",
    weight: 1,
    prompt: "함께 있을 때 더 기대되는 순간은?",
    options: [
      { label: "예상 밖의 재미가 터지는 순간", trait: "playful" },
      { label: "편안한 공감이 차곡차곡 쌓이는 순간", trait: "cozy" }
    ]
  },
  {
    id: 17,
    axis: "dateStyle",
    weight: 1,
    prompt: "약속을 짤 때 더 중요하게 보는 것은?",
    options: [
      { label: "새로운 경험이 얼마나 많은지", trait: "playful" },
      { label: "동선과 분위기가 얼마나 편한지", trait: "cozy" }
    ]
  },
  {
    id: 18,
    axis: "dateStyle",
    weight: 1,
    prompt: "좋아하는 추억의 장면은 보통 어떤가요?",
    options: [
      { label: "웃음이 많고 장면이 선명한 순간", trait: "playful" },
      { label: "차분하고 오래 남는 일상의 컷", trait: "cozy" }
    ]
  },
  {
    id: 19,
    axis: "pace",
    weight: 2,
    prompt: "마음이 잘 맞는 사람을 만나면 나는?",
    options: [
      { label: "빠르게 친해지고 자주 보고 싶어요.", trait: "fast" },
      { label: "천천히 가까워지는 흐름이 좋아요.", trait: "steady" }
    ]
  },
  {
    id: 20,
    axis: "pace",
    weight: 1,
    prompt: "관계의 온도를 올리는 데 더 필요한 것은?",
    options: [
      { label: "초반의 강한 확신과 몰입", trait: "fast" },
      { label: "시간 속에서 쌓이는 신뢰", trait: "steady" }
    ]
  },
  {
    id: 21,
    axis: "pace",
    weight: 1,
    prompt: "연락 리듬은 어느 쪽이 더 편한가요?",
    options: [
      { label: "자주 주고받으며 온도를 맞추는 편", trait: "fast" },
      { label: "리듬이 맞으면 자주 아니어도 괜찮아요.", trait: "steady" }
    ]
  },
  {
    id: 22,
    axis: "pace",
    weight: 1,
    prompt: "처음 만난 뒤의 거리감은 보통?",
    options: [
      { label: "생각보다 금방 가까워지는 편이에요.", trait: "fast" },
      { label: "익숙해질 시간이 있어야 해요.", trait: "steady" }
    ]
  },
  {
    id: 23,
    axis: "pace",
    weight: 1,
    prompt: "연애 초반의 내 모습은?",
    options: [
      { label: "초반부터 표현량이 확 늘어요.", trait: "fast" },
      { label: "시간이 갈수록 더 깊어져요.", trait: "steady" }
    ]
  },
  {
    id: 24,
    axis: "pace",
    weight: 1,
    prompt: "이상적인 관계의 속도는?",
    options: [
      { label: "초반부터 확실히 무르익는 관계", trait: "fast" },
      { label: "오래 갈수록 더 좋아지는 관계", trait: "steady" }
    ]
  }
];
