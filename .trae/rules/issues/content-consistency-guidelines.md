# Content Consistency Guidelines for J Land Group Website

**Created:** Sat Aug 23 09:23:42 EDT 2025  
**Purpose:** Maintain visual and structural consistency across all pages  
**Scope:** All pages in the J Land Group Astro.js website

---

## CRITICAL CONSISTENCY REQUIREMENTS

### 1. HERO SECTION STANDARDIZATION

**Mandatory Structure Pattern:**
```astro
<Section background="dark">
  <Container>
    <div class="text-center max-w-4xl mx-auto">
      <!-- Badge -->
      <div class="mb-6">
        <div class="inline-flex items-center justify-center mb-4 text-white bg-brand-primary px-4 py-2 rounded-full font-semibold">
          [Page-Specific Badge Text]
        </div>
      </div>
      
      <!-- Main Heading -->
      <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
        [Primary Headline]<br>
        <span class="text-accent-primary">[Highlighted Text]</span>
      </h1>
      
      <!-- Subtitle -->
      <p class="text-xl text-white mb-8 leading-relaxed">
        [Page description with company value proposition]
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <Button href="[primary-action]" variant="primary" size="lg">
          [Primary CTA Text]
        </Button>
        <Button href="[secondary-action]" variant="primary" size="lg" class="bg-white text-brand-primary border-white hover:bg-gray-100">
          [Secondary CTA Text]
        </Button>
      </div>
      
      <!-- Trust Indicators -->
      <div class="flex flex-wrap justify-center gap-6 text-sm text-white">
        [3 trust indicators with SVG checkmarks]
      </div>
    </div>
  </Container>
</Section>
```

**Key Consistency Rules:**
- **Background:** Always use `Section background="dark"` - NO gradients
- **Typography:** Main heading MUST be `text-5xl md:text-6xl font-bold text-white`
- **Badge:** Always inline div with `bg-brand-primary px-4 py-2 rounded-full font-semibold`
- **Buttons:** Both buttons use `variant="primary" size="lg"` with consistent styling
- **Trust Indicators:** Always 3 items with SVG checkmarks and `text-accent-primary` icons

### 2. TYPOGRAPHY CONSISTENCY

**Heading Hierarchy:**
- **H1 (Hero):** `text-5xl md:text-6xl font-bold text-white`
- **H2 (Section Headers):** `text-3xl font-bold text-brand-primary`
- **H3 (Subsections):** `text-2xl font-bold text-brand-primary`
- **Body Text:** `text-xl text-white` (on dark) or `text-lg text-brand-primary` (on light)
- **Lead Text:** `text-xl leading-relaxed`

**Color Application:**
- **Dark Sections:** White text (`text-white`) with accent highlights (`text-accent-primary`)
- **Light Sections:** Brand primary text (`text-brand-primary`) with secondary (`text-brand-secondary`)
- **Accent Usage:** Only for highlighted words/phrases in headings and trust indicator icons

### 3. BUTTON STANDARDIZATION

**Primary CTA Pattern:**
```astro
<Button href="[action]" variant="primary" size="lg">
  [CTA Text]
</Button>
```

**Secondary CTA Pattern:**
```astro
<Button href="[action]" variant="primary" size="lg" class="bg-white text-brand-primary border-white hover:bg-gray-100">
  [CTA Text]
</Button>
```

**Consistency Rules:**
- Always use `size="lg"` for hero section buttons
- Primary button uses default brand styling
- Secondary button uses white background with brand text
- NO custom button styling outside of these patterns

### 4. SECTION LAYOUT PATTERNS

**Dark Hero Section:**
- Background: `Section background="dark"`
- Container: `<Container>` with centered content
- Max width: `max-w-4xl mx-auto` for hero content

**Light Content Sections:**
- Background: `Section class="py-16 bg-background-light"` or `Section class="py-20 bg-background-light"`
- Consistent padding: `py-16` or `py-20` for major sections
- Container wrapper for all content

### 5. TRUST INDICATOR CONSISTENCY

**Standard Trust Indicators (Choose 3):**
- Licensed & Insured
- 20+ Years Experience  
- 500+ Happy Customers
- Lifetime Warranty
- 5-Star Rated
- Emergency Service

**Implementation Pattern:**
```astro
<div class="flex items-center gap-2">
  <svg class="w-5 h-5 text-accent-primary" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
  </svg>
  <span>[Trust Indicator Text]</span>
</div>
```

---

## IMPLEMENTATION CHECKLIST

### Before Creating/Modifying Any Page:

**✅ Hero Section Verification:**
- [ ] Uses `Section background="dark"` (no gradients)
- [ ] Typography matches: `text-5xl md:text-6xl font-bold text-white`
- [ ] Badge uses inline div with `bg-brand-primary` styling
- [ ] Both buttons use `variant="primary" size="lg"`
- [ ] Trust indicators use SVG checkmarks with `text-accent-primary`

**✅ Layout Structure:**
- [ ] Wrapped in `<Layout>` component
- [ ] Includes `<Header />` and `<Footer />` components
- [ ] Uses consistent `<Container>` and `<Section>` patterns
- [ ] Maintains `max-w-4xl mx-auto` for hero content

**✅ Typography Compliance:**
- [ ] Heading hierarchy follows established patterns
- [ ] Color usage matches section background (dark/light)
- [ ] No custom font sizes outside of established patterns

**✅ Component Usage:**
- [ ] Uses barrel file imports from `../components/ui`
- [ ] Button components follow standardized patterns
- [ ] No custom styling that breaks consistency

---

## MAINTENANCE PROCEDURES

### When Adding New Pages:
1. **Copy hero section structure** from `about.astro` or `services.astro`
2. **Update only the content** (badge text, heading, description)
3. **Maintain exact styling classes** and component structure
4. **Test responsive behavior** matches existing pages

### When Modifying Existing Pages:
1. **Reference this document** before making changes
2. **Compare with about.astro** as the reference standard
3. **Ensure changes don't break consistency** across other pages
4. **Update this document** if new patterns are established

### Quality Assurance:
1. **Visual comparison** between pages to ensure consistency
2. **Typography audit** to verify heading hierarchy
3. **Button styling verification** across all CTAs
4. **Trust indicator consistency** check

---

## ANTI-PATTERNS TO AVOID

**❌ NEVER DO:**
- Use gradient backgrounds in hero sections
- Create custom button styling outside established patterns
- Use different typography scales for similar elements
- Mix trust indicator styles (components vs inline)
- Deviate from the established color scheme
- Use different container/section patterns

**❌ STYLING VIOLATIONS:**
- Inline styles or `<style>` blocks
- Custom CSS animations or transitions
- Non-Tailwind color values
- Inconsistent spacing patterns

---

## REFERENCE PAGES

**Primary Reference:** `/src/pages/about.astro`
- Perfect implementation of hero section pattern
- Correct typography hierarchy
- Proper button and trust indicator styling

**Secondary Reference:** `/src/pages/services.astro`
- Updated to match about.astro consistency
- Example of proper hero section refactoring

---

## CONCLUSION

Maintaining consistency across pages is critical for:
- **Brand integrity** and professional appearance
- **User experience** and navigation familiarity  
- **Development efficiency** and maintainability
- **Conversion optimization** through proven patterns

Always reference this document and the established patterns in `about.astro` when creating or modifying pages. When in doubt, prioritize consistency over creativity.

**Remember:** Consistency builds trust, and trust drives conversions.