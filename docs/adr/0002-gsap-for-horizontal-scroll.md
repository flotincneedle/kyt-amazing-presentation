---
title: "ADR 0002: GSAP ScrollTrigger for horizontal scroll"
description: Animation library decision for the timeline section
created: 2026-03-16
status: accepted
---

# ADR 0002: GSAP ScrollTrigger for Horizontal Scroll

## Status
Accepted

## Context
The presentation's core "wow" section is a horizontal scroll timeline showing how KIT assembles financial products. Symbolizes the slogan "Money loves movement." Must work smoothly on mobile (80%+ of traffic).

## Options Considered

### 1. GSAP ScrollTrigger
- **Pros:** Industry standard for scroll-driven animations, pin+scrub pattern ideal for vertical→horizontal scroll, excellent mobile performance, precise control
- **Cons:** ~25KB bundle, non-React API (wrapper available), commercial license for some plugins

### 2. Framer Motion (useScroll + useTransform)
- **Pros:** React-native API, declarative, tree-shakeable
- **Cons:** Less control over complex scroll sequences, horizontal scroll with pinning is more hacky

### 3. CSS scroll-snap only
- **Pros:** Zero JS, native performance
- **Cons:** No vertical→horizontal scroll transformation, limited animation control

## Decision
GSAP ScrollTrigger for the horizontal scroll timeline. Framer Motion stays as Plan B and for micro-animations on other components (hover effects, transitions, enter animations).

## Consequences
- Install `gsap` package
- Horizontal scroll section uses GSAP pin+scrub
- Other animations (page transitions, hover, reveal) use Framer Motion
- If GSAP causes issues on mobile → fallback to native horizontal swipe with CSS scroll-snap
