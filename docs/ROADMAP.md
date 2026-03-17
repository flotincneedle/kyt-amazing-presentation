---
title: Roadmap
description: Phased roadmap for KIT Amazing Presentation — revised after cross-validation
created: 2026-03-16
updated: 2026-03-17
status: active
---

# Roadmap

Principle: each phase produces something shippable. No phase takes more than a few days. If stuck >2 hours — rethink approach, don't push through.

**Major revision (2026-03-17):** Scope reduced after Gemini + ChatGPT cross-validation. Constructor, horizontal scroll, and dynamic page generation moved to Phase 2 (post-MVP). MVP is a beautiful product catalog with CTA.

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
- [ ] Figma MCP connected (token ready, needs setup)

**Milestone:** Can open the project and know exactly what to do next. ✅

---

## Phase 0.5: PRD + Design System Prep ← NEXT
**Goal:** Detailed PRD for every page, design system extracted from brandbook.

Pipeline (from designer advice):
1. Connect Figma MCP → extract design tokens from brandbook
2. PRD session with high reasoning — brainstorm every page in detail
3. Prototype key pages in Pencil.dev → visual reference
4. Feed visuals + PRD to Claude Code → build

- [ ] Connect Figma MCP, extract design system
- [ ] PRD: brainstorm + document every page (hero, product catalog, individual product pages, compound product pages, CTA)
- [ ] Pencil.dev prototyping experiment
- [ ] Finalize ARCHITECTURE.md based on PRD
- [ ] Update this roadmap with detailed phase breakdown

**Milestone:** PRD describes every screen, every component, every copy block. Design tokens in code.

---

## MVP Phases (to be detailed after PRD)

### Phase 1: Design System
Brandbook → code. Components ready to use.

### Phase 2: Hero + Company Intro
One polished section live on Vercel.

### Phase 3: Product Catalog
All 6 products presented as cards with progressive disclosure.

### Phase 4: Individual Product Pages (6 pages)
One page per simple product — detailed but concise.

### Phase 5: Compound Product Pages (1-2 pages)
Manually composed examples of complex product chains.

### Phase 6: Access Control + CTA + Analytics
- Token/PIN gate (gray-zone products require it)
- CTA → Telegram with prefilled message
- Vercel Analytics

### Phase 7: Polish + Ship
Mobile polish, copywriting review, performance, deploy to production.

---

## Post-MVP (Phase 2 features)
- Interactive constructor (quiz/widget)
- Horizontal scroll timeline ("money loves movement")
- Rule engine for product chain mapping
- Dynamic page generation from constructor input
- Serverless Telegram integration with structured data
- Umami custom event tracking
- Rate API integration with calculators
- AI chatbot widget
- Sales manager UI for custom page generation

---

## Progress Tracking

| Phase | Status | Started | Completed |
|-------|--------|---------|-----------|
| 0. Foundation | ✅ Done | 2026-03-16 | 2026-03-17 |
| 0.5. PRD + Design | ⬜ Next | — | — |
| 1. Design System | ⬜ Not started | — | — |
| 2. Hero | ⬜ Not started | — | — |
| 3. Product Catalog | ⬜ Not started | — | — |
| 4. Product Pages | ⬜ Not started | — | — |
| 5. Compound Pages | ⬜ Not started | — | — |
| 6. Access + CTA + Analytics | ⬜ Not started | — | — |
| 7. Polish + Ship | ⬜ Not started | — | — |
