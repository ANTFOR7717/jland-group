# Responsive Plan for AboutUs.astro

This document outlines the precise steps to make the `AboutUs.astro` component responsive for mobile and tablet devices using Tailwind CSS. The AI implementing this plan must adhere to the following guardrails without exception.

## AI Guardrails

*   **No Scope Creep:** The AI must only implement the changes specified in this plan. No additional features, components, or logic should be added.
*   **No New Elements:** The AI must not create any new HTML elements. All changes must be applied to the existing elements in `AboutUs.astro` and its referenced components by modifying their props and class attributes.
*   **Preserve Desktop View:** The AI must not alter the current appearance of the component on desktop viewports (screens larger than 1024px). All responsive changes must be applied using Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`).
*   **Strict Adherence:** The AI must follow the instructions for each component precisely. No deviation from the specified Tailwind classes or responsive behaviors is permitted.

## Step-by-Step Implementation Plan

### 1. Main Container (`Container` component)

*   **File to Modify:** `/Users/anthony/Projects/Good Shepherd Insights, LLC./jland-group/src/components/sections/AboutUs.astro`
*   **Goal:** Adjust the main container's padding for smaller screens to prevent content from touching the screen edges.
*   **Instructions:**
    *   Locate the main `<Container size="full">` component.
    *   Modify its `class` attribute to apply horizontal padding on mobile and tablet screen sizes. The existing classes should be preserved.
    *   **Mobile:** Add `px-4`.
    *   **Tablet:** Add `md:px-8`.
    *   **Desktop:** The padding should be managed by the container's children, so no specific desktop padding is needed here.

### 2. Section Header (`SectionHeader` component)

*   **File to Modify:** `/Users/anthony/Projects/Good Shepherd Insights, LLC./jland-group/src/components/ui/display/SectionHeader.astro`
*   **Goal:** Make the title text size and spacing responsive to ensure readability on smaller devices.
*   **Instructions:**
    *   The `size` and `spacing` props on the `SectionHeader` component need to be adjusted. Since these are passed as props, we will apply responsive classes directly on the elements inside the `SectionHeader.astro` file.
    *   **Title (`Heading`):** Modify the `class` attribute to be responsive.
        *   **Mobile:** `text-3xl`
        *   **Tablet:** `md:text-4xl`
    *   **Spacing:** The bottom margin should be adjusted.
        *   **Mobile:** `mb-4`
        *   **Tablet:** `md:mb-8`

### 3. Two-Column Layout (`Layout` component)

*   **File to Modify:** `/Users/anthony/Projects/Good Shepherd Insights, LLC./jland-group/src/components/sections/AboutUs.astro`
*   **Goal:** Stack the two columns on mobile and tablet views for a linear, vertical flow.
*   **Instructions:**
    *   Locate the `<Layout variant="two-column">` component.
    *   Modify its `class` attribute to change the `flex-direction`.
    *   **Mobile & Tablet:** Add `flex-col`.
    *   **Desktop:** Add `lg:flex-row` to revert to a side-by-side layout on large screens.

### 4. Numbered Sections (`NumberedSection` component)

*   **File to Modify:** `/Users/anthony/Projects/Good Shepherd Insights, LLC./jland-group/src/components/ui/display/NumberedSection.astro`
*   **Goal:** Adjust the text sizes within the numbered sections for better readability on smaller screens.
*   **Instructions:**
    *   **Title (`Heading`):** Modify the `class` attribute for the title.
        *   **Mobile:** `text-lg`
        *   **Tablet:** `md:text-xl`
    *   **Description (`Text`):** Modify the `class` attribute for the description.
        *   **Mobile:** `text-sm`
        *   **Tablet:** `md:text-base`

### 5. Statistics (`Statistics` component)

*   **File to Modify:** `/Users/anthony/Projects/Good Shepherd Insights, LLC./jland-group/src/components/ui/display/Statistics.astro`
*   **Goal:** Change the layout from a horizontal row to a vertical or grid layout on smaller screens.
*   **Instructions:**
    *   Locate the main `<div>` that wraps the stats.
    *   Modify its `class` attribute to use a grid layout.
        *   **Mobile:** `grid grid-cols-1 gap-y-4 text-center` (A single column grid).
        *   **Tablet:** `md:grid-cols-3 md:gap-x-8` (A three-column grid).
    *   **Value Text:**
        *   **Mobile:** `text-3xl`
        *   **Tablet:** `md:text-4xl`
    *   **Label Text:**
        *   **Mobile:** `text-sm`
        *   **Tablet:** `md:text-base`

### 6. Image Card (`Card` component)

*   **File to Modify:** `/Users/anthony/Projects/Good Shepherd Insights, LLC./jland-group/src/components/sections/AboutUs.astro`
*   **Goal:** Adjust the image height to be proportional on smaller screens.
*   **Instructions:**
    *   Locate the `<Card variant="image">` component.
    *   Modify its `class` attribute to control the height responsively. Remove the fixed `width` and `height` props.
    *   **Mobile:** `h-64 w-full`
    *   **Tablet:** `md:h-96 w-full`
    *   **Desktop:** `lg:h-[709.32px] lg:w-[608px]`

### 7. Commitment Section (`Card` component)

*   **File to Modify:** `/Users/anthony/Projects/Good Shepherd Insights, LLC./jland-group/src/components/sections/AboutUs.astro`
*   **Goal:** Adjust padding, remove large horizontal margins, and ensure text is centered correctly on smaller screens.
*   **Instructions:**
    *   Locate the `<Card variant="default">` for the commitment section.
    *   **Card Padding:** Modify its `class` attribute.
        *   **Mobile:** `p-4`
        *   **Tablet:** `md:p-8`
    *   **Heading:** Locate the `<Heading>` for "Our Commitment to Excellence".
        *   Modify its `class` attribute to remove the fixed horizontal margins: `ml-[364px] mr-[364px]`.
        *   Replace with: `mx-auto` to keep it centered within the card.
    *   **Text:** Locate the `<Text>` component for the body.
        *   Modify its `class` attribute to remove the fixed horizontal margins: `ml-[169px] mr-[169px]`.
        *   Replace with: `mx-auto max-w-prose` to provide a readable line length.
