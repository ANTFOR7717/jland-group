# Responsive Design Plan

This document outlines the plan to make the J Land Group website fully responsive for tablet and mobile devices.

## `Hero.astro`

### Analysis

The `Hero.astro` component currently has a two-column layout that is not optimized for smaller screens. The text sizes and some flex container directions are already responsive, which is a good starting point.

### Proposed Changes

- **`ContentGrid`:** The main grid layout should stack vertically on mobile and switch to two columns on medium screens and wider.
  - **Current:** `<ContentGrid columns={2} gap="xl" padding="lg" class="mt-5">`
  - **Proposed:** `<ContentGrid class="grid grid-cols-1 md:grid-cols-2 gap-xl p-lg mt-5">`
- **`ContentBlock`:** No changes needed. The `max-w` is already responsive.
- **`Heading`:** No changes needed. The responsive text sizes are appropriate.
- **`Text`:** No changes needed. The responsive text sizes are appropriate.
- **`ButtonGroup`:** No changes needed. The responsive flex direction is correct.
- **`TrustIndicatorGroup`:** No changes needed. The responsive flex direction is correct.
- **`Badges`:** No changes needed. The responsive `max-w` and `justify-content` are correct.
- **`Card` (Quote Form):** No changes needed. The responsive margin is correct.
- **`Form`:** No changes needed. The button width is already responsive.

## `Partners.astro`

### Analysis

The `Partners.astro` component uses a responsive grid that adjusts the number of columns based on screen size (`grid-cols-2`, `md:grid-cols-3`, `lg:grid-cols-6`). This is a good implementation and already supports responsive design.

### Proposed Changes

No changes are needed. The existing implementation is sufficient for all screen sizes.

## `Testimonials.astro`

### Analysis

The `Testimonials.astro` component has a two-column layout that will not work on mobile. The left column has fixed-width elements, and the right column's content may not adapt well without changes.

### Proposed Changes

- **`Layout`:** The `two-column` variant should be made responsive. The layout should stack to a single column on mobile screens.
  - **Current:** `<Layout variant="two-column" ...>`
  - **Proposed:** The `Layout` component itself should be modified to handle responsive behavior internally, or the slots should be styled with responsive classes. For example, the component could accept responsive props: `variant={{ base: 'single-column', md: 'two-column' }}`.
- **`ContentBlock` (Left Column):** The fixed width should be removed.
  - **Current:** `class="w-[592px]"`
  - **Proposed:** `class="w-full"`
- **`FeaturedTestimonial`:** The fixed width prop should be removed.
  - **Current:** `width="592px"`
  - **Proposed:** Remove the `width` prop and let the component be fluid.
- **`ProjectGallery`:** The gallery should be horizontally scrollable on mobile to avoid awkward wrapping.
  - **Proposed:** Add `overflow-x-auto` to the container of the `ProjectGallery`.
- **`SectionHeader` (Right Column):** The alignment should be centered on mobile.
  - **Current:** `alignment="left"`
  - **Proposed:** `alignment={{ base: 'center', md: 'left' }}`
- **`CardGrid` (Right Column):** The `maxWidth` should be adjusted to `w-full` on mobile.
  - **Current:** `maxWidth="max-w-2xl"`
  - **Proposed:** `class="w-full max-w-2xl"`

## `Services.astro`

### Analysis

The `Services.astro` component uses a `CardGrid` with a fixed number of columns, which is not responsive. The sections on the homepage use 2, 3, and 4 columns, which will cause layout issues on smaller screens.

### Proposed Changes

- **`SectionHeader`:** The heading size should be responsive.
  - **Current:** `size="4xl"`
  - **Proposed:** The `SectionHeader` component should be updated to use responsive text classes. For example: `class="text-3xl md:text-4xl"`.
- **`CardGrid`:** The `columns` prop should be replaced with responsive grid classes.
  - **Current:** `columns={columns}`
  - **Proposed:** The `CardGrid` component should be modified to accept responsive classes directly. In `Services.astro`, the `CardGrid` should be updated to use responsive classes based on the number of columns. For example:
    - For `columns={3}`: `class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg max-w-6xl"`
    - For `columns={4}`: `class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-lg max-w-6xl"`
    - For `columns={2}`: `class="grid grid-cols-1 md:grid-cols-2 gap-lg max-w-6xl"`

## `Process.astro`

### Analysis

The `Process.astro` component uses a two-column layout with a large image that has a fixed width, which is not suitable for mobile devices. The numbered steps on the left are in a flex column and should adapt well.

### Proposed Changes

- **`Layout`:** The `two-column` variant needs to be responsive, collapsing to a single column on mobile.
  - **Current:** `<Layout variant="two-column" ...>`
  - **Proposed:** The `Layout` component should be modified to handle responsiveness internally, stacking its slots on smaller screens.
- **`Card` (Image):** The fixed width and height should be removed. The image should be hidden on mobile to improve user experience.
  - **Current:** `width="608px"`, `height="709.32px"`
  - **Proposed:** Remove the `width` and `height` props. Add responsive visibility classes: `class="hidden md:block"`.
- **`SectionHeader`:** The heading size should be responsive.
  - **Current:** `size="4xl"`
  - **Proposed:** The `SectionHeader` component should use responsive text classes, e.g., `class="text-3xl md:text-4xl"`.
- **`NumberedSection`:** The `minHeight` could be removed to allow content to flow naturally on smaller screens.
  - **Current:** `minHeight="lg"`
  - **Proposed:** Remove the `minHeight` prop.

## `AboutUs.astro`

### Analysis

The `AboutUs.astro` component has a two-column layout with a fixed-width image, which is not responsive. The "Commitment to Excellence" section also uses large, fixed margins that will break the layout on smaller screens.

### Proposed Changes

- **`Layout`:** The `two-column` variant should be responsive, stacking to a single column on mobile.
  - **Current:** `<Layout variant="two-column" ...>`
  - **Proposed:** The `Layout` component should be modified to handle responsiveness internally.
- **`Card` (Image):** The fixed width and height should be removed, and the image should be hidden on mobile.
  - **Current:** `width="608px"`, `height="709.32px"`
  - **Proposed:** Remove `width` and `height` props and add `class="hidden md:block"`.
- **`SectionHeader`:** The heading size should be responsive.
  - **Current:** `size="4xl"`
  - **Proposed:** The `SectionHeader` component should use responsive text classes, e.g., `class="text-3xl md:text-4xl"`.
- **`Statistics`:** The stats should stack vertically on mobile.
  - **Proposed:** The `Statistics` component should use `flex-col md:flex-row` on its container.
- **`Heading` (Commitment Section):** The large, fixed margins must be removed.
  - **Current:** `class="text-center mt-[33px] ml-[364px] mr-[364px]"`
  - **Proposed:** `class="text-center mt-[33px] px-4 sm:px-8"`
- **`Text` (Commitment Section):** The large, fixed margins must be removed.
  - **Current:** `class="text-center ml-[169px] mr-[169px] min-h-[72px]"`
  - **Proposed:** `class="text-center px-4 sm:px-8"`

## `FAQ.astro`

### Analysis

The FAQ section uses dropdowns with fixed `maxWidth` properties, which will not adapt well to mobile viewports. The "Still have questions?" call-to-action at the bottom is also not responsive.

### Proposed Changes

- **`Heading`:** Make heading sizes responsive.
  - **Current:** `size="4xl"`
  - **Proposed:** The `Heading` component should use responsive text classes like `text-3xl md:text-4xl`.
- **`Dropdown`:** Remove the fixed `maxWidth` from the FAQ data and the component itself.
  - **Current:** `maxWidth={faq.maxWidth}`
  - **Proposed:** Remove the `maxWidth` prop from the `Dropdown` component and the data array. Let the dropdowns fill their container's width.
- **"Still have questions?" Section:** Make the layout responsive.
  - **Current:** `<div class="flex items-center gap-6 ml-auto">`
  - **Proposed:** Change the parent `ContentGrid` to `<ContentGrid columns={1} padding="lg" class="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-4">`. Remove the inner `div`.
- **`Button` (Contact Us):** Make the button width responsive.
  - **Current:** `class="min-h-14 w-56 text-white"`
  - **Proposed:** `class="min-h-14 w-full sm:w-56 text-white"`

## `Contact.astro`

### Analysis

The `Contact.astro` component has a fixed-height background image, a fixed-width location card, and a non-responsive contact info section. The form itself is mostly responsive.

### Proposed Changes

- **Background Image Section:** The fixed height should be responsive.
  - **Current:** `class="relative w-full h-[400px] ..."`
  - **Proposed:** `class="relative w-full h-[300px] sm:h-[400px] ..."`
- **Location Card:** The card should be responsive and centered on mobile.
  - **Current:** `<Card class="w-80 ...">`
  - **Proposed:** `<Card class="w-full sm:w-80 mx-auto sm:mx-0 ...">`
  - The parent container should be updated to center the card on mobile: `class="flex items-start justify-center sm:justify-end ..."`
  - The `Text` element inside the card should have its fixed width removed: `class="w-full ..."`
- **Contact Icons and Info Section:** The layout should stack vertically on mobile.
  - **Current:** `<Section ... class="flex justify-center items-center gap-16 mt-6">`
  - **Proposed:** `<Section ... class="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 mt-6">`