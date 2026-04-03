"use client";

import { useUiPreferences } from "@/components/providers/ui-preferences";

export function LandingFooter() {
  const { t } = useUiPreferences();

  return (
    <footer className="landing-footer landing-footer--figma">
      <p className="landing-footer__brand">Honey Kim Lab</p>
      <p className="landing-footer__copy">
        {t(
          "© 2026 Honey Kim Lab · 내 연애 무드는 어떤 디저트일까?",
          "© 2026 Honey Kim Lab · Which dessert matches my romance mood?"
        )}
      </p>
      <p className="landing-footer__tag">Baked for Your Heart</p>
    </footer>
  );
}
