"use client";

import type { RefObject } from "react";
import { useState } from "react";
import QRCode from "qrcode";
import { toPng } from "html-to-image";

import { useUiPreferences } from "@/components/providers/ui-preferences";

type ShareActionsProps = {
  cardExportRef: RefObject<HTMLElement | null>;
  dessertName: string;
  imageSrc: string | null;
  mbti: string;
  rarityLabel: string;
  summary: string;
  userName: string;
};

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    image.src = src;
  });
}

export function ShareActions({
  cardExportRef,
  dessertName,
  imageSrc,
  mbti,
  rarityLabel,
  summary,
  userName
}: ShareActionsProps) {
  const { t } = useUiPreferences();
  const [status, setStatus] = useState("");

  const fallbackCopy = (value: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  };

  const buildShareText = () => {
    const mainPageUrl = new URL("/", window.location.origin).toString();
    const safeUserName = userName.trim() || t("사용자", "User");

    return [
      `${safeUserName} 님의 따끈따끈한 결과가 도착했어요 !`,
      "",
      `${safeUserName}님은 ${dessertName} ${summary}`,
      "",
      "내 연애 무드는 어떤 디저트일까?",
      "나의 연애 무드를 지금 바로 테스트 해보세요 🍞",
      "",
      mainPageUrl
    ].join("\n");
  };

  const createShareImageBlob = async () => {
    const exportNode = cardExportRef.current;
    if (!exportNode) {
      return null;
    }

    const cardDataUrl = await toPng(exportNode, {
      backgroundColor: "#fffdf9",
      cacheBust: true,
      pixelRatio: 2
    });

    const mainPageUrl = new URL("/", window.location.origin).toString();
    const qrDataUrl = await QRCode.toDataURL(mainPageUrl, {
      width: 180,
      margin: 1,
      color: {
        dark: "#3f281c",
        light: "#ffffffff"
      }
    });

    const [cardImage, qrImage] = await Promise.all([loadImage(cardDataUrl), loadImage(qrDataUrl)]);

    const canvas = document.createElement("canvas");
    canvas.width = cardImage.width;
    canvas.height = cardImage.height;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return null;
    }

    ctx.drawImage(cardImage, 0, 0);

    const qrBoxSize = Math.max(118, Math.round(cardImage.width * 0.18));
    const qrInset = Math.max(20, Math.round(cardImage.width * 0.045));
    const qrPadding = 10;
    const qrSize = qrBoxSize - qrPadding * 2;

    ctx.fillStyle = "rgba(255, 255, 255, 0.96)";
    ctx.beginPath();
    ctx.roundRect(cardImage.width - qrInset - qrBoxSize, qrInset, qrBoxSize, qrBoxSize, 24);
    ctx.fill();
    ctx.drawImage(qrImage, cardImage.width - qrInset - qrBoxSize + qrPadding, qrInset + qrPadding, qrSize, qrSize);

    return await new Promise<Blob | null>((resolve) => {
      canvas.toBlob((blob) => resolve(blob), "image/png");
    });
  };

  const handleTextShare = async () => {
    const shareText = buildShareText();

    try {
      if (navigator.share) {
        const payload = {
          title: `${userName || t("나", "Me")}의 결과`,
          text: shareText
        };
        if (!navigator.canShare || navigator.canShare(payload)) {
          await navigator.share(payload);
          setStatus(t("공유 창을 열었어요.", "Opened the share sheet."));
          return;
        }
      }

      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(shareText);
        setStatus(t("공유 문구를 복사했어요.", "Copied the share text."));
        return;
      }

      if (fallbackCopy(shareText)) {
        setStatus(t("공유 문구를 복사했어요.", "Copied the share text."));
        return;
      }
    } catch {
      // fall through
    }

    window.prompt(t("아래 내용을 복사해 공유해 주세요.", "Copy the text below to share."), shareText);
    setStatus(t("직접 복사할 수 있는 창을 열었어요.", "Opened a manual copy dialog."));
  };

  const handleImageDownload = async () => {
    const blob = await createShareImageBlob();
    if (!blob) {
      setStatus(t("이미지를 만들지 못했어요.", "Could not create the image."));
      return;
    }

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${mbti.toLowerCase()}-${rarityLabel}-dessert-card.png`;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setStatus(t("결과 카드를 이미지로 저장했어요.", "Saved the result card as an image."));
  };

  return (
    <div className="share-actions share-actions--figma">
      <div className="share-actions__labels">
        <span>{t("나의 결과 저장하기 🖼️", "Save my result 🖼️")}</span>
        <span>{t("나의 결과 공유하기 🔗", "Share my result 🔗")}</span>
      </div>
      <div className="share-buttons share-buttons--figma">
        <button
          className="result-action-button result-action-button--secondary"
          disabled={!imageSrc}
          onClick={handleImageDownload}
          type="button"
        >
          {t("이미지 저장", "Save Image")}
        </button>
        <button className="result-action-button" onClick={handleTextShare} type="button">
          {t("공유하기", "Share")}
        </button>
      </div>
      <p className="share-status" role="status">
        {status}
      </p>
    </div>
  );
}
