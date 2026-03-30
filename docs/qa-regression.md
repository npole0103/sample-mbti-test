# QA Regression Guide

This project keeps the release gate simple:

Run these commands in order from the project root:

```powershell
& '.\.tools\node-v20.19.4-win-x64\node.exe' '.\.tools\node-v20.19.4-win-x64\node_modules\npm\bin\npm-cli.js' run lint
& '.\.tools\node-v20.19.4-win-x64\node.exe' '.\.tools\node-v20.19.4-win-x64\node_modules\npm\bin\npm-cli.js' run typecheck
& '.\.tools\node-v20.19.4-win-x64\node.exe' '.\.tools\node-v20.19.4-win-x64\node_modules\npm\bin\npm-cli.js' run test
& '.\.tools\node-v20.19.4-win-x64\node.exe' '.\.tools\node-v20.19.4-win-x64\node_modules\npm\bin\npm-cli.js' run build
```

## Black-box checks

Run `npm run dev`, then verify these user flows in a browser.

1. Open `/` and confirm the landing page title, intro copy, and primary CTA render.
2. Start the test from `/test` and confirm:
   - progress shows `1 / 24`
   - one question and two answer buttons render
   - no ad unit appears during the questionnaire flow
3. Answer all 24 questions and confirm a result page opens at `/result/[slug]`.
4. On the result page confirm:
   - the result name, summary, strengths, cautions, and CTA buttons render
   - share buttons are visible
   - the page title changes per result
5. Open an invalid result URL such as `/result/not-a-real-slug` and confirm the not-found page renders.
6. Repeat the main flow in a mobile viewport around `390x844`.

## White-box checks

Review these files when scoring or result routing changes:

- `lib/scoring.ts`
- `data/questions.ts`
- `data/results.ts`
- `tests/scoring.test.ts`
- `app/result/[slug]/page.tsx`

Key expectations:

1. There are always 24 questions.
2. There are always 16 result profiles.
3. Scoring stays in pure functions outside UI components.
4. Invalid result slugs must fall back to `notFound()`.
5. Metadata should use the deployed site URL, not an example domain.
6. Ads must stay off the questionnaire flow.

## Environment notes

- `NEXT_PUBLIC_SITE_URL` can be set to the production domain for stable canonical and Open Graph URLs.
- Without that variable, the app falls back to Vercel-provided URLs, then local dev `http://127.0.0.1:3000`.
