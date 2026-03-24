"use client";

import { useState } from "react";
import QRCode from "qrcode";

type ShareActionsProps = {
  title: string;
  text: string;
  highlights: string[];
};

export function ShareActions({ title, text, highlights }: ShareActionsProps) {
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

    for (let i = 0; i < words.length; i += 1) {
      const testLine = line ? `${line} ${words[i]}` : words[i];
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && line) {
        ctx.fillText(line, x, currentY);
        line = words[i];
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

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#fff7ef");
    gradient.addColorStop(1, "#f7ead9");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(255, 255, 255, 0.86)";
    ctx.strokeStyle = "rgba(95, 63, 42, 0.14)";
    ctx.lineWidth = 3;
    const cardX = 70;
    const cardY = 80;
    const cardW = canvas.width - 140;
    const cardH = canvas.height - 160;
    ctx.fillRect(cardX, cardY, cardW, cardH);
    ctx.strokeRect(cardX, cardY, cardW, cardH);

    const contentX = cardX + 70;
    let currentY = cardY + 130;
    const contentWidth = cardW - 140;

    ctx.fillStyle = "#ba6843";
    ctx.font = "700 34px Pretendard, Apple SD Gothic Neo, sans-serif";
    ctx.fillText("나는 어떤 디저트형 연애일까?", contentX, currentY);

    currentY += 96;
    ctx.fillStyle = "#3e2b21";
    ctx.font = "700 72px Pretendard, Apple SD Gothic Neo, sans-serif";
    currentY = wrapText(ctx, title, contentX, currentY, contentWidth, 88);

    currentY += 30;
    ctx.fillStyle = "#5f473b";
    ctx.font = "500 42px Pretendard, Apple SD Gothic Neo, sans-serif";
    currentY = wrapText(ctx, text, contentX, currentY, contentWidth, 62);

    currentY += 42;
    ctx.fillStyle = "#ba6843";
    ctx.font = "700 36px Pretendard, Apple SD Gothic Neo, sans-serif";
    ctx.fillText("이 유형의 특징", contentX, currentY);

    currentY += 52;
    ctx.fillStyle = "#4a2f20";
    ctx.font = "500 34px Pretendard, Apple SD Gothic Neo, sans-serif";
    highlights.slice(0, 3).forEach((item) => {
      currentY = wrapText(ctx, `• ${item}`, contentX, currentY, contentWidth - 300, 48);
      currentY += 8;
    });

    const qrSize = 200;
    const qrX = cardX + cardW - qrSize - 70;
    const qrY = cardY + cardH - qrSize - 70;
    try {
      const qrDataUrl = await QRCode.toDataURL(window.location.href, {
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
      // QR 생성에 실패해도 이미지는 계속 생성한다.
    }

    ctx.fillStyle = "#7b6356";
    ctx.font = "500 26px Pretendard, Apple SD Gothic Neo, sans-serif";
    wrapText(ctx, window.location.href, contentX, cardY + cardH - 80, contentWidth - 260, 36);

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
          setStatus("공유 시트가 열렸어요.");
          return;
        }
      }

      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(shareText);
        setStatus("링크와 문구를 복사했어요.");
        return;
      }

      if (fallbackCopy(shareText)) {
        setStatus("링크와 문구를 복사했어요.");
        return;
      }
    } catch (error) {
      const shareError = error as DOMException;
      if (shareError?.name === "AbortError") {
        setStatus("공유를 취소했어요.");
        return;
      }
    }

    window.prompt("아래 내용을 복사해 공유해 주세요.", shareText);
    setStatus("자동 복사에 실패해 수동 복사 창을 열었어요.");
  };

  const handleImageShare = async () => {
    try {
      const blob = await createShareImageBlob();
      if (!blob) {
        setStatus("이미지 생성에 실패했어요. 잠시 후 다시 시도해 주세요.");
        return;
      }

      const file = new File([blob], "dessert-love-result.png", { type: "image/png" });
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: "디저트 연애유형 결과",
          text: title,
          files: [file]
        });
        setStatus("결과 이미지를 공유했어요.");
        return;
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "dessert-love-result.png";
      document.body.append(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setStatus("이미지를 저장했어요. 갤러리에서 공유해 주세요.");
    } catch (error) {
      const shareError = error as DOMException;
      if (shareError?.name === "AbortError") {
        setStatus("이미지 공유를 취소했어요.");
        return;
      }
      setStatus("이미지 공유 중 오류가 발생했어요.");
    }
  };

  return (
    <div className="share-actions">
      <div className="share-buttons">
        <button className="primary-button" onClick={handleTextShare} type="button">
          글 공유/복사
        </button>
        <button className="secondary-button" onClick={handleImageShare} type="button">
          결과 이미지 공유
        </button>
      </div>
      <p className="share-status" role="status">
        {status || "카카오톡 공유 SDK 연계 전까지 기본 공유 시트 또는 복사를 제공합니다."}
      </p>
    </div>
  );
}
