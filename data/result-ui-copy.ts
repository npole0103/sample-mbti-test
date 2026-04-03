export type ResultUiCopy = {
  ko: {
    name: string;
    subtitle: string;
    intro: string;
    hashtags: string[];
    resemblance: string;
    shiningPoints: string[];
    cautionPoints: string[];
    dateMood: string;
    goodMatch: { dessert: string; mbti: string; desc: string };
    trickyMatch: { dessert: string; mbti: string; desc: string };
  };
  en: {
    name: string;
    subtitle: string;
    intro: string;
    hashtags: string[];
    resemblance: string;
    shiningPoints: string[];
    cautionPoints: string[];
    dateMood: string;
    goodMatch: { dessert: string; mbti: string; desc: string };
    trickyMatch: { dessert: string; mbti: string; desc: string };
  };
};

export const resultUiCopy: Record<string, ResultUiCopy> = {
  "butter-rice-cake": {
    ko: {
      name: "사워도우 로프",
      subtitle: "계획을 굽는 장인형",
      intro: "겉은 담백하지만 기준이 분명하고, 오래 볼수록 깊이가 살아나는 타입이에요.",
      hashtags: ["기준확실", "깊이있는호감", "차분한리더"],
      resemblance: "사워도우처럼 천천히 발효되며 깊이를 만드는 타입이에요. 감정보다 방향과 안정감을 먼저 세우지만, 한번 마음을 주면 오래 지키는 힘이 있습니다.",
      shiningPoints: ["관계의 기준과 균형을 잘 잡아요.", "말보다 행동으로 신뢰를 쌓아요.", "장기전에서 더 큰 매력이 드러나요."],
      cautionPoints: ["초반에는 다정함이 늦게 보일 수 있어요.", "확신이 생기기 전엔 거리감 있게 느껴질 수 있어요."],
      dateMood: "조용한 베이커리에서 다음 계절 계획까지 같이 이야기하는 안정적인 데이트.",
      goodMatch: { dessert: "상하이 버터떡", mbti: "ISFJ", desc: "포근한 디저트 타입과 만나면 안정감이 더 크게 살아나요." },
      trickyMatch: { dessert: "마카롱 타워", mbti: "ENFP", desc: "리듬 차이가 커서 속도를 맞추는 대화가 중요해요." }
    },
    en: {
      name: "Sourdough Loaf",
      subtitle: "The Atelier Planner",
      intro: "Calm on the outside, but full of standards and depth once you get closer.",
      hashtags: ["steady", "intentional", "deepening"],
      resemblance: "Like sourdough, you become richer with time. You prioritize direction and stability first, then show long-lasting commitment.",
      shiningPoints: ["You create reliable structure in relationships.", "You build trust through action.", "Your charm grows in the long run."],
      cautionPoints: ["Warmth can show a little late at first.", "You may feel distant before certainty arrives."],
      dateMood: "A peaceful bakery date where you end up planning the next season together.",
      goodMatch: { dessert: "Shanghai Buttertteok", mbti: "ISFJ", desc: "Warm, caring types bring out your grounded sweetness." },
      trickyMatch: { dessert: "Macaron Tower", mbti: "ENFP", desc: "A big rhythm gap means pace-setting matters." }
    }
  },
  "chewy-cookie": {
    ko: {
      name: "까눌레",
      subtitle: "조용히 분석하는 디저트형",
      intro: "겉은 무심해 보여도, 속은 누구보다 세밀하게 움직이는 타입이에요.",
      hashtags: ["분석형호감", "반전매력", "깊은대화"],
      resemblance: "까눌레처럼 단단한 겉과 촘촘한 속을 함께 가진 타입이에요. 쉽게 열리진 않지만 마음을 열면 생각보다 오래 진하게 남아요.",
      shiningPoints: ["상대의 결을 세심하게 읽어요.", "깊이 있는 대화에서 매력이 커져요.", "새로운 관점으로 관계를 환기해요."],
      cautionPoints: ["감정 표현이 늦으면 오해가 생길 수 있어요.", "혼자 정리하는 시간이 너무 길어질 수 있어요."],
      dateMood: "작은 카페 구석에서 취향과 생각을 오래 나누는 진한 대화형 데이트.",
      goodMatch: { dessert: "몽블랑", mbti: "INFP", desc: "감성적이면서 깊은 대화를 좋아하는 타입과 잘 맞아요." },
      trickyMatch: { dessert: "프레첼", mbti: "ESTJ", desc: "해결 방식이 너무 다르면 텐션 차이가 느껴질 수 있어요." }
    },
    en: {
      name: "Canele",
      subtitle: "The Quiet Analyzer",
      intro: "You may look reserved at first, but your inner world is dense and precise.",
      hashtags: ["thoughtful", "layered", "surprising"],
      resemblance: "Like a canele, you combine a polished exterior with a rich center. You do not open easily, but once you do, you linger.",
      shiningPoints: ["You read emotional nuance carefully.", "Deep conversation amplifies your charm.", "You refresh relationships with new perspectives."],
      cautionPoints: ["Delayed emotional expression can create misunderstandings.", "You can spend too long sorting things alone."],
      dateMood: "A long, quiet cafe date full of preferences and reflective conversation.",
      goodMatch: { dessert: "Mont Blanc", mbti: "INFP", desc: "Emotionally rich types match your depth well." },
      trickyMatch: { dessert: "Pretzel", mbti: "ESTJ", desc: "Different resolution styles can feel sharp." }
    }
  },
  croissant: {
    ko: {
      name: "라벤더 마들렌",
      subtitle: "마음을 오래 남기는 여운형",
      intro: "섬세한 감정선과 긴 여운으로 관계를 깊게 만드는 타입이에요.",
      hashtags: ["섬세함", "공감력", "잔잔한매력"],
      resemblance: "작은 온도 변화도 먼저 읽고 조용히 보듬는 타입이에요. 눈에 띄게 화려하진 않지만 오래 남는 정서가 분명해요.",
      shiningPoints: ["상대의 감정을 세심하게 캐치해요.", "관계를 다정하고 안정적으로 이끌어요.", "깊은 공감으로 편안함을 줘요."],
      cautionPoints: ["혼자 감정을 꾹 눌러두기 쉬워요.", "상대를 배려하느라 내 감정이 뒤로 밀릴 수 있어요."],
      dateMood: "향 좋은 티와 디저트를 곁들여 오래 머무는 차분한 감성 데이트.",
      goodMatch: { dessert: "우유 식빵 로프", mbti: "ISTJ", desc: "안정적인 타입과 만나면 감정의 결이 더 깊어져요." },
      trickyMatch: { dessert: "츄러스", mbti: "ESTP", desc: "즉흥성이 강한 타입과는 속도 차이가 날 수 있어요." }
    },
    en: {
      name: "Lavender Madeleine",
      subtitle: "The Lingering Mood Keeper",
      intro: "You deepen relationships with delicate emotional lines and a long afterglow.",
      hashtags: ["gentle", "empathetic", "lingering"],
      resemblance: "You read small emotional shifts early and hold them softly. Not flashy, but your emotional presence lasts.",
      shiningPoints: ["You catch subtle feelings quickly.", "You create a soft and stable bond.", "Your empathy makes others feel safe."],
      cautionPoints: ["You may bottle up too much on your own.", "Your needs can get pushed back by care."],
      dateMood: "A calm tea-and-dessert date that stretches into a long conversation.",
      goodMatch: { dessert: "Milk Bread Loaf", mbti: "ISTJ", desc: "Steady types deepen your gentle rhythm." },
      trickyMatch: { dessert: "Churros", mbti: "ESTP", desc: "A pace gap can be felt quickly." }
    }
  },
  "salt-bread": {
    ko: {
      name: "우유 식빵 로프",
      subtitle: "기본을 지키는 안정형",
      intro: "특별한 이벤트보다 꾸준한 일상 속에서 신뢰를 쌓아가는 타입이에요.",
      hashtags: ["성실함", "안정감", "꾸준한호감"],
      resemblance: "매일 먹어도 질리지 않는 식빵처럼, 화려하진 않아도 오래 믿고 싶은 매력이 있어요.",
      shiningPoints: ["사소한 약속도 잘 지켜요.", "감정 기복이 크지 않아 편안해요.", "현실적인 배려가 강점이에요."],
      cautionPoints: ["표현이 적으면 무심해 보일 수 있어요.", "새로운 자극에는 조금 느릴 수 있어요."],
      dateMood: "브런치와 산책으로 채워지는 단정하고 오래가는 데이트.",
      goodMatch: { dessert: "과일 타르트", mbti: "ESFJ", desc: "밝고 다정한 타입이 당신의 안정감을 더 빛나게 해요." },
      trickyMatch: { dessert: "마카롱 타워", mbti: "ENFP", desc: "흥미의 리듬을 맞추는 대화가 필요해요." }
    },
    en: {
      name: "Milk Bread Loaf",
      subtitle: "The Steady Foundation",
      intro: "You build trust in everyday consistency more than spectacle.",
      hashtags: ["reliable", "stable", "comforting"],
      resemblance: "Like soft milk bread, your appeal is not loud but deeply dependable.",
      shiningPoints: ["You keep small promises well.", "Your emotional rhythm feels steady.", "Practical care is your strength."],
      cautionPoints: ["Too little expression can feel distant.", "You may be slower with new sparks."],
      dateMood: "A neat brunch-and-walk date that feels quietly lasting.",
      goodMatch: { dessert: "Fruit Tart", mbti: "ESFJ", desc: "Brighter types help your steady charm bloom." },
      trickyMatch: { dessert: "Macaron Tower", mbti: "ENFP", desc: "Interest rhythms need tuning." }
    }
  },
  donut: {
    ko: {
      name: "두바이쫀득쿠키",
      subtitle: "예상 밖으로 터지는 화제형",
      intro: "재치와 에너지가 넘쳐서 함께 있으면 장면이 계속 바뀌는 타입이에요.",
      hashtags: ["재치", "실험성", "파격매력"],
      resemblance: "처음엔 강렬하고, 안으로 들어갈수록 더 다층적인 매력이 나오는 타입이에요. 늘 같은 흐름보다 새 장면을 만드는 쪽에 가까워요.",
      shiningPoints: ["분위기를 빠르게 반전시켜요.", "새로운 경험을 만드는 데 강해요.", "대화가 쉽게 지루해지지 않아요."],
      cautionPoints: ["속도가 빨라 상대가 따라오기 버거울 수 있어요.", "재미를 좇다 보면 감정 정리가 늦어질 수 있어요."],
      dateMood: "핫한 디저트 숍 두세 곳을 연달아 돌며 새로운 메뉴를 고르는 데이트.",
      goodMatch: { dessert: "슈크림 퍼프", mbti: "ESFP", desc: "밝고 반응 좋은 타입과 만나면 에너지가 크게 살아나요." },
      trickyMatch: { dessert: "사워도우 로프", mbti: "INTJ", desc: "속도와 표현 방식 차이가 크게 느껴질 수 있어요." }
    },
    en: {
      name: "Dubai Chewy Cookie",
      subtitle: "The Scene-Stealing Firecracker",
      intro: "You overflow with wit and energy, always changing the scene around you.",
      hashtags: ["witty", "experimental", "unexpected"],
      resemblance: "You land with intensity, then reveal even more layers underneath. You are built for new scenes, not repetition.",
      shiningPoints: ["You flip the mood fast.", "You create memorable experiences.", "Conversations rarely get boring with you."],
      cautionPoints: ["Your speed can overwhelm others.", "Chasing fun can delay emotional processing."],
      dateMood: "A date hopping through trendy dessert spots and chasing the most exciting menu.",
      goodMatch: { dessert: "Cream Puff", mbti: "ESFP", desc: "Bright, reactive types amplify your spark." },
      trickyMatch: { dessert: "Sourdough Loaf", mbti: "INTJ", desc: "Pace and expression gaps can feel large." }
    }
  },
  canele: {
    ko: {
      name: "쿠인아망",
      subtitle: "기술이 숨어 있는 공방형",
      intro: "말수는 적어도 감각과 손맛으로 존재감을 남기는 타입이에요.",
      hashtags: ["감각적", "숙련됨", "무심한매력"],
      resemblance: "겉은 바삭하고 속은 밀도 있는 층처럼, 표현은 담백하지만 취향과 센스는 분명한 타입이에요.",
      shiningPoints: ["말보다 행동이 정확해요.", "상황 판단이 빠르고 실용적이에요.", "취향이 분명해서 인상이 오래 남아요."],
      cautionPoints: ["감정 설명이 부족하면 차갑게 보일 수 있어요.", "혼자만의 시간이 너무 길어질 수 있어요."],
      dateMood: "작은 공방 거리에서 천천히 취향을 발견하는 감각형 데이트.",
      goodMatch: { dessert: "복숭아 데니시", mbti: "ISFP", desc: "감각과 취향을 중시하는 타입과 결이 잘 맞아요." },
      trickyMatch: { dessert: "딸기 쇼트케이크", mbti: "ENFJ", desc: "감정 표현 강도가 다르면 서로 답답할 수 있어요." }
    },
    en: {
      name: "Kouign-Amann",
      subtitle: "The Skilled Craftsperson",
      intro: "You may not be loud, but your taste and precision leave an impression.",
      hashtags: ["skilled", "sensory", "cool charm"],
      resemblance: "Like crisp outer layers with a dense center, you are understated on the surface but clear in taste and style.",
      shiningPoints: ["Your actions are precise.", "You read situations quickly.", "Your taste feels memorable."],
      cautionPoints: ["Too little emotional explanation can seem cold.", "You may stay in your own space for too long."],
      dateMood: "A sensory date wandering through a craft district and sharing tastes.",
      goodMatch: { dessert: "Peach Danish", mbti: "ISFP", desc: "Taste-driven types align naturally with you." },
      trickyMatch: { dessert: "Strawberry Shortcake", mbti: "ENFJ", desc: "Different emotional intensity can feel frustrating." }
    }
  },
  scone: {
    ko: {
      name: "몽블랑",
      subtitle: "감정을 포근하게 쌓는 몽상형",
      intro: "감성의 결이 깊고, 진심을 오래 품는 타입이에요.",
      hashtags: ["감성짙음", "상상력", "진심형"],
      resemblance: "몽블랑처럼 부드럽고 섬세한 결을 층층이 쌓는 타입이에요. 표현은 조용하지만 마음은 오래 진하게 남아요.",
      shiningPoints: ["상대를 따뜻하게 바라봐요.", "정서적인 공감이 깊어요.", "작은 순간도 특별하게 만들어요."],
      cautionPoints: ["감정이 상하면 오래 마음에 남을 수 있어요.", "현실적인 조율보다 분위기에 머물 수 있어요."],
      dateMood: "비 오는 날 창가 자리에서 조용히 디저트를 나눠 먹는 감성 데이트.",
      goodMatch: { dessert: "까눌레", mbti: "INTP", desc: "깊은 대화와 감성을 함께 즐기는 타입과 잘 맞아요." },
      trickyMatch: { dessert: "프레첼", mbti: "ESTJ", desc: "현실 우선 흐름과 감정 우선 흐름이 부딪힐 수 있어요." }
    },
    en: {
      name: "Mont Blanc",
      subtitle: "The Softly Layered Dreamer",
      intro: "You carry deep feeling and hold sincerity for a long time.",
      hashtags: ["dreamy", "gentle", "sincere"],
      resemblance: "Like a Mont Blanc, you build soft emotional layers. Quiet on the outside, but you leave a rich aftertaste.",
      shiningPoints: ["You look at others warmly.", "Your emotional empathy is deep.", "You make small moments feel special."],
      cautionPoints: ["Hurt can linger for a long time.", "Mood can outweigh practical coordination."],
      dateMood: "A rainy-window date sharing dessert in a slow, emotional silence.",
      goodMatch: { dessert: "Canele", mbti: "INTP", desc: "Deeper conversation types connect well with you." },
      trickyMatch: { dessert: "Pretzel", mbti: "ESTJ", desc: "Realism and mood may clash." }
    }
  },
  tart: {
    ko: {
      name: "딸기 쇼트케이크",
      subtitle: "분위기를 정리하는 호스트형",
      intro: "주변 공기를 빠르게 읽고 모두가 편안한 방향으로 이끄는 타입이에요.",
      hashtags: ["배려형", "조화중심", "따뜻한리더"],
      resemblance: "정갈한 쇼트케이크처럼 밸런스를 잘 맞추고, 누구나 편하게 느끼는 분위기를 만드는 힘이 있어요.",
      shiningPoints: ["상대의 감정을 잘 읽어요.", "관계를 따뜻하고 안정적으로 이끌어요.", "분위기를 부드럽게 정리해요."],
      cautionPoints: ["상대에게 맞추다 보면 내 마음이 늦어질 수 있어요.", "기대가 커지면 서운함도 커질 수 있어요."],
      dateMood: "예쁜 디저트 숍에서 사진을 찍고 오래 산책하는 다정한 데이트.",
      goodMatch: { dessert: "우유 식빵 로프", mbti: "ISTJ", desc: "안정적인 타입과 만나면 서로의 장점을 잘 보완해요." },
      trickyMatch: { dessert: "쿠인아망", mbti: "ISTP", desc: "표현 강도의 차이를 맞추는 과정이 필요해요." }
    },
    en: {
      name: "Strawberry Shortcake",
      subtitle: "The Warm Host",
      intro: "You read the room quickly and guide it toward comfort.",
      hashtags: ["warm", "harmonious", "considerate"],
      resemblance: "Like a balanced shortcake, you create a clean, welcoming mood that feels easy to stay in.",
      shiningPoints: ["You read feelings well.", "You guide relationships warmly.", "You soften and organize the mood."],
      cautionPoints: ["Your own feelings can come second.", "Higher expectations may bring more disappointment."],
      dateMood: "A caring date with pretty desserts, photos, and a long walk.",
      goodMatch: { dessert: "Milk Bread Loaf", mbti: "ISTJ", desc: "Steady types complement your care well." },
      trickyMatch: { dessert: "Kouign-Amann", mbti: "ISTP", desc: "You may need to tune expression levels." }
    }
  },
  muffin: {
    ko: {
      name: "오페라 케이크",
      subtitle: "판을 설계하는 총괄 셰프형",
      intro: "명확한 방향과 추진력으로 관계의 흐름을 설계하는 타입이에요.",
      hashtags: ["전략형", "리더십", "속도감"],
      resemblance: "층이 분명한 오페라 케이크처럼 구조와 목표가 뚜렷해요. 감정도 결국 더 좋은 방향으로 이끌고 싶어 해요.",
      shiningPoints: ["결정을 빠르게 내릴 수 있어요.", "관계의 방향을 분명히 잡아요.", "책임감이 강하고 추진력이 좋아요."],
      cautionPoints: ["상대의 템포를 놓치면 압박처럼 느껴질 수 있어요.", "감정보다 해결이 먼저 나올 수 있어요."],
      dateMood: "예약과 동선을 미리 짜두고 효율적으로 즐기는 플래너형 데이트.",
      goodMatch: { dessert: "과일 타르트", mbti: "ESFJ", desc: "밝고 정돈된 타입과 만나면 균형이 좋아져요." },
      trickyMatch: { dessert: "몽블랑", mbti: "INFP", desc: "감정의 결을 먼저 보는 타입과는 리듬 차이가 날 수 있어요." }
    },
    en: {
      name: "Opera Cake",
      subtitle: "The Strategic Lead",
      intro: "You design relational flow with clarity and momentum.",
      hashtags: ["driven", "structured", "focused"],
      resemblance: "Like a layered opera cake, your structure and direction are clear. Even your feelings want a better end state.",
      shiningPoints: ["You decide fast.", "You set direction clearly.", "You are responsible and driven."],
      cautionPoints: ["Missing someone else’s tempo can feel intense.", "Solutions may come before empathy."],
      dateMood: "A planner-style date with routes and reservations already mapped out.",
      goodMatch: { dessert: "Fruit Tart", mbti: "ESFJ", desc: "Bright, organized types bring out your balance." },
      trickyMatch: { dessert: "Mont Blanc", mbti: "INFP", desc: "Emotion-first rhythms can feel different." }
    }
  },
  pretzel: {
    ko: {
      name: "프레첼",
      subtitle: "질서를 맛있게 완성하는 실전형",
      intro: "책임감과 추진력이 분명해서 관계를 현실적으로 다져가는 타입이에요.",
      hashtags: ["책임감", "추진력", "분명한기준"],
      resemblance: "단단하게 꼬인 프레첼처럼, 흔들림 없이 기본을 지키며 안정감을 만드는 힘이 있어요.",
      shiningPoints: ["실제 문제 해결이 빨라요.", "약속과 기준이 분명해요.", "관계를 생활 속에서 튼튼하게 만들어요."],
      cautionPoints: ["직설적인 말이 차갑게 들릴 수 있어요.", "감정의 미세한 결을 놓칠 수 있어요."],
      dateMood: "맛집과 산책, 일정이 깔끔하게 짜인 효율적인 데이트.",
      goodMatch: { dessert: "상하이 버터떡", mbti: "ISFJ", desc: "포근한 타입이 당신의 직선적인 매력을 부드럽게 받아줘요." },
      trickyMatch: { dessert: "마카롱 타워", mbti: "ENFP", desc: "흥미 흐름이 다르면 금방 리듬 차이가 날 수 있어요." }
    },
    en: {
      name: "Pretzel",
      subtitle: "The Orderly Finisher",
      intro: "Your sense of responsibility and drive make relationships feel grounded.",
      hashtags: ["orderly", "decisive", "reliable"],
      resemblance: "Like a tightly knotted pretzel, you create stability by holding structure.",
      shiningPoints: ["You solve practical issues quickly.", "Your promises feel clear.", "You make bonds sturdy in daily life."],
      cautionPoints: ["Directness can sound colder than intended.", "Subtle emotional nuance may get missed."],
      dateMood: "An efficient date with good food, a walk, and clean timing.",
      goodMatch: { dessert: "Shanghai Buttertteok", mbti: "ISFJ", desc: "Softer types receive your straight charm warmly." },
      trickyMatch: { dessert: "Macaron Tower", mbti: "ENFP", desc: "A rhythm gap can emerge quickly." }
    }
  },
  "cream-bread": {
    ko: {
      name: "상하이 버터떡",
      subtitle: "익숙해서 더 자주 생각나는 포근형",
      intro: "크게 튀지 않아도 오래 곁을 지키며 마음을 채워주는 타입이에요.",
      hashtags: ["편안함", "헌신", "생활밀착형"],
      resemblance: "버터 향이 은은하게 남는 디저트처럼, 생활 속에서 자연스럽게 스며드는 다정함이 있어요.",
      shiningPoints: ["필요한 순간을 잘 알아차려요.", "사소한 루틴도 따뜻하게 챙겨요.", "오래 갈수록 더 깊은 신뢰를 줘요."],
      cautionPoints: ["서운함을 오래 쌓아둘 수 있어요.", "내 마음보다 상대를 먼저 챙길 수 있어요."],
      dateMood: "단골 빵집과 산책 코스를 천천히 도는 일상형 데이트.",
      goodMatch: { dessert: "사워도우 로프", mbti: "INTJ", desc: "기준이 분명한 타입과 만나면 서로를 안정적으로 채워줘요." },
      trickyMatch: { dessert: "두바이쫀득쿠키", mbti: "ENTP", desc: "너무 빠른 리듬은 피곤하게 느껴질 수 있어요." }
    },
    en: {
      name: "Shanghai Buttertteok",
      subtitle: "The Everyday Comfort",
      intro: "You do not need to be loud to stay close and fill the heart over time.",
      hashtags: ["comforting", "loyal", "soft"],
      resemblance: "Like buttery rice cake, your warmth settles in through everyday softness.",
      shiningPoints: ["You notice what is needed.", "You care through small routines.", "Trust deepens over time with you."],
      cautionPoints: ["Disappointment can pile up quietly.", "You may put others before yourself."],
      dateMood: "An everyday-style date through a favorite bakery and a familiar walk.",
      goodMatch: { dessert: "Sourdough Loaf", mbti: "INTJ", desc: "Clear, grounded types balance you beautifully." },
      trickyMatch: { dessert: "Dubai Chewy Cookie", mbti: "ENTP", desc: "Fast rhythm can feel tiring." }
    }
  },
  "milk-bread": {
    ko: {
      name: "과일 타르트",
      subtitle: "모두가 좋아하는 정갈한 환대형",
      intro: "다정하고 환한 분위기로 관계를 보기 좋게 완성하는 타입이에요.",
      hashtags: ["친화력", "따뜻함", "정갈한매력"],
      resemblance: "보기 좋게 정돈된 과일 타르트처럼, 예쁨과 배려를 함께 담아내는 타입이에요.",
      shiningPoints: ["사람들이 편하게 느껴져요.", "센스 있게 분위기를 챙겨요.", "상대의 취향을 잘 기억해요."],
      cautionPoints: ["반응이 기대와 다르면 쉽게 서운할 수 있어요.", "상대 만족을 먼저 챙기다 지칠 수 있어요."],
      dateMood: "예쁜 디저트 플레이트와 사진이 가득한 산뜻한 데이트.",
      goodMatch: { dessert: "우유 식빵 로프", mbti: "ISTJ", desc: "안정적인 타입과 만나면 편안한 조합이 돼요." },
      trickyMatch: { dessert: "쿠인아망", mbti: "ISTP", desc: "표현 온도가 다르면 답답함을 느낄 수 있어요." }
    },
    en: {
      name: "Fruit Tart",
      subtitle: "The Cheerful Caregiver",
      intro: "You complete relationships with tidy warmth and friendly brightness.",
      hashtags: ["friendly", "warm", "polished"],
      resemblance: "Like a beautiful fruit tart, you combine sweetness and presentation with care.",
      shiningPoints: ["People feel comfortable around you.", "You shape mood with good taste.", "You remember what others like."],
      cautionPoints: ["Unexpected reactions may hurt more than they look.", "You can tire out by prioritizing others."],
      dateMood: "A fresh date filled with plated desserts, photos, and easy joy.",
      goodMatch: { dessert: "Milk Bread Loaf", mbti: "ISTJ", desc: "Steady types make an especially calm pairing." },
      trickyMatch: { dessert: "Kouign-Amann", mbti: "ISTP", desc: "Different expression temperatures may feel awkward." }
    }
  },
  "roll-cake": {
    ko: {
      name: "마카롱 타워",
      subtitle: "시선을 모으는 축제형",
      intro: "색감도 리듬도 화사해서 함께 있으면 분위기가 살아나는 타입이에요.",
      hashtags: ["생기", "자유로움", "반짝매력"],
      resemblance: "작은 개성들이 층층이 쌓여 큰 장면을 만드는 타입이에요. 존재만으로도 무드가 밝아져요.",
      shiningPoints: ["장면을 금방 화사하게 바꿔요.", "새로운 추억을 만드는 데 강해요.", "표현이 살아 있어 설렘을 크게 만들어요."],
      cautionPoints: ["집중 포인트가 자주 바뀔 수 있어요.", "기분과 리듬이 너무 빠르면 상대가 지칠 수 있어요."],
      dateMood: "예쁜 포토존과 시즌 메뉴를 따라다니며 기록하는 축제 같은 데이트.",
      goodMatch: { dessert: "두바이쫀득쿠키", mbti: "ENTP", desc: "아이디어와 텐션이 잘 통하는 타입과 만나면 시너지가 커져요." },
      trickyMatch: { dessert: "프레첼", mbti: "ESTJ", desc: "질서 중심 흐름과 부딪히면 갑갑함이 생길 수 있어요." }
    },
    en: {
      name: "Macaron Tower",
      subtitle: "The Bright Festival Type",
      intro: "Your color and rhythm light up the whole atmosphere.",
      hashtags: ["playful", "vivid", "sparkly"],
      resemblance: "You build a big scene out of many small colors and moods. Your presence alone brightens the air.",
      shiningPoints: ["You make moments feel instantly brighter.", "You create memorable experiences well.", "Your expression keeps excitement alive."],
      cautionPoints: ["Your focus can shift often.", "Too much speed or mood swing can tire others."],
      dateMood: "A festival-like date chasing photo spots and seasonal menus.",
      goodMatch: { dessert: "Dubai Chewy Cookie", mbti: "ENTP", desc: "Idea-rich, high-tension types create great synergy." },
      trickyMatch: { dessert: "Pretzel", mbti: "ESTJ", desc: "Order-first flow can feel restrictive." }
    }
  },
  baguette: {
    ko: {
      name: "츄러스",
      subtitle: "지금이 제일 맛있는 스릴형",
      intro: "타이밍과 에너지로 현재를 크게 끌어올리는 타입이에요.",
      hashtags: ["대담함", "순발력", "즉흥매력"],
      resemblance: "바로 먹을 때 가장 맛있는 츄러스처럼, 생생한 현재감과 추진력이 매력인 타입이에요.",
      shiningPoints: ["현장을 즐기는 감각이 뛰어나요.", "기회를 빠르게 잡아요.", "상대를 지루하지 않게 만들어요."],
      cautionPoints: ["속도가 너무 빠르면 상대가 숨찰 수 있어요.", "장기적인 조율보다 지금의 감각이 앞설 수 있어요."],
      dateMood: "야시장과 거리 간식을 돌며 즉흥적으로 코스를 바꾸는 액티브 데이트.",
      goodMatch: { dessert: "슈크림 퍼프", mbti: "ESFP", desc: "반응이 빠르고 밝은 타입과 만나면 즐거움이 커져요." },
      trickyMatch: { dessert: "상하이 버터떡", mbti: "ISFJ", desc: "천천히 익는 타입과는 템포 차이가 클 수 있어요." }
    },
    en: {
      name: "Churros",
      subtitle: "The Thrill-Seeking Spark",
      intro: "You lift the present with timing, instinct, and quick energy.",
      hashtags: ["bold", "quick", "thrilling"],
      resemblance: "Like churros at their best right now, your charm is immediate and alive in the moment.",
      shiningPoints: ["You are great at enjoying the moment.", "You catch opportunities quickly.", "You keep things exciting."],
      cautionPoints: ["Too much speed can feel breathless to others.", "Present excitement may outrun long-term tuning."],
      dateMood: "An active date through street snacks and spontaneous reroutes.",
      goodMatch: { dessert: "Cream Puff", mbti: "ESFP", desc: "Bright, responsive types heighten your fun." },
      trickyMatch: { dessert: "Shanghai Buttertteok", mbti: "ISFJ", desc: "Slow-burning types may feel a big tempo gap." }
    }
  },
  financier: {
    ko: {
      name: "복숭아 데니시",
      subtitle: "취향을 조용히 드러내는 아티스트형",
      intro: "과하지 않지만 분명한 취향으로 분위기를 만드는 타입이에요.",
      hashtags: ["감각미", "부드러움", "은근한개성"],
      resemblance: "복숭아 향이 은은하게 퍼지듯, 눈에 띄는 방식보다 분위기와 디테일로 존재감을 남겨요.",
      shiningPoints: ["과하지 않게 분위기를 좋게 만들어요.", "센스 있는 선택으로 인상을 남겨요.", "자연스럽게 배려가 묻어나요."],
      cautionPoints: ["감정을 또렷하게 말하지 않으면 오해가 생길 수 있어요.", "혼자 감각을 정리하는 시간이 길어질 수 있어요."],
      dateMood: "계절 과일 디저트를 나누며 조용히 취향을 맞춰가는 감각형 데이트.",
      goodMatch: { dessert: "쿠인아망", mbti: "ISTP", desc: "감각과 손맛을 아는 타입과 결이 잘 맞아요." },
      trickyMatch: { dessert: "오페라 케이크", mbti: "ENTJ", desc: "방향을 강하게 이끄는 타입과는 여백의 차이가 날 수 있어요." }
    },
    en: {
      name: "Peach Danish",
      subtitle: "The Quiet Tastemaker",
      intro: "You shape atmosphere with a clear but quiet sense of taste.",
      hashtags: ["tasteful", "soft", "distinct"],
      resemblance: "Like peach notes spreading softly, you leave an impression through detail and tone rather than volume.",
      shiningPoints: ["You improve the mood without overdoing it.", "Your choices feel tasteful.", "Care shows naturally."],
      cautionPoints: ["Unspoken feelings can be misunderstood.", "You may need a lot of solo processing time."],
      dateMood: "A sensory date matching tastes over seasonal fruit desserts.",
      goodMatch: { dessert: "Kouign-Amann", mbti: "ISTP", desc: "Hands-on, sensory types feel aligned." },
      trickyMatch: { dessert: "Opera Cake", mbti: "ENTJ", desc: "You may feel a gap in force and space." }
    }
  },
  crumble: {
    ko: {
      name: "슈크림 퍼프",
      subtitle: "만나면 기분이 환해지는 선샤인형",
      intro: "밝고 사랑스러운 반응으로 상대의 기분을 금방 환하게 만드는 타입이에요.",
      hashtags: ["밝음", "친화력", "즉흥매력"],
      resemblance: "통통한 퍼프처럼 가볍고 사랑스러워 보여도, 안에는 부드러운 다정함이 가득해요.",
      shiningPoints: ["함께 있는 순간을 즐겁게 만들어요.", "상대가 사랑받는 기분을 느끼게 해요.", "리액션이 살아 있어 설렘을 크게 만들어요."],
      cautionPoints: ["감정이 올라오면 표현도 급해질 수 있어요.", "긴 호흡보다 현재 즐거움이 앞설 수 있어요."],
      dateMood: "예쁜 시즌 디저트를 보며 사진도 찍고 웃음도 많은 캐주얼 데이트.",
      goodMatch: { dessert: "두바이쫀득쿠키", mbti: "ENTP", desc: "텐션과 반응이 잘 통하는 타입과 만나면 무드가 크게 살아나요." },
      trickyMatch: { dessert: "사워도우 로프", mbti: "INTJ", desc: "표현 강도 차이를 맞추는 과정이 필요해요." }
    },
    en: {
      name: "Cream Puff",
      subtitle: "The Mood-Lifting Sunshine",
      intro: "Your bright, lovable reactions can lift someone’s mood quickly.",
      hashtags: ["bright", "playful", "warm"],
      resemblance: "Like a cream puff, you look light and sweet but hold soft warmth inside.",
      shiningPoints: ["You make shared moments fun.", "You help others feel adored.", "Your reactions keep excitement high."],
      cautionPoints: ["Feelings can rush out quickly when they rise.", "Present fun may come before longer pacing."],
      dateMood: "A casual date with cute seasonal desserts, photos, and easy laughter.",
      goodMatch: { dessert: "Dubai Chewy Cookie", mbti: "ENTP", desc: "High-tension, reactive types amplify your mood." },
      trickyMatch: { dessert: "Sourdough Loaf", mbti: "INTJ", desc: "Expression intensity may need tuning." }
    }
  }
};
