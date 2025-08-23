# Simple Projects Page Generation Prompt - Production Ready

**Current Date/Time:** Fri Aug 22 20:10:14 EDT 2025
**Project:** J Land Group - Astro.js & Tailwind CSS Website
**Focus:** Enticing Design Experience for Project Showcase (NO Complex Utilities)

## CORE REQUIREMENTS

### 1. BASIC LAYOUT STRUCTURE
- Use existing Layout.astro wrapper (`/src/layouts/Layout.astro`)
- Include Header component (`/src/components/layout/Header.astro`)
- Include Footer component (`/src/components/layout/Footer.astro`)
- Follow structure pattern from `/src/pages/index.astro`

### 2. DESIGN CONSTRAINTS
- **ONLY Tailwind CSS classes** - NO inline styles, NO `<style>` blocks
- **MANDATORY COLOR SCHEME PRESERVATION** - Use EXACT existing brand colors:
  - Brand Primary: `text-brand-primary` (rgb(38, 35, 39))
  - Brand Secondary: `text-brand-secondary` (rgb(125, 120, 119))
  - Accent Primary: `text-accent-primary` (rgb(253, 184, 19))
  - Background Light: `bg-background-light` (rgb(248, 249, 250))
  - Background Dark: `bg-background-dark` (rgb(50, 48, 52))
- Use existing fonts: Inter (body), Poppins (headings), Montserrat
- **NO ANIMATIONS** - Static interface only
- **IMMEDIATE FAIL** if color scheme is modified or not preserved

### 3. SEO OPTIMIZATION
- Proper page title: "Our Projects | J Land Contracting"
- Meta description with local keywords
- Semantic HTML structure (h1, h2, h3 hierarchy)
- Alt text for all images
- Local business schema markup

## CONTENT STRUCTURE

### Required Sections
1. **Page Header** - Compelling title and engaging description
2. **Asphalt Shingles Showcase** - Enticing display of asphalt shingle projects
3. **Siding Projects Display** - Beautiful siding project presentations
4. **Commercial Projects Section** - Professional commercial work showcase
5. **Contact CTA** - Strategic call-to-action for project inquiries

### Project Content Focus
- **NO GALLERIES** - NO FILTERING - NO COMPLEX UTILITIES
- Focus on **ENTICING DESIGN** and **EXPERIENCE**
- Simple, beautiful content display that encourages visitors to learn more
- Three specific project types: Asphalt Shingles, Siding, Commercial
- Use existing Services component patterns with variants
- Reference `/src/pages/index.astro` for design consistency
- Maintain same visual hierarchy and spacing as existing sections

## MANDATORY IMPLEMENTATION TASK BREAKDOWN

**REQUIREMENT:** The AI agent MUST create a minimum of 7 detailed implementation steps before beginning development. Each step must include:
- Clear deliverable description
- Specific files to create/modify
- Acceptance criteria
- Dependencies on previous steps

**Minimum Required Steps:**
1. **Project Setup & Planning** - Analyze existing codebase, define simple project structure
2. **Content Collection Setup** - Create simple projects content for asphalt shingles, siding, commercial
3. **Core Page Structure** - Build main projects.astro page with enticing layout
4. **Asphalt Shingles Section** - Create beautiful asphalt shingle project display
5. **Siding Projects Section** - Create engaging siding project showcase
6. **Commercial Projects Section** - Create professional commercial project display
7. **SEO & Meta Implementation** - Add proper meta tags and schema markup
8. **COLOR SCHEME VERIFICATION** - **NON-NEGOTIABLE** Final verification that existing color scheme is preserved

## IMPLEMENTATION GUIDELINES

### Code Quality
- Use existing UI components from `/src/components/ui/`
- Follow TypeScript best practices
- Maintain consistency with existing codebase
- Keep components simple and reusable

### Performance
- Optimize images for web
- Use lazy loading for images
- Minimize DOM complexity
- Fast loading times

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support

## CONTENT GUIDELINES

### Company Information
- **Company:** J Land Contracting INC
- **Services:** Roofing, Siding, Gutters, Roof Restoration
- **Location:** Jefferson, MD 21755
- **Phone:** (410) 292-0801

### Project Content
- Use real project examples when possible
- Include location information
- Brief, professional descriptions
- High-quality before/after images

### Call-to-Action
- Primary CTA: "Get Free Quote" with phone number
- Simple contact form or phone link
- Clear value proposition

## SCALABILITY CONSIDERATIONS

### Future Enhancements
- Individual project detail pages
- Client testimonials integration
- Project timeline/process information
- Additional project categories
- Enhanced visual presentations

### Data Management
- Prepare for CMS integration
- Structured data for easy expansion
- Modular component architecture
- Clean separation of content and presentation

## PRODUCTION CHECKLIST

### Technical Validation
- [ ] TypeScript compilation passes
- [ ] No console errors
- [ ] Responsive design works on all devices
- [ ] Images load properly
- [ ] Enticing design implemented
- [ ] SEO meta tags implemented
- [ ] **COLOR SCHEME PRESERVED** - **NON-NEGOTIABLE REQUIREMENT**

### Content Validation
- [ ] All text is professional and accurate
- [ ] Contact information is correct
- [ ] Images have proper alt text
- [ ] No placeholder content remains

### Performance Validation
- [ ] Page loads quickly
- [ ] Images are optimized
- [ ] No unnecessary JavaScript
- [ ] Clean, minimal code

## FINAL VERIFICATION REQUIREMENTS

### COLOR SCHEME PRESERVATION VERIFICATION (NON-NEGOTIABLE)
**IMMEDIATE FAIL CONDITIONS:**
- [ ] Any modification to existing brand color values
- [ ] Use of colors not defined in `/src/styles/global.css`
- [ ] Custom color definitions or overrides
- [ ] Inline color styles or CSS color properties

**MANDATORY VERIFICATION STEPS:**
1. **Verify Brand Primary Usage** - All headings use `text-brand-primary` (rgb(38, 35, 39))
2. **Verify Brand Secondary Usage** - All body text uses `text-brand-secondary` (rgb(125, 120, 119))
3. **Verify Accent Primary Usage** - All CTAs and highlights use `text-accent-primary` (rgb(253, 184, 19))
4. **Verify Background Usage** - Sections use `bg-background-light` or `bg-background-dark` only
5. **Verify No Custom Colors** - Zero custom color definitions anywhere in the code
6. **Cross-Reference Index.astro** - Color usage matches existing homepage patterns exactly

**VALIDATION COMMAND:** Agent must verify color scheme preservation before marking task complete

---

**FOCUS:** Create an enticing, visually appealing projects page that showcases work beautifully while preserving the exact existing color scheme. NO complex utilities, NO galleries, NO filtering - focus on design experience that encourages visitors to learn more.