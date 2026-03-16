---
title: Roadmap
description: Phased roadmap for KIT Amazing Presentation with pre-MVP milestones
created: 2026-03-16
status: active
---

# Roadmap

Principle: each phase produces something shippable. No phase takes more than a few days. If stuck >2 hours — rethink approach, don't push through.

---

## Phase 0: Foundation (current) ✅
**Goal:** Know what we're building, have all info and infrastructure ready.

- [x] Vision document with full requirements
- [x] Tech stack decisions
- [x] Tool research (Figma MCP, animations, analytics, Telegram)
- [x] Project structure, documentation, playbook system
- [x] Roadmap
- [ ] Figma MCP connected (waiting for token)
- [ ] Cross-validate architecture with Gemini + ChatGPT

**Milestone:** Can open the project and know exactly what to do next.

---

## Phase 1: Design System
**Goal:** Brandbook → code. All visual building blocks ready.

- [ ] Extract design tokens from Figma brandbook (colors, fonts, spacing, shadows)
- [ ] Generate Tailwind config with KIT design tokens
- [ ] Build base components: Button, Card, Typography, Container, Input/Select
- [ ] Document component library (Storybook or simple demo page)
- [ ] Experiment with Pencil.dev for layout prototyping (record in playbook)

**Milestone:** Can render a page that looks like KIT brand. Components reusable.

---

## Phase 2: First Page — Hero + Company Intro
**Goal:** One beautiful, on-brand section visible in the browser.

- [ ] Sati draws paper wireframe for hero section
- [ ] Build hero section with KIT branding
- [ ] Copywriting: company intro (2-3 sentences max)
- [ ] Mobile responsive
- [ ] Deploy to Vercel (non-indexed)

**Milestone:** A live URL with one polished section. First thing to show Ruslan.

---

## Phase 3: Product Cards
**Goal:** Each product explained in 1-2 sentences with a visual card.

- [ ] Copywriting for 6 core products
- [ ] Product card component (icon/illustration, name, 1-2 sentence description)
- [ ] Products grid/section on the page
- [ ] B2B vs B2C toggle or section separator

**Milestone:** All 6 products visible and understandable at a glance.

---

## Phase 4: The Constructor (Interactive Widget)
**Goal:** User selects what they have → what they need → where from → where to.

- [ ] Design constructor UX (steps, inputs, selections)
- [ ] Build step-by-step widget (individual/business → money form → location → target)
- [ ] City/country autocomplete with smart search
- [ ] "Show me how this works" button → routes to result
- [ ] Mobile-optimized (this is the core interaction)

**Milestone:** User can configure a financial request. Core interactivity works.

---

## Phase 5: Horizontal Scroll Timeline
**Goal:** "Money loves movement" — visual journey from point A to point B.

- [ ] GSAP ScrollTrigger setup for horizontal scroll
- [ ] Timeline component showing product chain (e.g., crypto → exchange → transfer → cash)
- [ ] Dynamic content based on constructor input (at least 2-3 scenarios)
- [ ] Simple product page for single products
- [ ] Compound product page for multi-step scenarios
- [ ] Mobile: horizontal swipe

**Milestone:** The "wow" moment. User sees their money moving through the system.

---

## Phase 6: CTA + Telegram Integration
**Goal:** Constructor data → Telegram manager with context.

- [ ] CTA button design and placement
- [ ] Serverless function: format constructor data → Telegram Bot API
- [ ] Manager receives structured message with client's selections
- [ ] Create or configure KIT Telegram bot

**Milestone:** Full flow works end-to-end: site → constructor → timeline → Telegram.

---

## Phase 7: Analytics + Polish
**Goal:** Track everything, polish everything.

- [ ] Vercel Analytics setup (pageviews, Web Vitals)
- [ ] Umami for custom events (constructor selections, scroll depth, clicks)
- [ ] Per-link attribution (URL params for different client segments)
- [ ] Performance optimization (mobile, Core Web Vitals)
- [ ] Cross-browser testing
- [ ] Final copywriting review

**Milestone:** Production-ready. Can be sent to 150K clients.

---

## Future (after MVP)
- Rate API integration with calculators
- AI chatbot widget (Claude API + product knowledge base)
- Sales manager UI for generating custom product pages
- Template system for any product combination
- Telegram bot for sales funnel automation

---

## Progress Tracking

| Phase | Status | Started | Completed |
|-------|--------|---------|-----------|
| 0. Foundation | ✅ In Progress | 2026-03-16 | — |
| 1. Design System | ⬜ Not started | — | — |
| 2. Hero Section | ⬜ Not started | — | — |
| 3. Product Cards | ⬜ Not started | — | — |
| 4. Constructor | ⬜ Not started | — | — |
| 5. Horizontal Scroll | ⬜ Not started | — | — |
| 6. CTA + Telegram | ⬜ Not started | — | — |
| 7. Analytics + Polish | ⬜ Not started | — | — |
