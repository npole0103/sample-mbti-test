import { FeatureGrid } from "@/components/landing/feature-grid";
import { LandingHero } from "@/components/landing/landing-hero";

export default function HomePage() {
  return (
    <main className="page-shell">
      <LandingHero />
      <FeatureGrid />
    </main>
  );
}
