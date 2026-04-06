"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import {
  BreadOrnament,
  CakeSliceOrnament,
  CoffeeOrnament,
  HeartOrnament
} from "@/components/landing/bakery-ornaments";
import { useUiPreferences } from "@/components/providers/ui-preferences";
import { ShareActions } from "@/components/result/share-actions";
import { getResultImagePath } from "@/data/result-assets";
import { resultUiCopy } from "@/data/result-ui-copy";
import type { DessertResult } from "@/data/results";
import { rarityMeta, type Rarity } from "@/lib/rarity";

type ResultDetailsProps = {
  result: DessertResult;
  rarity: Rarity;
};

const mbtiColors: Record<string, string> = {
  INFP: "#FFB5A7",
  ENFP: "#FCD5CE",
  INFJ: "#F8EDEB",
  ENFJ: "#F9E2E6",
  INTJ: "#E8E8E4",
  ENTJ: "#D8E2DC",
  INTP: "#ECE4DB",
  ENTP: "#FFE5D9",
  ISFP: "#FFD7BA",
  ESFP: "#FEC89A",
  ISTP: "#E2ECE9",
  ESTP: "#DFE7FD",
  ISFJ: "#F0E6EF",
  ESFJ: "#E0B1CB",
  ISTJ: "#CDB4DB",
  ESTJ: "#FFC8DD"
};

export function ResultDetails({ result, rarity }: ResultDetailsProps) {
  const { lang, t, userName } = useUiPreferences();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const cardExportRef = useRef<HTMLElement | null>(null);
  const imagePath = getResultImagePath(result, rarity);
  const copy = resultUiCopy[result.slug];
  const content = lang === "KOR" ? copy.ko : copy.en;
  const displayUserName = useMemo(() => userName || t("나", "Me"), [t, userName]);
  const rarityInfo = rarityMeta[rarity];
  const rarityLabel =
    lang === "KOR"
      ? rarity === "normal"
        ? "노멀"
        : rarity === "rare"
          ? "레어"
          : "유니크"
      : rarity === "normal"
        ? "Normal"
        : rarity === "rare"
          ? "Rare"
          : "Unique";

  const style = {
    "--accent": result.palette.accent,
    "--accent-soft": result.palette.soft,
    "--accent-text": result.palette.text,
    "--accent-glaze": result.palette.glaze,
    "--rarity-accent": rarityInfo.accent
  } as CSSProperties;

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 1600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setIsRevealed(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div className="result-loading-screen result-loading-screen--figma">
        <BreadOrnament className="result-loading-screen__icon" />
        <p className="result-loading-screen__message">
          {t("당신만의 특별한 베이커리를 굽고 있어요", "Baking your one-of-a-kind bakery...")}
        </p>
      </div>
    );
  }

  return (
    <article className={`result-screen result-screen--figma ${isRevealed ? "is-revealed" : ""}`} style={style}>
      <div className="result-screen__decor" aria-hidden="true">
        <CoffeeOrnament className="result-screen__decor-1" />
        <CakeSliceOrnament className="result-screen__decor-2" />
        <HeartOrnament className="result-screen__decor-3" />
      </div>

      <div className="result-screen__notice">{t("갓 구운 결과가 나왔어요! 🔥", "Freshly baked and ready! 🔥")}</div>

      <section className={`result-card result-card--${rarity} result-card--figma-latest`} ref={cardExportRef}>
        <div className="result-card__accent-bar" style={{ backgroundColor: mbtiColors[result.mbti] ?? result.palette.accent }} />

        <div className="result-card__body">
          <h1 className="result-card__owner result-card__owner--latest">
            <span>{displayUserName}</span>
            {t("의 베이커리 카드", "'s Bakery Card")}
          </h1>

          <div className="result-card__image-wrap result-card__image-wrap--latest">
            {imagePath ? (
              <Image
                alt={`${content.name} ${rarityLabel}`}
                className="result-card__image"
                fill
                priority
                sizes="(max-width: 767px) 220px, 240px"
                src={imagePath}
              />
            ) : null}
          </div>

          <div className="result-card__badges result-card__badges--latest marquee-card__pills">
            <span className="marquee-pill marquee-pill--mbti result-card__mbti result-card__mbti--latest">{result.mbti}</span>
            <span className={`marquee-pill marquee-pill--rarity marquee-pill--${rarity}`}>{rarityLabel}</span>
          </div>

          <h2 className="result-card__title result-card__title--latest">{content.name}</h2>
          <p className="result-card__subtitle result-card__subtitle--latest">&ldquo;{content.subtitle}&rdquo;</p>
          <p className="result-card__intro result-card__intro--latest">{content.intro}</p>

          <div className="result-card__hashtags result-card__hashtags--latest">
            {content.hashtags.map((tag) => (
              <span className="result-card__hashtag" key={tag}>
                #{tag}
              </span>
            ))}
          </div>

          <section className="result-card__section result-card__section--latest">
            <h3>이 디저트가 당신과 닮은 이유</h3>
            <p>{content.resemblance}</p>
          </section>

          <section className="result-card__section result-card__section--latest result-card__section--stacked">
            <div>
              <h3>{t("연애에서 더 빛나는 포인트", "Points that shine in romance")}</h3>
              <ul>
                {content.shiningPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="result-card__section-divider" />
            <div>
              <h3>{t("조금 더 주의하면 좋은 포인트", "Caution points")}</h3>
              <ul>
                {content.cautionPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="result-card__section result-card__section--note">
            <span className="result-card__section-caption">{t("추천 데이트 코스", "Recommended Date Course")}</span>
            <p>&ldquo;{content.dateMood}&rdquo;</p>
          </section>

          <div className="result-card__matches result-card__matches--latest">
            <div className="result-match-card result-match-card--good">
              <strong>{t("환상의 짝꿍", "Perfect Match")}</strong>
              <span className="result-match-card__dessert">
                {content.goodMatch.dessert} <em>{content.goodMatch.mbti}</em>
              </span>
              <span>{content.goodMatch.desc}</span>
            </div>
            <div className="result-match-card">
              <strong>{t("조금 더 노력 필요", "Needs Work")}</strong>
              <span className="result-match-card__dessert">
                {content.trickyMatch.dessert} <em>{content.trickyMatch.mbti}</em>
              </span>
              <span>{content.trickyMatch.desc}</span>
            </div>
          </div>
        </div>
      </section>

      <ShareActions
        cardExportRef={cardExportRef}
        dessertName={content.name}
        imageSrc={imagePath}
        mbti={result.mbti}
        rarityLabel={rarityLabel}
        summary={content.subtitle}
        userName={displayUserName}
      />

      <div className="result-footer result-footer--figma-latest">
        <p className="result-footer__prompt">
          {t("특정 확률로 레어와 유니크 카드를 뽑아보세요 ✨", "Try drawing rare and unique cards with a special chance ✨")}
        </p>
        <Link className="result-action-button result-action-button--restart" href="/">
          {t("테스트 다시하기", "Retake Test")}
        </Link>
      </div>
    </article>
  );
}
