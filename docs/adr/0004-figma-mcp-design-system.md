---
title: "ADR 0004: Figma MCP for design system extraction"
description: Using Figma MCP to extract brandbook into code-ready design tokens
created: 2026-03-16
status: accepted
---

# ADR 0004: Figma MCP for Design System Extraction

## Status
Accepted

## Context
KIT has a professional brandbook (138 slides in Figma) that has never been properly applied to digital products. We need to extract: colors, fonts, spacing, design elements, and any UI patterns into a code-ready design system (Tailwind config + CSS variables).

## Options Considered

### 1. Manual extraction
- Read Figma visually, manually transcribe values to code
- **Cons:** Slow, error-prone, doesn't scale

### 2. Figma plugin export (Tokens Studio)
- Export to JSON, run through Style Dictionary
- **Pros:** Structured output
- **Cons:** Extra manual steps, plugin may not capture everything

### 3. Figma MCP (direct Claude Code access)
- Claude reads Figma file via MCP, extracts tokens automatically
- **Pros:** Fastest, AI can interpret design intent not just values, stays in Claude Code workflow
- **Cons:** Needs personal access token, large file may need targeted reads

## Decision
Figma MCP as primary method. Read specific brandbook sections (Colors, Fonts, Design elements, UI/UX) and generate design tokens. Use Tokens Studio as fallback if MCP can't read certain elements.

## Consequences
- Need Figma personal access token from Sati
- Read brandbook section by section (not all 138 pages at once)
- Output: Tailwind config + CSS variables file
- Record extraction experience in playbook (first use of this pipeline)
