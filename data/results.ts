export type DessertResult = {
  slug: string;
  mbti: string;
  name: string;
  subtitle: string;
  summary: string;
  description: string;
  tags: string[];
  flavorNotes: string[];
  strengths: string[];
  cautions: string[];
  bestMatch: string;
  trickyMatch: string;
  dateMood: string;
  icon: {
    dessert: string;
    garnish: string;
    badge: string;
  };
  palette: {
    accent: string;
    soft: string;
    text: string;
    glaze: string;
  };
};

export const dessertResults: DessertResult[] = [
  {
    slug: "butter-rice-cake",
    mbti: "INTJ",
    name: "사워도우 로프",
    subtitle: "계획을 굽는 아틀리에형",
    summary: "겉은 담백하지만 기준이 분명해 오래 볼수록 신뢰가 깊어지는 타입이에요.",
    description:
      "생각 없이 다정한 말을 남발하지는 않지만, 한 번 마음을 주면 완성도 있게 관계를 지켜내요. 감정보다 방향을 먼저 보는 것 같아도 사실은 오래 갈 수 있는 구조를 세심하게 만들고 있는 사람이에요.",
    tags: ["완성도", "기준 있는 애정", "깊이감"],
    flavorNotes: ["고소한 첫인상", "묵직한 신뢰", "천천히 번지는 온기"],
    strengths: ["한 번 정한 관계를 오래 지켜요.", "감정에 휩쓸리기보다 방향을 제시해줘요.", "말보다 행동으로 안정감을 쌓아요."],
    cautions: ["확신이 생기기 전까지는 차가워 보일 수 있어요.", "상대가 듣고 싶은 다정한 표현을 놓치기 쉬워요."],
    bestMatch: "버터떡처럼 포근한 타입과 만나면 차분한 안정감이 더 커져요.",
    trickyMatch: "두쫀쿠처럼 속도가 빠른 타입과는 템포 조율이 필요해요.",
    dateMood: "조용한 베이커리에서 다음 계절의 여행 계획까지 나누는 긴 대화 데이트.",
    icon: { dessert: "사워도우", garnish: "밀 이삭", badge: "장인 배지" },
    palette: { accent: "#b87444", soft: "#f6ead9", text: "#4b2f1f", glaze: "#e3c19b" }
  },
  {
    slug: "chewy-cookie",
    mbti: "INTP",
    name: "까눌레",
    subtitle: "조용히 분석하는 실험실형",
    summary: "낯은 가리지만 마음을 열면 의외의 깊이와 반전을 보여주는 타입이에요.",
    description:
      "겉으로는 무심해 보여도 머릿속에서는 관계의 결을 계속 관찰해요. 가벼운 감정보다 정확한 이해를 선호하고, 서로의 취향과 논리를 맞춰갈 때 더 매력을 느껴요.",
    tags: ["반전 매력", "호기심", "정교한 관찰"],
    flavorNotes: ["짙은 향", "단단한 결", "늦게 오는 달콤함"],
    strengths: ["혼자만의 생각을 거쳐 더 깊은 답을 줘요.", "상대의 말 속 의미를 세심하게 읽어요.", "새로운 관점을 던져 관계를 신선하게 만들어요."],
    cautions: ["초반에는 감정 표현이 적어 거리감이 생길 수 있어요.", "혼자 정리하는 시간이 길어지면 오해를 부를 수 있어요."],
    bestMatch: "몽블랑처럼 감정을 존중해주는 타입과 만나면 상상력과 대화가 잘 맞아요.",
    trickyMatch: "프레첼처럼 결론을 빠르게 원하는 타입과는 속도 차가 생길 수 있어요.",
    dateMood: "진한 커피와 디저트를 두고 취향 이야기를 끝없이 이어가는 심야 카페 데이트.",
    icon: { dessert: "까눌레", garnish: "메모 카드", badge: "실험실 씰" },
    palette: { accent: "#7c4e36", soft: "#efe0d5", text: "#3d2418", glaze: "#b78363" }
  },
  {
    slug: "croissant",
    mbti: "INFJ",
    name: "라벤더 마들렌",
    subtitle: "마음을 오래 남기는 여운형",
    summary: "섬세한 공감과 깊은 시선으로 관계의 온도를 오래 유지하는 타입이에요.",
    description:
      "상대의 말보다 표정을 먼저 읽고, 분위기 속 미세한 감정도 놓치지 않아요. 한 번 연결된 관계를 쉽게 소비하지 않으며, 조용하지만 오래 가는 애정을 쌓아가는 데 강해요.",
    tags: ["여운", "통찰", "잔잔한 다정함"],
    flavorNotes: ["은은한 향", "섬세한 결", "오래 남는 잔향"],
    strengths: ["상대가 원하는 정서를 먼저 알아차려요.", "관계의 깊이를 천천히 키워가요.", "진심을 다듬어 전달하는 능력이 좋아요."],
    cautions: ["생각이 많아 혼자 마음이 무거워질 수 있어요.", "상대를 배려하느라 자신의 속마음을 늦게 꺼낼 수 있어요."],
    bestMatch: "롤케이크처럼 부드럽게 대화를 이어주는 타입과 만나면 안정감이 커져요.",
    trickyMatch: "바게트처럼 직진형인 타입과는 온도 조절이 필요해요.",
    dateMood: "라벤더 향이 감도는 조용한 티룸에서 오래 머무는 한낮 데이트.",
    icon: { dessert: "마들렌", garnish: "라벤더", badge: "봉인 왁스" },
    palette: { accent: "#a77ab7", soft: "#f3e7f7", text: "#4a3156", glaze: "#dbc1e6" }
  },
  {
    slug: "salt-bread",
    mbti: "ISTJ",
    name: "식빵 로프",
    subtitle: "기본을 지키는 클래식형",
    summary: "화려하진 않아도 꾸준한 책임감으로 관계의 중심을 단단히 잡아주는 타입이에요.",
    description:
      "즉흥적인 로맨스보다 믿을 수 있는 일상을 더 소중하게 생각해요. 작은 약속도 기억하고 챙기며, 흔들림 없는 태도로 상대가 편히 기대게 만드는 힘이 있어요.",
    tags: ["신뢰", "성실함", "안정적인 루틴"],
    flavorNotes: ["담백한 시작", "탄탄한 식감", "매일 생각나는 익숙함"],
    strengths: ["한결같은 태도로 안정감을 줘요.", "생활 속 약속을 꼼꼼히 지켜요.", "장기적으로 함께할 그림을 잘 그려요."],
    cautions: ["감정보다 할 일을 먼저 챙겨 무뚝뚝해 보일 수 있어요.", "새로운 시도에 다소 보수적으로 보일 수 있어요."],
    bestMatch: "과일 타르트처럼 분위기를 부드럽게 풀어주는 타입과 잘 맞아요.",
    trickyMatch: "마카롱 타워처럼 즉흥성이 큰 타입과는 리듬 차가 생길 수 있어요.",
    dateMood: "동네의 오래된 브런치 가게에서 천천히 식사하고 산책하는 데이트.",
    icon: { dessert: "식빵", garnish: "체크 냅킨", badge: "클래식 라벨" },
    palette: { accent: "#b98a59", soft: "#f7ecde", text: "#4c301d", glaze: "#dcc0a0" }
  },
  {
    slug: "donut",
    mbti: "ENTP",
    name: "두쫀쿠",
    subtitle: "예상 밖으로 터지는 화제형",
    summary: "재치와 에너지가 넘쳐서 함께 있으면 장면이 계속 바뀌는 타입이에요.",
    description:
      "뻔한 흐름을 금방 비틀어 더 재미있는 방향을 만들어내요. 사람의 반응을 빠르게 읽고 분위기를 띄우는 데 능하며, 새로운 가능성을 찾을수록 더 반짝여요.",
    tags: ["재치", "실험성", "파격적인 매력"],
    flavorNotes: ["바삭한 첫인상", "예상 밖의 필링", "톡 튀는 끝맛"],
    strengths: ["순간의 분위기를 재밌게 전환해요.", "새로운 경험을 만드는 데 강해요.", "대화가 지루할 틈이 없어요."],
    cautions: ["속도가 빨라 상대가 따라오기 버거울 수 있어요.", "재미를 좇다 보면 감정 정리가 늦어질 수 있어요."],
    bestMatch: "슈크림 퍼프처럼 반응이 밝은 타입과 만나면 시너지가 커져요.",
    trickyMatch: "사워도우 로프처럼 신중한 타입과는 템포 합이 중요해요.",
    dateMood: "새로 생긴 디저트 숍 두 곳을 연달아 돌며 가장 재미있는 메뉴를 고르는 데이트.",
    icon: { dessert: "두쫀쿠", garnish: "스파크", badge: "화제작 배지" },
    palette: { accent: "#ec7a8f", soft: "#ffe4ea", text: "#6a2940", glaze: "#ffc0cb" }
  },
  {
    slug: "canele",
    mbti: "ISTP",
    name: "쿠인아망",
    subtitle: "기술이 숨어 있는 공방형",
    summary: "말수는 적어도 감각과 숙련으로 존재감을 남기는 타입이에요.",
    description:
      "관계를 과하게 정의하기보다 자연스럽게 몸으로 익혀가요. 일상의 손맛과 디테일을 소중히 여기고, 묵묵하지만 한 번 빠지면 의외로 오래 집중하는 편이에요.",
    tags: ["숙련", "감각", "독립적인 매력"],
    flavorNotes: ["얇은 층", "짙은 버터 향", "은근한 중독성"],
    strengths: ["말보다 센스 있는 행동이 먼저 나와요.", "상황 판단이 빠르고 담백해요.", "취향이 분명해 관계의 결을 선명하게 만들어요."],
    cautions: ["감정 설명이 적어 무심해 보일 수 있어요.", "혼자만의 공간이 꼭 필요해 거리감으로 느껴질 수 있어요."],
    bestMatch: "복숭아 데니시처럼 감각을 존중해주는 타입과 잘 맞아요.",
    trickyMatch: "딸기 쇼트케이크처럼 반응을 자주 원하는 타입과는 다름이 있어요.",
    dateMood: "작은 공방 거리에서 천천히 취향을 발견하는 산책형 데이트.",
    icon: { dessert: "쿠인아망", garnish: "버터결", badge: "공방 인장" },
    palette: { accent: "#9a623a", soft: "#f5e4d3", text: "#452717", glaze: "#cf9a66" }
  },
  {
    slug: "scone",
    mbti: "INFP",
    name: "몽블랑",
    subtitle: "감정을 포근하게 쌓는 무드형",
    summary: "감성의 결이 깊고, 진심이 닿는 순간 오래 기억되는 타입이에요.",
    description:
      "겉으로는 조용해 보여도 마음속 풍경은 풍성한 편이에요. 관계를 기능적으로 보기보다 감정의 온도와 의미를 더 오래 곱씹고, 나만의 진심을 담아 표현할 때 가장 빛나요.",
    tags: ["감성", "상상력", "진심"],
    flavorNotes: ["포근한 질감", "부드러운 단맛", "끝에 남는 여운"],
    strengths: ["상대를 특별하게 바라봐줘요.", "따뜻한 상상력으로 관계를 풍성하게 만들어요.", "가볍지 않은 진심을 오래 지켜요."],
    cautions: ["상처를 오래 품으면 혼자 멀어질 수 있어요.", "현실적인 조율보다 감정의 결에 더 오래 머물 수 있어요."],
    bestMatch: "까눌레처럼 깊은 대화를 좋아하는 타입과 만났을 때 합이 좋아요.",
    trickyMatch: "프레첼처럼 효율을 먼저 보는 타입과는 결이 다를 수 있어요.",
    dateMood: "비 오는 날 창가 자리에서 디저트 하나를 천천히 나눠 먹는 데이트.",
    icon: { dessert: "몽블랑", garnish: "베리", badge: "무드 리본" },
    palette: { accent: "#c58a75", soft: "#f8e8e1", text: "#5b362a", glaze: "#e6b8a5" }
  },
  {
    slug: "tart",
    mbti: "ENFJ",
    name: "딸기 쇼트케이크",
    subtitle: "분위기를 정리하는 호스트형",
    summary: "주변의 공기를 읽고 모두가 편안한 방향으로 장면을 이끄는 타입이에요.",
    description:
      "표현은 따뜻하고 리액션은 풍부해요. 감정의 흐름을 잘 읽어서, 누가 더 말이 필요하고 누가 쉬어야 하는지 금방 알아차려요. 다정함을 실무처럼 챙기는 능력이 돋보여요.",
    tags: ["배려", "조화", "환대"],
    flavorNotes: ["화사한 첫맛", "부드러운 크림", "정갈한 마무리"],
    strengths: ["상대의 기분을 세심하게 돌봐요.", "분위기를 편안하게 만드는 힘이 있어요.", "사람 사이의 온도를 균형 있게 맞춰요."],
    cautions: ["상대에게 맞추느라 자신이 지칠 수 있어요.", "기대치가 높아지면 서운함이 커질 수 있어요."],
    bestMatch: "식빵 로프처럼 안정적인 타입과 만나면 서로를 잘 보완해요.",
    trickyMatch: "쿠인아망처럼 감정 표현이 적은 타입과는 해석 차가 생길 수 있어요.",
    dateMood: "예쁜 쇼케이스 앞에서 사진도 남기고, 예약한 애프터눈 티를 여유 있게 즐기는 데이트.",
    icon: { dessert: "쇼트케이크", garnish: "딸기", badge: "호스트 크라운" },
    palette: { accent: "#d46f7d", soft: "#fde4e8", text: "#672b38", glaze: "#f6bbc6" }
  },
  {
    slug: "muffin",
    mbti: "ENTJ",
    name: "오페라 케이크",
    subtitle: "판을 설계하는 총괄 셰프형",
    summary: "명확한 목표와 추진력으로 관계의 방향을 또렷하게 잡는 타입이에요.",
    description:
      "애매한 상태로 오래 머무르기보다 어떤 관계를 만들고 싶은지 분명하게 생각해요. 감정만으로 흘러가기보다 기준과 성장성을 함께 보며, 상대와 더 좋은 구조를 만들고 싶어 해요.",
    tags: ["리더십", "속도", "설계력"],
    flavorNotes: ["층이 선명한 구조", "진한 풍미", "깔끔한 피니시"],
    strengths: ["관계의 방향을 명확하게 제시해요.", "결정이 빠르고 추진력이 좋아요.", "말한 것은 끝까지 책임지려 해요."],
    cautions: ["상대의 속도를 놓치면 압박감으로 느껴질 수 있어요.", "효율적인 조언이 감정보다 먼저 나갈 수 있어요."],
    bestMatch: "과일 타르트처럼 분위기를 밝게 풀어주는 타입과 좋은 균형을 만들어요.",
    trickyMatch: "몽블랑처럼 감정의 호흡을 중시하는 타입과는 조율이 필요해요.",
    dateMood: "예약한 레스토랑과 동선을 완벽히 짜둔 뒤, 여유 있게 즐기는 코스형 데이트.",
    icon: { dessert: "오페라", garnish: "금선", badge: "총괄 셰프 씰" },
    palette: { accent: "#8b5f4a", soft: "#efe1d8", text: "#3d251b", glaze: "#c6a18f" }
  },
  {
    slug: "pretzel",
    mbti: "ESTJ",
    name: "프레첼",
    subtitle: "질서를 맛있게 완성하는 실전형",
    summary: "책임감과 추진력이 분명해서 관계를 현실적으로 든든하게 끌어가는 타입이에요.",
    description:
      "말보다 실행이 빠르고, 해야 할 일을 정리하는 능력이 좋아요. 관계도 감정만으로 보지 않고 실제로 지켜질 약속과 생활의 안정까지 챙기며 신뢰를 만듭니다.",
    tags: ["책임감", "추진력", "선명함"],
    flavorNotes: ["짭짤한 존재감", "탄탄한 구조", "믿음직한 피니시"],
    strengths: ["현실적인 문제를 빨리 해결해줘요.", "약속과 기준이 분명해요.", "관계를 안정적으로 이끌어요."],
    cautions: ["효율을 앞세우면 단호하게 느껴질 수 있어요.", "감정의 섬세한 결을 놓칠 수 있어요."],
    bestMatch: "버터떡처럼 부드럽게 감정을 받쳐주는 타입과 만나면 안정적이에요.",
    trickyMatch: "마카롱 타워처럼 즉흥성이 강한 타입과는 운영 방식이 다를 수 있어요.",
    dateMood: "맛집과 카페를 깔끔한 동선으로 묶어 효율 좋게 즐기는 데이트.",
    icon: { dessert: "프레첼", garnish: "굵은 소금", badge: "실전 배지" },
    palette: { accent: "#99613f", soft: "#f2dfd2", text: "#452515", glaze: "#c8926d" }
  },
  {
    slug: "cream-bread",
    mbti: "ISFJ",
    name: "버터떡",
    subtitle: "익숙해서 더 자주 생각나는 포근형",
    summary: "크게 티 내지 않아도 곁을 오래 지켜주는, 생활 밀착형 다정함의 타입이에요.",
    description:
      "상대를 위한 작은 움직임을 아주 자연스럽게 해내요. 화려한 이벤트보다 편안한 일상과 챙김으로 애정을 보여주고, 오래 갈수록 더 진한 신뢰를 만드는 편이에요.",
    tags: ["포근함", "헌신", "생활형 애정"],
    flavorNotes: ["쫀득한 안정감", "고소한 버터향", "편안한 여운"],
    strengths: ["상대가 필요한 순간을 잘 알아차려요.", "사소한 루틴을 다정하게 챙겨요.", "관계를 오래 지속하는 힘이 커요."],
    cautions: ["서운함을 참고 쌓아둘 수 있어요.", "자신의 바람을 뒤로 미루다 지칠 수 있어요."],
    bestMatch: "사워도우 로프처럼 기준이 분명한 타입과 만나면 서로를 단단히 채워줘요.",
    trickyMatch: "두쫀쿠처럼 변화가 잦은 타입과는 안정감의 기준이 다를 수 있어요.",
    dateMood: "따뜻한 차와 떡 디저트를 나누며 일상의 이야기로 웃는 저녁 데이트.",
    icon: { dessert: "버터떡", garnish: "포장 종이", badge: "홈메이드 라벨" },
    palette: { accent: "#dfb466", soft: "#fff1d7", text: "#5a3912", glaze: "#f4d489" }
  },
  {
    slug: "milk-bread",
    mbti: "ESFJ",
    name: "과일 타르트",
    subtitle: "모두가 좋아하는 웰컴 테이블형",
    summary: "사람을 편안하게 만들고, 함께 있는 장면을 예쁘게 정리하는 타입이에요.",
    description:
      "상대가 좋아할 포인트를 잘 기억하고, 그걸 실제 장면으로 구현해내는 데 능해요. 한 사람만 보는 관계여도 둘 사이의 분위기를 정성껏 꾸미는 힘이 있어요.",
    tags: ["사교성", "친절함", "정갈한 센스"],
    flavorNotes: ["산뜻한 첫맛", "보기 좋은 색감", "기분 좋은 마무리"],
    strengths: ["사람을 편안하게 만드는 재능이 있어요.", "디테일한 기념일을 잘 챙겨요.", "상대가 사랑받는다고 느끼게 해줘요."],
    cautions: ["반응이 예상과 다르면 서운함이 커질 수 있어요.", "관계의 균형보다 상대 만족에 치우칠 수 있어요."],
    bestMatch: "식빵 로프처럼 꾸준한 타입과 만나면 오래 가는 균형을 만들어요.",
    trickyMatch: "쿠인아망처럼 말수가 적은 타입은 해석이 어렵게 느껴질 수 있어요.",
    dateMood: "예쁜 접시와 계절 과일이 있는 디저트 숍에서 사진도 남기고 수다 떠는 데이트.",
    icon: { dessert: "과일 타르트", garnish: "민트 잎", badge: "웰컴 씰" },
    palette: { accent: "#db6c73", soft: "#fde5e4", text: "#632b33", glaze: "#f5b2b0" }
  },
  {
    slug: "roll-cake",
    mbti: "ENFP",
    name: "마카롱 타워",
    subtitle: "시선을 모으는 페스티벌형",
    summary: "생기와 호기심이 넘쳐서 함께 있으면 장면이 더 다채롭게 커지는 타입이에요.",
    description:
      "새로운 재미를 발견하는 속도가 빠르고, 마음이 가는 사람과는 그 기쁨을 바로 나누고 싶어 해요. 반짝이는 에너지와 사랑스러운 리액션으로 관계의 무드를 환하게 밝혀요.",
    tags: ["생기", "자유로움", "매력"],
    flavorNotes: ["선명한 컬러", "통통 튀는 식감", "축제 같은 잔향"],
    strengths: ["분위기를 금방 환하게 바꿔요.", "새로운 추억을 자주 만들어요.", "표현이 풍부해 상대가 즐거워져요."],
    cautions: ["흥미가 많아 집중의 방향이 자주 바뀔 수 있어요.", "기분이 앞서면 디테일한 조율이 늦어질 수 있어요."],
    bestMatch: "두쫀쿠처럼 반짝이는 타입과 만나면 유쾌한 시너지가 커져요.",
    trickyMatch: "프레첼처럼 질서를 중시하는 타입과는 생활 템포가 달라질 수 있어요.",
    dateMood: "신상 베이커리와 포토존을 차례로 도는 활기찬 쇼윈도 데이트.",
    icon: { dessert: "마카롱 타워", garnish: "리본", badge: "페스티벌 배지" },
    palette: { accent: "#d67aaa", soft: "#fde8f3", text: "#6b2f52", glaze: "#f2bdd8" }
  },
  {
    slug: "baguette",
    mbti: "ESTP",
    name: "츄러스",
    subtitle: "지금 가장 맛있는 순간형",
    summary: "순간의 열기와 자신감으로 관계의 온도를 빠르게 끌어올리는 타입이에요.",
    description:
      "좋아하면 표현도 빠르고 행동도 즉각적이에요. 재미있는 상황을 놓치지 않고, 같이 있을 때 생기는 반짝이는 에너지를 있는 그대로 즐길 줄 알아요.",
    tags: ["대담함", "순발력", "흥"],
    flavorNotes: ["바로 느껴지는 달콤함", "빠른 템포", "강한 인상"],
    strengths: ["지루할 틈 없는 에너지가 있어요.", "현장을 즐기는 감각이 좋아요.", "감정을 숨기지 않아 시원해요."],
    cautions: ["빠른 확신이 상대에겐 부담일 수 있어요.", "순간의 열기에 비해 긴 호흡 관리가 약할 수 있어요."],
    bestMatch: "슈크림 퍼프처럼 반응이 밝고 열린 타입과 즐거운 호흡을 만들어요.",
    trickyMatch: "버터떡처럼 천천히 익어가는 타입과는 속도 차가 날 수 있어요.",
    dateMood: "야시장처럼 활기찬 거리에서 군것질을 이어가는 즉흥형 데이트.",
    icon: { dessert: "츄러스", garnish: "시나몬", badge: "스트리트 라벨" },
    palette: { accent: "#c57a46", soft: "#fae6d4", text: "#542f16", glaze: "#e8b17a" }
  },
  {
    slug: "financier",
    mbti: "ISFP",
    name: "복숭아 데니시",
    subtitle: "취향을 조용히 보여주는 살롱형",
    summary: "말보다 감각으로 관계의 분위기를 만드는, 부드럽고도 분명한 타입이에요.",
    description:
      "튀지 않지만 자기만의 결은 또렷해요. 좋아하는 사람과는 예쁜 장면, 좋은 향, 편안한 무드처럼 감각적인 순간을 나누고 싶어 하고, 말없이도 배려가 자연스럽게 묻어나요.",
    tags: ["감각미", "부드러움", "개성"],
    flavorNotes: ["은은한 향", "촉촉한 결", "사적인 취향"],
    strengths: ["과하지 않게 분위기를 예쁘게 만들어요.", "상대의 취향을 세심하게 존중해요.", "자연스러운 다정함이 매력적이에요."],
    cautions: ["감정을 명확히 설명하지 않으면 오해가 생길 수 있어요.", "싫은 것을 오래 참다 갑자기 멀어질 수 있어요."],
    bestMatch: "쿠인아망처럼 말보다 센스를 중시하는 타입과 잘 맞아요.",
    trickyMatch: "오페라 케이크처럼 방향을 강하게 잡는 타입과는 결이 달라질 수 있어요.",
    dateMood: "계절 과일이 잘 보이는 작은 살롱 베이커리에서 느긋하게 머무는 데이트.",
    icon: { dessert: "복숭아 데니시", garnish: "복숭아 잎", badge: "살롱 태그" },
    palette: { accent: "#d99a84", soft: "#fae8e0", text: "#60362b", glaze: "#f3c5b4" }
  },
  {
    slug: "crumble",
    mbti: "ESFP",
    name: "슈크림 퍼프",
    subtitle: "만나면 기분이 환해지는 쇼케이스형",
    summary: "밝은 에너지와 친화력으로 상대를 금방 편안하게 만드는 타입이에요.",
    description:
      "좋아하는 사람과 함께 있을 때 리액션이 살아나고, 현재의 즐거움을 크게 느껴요. 센스 있는 표현과 사랑스러운 장난기로 관계를 무겁지 않게, 하지만 꽤 따뜻하게 만들어갑니다.",
    tags: ["밝음", "친화력", "즉흥성"],
    flavorNotes: ["가벼운 첫맛", "달콤한 충전감", "기분 좋은 마무리"],
    strengths: ["함께 있는 시간이 즐거워져요.", "상대가 사랑받는 기분을 느끼게 해줘요.", "순간의 분위기를 빠르게 살려요."],
    cautions: ["감정이 오르내릴 때 표현의 온도 차가 클 수 있어요.", "장기적인 계획은 뒤로 미뤄질 수 있어요."],
    bestMatch: "두쫀쿠나 츄러스처럼 활기 있는 타입과 만나면 텐션이 잘 맞아요.",
    trickyMatch: "사워도우 로프처럼 묵직한 타입과는 속도 조절이 필요해요.",
    dateMood: "쇼윈도가 예쁜 베이커리에서 신상 메뉴를 고르고 바로 맛보는 데이트.",
    icon: { dessert: "슈크림 퍼프", garnish: "설탕 가루", badge: "쇼케이스 씰" },
    palette: { accent: "#f0a35f", soft: "#fff0de", text: "#643a18", glaze: "#ffd19f" }
  }
];

export const dessertResultMap = Object.fromEntries(
  dessertResults.map((result) => [result.slug, result])
) satisfies Record<string, DessertResult>;
