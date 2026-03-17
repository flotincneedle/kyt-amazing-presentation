Here’s a **real, senior-level teardown**. I’m going to be blunt where needed — this is a strong concept, but there are several hidden traps that will hurt you fast if not addressed.

---

# 1. 🚨 Critical Issues (fix before starting)

## 1.1 Vision vs Reality: “Simple presentation” vs actually a configurator system

**Contradiction**

You describe:

- “web presentation”
    
- “not a product”
    

But you’re building:

- a **multi-step configurator**
    
- with **dynamic routing**
    
- **stateful logic**
    
- **scenario engine (compound chains)**
    
- **data passing to Telegram**
    
- **analytics per step**
    

👉 This is **not a presentation**.  
It’s a **mini product / decision engine**.

**Why this matters:**

- Architecture decisions change completely
    
- QA complexity explodes
    
- Edge cases become critical
    

**Fix:**  
Reframe internally:

> “We are building a lightweight product configurator disguised as a presentation”

---

## 1.2 The “constructor → timeline” logic is undefined (this will break)

Right now, the **core engine is missing**:

> How do inputs → map to product chains?

Examples:

- crypto → EUR cash Barcelona
    
- UAH → UAH Lviv
    
- metals → crypto → USD bank
    

❗ You do NOT have:

- mapping rules
    
- fallback logic
    
- validation rules
    
- impossible scenario handling
    

**This is the heart of the system. It’s not designed.**

**What will happen:**  
Claude will hallucinate logic → inconsistent outputs → broken trust

**Fix (mandatory before coding):**  
Define a **rule engine spec**, even simple:

```txt
INPUT:
- source_type
- target_type
- origin
- destination

OUTPUT:
- steps[] (ordered)
- products[]
- notes (optional)
```

Even a **hardcoded JSON matrix for 10–15 scenarios** is enough for MVP.

---

## 1.3 Telegram integration is naïvely scoped

You assume:

> “send to Telegram manager”

But real questions:

- One manager or many?
    
- Routing logic?
    
- What if multiple users click at once?
    
- Do you need CRM tracking?
    
- Do you need deduplication?
    

Also:

- Telegram bots **don’t naturally support “contextual conversation ownership”**
    
- Who replies? How tracked?
    

**Risk:**  
You build a dead-end funnel where:

- messages get lost
    
- no attribution
    
- no follow-up tracking
    

**Fix:**  
At minimum define:

- 1 chat vs multiple
    
- message format (structured JSON-like)
    
- include:
    
    - user ID (generated)
        
    - timestamp
        
    - UTM/source
        
- fallback if bot fails
    

---

## 1.4 Mobile UX is fundamentally broken (in current concept)

You say:

> 80% mobile  
> horizontal scroll timeline

This is a red flag.

### Problems:

- Horizontal scroll + vertical scroll conflict
    
- GSAP pinning on mobile = **jank city**
    
- Swipe gestures conflict with browser navigation
    
- Telegram in-app browser is **notoriously fragile**
    

**This WILL feel bad on mobile.**

**Fix (critical):**  
You need **mobile-first alternative UX**:

Instead of:

> horizontal scroll

Use:

- vertical step timeline
    
- or card progression
    
- or “step-by-step reveal”
    

👉 Desktop can keep the fancy horizontal version  
👉 Mobile MUST be simplified

---

## 1.5 “Few weeks” timeline is unrealistic

Let’s break it down honestly:

|Area|Real complexity|
|---|---|
|Design system extraction|medium|
|Constructor UX|high|
|Rule engine|high|
|Timeline animation|high|
|Mobile polish|very high|
|Telegram integration|medium|
|Analytics|medium|

👉 For a vibecoder + AI:

**Realistic MVP: 4–6 weeks minimum**

If you try “few weeks”:

- you’ll rush logic
    
- UX will degrade
    
- bugs in core flow
    

---

## 1.6 Missing error states = broken trust

No mention of:

- invalid combinations
    
- unsupported countries
    
- unavailable flows
    

Example:

> crypto → cash → restricted country

What happens?

If you fake it → trust destroyed  
If it breaks → user drops

**Fix:**  
Define:

- “unsupported scenario” UX
    
- fallback CTA:
    
    > “We’ll handle this manually — send request”
    

---

# 2. ⚠️ Important Concerns (during development)

## 2.1 Over-reliance on GSAP (risk of overengineering)

GSAP is powerful, but:

- heavy
    
- hard to debug with AI-generated code
    
- tricky on mobile
    

**Risk:**  
You spend 50% of time fixing animation instead of product

**Better approach:**

- Start with **no GSAP**
    
- ship static/vertical version
    
- add GSAP later as enhancement
    

---

## 2.2 Location input complexity is underestimated

“City/country autocomplete” sounds simple.

It’s not.

Problems:

- spelling variations
    
- languages (UA/RU/EN)
    
- geopolitical naming
    
- performance
    

**Fix:**  
For MVP:

- country dropdown
    
- optional city free text
    

Don’t overbuild here.

---

## 2.3 Analytics plan is incomplete

You track:

- clicks
    
- views
    

But missing:

- funnel drop-offs per step
    
- constructor abandonment
    
- Telegram conversion rate
    

Also:

- no user/session identity strategy
    

**Fix:**  
Generate:

- `session_id`
    
- attach to all events + Telegram message
    

---

## 2.4 “No SEO” ≠ safe from exposure

You rely on:

- noindex
    

But:

- links can leak
    
- Telegram links can be forwarded
    
- pages can be indexed accidentally
    

**If gray-zone products are sensitive, this is weak.**

**Better:**

- tokenized URLs (`?access=xyz`)
    
- or lightweight password gate
    

---

## 2.5 Copywriting constraint vs UX reality

You say:

> “1–2 sentences per product”

But:

- complex financial flows need clarity
    
- users WILL have questions
    

Risk:

- too minimal → confusion
    
- too detailed → violates vision
    

**Solution:**  
Use:

- progressive disclosure
    
    - 1 sentence
        
    - “expand” for more
        

---

# 3. 💡 Suggestions (non-blocking but high leverage)

## 3.1 Replace “timeline” with “decision explanation”

Instead of:

> visual animation-first

Think:

> “Explain what happens to my money”

Structure:

- Step 1: convert
    
- Step 2: transfer
    
- Step 3: payout
    

Clear > fancy

---

## 3.2 Precompute scenarios instead of generating dynamically

For MVP:

Don’t do:

- dynamic generation
    

Do:

- 10–20 predefined flows
    

Why:

- predictable
    
- testable
    
- faster
    

---

## 3.3 Use URL state instead of internal state

Make constructor output:

```
/result?from=crypto&to=eur&fromLoc=kyiv&toLoc=barcelona
```

Benefits:

- shareable
    
- debuggable
    
- analytics-friendly
    

---

## 3.4 Consider ditching Next.js (for now)

Your needs:

- static site
    
- light interactivity
    
- no SSR
    

Next.js adds:

- complexity
    
- hydration issues
    
- AI confusion
    

**Alternative:**

- Astro + React (cleaner)  
    OR
    
- even plain React + Vite
    

---

## 3.5 Telegram UX improvement

Instead of just:

> “open chat”

Send:

- prefilled message
    
- structured but readable
    

Example:

```
Request:
Crypto → EUR cash
Kyiv → Barcelona

User ID: 84723
```

---

# 4. ✅ What’s Actually Good (brief)

## Strong product thinking

- The **constructor idea is excellent**
    
- The **“show how it works”** is powerful
    
- Turning complexity into clarity = real value
    

## Distribution clarity

- 150K client base + Telegram = huge advantage
    
- You’re not relying on SEO → good focus
    

## Modular thinking

- Component system early = correct
    
- Playbook idea = very strong long-term
    

## Constraint awareness

- Legal awareness is sharp
    
- Non-indexed strategy makes sense (with improvements)
    

---

# Bottom line

This is a **high-potential product**, not a simple presentation.

Biggest risks:

1. ❌ No defined logic engine
    
2. ❌ Mobile UX mismatch (horizontal scroll)
    
3. ❌ Underestimated complexity
    
4. ❌ Telegram flow too naive
    

If you fix those → this can be **very powerful**.

---

If you want, next step I’d recommend:  
👉 I can help you design the **constructor logic system (the core brain)** — that’s the highest-leverage move right now.