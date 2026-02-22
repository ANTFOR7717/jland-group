# Gap Remediation Plan

Plan to address the 4 editability gaps identified in the `EDITABLE_REPORT.MD` audit.  
Each gap is a self-contained task. Sanity-related items are noted but **will not be modified**.

> **Created:** 2026-02-21

---

## Gap 1: Partners.astro — Hardcoded Logo URLs

### Problem
`src/components/sections/Partners.astro` has 6 insurance partner logos with URLs and alt text baked directly into the template. There is no way to add, remove, reorder, or change logos without editing source code.

### Current State
- Component: `src/components/sections/Partners.astro` (63 lines)
- Used by: `src/pages/index.astro` (line 130) — `<Partners />`
- No props interface, no content collection, no `data-editable` tags
- Logos are external CDN URLs from `cdn.brandfetch.io`

### Plan

**Step 1 — Add `partners` field to `index.md` frontmatter**

Add a new `partners` array to `src/content/pages/index.md`:

```yaml
# Partners Section
partners:
  - name: "Geico Insurance"
    logo: "https://cdn.brandfetch.io/idVducn8DJ/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668074337186"
  - name: "Allstate Insurance"
    logo: "https://cdn.brandfetch.io/idy9-2iz_S/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1689946273103"
  - name: "Statefarm Insurance"
    logo: "https://cdn.brandfetch.io/idzveZQJ1Y/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667664725320"
  - name: "Progressive Insurance"
    logo: "https://cdn.brandfetch.io/idFDF9ze43/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1698221441834"
  - name: "USAA Insurance"
    logo: "https://cdn.brandfetch.io/id7nXFaoJg/w/789/h/832/theme/light/logo.png?c=1bxid64Mup7aczewSAYMX&t=1752524398858"
  - name: "Nationwide Insurance"
    logo: "https://cdn.brandfetch.io/idwn-EgP88/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668074598821"
```

**Step 2 — Add props interface to `Partners.astro`**

Update the component frontmatter to accept a `partners` prop with defaults matching current values:

```typescript
export interface Props {
  partners?: { name: string; logo: string }[];
  class?: string;
}

const { partners = [/* current 6 logos as default */], class: className = '' } = Astro.props;
```

**Step 3 — Replace hardcoded `<img>` tags with a `.map()` loop**

Replace the 6 hardcoded blocks with:

```astro
{partners.map((partner) => (
  <div class="flex items-center justify-center h-12 sm:h-16 w-24 sm:w-32">
    <img
      src={partner.logo}
      alt={partner.name}
      class="h-8 sm:h-12 w-auto object-contain filter grayscale opacity-60 hover:opacity-90 transition-opacity duration-300"
    />
  </div>
))}
```

**Step 4 — Pass data from `index.astro`**

In `src/pages/index.astro`, destructure `partners` from `page.data` and pass it:

```astro
<Partners partners={partners} />
```

### Files Modified
| File | Change |
|------|--------|
| `src/content/pages/index.md` | Add `partners` array |
| `src/components/sections/Partners.astro` | Add props, replace hardcoded logos with loop |
| `src/pages/index.astro` | Pass `partners` prop |

### Effort: Small (< 30 min)

---

## Gap 2: FAQ.astro — Q&A Data in JavaScript Arrays

### Problem
`src/components/sections/FAQ.astro` has 10 FAQ items defined as 3 JavaScript arrays in the component frontmatter (`roofingMaterialsFAQs`, `installationProcessFAQs`, `warrantyMaintenanceFAQs`). These cannot be edited through CloudCannon's content editor.

### Current State
- Component: `src/components/sections/FAQ.astro` (202 lines)
- Used by: `src/pages/index.astro` (line 186) — `<FAQ />`
- Q&A data: 3 arrays × (3, 4, 3) items = 10 FAQ entries
- Section headings have `data-editable` tags: `faq_heading`, `faq_subtitle`, `faq_section_materials`, `faq_section_installation`, `faq_section_warranty`, `faq_cta_text`, `faq_cta_button`
- Each FAQ item has: `id`, `question`, `answer`, `maxWidth`

### Plan

**Step 1 — Add FAQ data to `index.md` frontmatter**

Add structured FAQ data to `src/content/pages/index.md`:

```yaml
# FAQ Section
faq_heading: "Frequently Asked Questions"
faq_subtitle: "Find answers to common questions about our roofing services"
faq_cta_text: "Still have questions?"
faq_cta_button: "Learn More"
faq_sections:
  - title: "Roofing Materials"
    key: "materials"
    items:
      - question: "What roofing materials do you recommend for our climate?"
        answer: "For your local climate, we recommend asphalt shingles..."
      - question: "How do I choose between different roofing materials?"
        answer: "Consider factors like climate resistance..."
      - question: "Do you offer eco-friendly roofing options?"
        answer: "Yes! We offer recycled metal roofing..."
  - title: "Installation Process"
    key: "installation"
    items:
      - question: "How long does a typical roof installation take?"
        answer: "Most residential roof installations take 1-3 days..."
      - question: "Do I need to be home during the roof installation?"
        answer: "While it's not required..."
      - question: "How do you protect my property during installation?"
        answer: "We use protective tarps, magnetic sweepers..."
      - question: "What happens if it rains during my roof installation?"
        answer: "We monitor weather closely..."
  - title: "Warranty & Maintenance"
    key: "warranty"
    items:
      - question: "What warranty do you offer on new roofs?"
        answer: "We provide comprehensive warranties..."
      - question: "How often should I have my roof inspected?"
        answer: "We recommend professional roof inspections..."
      - question: "What maintenance does a roof require?"
        answer: "Basic maintenance includes keeping gutters clean..."
```

**Step 2 — Add props interface to `FAQ.astro`**

Update the component to accept all FAQ data via props, keeping current values as defaults:

```typescript
export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  key: string;
  items: FAQItem[];
}

export interface Props {
  heading?: string;
  subtitle?: string;
  cta_text?: string;
  cta_button?: string;
  sections?: FAQSection[];
  class?: string;
}
```

**Step 3 — Remove hardcoded JS arrays**

Delete the 3 arrays (`roofingMaterialsFAQs`, `installationProcessFAQs`, `warrantyMaintenanceFAQs`) from the frontmatter.

**Step 4 — Replace static section rendering with dynamic loop**

Instead of 3 manually-coded template sections, use a single `.map()` loop over the `sections` prop:

```astro
{sections.map((section) => (
  <div>
    <Heading level={3}>
      <span data-editable="source" data-path="src/components/sections/FAQ.astro" data-key={`faq_section_${section.key}`}>
        {section.title}
      </span>
    </Heading>
    {section.items.map((faq) => (
      <Dropdown question={faq.question} answer={faq.answer} />
    ))}
  </div>
))}
```

**Step 5 — Pass data from `index.astro`**

Destructure FAQ fields from `page.data` and pass:

```astro
<FAQ
  heading={faq_heading}
  subtitle={faq_subtitle}
  cta_text={faq_cta_text}
  cta_button={faq_cta_button}
  sections={faq_sections}
/>
```

### Decision: `data-editable` tags on headings

The existing `data-editable` tags on the 7 heading/CTA elements should be **retained** even after moving data to content collections. This provides dual editability:
- CloudCannon Visual Editor → inline editing (via `data-editable`)
- CloudCannon Content Editor → frontmatter editing (via `index.md`)

The tag values should continue to match the frontmatter field names.

### Files Modified
| File | Change |
|------|--------|
| `src/content/pages/index.md` | Add `faq_*` fields |
| `src/components/sections/FAQ.astro` | Add props, remove JS arrays, use dynamic loop |
| `src/pages/index.astro` | Destructure & pass FAQ props |

### Effort: Medium (1–2 hours) — template refactor required

---

## Gap 3: AboutUs.astro — Hardcoded Video URL

### Problem
`src/components/sections/AboutUs.astro` has a Streamable video embed URL hardcoded at line 113. The URL cannot be changed without editing source code.

### Current State
- Component: `src/components/sections/AboutUs.astro` (154 lines)
- Line 113: `src="https://streamable.com/e/468tvx"` in an `<iframe>`
- Used by: `src/pages/index.astro` — `<AboutUs ... />`
- The component already has a Props interface but no `videoSrc` prop

### Plan

**Step 1 — Add `about_video_src` to `index.md`**

```yaml
about_video_src: "https://streamable.com/e/468tvx"
```

**Step 2 — Add `videoSrc` prop to `AboutUs.astro`**

Extend the existing Props interface:

```typescript
export interface Props {
  heading?: string;
  history?: { title: string; description: string };
  mission?: { title: string; description: string };
  values?: { title: string; description: string };
  stats?: { value: string; label: string }[];
  commitment?: { title: string; text: string };
  videoSrc?: string;  // ← NEW
}
```

Default value:
```typescript
const { videoSrc = "https://streamable.com/e/468tvx", ...rest } = Astro.props;
```

**Step 3 — Use prop in iframe**

Replace the hardcoded URL:

```diff
- src="https://streamable.com/e/468tvx"
+ src={videoSrc}
```

**Step 4 — Pass from `index.astro`**

```astro
<AboutUs
  ...
  videoSrc={about_video_src}
/>
```

### Files Modified
| File | Change |
|------|--------|
| `src/content/pages/index.md` | Add `about_video_src` |
| `src/components/sections/AboutUs.astro` | Add `videoSrc` prop, use in iframe |
| `src/pages/index.astro` | Pass `about_video_src` → `videoSrc` |

### Effort: Small (< 15 min)

---

## Gap 4: Footer.astro — Social Media Icons Not Editable

### Problem
`src/components/layout/Footer.astro` has 4 social media icons rendered as `<div>` elements with `background-image` inline styles pointing to external SVG URLs. These have:
- No `<a>` wrappers (no clickable links to social profiles)
- No `data-editable` tags
- No alt text / accessibility labels

### Current State
- Component: `src/components/layout/Footer.astro` (lines 88–93)
- 4 icon divs with motiffcontent.com SVG URLs
- No `href` links — purely decorative at present
- The icons are: Facebook, Twitter/X, Instagram, LinkedIn (based on comment and visual order)

### Plan

**Step 1 — Add social media data to `index.md` or a new `globals.md`**

Since the Footer is a global component (appears on every page), the best approach is to create a dedicated content file. However, since the existing pattern uses `.passthrough()` on the pages collection and `index.md` serves as the home page source, we have two options:

**Option A (Recommended):** Add to `index.md` since that's where global sections like `Partners` and `FAQ` will live:

```yaml
# Footer Social Links
footer_social_links:
  - name: "Facebook"
    url: "https://facebook.com/jlandcontracting"
    icon: "https://static.motiffcontent.com/private/resource/image/1984510688dc1de-4db560ab-a225-44ea-a18b-94e8dd6c23a0.svg"
  - name: "Twitter"
    url: "https://twitter.com/jlandcontracting"
    icon: "https://static.motiffcontent.com/private/resource/image/1984510688ddfda-bdc9fa85-2955-45df-8d5f-8829ac7d5b69.svg"
  - name: "Instagram"
    url: "https://instagram.com/jlandcontracting"
    icon: "https://static.motiffcontent.com/private/resource/image/1984510688e91a8-52cc4a7d-26bc-4aed-a1ad-78ea94370c98.svg"
  - name: "LinkedIn"
    url: "https://linkedin.com/company/jlandcontracting"
    icon: "https://static.motiffcontent.com/private/resource/image/1984510688f11f4-d7206832-6d42-4170-a2c2-19221eec4bdb.svg"
```

**Option B:** Create `src/content/pages/globals.md` for footer/header shared data, register it in the pages collection. This is cleaner architecturally but requires more plumbing.

**Step 2 — Add props to `Footer.astro`**

```typescript
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Props {
  socialLinks?: SocialLink[];
}

const { socialLinks = [/* current 4 icons as defaults */] } = Astro.props;
```

**Step 3 — Replace hardcoded divs with linked, accessible loop**

```astro
{socialLinks.map((social) => (
  <a
    href={social.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={social.name}
    class="w-5 h-5 block hover:opacity-80 transition-opacity"
  >
    <img
      src={social.icon}
      alt={social.name}
      class="w-full h-full object-contain"
    />
  </a>
))}
```

**Step 4 — Pass data through the layout chain**

Since Footer is rendered in `Layout.astro` (not directly in pages), we need to either:
- **(a)** Fetch `index.md` data inside Layout.astro and pass down, OR
- **(b)** Use Astro.locals or a data utility to make global data available

The simplest approach: fetch the data in `Layout.astro`:

```typescript
// In Layout.astro frontmatter
import { getEntry } from 'astro:content';
const global = (await getEntry('pages', 'index'))!;
const { footer_social_links } = global.data as any;
```

Then pass to Footer:
```astro
<Footer socialLinks={footer_social_links} />
```

### Files Modified
| File | Change |
|------|--------|
| `src/content/pages/index.md` | Add `footer_social_links` |
| `src/components/layout/Footer.astro` | Add props, replace divs with `<a>` + loop |
| `src/layouts/Layout.astro` | Fetch global data, pass to Footer |

### Effort: Medium (30–60 min) — involves Layout plumbing

---

## ⚠️ Sanity-Related Items (Noted, Not Modified)

The following items involve Sanity CMS integration and are **out of scope** for this plan:

1. **`Services.astro`** — Service data is fetched from both Sanity CMS and Astro content collections (`src/content/services/*.json`). The Sanity integration in `index.astro` uses `useSanityClient()` to fetch service data. This dual data source is untouched.

2. **Service collection JSON files** (`src/content/services/roofing.json`, `construction.json`, `showcase.json`) — These serve as fallbacks/supplements to Sanity data. Content editability depends on the Sanity Studio setup.

3. **`index.astro` Sanity fetch** — Lines that call `useSanityClient()` for fetching roofing/construction service data are left as-is.

---

## Execution Order

| Priority | Gap | Effort | Dependency |
|----------|-----|--------|------------|
| 1 | Gap 3: AboutUs video URL | Small (15 min) | None |
| 2 | Gap 1: Partners logos | Small (30 min) | None |
| 3 | Gap 4: Footer social icons | Medium (30–60 min) | Depends on Layout.astro |
| 4 | Gap 2: FAQ Q&A data | Medium (1–2 hrs) | None, but most template changes |

**Total estimated effort: 2–4 hours**

### Build Verification
After each gap is resolved, run `npm run build` to verify no regressions.

---

## Post-Implementation Checklist

- [ ] Gap 1: Partners.astro renders logos from props
- [ ] Gap 2: FAQ.astro renders Q&A from props
- [ ] Gap 3: AboutUs.astro uses `videoSrc` prop
- [ ] Gap 4: Footer social icons are `<a>` tags with props
- [ ] All content lives in `src/content/pages/index.md`
- [ ] `npm run build` passes
- [ ] `EDITABLE_REPORT.MD` updated to reflect resolved gaps
