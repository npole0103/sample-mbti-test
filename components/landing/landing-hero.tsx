"use client";

import {
  CakeSliceOrnament,
  CoffeeOrnament,
  CookieOrnament,
  CroissantOrnament
} from "@/components/landing/bakery-ornaments";
import { useUiPreferences } from "@/components/providers/ui-preferences";

export function LandingHero() {
  const { t } = useUiPreferences();

  return (
    <section className="landing-panel landing-panel--headline">
      <div className="landing-panel__decorations" aria-hidden="true">
        <CroissantOrnament className="landing-ornament landing-ornament--croissant" />
        <CookieOrnament className="landing-ornament landing-ornament--cookie" />
        <CakeSliceOrnament className="landing-ornament landing-ornament--cake" />
        <CoffeeOrnament className="landing-ornament landing-ornament--coffee" />
        <CookieOrnament className="landing-ornament landing-ornament--cookie-secondary" />
        <CroissantOrnament className="landing-ornament landing-ornament--croissant-secondary" />
      </div>

      <div className="landing-panel__chips">
        <span className="landing-chip">{t("#연애무드테스트", "#RomanceMoodTest")}</span>
        <span className="landing-chip">{t("#디저트성격유형", "#DessertPersonality")}</span>
        <span className="landing-chip">{t("#달콤한결과카드", "#SweetResultCard")}</span>
      </div>

      <h1 className="landing-headline">
        <span>{t("내 연애 무드는", "What dessert")}</span>
        <strong>{t("어떤 디저트일까?", "matches my romance mood?")}</strong>
      </h1>

      <p className="landing-headline__subcopy">
        {t(
          "질문에 답하고 오늘의 텐션을 닮은 디저트 카드를 만나보세요.",
          "Answer a few questions and meet the dessert card that mirrors your mood today."
        )}
      </p>
    </section>
  );
}
