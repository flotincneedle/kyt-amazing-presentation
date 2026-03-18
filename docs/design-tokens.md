---
title: KIT Group — Design Tokens
description: Complete design tokens extracted from the official KIT brandbook (138 slides, Figma export). Colors, typography, logo system, brand elements, UI patterns.
type: reference
tags: [design, tokens, brandbook, colors, typography, kit]
created: 2026-03-17
status: active
---

# KIT Group — Design Tokens

Extracted from the official KIT brandbook (Figma export, ~138 slides).
Source: `assets/brandbook/Guidelines (Copy) (Copy)/`

---

## 1. Colors

### 1.1 Primary Colors (Основні кольори)

| Name | HEX | Usage |
|------|-----|-------|
| **Yellow Push** | `#FFFC8D` | Primary brand color. Backgrounds, hero sections, CTA buttons, nav bar |
| **Bright Grey** | `#EDEDED` | Section backgrounds, cards, UI surfaces |
| **Carbon Black** | `#2C3030` | Logo, headings, dark backgrounds, nav bar background in app UI |

> Confirmed via Figma MCP (2026-03-17). Yellow Push and Bright Grey were previously approximate — now exact from Figma fill definitions.

### 1.2 Auxiliary Colors (Допоміжні кольори)
Used in online communications and UI elements. Recommended for social media to add visual variety.

**Greys:**
| HEX | Visual |
|-----|--------|
| `#868686` | Medium grey |
| `#BFBEBE` | Light grey |
| `#DDDDDD` | Very light grey |
| `#EDEDED` | Near-white grey |

**Teals / Greens:**
| HEX | Visual |
|-----|--------|
| `#31858B` | Dark teal |
| `#2EA2B4` | Medium teal |
| `#58B592` | Green |

**Light / Warm:**
| HEX | Visual |
|-----|--------|
| `#FFFCB9` | Pale yellow (warm off-white) |
| `#CFEBEB` | Ice blue / mint |

**Accent:**
| HEX | Visual |
|-----|--------|
| `#FB4B60` | Pink-red (Figma: `#FB4B60`, brandbook PNG: `#CE4861`) |
| `#6095E4` | Cornflower blue (Figma also has `#73A4EE` variant) |
| `#5562C3` | Purple-blue / indigo |

### 1.3 Color Usage Rules
- **Screens / digital:** Use HEX values
- **Facade film (Oracal):** Use Oracal codes
- **Print:** Use CMYK or Pantone
- Primary Yellow + Carbon Black = core brand combination
- Dark bg with Yellow text or Yellow bg with Carbon Black text = both valid
- Bright Grey bg is used for neutral/secondary sections
- Social media: use auxiliary colors for variety alongside primary three

### 1.4 Recommended Tailwind Config

```js
colors: {
  brand: {
    yellow: '#FFFC8D',     // Yellow Push — confirmed via Figma MCP
    black: '#2C3030',      // Carbon Black — confirmed
    grey: {
      light: '#EDEDED',    // Bright Grey — confirmed via Figma MCP
      DEFAULT: '#DDDDDD',
      medium: '#BFBEBE',
      dark: '#868686',
    },
  },
  accent: {
    teal: {
      dark: '#31858B',
      DEFAULT: '#2EA2B4',
    },
    green: '#58B592',
    paleYellow: '#FFFCB9',
    iceMint: '#CFEBEB',
    red: '#FB4B60',        // Updated from Figma (was #CE4861 from PNG)
    blue: '#6095E4',
    indigo: '#5562C3',
  },
}
```

---

## 2. Typography

### 2.1 Font Stack

| Font | Role | Weights | Where Used |
|------|------|---------|------------|
| **PP Pangram Sans** | Accent / Brand | Medium, SemiBold, **Bold** | Logo wordmark, headlines, advertising, branch signage, outdoor |
| **Inter** | Web base | Regular, Medium, **SemiBold**, **Bold** | Website, online services, Google Slides/Docs |
| **SF Pro** | iOS system | System defaults | kytapp iOS |
| **Roboto** | Android system | System defaults | kytapp Android |

### 2.2 Usage Rules
- PP Pangram Sans = visual identity, not for body text on web
- Inter = the correct choice for all web/online product UI
- "Different tasks — different fonts. All are readable grotesques with similar character."
- Logo wordmark "kytapp" is set in **PP Pangram Sans SemiBold**
- Inter is available free via Google Fonts

### 2.3 Recommended CSS Variables

```css
:root {
  --font-brand: 'PP Pangram Sans', sans-serif;   /* headlines, hero */
  --font-body: 'Inter', sans-serif;               /* all web UI text */
}
```

### 2.4 Type Scale (inferred from web mockups)

| Role | Font | Weight | Approx Size |
|------|------|--------|-------------|
| Hero headline | PP Pangram Sans | Bold | 48–72px |
| Section headline | PP Pangram Sans | SemiBold | 32–48px |
| Card title | Inter | SemiBold | 20–24px |
| Body text | Inter | Regular | 14–16px |
| Body label/secondary | Inter | Regular | 12–14px, color `#868686` |
| CTA button | Inter or PP Pangram Sans | SemiBold/Bold | 14–16px |
| Nav links | Inter or PP Pangram Sans | Medium | 13–14px, uppercase |

---

## 3. Logo System

### 3.1 Logo Variants

| Variant | Description | Usage |
|---------|-------------|-------|
| **ФКИ Т** (Cyrillic wordmark) | Main brand identifier. Custom letterform — stylized К looks like currency symbol | Main logo, all brand materials |
| **КYТ** (Latin wordmark) | Same design, Latin letters | International / English context |
| **Circle mark (знак)** | Stylized К inside a circle — symbolizes a coin | Secondary / auxiliary. Used as badge, favicon, avatar |
| **kytapp** (lowercase) | PP Pangram Sans SemiBold, all lowercase | App logo, digital product contexts |
| **kytapp® (with circle mark)** | Mark + wordmark combined | App store, product communications |
| **Logo with descriptor** | ФКИ Т + "Фінансовий провайдер" or КYТ + "FinTech. Advisory. Investment." | Formal contexts |

### 3.2 Logo Rules (Do / Don't)
- Always lowercase "kytapp" — never "Kytapp" or "KYTAPP"
- Never use logo + mark simultaneously (redundant)
- Never distort circle/letter proportions
- Never place mark inside other shapes (rounded rect etc)
- Minimum clear space = 1 grid unit around logo
- Can be placed in any corner, along edges, or centered — adapts to layout needs

### 3.3 Color Combinations (confirmed from brandbook)

| Background | Logo/Text color |
|------------|-----------------|
| Yellow Push | Carbon Black |
| Carbon Black | Yellow Push or White |
| Bright Grey | Carbon Black |
| White | Carbon Black |

### 3.4 SVG Source
The `Group.svg` file contains the full KIT wordmark (ФКИ Т) as paths in `fill="#2C3030"`.
Viewbox: `0 0 533 170` — use this for precise proportional scaling.

---

## 4. Brand Graphic Elements

### 4.1 Circle (Коло)
- Core brand shape — derived from the logo mark (К inside circle = coin symbol)
- Used as: profile picture container, badge/lightbox on signage, decorative element
- On yellow bg: Carbon Black circle with Yellow К inside
- On dark bg: Yellow circle with dark К inside
- On light/grey bg: Yellow filled circle

### 4.2 Line / Motion Element
The brandbook's social media cover features a distinctive **fluid line + circle** composition:
- A large sweeping cursive/organic line (resembles letter "e" or running figure path)
- A solid circle (dot) at the end of the line — like a person or ball in motion
- Renders the brand tagline "Гроші люблять рух" (Money loves movement) visually
- Color: Carbon Black on Yellow background
- This is the hero motion graphic of the brand — animated versions expected

### 4.3 Arrow Element
- Simple upward-right arrow used in icon buttons (e.g. "Зберігання активів" card)
- Appears as an icon inside a Carbon Black rounded circle

### 4.4 Decorative Curve (from Web Landing)
- Small curved arrow (→ but organic) used as a section separator/transition graphic
- Color: Carbon Black on white background
- Appears between hero image and "Гроші люблять рух" heading section

---

## 5. UI Patterns (from Web Mockups)

### 5.1 Navigation (Desktop — kyt.finance landing)
- Background: **Yellow Push**
- Logo: ФКИ Т in Carbon Black
- Nav links: Carbon Black, uppercase, spaced, Inter/PP Pangram Sans
- CTA button: "КУТАРР" — Carbon Black pill button on right

### 5.2 Navigation (Desktop — kytapp web app)
- Background: **Carbon Black** (`#2C3030`)
- Logo: Yellow circle mark + "kytapp" in white/yellow
- Nav links: White/light grey, spaced caps
- User/chat icons on right

### 5.3 Hero Section (Landing)
- Full-width image with overlay
- Yellow headline text over photo
- Yellow CTA button (pill shape, "Про кутарр")
- Tagline: "Керуйте готівкою зі смартфону"

### 5.4 Cards (Web App dashboard)
- Background: `#EDEDED` or `#DDDDDD` (light grey)
- Rounded corners (approx 12–16px)
- Title: Inter SemiBold, Carbon Black, large
- Description: Inter Regular, grey (`#868686`)
- Icon: Carbon Black rounded pill/circle with line icon inside
- Layout: 3-column grid

### 5.5 CTA Buttons
| Variant | Background | Text | Shape |
|---------|------------|------|-------|
| Primary (light bg) | Yellow Push | Carbon Black | Pill (full radius) |
| Primary (dark bg) | Yellow Push | Carbon Black | Pill |
| Secondary | Carbon Black | White | Pill |
| Ghost | Transparent | Carbon Black | Pill with border |

### 5.6 Data / Rates Table
- Background: white or very light grey
- Currency labels (USD, EUR, PLN): Carbon Black small pill tags
- Numbers: Inter Medium/SemiBold
- Active row or booking panel: Carbon Black bg, Yellow CTA button

### 5.7 Footer
- Background: White
- Links: Inter Regular, grey
- Phone number: Inter SemiBold, dark
- Social icons: monochrome (Facebook, Instagram, LinkedIn, X/Twitter)
- App store badges (App Store + Google Play)

### 5.8 Mobile App (kytapp iOS)
- Dark navigation bar: Carbon Black with Yellow circle mark active state
- Tab bar: Carbon Black bg, icons white, active = Yellow circle mark
- Balance card: Yellow Push background, Carbon Black text
- Service cards: `#EDEDED` bg, Carbon Black text, 2-column grid
- Input fields: Light grey bg with rounded corners
- CTA: Yellow pill button, full width, Carbon Black bold text "ЗАБРОНЮВАТИ"
- Back arrow: Yellow color on dark bar

---

## 6. Spacing & Grid (Inferred)

No explicit spacing system defined in brandbook slides reviewed. Based on web mockups:

| Token | Value |
|-------|-------|
| Border radius — cards | 12–16px |
| Border radius — buttons/pills | 9999px (full) |
| Border radius — badge/icon circles | 50% |
| Border radius — app icon | ~22% of size (iOS squircle) |
| Card padding | ~24px |
| Section padding (desktop) | ~80–120px vertical |
| Nav height (desktop) | ~64–72px |
| Grid columns (desktop) | 3-column for cards |
| Max content width | ~1200–1280px (estimated) |

---

## 7. Brand Identity Summary

| Attribute | Value |
|-----------|-------|
| Brand name | КИТ (Kyrillic) / KYT (Latin) |
| App name | kytapp |
| Domain | kyt.finance |
| Tagline | "Гроші люблять рух" (Money loves movement) |
| Descriptor (UA) | Фінансовий провайдер |
| Descriptor (EN) | FinTech. Advisory. Investment. |
| Core visual tension | Yellow energy ↔ Carbon Black authority |
| Brand metaphor | Coin (circle), movement (line), flexibility (interwoven K letterform) |
| Tone | Modern, active, trustworthy, not corporate-stiff |

---

## 8. Open Questions / Gaps

- ~~**Yellow Push exact HEX**~~ — RESOLVED: `#FFFC8D` (confirmed via Figma MCP, 2026-03-17)
- ~~**Bright Grey exact HEX**~~ — RESOLVED: `#EDEDED` (confirmed via Figma MCP, 2026-03-17)
- **Type scale sizes** not explicitly defined — extracted from visual estimation of web mockups.
- **Spacing system** not defined in the slides reviewed — slides 42–47 covered logo usage rules, not a spacing grid. May exist in other slides not yet read.
- **Animation specs** referenced by "коло + лінія" motion graphic — no timing/easing data in static brandbook.
