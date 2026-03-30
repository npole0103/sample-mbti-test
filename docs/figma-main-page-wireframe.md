# Main Page Figma Wireframe

이 문서는 현재 서비스의 메인 페이지 UI/UX 상태를 기준으로, Figma Make에서 그대로 재현하거나 다듬기 쉽게 만든 메인 페이지 와이어프레임 가이드다.

핵심 방향:
- 베이커리 부티크 무드
- 부드럽고 고급스러운 종이 카드 질감
- 모바일 우선
- 메인 구조는 단순하지만, 결과 카드가 다양하다는 기대감을 슬라이딩 카드에서 보여준다

## 1. 현재 메인 구조

현재 메인 페이지는 아래 4개 구역으로 구성된다.

1. 상단 헤더
2. 메인 헤드라인 카드
3. 슬라이딩 디저트 카드 섹션
4. 설명 + CTA 카드 섹션
5. 푸터

즉 Figma Make에서는 예전처럼 하나의 히어로 카드 안에 모든 내용을 넣지 말고, 아래 흐름으로 분리해서 구성해야 한다.

1. `내 연애 무드는 어떤 디저트일까?`
2. 슬라이딩 카드
3. `24문항에 답하면...` + `테스트 시작하기`

## 2. Design Intent

- 첫 화면에서 바로 서비스 주제를 이해하게 만든다.
- 헤드라인은 감성적으로, 아래 설명은 차분하고 읽기 쉽게 분리한다.
- 결과가 다양하다는 느낌은 슬라이딩 카드 섹션에서 전달한다.
- CTA는 별도 카드로 내려서 사용자가 내용을 읽고 자연스럽게 테스트를 시작하게 만든다.

## 3. Visual Direction

### Tone

- 키워드: `bakery boutique`, `soft premium`, `cute editorial`, `warm paper UI`
- 전체 무드: 크림색 종이 위에 카라멜 브라운 포인트
- 느낌: 고급 디저트 박스, 메뉴 카드, 라벨 스티커, 부드러운 그림자

### Color

- Background: `#FBF1E4`
- Background Soft: `#FFF8F1`
- Paper Card: `rgba(255, 250, 244, 0.88)`
- Ink: `#3F281C`
- Muted Text: `#775B49`
- Caramel Accent: `#C67A47`
- Deep Caramel: `#97542F`
- Cream Highlight: `#FFF2DF`

### Typography

- Display: 클래식 세리프 계열
- Body: 깔끔한 한글 산세리프
- 헤드라인은 크지만 과하지 않게, 모바일에서 2줄 또는 3줄 이내 유지
- 설명문은 너무 연하지 않게 동일한 muted brown 톤으로 맞춘다

## 4. Frame Setup

### Desktop

- Frame width: `1440`
- Content width: `1120`
- Grid: `12 columns`
- Margin: `160`
- Gutter: `24`

### Mobile

- Frame width: `390`
- Safe content width: `358`
- Side padding: `16`
- Section spacing: `10 ~ 16`

## 5. Header

### 역할

- 브랜드와 시작 CTA를 가장 상단에 고정형으로 노출

### Layout

- Sticky rounded top bar
- 좌측: `Dessert Mood Lab`
- 우측: `24문항 · 3분 내외` + `시작하기`

### Style

- 높이: `62 ~ 72`
- 배경: 유리 같은 크림 화이트
- Radius: `999`
- 그림자: 부드럽고 넓게

## 6. Hero Headline Card

### 역할

- 메인 카피만 강하게 전달
- 디저트 카드 섹션 위에 브랜드 해시태그와 질문 한 줄을 배치

### 포함 요소

- 해시태그 칩 3개
  - `#24문항`
  - `#3분내외`
  - `#나만의결과카드`
- 메인 타이틀
  - `내 연애 무드는`
  - `어떤 디저트일까?`

### Layout

- 단일 카드
- 내부 콘텐츠는 가운데 정렬
- 카드 높이는 예전 풀 히어로보다 훨씬 짧아야 함
- 현재 의도상 슬라이딩 카드가 바로 아래에서 보여야 하므로 세로 길이를 길게 잡지 않는다

### Recommended Size

- Desktop card min-height: `320 ~ 360`
- Mobile card min-height: `220 ~ 260`

### Style

- Fill: `Paper Card`
- Radius: `34 ~ 42`
- Shadow: soft editorial shadow
- 타이틀은 large serif
- 칩은 작은 rounded pill

## 7. Dessert Marquee Section

### 역할

- 결과 카드가 다양하다는 기대감을 보여주는 메인 인터랙션 섹션
- 첫 진입 시 웹과 모바일에서 모두 일부 카드가 보여야 한다

### Layout

- Hero Headline Card 바로 아래
- 별도 설명 카피 없이 카드 트랙 중심
- full-bleed 느낌으로 좌우가 살짝 넓게 퍼져 보여도 됨

### Card Rules

- 카드 크기
  - Desktop: `194 x 252`
  - Mobile: `172 x 228`
- Radius: `26`
- 이미지 프레임 Radius: `22`
- 카드 간격: `16`

### Motion

- 자동 슬라이딩
- 속도는 느리게
- 사용자가 조작하지 않아도 결과가 계속 지나가는 인상

### Content

- 실제 디저트 이미지 카드 사용
- 카드 하단에는 디저트명 + MBTI/rarity 표기
- 이 섹션은 시각적으로 풍성해야 하지만, 전체 페이지보다 튀지는 않게 톤을 맞춘다

## 8. CTA Description Card

### 역할

- 슬라이딩 카드 아래에서 테스트 내용을 정리
- 사용자가 CTA를 누르기 직전 읽는 설명 구역

### 현재 포함 요소

- 설명 2줄
  - `24문항에 답하면 지금의 연애 텐션을 닮은 디저트 카드가 나와요.`
  - `가볍게 시작하고, 결과는 오래 남게. 48종의 카드 중 어떤 분위기가 나올지는 아직 비밀이에요.`
- CTA 버튼
  - `테스트 시작하기`

### Layout

- 별도 카드로 분리
- 내부 콘텐츠는 가운데 정렬
- 설명 문장은 같은 색상과 톤 유지
- 각 문장 앞에는 작은 포인트 불릿 배치

### Style

- Hero 카드와 동일한 paper card 계열
- 헤드라인 카드보다 더 낮고 압축적인 인상
- CTA 버튼은 카라멜 그라데이션

### Recommended Size

- Desktop max width: `720`
- Mobile width: `100%`

## 9. Start Modal

### Trigger

- 상단 헤더의 `시작하기`
- CTA 카드의 `테스트 시작하기`

### Modal Copy

- Title: `테스트를 시작할게요`
- Body line 1: `24개의 질문에 솔직하게 답해 주세요.`
- Body line 2: `지금의 연애 무드를 닮은 디저트 카드를 구워드릴게요.`

### Style

- 둥근 카드 모달
- 상단에 `START` 배지
- 본문은 두 줄이 확실히 구분되게 세로 배치

## 10. Footer

### 구성

- Brand: `Dessert Mood Lab`
- Copy: `© 2026 Dessert Mood Lab · 내 연애 무드는 어떤 디저트일까?`
- Tag: `Baked for Your Heart`

### Style

- 중앙 정렬
- 상단 보더 1줄
- 본문보다 가볍고 정리된 느낌

## 11. Component Mapping For Figma Make

현재 코드 구조 기준으로 Figma Make에서 아래 컴포넌트 단위로 생각하면 된다.

- `Header / Topbar`
- `Hero / Headline Card`
- `Marquee / Dessert Track`
- `CTA / Description Card`
- `Modal / Start Test`
- `Footer / Brand`

## 12. Suggested Figma Layer Names

- `Home / Desktop / 1440`
- `Home / Mobile / 390`
- `Header / Topbar`
- `Hero / Headline`
- `Hero / Chips`
- `Marquee / Track`
- `Marquee / Card`
- `CTA / Description`
- `CTA / Button`
- `Modal / Start`
- `Footer / Brand`

## 13. Figma Make Prompt Seed

아래 문구를 Figma Make 시작 프롬프트로 바로 사용할 수 있다.

```text
Create a mobile-first premium bakery-themed landing page for a Korean MBTI-style dessert test.

Structure:
1. Sticky rounded header with brand on the left and a start button on the right
2. A short hero headline card with three hashtag chips (#24문항, #3분내외, #나만의결과카드) and the main title "내 연애 무드는 어떤 디저트일까?"
3. A horizontal sliding dessert card section directly below the headline so users can see result cards immediately on first screen
4. A separate CTA description card below the sliding cards with two bullet-like lines of text and a caramel gradient start button
5. A soft premium footer

Style:
- Warm ivory paper card background
- Caramel brown typography
- Elegant serif headline, clean Korean sans body
- Soft premium bakery boutique mood
- Rounded cards, soft shadows, refined spacing
- Mobile-first layout but scalable to desktop

Do not combine the hero headline and the CTA description into one card. Keep them as two separate sections with the marquee in between.
```

## 14. Next Step

이 문서를 기준으로 바로 이어갈 수 있는 작업:

1. Figma Make로 메인 페이지 시안 생성
2. 생성된 시안에서 spacing, card height, chip arrangement 조정
3. 그 다음 테스트 페이지와 결과 페이지 와이어프레임 확장
