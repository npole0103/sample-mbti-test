"use client";

import { useState } from "react";

import { DessertMarquee } from "@/components/landing/dessert-marquee";
import { LandingCtaPanel } from "@/components/landing/landing-cta-panel";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingHero } from "@/components/landing/landing-hero";
import { StartModal } from "@/components/landing/start-modal";

export function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="page-shell landing-screen">
      <LandingHeader onStart={() => setIsModalOpen(true)} />
      <LandingHero />
      <DessertMarquee />
      <LandingCtaPanel onStart={() => setIsModalOpen(true)} />
      <LandingFooter />
      <StartModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
