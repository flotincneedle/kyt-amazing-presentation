---
title: "ADR 0001: Use Next.js on Vercel over Vite + React"
description: Stack decision for the presentation site
created: 2026-03-16
status: accepted
---

# ADR 0001: Use Next.js on Vercel over Vite + React

## Status
Accepted

## Context
We need a framework for an interactive, non-indexed web presentation. Requirements:
- Client-side interactivity (constructor widget, animations)
- No SEO/SSR needed
- Fast deployment
- Potentially portable to KIT's own servers later

## Options Considered

### 1. Vite + React (SPA)
- **Pros:** Simple, fast builds, fully portable (static files), no SSR overhead
- **Cons:** No API routes (need separate serverless for Telegram), manual routing setup, less DX convenience

### 2. Next.js on Vercel
- **Pros:** API routes for Telegram integration, great DX, fast deployment, `@vercel/analytics` built-in, large ecosystem
- **Cons:** Tied to Vercel or needs Node.js server for self-hosting

## Decision
Next.js on Vercel. Developer convenience and integrated API routes outweigh portability concerns. KIT can deploy on Node.js server if needed — this is standard infrastructure for them.

## Consequences
- Telegram webhook is a simple API route, no separate service needed
- Analytics setup is trivial with `@vercel/analytics`
- If KIT needs to self-host: provide Docker container or `next start` instructions
- No SEO features used — all pages can be client-rendered
