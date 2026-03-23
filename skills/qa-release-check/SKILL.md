---
name: qa-release-check
description: Use this skill before shipping or merging a web app change in this project. Trigger for release-readiness checks, lint/type/test/build validation, metadata review, placeholder detection, ad-placement review, and risk summarization. Do not use it for early prototyping or incomplete exploratory work.
---

# QA Release Check

## Purpose

Run a practical release-readiness check before deployment, merge, or handoff.

## Use this skill when

- A feature looks complete and needs final validation
- Preparing to deploy a web app
- Preparing to merge a feature branch
- Reviewing whether a project is release-ready
- Asking for a structured QA checklist

## Do not use this skill when

- The task is still exploratory or incomplete
- The user only wants one small code edit
- The repo is intentionally broken during a spike
- The task is unrelated to release confidence

## Core checks

The goal is to surface release blockers quickly and summarize risk.

### Code health

- Run lint
- Run typecheck if the project supports it
- Run tests if available
- Run build

### Functional confidence

- Confirm key routes render
- Confirm no obvious placeholder text remains
- Confirm no mock IDs, demo values, or TODO strings leak to production pages
- Confirm environment-variable expectations are documented

### Product quality

- Confirm page metadata exists where appropriate
- Confirm result pages and key landing pages have meaningful titles and descriptions
- Confirm error states are not obviously broken
- Confirm mobile layout is not obviously degraded

### Monetization-specific checks

- Verify ads appear only on intended pages
- Verify ads do not cover the core CTA or result summary
- Verify the questionnaire flow remains clean
- Verify ad placeholders or IDs are clearly marked if still pending

### Operational checks

- Summarize any required environment variables
- Summarize any manual deployment steps
- Summarize known risks
- Identify blockers versus non-blockers

## Recommended workflow

1. Inspect package scripts and project conventions.
2. Run the highest-signal validation commands available.
3. Review changed files and likely user-facing surfaces.
4. Search for placeholders:
   - TODO
   - FIXME
   - lorem
   - test-id-like content
   - fake publisher IDs or demo ad slots
5. Review SEO and metadata basics.
6. Review monetization placement if ads exist.
7. Produce a concise release report.

## Output format

Always structure the result like this:

## Release status
- Ready / Ready with caveats / Not ready

## Checks run
- command and result

## Blockers
- list of blockers

## Risks
- list of non-blocking concerns

## Manual follow-ups
- env vars
- credentials
- deploy notes
- monitoring notes

## Changed files reviewed
- short file list or grouped summary

## Rules

- Prefer evidence over guesses.
- If a command cannot run, say why clearly.
- Distinguish blockers from nice-to-haves.
- Keep the final report short enough to act on quickly.
- For frontend products, mobile UX and broken layout are release concerns, not optional polish.

## Special guidance for a personality-test site

Pay extra attention to:

- scoring still returns valid result types
- result pages render correctly
- share links or route params do not break results
- ads do not interrupt answering flow
- analytics/ad placeholders are not mistaken for completed production setup
