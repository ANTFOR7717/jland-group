
# Testimonials Section: Responsive Refactoring Plan

## 1. Project Overview

**Objective:** Refactor the `Testimonials.astro` component and its dependencies to be fully responsive across desktop, tablet, and mobile viewports.

**Guiding Principles:**
- **Mobile-First:** Design and implement for mobile first, then scale up to tablet and desktop.
- **Tailwind CSS:** Utilize Tailwind CSS for all styling. No custom CSS.
- **No Scope Creep:** Do not add, remove, or significantly alter existing UI elements.
- **Desktop View Preservation:** The desktop view must remain identical to the current implementation.

## 2. Component Analysis

The `Testimonials.astro` component is composed of the following UI components:

- **`Layout`**: A two-column layout that needs to stack vertically on smaller screens.
- **`ContentBlock`**: A container for content that may need width adjustments.
- **`Heading`**: Text size may need to be adjusted for smaller screens.
- **`FeaturedTestimonial`**: The main testimonial card, which will need width adjustments.
- **`Spacer`**: Spacing may need to be adjusted.
- **`ProjectGallery`**: A gallery of images that needs to wrap on smaller screens.
- **`Section`**: Padding may need to be adjusted.
- **`Container`**: Padding may need to be adjusted.
- **`SectionHeader`**: Layout may need to switch to vertical on smaller screens.
- **`CardGrid`**: A grid of cards that needs to be a single column on smaller screens.
- **`Card`**: The review card, which will need width adjustments.

## 3. Step-by-Step Implementation Plan

### Step 3.1: `Layout.astro`

**File:** `src/components/ui/layout/Layout.astro`

**Objective:** Make the two-column layout stack vertically on mobile and tablet.

**Tasks:**
1.  **Modify `variantClasses`**:
    -   Change `'two-column': 'flex'` to `'two-column': 'flex flex-col lg:flex-row'`. This will make the columns stack vertically by default and switch to a horizontal layout on large screens.
2.  **Modify Column Widths**:
    -   Change `left: 'flex flex-col w-1/2'` to `left: 'flex flex-col w-full lg:w-1/2'`.
    -   Change `right: 'flex flex-col w-1/2'` to `right: 'flex flex-col w-full lg:w-1/2'`.
3.  **Adjust Padding**:
    -   Modify padding classes to be responsive. For example, change `p-16` to `p-8 md:p-12 lg:p-16`.

### Step 3.2: `ContentBlock.astro`

**File:** `src/components/ui/display/ContentBlock.astro`

**Objective:** Ensure the content block's width is responsive.

**Tasks:**
1.  **Modify `maxWidth`**:
    -   The `w-[592px]` class in `Testimonials.astro` should be changed to `w-full max-w-[592px]`.

### Step 3.3: `Heading.astro`

**File:** `src/components/ui/display/Heading.astro`

**Objective:** Adjust heading sizes for mobile.

**Tasks:**
1.  **Update `sizeClasses`**:
    -   Use responsive text sizes. For example, `text-3xl` could become `text-2xl md:text-3xl`. This will be applied in the `Testimonials.astro` file.

### Step 3.4: `FeaturedTestimonial.astro`

**File:** `src/components/ui/features/FeaturedTestimonial.astro`

**Objective:** Make the featured testimonial card responsive.

**Tasks:**
1.  **Modify `width`**:
    -   The `width: ${width}` style should be removed in favor of Tailwind's width utility classes.
    -   In `Testimonials.astro`, the `width="592px"` prop should be removed and replaced with `class="w-full max-w-[592px]"`.

### Step 3.5: `ProjectGallery.astro`

**File:** `src/components/ui/features/ProjectGallery.astro`

**Objective:** Ensure the project gallery wraps on smaller screens.

**Tasks:**
1.  **Modify `variantStyles`**:
    -   Change `'horizontal': 'flex'` to `'horizontal': 'flex flex-wrap'`.

### Step 3.6: `SectionHeader.astro`

**File:** `src/components/ui/display/SectionHeader.astro`

**Objective:** Adjust the section header for mobile.

**Tasks:**
1.  **Modify `layoutClasses`**:
    -   Change `'horizontal': 'flex items-center justify-between'` to `'horizontal': 'flex flex-col md:flex-row items-center justify-between'`.

### Step 3.7: `CardGrid.astro`

**File:** `src/components/ui/display/CardGrid.astro`

**Objective:** Make the card grid responsive.

**Tasks:**
1.  **Modify `columnClasses`**:
    -   The existing classes are already responsive, so no changes are needed here. `grid-cols-1 lg:grid-cols-2` will work as intended.

### Step 3.8: `Card.astro`

**File:** `src/components/ui/display/Card.astro`

**Objective:** Make the review card responsive.

**Tasks:**
1.  **Modify `review` variant**:
    -   Change `w-[576px]` to `w-full max-w-[576px]`.
    -   The elements inside the card with fixed widths (e.g., `w-[536px]`, `w-[507.1px]`) need to be changed to responsive widths like `w-full`.

### Step 3.9: `Testimonials.astro`

**File:** `src/components/sections/Testimonials.astro`

**Objective:** Apply all the responsive changes.

**Tasks:**
1.  **Update `ContentBlock`**:
    -   Change `class="w-[592px]"` to `class="w-full max-w-[592px]"`.
2.  **Update `Heading`**:
    -   Add responsive text size classes, e.g., `class="text-2xl md:text-3xl"`.
3.  **Update `FeaturedTestimonial`**:
    -   Remove the `width` prop and add `class="w-full max-w-[592px]"`.
4.  **Review and Refine**:
    -   Go through the entire file and ensure all fixed widths are replaced with responsive classes.

## 4. Guardrails and Constraints

- **No New Elements:** The AI developer must not introduce any new HTML elements or Astro components.
- **Preserve Desktop View:** The final implementation must look identical to the current desktop view on screens 1024px and wider.
- **Stick to the Plan:** The AI developer must follow this plan precisely and not deviate.
- **No Custom CSS:** All styling must be done using Tailwind CSS utility classes.
- **File-by-File Changes:** The AI developer should make changes one file at a time, as laid out in the plan.

This plan provides a clear, step-by-step guide to refactoring the Testimonials section for responsiveness. By following these instructions, the AI developer can complete the task efficiently and accurately, without introducing regressions or scope creep.
