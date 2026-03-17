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
[# KIT Group — Interactive Presentation: Vision Document

Source: Sati's braindump, 2026-03-16. This is the foundational document — all decisions trace back here.

---

## 1. About KIT Group

**What they do:** Financial services company for Ukrainians worldwide. 20 years on the market, ~1000 employees, ~150K client base.

**Core competency:** Moving and converting money — any form, any direction, any location. Currency exchange, crypto exchange, transfers within Ukraine, international transfers, invoice payments, precious metals trading, and complex specialized financial schemes.

**Key differentiator — the "constructor":** Any individual product (exchange, transfer, crypto, metals, invoices) can be combined into a compound product tailored to a specific client's financial goal. Client wants to give crypto in Kyiv and receive cash EUR in Barcelona? KIT assembles the chain: crypto → fiat conversion → international transfer → cash pickup. All bureaucracy on KIT's side.

**Trust & quality:** Established reputation, loyal long-term clients. Product delivery is reliable, confidential, professional. Pricing sometimes higher than competitors — but the quality and reliability justify it. This needs to be communicated, not just claimed.

**Problem areas (not our scope now, but context):**
- Sales/operator communication quality is inconsistent
- Visual identity and information channels are poorly executed despite having a professional brandbook
- Copywriting across all channels is vague, generic, lacks personality

**Regulatory situation:** KIT has a currency exchange license. However, some products (e.g., crypto exchange) operate in a legal gray zone — not explicitly prohibited, but not formally regulated under Ukrainian law. KIT cannot publicly advertise gray-zone products through open/indexed channels.

---

## 2. The Presentation — What We're Building

### Purpose
A web presentation that tells the full KIT story — ALL products, including gray-zone ones. Sent directly to the 150K client base, not indexed by search engines. This lets KIT communicate its full capabilities without regulatory exposure.

### Core UX Concept

**Section 1 — Hero / Company intro**
Brief, impactful. Who KIT is, 20 years, what they do — in the fewest possible words.

**Section 2 — The Promise (2-3 sentences max)**
We serve businesses and individuals. We convert money from any form to any other form and move it from any point to any point.

**Section 3 — Interactive Constructor / Quiz / Widget**
The heart of the presentation. User selects:
1. Individual or business?
2. What form of money do they have? (cash, bank transfer, crypto, precious metals, electronic money)
3. What form do they want?
4. Where is the money now? (city/country)
5. Where should it arrive?

Then they hit a big button: "Show me how this works"

**Section 4 — Horizontal scroll timeline (the "movement" section)**
- Symbolizes KIT's slogan: "Гроші люблять рух" (Money loves movement)
- Shows the chain of micro-services/products that assemble to fulfill the request
- Horizontal scroll = physical sense of movement from point A to point B
- User sees under-the-hood: which products combine, what happens at each step
- For simple requests (e.g., UAH transfer Kyiv → Lviv) → lands on a single-product page
- For complex requests → lands on a compound-product page showing the full chain

**Section 5 — CTA: Submit this request**
The data user entered in the constructor becomes a pre-filled request. When they click "Submit" → goes to Telegram chat with a manager. The manager already has context: what the client selected, what they want. Manager greets with specifics, not generic "How can I help you?"

### Tone & Copywriting Rules
- **No water.** Every word must carry weight and answer a real question
- **No abstractions.** "Best financial products in Ukraine" = BANNED
- **Speak to the client's actual questions.** What is this? How does it work? How long? How much?
- **Products explained in 1-2 sentences.** People aren't stupid — they know these products or can understand in two lines
- **Consistent tone** across the entire presentation
- **Brandbook fully applied** — not just colors, but the full design system turned into web components

### What the presentation is NOT
- Not a public website (no SEO, no indexing)
- Not a static brochure
- Not a generic corporate site with stock photos and buzzwords

---

## 3. The Bigger Picture — Personalization & Sales Tool

### Near-term vision (build toward, not build now)
The presentation becomes a tool for KIT's sales team:
- Sales manager uses the same constructor to configure a product page
- Gets a unique URL for that specific compound product
- Sends it to a segment of the client base (e.g., 3000 clients who use products A and B, cross-sell product C)
- The page is already perfect — copy, design, logic — no editing needed

### Far-future vision
- Template system: all product pages are composable from pre-built blocks
- Sales manager enters a few sentences → page auto-generates
- All copy, design, and logic pre-created for all possible combinations

---

## 4. Assets We Have

### From KIT
- **Brandbook** in Figma, 114 pages, professionally made, approved by founder and Ruslan (product director / Sati's partner)
- **Client base:** 150K people (distribution channel)
- **Potentially:** API for live exchange rates (may or may not be available; KIT is strict about confidentiality)

### From v1 project (`kit-content-factory`)
- **Research:** competitor analysis (20+ competitors), audience segmentation, messaging analysis
- **Copywriting:** intermediate stage — ideas and drafts exist, but no polished per-product copy
- **Creative briefs:** started but not finished
- **No UI/UX components or templates**

### Tools available
- **Claude Code** — primary development tool
- **v0.dev** — faster for prototyping UI, can export components to Claude Code (potential paid subscription)
- **Google AI Studio** — Gemini for SVG and SVG animations, Imagen for images
- **Firebase** — hosting, potentially backend
- **Vercel / Railway** — deployment options
- **Pencil.dev** — worth exploring for UI/UX development
- **EXA MCP** — research
- **Chrome DevTools MCP** — debugging, performance

---

## 5. Technical Considerations

### Must-have from day one
- **No search indexing:** robots.txt, meta noindex, potentially auth/token-gated access
- **Analytics:** track opens, time on page, what was clicked, what was viewed, per-link attribution
- **Modular architecture:** pages built from reusable components, design system extracted from brandbook
- **Telegram integration:** CTA → Telegram chat, passing user's constructor data to the manager

### Plan for but don't block on
- **Rate API integration:** Design calculator components with mock data, make API pluggable. KIT may connect it on their own server after delivery
- **Commission calculators:** Exact for simple products, approximate for complex ones (complex pricing is calculated in real-time based on current conditions)

### Ideas for growth (record, don't build yet)
- **AI chatbot on the site:** Fed with all KIT product data, pricing thresholds, commissions. Could answer client questions interactively. Reusable later for Telegram bot in the sales funnel.
- **Telegram bots** for KIT's sales/operator functions — automate the funnel, reduce human operator dependency
- **AI avatars, content cuts, other content products** — all to be pipelined

---

## 6. The Meta-Goal: Playbook as Product

This project is the first case in a larger business model:
- **Sati + AI** build products for businesses
- Every project produces a **reproducible playbook** (tools, prompts, workflows, decisions)
- The playbook itself becomes a sellable product — second time is 10x faster
- KIT is the training ground: they need many products (site, bots, content), we learn and pipeline on their cases
- Ruslan's vision: Sati creates products AND packages the process into playbooks. Both are valuable.

Playbook location: `~/DATA/playbooks/web-presentations-playbook.md`

---

## 7. Workflow: How We'll Build This

### Proposed sequence (to be refined into roadmap)
1. Extract design system from brandbook → design tokens, color palette, typography, component specs
2. Sketch page layouts on paper (Sati) → wireframes
3. Prototype key components in v0.dev or similar → iterate until solid
4. Build component library in code (Claude Code)
5. Copywriting per product — concise, direct, on-brand
6. Build the constructor/quiz widget
7. Build horizontal scroll timeline section
8. Build product pages (simple → compound)
9. Telegram integration for CTA
10. Analytics setup
11. Deploy (non-indexed, direct-link access)
12. Test with Ruslan / small group → iterate

### Open questions (see Section 8)

---

## 8. Open Questions & Gaps

Items that need answers before or during development:

### From Sati
- [ ] Paper sketches / wireframes of page layouts
- [ ] Brandbook access — how to get the Figma file contents into our workflow?
- [ ] Which products are "simple" (individual pages) vs which are compound-only?
- [ ] Full list of money forms (cash, bank, crypto, e-money, metals — anything else?)
- [ ] Full list of geographies (Ukraine only? CIS? EU? Worldwide?)
- [ ] Telegram bot setup — does KIT have an existing bot? Or new one?
- [ ] Rate API — is it available? What format? Who to ask?
- [ ] Analytics preferences — own solution (Plausible, PostHog) or Google Analytics?
- [ ] Domain / hosting — where will this live?
- [ ] Access control — just noindex, or also password/token protection?

### To research / decide together
- [ ] Tech stack for the presentation (Next.js? Astro? Plain HTML/CSS/JS?)
- [ ] Horizontal scroll implementation — which library/approach?
- [ ] Constructor widget — how complex? How many decision points?
- [ ] How to handle the "dynamic page generation" for compound products
- [ ] Mobile experience — how important? Full parity or simplified?
- [ ] Pencil.dev — worth exploring?
- [ ] v0.dev — worth the subscription for this project?
]

---

DOCUMENT 2: ROADMAP
[
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
]

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
