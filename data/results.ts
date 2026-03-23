export type DessertResult = {
  slug: string;
  name: string;
  subtitle: string;
  summary: string;
  description: string;
  strengths: string[];
  cautions: string[];
  bestMatch: string;
  trickyMatch: string;
  dateMood: string;
  palette: {
    accent: string;
    soft: string;
    text: string;
  };
};

export const dessertResults: DessertResult[] = [
  {
    slug: "butter-rice-cake",
    name: "버터떡형",
    subtitle: "무심쫀득 러버",
    summary: "툭툭 무심한데 이상하게 오래 마음에 남는 사람",
    description:
      "겉으론 담백하지만 마음을 열면 오래도록 정을 쌓아가는 타입이다. 조용히 챙기고 꾸준히 남아 있는 사랑을 보여준다.",
    strengths: ["꾸준한 애정", "쉽게 흔들리지 않는 안정감", "말보다 행동으로 보이는 진심"],
    cautions: ["무심해 보인다는 오해", "감정 표현이 늦어 타이밍을 놓칠 수 있음"],
    bestMatch: "도넛형",
    trickyMatch: "바게트형",
    dateMood: "따뜻한 조명 아래 오래 이야기할 수 있는 카페 데이트",
    palette: { accent: "#d59a42", soft: "#f7ead0", text: "#4f3311" }
  },
  {
    slug: "chewy-cookie",
    name: "쫀득쿠키형",
    subtitle: "은근집착 다정파",
    summary: "다정함이 촘촘하고 마음 확인을 자주 하고 싶은 사람",
    description:
      "좋아하는 사람의 작은 변화도 금방 알아채고, 더 가까워지고 싶은 마음을 자주 표현한다. 정서적 밀도가 높은 관계를 선호한다.",
    strengths: ["세심한 관심", "꾸준한 연락", "관계 몰입도 높음"],
    cautions: ["확인받고 싶은 마음이 커질 수 있음", "상대의 거리감에 예민할 수 있음"],
    bestMatch: "식빵형",
    trickyMatch: "크럼블형",
    dateMood: "디저트 두 개 시켜 나눠 먹는 다정한 카페 데이트",
    palette: { accent: "#a46535", soft: "#f6e5d6", text: "#402311" }
  },
  {
    slug: "croissant",
    name: "크루아상형",
    subtitle: "예민폭신 섬세파",
    summary: "결은 바삭하지만 속은 누구보다 여린 사람",
    description:
      "감정의 온도와 말투의 결을 세심하게 읽는다. 섬세한 만큼 쉽게 상처받기도 하지만, 그만큼 상대를 정성껏 이해하려 한다.",
    strengths: ["감정 공감 능력", "디테일한 배려", "깊이 있는 대화"],
    cautions: ["분위기에 쉽게 영향받음", "과하게 생각이 많아질 수 있음"],
    bestMatch: "롤케이크형",
    trickyMatch: "도넛형",
    dateMood: "조용한 베이커리에서 천천히 대화하는 오후 데이트",
    palette: { accent: "#c48d5d", soft: "#fbefdd", text: "#51321c" }
  },
  {
    slug: "salt-bread",
    name: "소금빵형",
    subtitle: "담백중독 안정형",
    summary: "화려하진 않아도 함께할수록 빠져드는 사람",
    description:
      "밀당보다 믿음을 우선한다. 자극적인 연애보다는 편안하고 오래 가는 관계를 좋아하며, 함께할수록 진가가 드러난다.",
    strengths: ["신뢰감", "차분한 관계 유지", "일상에 강한 편안함"],
    cautions: ["처음엔 심심해 보일 수 있음", "감정 표현 강도가 약할 수 있음"],
    bestMatch: "타르트형",
    trickyMatch: "크럼블형",
    dateMood: "동네 산책과 브런치를 함께하는 편안한 데이트",
    palette: { accent: "#b97d47", soft: "#f7e4c9", text: "#4a2d18" }
  },
  {
    slug: "donut",
    name: "도넛형",
    subtitle: "애교만점 기분파",
    summary: "좋아하는 사람 앞에서 사랑스러움이 터지는 사람",
    description:
      "반응이 빠르고 애정 표현도 솔직하다. 분위기를 밝게 만들고 설렘을 키우는 데 능숙하지만, 기분의 흐름이 선명한 편이다.",
    strengths: ["발랄한 에너지", "솔직한 표현", "가벼운 설렘을 잘 만듦"],
    cautions: ["기분에 따라 텐션 차이가 큼", "즉흥성이 강해질 수 있음"],
    bestMatch: "버터떡형",
    trickyMatch: "휘낭시에형",
    dateMood: "사진 찍기 좋은 핫한 디저트샵 투어",
    palette: { accent: "#ec7a8f", soft: "#ffe3ea", text: "#6c2442" }
  },
  {
    slug: "canele",
    name: "까눌레형",
    subtitle: "겉차분 속뜨거움형",
    summary: "쉽게 흔들리지 않지만 마음을 주면 아주 진한 사람",
    description:
      "감정을 함부로 꺼내지 않지만 한 번 확신이 서면 깊고 뜨겁게 사랑한다. 차분한 인상과 강한 내면의 대비가 매력이다.",
    strengths: ["깊이 있는 애정", "쉽게 흔들리지 않음", "관계의 밀도감"],
    cautions: ["초반 진입 장벽이 높음", "속마음을 숨기다가 오해받을 수 있음"],
    bestMatch: "머핀형",
    trickyMatch: "프레첼형",
    dateMood: "밤 산책과 진한 커피가 어울리는 무드 있는 데이트",
    palette: { accent: "#7c4e36", soft: "#f0ddd2", text: "#3a1f16" }
  },
  {
    slug: "scone",
    name: "스콘형",
    subtitle: "무던하고 믿음직한 현실파",
    summary: "화려한 이벤트보다 오래 남는 신뢰를 만드는 사람",
    description:
      "감정보다 행동으로 책임감을 보여주는 편이다. 현실 감각이 좋고, 안정적인 연애와 실질적인 배려를 중요하게 여긴다.",
    strengths: ["책임감", "현실적인 배려", "장기전에서 강함"],
    cautions: ["감성 표현이 부족해 보일 수 있음", "변화보다 익숙함을 더 선호할 수 있음"],
    bestMatch: "타르트형",
    trickyMatch: "도넛형",
    dateMood: "조용한 브런치와 서점 코스가 있는 낮 데이트",
    palette: { accent: "#9d7b61", soft: "#efe3d6", text: "#433024" }
  },
  {
    slug: "tart",
    name: "타르트형",
    subtitle: "꾸미는 감성 로맨티스트",
    summary: "사랑도 순간도 예쁘게 기억하고 싶은 사람",
    description:
      "기념일과 무드, 말의 디테일을 소중하게 생각한다. 사랑을 함께 만들어 가는 장면으로 여기며 낭만을 적극적으로 살린다.",
    strengths: ["낭만적인 연출", "감성적인 표현", "기억에 남는 순간 만들기"],
    cautions: ["기대치가 높아질 수 있음", "감정이 정리되지 않으면 서운함이 커질 수 있음"],
    bestMatch: "소금빵형",
    trickyMatch: "식빵형",
    dateMood: "꽃과 디저트가 있는 감성 카페 데이트",
    palette: { accent: "#d76877", soft: "#fde1e5", text: "#632a35" }
  },
  {
    slug: "muffin",
    name: "머핀형",
    subtitle: "포근수다 인간난로형",
    summary: "함께 있으면 금방 긴장이 풀리는 따뜻한 사람",
    description:
      "말과 리액션이 다정해 친밀감을 빠르게 높인다. 관계에서 정서적 안전지대를 만들어주는 재능이 있다.",
    strengths: ["정서적 안정감", "편안한 대화", "따뜻한 리액션"],
    cautions: ["너무 받아주다 지칠 수 있음", "분위기를 맞추느라 자신의 감정을 미룰 수 있음"],
    bestMatch: "까눌레형",
    trickyMatch: "바게트형",
    dateMood: "오래 앉아 수다 떨기 좋은 아늑한 디저트 카페",
    palette: { accent: "#ce8d64", soft: "#fbe8db", text: "#5d341a" }
  },
  {
    slug: "pretzel",
    name: "프레첼형",
    subtitle: "츤데레 밸런스형",
    summary: "쿨하게 보이지만 챙길 때는 확실히 챙기는 사람",
    description:
      "거리를 무너뜨리기보다는 균형 있게 조절한다. 감정 표현은 절제되어 있지만, 필요한 순간엔 누구보다 선명하게 마음을 보여준다.",
    strengths: ["균형감", "선명한 배려", "감정 기복이 비교적 안정적"],
    cautions: ["차갑게 보일 수 있음", "속도 맞추기에 시간이 걸릴 수 있음"],
    bestMatch: "휘낭시에형",
    trickyMatch: "까눌레형",
    dateMood: "분위기 좋은 바와 산책이 섞인 담백한 데이트",
    palette: { accent: "#9d6241", soft: "#f4ddcf", text: "#462413" }
  },
  {
    slug: "cream-bread",
    name: "슈크림빵형",
    subtitle: "속마음부자 여린형",
    summary: "겉보다 속에 훨씬 더 많은 애정을 쌓아두는 사람",
    description:
      "표현이 조심스럽지만 마음속 온도는 높다. 관계를 진지하게 생각하고 상대에게 상처 주는 상황을 특히 조심한다.",
    strengths: ["따뜻한 진심", "깊은 애착", "상대 감정에 민감함"],
    cautions: ["서운함을 오래 쌓을 수 있음", "거절이나 냉담함에 크게 흔들릴 수 있음"],
    bestMatch: "바게트형",
    trickyMatch: "크럼블형",
    dateMood: "편안한 영화와 디저트가 있는 조용한 실내 데이트",
    palette: { accent: "#e8b56e", soft: "#fff1d9", text: "#5a3a12" }
  },
  {
    slug: "milk-bread",
    name: "식빵형",
    subtitle: "기본기탄탄 편안형",
    summary: "특별히 튀지 않아도 자꾸 찾게 되는 사람",
    description:
      "과장된 연출 없이도 함께 있으면 편하고 자연스럽다. 관계를 유지하는 기본기가 좋고 일상 속 친밀감을 소중하게 쌓아간다.",
    strengths: ["편안함", "꾸준한 일상형 애정", "안정적인 소통"],
    cautions: ["강한 자극을 기대하는 상대에겐 심심할 수 있음", "감정을 지나치게 평이하게 표현할 수 있음"],
    bestMatch: "쫀득쿠키형",
    trickyMatch: "타르트형",
    dateMood: "동네 맛집과 산책으로 채우는 소박한 데이트",
    palette: { accent: "#c7a171", soft: "#f9eedc", text: "#55361a" }
  },
  {
    slug: "roll-cake",
    name: "롤케이크형",
    subtitle: "부드러운 배려왕",
    summary: "관계의 분위기를 둥글고 매끈하게 만드는 사람",
    description:
      "갈등 상황에서도 부드럽게 소통하려 하고, 상대 입장을 먼저 생각한다. 배려가 자연스러워 함께 있으면 정돈되는 느낌을 준다.",
    strengths: ["부드러운 소통", "배려심", "갈등 완충 능력"],
    cautions: ["자기 주장 시점이 늦어질 수 있음", "참다가 한 번에 지칠 수 있음"],
    bestMatch: "크루아상형",
    trickyMatch: "바게트형",
    dateMood: "전시와 티타임이 이어지는 차분한 데이트",
    palette: { accent: "#e0a0a8", soft: "#fff0f3", text: "#66353d" }
  },
  {
    slug: "baguette",
    name: "바게트형",
    subtitle: "직진단호 매력형",
    summary: "좋아하면 애매하게 두지 않는 시원한 사람",
    description:
      "감정이 생기면 비교적 빠르고 분명하게 움직인다. 밀당보다 솔직한 방향성을 선호해 연애에서도 추진력과 존재감이 강하다.",
    strengths: ["솔직한 표현", "추진력", "결정이 빠름"],
    cautions: ["상대 속도를 놓칠 수 있음", "표현이 강하게 느껴질 수 있음"],
    bestMatch: "슈크림빵형",
    trickyMatch: "버터떡형",
    dateMood: "맛집 예약부터 일정까지 시원하게 이끄는 데이트",
    palette: { accent: "#b77a52", soft: "#f4e1d5", text: "#4a2817" }
  },
  {
    slug: "financier",
    name: "휘낭시에형",
    subtitle: "조용한 고급취향형",
    summary: "티는 많이 안 내도 기준과 감도가 분명한 사람",
    description:
      "쉽게 마음을 열진 않지만, 좋아하는 사람에겐 진중하게 집중한다. 취향과 기준이 분명해서 조용히 오래 남는 매력을 만든다.",
    strengths: ["진중함", "깊이 있는 취향", "섬세한 기준"],
    cautions: ["거리감 있게 보일 수 있음", "선택에 시간이 걸릴 수 있음"],
    bestMatch: "프레첼형",
    trickyMatch: "도넛형",
    dateMood: "분위기 좋은 디저트 바에서 취향을 나누는 데이트",
    palette: { accent: "#9f7b63", soft: "#efe5db", text: "#3d2b20" }
  },
  {
    slug: "crumble",
    name: "크럼블형",
    subtitle: "자유분방 호기심형",
    summary: "예상 밖의 설렘을 자꾸 만들어내는 사람",
    description:
      "새로운 경험과 대화를 즐기며 틀에 박힌 관계를 답답해한다. 서로의 개성을 살리고 재밌는 흐름을 만드는 데 강점이 있다.",
    strengths: ["신선한 매력", "호기심", "재밌는 관계 운영"],
    cautions: ["루틴한 관계에 지루함을 느낄 수 있음", "자유를 지나치게 우선할 수 있음"],
    bestMatch: "도넛형",
    trickyMatch: "쫀득쿠키형",
    dateMood: "팝업스토어와 디저트 투어를 이어가는 즉흥 데이트",
    palette: { accent: "#c88d55", soft: "#f9e6cf", text: "#503118" }
  }
];

export const dessertResultMap = Object.fromEntries(
  dessertResults.map((result) => [result.slug, result])
) satisfies Record<string, DessertResult>;
