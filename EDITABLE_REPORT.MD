# CloudCannon Editable Fields Report

Comprehensive audit of every Astro component and page in the project. Each section lists every visible text and image element, its content source, and editability status.

> **Last audited:** 2026-02-22

---

## Architecture Summary

The project uses **four content strategies**:

1. **Inline `data-editable` tags** — Used in section components (`Hero`, `Contact`, `FAQ`, `Header`, `Footer`) where text is hardcoded in the component and tagged with `data-editable="source"` attributes for CloudCannon Visual Editor inline editing.
2. **Content collection frontmatter** — Used in all page-level files. Content is defined in `src/content/pages/*.md` and accessed via `getEntry("pages", "...")`. Props from these files flow down to child components.
3. **Component props with defaults** — Section components (`AboutUs`, `Process`, `Testimonials`, `Services`, `Partners`, `FAQ`) receive all content via props. Default values exist as fallbacks in the component frontmatter.
4. **Sanity CMS** — Used on the home page (`index.astro`) to fetch hero video, testimonial avatar, project photos, and roofing/construction service card data (titles, descriptions, images).

---

## Implementation Status Summary

| Component | Content Source | `data-editable` Tags | Content Collection | Notes |
|-----------|--------------|---------------------|-------------------|-------|
| Hero.astro | Props + inline defaults | ✅ 12 text + 1 image | Via index.md | Reference implementation |
| Header.astro | Inline hardcoded | ✅ 15 text | ❌ | Logo text + nav links (desktop + mobile) |
| Footer.astro | Inline + props | ✅ 24 text | Via index.md (socialLinks) | Social links now prop-driven |
| Contact.astro (section) | Inline hardcoded | ✅ 12 text | ❌ | Form labels + headings tagged |
| FAQ.astro | Props + inline defaults | ✅ 7 text | Via index.md | All Q&A data now from props |
| Testimonials.astro | Props only | ❌ 0 | Via index.md | All content via props |
| AboutUs.astro | Props only | ❌ 0 | Via index.md | Video URL now a prop |
| Process.astro | Props only | ❌ 0 | Via index.md | All content via props |
| Services.astro | Props only | ❌ 0 | Via service collections + Sanity | All content via props |
| Partners.astro | Props + inline defaults | ❌ 0 | Via index.md | Logo array now a prop |
| index.astro (page) | Content collection + Sanity | ❌ 0 | ✅ index.md | Props to child components |
| about.astro (page) | Content collection | ❌ 0 | ✅ about.md | All content from frontmatter |
| services.astro (page) | Content collection + JSON | ❌ 0 | ✅ services.md | Some hardcoded strings remain |
| contact.astro (page) | Content collection | ❌ 0 | ✅ contact.md | All content from frontmatter |
| blog.astro (page) | Content collection | ❌ 0 | ✅ blog.md | Some hardcoded strings remain |
| financing.astro (page) | Content collection | ❌ 0 | ✅ financing.md | All content from frontmatter |
| projects.astro (page) | Content collection + JSON | ❌ 0 | ✅ projects.md | Project data from JSON files |
| resources.astro (page) | Content collection | ❌ 0 | ✅ resources.md | All content from frontmatter |

---

## Sanity CMS Content (Home Page Only)

The home page (`index.astro`) fetches the following from **Sanity CMS** via `src/lib/sanity/client`:

| Sanity Type | Data Fetched | Used By |
|------------|-------------|---------|
| `heroVideo` | `video.asset->url` | `Hero.astro` (`videoSrc` prop) |
| `testimonialIcon` | `icon.asset->url` | `Testimonials.astro` (`avatarURL`) |
| `projectPhoto` | `image.asset->url`, `alt`, `tags` | `Testimonials.astro` (recent project images), `Services.astro` (service card images) |
| `roofingServices` | `title`, `description`, `buttonText`, `buttonHref` | `Services.astro` (roofing variant) |
| `constructionServices` | `title`, `description`, `buttonText`, `buttonHref` | `Services.astro` (construction variant) |

> **Note:** Service card text content (titles, descriptions, button text) on the home page comes from **Sanity**, not from the `.md` frontmatter files. This content is managed through the Sanity Studio dashboard.

---

## JSON Collection Data

The following JSON files provide service/project data to `services.astro` and `projects.astro`:

| File | Content | Used By |
|------|---------|---------|
| `src/content/services/roofing.json` | `title`, `decorativeImage`, `services[]` (image, title, description, buttonText) | `index.astro` (fallback), `services.astro`, `projects.astro` |
| `src/content/services/construction.json` | Same structure | `index.astro` (fallback), `services.astro`, `projects.astro` |
| `src/content/services/showcase.json` | Same structure | `index.astro`, `projects.astro` |

> These JSON files are editable via CloudCannon's data editor.

---

## Section Components (with `data-editable` tags)

### `Hero.astro`
`src/components/sections/Hero.astro` — **400 lines**

| Line | Element | data-key | Current Content | Editable Type | Status |
|------|---------|----------|----------------|---------------|--------|
| 52–58 | `<h1>` | `hero_heading` | "Building Roofs. Restoring Trust. Serving with Purpose." | text | ✅ Tagged |
| 61–67 | `<p>` | `hero_subtitle` | "Guided by seriousness, integrity…" | text | ✅ Tagged |
| 79–83 | `<span>` in Button | `hero_cta_primary` | "Get Your Free Roof Inspection Now" | text | ✅ Tagged |
| 91–95 | `<span>` in Button | `hero_cta_secondary` | "View Our Projects" | text | ✅ Tagged |
| 117–123 | `<span>` (×3, dynamic) | `hero_trust_1/2/3` | "Integrity & Reliability" etc. | text | ✅ Tagged |
| 174–181 | `<h3>` | `hero_form_success_heading` | "Request Submitted!" | text | ✅ Tagged |
| 186–196 | `<p>` | `hero_form_success_message` | "A J Land team member will contact you shortly!" | text | ✅ Tagged |
| 197–204 | `<p>` | `hero_form_success_subtext` | "We typically respond within 2-4 hours…" | text | ✅ Tagged |
| 256–260 | `<span>` in Button | `hero_form_submit` | "GET QUOTE NOW" | text | ✅ Tagged |
| 266–278 | `<img>` | (image attrs) | GreenSky financing header image | image | ✅ Tagged |

**Props interface:**
```typescript
export interface Props {
  videoSrc?: string;
  hero_financing_image_src?: string;
  hero_financing_image_alt?: string;
  heading?: string;
  subtitle?: string;
  cta_primary?: string;
  cta_secondary?: string;
  trust_indicators?: string[];
}
```

> Content sourced from `src/content/pages/index.md` → `hero_*` fields. Video from **Sanity CMS**.

---

### `Contact.astro` (section component)
`src/components/sections/Contact.astro` — **172 lines**

| Line | Element | data-key | Current Content | Editable Type | Status |
|------|---------|----------|----------------|---------------|--------|
| 21 | `<span>` in Heading | `contact_heading` | "Let's Discuss Your Project" | text | ✅ Tagged |
| 24 | `<span>` in Text | `contact_subheading` | "Our experts are ready to help…" | text | ✅ Tagged |
| 69 | `<span>` in Heading | `contact_form_heading` | "Send Us a Message" | text | ✅ Tagged |
| 79 | `<span>` in Text | `contact_label_name` | "Your Name" | text | ✅ Tagged |
| 85 | `<span>` in Text | `contact_label_email` | "Email Address" | text | ✅ Tagged |
| 94 | `<span>` in Text | `contact_label_phone` | "Phone Number" | text | ✅ Tagged |
| 100 | `<span>` in Text | `contact_label_address` | "Project Address" | text | ✅ Tagged |
| 108 | `<span>` in Text | `contact_label_message` | "Message" | text | ✅ Tagged |
| 116 | `<span>` in Button | `contact_submit_button` | "Submit Request" | text | ✅ Tagged |
| 129 | `<span>` in Text | `contact_call_label` | "Call Us" | text | ✅ Tagged |
| 132 | `<span>` in Text | `contact_phone` | "(410) 292-0801" | text | ✅ Tagged |
| 140 | `<span>` in Text | `contact_email_label` | "Email Us" | text | ✅ Tagged |
| 143 | `<span>` in Text | `contact_email` | "info@jlandgroup.com" | text | ✅ Tagged |

> **Note:** This component has no props interface — all text is hardcoded with `data-editable` tags. The Google Maps iframe URL (line 35) and placeholder texts are also hardcoded.

---

### `FAQ.astro`
`src/components/sections/FAQ.astro` — **202 lines**

| Line | Element | data-key | Current Content | Editable Type | Status |
|------|---------|----------|----------------|---------------|--------|
| ~102 | `<span>` in Heading | `faq_heading` | "Frequently Asked Questions" | text | ✅ Tagged |
| ~116 | `<span>` in Text | `faq_subtitle` | "Find answers to common questions…" | text | ✅ Tagged |
| dynamic | `<span>` per section | `faq_section_*` | Section titles (e.g. "Roofing Materials") | text | ✅ Tagged |
| ~192 | `<span>` in Text | `faq_cta_text` | "Still have questions?" | text | ✅ Tagged |
| ~195 | `<span>` in Button | `faq_cta_button` | "Learn More" | text | ✅ Tagged |

**Props interface (refactored):**
```typescript
export interface Props {
  heading?: string;
  subtitle?: string;
  cta_text?: string;
  cta_button?: string;
  sections?: { title: string; items: { question: string; answer: string }[] }[];
}
```

> ✅ **Fixed:** FAQ Q&A data (10 items in 3 sections) now flows from `index.md` frontmatter via props. Previously hardcoded as JavaScript arrays.

---

## Layout Components (with `data-editable` tags)

### `Header.astro`
`src/components/layout/Header.astro` — **47 lines**

| Line | Element | data-key | Current Content | Editable Type | Status |
|------|---------|----------|----------------|---------------|--------|
| 16 | `<span>` | `header_logo_text` | "J LAND CONTRACTING" | text | ✅ Tagged |
| 25 | `<span>` in `<a>` | `header_nav_services` | "Services" | text | ✅ Tagged |
| 26 | `<span>` in `<a>` | `header_nav_about` | "About" | text | ✅ Tagged |
| 27 | `<span>` in `<a>` | `header_nav_projects` | "Projects" | text | ✅ Tagged |
| 28 | `<span>` in `<a>` | `header_nav_blog` | "Blog" | text | ✅ Tagged |
| 29 | `<span>` in `<a>` | `header_nav_financing` | "Financing" | text | ✅ Tagged |
| 30 | `<span>` in `<a>` | `header_nav_resources` | "Resources" | text | ✅ Tagged |
| 31 | `<span>` in `<a>` | `header_nav_contact` | "Contact" | text | ✅ Tagged |
| 38–44 | `<span>` (×7) | `header_mobile_nav_*` | Same labels (mobile menu) | text | ✅ Tagged |

**Images:**
| Line | Element | Content | Type | Status |
|------|---------|---------|------|--------|
| 13 | `<img>` | `/favicon.svg` (logo icon) | image | ❌ Not tagged |

> **Note:** Header has no props — all content is hardcoded with `data-editable="source"` tags. Navigation link `href` values are hardcoded.

---

### `Footer.astro`
`src/components/layout/Footer.astro` — **452 lines**

| Line | Element | data-key | Current Content | Editable Type | Status |
|------|---------|----------|----------------|---------------|--------|
| 49 | `<h3>` | `footer_company_name` | "J Land Contracting INC" | text | ✅ Tagged |
| 58 | `<p>` | `footer_company_description` | "Deeply rooted in a family legacy…" | text | ✅ Tagged |
| 92 | `<p>` | `footer_address` | "3636 Glenoble Court, Jefferson, MD 21755" | text | ✅ Tagged |
| 101 | `<p>` | `footer_phone` | "(410) 292-0801" | text | ✅ Tagged |
| 110 | `<p>` | `footer_email` | "info@jlandgroup.com" | text | ✅ Tagged |
| 126 | `<h4>` | `footer_quick_links_title` | "Quick Links" | text | ✅ Tagged |
| 141 | `<span>` (×7) | `footer_link_home/services/about/projects/blog/financing/contact` | Nav links | text | ✅ Tagged |
| 218 | `<h4>` | `footer_services_title` | "Our Services" | text | ✅ Tagged |
| 233 | `<span>` (×4) | `footer_service_roofing/siding/gutters/restoration` | Service links | text | ✅ Tagged |
| 277 | `<h4>` | `footer_newsletter_title` | "Stay Updated" | text | ✅ Tagged |
| 286 | `<p>` | `footer_newsletter_description` | "Subscribe to our newsletter…" | text | ✅ Tagged |
| 308 | `<span>` | `footer_newsletter_button` | "Subscribe" | text | ✅ Tagged |
| 330 | `<p>` | `footer_copyright` | "© 2025 J Land Contracting. All Rights Reserved." | text | ✅ Tagged |
| 369 | `<span>` | `footer_link_privacy` | "Privacy Policy" | text | ✅ Tagged |
| 383 | `<span>` | `footer_link_terms` | "Terms of Service" | text | ✅ Tagged |

**Props interface:**
```typescript
export interface Props {
  socialLinks?: SocialLink[];  // { name, url, icon }
}
```

> ✅ **Fixed:** Social links are now prop-driven (passed from `Layout.astro` via `index.md` → `footer_social_links`). Defaults are kept as fallbacks.

**Untagged images in Footer:**
| Line | Element | Current Content | Type |
|------|---------|----------------|------|
| 74 | `<div>` bg-image | Location icon SVG (motiffcontent) | image |
| 79 | `<div>` bg-image | Phone icon SVG (motiffcontent) | image |
| 84 | `<div>` bg-image | Email icon SVG (motiffcontent) | image |
| 318 | `<div>` bg-image | Divider line SVG (motiffcontent) | image |
| 349 | `<img>` (×4) | Social media icon SVGs (motiffcontent) | image (prop-driven) |

---

## Section Components (props-only, no `data-editable` tags)

### `Testimonials.astro`
`src/components/sections/Testimonials.astro` — **171 lines**

All content is received via props. **No `data-editable` tags present.**

**Props interface:**
```typescript
export interface Props {
  images?: any[];
  testimonial?: any;
  heading?: string;
  featured_testimonial?: {
    quote: string; customerName: string; location: string; rating: number; avatarUrl?: string;
  };
  highlight_heading?: string;
  highlight_rating?: number;
  highlight_total?: number;
  reviews?: { name: string; location: string; rating: number; service?: string; time?: string; review?: string; }[];
}
```

> Content sourced from `src/content/pages/index.md` → `testimonials_*` fields. Avatar URL from **Sanity CMS**. Project images from **Sanity CMS**.

---

### `AboutUs.astro`
`src/components/sections/AboutUs.astro` — **154 lines**

All content is received via props. **No `data-editable` tags present.**

**Props interface:**
```typescript
export interface Props {
  heading?: string;
  history?: { title: string; description: string };
  mission?: { title: string; description: string };
  values?: { title: string; description: string };
  stats?: { value: string; label: string }[];
  commitment?: { title: string; text: string };
  videoSrc?: string;  // ✅ Now a prop (was hardcoded)
}
```

> ✅ **Fixed:** Video URL is now a prop (`about_video_src` in `index.md`). Default fallback to hardcoded Streamable URL.
> Content sourced from `src/content/pages/index.md` → `about_*` fields.

---

### `Process.astro`
`src/components/sections/Process.astro` — **106 lines**

All content is received via props. **No `data-editable` tags present.**

**Props interface:**
```typescript
export interface Props {
  heading?: string;
  steps?: { number: string; description: string }[];
}
```

**Image (hardcoded):**
| Line | Element | Content | Type |
|------|---------|---------|------|
| 98 | `Card` backgroundImage prop | `https://static.motiffcontent.com/...19843b29409c4f4...jpeg` | image |

> Content sourced from `src/content/pages/index.md` → `process_*` fields.

---

### `Services.astro`
`src/components/sections/Services.astro` — **~60 lines**

All content is received via props. **No `data-editable` tags present.**

**Props interface:**
```typescript
export interface Props {
  variant: 'roofing' | 'construction' | 'showcase';
  title: string;
  decorativeImage?: string;
  services: Service[];
  columns?: 1 | 2 | 3 | 4;
}
```

> Content sourced from service collections (`src/content/services/*.json`) and **Sanity CMS** (home page only).

---

### `Partners.astro`
`src/components/sections/Partners.astro` — **~63 lines**

**Props interface (refactored):**
```typescript
export interface Props {
  partners?: { name: string; logo: string }[];
}
```

> ✅ **Fixed:** Partner logos are now prop-driven via `index.md` → `partners[]` array. Previously 6 hardcoded `<img>` elements. Default fallback retained.
> Content sourced from `src/content/pages/index.md` → `partners` field.

---

## Page-Level Components (Content Collection Driven)

All page-level components pull content from `src/content/pages/*.md` via `getEntry("pages", "...")`. **None have `data-editable` tags.** Content is edited through the markdown frontmatter files.

### `index.astro`
`src/pages/index.astro` — **203 lines**

**Content sources:**
- `src/content/pages/index.md` (frontmatter for all text content)
- **Sanity CMS** (hero video, testimonial avatar, project photos, roofing/construction service data)
- `src/content/services/*.json` (service collection fallbacks)

**Frontmatter fields in index.md:**
| Field | Content | Section |
|-------|---------|---------| 
| `title` | "JLand Contracting - Devoted Roofing…" | SEO |
| `description` | "Devoted roofing and construction…" | SEO |
| `hero_heading` / `hero_heading_accent` | "Building Roofs. Restoring Trust." / "Serving with Purpose." | Hero |
| `hero_subtitle` | "Guided by seriousness, integrity…" | Hero |
| `hero_cta_primary` / `hero_cta_secondary` | CTA button text | Hero |
| `hero_trust_indicators` | 3 items | Hero |
| `about_heading` | "About Our Company" | AboutUs |
| `about_history_title/description` | "Our History" / text | AboutUs |
| `about_mission_title/description` | "Our Mission" / text | AboutUs |
| `about_values_title/description` | "Our Values" / text | AboutUs |
| `about_stats` | 3 stat items | AboutUs |
| `about_commitment_title/text` | "Our Commitment to Excellence" / text | AboutUs |
| `about_video_src` | Streamable video URL | AboutUs |
| `process_title` | "Our Roofing Process" | Process |
| `process_steps` | 5 step items | Process |
| `testimonials_heading` | "What Our Clients Say" | Testimonials |
| `testimonials_featured` | Quote + author + location + rating | Testimonials |
| `testimonials_highlight_heading` / `_rating` / `_count` | "Customer Reviews" / 4.9 / 124 | Testimonials |
| `testimonials_list` | 2 review items | Testimonials |
| `partners` | 6 partner objects (name + logo URL) | Partners |
| `footer_social_links` | 4 social link objects | Footer |
| `faq_heading` / `faq_subtitle` / `faq_cta_text` / `faq_cta_button` | FAQ header text + CTA | FAQ |
| `faq_sections` | 3 sections with 10 total Q&A items | FAQ |

---

### `about.astro`
`src/pages/about.astro` — **649 lines**

**Content source:** `src/content/pages/about.md`

| Category | Fields | Approx Count |
|----------|--------|------|
| SEO | `title`, `description` | 2 |
| Hero | `badge`, `hero_heading`, `hero_heading_accent`, `hero_subtitle`, `cta_primary_text`, `cta_secondary_text/href`, `trust_indicators` | 8 |
| Story | `story_heading`, `story_subtitle`, `story_paragraphs[]`, `story_button_text/href` | 5+ |
| Founder | `founder_name`, `founder_role`, `founder_quote`, `founder_stats[]` | 4+ |
| Values | `values_heading`, `values_subtitle`, `values_list[]` (title, description, icon) | 3+ |
| Mission | `mission_heading`, `mission_description`, `mission_primary/secondary_text/href` | 5 |
| Team | `team_heading`, `team_subtitle`, `team_members[]` (initials, name, role, bio, badge) | 3+ |
| Expertise | `expertise_heading`, `expertise_subtitle`, `expertise_stats[]` | 3+ |
| Community | `community_heading`, `community_subtitle`, `community_partners[]`, `community_stats_heading`, `community_stats[]`, `community_link_text/href` | 7+ |
| Final CTA | `final_cta_heading`, `final_cta_subtitle`, `final_cta_benefits[]`, `final_cta_primary/secondary_text/href`, `final_cta_footer_items[]` | 7+ |

---

### `services.astro`
`src/pages/services.astro` — **469 lines**

**Content source:** `src/content/pages/services.md` + `src/content/services/*.json` (via `getCollection`)

| Category | Fields | Approx Count |
|----------|--------|------|
| SEO | `title`, `description`, `seo_keywords` | 3 |
| Hero | `badge`, `hero_heading`, `hero_heading_accent`, `hero_subtitle`, `cta/trust` | 9 |
| Services | `services_heading`, `services_subtitle`, `roofing_description`, `construction_description` | 4 |
| Why Choose | `why_choose_us_title/subtitle`, `why_choose_us_reasons[]` | 3+ |
| Testimonials | `testimonials_heading/subtitle`, `testimonials_rating_text`, `testimonials_button_text`, `testimonials[]` | 5+ |
| Service Areas | `service_areas_heading/subtitle`, `service_areas_button_text`, `service_areas_map_image`, `service_areas[]` | 5+ |
| Contact CTA | `contact_cta_title/subtitle`, `contact_phone/email/hours`, `contact_cta_buttons[]` | 6+ |

**⚠ Remaining hardcoded strings:**
| Line | Content | Context |
|------|---------|---------|
| 228 | `"Residential"` | Badge label for each service category |
| 268–269 | `"View All Services"` | Button text below service cards |
| 419 | `"Call Us Today"` | Contact CTA section label |
| 427 | `"Email Us"` | Contact CTA section label |
| 435 | `"Business Hours"` | Contact CTA section label |

---

### `contact.astro` (page)
`src/pages/contact.astro` — **297 lines**

**Content source:** `src/content/pages/contact.md`

| Category | Fields | Approx Count |
|----------|--------|------|
| SEO | `title`, `description` | 2 |
| Hero | `badge`, `hero_heading`, `hero_heading_accent`, `hero_subtitle`, CTAs, `trust_indicators` | 9 |
| Contact Info | `contact_info_heading/subtitle`, `contact_cards[]` (icon, title, description, button_text, button_href) | 3+ |
| Form | `form_heading/subtitle`, `form_submit_text`, `form_fields[]` (label, type, name, placeholder, required, options) | 4+ |
| Service Areas | `service_areas_heading/subtitle`, `service_areas_footer`, `service_area_cards[]` (title, description) | 4+ |

---

### `blog.astro`
`src/pages/blog.astro` — **457 lines**

**Content source:** `src/content/pages/blog.md`

| Category | Fields | Approx Count |
|----------|--------|------|
| SEO | `title`, `description` | 2 |
| Hero | `badge`, `hero_heading`, `hero_heading_accent`, `hero_subtitle`, CTAs, `trust_indicators` | 9 |
| Categories | `categories[]`, `category_labels` | 2 |
| Articles | `blog_articles[]` (title, excerpt, date, category, slug) | 8 articles |
| Sidebar | `sidebar_recent_posts_title`, `sidebar_categories_title/categories[]`, `sidebar_trust_title/items[]`, `sidebar_cta_title/text/button/href`, `sidebar_contact_title/info` | 10+ |
| Bottom CTA | `bottom_cta_heading/text`, `bottom_cta_primary/secondary_text/href` | 5 |

**⚠ Remaining hardcoded strings:**
| Location | Content | Context |
|----------|---------|---------|
| Article cards | `"Read More →"` | Link text on each blog article card |
| Empty state | `"No articles found matching…"` | Shown when no articles match filter |
| Category labels | `"All Articles"` etc. | Defined in frontmatter `categories[]` ✅ |

---

### `financing.astro`
`src/pages/financing.astro` — **169 lines**

**Content source:** `src/content/pages/financing.md`

| Category | Fields | Approx Count |
|----------|--------|------|
| SEO | `title`, `description` | 2 |
| Hero | `badge`, `hero_heading`, `hero_heading_accent`, `hero_subtitle`, `trust_indicators` | 5 |
| Financing | `financing_badge`, `financing_heading`, `financing_subtitle` | 3 |
| Guidelines | `guidelines_badge`, `guidelines_heading`, `guidelines_subtitle` | 3 |
| CTA | `cta_heading`, `cta_subtitle`, `cta_buttons[]` | 3+ |

> **Note:** The `FinancingComponent` and `UsageGuidelines` sub-components may contain their own hardcoded content (GreenSky financing images/text).

---

### `projects.astro`
`src/pages/projects.astro` — **251 lines**

**Content source:** `src/content/pages/projects.md` + `src/content/services/*.json`

| Category | Fields | Approx Count |
|----------|--------|------|
| SEO | `title`, `description` | 2 |
| Hero | `badge`, `hero_heading`, `hero_heading_accent`, `hero_subtitle`, CTAs, `trust_indicators` | 9 |
| Showcase | `showcase_sections[]` (badge, heading, subtitle, data_source, cta_text, variant) | 3 sections |
| CTA | `cta_section_heading`, `cta_section_subtitle`, `cta_section_buttons[]` | 3+ |

> **Note:** Project card data (titles, descriptions, images, locations, testimonials) comes from the JSON files, not the `.md` frontmatter.

**Hardcoded structured data (LD+JSON, line 230–250):** Business name, address, phone, and service area are hardcoded in the inline `<script type="application/ld+json">` block.

---

### `resources.astro`
`src/pages/resources.astro` — **289 lines**

**Content source:** `src/content/pages/resources.md`

| Category | Fields | Approx Count |
|----------|--------|------|
| SEO | `title`, `description` | 2 |
| Hero | `badge`, `hero_heading`, `hero_heading_accent`, `hero_subtitle`, CTAs, `trust_indicators` | 9 |
| Blog Section | `blog_section_heading/subtitle`, `blog_cards[]` (title, description, icon, button_text, button_href) | 3+ |
| Science Section | `science_section_heading/subtitle`, `science_cards[]` (title, description, icon), `science_cta_text/href` | 4+ |
| Tools Section | `tools_section_heading/subtitle`, `tools_cards[]` (title, description, icon, button_text, button_href) | 3+ |
| Bottom CTA | `bottom_cta_heading/text`, `bottom_cta_buttons[]` | 3+ |

---

## UI Components (Render Props)

These components receive all content via props and render it into DOM elements. They do **not** have `data-editable` tags internally.

### `SectionHeader.astro`
`src/components/ui/display/SectionHeader.astro`
- Renders: `{title}` as heading, `{decorativeImage}` as image, star rating

### `Card.astro`
`src/components/ui/display/Card.astro`
- Renders: Multiple variants (image, quote, service, review) with various props

### `ProjectShowcaseCard.astro`
`src/components/ui/display/ProjectShowcaseCard.astro`
- Renders: Project title, location, description, materials, image, testimonial, details, CTA

### `FeaturedTestimonial.astro`
`src/components/ui/features/FeaturedTestimonial.astro`
- Renders: `{quote}`, `{customerName}`, `{location}`, `{avatarUrl}`

### `Financing.astro`
`src/components/ui/Financing.astro`
- Renders: GreenSky financing images (hardcoded URLs, no tags, no props)

### `UsageGuidelines.astro`
`src/components/ui/UsageGuidelines.astro`
- Renders: GreenSky usage guideline content (likely hardcoded)

---

## Summary

| Content Strategy | Components | Editable Fields |
|-----------------|-----------|----------------|
| `data-editable` tags (inline) | Hero, Contact (section), FAQ, Header, Footer | ~71 text + 1 image |
| Content collection (`.md` frontmatter) | All 8 page files | ~300+ fields |
| Sanity CMS | Home page (index.astro) | ~5 content types (video, avatar, photos, services) |
| JSON collections | Service/project data | ~3 JSON files with service arrays |
| Props only (no tags) | Testimonials, AboutUs, Process, Services, Partners | Content flows from pages |

---

## Remaining Gaps (Minor)

| Gap | Location | Description | Priority |
|-----|----------|-------------|----------|
| Hardcoded labels | `services.astro` L228, L268, L419, L427, L435 | "Residential", "View All Services", "Call Us Today", "Email Us", "Business Hours" | Low |
| Hardcoded "Read More" | `blog.astro` article cards | "Read More →" link text | Low |
| Hardcoded LD+JSON | `projects.astro` L230–250 | Business name, address, phone in structured data | Low |
| Hardcoded LD+JSON | `services.astro` L91–124 | Structured data with hardcoded business info | Low |
| Financing sub-components | `Financing.astro`, `UsageGuidelines.astro` | GreenSky images/text likely hardcoded | Low |
| Header logo image | `Header.astro` L13 | `/favicon.svg` path is hardcoded | Low |
| Footer icon images | `Footer.astro` L74, L79, L84, L318 | Motiffcontent SVG URLs for icons/divider | Low |
| Process card image | `Process.astro` L98 | Background image URL is hardcoded | Low |
| Contact map URL | `Contact.astro` L35 | Google Maps iframe URL is hardcoded | Low |
| Form placeholders | `Contact.astro` | Input placeholders ("John Smith", etc.) hardcoded | Low |

> **All critical content is editable.** The remaining gaps are decorative elements, icon URLs, structured data, and a handful of UI label strings that rarely change.

---

## Changes Since Last Audit (2026-02-21)

| Change | Before | After |
|--------|--------|-------|
| Partners logos | Hardcoded 6 `<img>` elements | ✅ Prop-driven via `index.md` → `partners[]` |
| FAQ Q&A data | Hardcoded JS arrays (10 items) | ✅ Prop-driven via `index.md` → `faq_sections[]` |
| Footer social links | Hardcoded 4 `<div>` bg-images | ✅ Prop-driven via `index.md` → `footer_social_links[]` |
| AboutUs video URL | Hardcoded Streamable iframe | ✅ Prop-driven via `index.md` → `about_video_src` |
| Sanity CMS documentation | Not documented | ✅ Now fully documented |
| JSON collections | Not documented | ✅ Now fully documented |
