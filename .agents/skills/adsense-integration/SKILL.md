---
name: adsense-integration
description: Google AdSense integration for web apps: script placement, reusable ad components, safe result-page placement, CSP/security checks, and validation of monetization-friendly UI. Use when adding, refactoring, or validating AdSense script loading, ad units, page placement, or client-side rendering behavior.
---

# AdSense Integration

## Overview

Use this skill to add Google AdSense in a low-risk, reusable way that preserves UX and keeps the integration easy to maintain.

## Workflow

1. Detect the framework and routing model before editing anything.
2. Add any required site-wide AdSense script loading in the app's canonical layout or head entry point.
3. Create a reusable ad component for page-level units instead of scattering raw ad code across pages.
4. Place ads on result pages, help pages, article-like pages, or other secondary content pages.
5. Keep ads out of the active questionnaire flow, splash screens, loading states, and primary interaction screens.
6. Check hydration, client-only rendering, layout stability, and any CSP or security headers that could block ad loading.

## Integration Rules

- Prefer a single reusable component or helper for ad units.
- Keep the integration isolated from core product logic.
- Preserve layout space so ads do not cause major shifts.
- Avoid placing ads above the primary title if that hurts the first impression.
- Do not insert ads between active questions unless the user explicitly asks for that.
- Use obvious placeholders when publisher IDs or slot IDs are missing.
- Verify that ad domains, scripts, and inline requirements fit the app's CSP before shipping.

## Implementation Notes

- For Next.js, keep site-wide loading centralized in the app layout or head pattern already used by the repo.
- For React SPAs, add a single app-level setup point and render ad units through reusable components.
- Render client-only ad code carefully to avoid hydration mismatches.
- Favor result-page placement on personality-test style apps because it is less intrusive and usually monetizes better.

## Manual Follow-Up

- Replace placeholder publisher IDs and slot IDs with real AdSense credentials.
- Confirm which pages are approved for ads.
- Re-test mobile layout and page stability after enabling real ads.
- Re-check CSP or security headers if ads do not load.
