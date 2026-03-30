# Bakery Character Style Guide

## Core Direction
- Real pastry texture first, mascot second
- Premium bakery packaging mood, not toy-like or childish
- Warm ivory, butter cream, caramel, berry jam, pistachio palette
- Soft studio lighting with clean silhouette for mobile readability
- 2 to 2.5 head body ratio, short arms and legs, expressive but restrained face

## Shared Rules
- Keep the dessert shape clearly recognizable before adding facial features
- Avoid plastic 3D toy surfaces, neon gradients, and exaggerated cartoon proportions
- Use a transparent background for result character assets
- Keep the center of mass stable so the character sits well inside a badge or card
- Do not add text, logos, or frames to the generated image

## Rarity System
- Common: premium core mascot, clean and readable, shop-window ready
- Rare: same pastry identity, but with noticeably more couture garnish, shine, layered details, or elegant accessories
- Super Rare: same pastry identity, but treated like a flagship boutique piece with more dramatic detailing, luxury ornament, and collector-grade finish
- Shared rarity behavior should be managed separately from dessert identity rules
- Use `docs/prompts/rarity-rules.json` as the common rarity policy for every dessert

## Asset Pool And Probability
- Generate 16 common variants, 16 rare variants, and 16 super rare variants for each dessert
- Service drop probability is independent from asset count
- Default reveal probability target:
  - Common: 77%
  - Rare: 20%
  - Super Rare: 3%
- This lets the app keep enough visual variety while still making rare pulls feel meaningful
- Manage these values from the shared app config file: `config/image-rarity.json`

## Rarity Visual Boundaries
- Rare should feel 15 to 25 percent more ornate than common
- Super rare should feel special, but still readable at small sizes
- The dessert base must remain unmistakable in all rarity tiers
- Rare may have subtle premium effects, but super rare must be visibly more radiant and luxurious

## Output Targets
- Result assets: `1024x1024`, transparent background
- Hero exploration assets: `1024x1536`, opaque background

## Three Representative Characters
- Ddujjonku / ENTP: witty, experimental, surprising, playful edge
- Buttertteok / ISFJ: warm, comforting, loyal, quietly luxurious
- Sourdough Loaf / INTJ: structured, refined, disciplined, artisan confidence
