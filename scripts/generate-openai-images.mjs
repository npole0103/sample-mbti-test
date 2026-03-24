import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const defaultConfigPath = path.join(rootDir, "docs", "prompts", "representative-characters.json");
const defaultRarityRulesPath = path.join(rootDir, "docs", "prompts", "rarity-rules.json");
const outputRoot = path.join(rootDir, "tmp-generated");
const rarityConfigPath = path.join(rootDir, "config", "image-rarity.json");

function loadDotEnv(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const text = fs.readFileSync(filePath, "utf8");
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) {
      continue;
    }

    const equalsIndex = line.indexOf("=");
    if (equalsIndex === -1) {
      continue;
    }

    const key = line.slice(0, equalsIndex).trim();
    let value = line.slice(equalsIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function getArg(flag, fallback) {
  const index = process.argv.indexOf(flag);
  if (index === -1 || index === process.argv.length - 1) {
    return fallback;
  }

  return process.argv[index + 1];
}

function buildRarityPlan(countPerRarity, probabilities) {
  return [
    { rarity: "common", count: countPerRarity, probability: probabilities.common },
    { rarity: "rare", count: countPerRarity, probability: probabilities.rare },
    { rarity: "superRare", count: countPerRarity, probability: probabilities.superRare }
  ];
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function slugify(value) {
  return value.replace(/[^a-zA-Z0-9-_]/g, "-");
}

function makePrompt(character, rarityPrompt, rarityRuleBlock) {
  return [
    character.promptBase,
    "The mascot must be adorable, lovable, friendly, and emotionally warm. Never scary, creepy, uncanny, menacing, sinister, or unsettling.",
    `MBTI: ${character.mbti}. Archetype: ${character.archetype}.`,
    `Core traits: ${character.traits.join(", ")}.`,
    `Visual notes: ${character.visualNotes.join("; ")}.`,
    `Rarity rules: ${rarityRuleBlock}`,
    rarityPrompt
  ].join(" ");
}

async function generateImage({ apiKey, prompt, size, quality, background, outputFormat }) {
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt,
      size,
      quality,
      background,
      output_format: outputFormat
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`OpenAI image generation failed (${response.status}): ${errorBody}`);
  }

  const result = await response.json();
  const imageBase64 = result?.data?.[0]?.b64_json;
  if (!imageBase64) {
    throw new Error("OpenAI image generation returned no image data.");
  }

  return Buffer.from(imageBase64, "base64");
}

async function main() {
  loadDotEnv(path.join(rootDir, ".env.local"));
  loadDotEnv(path.join(rootDir, ".env"));

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY is missing. Put it in .env.local or export it in your shell before running."
    );
  }

  const configPath = path.resolve(getArg("--config", defaultConfigPath));
  const rarityRulesPath = path.resolve(getArg("--rarity-rules", defaultRarityRulesPath));
  const filterSlug = getArg("--slug", "");
  const size = getArg("--size", "1024x1024");
  const quality = getArg("--quality", "medium");
  const background = getArg("--background", "transparent");
  const outputFormat = getArg("--format", "png");
  const force = getArg("--force", "false") === "true";
  const versionTag = getArg("--version-tag", "").trim();
  const defaultRarityConfig = JSON.parse(fs.readFileSync(rarityConfigPath, "utf8"));
  const countPerRarity = Number.parseInt(
    getArg("--count-per-rarity", String(defaultRarityConfig.countPerRarity)),
    10
  );
  const probabilities = {
    common: Number.parseInt(
      getArg("--prob-common", String(defaultRarityConfig.probabilities.common)),
      10
    ),
    rare: Number.parseInt(getArg("--prob-rare", String(defaultRarityConfig.probabilities.rare)), 10),
    superRare: Number.parseInt(
      getArg("--prob-super-rare", String(defaultRarityConfig.probabilities.superRare)),
      10
    )
  };

  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
  const rarityRules = JSON.parse(fs.readFileSync(rarityRulesPath, "utf8"));
  const characters = Array.isArray(config) ? config : [config];
  const targetCharacters = filterSlug
    ? characters.filter((character) => character.slug === filterSlug)
    : characters;

  if (targetCharacters.length === 0) {
    throw new Error(`No character found for slug "${filterSlug}" in ${configPath}`);
  }

  const rarityPlan = buildRarityPlan(countPerRarity, probabilities);
  const totalCount = rarityPlan.reduce((sum, tier) => sum + tier.count, 0);
  console.log(`Generating ${totalCount} image(s) per character using plan:`, rarityPlan);

  for (const character of targetCharacters) {
    const characterOutputDir = path.join(outputRoot, slugify(character.slug));
    ensureDir(characterOutputDir);

    const manifest = {
      slug: character.slug,
      nameKo: character.nameKo,
      mbti: character.mbti,
      archetype: character.archetype,
      countPerCharacter: totalCount,
      countPerRarity,
      rarityPlan,
      generatedAt: new Date().toISOString(),
      files: []
    };

    for (const tier of rarityPlan) {
      const tierDir = path.join(characterOutputDir, tier.rarity);
      ensureDir(tierDir);
      const rarityRuleBlock = rarityRules[tier.rarity]?.rules?.join(" ") ?? "";
      const tierPrompt = makePrompt(
        character,
        character.rarityPrompts[tier.rarity],
        rarityRuleBlock
      );

      for (let index = 1; index <= tier.count; index += 1) {
        const sequence = String(index).padStart(2, "0");
        const versionSuffix = versionTag ? `-${slugify(versionTag)}` : "";
        const fileName = `${character.slug}-${tier.rarity}-${sequence}${versionSuffix}.${outputFormat}`;
        const filePath = path.join(tierDir, fileName);

        if (!force && fs.existsSync(filePath)) {
          console.log(`Skipping existing file ${fileName}`);
          manifest.files.push({
            rarity: tier.rarity,
            file: path.relative(rootDir, filePath).replaceAll("\\", "/")
          });
          continue;
        }

        console.log(`Generating ${character.slug} ${tier.rarity} ${sequence}`);
        const imageBuffer = await generateImage({
          apiKey,
          prompt: tierPrompt,
          size,
          quality,
          background,
          outputFormat
        });

        fs.writeFileSync(filePath, imageBuffer);
        manifest.files.push({
          rarity: tier.rarity,
          file: path.relative(rootDir, filePath).replaceAll("\\", "/")
        });
      }
    }

    fs.writeFileSync(
      path.join(characterOutputDir, "manifest.json"),
      `${JSON.stringify(manifest, null, 2)}\n`,
      "utf8"
    );
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
