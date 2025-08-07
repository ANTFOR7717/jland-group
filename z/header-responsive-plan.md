# Header Component Responsive Design Plan

## Objective

To make the `Header.astro` component responsive for mobile and tablet devices using Tailwind CSS, while ensuring the desktop view remains unchanged. This plan includes strict guardrails to prevent scope creep, the creation of new elements, or alterations to the desktop viewport.

## Guardrails (Non-Negotiable)

*   **No New Elements:** You are strictly forbidden from adding any new HTML elements to the component that are not explicitly defined in this plan. The only exception is the hamburger menu icon, which is a necessary addition for mobile navigation.
*   **No Desktop View Changes:** The existing desktop layout, styling, and functionality must remain identical to the current implementation. All responsive changes must be applied exclusively to mobile and tablet breakpoints.
*   **No Scope Creep:** You must not introduce any new features, animations, or design changes that are not explicitly outlined in this plan. Your task is limited to implementing the responsive design as described below.
*   **Preserve Existing Classes:** Do not remove or alter any existing Tailwind CSS classes on the component, unless it is to override them for a specific breakpoint.

## Breakpoints

We will use the following standard Tailwind CSS breakpoints:

*   **Mobile:** `< 768px`
*   **Tablet:** `768px` to `1024px`
*   **Desktop:** `> 1024px` (the current view)

## Step-by-Step Implementation

### Step 1: Mobile View (`< 768px`)

1.  **Hide Navigation Links:** The primary navigation links will be hidden on mobile devices.
2.  **Add Hamburger Menu:** A hamburger menu icon will be added to the right side of the header. This icon will be used to toggle the visibility of the navigation links in a future implementation (for now, it will just be a visual element).
3.  **Adjust Padding:** The horizontal padding of the header will be reduced to `px-4` to provide more space on smaller screens.

#### `Header.astro` Code for Mobile:

```astro
---
// Header component with transparent background
---

<header class="absolute top-0 left-0 right-0 z-50 bg-transparent">
  <div class="flex justify-between items-center px-4 md:px-16 py-5">
    <!-- Logo -->
    <div class="text-white text-2xl font-bold leading-8 w-71">
      J LAND CONTRACTING
    </div>
    
    <!-- Hamburger Menu (Visible on Mobile Only) -->
    <div class="md:hidden">
      <button id="menu-toggle" class="text-white focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    <!-- Navigation (Hidden on Mobile) -->
    <nav class="hidden md:flex items-center gap-8 text-white font-semibold">
      <a href="#services" class="hover:text-accent-primary transition-colors">Services</a>
      <a href="#about" class="hover:text-accent-primary transition-colors">About</a>
      <a href="#projects" class="hover:text-accent-primary transition-colors">Projects</a>
      <a href="#testimonials" class="hover:text-accent-primary transition-colors">Testimonials</a>
      <a href="#contact" class="hover:text-accent-primary transition-colors">Contact</a>
    </nav>
  </div>
</header>
```

### Step 2: Tablet View (`768px` to `1024px`)

1.  **Display Navigation Links:** The navigation links will be visible on tablet devices.
2.  **Adjust Font Size and Spacing:** The font size and spacing of the navigation links will be adjusted to fit the tablet screen size. The gap between the links will be reduced to `gap-4`.

#### `Header.astro` Code for Tablet:

```astro
---
// Header component with transparent background
---

<header class="absolute top-0 left-0 right-0 z-50 bg-transparent">
  <div class="flex justify-between items-center px-4 md:px-8 lg:px-16 py-5">
    <!-- Logo -->
    <div class="text-white text-2xl font-bold leading-8 w-71">
      J LAND CONTRACTING
    </div>
    
    <!-- Hamburger Menu (Hidden on Tablet and Above) -->
    <div class="md:hidden">
      <button id="menu-toggle" class="text-white focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    <!-- Navigation -->
    <nav class="hidden md:flex items-center md:gap-4 lg:gap-8 text-white font-semibold">
      <a href="#services" class="hover:text-accent-primary transition-colors">Services</a>
      <a href="#about" class="hover:text-accent-primary transition-colors">About</a>
      <a href="#projects" class="hover:text-accent-primary transition-colors">Projects</a>
      <a href="#testimonials" class="hover:text-accent-primary transition-colors">Testimonials</a>
      <a href="#contact" class="hover:text-accent-primary transition-colors">Contact</a>
    </nav>
  </div>
</header>
```

### Step 3: Desktop View (`> 1024px`)

No changes are required for the desktop view. The existing code will continue to work as expected.

## Final Verification

After implementing the changes, you must verify that:

1.  The mobile view (`< 768px`) displays the hamburger menu and hides the navigation links.
2.  The tablet view (`768px` to `1024px`) displays the navigation links with reduced spacing.
3.  The desktop view (`> 1024px`) remains completely unchanged.
4.  No new HTML elements have been added, other than the hamburger menu button.
5.  No existing CSS classes have been removed or altered, only overridden for specific breakpoints.
