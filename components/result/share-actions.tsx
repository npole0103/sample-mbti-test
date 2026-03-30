"use client";

import { useState } from "react";
import QRCode from "qrcode";

type ShareActionsProps = {
  title: string;
  text: string;
  highlights: string[];
  rarityLabel: string;
};

export function ShareActions({ title, text, highlights, rarityLabel }: ShareActionsProps) {
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

  const wrapText = (
    ctx: CanvasRenderingContext2D,
    value: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number
  ) => {
    const words = value.split(" ");
    let line = "";
    let currentY = y;

    for (const word of words) {
      const testLine = line ? `${line} ${word}` : word;
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && line) {
        ctx.fillText(line, x, currentY);
        line = word;
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }

    if (line) {
      ctx.fillText(line, x, currentY);
      currentY += lineHeight;
    }

    return currentY;
  };

  const createShareImageBlob = async () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1350;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return null;
    }

    const mainPageUrl = new URL("/", window.location.origin).toString();
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#fff8ef");
    gradient.addColorStop(1, "#f7ead8");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(255, 252, 246, 0.92)";
    ctx.strokeStyle = "rgba(95, 63, 42, 0.14)";
    ctx.lineWidth = 3;
    const cardX = 70;
    const cardY = 80;
    const cardW = canvas.width - 140;
    const cardH = canvas.height - 160;
    ctx.fillRect(cardX, cardY, cardW, cardH);
    ctx.strokeRect(cardX, cardY, cardW, cardH);

    const contentX = cardX + 70;
    let currentY = cardY + 110;
    const contentWidth = cardW - 140;

    ctx.fillStyle = "#b87444";
    ctx.font = "700 30px Pretendard, Apple SD Gothic Neo, sans-serif";
    ctx.fillText("Maison Butter Atelier", contentX, currentY);
    ctx.fillStyle = "#7d5338";
    ctx.font = "700 26px Pretendard, Apple SD Gothic Neo, sans-serif";
    ctx.fillText(`${rarityLabel} 카드`, contentX + 420, currentY);

    currentY += 92;
    ctx.fillStyle = "#3e2b21";
    ctx.font = "700 68px Pretendard, Apple SD Gothic Neo, sans-serif";
    currentY = wrapText(ctx, title, contentX, currentY, contentWidth, 84);

    currentY += 18;
    ctx.fillStyle = "#5f473b";
    ctx.font = "500 40px Pretendard, Apple SD Gothic Neo, sans-serif";
    currentY = wrapText(ctx, text, contentX, currentY, contentWidth, 58);

    currentY += 38;
    ctx.fillStyle = "#b87444";
    ctx.font = "700 34px Pretendard, Apple SD Gothic Neo, sans-serif";
    ctx.fillText("Flavor Notes", contentX, currentY);

    currentY += 50;
    ctx.fillStyle = "#4a2f20";
    ctx.font = "500 34px Pretendard, Apple SD Gothic Neo, sans-serif";
    highlights.slice(0, 3).forEach((item) => {
      currentY = wrapText(ctx, `• ${item}`, contentX, currentY, contentWidth - 300, 48);
      currentY += 8;
    });

    const qrSize = 200;
    const qrX = cardX + cardW - qrSize - 70;
    const qrY = cardY + cardH - qrSize - 86;

    try {
      const qrDataUrl = await QRCode.toDataURL(mainPageUrl, {
        width: qrSize,
        margin: 1,
        color: {
          dark: "#3e2b21",
          light: "#ffffffff"
        }
      });
      const qrImage = new Image();
      const qrLoaded = await new Promise<boolean>((resolve) => {
        qrImage.onload = () => resolve(true);
        qrImage.onerror = () => resolve(false);
        qrImage.src = qrDataUrl;
      });
      if (qrLoaded) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(qrX - 10, qrY - 10, qrSize + 20, qrSize + 20);
        ctx.drawImage(qrImage, qrX, qrY, qrSize, qrSize);
      }
    } catch {
      // QR code generation is optional for the fallback share image.
    }

    ctx.fillStyle = "#7b6356";
    ctx.font = "500 24px Pretendard, Apple SD Gothic Neo, sans-serif";
    ctx.fillText("QR을 찍고 메인에서 테스트하기", qrX - 28, qrY + qrSize + 44);

    ctx.fillStyle = "#7b6356";
    ctx.font = "500 24px Pretendard, Apple SD Gothic Neo, sans-serif";
    wrapText(ctx, mainPageUrl, contentX, cardY + cardH - 84, contentWidth - 260, 34);

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
          setStatus("결과 문구 공유 창을 열었어요.");
          return;
        }
      }

      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(shareText);
        setStatus("결과 문구를 복사했어요.");
        return;
      }

      if (fallbackCopy(shareText)) {
        setStatus("결과 문구를 복사했어요.");
        return;
      }
    } catch (error) {
      const shareError = error as DOMException;
      if (shareError?.name === "AbortError") {
        setStatus("문구 공유를 취소했어요.");
        return;
      }
    }

    window.prompt("아래 내용을 복사해서 공유해 주세요.", shareText);
    setStatus("자동 복사가 어려워서 수동 복사 창을 열었어요.");
  };

  const handleImageDownload = async () => {
    try {
      const blob = await createShareImageBlob();
      if (!blob) {
        setStatus("이미지 생성에 실패했어요. 잠시 후 다시 시도해 주세요.");
        return;
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "maison-butter-result.png";
      document.body.append(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setStatus("결과 카드를 이미지로 저장했어요.");
    } catch {
      setStatus("이미지 저장 중 오류가 발생했어요.");
    }
  };

  return (
    <div className="share-actions">
      <div className="share-buttons">
        <button className="primary-button" onClick={handleTextShare} type="button">
          결과 문구 공유
        </button>
        <button className="secondary-button" onClick={handleImageDownload} type="button">
          결과 카드 이미지 저장
        </button>
      </div>
      <p className="share-status" role="status">
        {status || "문구 공유와 메인 QR이 포함된 결과 카드 저장 기능을 준비해 두었어요."}
      </p>
    </div>
  );
}
