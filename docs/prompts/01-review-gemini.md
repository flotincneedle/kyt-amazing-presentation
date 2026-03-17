This is an incredibly well-thought-out project plan. You’ve done a great job defining the business value, the user journey, and the technical constraints. As a product consultant and architect, I love the focus on business logic over flashy tech.

However, since you're a solo vibecoder relying on AI for the actual code execution, there are some hidden landmines here. AI is fantastic at writing isolated components, but it struggles with complex, interdependent state logic and niche mobile browser quirks.

Here is my direct, unfiltered review of your architecture and roadmap.

### 1. Critical Issues (Must fix before starting)

- **Security vs. Distribution Contradiction:** You explicitly mention that KIT has regulatory exposure for gray-zone products, and you rely on "noindex/robots.txt" to hide it. **This is highly dangerous.** You are sending this to 150,000 people. Links _will_ leak. They will be shared on public forums or indexed by aggressive bots that ignore `robots.txt`. If regulatory exposure is a real risk, **token-gating or a simple PIN/Auth wall is mandatory from Day 1**, not a "maybe".
    
- **The Telegram In-App Browser vs. GSAP Scrolljacking:** 80%+ of your users will open this via Telegram. Telegram uses an in-app browser (WebView). In-app browsers are notoriously awful at handling scroll-linked animations (GSAP ScrollTrigger pin+scrub). Worse, Telegram uses horizontal swiping to close the browser or go back. If you build a horizontal scroll experience on mobile, users will accidentally close the presentation while trying to see their "money move."
    
    - _Fix:_ On mobile, abandon the horizontal scroll. Stack the timeline vertically, or use native CSS `scroll-snap` for a carousel. Save GSAP pin+scrub for desktop only.
        
- **Constructor Scope Creep (The Logic Matrix):** You are building a rules engine. "Money Form + Location A → Money Form + Location B = Dynamic Compound Product." This is exponential complexity. If you have 5 money forms and 4 regions, that’s hundreds of permutations. AI coding tools will get trapped in infinite loops trying to debug the `if/else` matrix for this state.
    
    - _Fix:_ Before writing a single line of code, you must define a strict JSON schema or mapping table of _exactly_ which inputs yield which outputs. Do not let the AI write the logic dynamically; feed it a hardcoded configuration file to map routes.
        
- **"Smart Search" Autocomplete Scope Creep:** Phase 4 mentions "City/country autocomplete with smart search." Building this from scratch with custom data is a massive time sink.
    
    - _Fix:_ Use a simple, pre-defined dropdown list of regions/cities KIT actually supports, or plug in a lightweight third-party API. Do not build a custom fuzzy-search autocomplete.
        

### 2. Important Concerns (Address during development)

- **State Management is Missing:** The user clicks through the Constructor (Phase 4), views the Timeline (Phase 5), and clicks Submit (Phase 6). Where does that data live in the meantime? If the user refreshes, do they lose it?
    
    - _Recommendation:_ Store the constructor state in the **URL Search Parameters** (e.g., `?from=crypto&to=cash&locA=kyiv`). This solves two problems: it gives you a rock-solid state management system, AND it accidentally builds your "Near-term vision" (Phase 3) where sales managers can send pre-configured, unique URLs to clients.
        
- **AI Context Limits with Next.js App Router:** You chose Next.js. If you use the newer App Router (which AI will default to), Claude Code might struggle with the boundaries between Server Components and Client Components, especially when dealing with GSAP and complex state.
    
    - _Recommendation:_ Force the AI to use `"use client"` heavily for the interactive parts, or strictly enforce a monolithic client-side approach for the presentation tier.
        
- **Figma MCP Assumption:** Trusting an AI to extract a cohesive design system from a 138-page Figma brandbook via an MCP is a very risky assumption. AIs often hallucinate CSS variables or extract them inconsistently.
    
    - _Recommendation:_ Manually export the 5-10 core colors, 3 typography rules, and spacing scales. Feed them to Claude in a simple Markdown file to generate the `tailwind.config.js`. It will take you 20 minutes and save hours of AI debugging.
        

### 3. Suggestions (Nice to have, not blocking)

- **Vite vs. Next.js:** If this site is never going to be indexed (SEO doesn't matter) and is highly interactive, Vite + React is actually a much better choice than Next.js. It's lighter, faster to build, and AI makes fewer architectural mistakes with it. You can host your Telegram serverless function independently on Vercel or Supabase Edge Functions.
    
- **Timeline Reality Check:** "No phase takes more than a few days." As a vibecoder, Phases 1-3 will take days. Phases 4 (Constructor) and 5 (GSAP) will take **1-2 weeks each**. Integrating animations with complex state logic is where AI coding agents struggle the most. Adjust your expectations so you don't get discouraged.
    

### 4. What's Actually Good

- **The UX Core:** Focusing on a "Constructor" that translates complex financial bureaucracy into a simple "From X to Y" visual is brilliant product design.
    
- **Analytics Strategy:** Using Vercel for vitals and self-hosted Umami for privacy-friendly event tracking is the exact right stack for a financial product.
    
- **The "Playbook" Meta-Goal:** Documenting the prompts and workflows as a secondary product is incredibly smart and forward-thinking.
    
- **Phased Rollout:** Your milestones are perfectly scoped to show tangible progress to stakeholders quickly.
    

---

**Next Step:**

Would you like to tackle the **Security/Auth requirement** first (deciding how to safely token-gate this), or should we draft the **JSON Data Schema** for the Constructor to ensure the AI doesn't get confused by the logic?