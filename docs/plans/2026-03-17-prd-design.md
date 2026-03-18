---
title: PRD — KIT Amazing Presentation MVP
description: Product Requirements Document for KIT Group interactive web presentation
created: 2026-03-17
status: active
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
- **Micro-proof** (optional third layer): concrete numbers, constraints, credibility markers (e.g. "від 0%", "до 30 хвилин", "29 міст"). Use on key blocks where trust matters — flexible, not mandatory everywhere.
- No water, no abstractions, no generic corporate phrases
- Respect the audience — simplify the complex, don't explain the obvious
- Language: Ukrainian
- Existing copywriting research in `kit-content-factory/research/` — use as inspiration
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
- **Dev phase:** Client-side validation (PIN hardcoded or in env variable) — sufficient for development
- **Production:** Next.js Middleware — validates PIN server-side, sets cookie, serves content only after validation. Gray-zone content not shipped in JS bundle until authenticated.
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
- `[COPY]` "Хочу переказати 100к у Відень"
- `[COPY]` "Чи можете обміняти крипту на євро в Барселоні?"
- `[COPY]` "Відправте оплату на компанію у Китаї"
- `[COPY]` "Потрібно купити золото"
- `[COPY]` + more rotating examples

Outgoing results:
- `[COPY]` "Ваша готівка чекає у відділенні"
- `[COPY]` "Переказ успішно виконаний"
- `[COPY]` "Порахували по оптовому курсу"
- `[COPY]` + more rotating examples

**Headline:**
- `[COPY]` — TBD, needs excellent copywriting. Direction: something like "Всі види фінансових послуг" but much better. Short, punchy, brand-defining.
- NOT long descriptive phrases

**Stats (small text):**
- 20+ років на ринку · 100+ відділень · 150 000+ клієнтів

**Reference:** wisprflow.ai hero for animation pattern. KIT brandbook slides 24, 52, 108, 110-111 for design elements and animation principles.

**Mobile:** Conveyor animation simplifies — possibly vertical flow instead of horizontal. Must work in Telegram WebView.

**Fallback:** If conveyor animation lags in Telegram WebView → fallback to fade-in phrase rotation (one phrase at a time, fade in/out). Core concept preserved, just simpler execution.

---

### 3. Bridge Phrase (main page)

**Purpose:** Transition from hero to product catalog. Redirect attention downward.

**Layout:** Single line, centered, big text. Same mechanic as on Sati's personal site.

**Content:** `[COPY]` — one meaningful, strong phrase that invites exploration of products below. Not generic "explore our services".

---

### 4. Product Catalog — Bento Grid (main page)

**Purpose:** Show all 6 products as clickable cards. Each card leads to a product page.

**Layout:** Bento grid adapted from Sati-site (`BentoGrid.tsx`). Grid dimensions TBD based on 6 cards (likely 3×2 or asymmetric bento with varied card sizes).

**Cards (6):**

| # | Product | Subtitle (killer feature) | Notes |
|---|---------|--------------------------|-------|
| 1 | Валютообмін | `[COPY]` e.g. "100+ відділень, від 60 хв фіксація" | Flagship, largest card? |
| 2 | Криптообмін | `[COPY]` e.g. "Крипто ↔ фіат, конфіденційно" | Gray zone — behind PIN |
| 3 | Перекази по Україні | `[COPY]` e.g. "Від 0%, 29 міст" | Strong competitive advantage |
| 4 | Перекази по світу | `[COPY]` e.g. "Готівка в будь-яку точку" | International |
| 5 | Оплата інвойсів | `[COPY]` e.g. "Бізнес-платежі, включно з Китаєм" | Includes China payments |
| 6 | Золото | `[COPY]` e.g. "Золоті зливки — надійний захист" | Precious metals |

**Card anatomy:**
- Background color (from KIT palette, unique per product)
- Product name (big text) — appears during fly-in animation
- Killer feature subtitle (small text) — fades in after card lands
- Brand graphic element — fades in after card lands
- Entire card is clickable → navigates to product page

**Animation:**
- Scroll-driven fly-in from different directions (each card has unique `flyFrom` vector)
- On landing: title visible → subtitle + graphic fade in (staggered)
- Hover: background color transition (smooth, like Sati-site)
- Adapted from `BentoGrid.tsx` — same scroll-driven math, new grid layout

**Mobile:** Cards stack or rearrange for narrow viewport. Fly-in animation preserved. Fallback: if WebView lags → fade + translateY instead of multi-vector fly-in.

---

### 5. Compound Block (main page)

**Purpose:** Demonstrate KIT's unique value — combining products into chains for complex financial tasks. No competitor does this.

**Layout:**
```
┌──────────────────────────────────────┐
│                                      │
│  [COPY: headline, big]               │
│  Direction: "Беремо на себе          │
│  фінансові задачі будь-якої          │
│  складності"                         │
│                                      │
│  [COPY: subtitle, small]             │
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
- Headline: `[COPY]` — direction above, exact wording TBD
- 2-3 brief scenario one-liners showing range
- 1 expanded scenario with step-by-step breakdown
- Specific scenarios need input from Sati/Ruslan — real cases KIT handles

**Design:** Uses brand elements (коло + лінія) for step visualization. Progressive disclosure — brief examples are visible, expanded case may use accordion or scroll-reveal.

---

### 6. CTA Block (main page + product pages)

**Purpose:** Convert interest into action — client contacts KIT manager via Telegram.

**Mechanism:** Prefilled Telegram link (`t.me/<chat>?text=<prefilled>`).

**On main page:**
- `[COPY]` headline: direction "Готові обговорити ваше завдання?"
- Big CTA button → opens Telegram with generic prefilled message
- Prefilled: `[COPY]` e.g. "Привіт! Переходжу з презентації KIT, хочу обговорити фінансове завдання"

**On product pages:**
- Same pattern but with product-specific prefilled text
- e.g. for Перекази UA: "Привіт! Цікавить переказ по Україні"

**Technical:**
- Pure `<a href="https://t.me/...?text=...">` — zero backend
- Test chat during development, switch to KIT's chat for production
- URL-encode the prefilled text

---

### 7. Footer (all pages)

**Layout:** Single line, centered, minimal.

**Content:**
- KIT logo (small)
- © 2026 KIT Group
- "Made by Unicorn Magic with love for KYT Group"

**No:** links to main site, legal disclaimers, social media, addresses.

---

### 8. Product Pages (6 pages)

**General template — flexible, not rigid.**

Each product page follows a flexible structure. Simple products may use only 1-2 blocks. Complex products add more blocks as needed.

**Available blocks (mix and match per product):**

1. **Hero block:** Product name (big) + one-sentence essence (small)
2. **"Як це працює" block:** 3-4 steps with icons. Only for products with non-obvious process. NOT for валютообмін.
3. **Key advantages block:** 2-3 killer features, each as headline + small text (wisprflow pattern)
4. **Details block:** Progressive disclosure (expandable) — currencies, geography, conditions, limits
5. **CTA block:** Telegram prefilled link, product-specific

**Per-product notes:**

#### 8.1 Валютообмін
- Simplest page, possibly one screen
- Killer features: 100+ відділень, 29 міст, фіксація курсу 60 хв, cross-rates
- No "як це працює" — everyone knows how currency exchange works
- Currencies: USD, EUR, PLN, GBP, RON, MDL + cross-rates

#### 8.2 Криптообмін
- Gray zone — the reason the whole site is PIN-gated
- Needs "як це працює" — not everyone knows crypto exchange flow
- Killer features: конфіденційність, крипто ↔ фіат, flexible amounts
- Details: supported cryptocurrencies (TBD from Ruslan)

#### 8.3 Перекази по Україні
- **First prototype page** — build this first, iterate, then apply learnings to others
- Killer features: від 0%, 29 міст, швидкість
- May need "як це працює" for people unfamiliar with non-bank transfers
- Competitive advantage: 100+ branches vs competitors' ~25

#### 8.4 Перекази по світу
- More complex than domestic — needs geography info
- Killer features: global reach, any point to any point
- "Як це працює" block useful here
- Details: supported countries/regions (TBD from Ruslan)

#### 8.5 Оплата інвойсів
- Includes China payments (separate KIT department)
- Business-focused product
- "Як це працює" essential — Money UA's 3-step approach is the benchmark
- Killer features: будь-який масштаб, включно з Китаєм

#### 8.6 Золото
- Precious metals (gold bars)
- Relatively simple product
- Killer features: надійний захист заощаджень, physical gold
- Details: available weights, conditions (TBD from Ruslan)

**Product page design:** Uses same design system, same header/footer, same copywriting rules. Visual differentiation through color (each product has its own accent from brandbook palette).

---

## Open Items (need input from Sati/Ruslan)

| # | Item | Needed for | Priority |
|---|------|-----------|----------|
| 1 | Exact compound scenarios (real cases) | Compound block | Before copy |
| 2 | Supported cryptocurrencies list | Crypto page | Before crypto page |
| 3 | Supported countries for international transfers | Transfers page | Before transfers page |
| 4 | Gold — available weights, conditions | Gold page | Before gold page |
| 5 | Invoice payments — exact flow, China specifics | Invoice page | Before invoice page |
| 6 | Existing Telegram chat link for production | CTA | Before launch |
| 7 | PIN code / distribution method | PIN gate | Before launch |
| 8 | Hero headline copywriting | Hero | Before hero build |
| 9 | Bridge phrase copywriting | Bridge | Before build |
| 10 | All product killer-feature subtitles | Bento grid | Before bento build |

---

## References

- **Copywriting pattern:** [wisprflow.ai](https://wisprflow.ai) — headline + small text
- **Card mechanic:** Sati-site `BentoGrid.tsx` — fly-in bento grid
- **Bridge phrase mechanic:** Sati-site — bridge between hero and grid
- **Brand design elements:** KIT brandbook slides 24, 52, 108, 110-111
- **Previous research:** `kit-content-factory/research/` — competitors, products, audiences
- **Cross-validation feedback:** `docs/prompts/01-review-gemini.md`, `01-review-chatgpt.md`

---

## Technical Notes (from cross-validation)

- **Use `dvh` not `vh`** — Telegram WebView breaks `100vh` due to keyboard/bottom bar. Use `h-dvh` in Tailwind everywhere.
- **Vercel Analytics from day one** — `@vercel/analytics` package, one-line setup. Cannot send to 150K without basic tracking.
- **404 page** — branded, KIT logo + "Повернутись на головну" button. Minimal effort.
- **Loading state** — branded splash/skeleton to prevent flash of unstyled content during Next.js hydration.
- **Telegram WebView testing** — test CTA links (prefilled `t.me/...`) inside Telegram WebView early. May cause recursive loops.
- **Deep link protection** — if user shares `/product/crypto` URL directly, PIN gate must still trigger. Route-level protection.

---

## Out of Scope (Post-MVP)

- Interactive constructor (quiz/widget)
- Horizontal scroll timeline
- Rule engine for product chain mapping
- Dynamic page generation
- Telegram bot integration (serverless)
- Umami custom event tracking
- Rate API / calculators
- AI chatbot widget
- Sales manager UI
- URL token access (`?access=xyz`)
