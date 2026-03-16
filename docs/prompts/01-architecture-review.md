---
title: Cross-Validation Prompt — Architecture & Roadmap Review
description: Prompt for Gemini and ChatGPT to review our project plan before development starts
created: 2026-03-16
status: ready
---

# Architecture & Roadmap Review Prompt

Copy this entire prompt (including the documents below) and send to:
1. **Gemini** (latest model, long context)
2. **ChatGPT** (GPT-4.5 or latest)

Collect their feedback, bring it back for analysis.

---

## THE PROMPT

```
You are a senior frontend architect and product consultant reviewing a project plan before development begins. Your job is to find:

1. **Contradictions** — where the vision says one thing but the architecture/roadmap implies another
2. **Missing pieces** — critical things not addressed that will cause problems during development
3. **Risky assumptions** — things taken for granted that might not work
4. **Scope creep signals** — features described as "simple" that are actually complex
5. **Better alternatives** — if you know a significantly better tool or approach for any decision, say so
6. **Mobile UX concerns** — 80%+ of users will be on mobile via Telegram links
7. **Timeline reality check** — is the roadmap achievable in "a few weeks" for a solo vibecoder + AI assistant?

Be honest and direct. Don't say "looks good" — find problems. If something IS good, say why briefly and move on.

Context: This is being built by a vibecoder (non-programmer who builds products with AI tools, primarily Claude Code). She has 4 months of experience building with AI. The AI assistant writes all code. The vibecoder handles product decisions, design direction, and copywriting.

Here are the project documents to review:

---

DOCUMENT 1: VISION
[paste contents of docs/VISION.md here]

---

DOCUMENT 2: ROADMAP
[paste contents of docs/ROADMAP.md here]

---

DOCUMENT 3: TECH DECISIONS (ADRs)

ADR 0001 — Stack: Next.js on Vercel
- Chose over Vite+React for developer convenience and built-in API routes
- No SSR needed (non-indexed site), but using Next.js anyway for DX
- KIT may need to self-host later (Node.js server or Docker)

ADR 0002 — GSAP ScrollTrigger for horizontal scroll
- Chose over Framer Motion for better scroll-driven animation control
- Vertical scroll → horizontal movement transformation (pin+scrub pattern)
- Framer Motion kept as Plan B and for micro-animations
- Must work as swipe on mobile (80%+ traffic)

ADR 0003 — Vercel Analytics + Umami
- Vercel Analytics for pageviews and Web Vitals (zero config, free)
- Umami (self-hosted on Railway) for custom events: constructor steps, product views, scroll depth
- Per-link attribution via URL parameters for client segments
- Both privacy-friendly, no cookie banners

ADR 0004 — Figma MCP for design system extraction
- 138-slide brandbook in Figma → extract design tokens via Figma MCP server
- Output: Tailwind config + CSS variables
- Fallback: manual extraction or Tokens Studio plugin

---

DOCUMENT 4: KEY CONSTRAINTS
- Non-indexed website (norobots, possibly token-gated)
- 150K client base, distributed via direct Telegram links
- Some products are in legal gray zone (crypto exchange in Ukraine) — can't be on public indexed sites
- Brandbook exists (professional, 138 slides) but has never been properly applied to digital
- Copywriting is weak across all KIT channels — we're writing from scratch
- No rate API guaranteed — calculator components must work with mock data
- Telegram CTA must pass constructor data to manager (serverless function)

---

Please structure your review as:
1. Critical issues (must fix before starting)
2. Important concerns (address during development)
3. Suggestions (nice to have, not blocking)
4. What's actually good (brief)
```

## What to paste

You need to include the full text of these files with the prompt:
1. `docs/VISION.md` — paste in DOCUMENT 1 section
2. `docs/ROADMAP.md` — paste in DOCUMENT 2 section

The ADRs and constraints are already summarized in the prompt.
