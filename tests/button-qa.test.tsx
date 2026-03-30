import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { LandingHero } from "@/components/landing/landing-hero";
import { QuestionCard } from "@/components/test/question-card";
import { questions } from "@/data/questions";

afterEach(() => {
  window.location.hash = "";
  cleanup();
});

describe("button QA coverage", () => {
  it("wires the landing CTA links to the modal and test entry points", () => {
    render(<LandingHero />);

    const ctaLinks = screen.getAllByRole("link", { name: /^시작하기$/ });
    expect(ctaLinks[0]).toHaveAttribute("href", "#start-modal");
    expect(screen.getByRole("link", { name: /^테스트 시작하기$/ })).toHaveAttribute("href", "#start-modal");
    expect(ctaLinks[1]).toHaveAttribute("href", "/test");
    expect(screen.getByRole("link", { name: /나중에 하기/i })).toHaveAttribute("href", "#");
  });

  it("keeps landing CTA links touch-friendly", () => {
    render(<LandingHero />);

    const topCta = screen.getAllByRole("link", { name: /^시작하기$/ })[0];
    const closeLink = screen.getByRole("link", { name: /나중에 하기/i });

    fireEvent.touchStart(topCta);
    fireEvent.touchStart(closeLink);

    expect(topCta).toHaveAttribute("href", "#start-modal");
    expect(closeLink).toHaveAttribute("href", "#");
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
