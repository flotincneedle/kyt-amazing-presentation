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
