---
title: KIT Amazing Presentation
description: Interactive web presentation for KIT Group — all financial products, constructor widget, horizontal scroll timeline
created: 2026-03-16
status: planning
---

# KIT Amazing Presentation

Interactive web presentation for [KIT Group](https://kit.ua) — a financial services company serving Ukrainians worldwide for 20+ years.

## What This Is

A non-indexed web presentation that tells the full KIT story — all financial products, including those that can't be publicly advertised. Distributed directly to KIT's 150K client base via direct links.

**Key features:**
- Interactive product constructor (quiz/widget) — client selects what they have, what they need, where from, where to
- Horizontal scroll timeline showing how KIT assembles the solution ("Money loves movement")
- Pre-filled CTA → Telegram chat with context-aware manager
- Built-in analytics (Vercel Analytics + Umami)
- Design system extracted from KIT's professional brandbook

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + design tokens from Figma brandbook
- **Animations:** GSAP ScrollTrigger (horizontal scroll), Framer Motion (micro-animations)
- **Analytics:** Vercel Analytics + Umami (self-hosted)
- **Deployment:** Vercel (non-indexed, norobots)
- **CTA Integration:** Telegram Bot API via Vercel serverless function

## Project Structure

```
├── docs/               # All project documentation
│   ├── VISION.md       # Full project vision & requirements
│   ├── RESEARCH.md     # Tool & tech research
│   ├── ARCHITECTURE.md # Technical architecture
│   ├── ROADMAP.md      # Phased roadmap with milestones
│   ├── adr/            # Architecture Decision Records
│   └── prompts/        # Prompts for cross-validation (Gemini, ChatGPT)
├── src/                # Source code (Next.js app)
├── assets/             # Design assets, exports from Figma
├── CONTEXT.md          # Original brainstorm starting point
├── CHANGELOG.md        # All notable changes
└── HANDOFF.md          # Session handoff notes
```

## Related

- **Playbook:** `~/DATA/playbooks/web-presentations-playbook.md` — decision log for reproducible pipeline
- **Reference project:** `/Users/eternity/PROJECTS/kit-content-factory/` — v1 research, competitors, copywriting drafts
- **Brandbook:** Figma (138 slides) — connected via Figma MCP

## Getting Started

```bash
# TBD — project not yet initialized with Next.js
```
