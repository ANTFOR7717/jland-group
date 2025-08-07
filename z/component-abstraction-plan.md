# Component Abstraction Plan

**Date:** Sat Jul 26 09:46:15 EDT 2025

## Overview

This document outlines the comprehensive plan to abstract reusable UI components from the existing Astro sections into a centralized `src/components/ui/` directory. The analysis identified 12 core UI components that can be extracted and reused across the project.

## Analyzed Components

- `Hero.astro` - Main landing section with CTA forms and trust indicators
- `RoofingServices.astro` - Service cards with descriptions
- `Testimonials.astro` - Customer review cards with ratings
- `Footer.astro` - Site footer with links and newsletter signup
- `Header.astro` - Navigation header with logo and menu

## Identified UI Components

### 1. Button Component
**File:** `src/components/ui/Button.astro`

**Variants:**
- Primary CTA (yellow background, dark text)
- Secondary outline (gray border, transparent background)
- Subscribe button (yellow styling)

**Props Interface:**
```typescript
interface Props {
  variant?: 'primary' | 'secondary' | 'subscribe';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  class?: string;
}
```

**Usage Locations:**
- Hero: "Get Free Quote" CTA
- Footer: "Subscribe" button
- General: Any action buttons

### 2. Input Component
**File:** `src/components/ui/Input.astro`

**Features:**
- Consistent styling (white background, gray border, rounded corners)
- Focus states and placeholder styling
- Support for different input types

**Props Interface:**
```typescript
interface Props {
  type?: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  name: string;
  required?: boolean;
  class?: string;
  rows?: number; // for textarea
}
```

**Usage Locations:**
- Hero: Quote form inputs
- Footer: Newsletter email input

### 3. Card Component
**File:** `src/components/ui/Card.astro`

**Features:**
- White background with shadow effects
- Rounded corners and consistent padding
- Flexible content slots

**Props Interface:**
```typescript
interface Props {
  variant?: 'default' | 'service' | 'testimonial';
  class?: string;
}
```

**Usage Locations:**
- RoofingServices: Service cards
- Testimonials: Review cards

### 4. StarRating Component
**File:** `src/components/ui/StarRating.astro`

**Features:**
- Configurable rating display
- Accessibility support
- Consistent star styling

**Props Interface:**
```typescript
interface Props {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showNumber?: boolean;
  class?: string;
}
```

**Usage Locations:**
- Hero: Trust indicators
- Testimonials: Customer ratings

### 5. Icon Component
**File:** `src/components/ui/Icon.astro`

**Features:**
- Centralized icon management
- Consistent sizing and styling
- Support for various icon types

**Props Interface:**
```typescript
interface Props {
  name: 'phone' | 'email' | 'location' | 'star' | 'check' | 'arrow';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
}
```

**Usage Locations:**
- Hero: Contact icons
- Footer: Social and contact icons
- General: Various UI icons

### 6. NavLink Component
**File:** `src/components/ui/NavLink.astro`

**Features:**
- Consistent navigation styling
- Active state handling
- Responsive behavior

**Props Interface:**
```typescript
interface Props {
  href: string;
  active?: boolean;
  class?: string;
}
```

**Usage Locations:**
- Header: Main navigation
- Footer: Footer links

### 7. Container Component
**File:** `src/components/ui/Container.astro`

**Features:**
- Consistent max-width and padding
- Responsive centering
- Flexible content wrapper

**Props Interface:**
```typescript
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  class?: string;
}
```

**Usage Locations:**
- All sections for content wrapping

### 8. Section Component
**File:** `src/components/ui/Section.astro`

**Features:**
- Consistent section spacing
- Background variants
- Padding management

**Props Interface:**
```typescript
interface Props {
  background?: 'white' | 'gray' | 'dark';
  padding?: 'sm' | 'md' | 'lg';
  class?: string;
}
```

**Usage Locations:**
- All major sections

### 9. Heading Component
**File:** `src/components/ui/Heading.astro`

**Features:**
- Consistent typography hierarchy
- Responsive sizing
- Semantic HTML levels

**Props Interface:**
```typescript
interface Props {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  class?: string;
}
```

**Usage Locations:**
- Hero: Main headline
- RoofingServices: Section title
- Testimonials: Section title

### 10. Text Component
**File:** `src/components/ui/Text.astro`

**Features:**
- Consistent text styling
- Multiple variants
- Responsive typography

**Props Interface:**
```typescript
interface Props {
  variant?: 'body' | 'lead' | 'small' | 'caption';
  color?: 'default' | 'muted' | 'accent';
  class?: string;
}
```

**Usage Locations:**
- All sections for body text

### 11. Badge Component
**File:** `src/components/ui/Badge.astro`

**Features:**
- Trust indicators and labels
- Multiple color variants
- Consistent styling

**Props Interface:**
```typescript
interface Props {
  variant?: 'default' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
}
```

**Usage Locations:**
- Hero: BBB badge
- Testimonials: Service type badges

### 12. Form Component
**File:** `src/components/ui/Form.astro`

**Features:**
- Form wrapper with consistent styling
- Error handling support
- Accessibility features

**Props Interface:**
```typescript
interface Props {
  action?: string;
  method?: 'GET' | 'POST';
  class?: string;
}
```

**Usage Locations:**
- Hero: Quote request form
- Footer: Newsletter signup form

## Implementation Strategy

### Phase 1: Core Components
1. Create `Button`, `Input`, `Card` components
2. Update Hero section to use new components
3. Test responsive behavior

### Phase 2: Layout Components
1. Create `Container`, `Section`, `Heading`, `Text` components
2. Update all sections to use layout components
3. Verify consistent spacing and typography

### Phase 3: Specialized Components
1. Create `StarRating`, `Icon`, `Badge`, `NavLink`, `Form` components
2. Complete migration of all sections
3. Remove duplicate code

### Phase 4: Optimization
1. Review component usage patterns
2. Optimize for performance
3. Add comprehensive documentation

## Design Principles

### Tailwind CSS Compliance
- **MANDATORY:** All components use only Tailwind CSS classes
- **PROHIBITED:** No inline styles or `<style>` blocks
- **REQUIRED:** Reference Tailwind CSS documentation for all implementations

### TypeScript Integration
- All components include proper TypeScript interfaces
- Props are strongly typed with defaults
- Component composition is type-safe

### Accessibility
- Semantic HTML elements
- ARIA attributes where needed
- Keyboard navigation support
- Screen reader compatibility

### Responsive Design
- Mobile-first approach
- Breakpoint-specific variants
- Flexible layouts

### Reusability
- Single responsibility principle
- Composable design
- Minimal dependencies
- Clear prop interfaces

## Benefits

1. **Code Reduction:** Eliminate duplicate styling across components
2. **Consistency:** Unified design system implementation
3. **Maintainability:** Centralized component updates
4. **Type Safety:** Strong TypeScript integration
5. **Performance:** Optimized component reuse
6. **Scalability:** Easy to extend and modify

## Next Steps

1. Begin implementation with Phase 1 components
2. Create comprehensive component documentation
3. Establish component testing strategy
4. Set up component preview/storybook system
5. Train team on new component usage patterns

---

**Note:** This plan ensures strict adherence to the non-negotiable directive requiring Tailwind CSS-only styling and mandatory documentation references.