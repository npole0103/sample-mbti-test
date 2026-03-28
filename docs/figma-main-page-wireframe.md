# Main Page Figma Wireframe

이 문서는 `내 연애 무드는 어떤 디저트일까?` 메인 페이지를 Figma에서 새로 구성할 때 바로 옮겨 그릴 수 있도록 만든 와이어프레임 스펙이다.

## 1. Design Intent

- 첫 화면의 역할은 설명이 아니라 `검사를 시작하게 만드는 쇼윈도`다.
- 정보량은 줄이고, 큰 디저트 비주얼과 강한 CTA에 시선을 모은다.
- 레퍼런스는 베이커리 앱 UI, 패키지 카드, 카페 쇼윈도, 리본 라벨 감성 쪽으로 잡는다.
- 결과 카드가 다양하다는 느낌은 마키 섹션에서 보여주고, 첫 스크린에서는 한 장의 대표 비주얼만 강하게 쓴다.

## 2. Visual Direction

### Tone

- 키워드: `Bakery boutique`, `soft premium`, `cute but editorial`, `mobile-first`
- 무드: 베이지 쇼룸 + 카라멜 포인트 + 크림 하이라이트
- 텍스처: 유리 패널, 종이 라벨, 패키지 스티커, 둥근 리본

### Color

- Background: `#FBF1E4`
- Background Soft: `#FFF8F1`
- Paper: `rgba(255, 250, 244, 0.88)`
- Ink: `#3F281C`
- Muted Brown: `#775B49`
- Caramel Accent: `#C67A47`
- Deep Caramel: `#97542F`
- Cream Highlight: `#FFF2DF`
- Berry Accent: `#DE9B8B`

### Typography

- Headline: serif 계열, 둥글고 살짝 에디토리얼한 느낌
- Body: 한국어 가독성이 좋은 sans-serif
- 숫자, badge, label: medium~bold sans-serif
- 원칙: 문장 길이는 짧게, 행간은 넉넉하게, 히어로 텍스트는 크게

## 3. Frame Setup

### Desktop

- Frame width: `1440`
- Content width: `1120`
- Grid: `12 columns`
- Margin: `160`
- Gutter: `24`
- Section spacing: `24`

### Mobile

- Base frame width: `390`
- Safe content width: `358`
- Side padding: `16`
- Section spacing: `16`
- 하단 CTA 고정 영역 여유: `88`

## 4. Page Structure

순서:

1. Hero
2. Dessert Marquee
3. Why This Test / Feature blocks
4. Bottom CTA

## 5. Hero Section

### 역할

- 브랜드 무드 전달
- 테스트 핵심 정보 압축
- 첫 CTA 클릭 유도

### Desktop Layout

- Section container: `1120 x 620`
- 2-column split
- Left column: `520`
- Right column: `520`
- Column gap: `32`

### Mobile Layout

- Section container: `358 x auto`
- Vertical stack
- 순서:
  1. Top label row
  2. Main copy
  3. CTA
  4. Meta chips
  5. Hero visual

### Hero Container Style

- Fill: `Paper`
- Radius: `34`
- Stroke: `1px rgba(111, 76, 53, 0.14)`
- Shadow: soft, large blur
- 내부 패딩
  - Desktop: `34 / 30`
  - Mobile: `28 / 22`

### Left Column Content

#### Top Bar

- Height: `36`
- 좌측: 로고 또는 워드마크
- 우측: small stamp badge

권장 텍스트:

- 로고/브랜드: `Dessert Mood Lab`
- stamp badge: `24문항 · 3분 내외`

#### Main Copy Group

- Eyebrow: `Bakery Mood Test`
- Headline:
  `내 연애 무드는 어떤 디저트일까?`
- Sub copy:
  `가볍게 24문항에 답하면, 지금의 연애 텐션을 닮은 디저트 결과 카드가 나와요.`

타이포 권장:

- Headline size
  - Desktop: `56~72`
  - Mobile: `40~48`
- Sub copy
  - Desktop: `18`
  - Mobile: `16`

#### CTA Row

- Primary CTA: `테스트 시작하기`
- Secondary CTA: `결과 카드 미리 보기`

버튼 스타일:

- Primary
  - Height: `54`
  - Horizontal padding: `22~28`
  - Radius: `999`
  - Fill: caramel gradient
- Secondary
  - Height: `54`
  - Radius: `999`
  - Ghost cream style

#### Meta Chips

- `24문항`
- `결과 카드 제공`
- `모바일 최적화`

칩 스타일:

- Height: `38~40`
- Radius: `999`
- Fill: white/cream
- Text size: `14`

### Right Column Visual

핵심은 `베이커리 앱 + 패키지 카드 + 디저트 쇼윈도` 감성을 한 프레임 안에 응축하는 것이다.

#### Visual Frame

- Size: `520 x 520`
- Radius: `34`
- 내부 패딩: `22`
- Fill:
  - top: soft cream
  - bottom: warm beige gradient
- 내부에 얇은 이중 프레임 라인 추가

#### Visual Composition

- 중앙: 대표 디저트 오브젝트 1개 크게
- 상단 좌측: small badge `Freshly baked mood`
- 상단 우측: floating info card 1개
- 하단 중앙: 리본형 label `Baked for Your Heart`
- 좌하단/우하단: 작은 garnish shape 또는 둥근 재료 조형

#### 대표 비주얼 규칙

- 실사 디저트 또는 결과 카드 이미지를 크게 하나 사용
- 비율은 카드보다 음식이 더 커 보이게
- 오브젝트는 프레임 중앙에서 약간 아래쪽
- 너무 많은 이미지 콜라주는 피하고, 첫 화면은 `1 hero object + 2 small accents` 정도로 제한

## 6. Dessert Marquee Section

### 역할

- 결과 종류가 많다는 것을 보여준다
- 클릭 유도는 하지 않고, 시각적으로 다양성만 전달한다

### Section Header

- Eyebrow: `Freshly Drawn Characters`
- Heading:
  `검사를 시작하면 여러 디저트 결과 카드 중 하나가 나와요`
- Body:
  `48장의 카드가 흐르지만 어떤 결과가 나올지는 아직 비밀이에요.`

### Layout

- Header block width: `680~760`
- Marquee 영역은 full-bleed 느낌으로 content 밖으로 살짝 확장
- Desktop section height: `340~380`
- Mobile section height: `300~340`

### Marquee Cards

- 총 48장 반복
- 카드 크기
  - Desktop: `194 x 252`
  - Mobile: `172 x 228`
- Radius: `26`
- 내부 이미지 프레임 radius: `22`
- 카드 간격: `16`

### Motion Direction

- 왼쪽에서 오른쪽이 아니라 `오른쪽에서 왼쪽`으로 천천히 지속 이동
- 1 cycle 기준 `55~60초`
- 사용자가 직접 조작하지 않음

## 7. Feature Blocks

### 역할

- 테스트 경험을 3문장 안으로 설명
- 진입 장벽을 낮추고 공유 동기를 만든다

### Recommended Content

1. `가볍게 답하기`
   `복잡한 해석 없이 A/B 선택만으로 빠르게 진행돼요.`
2. `결과 카드 받기`
   `내 무드와 닮은 디저트 캐릭터 카드를 바로 확인할 수 있어요.`
3. `친구와 공유하기`
   `저장하고 보내기 좋은 카드형 결과로 대화가 이어져요.`

### Layout

- Desktop: 3 cards in one row
- Mobile: 3 cards in one column
- Card gap: `16`
- Card min height: `196~220`
- Radius: `24`
- Padding: `22`

### Card Style

- 배경은 히어로보다 조금 더 단정한 paper tone
- 우하단에는 연한 원형 glow 또는 스티커 포인트 1개만 사용
- 텍스트는 3줄 이내로 정리

## 8. Bottom CTA

### 역할

- 첫 스크린을 지나간 사용자에게 다시 한번 시작 버튼을 노출

### Desktop

- Wide panel 또는 centered button row
- Section top spacing: `24`
- Button height: `58`

### Mobile

- `하단 고정 CTA` 적극 사용
- Safe area 포함 높이: `72~88`
- 버튼 라벨: `지금 시작하기`
- 보조 문구는 생략하거나 한 줄로 최소화

## 9. Component Rules

### Buttons

- 모든 CTA는 radius `999`
- Primary 버튼은 카라멜 그라데이션
- hover는 살짝 lift
- mobile은 최소 높이 `54`

### Chips / Labels

- 둥근 라벨형
- border는 얇고 채도 낮게
- 텍스트는 uppercase 또는 짧은 명사형

### Image Handling

- 이미지 비중을 크게 가져간다
- 너무 많은 텍스트가 이미지 영역을 침범하지 않게 한다
- 대표 컷은 한 개만 크게, 나머지는 작은 카드나 장식으로 분산

## 10. Figma Layer Naming

- `Home / Desktop / 1440`
- `Home / Mobile / 390`
- `Hero / Copy`
- `Hero / Visual`
- `Marquee / Track`
- `Feature / Card 01`
- `Feature / Card 02`
- `Feature / Card 03`
- `CTA / Sticky Mobile`

## 11. Suggested First Figma Build Order

1. Desktop frame 1440 생성
2. 12-column grid 적용
3. Hero 카드 먼저 완성
4. Hero 비주얼 안에 대표 디저트 이미지와 ribbon label 배치
5. Marquee 카드 6장만 먼저 샘플로 배치
6. Feature card 3개 배치
7. Mobile frame 390으로 재구성
8. 마지막에 sticky CTA 추가

## 12. Notes For The Next Step

다음 단계에서는 이 문서를 기준으로 아래 중 하나로 바로 이어가면 된다.

- 메인 페이지 `low-fi wireframe` 좌표 단위 상세화
- 메인 페이지 `mid-fi` 컴포넌트 스펙화
- 테스트 페이지와 결과 페이지를 동일 톤으로 확장
