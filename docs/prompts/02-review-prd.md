---
title: Cross-validation prompt — PRD review
description: Prompt for Gemini and ChatGPT to review PRD before implementation
created: 2026-03-17
status: active
---

# Prompt for PRD Cross-Validation

Copy-paste everything below the line into Gemini and ChatGPT.

---

You are a senior product consultant reviewing a PRD for a closed web presentation built for a financial services company (KIT Group, Ukraine). The presentation will be sent to their 150K client base via Telegram (80%+ mobile). It includes gray-zone products (crypto) so it's PIN-gated and not indexed.

**Your task: give a brutally honest review of this PRD.** Focus on:

1. **Gaps and contradictions** — anything undefined, unclear, or contradictory
2. **Mobile UX risks** — 80% audience is mobile Telegram WebView, flag anything that will break or feel bad
3. **Scope creep signals** — anything that sounds simple in text but will take disproportionate time to implement
4. **Copywriting structure** — the PRD references wisprflow.ai pattern (big headline + small text). Is this the right approach for a financial services presentation?
5. **Missing pages or flows** — any user journey that's not covered? What happens when someone shares the link without the PIN? What about error states?
6. **The hero conveyor animation** — client requests flowing in → KIT pill → results flowing out. Is this concept clear? Will it work on mobile? Risks?
7. **Bento grid with fly-in animation** — adapted from another site. Risks of scroll-driven animation in Telegram WebView?
8. **Compound products block** — is putting it on the main page (instead of separate pages) the right call?
9. **What's missing from the open items list?**

Be direct. Don't compliment unless something is genuinely strong. Flag the top 3 things that will cause the most pain if not addressed before coding starts.

**Context:**
- Solo vibecoder building with AI tools (Claude Code primary)
- Next.js + Vercel + Tailwind + Framer Motion
- First build: main page + one product page (Перекази по Україні), then iterate
- Previous cross-validation (architecture review) caught critical issues: constructor scope creep, GSAP on mobile, security. Those were addressed — constructor moved to post-MVP, PIN gate added, scope reduced.

---

# PRD — KIT Amazing Presentation MVP

Closed web presentation for KIT Group's 150K client base. Sent via Telegram, not indexed. Shows ALL products including gray-zone (crypto). Goal: communicate KIT's full capabilities clearly and drive clients to Telegram for requests.

---

## Site Map

```
PIN Gate
  ↓
Main Page
  ├── Header (sticky, minimal)
  ├── Hero Section
  ├── Bridge Phrase
  ├── Product Catalog (Bento Grid)
  ├── Compound Block
  ├── CTA Block
  └── Footer

Product Pages (6)
  ├── Валютообмін
  ├── Криптообмін
  ├── Перекази по Україні
  ├── Перекази по світу
  ├── Оплата інвойсів (incl. China)
  └── Золото
```

---

## Copywriting Rules (global)

Pattern from wisprflow.ai reference — applies to every block on every page:

- **Big text** (2-6 words): core idea, benefit, or promise
- **Small text** (1-2 sentences): supplementary detail for those who need it
- No water, no abstractions, no generic corporate phrases
- Respect the audience — simplify the complex, don't explain the obvious
- Language: Ukrainian
- All exact copy is TBD — marked as `[COPY]` throughout this document

---

## Design System Source

Dual approach:
1. **PDF export** of Figma brandbook (~138 slides) — visual reference, reliable
2. **Figma MCP** — programmatic token extraction (colors, fonts, spacing)

Core tokens needed: color palette (HEX), PP Pangram Sans weights, spacing scale, brand elements (коло + лінія, завитушки), logo variations.

---

## Page Specifications

### 0. PIN Gate

**Purpose:** Protect gray-zone content from public access.

**UX:**
- Full-screen overlay, appears before any content loads
- Input field for PIN/token
- KIT logo above the input
- Minimal design — brand colors, clean
- On success: gate disappears, full site accessible
- On failure: error message, retry

**Technical:**
- Client-side validation for MVP (PIN hardcoded or in env variable)
- No backend auth for MVP
- Consider: URL token variant (`?access=xyz`) as future enhancement

---

### 1. Header (all pages)

**Type:** Sticky, minimal. Present on all pages including main.

**Components:**
- **Left:** KIT logo (click → main page)
- **Right:** Burger menu icon

**Burger menu contents:**
- 6 product links (Валютообмін, Криптообмін, Перекази UA, Перекази світ, Інвойси, Золото)
- Link back to main page

**Behavior:**
- Appears after PIN gate is passed
- On mobile: thin bar, doesn't eat viewport
- Transparent/blurred background, becomes solid on scroll (exact style from brandbook)

---

### 2. Hero Section (main page)

**Purpose:** First impression. Communicate KIT's core value instantly through animation, not text walls.

**Layout:**
```
┌──────────────────────────────────────┐
│            [KIT Logo area]           │
│                                      │
│     [COPY: strong headline, big]     │
│  [COPY: 20 років · 100+ · 150K+]    │
│           (small text)               │
│                                      │
│  ┌──────────────────────────────┐    │
│  │    ANIMATED CONVEYOR BELT    │    │
│  │                              │    │
│  │  "переказати 100к у Відень"  │    │
│  │  "обміняти крипту на євро" ──┼──→ [KIT PILL] ──→ "Готівка чекає"  │
│  │  "оплата в Китай"           │    │  "Переказ виконано"            │
│  │                              │    │  "Оптовий курс"               │
│  └──────────────────────────────┘    │
│                                      │
│        [brand swirl element]         │
│    (коло + лінія from brandbook)     │
└──────────────────────────────────────┘
```

**Animated conveyor — the hero's centerpiece:**
- Left: client requests flow in (running text, different phrases)
- Center: KIT "pill" element — requests enter it (transformation zone)
- Right: KIT responses flow out (results, solutions)
- Brand swirl (завитушка from brandbook) replaces wisprflow's squiggle line as the visual path
- Animation: continuous, smooth, not jarring. Embodies "гнучкість + простота" from brandbook

**Content examples (TBD — exact copy later):**

Incoming requests:
- "Хочу переказати 100к у Відень"
- "Чи можете обміняти крипту на євро в Барселоні?"
- "Відправте оплату на компанію у Китаї"
- "Потрібно купити золото"
- + more rotating examples

Outgoing results:
- "Ваша готівка чекає у відділенні"
- "Переказ успішно виконаний"
- "Порахували по оптовому курсу"
- + more rotating examples

**Headline:**
- TBD, needs excellent copywriting. Direction: something like "Всі види фінансових послуг" but much better. Short, punchy, brand-defining.
- NOT long descriptive phrases

**Stats (small text):**
- 20+ років на ринку · 100+ відділень · 150 000+ клієнтів

**Reference:** wisprflow.ai hero for animation pattern. KIT brandbook for design elements and animation principles.

**Mobile:** Conveyor animation simplifies — possibly vertical flow instead of horizontal. Must work in Telegram WebView.

---

### 3. Bridge Phrase (main page)

**Purpose:** Transition from hero to product catalog. Redirect attention downward.

**Layout:** Single line, centered, big text.

**Content:** TBD — one meaningful, strong phrase that invites exploration of products below. Not generic "explore our services".

---

### 4. Product Catalog — Bento Grid (main page)

**Purpose:** Show all 6 products as clickable cards. Each card leads to a product page.

**Layout:** Bento grid. Grid dimensions TBD based on 6 cards (likely 3×2 or asymmetric bento with varied card sizes).

**Cards (6):**

| # | Product | Subtitle (killer feature) | Notes |
|---|---------|--------------------------|-------|
| 1 | Валютообмін | e.g. "100+ відділень, від 60 хв фіксація" | Flagship, largest card? |
| 2 | Криптообмін | e.g. "Крипто ↔ фіат, конфіденційно" | Gray zone — behind PIN |
| 3 | Перекази по Україні | e.g. "Від 0%, 29 міст" | Strong competitive advantage |
| 4 | Перекази по світу | e.g. "Готівка в будь-яку точку" | International |
| 5 | Оплата інвойсів | e.g. "Бізнес-платежі, включно з Китаєм" | Includes China payments |
| 6 | Золото | e.g. "Золоті зливки — надійний захист" | Precious metals |

**Card anatomy:**
- Background color (from KIT palette, unique per product)
- Product name (big text) — appears during fly-in animation
- Killer feature subtitle (small text) — fades in after card lands
- Brand graphic element — fades in after card lands
- Entire card is clickable → navigates to product page

**Animation:**
- Scroll-driven fly-in from different directions (each card has unique direction vector)
- On landing: title visible → subtitle + graphic fade in (staggered)
- Hover: background color transition

**Mobile:** Cards stack or rearrange for narrow viewport. Fly-in animation preserved but simplified if needed for Telegram WebView.

---

### 5. Compound Block (main page)

**Purpose:** Demonstrate KIT's unique value — combining products into chains for complex financial tasks. No competitor does this.

**Layout:**
```
┌──────────────────────────────────────┐
│                                      │
│  [headline, big]                     │
│  Direction: "Беремо на себе          │
│  фінансові задачі будь-якої          │
│  складності"                         │
│                                      │
│  [subtitle, small]                   │
│                                      │
│  ┌─ Example 1 (brief) ────────────┐  │
│  │ Крипто (Київ) → EUR (Барселона) │  │
│  └─────────────────────────────────┘  │
│  ┌─ Example 2 (brief) ────────────┐  │
│  │ Оплата інвойсу в Китай через    │  │
│  │ конвертацію                     │  │
│  └─────────────────────────────────┘  │
│  ┌─ Example 3 (expanded) ─────────┐  │
│  │ [Detailed case with steps]      │  │
│  │ Крок 1: Приймаємо крипто        │  │
│  │ Крок 2: Конвертація → EUR       │  │
│  │ Крок 3: Міжнародний переказ     │  │
│  │ Крок 4: Видача готівки          │  │
│  └─────────────────────────────────┘  │
│                                      │
└──────────────────────────────────────┘
```

**Content:**
- Headline: TBD
- 2-3 brief scenario one-liners showing range
- 1 expanded scenario with step-by-step breakdown
- Specific scenarios need input from stakeholders — real cases the company handles

**Design:** Uses brand elements for step visualization. Progressive disclosure — brief examples are visible, expanded case may use accordion or scroll-reveal.

---

### 6. CTA Block (main page + product pages)

**Purpose:** Convert interest into action — client contacts manager via Telegram.

**Mechanism:** Prefilled Telegram link (`t.me/<chat>?text=<prefilled>`).

**On main page:**
- Headline: direction "Готові обговорити ваше завдання?"
- Big CTA button → opens Telegram with generic prefilled message
- Prefilled: e.g. "Привіт! Переходжу з презентації, хочу обговорити фінансове завдання"

**On product pages:**
- Same pattern but with product-specific prefilled text
- e.g. for domestic transfers: "Привіт! Цікавить переказ по Україні"

**Technical:**
- Pure `<a href="https://t.me/...?text=...">` — zero backend
- URL-encode the prefilled text

---

### 7. Footer (all pages)

**Layout:** Single line, centered, minimal.

**Content:**
- Company logo (small)
- © 2026
- "Made by Unicorn Magic with love for KYT Group"

**No:** links to main site, legal disclaimers, social media, addresses.

---

### 8. Product Pages (6 pages)

**General template — flexible, not rigid.**

Each product page follows a flexible structure. Simple products may use only 1-2 blocks. Complex products add more blocks as needed.

**Available blocks (mix and match per product):**

1. **Hero block:** Product name (big) + one-sentence essence (small)
2. **"How it works" block:** 3-4 steps with icons. Only for products with non-obvious process. NOT for currency exchange (everyone knows how it works).
3. **Key advantages block:** 2-3 killer features, each as headline + small text
4. **Details block:** Progressive disclosure (expandable) — currencies, geography, conditions, limits
5. **CTA block:** Telegram prefilled link, product-specific

**Per-product notes:**

**Currency Exchange** — Simplest page, possibly one screen. Killer features: 100+ branches, 29 cities, 60-min rate lock, cross-rates. No "how it works" needed.

**Crypto Exchange** — Gray zone product. Needs "how it works" steps. Killer features: confidentiality, crypto ↔ fiat, flexible amounts.

**Domestic Transfers** — First prototype page (build first, iterate). Killer features: from 0%, 29 cities, speed. Competitive advantage: 100+ branches vs competitors' ~25.

**International Transfers** — Needs geography info. Killer features: global reach, any point to any point. "How it works" block useful.

**Invoice Payments** — Includes China payments (separate department). Business-focused. "How it works" essential. Killer features: any scale, including China.

**Gold** — Relatively simple. Killer features: reliable investment protection, physical gold bars.

**Product page design:** Same design system, same header/footer, same copywriting rules. Visual differentiation through color (each product has its own accent from brandbook palette).

---

## Open Items (need stakeholder input)

| # | Item | Needed for | Priority |
|---|------|-----------|----------|
| 1 | Exact compound scenarios (real cases) | Compound block | Before copy |
| 2 | Supported cryptocurrencies list | Crypto page | Before crypto page |
| 3 | Supported countries for international transfers | Transfers page | Before transfers page |
| 4 | Gold — available weights, conditions | Gold page | Before gold page |
| 5 | Invoice payments — exact flow, China specifics | Invoice page | Before invoice page |
| 6 | Telegram chat link for production | CTA | Before launch |
| 7 | PIN code / distribution method | PIN gate | Before launch |
| 8 | Hero headline copywriting | Hero | Before hero build |
| 9 | Bridge phrase copywriting | Bridge | Before build |
| 10 | All product killer-feature subtitles | Bento grid | Before bento build |

---

## Out of Scope (Post-MVP)

- Interactive constructor (quiz/widget)
- Horizontal scroll timeline
- Rule engine for product chain mapping
- Dynamic page generation
- Telegram bot integration (serverless)
- Custom event tracking (Umami)
- Rate API / calculators
- AI chatbot widget
- Sales manager UI
- URL token access variant
