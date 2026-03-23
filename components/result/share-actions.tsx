"use client";

import { useState } from "react";

type ShareActionsProps = {
  title: string;
  text: string;
};

export function ShareActions({ title, text }: ShareActionsProps) {
  const [status, setStatus] = useState("");

  const handleShare = async () => {
    const shareUrl = window.location.href;

    if (navigator.share) {
      await navigator.share({ title, text, url: shareUrl });
      setStatus("공유 시트가 열렸어요.");
      return;
    }

    await navigator.clipboard.writeText(`${title}\n${text}\n${shareUrl}`);
    setStatus("링크와 문구를 복사했어요.");
  };

  return (
    <div className="share-actions">
      <button className="primary-button" onClick={handleShare} type="button">
        결과 공유하기
      </button>
      <p className="share-status" role="status">
        {status || "카카오톡 공유 전 단계로, 기본 공유 시트 또는 복사를 제공해요."}
      </p>
    </div>
  );
}
