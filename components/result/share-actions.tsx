"use client";

import { useState } from "react";
import QRCode from "qrcode";

import { useUiPreferences } from "@/components/providers/ui-preferences";

type ShareActionsProps = {
  title: string;
  text: string;
  rarityLabel: string;
};

export function ShareActions({ title, text, rarityLabel }: ShareActionsProps) {
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

  const createShareImageBlob = async () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1350;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return null;
    }

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#fff8ef");
    gradient.addColorStop(1, "#f7ead8");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#fffdf8";
    ctx.strokeStyle = "rgba(95, 63, 42, 0.12)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(72, 84, 936, 1182, 40);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#c67a47";
    ctx.font = "700 30px Pretendard, Apple SD Gothic Neo, sans-serif";
    ctx.fillText("Dessert Mood Lab", 132, 170);

    ctx.fillStyle = "#3f281c";
    ctx.font = "700 66px Pretendard, Apple SD Gothic Neo, sans-serif";
    ctx.fillText(title, 132, 286, 720);

    ctx.fillStyle = "#775b49";
    ctx.font = "500 34px Pretendard, Apple SD Gothic Neo, sans-serif";
    ctx.fillText(text, 132, 380, 760);

    ctx.fillStyle = "#fff8f1";
    ctx.beginPath();
    ctx.roundRect(132, 444, 188, 54, 27);
    ctx.fill();
    ctx.fillStyle = "#c67a47";
    ctx.font = "700 26px Pretendard, Apple SD Gothic Neo, sans-serif";
    ctx.fillText(rarityLabel, 176, 479);

    const mainPageUrl = new URL("/", window.location.origin).toString();

    try {
      const qrDataUrl = await QRCode.toDataURL(mainPageUrl, {
        width: 220,
        margin: 1,
        color: {
          dark: "#3f281c",
          light: "#ffffffff"
        }
      });
      const qrImage = new Image();
      await new Promise<void>((resolve, reject) => {
        qrImage.onload = () => resolve();
        qrImage.onerror = () => reject(new Error("Failed to load QR"));
        qrImage.src = qrDataUrl;
      });

      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.roundRect(718, 928, 232, 232, 24);
      ctx.fill();
      ctx.drawImage(qrImage, 724, 934, 220, 220);
    } catch {
      // QR generation is optional
    }

    return await new Promise<Blob | null>((resolve) => {
      canvas.toBlob((blob) => resolve(blob), "image/png");
    });
  };

  const handleTextShare = async () => {
    const shareUrl = window.location.href;
    const shareText = `${title}\n${text}\n${shareUrl}`;

    try {
      if (navigator.share) {
        const payload = { title, text, url: shareUrl };
        if (!navigator.canShare || navigator.canShare(payload)) {
          await navigator.share(payload);
          setStatus(t("공유 창을 열었어요.", "Opened the share sheet."));
          return;
        }
      }

      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(shareText);
        setStatus(t("결과 문구를 복사했어요.", "Copied the result text."));
        return;
      }

      if (fallbackCopy(shareText)) {
        setStatus(t("결과 문구를 복사했어요.", "Copied the result text."));
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
    link.download = "dessert-mood-result.png";
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setStatus(t("결과 카드를 이미지로 저장했어요.", "Saved the result card as an image."));
  };

  return (
    <div className="share-actions share-actions--figma">
      <div className="share-actions__labels">
        <span>{t("나의 결과 저장하기", "Save my result")}</span>
        <span>{t("나의 결과 공유하기", "Share my result")}</span>
      </div>
      <div className="share-buttons share-buttons--figma">
        <button className="result-action-button result-action-button--secondary" onClick={handleImageDownload} type="button">
          {t("이미지 저장", "Save Image")}
        </button>
        <button className="result-action-button" onClick={handleTextShare} type="button">
          {t("결과 공유하기", "Share Result")}
        </button>
      </div>
      <p className="share-status" role="status">
        {status}
      </p>
    </div>
  );
}
