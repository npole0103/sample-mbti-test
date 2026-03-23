---
name: mbti-scoring
description: Use this skill when implementing, refactoring, or validating personality-test or MBTI-style scoring logic in this project. Trigger for deterministic score calculation, JSON-driven question mapping, result resolution, tie-breaking, and test coverage. Do not use it for unrelated UI styling or generic form handling.
---

# MBTI Scoring

## Purpose

Implement and verify deterministic scoring logic for an MBTI-like or personality-test style service.

## Use this skill when

- Creating score calculation logic for a personality test
- Moving score logic out of UI code
- Refactoring question/answer mapping into JSON or typed data
- Adding tie-breaking rules
- Writing tests for result calculation
- Returning dimension scores and final result types

## Do not use this skill when

- The task is only UI polishing
- The task is unrelated survey storage with no scoring
- The task is static result-page copywriting
- The task is generic React state wiring without scoring logic

## Goals

- Keep scoring logic deterministic
- Keep question data separate from calculation code
- Make result resolution testable
- Keep the output easy to inspect and debug

## Preferred architecture

Separate the system into:

1. question data
2. answer-to-dimension mapping
3. score calculation utility
4. result resolution utility
5. tests

## Strong rules

- Do not bury scoring rules inside UI components.
- Prefer pure functions for calculation.
- Return both raw dimension scores and the resolved result type.
- Add explicit tie-breaking behavior.
- Keep the schema extensible enough to add or remove questions without rewriting business logic.
- Use stable key names for dimensions and result types.
- If the project has an API route or server action for scoring, keep core logic framework-independent.

## Recommended data shape

Prefer a structure similar to:

- `questions[]`
  - `id`
  - `text`
  - `options[]`
    - `id`
    - `label`
    - `dimensionEffects` or `scoreDelta`

- `resultProfiles[]`
  - `type`
  - `rules` or dimension signature
  - `title`
  - `description`

## Recommended workflow

1. Read the existing question data model.
2. Normalize dimension keys.
3. Define or refine answer mapping.
4. Build a pure scoring function.
5. Build a pure result resolution function.
6. Define tie-breaking rules explicitly.
7. Add tests for:
   - normal path
   - edge cases
   - ties
   - incomplete answers if supported
8. Return a debug-friendly payload shape.

## Example output shape

A good return shape looks like:

- `dimensionScores`
- `dominantDimensions` or `normalizedDimensions` if used
- `resultType`
- optional explanation/debug info

## Tie-breaking guidance

If no tie-breaking rule exists, choose and document one clearly:

- fixed priority order
- nearest matching profile
- deterministic alphabetical fallback
- weighted dimensions

Never leave ties ambiguous in production logic.

## Validation checklist

- Same answers always produce same result
- Questions can be edited without rewriting core scorer
- Result resolution is pure and deterministic
- UI is not responsible for business logic
- Tests cover at least one tie scenario
- Types and names are readable

## Output expectations

- Clear scorer utility
- Clear resolver utility
- Test cases
- Short summary of scoring rules
- Any unresolved product ambiguity clearly listed

## Notes for MBTI-like products

- This may be "MBTI-inspired" rather than official MBTI.
- Prefer neutral internal naming if legal or branding sensitivity matters.
- Keep marketing labels separate from core score calculation.
