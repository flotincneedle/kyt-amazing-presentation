---
title: Roadmap
description: Phased roadmap for KIT Amazing Presentation — revised after PRD session
created: 2026-03-16
updated: 2026-03-17
status: active
---

# Roadmap

Principle: each phase produces something shippable. No phase takes more than a few days. If stuck >2 hours — rethink approach, don't push through.

**Revision 2 (2026-03-17):** PRD complete. Detailed phases below. Compound products moved from separate pages to a block on main page. Product pages are iterative — build one (Перекази UA), look at it, adapt the rest.

---

## Phase 0: Foundation ✅
**Goal:** Know what we're building, have all info and infrastructure ready.

- [x] Vision document with full requirements
- [x] Tech stack decisions
- [x] Tool research (Figma MCP, animations, analytics, Telegram)
- [x] Project structure, documentation, playbook system
- [x] Roadmap
- [x] Cross-validate architecture with Gemini + ChatGPT
- [x] Scope revision based on feedback

**Milestone:** Can open the project and know exactly what to do next. ✅

---

## Phase 0.5: PRD + Design System Prep ← IN PROGRESS
**Goal:** Detailed PRD for every page, design system extracted from brandbook.

- [x] PRD: brainstorm + document every page
- [ ] Extract design tokens from brandbook (PDF export + Figma MCP dual approach)
- [ ] Pencil.dev prototyping experiment (optional)
- [ ] Write ARCHITECTURE.md based on PRD
- [ ] Cross-validate PRD with Gemini + ChatGPT

**Milestone:** PRD describes every screen. Design tokens ready for code.

---

## Phase 1: Project Setup + Design System
**Goal:** Next.js project initialized, design tokens in code, base components ready.

- [ ] Init Next.js project on Vercel
- [ ] Tailwind config from brandbook tokens (colors, fonts PP Pangram Sans, spacing)
- [ ] Base components: Button, Card, Typography, Layout, Container
- [ ] PIN gate component (client-side, hardcoded PIN for MVP)

**Milestone:** Project runs on Vercel with KIT design system. PIN gate works.

---

## Phase 2: Main Page — Hero
**Goal:** Hero section live with conveyor animation.

- [ ] Hero layout: headline + stats + conveyor area
- [ ] Conveyor animation: incoming requests → KIT pill → outgoing results
- [ ] Brand swirl element (коло + лінія from brandbook)
- [ ] Mobile adaptation (simplified conveyor for Telegram WebView)
- [ ] Minimal header (logo + burger menu)
- [ ] Deploy to Vercel — first visible result

**Milestone:** Open the link, see PIN → enter → see animated hero. Looks like KIT.

---

## Phase 3: Main Page — Bento Grid + Compound + CTA
**Goal:** Full main page with product catalog.

- [ ] Bridge phrase block
- [ ] Bento Grid: 6 product cards with fly-in animation (adapted from Sati-site)
- [ ] Card animation: title on fly-in → subtitle + graphic fade in after landing
- [ ] Compound block: headline + 2-3 scenarios + 1 expanded case
- [ ] CTA block: Telegram prefilled link
- [ ] Footer: logo + copyright + Made by Unicorn Magic
- [ ] Mobile grid layout (responsive bento)

**Milestone:** Complete main page. User can scroll through hero → products → compound → CTA.

---

## Phase 4: First Product Page — Перекази по Україні
**Goal:** One product page as prototype. Build, look at it, iterate.

- [ ] Product page template (flexible blocks)
- [ ] Page: Перекази по Україні (killer features, details, CTA)
- [ ] Navigation: card click → product page, back → main
- [ ] Visual review with Sati → iterate on structure
- [ ] Decide template adjustments for remaining products

**Milestone:** Click on "Перекази по Україні" card → see product page → click CTA → Telegram opens.

---

## Phase 5: Remaining Product Pages (5 pages)
**Goal:** All products have pages, adapted from prototype learnings.

- [ ] Валютообмін (simplest — possibly one screen)
- [ ] Криптообмін (needs "як це працює" steps)
- [ ] Перекази по світу (geography details)
- [ ] Оплата інвойсів (business focus, China, needs steps)
- [ ] Золото (simple, physical gold focus)

**Milestone:** All 6 products clickable from bento grid with full pages.

---

## Phase 6: Access Control + Analytics + Polish
**Goal:** Production-ready.

- [ ] PIN gate final (real PIN from KIT)
- [ ] Switch test Telegram chat to KIT production chat
- [ ] Vercel Analytics integration
- [ ] Mobile polish (Telegram WebView testing)
- [ ] Copywriting review pass (all `[COPY]` blocks finalized)
- [ ] Performance check (Core Web Vitals)
- [ ] robots.txt + meta noindex

**Milestone:** Ready to send to 150K clients.

---

## Post-MVP
- Interactive constructor (quiz/widget)
- Horizontal scroll timeline ("гроші люблять рух")
- Rule engine for product chain mapping
- Dynamic page generation from constructor input
- Serverless Telegram bot integration
- Umami custom event tracking
- Rate API integration with calculators
- AI chatbot widget
- Sales manager UI for custom page generation
- URL token access variant (`?access=xyz`)

---

## Progress Tracking

| Phase | Status | Started | Completed |
|-------|--------|---------|-----------|
| 0. Foundation | ✅ Done | 2026-03-16 | 2026-03-17 |
| 0.5. PRD + Design Prep | 🔄 In progress | 2026-03-17 | — |
| 1. Setup + Design System | ⬜ Next | — | — |
| 2. Hero | ⬜ Not started | — | — |
| 3. Bento Grid + Main | ⬜ Not started | — | — |
| 4. First Product Page | ⬜ Not started | — | — |
| 5. Remaining Pages | ⬜ Not started | — | — |
| 6. Polish + Ship | ⬜ Not started | — | — |
