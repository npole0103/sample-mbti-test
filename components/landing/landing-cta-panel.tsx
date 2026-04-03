"use client";

import {
  CakeSliceOrnament,
  CoffeeOrnament,
  CookieOrnament,
  CroissantOrnament
} from "@/components/landing/bakery-ornaments";
import { useUiPreferences } from "@/components/providers/ui-preferences";

type LandingCtaPanelProps = {
  onStart: () => void;
};

export function LandingCtaPanel({ onStart }: LandingCtaPanelProps) {
  const { t } = useUiPreferences();

  return (
    <section className="landing-panel landing-panel--cta">
      <div className="landing-cta__decorations" aria-hidden="true">
        <CroissantOrnament className="landing-cta__ornament landing-cta__ornament--croissant" />
        <CookieOrnament className="landing-cta__ornament landing-cta__ornament--cookie" />
        <CakeSliceOrnament className="landing-cta__ornament landing-cta__ornament--cake" />
        <CoffeeOrnament className="landing-cta__ornament landing-cta__ornament--coffee" />
        <CookieOrnament className="landing-cta__ornament landing-cta__ornament--cookie-secondary" />
      </div>

      <div className="landing-cta__eyebrow">CARD READY</div>

      <div className="landing-panel__summary">
        <p className="landing-summary-item">
          <span className="landing-summary-item__dot" aria-hidden="true" />
          <span>
            {t(
              "24문항에 답하면 지금의 연애 텐션을 닮은 디저트 카드가 나와요.",
              "Answer 24 questions and reveal a dessert card that matches your current romance mood."
            )}
          </span>
        </p>
        <p className="landing-summary-item">
          <span className="landing-summary-item__dot" aria-hidden="true" />
          <span className="landing-summary-item__rich">
            <span className="landing-inline-pill landing-inline-pill--common">
              {t("노멀", "Normal")}
            </span>
            <span className="landing-inline-pill landing-inline-pill--rare">
              {t("레어", "Rare")}
            </span>
            <span className="landing-inline-pill landing-inline-pill--superRare">
              {t("유니크", "Unique")}
            </span>
            <span>
              {t(
                "까지, 어떤 카드가 구워질지는 아직 비밀이에요.",
                "tiers await, but which card gets baked is still a secret."
              )}
            </span>
          </span>
        </p>
      </div>

      <button className="landing-primary-button" onClick={onStart} type="button">
        {t("테스트 시작하기", "Start Test")}
      </button>
    </section>
  );
}
