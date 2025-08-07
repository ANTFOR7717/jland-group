
# Responsive Plan: `Process.astro` Component

**Objective:** Make the `Process.astro` component and its sub-components fully responsive for mobile and tablet devices using Tailwind CSS.

**Guiding Principles (Non-Negotiable):**

*   **No Scope Creep:** Only modify the files and components explicitly listed in this plan.
*   **No New Elements:** Do not introduce any new HTML elements.
*   **Preserve Desktop View:** The existing desktop layout must remain unchanged. All responsive changes must be applied using Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, etc.).
*   **Mobile-First Approach:** Design and implement for mobile first, then use `min-width` media queries (via Tailwind prefixes) to adapt the layout for larger screens.
*   **Pixel-Perfection Not Required (for now):** Focus on creating a functional and aesthetically pleasing responsive layout. Minor pixel deviations from a design are acceptable.

---

## Phase 1: `Process.astro` and `Layout.astro`

### Step 1.1: Modify `Layout.astro` for Responsive Columns

The `Layout` component currently uses `lg:flex-row` to switch to a two-column layout on large screens. We need to adjust this to ensure the columns stack vertically on mobile and tablet.

**File:** `src/components/ui/layout/Layout.astro`

**Task:**

1.  **Analyze `variantClasses`:** The `two-column` variant uses `flex flex-col lg:flex-row`. This is already a good mobile-first approach. No changes are needed here.
2.  **Analyze `columnClasses`:** The `getColumnClasses` function defines column widths. For the `two-column` variant, it uses `w-full lg:w-1/2`. This is also a good mobile-first approach. No changes are needed here.

### Step 1.2: Modify `Process.astro` for Responsive Layout

The `Process.astro` component uses the `Layout` component. We need to ensure the `Layout` component's responsive behavior is correctly applied.

**File:** `src/components/sections/Process.astro`

**Task:**

1.  **Analyze `Layout` component usage:** The `Layout` component is used with `variant="two-column"`. This is correct.
2.  **Analyze `Card` component usage:** The `Card` component has a fixed `width` and `height`. This will cause issues on smaller screens. We need to make these responsive.

    *   **Locate the `Card` component:** It's inside the `Layout` component with `slot="right"`.
    *   **Modify the `Card` component's props:**
        *   Change `width="608px"` to `width="w-full"`
        *   Change `height="709.32px"` to `height="h-auto"`
        *   Add `class="lg:w-[608px] lg:h-[709.32px]"` to preserve the desktop view.

---

## Phase 2: `NumberedSection.astro`

The `NumberedSection` component has a fixed width that will cause overflow on smaller screens.

**File:** `src/components/ui/display/NumberedSection.astro`

**Task:**

1.  **Analyze `DecorativeLine`:** The `DecorativeLine` has a fixed width of `w-[560.84px]`. This needs to be responsive.
    *   **Modify the `DecorativeLine`:** Change `w-[560.84px]` to `w-full`.
2.  **Analyze `Heading` and `Text`:** The `Heading` and `Text` elements also have a fixed width of `w-[560.84px]`. This needs to be responsive.
    *   **Modify the `Heading`:** Change `w-[560.84px]` to `w-full`.
    *   **Modify the `Text`:** Change `w-[560.84px]` to `w-full`.

---

## Phase 3: `SectionHeader.astro`

The `SectionHeader` component has a decorative image with a fixed width.

**File:** `src/components/ui/display/SectionHeader.astro`

**Task:**

1.  **Analyze `decorativeImage`:** The `div` containing the decorative image has `w-24`. This is a small, centered element, so it should be fine on mobile. No changes are needed here.

---

## Phase 4: Verification

After implementing all the changes, the AI must:

1.  **Run a build:** Execute `npm run build` to ensure there are no build errors.
2.  **Visual Inspection:** Manually inspect the `Process` section on the homepage at various screen sizes (mobile, tablet, and desktop) to confirm:
    *   The layout is responsive and looks good on all screen sizes.
    *   The desktop view is unchanged.
    *   There are no new elements.
    *   There is no scope creep.

This plan provides a clear, step-by-step guide for the AI to follow. The guardrails are explicitly stated to prevent any deviation from the requirements.
