---
title: Changelog
description: All notable changes to the KIT Amazing Presentation project
created: 2026-03-16
status: active
---

# Changelog

All notable changes to this project are documented here.
Format based on [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]

### 2026-03-16 — Session 1: Foundation & Planning

#### Added
- Project vision document (`docs/VISION.md`) — full braindump structured
- Technology research (`docs/RESEARCH.md`) — Figma MCP, Pencil.dev, v0.dev, GSAP, analytics, Telegram integration
- Project documentation structure — README, CHANGELOG, HANDOFF, ADR directory
- Playbook file at `~/DATA/playbooks/web-presentations-playbook.md`
- CLAUDE.md with project rules (playbook, auto-research, documentation, cross-validation)
- Pre-commit hook for playbook reminders
- Roadmap (`docs/ROADMAP.md`) with phased milestones

#### Decided
- Stack: Next.js + Vercel
- Animations: GSAP ScrollTrigger (primary), Framer Motion (micro-animations)
- Analytics: Vercel Analytics + Umami
- Design system: extract from Figma brandbook via Figma MCP
- Prototyping: v0.dev (free), Pencil.dev (experiment), AI Studio
- No SEO/indexing during development; plan for noindex in production

### 2026-03-17 — Session 1 continued: Cross-validation & Scope Revision

#### Added
- Cross-validation prompt and reviews from Gemini and ChatGPT (`docs/prompts/`)
- Context routing table in CLAUDE.md (lifecycle-split architecture)
- GitHub repo: https://github.com/flotincneedle/kyt-amazing-presentation

#### Changed
- **Major scope revision:** Constructor, horizontal scroll, rule engine, dynamic pages → moved to post-MVP
- MVP redefined as: beautiful product catalog + individual product pages + CTA + access control
- Roadmap completely revised with new phase structure
- VISION.md open questions updated (many resolved)

#### Decided
- Access control (token/PIN) mandatory from day one (both LLMs flagged this)
- GSAP horizontal scroll only on desktop, never in Telegram WebView
- Constructor logic requires JSON rule engine spec before any code (post-MVP)
- URL state for constructor data (post-MVP)
- Next session: PRD with high reasoning, page-by-page brainstorm
