---
title: "ADR 0003: Vercel Analytics + Umami for analytics"
description: Analytics strategy — built-in basics + custom event tracking
created: 2026-03-16
status: accepted
---

# ADR 0003: Vercel Analytics + Umami for Analytics

## Status
Accepted

## Context
Need to track: page opens, time on site, scroll depth, constructor interactions, per-link attribution (different client segments get different URLs). Must be privacy-friendly (no cookie banners) and work on a non-indexed site.

## Options Considered

### 1. Vercel Analytics only
- **Pros:** Zero config, built-in Web Vitals, no extra setup
- **Cons:** Limited custom event tracking, Hobby plan pauses at limit, no self-hosting

### 2. Umami only
- **Pros:** Free self-hosted, custom events, lightweight (2KB), full control
- **Cons:** Needs separate hosting (Railway), no Web Vitals

### 3. Both
- **Pros:** Best of both — Vercel for page-level metrics and Web Vitals, Umami for custom events (constructor steps, product views, scroll depth)
- **Cons:** Two scripts (still lightweight combined: <4KB)

### 4. PostHog
- **Pros:** Full product analytics, session replay, funnels
- **Cons:** Heavier, overkill for MVP

## Decision
Vercel Analytics + Umami. Lightweight, complete coverage, both free at our scale.

## Consequences
- `@vercel/analytics` installed from day one (trivial)
- Umami self-hosted on Railway (free tier)
- Per-link attribution: URL params (`?ref=segment-crypto-users`)
- Custom events in Umami: `constructor_step`, `product_view`, `cta_click`, `scroll_depth`
- Can upgrade to PostHog later if KIT needs session replay
