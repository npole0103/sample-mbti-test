import type { ReactNode } from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { LandingCtaPanel } from "@/components/landing/landing-cta-panel";
import { LandingHeader } from "@/components/landing/landing-header";
import { UiPreferencesProvider } from "@/components/providers/ui-preferences";
import { QuestionCard } from "@/components/test/question-card";
import { questions } from "@/data/questions";

function renderWithProvider(node: ReactNode) {
  return render(<UiPreferencesProvider>{node}</UiPreferencesProvider>);
}

afterEach(() => {
  cleanup();
});

describe("button QA coverage", () => {
  it("wires the landing CTA buttons to the start handler", () => {
    const handleStart = vi.fn();

    renderWithProvider(
      <>
        <LandingHeader onStart={handleStart} />
        <LandingCtaPanel onStart={handleStart} />
      </>
    );

    fireEvent.click(screen.getByRole("button", { name: /^시작하기$/ }));
    fireEvent.click(screen.getByRole("button", { name: /^테스트 시작하기$/ }));

    expect(handleStart).toHaveBeenCalledTimes(2);
  });

  it("keeps landing CTA buttons touch-friendly", () => {
    const handleStart = vi.fn();

    renderWithProvider(
      <>
        <LandingHeader onStart={handleStart} />
        <LandingCtaPanel onStart={handleStart} />
      </>
    );

    const topCta = screen.getByRole("button", { name: /^시작하기$/ });
    const mainCta = screen.getByRole("button", { name: /^테스트 시작하기$/ });

    fireEvent.touchStart(topCta);
    fireEvent.touchStart(mainCta);
    fireEvent.click(topCta);
    fireEvent.click(mainCta);

    expect(topCta).toHaveAttribute("type", "button");
    expect(mainCta).toHaveAttribute("type", "button");
    expect(handleStart).toHaveBeenCalledTimes(2);
  });

  it("fires a question choice only once even if multiple input events occur", () => {
    const handleSelect = vi.fn();

    render(<QuestionCard onSelect={handleSelect} question={questions[0]} />);

    const optionButton = screen.getByRole("button", { name: /A/i });
    fireEvent.pointerUp(optionButton);
    fireEvent.click(optionButton);

    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(handleSelect).toHaveBeenCalledWith(questions[0].options[0].trait);
  });

  it("keeps question buttons inert while disabled", () => {
    const handleSelect = vi.fn();

    render(<QuestionCard disabled onSelect={handleSelect} question={questions[0]} />);

    const optionButton = screen.getByRole("button", { name: /A/i });
    fireEvent.pointerUp(optionButton);
    fireEvent.click(optionButton);

    expect(handleSelect).not.toHaveBeenCalled();
  });
});
