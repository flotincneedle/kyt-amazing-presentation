# Web Presentations Pipeline — Context & Brainstorm Starting Point

## The Idea — Two Levels

### Level 1: Pipeline (Playbook)
Automated pipeline for creating interactive web presentations for businesses. Result — a Playbook that lets you replicate the process for any company, faster each time.

### Level 2: First Presentation
Build one specific interactive web presentation for a specific business. Along the way — research tools, prompts, workflows, document what works.

## Presentation Requirements
- Tells the company's product story — beautiful, modern, interactive
- Great copywriting, no fluff
- Minimal time to understand "what they sell"
- CTA: submit a request / use the product / remember and come back later
- Interactive: scroll animations, parallax, hover effects — not a static page

## Why the First Attempt Failed
1. Set the bar too high immediately — task was even harder than expected
2. Assumed it would be fast — it wasn't
3. Didn't know which tools to use for each stage
4. Design turned out to be slow and iterative
5. No clear way to give AI references for interactivity (not just images, but behavior)
6. Built in a separate project (need to find it, see what's left)

## Approach — Start Over, Small Steps

### This is NOT a PRD task — it's Creative Brief + Playbook

PRD works when you know what you're building. This is exploration + creativity.

**Per presentation — Creative Brief + Technical Brief:**

Creative Brief:
- Company, product, one sentence "what they sell"
- Target audience for the presentation
- Tone: strict / bold / warm / minimalist
- 2-3 examples "I want it like this" (links)
- Key action after viewing (request / purchase / remember)

Technical Brief:
- Stack (HTML/CSS/JS? React? Next.js? Framer Motion?)
- Responsive: mobile required?
- Number of screens/sections
- Types of interactivity
- Constraints: load speed, libraries

**For the pipeline — Playbook (built along the way):**

```
Stage 1: Gather info from client → checklist of questions, format
Stage 2: Copywriting → which prompt, which tool
Stage 3: Design + Code → what worked (v0? Claude Code + frontend-design? Bolt?)
Stage 4: Finalization → deploy, quality checklist
```

## Unsolved Problem: Interactivity References
How to show AI "I want this kind of scroll animation"? Images don't convey motion. Research needed:
- Chrome DevTools MCP to capture behavior?
- Word descriptions with code examples?
- Links to live sites + description of specific effect?

## Next Step
Start with brainstorming in this project. Pick a specific business, draft the Creative Brief. One block at a time, record the result.

---

**Why this matters:** Sati wants to build a reproducible pipeline for producing web presentations as a service/product. Potential revenue source + real-world vibecoding practice.

**Core principle:** Don't start with big ambition. One business, one presentation, step by step. Every successful step = entry in Playbook.
