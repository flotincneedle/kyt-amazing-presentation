Here’s the blunt version. This PRD is directionally solid, but there are several **high-risk blind spots** that will hurt you hard during implementation—especially given solo + AI tooling + Telegram WebView constraints.

---

# 🚨 Top 3 things that will cause the most pain

### 1. **You’re massively underestimating Telegram WebView constraints**

You’re designing like it’s a normal browser. It’s not.

**What will break or degrade:**

- Scroll-driven animations (bento fly-in)
    
- Continuous hero animation (conveyor)
    
- Blur / backdrop filters in header
    
- Performance on mid-tier Android devices (very real for UA audience)
    

**Consequence:**  
The site will feel _laggy, glitchy, or broken_ → kills trust instantly for a financial product.

👉 You need a **“WebView-first fallback mode” defined in the PRD**, not “simplify if needed”.

---

### 2. **The hero (conveyor animation) is conceptually unclear + technically risky**

Right now it’s:

> “requests go in → KIT pill → results come out”

Problems:

- It’s **abstract**, not obviously understandable in 2–3 seconds
    
- Requires **reading moving text** → terrible UX on mobile
    
- Animation complexity is high for MVP
    
- No guarantee users will even notice the transformation logic
    

**Consequence:**  
You burn most of your effort on something users don’t understand.

👉 This is classic “cool idea, low communication efficiency”.

---

### 3. **No real user flow defined (just pages)**

This is the biggest product gap.

You have:

- Pages ✔
    
- Blocks ✔
    
- Animations ✔
    

But you don’t have:

- What users actually _do_
    
- Decision paths
    
- Failure paths
    
- Behavioral intent
    

**Example gaps:**

- What if user doesn’t know which product they need?
    
- What if they open from Telegram → get distracted → come back?
    
- What if they tap CTA but Telegram fails to open?
    
- What if PIN is shared?
    

**Consequence:**  
You’re building a красивый лендинг, not a conversion system.

---

# 1. Gaps & Contradictions

### ❌ “No backend” vs real-world needs

You say:

- No backend
    
- PIN client-side
    
- Telegram CTA only
    

But:

- You’re sending this to **150K users**
    
- With **gray-zone products**
    

**Missing:**

- Rate limiting / abuse protection
    
- PIN leakage handling (it _will_ leak)
    
- Ability to rotate PIN without redeploy friction
    
- Analytics (you explicitly removed it)
    

👉 This is not aligned with the scale.

---

### ❌ “Respect the audience” vs ultra-minimal copy

The wisprflow pattern:

- Big text (2–6 words)
    
- Tiny explanation
    

Works for:

- Dev tools
    
- Trendy SaaS
    

**Does NOT naturally fit:**

- Financial services
    
- High-trust, high-risk decisions
    

Your audience may need:

- Reassurance
    
- Clarity
    
- Specifics
    

👉 You risk sounding **too vague / too “marketing”**.

---

### ❌ “Flexible product pages” vs consistency

You say:

> “flexible, not rigid”

But:

- No rules for when to use which blocks
    
- No hierarchy defined
    
- No max length
    

👉 Result: inconsistent pages, harder to maintain, harder to scale.

---

# 2. Mobile UX Risks (critical)

### ⚠️ Telegram WebView specifics you didn’t account for

**1. Viewport height issues**

- `vh` is broken in WebView (especially iOS)
    
- Fullscreen sections will jump
    

**2. Keyboard + input (PIN gate)**

- Input focus may shift layout badly
    
- No mention of handling this
    

**3. Scroll performance**

- Multiple animated elements = dropped frames
    

**4. Tap targets**

- Bento grid cards: need large, safe tap zones
    
- No spec for spacing / padding
    

---

### ⚠️ Animation overload

You have:

- Hero animation
    
- Bento fly-ins
    
- Hover states (irrelevant on mobile)
    
- Possibly accordion animations
    

👉 Combined = too much for mobile.

**Missing rule:**

> “Max 1 animated system per screen”

---

### ⚠️ Sticky header + Telegram UI

- Telegram already has its own top bar
    
- Your sticky header competes for space
    

👉 Risk: cramped viewport, especially on smaller phones

---

# 3. Scope Creep Signals

### 🚩 “Simple animation” (hero conveyor)

This is NOT simple.

Includes:

- Continuous looping
    
- Dynamic text rotation
    
- Synchronization (in → transform → out)
    
- Responsive layout (desktop vs mobile)
    

👉 This alone can eat **50% of your dev time**.

---

### 🚩 Bento grid “from another site”

Translation:

> “Looks simple visually, but implementation is custom”

Problems:

- Responsive layout complexity
    
- Animation coordination
    
- Content dependency (copy length affects layout)
    

---

### 🚩 “Flexible product pages”

Flexibility = hidden complexity:

- More decisions per page
    
- More edge cases
    
- More layout bugs
    

---

### 🚩 “Progressive disclosure”

Accordion / expandables:

- Need state management
    
- Animation
    
- Edge cases (multiple open, scroll jumps)
    

---

# 4. Copywriting Structure (wisprflow pattern)

Short answer: **partially wrong for this use case**

### What works:

- Headlines → good for scanning
    
- Clean structure → good for mobile
    

### What doesn’t:

- Financial services need **trust signals**
    
- Your current system lacks:
    
    - Proof
        
    - Specificity
        
    - Risk framing
        

---

### What’s missing:

You need at least one of:

- Concrete numbers (not just stats)
    
- Real examples
    
- Constraints (“від X суми”, “до Y часу”)
    

---

### Recommendation:

Keep the structure BUT add a third layer:

- Big text → hook
    
- Small text → explanation
    
- **Micro-proof → credibility**
    

---

# 5. Missing Pages / Flows

### ❌ PIN flow is underdefined

Missing:

- What happens on:
    
    - 3+ failed attempts?
        
    - Reload?
        
    - Expired session?
        
- Is access remembered? (localStorage?)
    
- Can user share unlocked link?
    

---

### ❌ No “empty understanding” flow

User thinks:

> “I don’t know what I need”

You don’t handle this.

👉 Missing:

- “Describe your task” CTA variant
    
- Or guided entry point
    

---

### ❌ No fallback for CTA

What if:

- Telegram not installed
    
- Link blocked
    
- Desktop user
    

👉 Need:

- Copy fallback (e.g. “копіювати текст”)
    
- Or secondary contact
    

---

### ❌ No error states anywhere

- Broken navigation?
    
- Slow load?
    
- Animation fail?
    
- Network issues?
    

Zero mention.

---

# 6. Hero Conveyor — honest take

### Concept problem:

It’s trying to show:

> “We transform complex requests into results”

But:

- Requires cognitive effort
    
- Requires reading motion text
    
- Not instantly obvious
    

---

### UX reality on mobile:

User will:

- Glance
    
- Not read moving text
    
- Scroll immediately
    

👉 Meaning is lost.

---

### Technical risk:

- Continuous animation = CPU drain
    
- Text readability issues
    
- Sync bugs
    

---

### Recommendation:

If you keep it:

- Make it **static-first, animated-second**
    
- Ensure message works **without animation**
    

---

# 7. Bento Grid + Fly-in Animation

### Risks:

**1. Scroll-triggered animations in WebView**

- Often janky
    
- IntersectionObserver unreliable in some cases
    

**2. Timing issues**

- User scrolls fast → animations skipped or half-played
    

**3. Cognitive overload**

- 6 moving elements entering from different directions
    

---

### Hidden issue:

You’re optimizing for:

> “wow effect”

Instead of:

> “fast comprehension”

---

### Recommendation:

- Reduce to **fade + slight translate**
    
- Same direction for all cards
    
- No “flying from different vectors”
    

---

# 8. Compound Block (main page)

This is actually one of your strongest ideas conceptually.

But placement is questionable.

### Problem:

You’re introducing:

- The most complex concept
    
- In the middle of the main page
    
- Without user context
    

---

### Risk:

Users don’t yet understand individual products →  
you show combinations → cognitive overload

---

### Recommendation:

Either:

- Move it **after user explores a product**
    
- Or simplify to **1 ultra-clear example**
    

---

# 9. What’s Missing from Open Items

Big omissions:

### 🔴 Legal / compliance framing

Even minimal:

- “інформаційний матеріал”
    
- disclaimers for crypto
    

---

### 🔴 Performance budget

No constraints like:

- Max JS size
    
- Animation limits
    

---

### 🔴 Content length limits

No rules = layout breaks

---

### 🔴 Analytics (even minimal)

You removed Umami, but you need:

- At least click tracking (CTA)
    

---

### 🔴 Accessibility

- Font sizes
    
- Contrast
    
- Motion reduction
    

---

### 🔴 Session behavior

- How long is PIN valid?
    
- Stored where?
    

---

# Final Verdict

This PRD is:

- **Visually ambitious**
    
- **Under-specified where it matters most (flows, constraints, behavior)**
    

You’ve solved:

- Scope explosion (good)
    
- Tech stack clarity (good)
    

But now you’re at risk of:

> Overdesigning visuals and underdesigning user reality

---

# If I were you, before writing a single line of code:

1. **Kill or radically simplify the hero animation**
    
2. **Define a WebView-safe mode (not optional)**
    
3. **Write actual user flows (not just pages)**
    

If you want, I can rewrite this PRD into a **“buildable version”** that removes ambiguity and protects you from 80% of implementation pain.