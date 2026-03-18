---
title: Architecture
description: Technical architecture for KIT Amazing Presentation MVP
created: 2026-03-17
status: active
---

# Architecture — KIT Presentation MVP

---

## Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js (App Router) | Convenience, Vercel integration, `use client` for interactive parts |
| Hosting | Vercel | Free tier, instant deploys, analytics built-in |
| Styling | Tailwind CSS | Design tokens from brandbook → tailwind.config.js |
| Fonts | PP Pangram Sans | KIT brandbook font, self-hosted |
| Animations | Framer Motion | React-native API, scroll-driven animations, mobile-safe |
| Analytics | Vercel Analytics | Zero-config, pageviews + Web Vitals, free tier |
| CTA | Telegram prefilled links | Zero backend, `t.me/<chat>?text=<encoded>` |
| Access | Client-side PIN gate | Hardcoded PIN in env var, no auth backend for MVP |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout, font loading, analytics
│   ├── page.tsx                # Main page (hero, grid, compound, CTA)
│   └── product/
│       ├── [slug]/
│       │   └── page.tsx        # Dynamic product page
│       └── layout.tsx          # Product page layout (shared header/footer)
├── components/
│   ├── ui/                     # Design system primitives
│   │   ├── Button.tsx
│   │   ├── Typography.tsx
│   │   ├── Card.tsx
│   │   └── Container.tsx
│   ├── layout/
│   │   ├── Header.tsx          # Sticky minimal header (logo + burger)
│   │   ├── BurgerMenu.tsx      # Product navigation menu
│   │   └── Footer.tsx          # Minimal footer
│   ├── gate/
│   │   └── PinGate.tsx         # PIN access control overlay
│   ├── hero/
│   │   ├── HeroSection.tsx     # Hero container
│   │   ├── Conveyor.tsx        # Animated request→result conveyor
│   │   └── BrandSwirl.tsx      # KIT завитушка element
│   ├── catalog/
│   │   ├── BentoGrid.tsx       # Scroll-animated product grid
│   │   └── ProductCard.tsx     # Individual product card
│   ├── compound/
│   │   └── CompoundBlock.tsx   # Compound product showcase
│   └── cta/
│       └── CTABlock.tsx        # Telegram CTA with prefilled link
├── data/
│   └── products.ts             # Product data (titles, subtitles, slugs, colors, copy)
├── lib/
│   ├── constants.ts            # PIN, Telegram chat link, etc.
│   └── animations.ts           # Shared Framer Motion variants
└── styles/
    └── globals.css             # Tailwind base + custom animations
```

---

## Page Architecture

### Main Page (`/`)

```
PinGate (overlay, clears on valid PIN)
  └── Layout
      ├── Header (sticky)
      ├── HeroSection
      │   ├── Headline + Stats
      │   ├── Conveyor (animated)
      │   └── BrandSwirl
      ├── BridgePhrase
      ├── BentoGrid
      │   └── ProductCard × 6
      ├── CompoundBlock
      ├── CTABlock
      └── Footer
```

### Product Page (`/product/[slug]`)

```
Layout
  ├── Header (sticky)
  ├── ProductHero (name + essence)
  ├── [Optional] HowItWorks (steps)
  ├── KeyAdvantages (headline + small text × 2-3)
  ├── [Optional] Details (expandable)
  ├── CTABlock (product-specific prefilled text)
  └── Footer
```

Slugs: `valutniy-obmin`, `krypto`, `perekazy-ua`, `perekazy-svit`, `invoisy`, `zoloto`

---

## Key Technical Decisions

### Client-side PIN Gate
- PIN stored in `NEXT_PUBLIC_PIN` env var (or hardcoded for MVP)
- Gate state in `localStorage` — once entered, stays open for session
- No server validation — acceptable for MVP (obscurity + PIN, not Fort Knox)
- Future: URL token variant for frictionless access

### Bento Grid Animation
- Adapted from Sati-site `BentoGrid.tsx`
- Scroll-driven: `window.scroll` + `requestAnimationFrame`
- Each card has `flyFrom: [x, y]` direction vector
- Title appears during fly-in, subtitle + graphic fade in after landing
- Fallback for reduced-motion preference: grid appears instantly

### Conveyor Animation (Hero)
- Framer Motion `AnimatePresence` for text cycling
- Left stream: rotate through client request phrases
- Right stream: rotate through KIT response phrases
- Center: KIT pill element (static or subtle pulse)
- Brand swirl: SVG path animation (коло + лінія from brandbook)
- Mobile: simplified layout, possibly vertical flow

### CTA — Telegram Integration
- Pure `<a>` tags with `href="https://t.me/<chat>?text=<encoded>"`
- Generic message on main page CTA
- Product-specific message on product page CTAs
- Chat link stored in env var — test chat during dev, production chat on deploy

### Design Tokens
- Extracted from brandbook PDF + Figma MCP
- Mapped to `tailwind.config.js`: colors, fontFamily, fontSize, spacing
- PP Pangram Sans: self-hosted in `/public/fonts/`
- Brand elements (swirl, коло, лінія): SVG assets in `/public/brand/`

---

## Mobile Considerations

- **80%+ audience opens from Telegram** (mobile WebView)
- Mobile-first responsive design
- Telegram WebView quirks: no horizontal swipe (conflicts with back gesture)
- Bento grid: responsive layout (stacked on mobile)
- Hero conveyor: simplified on mobile (vertical or reduced animation)
- Test in Telegram WebView early and often
- `prefers-reduced-motion` respected

---

## Deployment

- Vercel (Hobby tier, free)
- `robots.txt`: Disallow all
- `<meta name="robots" content="noindex, nofollow">`
- Custom domain TBD (from KIT)
- Environment variables: PIN, Telegram chat link
