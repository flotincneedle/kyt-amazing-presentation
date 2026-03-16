---
title: Tool & Technology Research
description: Research on tools, libraries, and services for the KIT presentation project
created: 2026-03-16
status: active
---

# Tool & Technology Research — March 16, 2026

Research for informed decision-making. Each section ends with a recommendation.

---

## 1. Figma MCP — Extracting Design System

**What exists:** Official Figma MCP server for Claude Code. Bidirectional:
- **Figma → Code:** Claude reads Figma files directly — extracts colors, fonts, spacing, components, layouts
- **Code → Figma ("Code to Canvas"):** Push generated code back to Figma as editable designs

**How it works:**
- Figma MCP connects via personal access token
- Claude Code reads the Figma file structure, pages, frames, styles
- Can extract design tokens (colors, typography, spacing) and generate CSS variables / Tailwind config
- Article from March 13, 2026: "How I Built a Design System in 15 mins" using Figma MCP + Claude Code

**Setup:** Install Figma MCP server in Claude Code settings, provide Figma personal access token and file URL.

**Recommendation:** USE THIS. Connect Figma MCP, point it at the brandbook, extract design system automatically. This is the fastest path from brandbook to code. Sati doesn't need to manually export anything.

Sources:
- https://www.figma.com/blog/introducing-claude-code-to-figma/
- https://claudelab.net/articles/claude-code/figma-mcp-integration
- https://medium.com/@yanliuharvard/no-64-figma-mcp-claude-code-3-how-i-built-a-design-system-in-15mins-6ef95145a4e5

---

## 2. Pencil.dev

**What it is:** AI-powered design tool that gives Claude Code a visual canvas. 6 AI agents work as a "design team" — layout, styling, responsiveness, etc. Outputs HTML/CSS.

**Key features:**
- Visual canvas with drag-and-drop
- AI generates layouts from descriptions
- Supports style guides (can feed in our brandbook tokens)
- Exports HTML/CSS that can be adapted to React components
- Good for prototyping page layouts before coding

**Pricing:** Has free tier, paid plans for more features.

**Recommendation:** WORTH TRYING for initial page layout prototyping. Use it to sketch the hero section, constructor layout, product pages — then take the HTML/CSS structure and convert to React components in Claude Code. Don't rely on it for final code.

Sources:
- https://www.geeky-gadgets.com/pencil-ai-ui-layouts/
- https://www.geeky-gadgets.com/pencil-dev-claude-code-canvas/
- https://www.banani.co/blog/pencil-dev-review

---

## 3. v0.dev

**Pricing (March 2026):**
- Free: $5 monthly credits, 7 messages/day, deploy to Vercel, GitHub sync
- Pro: $20/user/month, more credits
- Team: $30/user/month

**What it does well:** Generates React/Next.js components from descriptions. Exports to GitHub (we already have this connected). Good for rapid component prototyping.

**Limitation:** It's a prototyping tool — generated code often needs cleanup for production use.

**Recommendation:** USE FREE TIER for prototyping individual components (buttons, cards, constructor widget). Don't pay for subscription yet — 7 messages/day is enough for iterative prototyping. Export to GitHub → clone → refine in Claude Code.

Sources:
- https://v0.app/pricing
- https://www.taskade.com/blog/v0-review

---

## 4. Horizontal Scroll & Animations

**Best options for React:**

| Library | Bundle Size | Best For | Mobile Support |
|---------|------------|----------|---------------|
| Framer Motion | ~30KB | React-native API, useScroll hook, declarative | Excellent |
| GSAP ScrollTrigger | ~25KB | Complex timelines, pinning, precise control | Excellent |
| CSS scroll-snap | 0KB | Simple swipe carousels | Native |

**For our horizontal scroll timeline:**
- **Framer Motion `useScroll`** — best DX for React, handles vertical-to-horizontal scroll transformation
- Pattern: vertical scroll drives horizontal movement via `useTransform`
- Mobile: native swipe works automatically with proper CSS scroll-snap as fallback
- 60fps achievable with CSS transforms (translateX) driven by scroll position

**Recommendation:** Framer Motion for the horizontal scroll section. It's the React standard, works great on mobile, and integrates cleanly with Next.js. If we need more complex animation sequences later, GSAP can be added alongside.

Sources:
- https://www.ganesshkumar.com/articles/2025-04-26-infinite-horizontal-scrolling-in-react
- https://zoer.ai/posts/zoer/best-react-scroll-animation-libraries-2025
- https://ogblocks.dev/blog/top-5-framer-motion-carousels

---

## 5. Analytics

**Comparison for our case (static/semi-static site, privacy-friendly, per-link tracking):**

| Tool | Cost | Self-Host | Event Tracking | Per-Link Attribution |
|------|------|-----------|---------------|---------------------|
| Umami | Free (self-hosted) | Yes | Yes | Via UTM/custom props |
| Plausible | $9/mo (cloud) | Yes | Yes | Via UTM/custom props |
| PostHog | Free tier (generous) | Yes | Yes + funnels + session replay | Full |
| Vercel Analytics | Free (Hobby) | No | Basic (pageviews, Web Vitals) | No custom |

### Vercel Analytics (added after Sati's request)

Built into Vercel dashboard. Zero config — just install `@vercel/analytics` package.
- **Free tier (Hobby):** Included events per month, pauses collection when exceeded
- **Pro ($10/mo add-on):** Extended reporting, more events
- **What it tracks:** Pageviews, unique visitors, referrers, Web Vitals (LCP, CLS, FID)
- **What it doesn't:** Custom events (constructor interactions, scroll depth, product clicks)
- **No cookies, no GDPR issues**

Source: https://vercel.com/docs/analytics/limits-and-pricing

### Decision: Dual Setup
Vercel Analytics for page-level basics + Web Vitals (free, zero effort). Umami for custom event tracking (constructor steps, product views, scroll depth, per-link attribution). Both lightweight, both free.

**For our needs:**
- Track opens per unique link (each client or segment gets a unique URL param)
- Time on page, scroll depth, click events (which product selected in constructor)
- Lightweight script (no performance impact on mobile)

**Recommendation:** **Umami** for MVP (free, self-host on Railway/Vercel, lightweight 2KB script). Upgrade to PostHog later if we need session replay or funnel analysis for KIT's sales team. Per-link attribution via URL parameters (`?ref=segment-123`).

Sources:
- https://blog.canadianwebhosting.com/plausible-vs-umami-self-hosted-analytics-2026/
- https://toolpick.dev/comparisons/plausible-vs-umami
- https://posthog.com/blog/posthog-vs-plausible

---

## 6. Telegram Integration

**How to pass constructor data to a Telegram manager:**

Simple architecture:
1. User fills constructor on site → clicks "Submit request"
2. JavaScript sends POST request to a serverless function (Vercel API route or Cloudflare Worker)
3. Serverless function formats the data and sends it via Telegram Bot API (`sendMessage`) to the manager's chat/group
4. Manager sees: "New request: crypto (Kyiv) → cash EUR (Barcelona), individual client"

**What we need:**
- Telegram bot (create via @BotFather)
- Chat ID of the manager group
- One serverless function (~20 lines of code)

**Note on static export:** If we go pure static, the serverless function needs to live somewhere (Vercel, Railway, Cloudflare Worker). This is the ONE piece that needs a server.

**Recommendation:** Vercel API route (if deploying on Vercel) or a simple Cloudflare Worker (free tier, works anywhere). Trivial to implement, do it in Phase 2 after the constructor UI works.

---

## 7. Tech Stack Decision

**The issue with Next.js static export:**
- Dynamic routes (`/product/[slug]`) have limitations in static export with App Router
- We need dynamic-ish behavior (constructor generates different views)
- But we also want portability (KIT self-hosting)

**Options:**

| Approach | Pros | Cons |
|----------|------|------|
| Next.js on Vercel (no static export) | Full features, API routes, easy deploy | Tied to Vercel or needs Node.js server |
| Next.js static export | Portable files | Dynamic route limitations, no API routes |
| Vite + React SPA | Simple, fast, fully portable, no SSR overhead | No SSR (fine for our case), manual routing |
| Astro + React islands | Best of both, lightweight | Newer, less ecosystem |

**Recommendation:** **Vite + React** for simplicity and portability. We don't need SSR (non-indexed site). All interactivity is client-side. SPA routing handles constructor → product page transitions. Build output = static files deployable anywhere. Telegram webhook = separate Cloudflare Worker (free).

Alternative: Next.js on Vercel if we want the developer convenience and don't care about static export. For KIT self-hosting, give them a Docker container.

**This is a decision point — Sati should weigh in.**

---

## 8. AI Chatbot (for growth, not MVP)

**Options for embedding an AI chatbot on the site:**
- Chatbase, CustomGPT — hosted solutions, quick setup, limited customization
- Voiceflow — more complex, good for conversation design
- Custom: Claude API + RAG with product knowledge base → can reuse for Telegram bot later

**Recommendation:** Don't build now. When ready, use Claude API with a custom knowledge base (all product data we'll already have documented). This gives us full control AND reusability for the future Telegram bot. The product data files we create for the presentation become the knowledge base.
