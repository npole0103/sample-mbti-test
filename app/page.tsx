import { DessertMarquee } from "@/components/landing/dessert-marquee";
import { LandingHero } from "@/components/landing/landing-hero";

export default function HomePage() {
  return (
    <main className="page-shell">
      <LandingHero />
      <DessertMarquee />
      <footer className="landing-footer">
        <p className="landing-footer__brand">Dessert Mood Lab</p>
        <p className="landing-footer__copy">© 2026 Dessert Mood Lab · 내 연애 무드는 어떤 디저트일까?</p>
        <p className="landing-footer__tag">Baked for Your Heart</p>
      </footer>
    </main>
  );
}
