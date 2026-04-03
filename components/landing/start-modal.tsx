"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { useUiPreferences } from "@/components/providers/ui-preferences";

type StartModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MODAL_CLOSE_DELAY_MS = 220;

export function StartModal({ isOpen, onClose }: StartModalProps) {
  const router = useRouter();
  const { setUserName, t } = useUiPreferences();
  const [draftName, setDraftName] = useState("");
  const [isRouting, setIsRouting] = useState(false);
  const routeTimerRef = useRef<number | null>(null);

  const defaultNames = useMemo(
    () => [t("스위트 게스트", "Sweet Guest"), t("디저트 러버", "Dessert Lover")],
    [t]
  );

  useEffect(() => {
    return () => {
      if (routeTimerRef.current !== null) {
        window.clearTimeout(routeTimerRef.current);
      }
    };
  }, []);

  const closeWithReset = () => {
    setDraftName("");
    onClose();
  };

  const handleStart = () => {
    const trimmed = draftName.trim();
    const name = trimmed || defaultNames[Math.floor(Math.random() * defaultNames.length)];
    setUserName(name);
    setDraftName("");
    setIsRouting(true);
    onClose();
    if (routeTimerRef.current !== null) {
      window.clearTimeout(routeTimerRef.current);
    }
    routeTimerRef.current = window.setTimeout(() => {
      setIsRouting(false);
      onClose();
      router.push("/test");
    }, MODAL_CLOSE_DELAY_MS);
  };

  return (
    <div
      aria-hidden={!isOpen}
      aria-modal="true"
      className={`start-modal-overlay ${isOpen ? "is-open" : ""}`}
      role="dialog"
    >
      <button
        aria-label={t("닫기", "Close")}
        className="start-modal-overlay__backdrop"
        disabled={!isOpen}
        onClick={closeWithReset}
        type="button"
      />

      <div className={`start-modal-panel ${isOpen ? "is-open" : ""}`}>
        <button
          aria-label={t("닫기", "Close")}
          className="start-modal-panel__close"
          disabled={!isOpen}
          onClick={closeWithReset}
          type="button"
        >
          ×
        </button>

        <div className="start-modal-panel__oven-top">
          <div className="start-modal-panel__knobs">
            <span />
            <span />
            <span />
          </div>
          <div className="start-modal-panel__temperature">200°C</div>
        </div>

        <div className="start-modal-panel__body">
          <div className="start-modal-panel__eyebrow">START</div>
          <h2>{t("디저트 카드를 구워볼 시간이에요", "Time to bake your dessert card")}</h2>

          <div className="start-modal-panel__copy">
            <p>{t("24개의 질문에 솔직하게 답해 주세요.", "Answer 24 questions honestly.")}</p>
            <p>
              {t(
                "지금의 연애 무드를 닮은 디저트 카드를 구워드릴게요.",
                "We'll bake a dessert card that mirrors your romance mood."
              )}
            </p>
          </div>

          <label className="start-modal-panel__field">
            <span>{t("카드에 적힐 이름", "Name on the card")}</span>
            <input
              maxLength={15}
              onChange={(event) => setDraftName(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleStart();
                }
              }}
              placeholder={t("당신의 달콤한 닉네임은? 🧁", "What's your sweet nickname? 🧁")}
              type="text"
              value={draftName}
            />
          </label>

          <button className="start-modal-panel__cta" onClick={handleStart} type="button">
            {isRouting ? t("오븐에서 카드를 꺼내는 중...", "Taking your card out of the oven...") : t("카드 굽기 시작 🔥", "Start Baking 🔥")}
          </button>
        </div>
      </div>
    </div>
  );
}
