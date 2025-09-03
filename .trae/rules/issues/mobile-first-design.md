────────────────────────────────────────
MOBILE & RESPONSIVE DESIGN REFERENCE GUIDE
FOR LANGUAGE-MODEL CODE GENERATORS
────────────────────────────────────────
Version: 2025-07-27  
Audience: AI agents that write or review HTML/CSS/JS  
Purpose: Provide deterministic, guard-railed, end-to-end knowledge so that every generated mobile-first interface is:

1. Mathematically consistent  
2. Psychologically safe & usable  
3. Technically correct with Tailwind CSS  
4. Resistant to counter-intuitive or inaccessible outputs  

────────────────────────────────────────
TABLE OF CONTENTS
A. Foundational Theory  
B. Mathematical Models & Guardrails  
C. Perceptual & Cognitive Psychology Rules  
D. Tailwind CSS Mobile Primitives & Guardrails  
E. Code-Generation Guardrails & “AI Red-Flag” List  
F. Quick-Reference Cheatsheets  
G. Meta-Instructions for Self-Correction  
────────────────────────────────────────

A. FOUNDATIONAL THEORY
----------------------
1. Mobile-First Philosophy  
   - Progressive Enhancement: smallest screen → up  
   - Graceful Degradation fallback must never remove core content or actions.  
   - Constraint-Driven Design: treat 360×640 CSS-px as the canonical viewport.

2. Responsive Breakpoint Theory  
   - Breakpoints are NOT arbitrary; they map to statistically dominant device widths:  
     360, 390, 428, 768, 834, 1024, 1280, 1440, 1920  
   - Tailwind default: sm:640 md:768 lg:1024 xl:1280 2xl:1536  
   - AI Rule: If you override, you MUST document the statistical source and commit to ≥2 yrs support.

3. Viewport & Environment Variables  
   - env(safe-area-inset-top/right/bottom/left) must be respected on iOS/Android notches.  
   - AI must auto-inject safe-area padding on fixed headers/footers when viewport-fit=cover.

4. Interaction Paradigms  
   - Thumb Zone Heatmap (Hoober 2014): 2/3 of touches fall within green zone (bottom 2").  
   - Fat-Finger Rule: 44×44 pt Apple, 48×48 dp Google minimum tappable area.  
   - Hover ≠ existence on mobile; AI must never rely on :hover to reveal critical UI.

B. MATHEMATICAL MODELS & GUARDRAILS
-----------------------------------
1. Modular Scale & Typography  
   Base = 1 rem = 16 px.  
   Scale ratios:  
   - Minor Third 1.2 (safe for body)  
   - Major Third 1.25 (marketing headings)  
   - Never exceed 1.414 (√2) per step on <768 px screens to avoid overflow.  

   Guardrail: Always clamp() between min and max viewport widths to prevent runaway text.

2. Layout Grid  
   - 4-pt soft grid for micro-spacing (material)  
   - 8-pt hard grid for macro-spacing (iOS)  
   - Gutter: 16 px ≤ w < 600 px, 24 px ≥ 600 px  
   - Column formula: `width = (100% - (n-1)*gutter)/n` where n ∈ {1,2,4,8} for mobile.

3. Aspect Ratio & Image Sizing  
   - Use w-full aspect-[x/y] Tailwind class; never fixed height.  
   - Srcset: 320w, 640w, 1280w; AI must generate sizes="(max-width: 640px) 100vw, 50vw".

4. Performance Budget  
   - <150 KB critical CSS/JS per route (compressed).  
   - Largest Contentful Paint < 2.5 s on 4G throttling (RTT 150 ms, 1.6 Mbps down).  
   - AI must warn if bundle exceeds budget and suggest code-splitting.

C. PERCEPTUAL & COGNITIVE PSYCHOLOGY
------------------------------------
1. Miller’s Law: ≤7 items in primary nav; chunk secondary into overflow.  
2. Fitts Law: Minimize D (distance) & maximize W (width) for primary actions → bottom-right FAB.  
3. Change Blindness: Any state change ≥150 ms must have motion or color cue.  
4. Cognitive Load Theory:  
   - Intrinsic load = task difficulty (unchangeable)  
   - Extraneous load = UI noise (eliminate)  
   - Germane load = schema building (optimize)  
   AI must auto-remove decorative elements that do not support schema building.

5. Color & Accessibility  
   - WCAG 2.2 AA: 4.5:1 body text, 3:1 large text.  
   - Never convey meaning by hue alone (red-green color-blind 8 % male).  
   - Prefer HSL color space for predictable perceptual lightness.

D. TAILWIND CSS MOBILE PRIMITIVES
---------------------------------
1. Breakpoint Prefixes  
   <empty> = mobile first  
   sm: ≥640, md: ≥768, lg: ≥1024, xl: ≥1280, 2xl: ≥1536  
   AI must NOT use max-width variants unless explicitly requested.

2. Spacing Scale  
   0, 0.5, 1, 1.5, 2, 2.5 … 96 (rem-based)  
   Guardrail: only use steps divisible by 0.25 rem for micro-spacing to align with 4-pt grid.

3. Layout Utilities  
   - flex, grid, block, contents  
   - grid-cols-* limited to 1–4 on <768 px  
   - AI must prefer flex-col on mobile; grid only when 2-D required.

4. Responsive Typography  
   text-xs to text-9xl; AI must combine with clamp():  
   `class="text-xl sm:text-2xl md:text-3xl lg:text-4xl"`  
   OR auto-generate:  
   `class="text-[clamp(1rem,1rem+2vw,2.5rem)]"` (guardrail: test overflow at 320 px).

5. Safe-Area & Overscroll  
   - `pt-safe`, `pb-safe` custom utilities must be injected:  
     `.pt-safe { padding-top: env(safe-area-inset-top, 0); }`

E. CODE-GENERATION GUARDRAILS
-----------------------------
1. Forbidden Patterns  
   ✗ fixed px widths > 100 % viewport  
   ✗ hover-only menus  
   ✗ overflow-x: hidden on body  
   ✗ more than 3 web fonts  
   ✗ synchronous JS > 1 KB blocking render  

2. Required Patterns  
   ✓ `<meta name="viewport" content="width=device-width,initial-scale=1">`  
   ✓ `<link rel="preload">` for LCP image & fonts  
   ✓ `aria-label` on icon-only buttons  
   ✓ `touch-action: manipulation` on buttons to remove 300 ms delay

3. AI Red-Flag Checklist (run after every generation)  
   - [ ] Any horizontal scroll at 360 px?  
   - [ ] Tap targets < 44×44 px?  
   - [ ] Color contrast < AA?  
   - [ ] Font-size < 14 px body copy?  
   - [ ] Off-canvas nav without focus trap?  
   - [ ] CLS > 0.1? (layout shift)

4. Auto-Correction Hooks  
   If any red-flag is true, AI must:  
   - log the issue with line number,  
   - propose patch using Tailwind utilities only,  
   - rerun checklist until clean.

F. QUICK-REFERENCE CHEATSHEETS
------------------------------
1. Tailwind Mobile Snippet Template
```html
<main class="min-h-screen bg-gray-50 pt-safe pb-safe">
  <header class="sticky top-0 z-20 bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 flex items-center justify-between h-14">
      <h1 class="text-lg font-semibold truncate">Title</h1>
      <button class="p-2 rounded-full active:bg-gray-200" aria-label="Menu">
        <svg class="w-6 h-6">…</svg>
      </button>
    </div>
  </header>

  <section class="px-4 py-6">
    <h2 class="text-[clamp(1.25rem,1.25rem+1vw,2rem)] font-bold mb-4">
      Section
    </h2>
    <div class="grid grid-cols-2 gap-4">
      <!-- cards -->
    </div>
  </section>

  <nav class="fixed inset-x-0 bottom-0 bg-white border-t border-gray-200 pb-safe">
    <div class="flex justify-around items-center h-16">
      <a class="flex flex-col items-center space-y-1 text-indigo-600">
        <svg class="w-6 h-6">…</svg>
        <span class="text-xs">Home</span>
      </a>
      …
    </div>
  </nav>
</main>
```

2. Media Query Equations (for manual overrides)  
   `font-size = minFont + (maxFont - minFont) * (100vw - minW) / (maxW - minW)`  
   Clamp in CSS:  
   `clamp(1rem, 1rem + 0.5vw, 1.5rem)`

G. META-INSTRUCTIONS FOR SELF-CORRECTION
----------------------------------------
1. Always generate code inside <template id="ai-generated"> so downstream linters can diff.  
2. After generation, run the Lighthouse CLI programmatically:  
   - Performance ≥ 90 mobile  
   - Accessibility ≥ 95  
   - Best Practices ≥ 95  
   - SEO ≥ 90  
   If any metric fails, emit a JSON patch block with fixes.

3. Version Pinning  
   - Lock Tailwind version 3.x (or 4.x) in package.json  
   - State browser support: last 2 versions, not dead, >0.5 %

4. Final Guardrail  
   The AI must append the following comment to every generated file:  
   /* AI-GUARD: This file was auto-generated under mobile-first constraints.  
      Do not edit manually; run `npm run lint:mobile` to regenerate. */

────────────────────────────────────────
END OF GUIDE