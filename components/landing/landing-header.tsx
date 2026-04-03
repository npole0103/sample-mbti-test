"use client";

import Image from "next/image";

import { useUiPreferences } from "@/components/providers/ui-preferences";

type LandingHeaderProps = {
  onStart: () => void;
};

export function LandingHeader({ onStart }: LandingHeaderProps) {
  const { lang, setLang, t } = useUiPreferences();

  return (
    <header className="landing-header">
      <div className="landing-header__brand-group">
        <div className="landing-header__brand">
          {t("나만의 카드를 구워보세요🥐", "Bake your own card🥐")}
        </div>
      </div>

      <div className="landing-header__actions">
        <span className="landing-header__meta">{t("24문항 · 3분 내외", "24 questions · 3 mins")}</span>
        <div
          aria-checked={lang === "US"}
          aria-label={t("언어 변경", "Change language")}
          className="language-toggle language-toggle--flags"
          onClick={() => setLang(lang === "KOR" ? "US" : "KOR")}
          role="switch"
        >
          <span className={`language-toggle__thumb ${lang === "US" ? "is-us" : ""}`} aria-hidden="true" />
          <span className={`language-toggle__flag ${lang === "KOR" ? "is-active" : ""}`}>
            <Image
              alt="Korean"
              className="language-toggle__flag-image"
              height={20}
              src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1f0-1f1f7.svg"
              width={20}
            />
          </span>
          <span className={`language-toggle__flag ${lang === "US" ? "is-active" : ""}`}>
            <Image
              alt="English"
              className="language-toggle__flag-image"
              height={20}
              src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1fa-1f1f8.svg"
              width={20}
            />
          </span>
        </div>
        <button className="header-start-button" onClick={onStart} type="button">
          {t("시작하기", "Start")}
        </button>
      </div>
    </header>
  );
}
