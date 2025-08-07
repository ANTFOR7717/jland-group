# Hardcoded Sizes Action Plan

This document outlines the plan to remove hardcoded sizes from the J Land Group website while maintaining the design.

## Analysis

While there are no hardcoded pixel values in the Tailwind classes or HTML attributes, some components are receiving fixed-width props. These props make the components less reusable and can cause issues with responsive design.

## `Testimonials.astro`

### Issue

The `FeaturedTestimonial` component is given a fixed width of `592px`.

### Proposed Solution

- **`FeaturedTestimonial`:** Remove the `width="592px"` prop.
- **`ContentBlock`:** The parent `ContentBlock` has a `w-[592px]` class. This should be changed to `w-full` to allow the component to be fluid.

## `Process.astro`

### Issue

The `Card` component used for the image has fixed `width` and `height` props.

### Proposed Solution

- **`Card` (Image):** Remove the `width="608px"` and `height="709.32px"` props. The image should be hidden on mobile, so the fixed sizes are not necessary for the desktop view.

## `AboutUs.astro`

### Issue

The `Card` component used for the image has fixed `width` and `height` props.

### Proposed Solution

- **`Card` (Image):** Remove the `width="608px"` and `height="709.32px"` props. The image should be hidden on mobile, so the fixed sizes are not necessary for the desktop view.
