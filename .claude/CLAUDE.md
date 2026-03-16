# KIT Amazing Presentation

Interactive web presentation for KIT Group (financial services, Ukraine).
Stack: Next.js + Vercel. Design system from Figma brandbook (138 slides).

## Context Routing (Lifecycle-Split)

Files organized by update frequency. Read only what's needed for the current task.

| Layer | Path | Update Freq | When to Read |
|-------|------|-------------|--------------|
| **Canon** | `docs/VISION.md` | Rarely | New session, scope questions |
| **Canon** | `docs/ARCHITECTURE.md` | When arch changes | Implementation work |
| **Planning** | `docs/ROADMAP.md` | Every session | Start of session, phase transitions |
| **Planning** | `docs/adr/` | When decisions made | Questioning a past decision |
| **Research** | `docs/RESEARCH.md` | When new tools evaluated | Tool selection, tech questions |
| **Ops** | `HANDOFF.md` | Every session end | Start of new session |
| **Ops** | `CHANGELOG.md` | Every session | Before commit, session end |
| **Reference** | `CONTEXT.md` | Never (archive) | Historical context only |
| **External** | `kit-content-factory/` | Never | Need v1 research/copy |
| **External** | `~/DATA/playbooks/` | Before commits | Playbook updates |

**Rule:** Don't read everything at session start. Read HANDOFF.md → ROADMAP.md → then whatever the current phase requires.

## Playbook Rule (MANDATORY)

**Before every commit and before closing a session**, update the playbook:
`~/DATA/playbooks/web-presentations-playbook.md`

### What to record
Every decision — tool choice, design approach, architecture choice, copywriting method, anything that was tried.

### Format
```markdown
### [DATE] | Decision: short name
- **Context:** what we were doing, why
- **What we tried:** specific action
- **Result:** what happened
- **Verdict:** ✅ keeper | ❌ don't repeat | 🔄 needs refinement
- **Why:** explanation of the verdict
```

### When unsure about verdict
Ask Sati before recording. Don't guess — her evaluation matters more than mine.

### What counts as a decision
- Tool/library choice
- Design pattern or layout approach
- Copywriting technique
- Workflow step that worked or didn't
- Anything that took >10 min or produced a notable result

## Auto-Research Rule (MANDATORY)

When uncertain about tech stack, libraries, tools, or any technical decision where information may have changed since training cutoff — **automatically run EXA search**. Don't ask permission, just search.

EXA search settings for this project: **do not artificially limit results**. No low numResults, no restrictive contextMaxCharacters. We have Claude Max subscription with 1M context and doubled limits until end of March 2026. Quality over economy.

## Documentation Rule (MANDATORY)

Maintain professional project documentation at all times:
- README files for every directory — explain what belongs there
- YAML frontmatter headers on all .md files (title, description, created, status)
- ROADMAP.md — always current, reflects actual progress
- CHANGELOG.md — updated every session
- HANDOFF.md — session handoff notes for continuity
- Architecture docs — updated when decisions change
- **Nexi owns documentation quality.** Don't wait to be asked. If docs are stale or missing — fix them proactively.

## Cross-Validation Rule

Before finalizing architecture, roadmap, or major technical decisions — prepare prompts for Gemini and ChatGPT review. Sati will run them and bring feedback back. This caught issues on Kuvalda project.

## Reference Project
Previous (larger scope) attempt with research, competitors, copywriting:
`/Users/eternity/PROJECTS/kit-content-factory/`

Key assets there:
- `research/` — competitor analysis, audiences, messaging
- `research/products/PRODUCTS.md` — KIT product data
- `research/creative/` — creative briefs
- `docs/` — pipeline plans, prompts

## Brandbook (Figma)
~138 slides. Sections: Logo, Colors (HEX), Fonts (PP Pangram Sans), Design elements, Photos, Animation, Social media, UI/UX, Ad layouts, Branches, Merch.
Access via Figma MCP when connected.

## Tech Decisions Log
- **Stack:** Next.js on Vercel (convenience > portability for now; KIT can use Node.js server later)
- **Animations:** GSAP ScrollTrigger for horizontal scroll; Framer Motion as Plan B / micro-animations
- **Analytics:** Vercel Analytics (pageviews, Web Vitals) + Umami (custom events, self-hosted)
- **Telegram CTA:** Serverless function on Vercel API route
- **Design system extraction:** Figma MCP → design tokens → Tailwind config
- **Prototyping tools:** v0.dev (free tier), AI Studio, Pencil.dev (experiment)
- **No SEO needed** during development; plan for noindex in production
