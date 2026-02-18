# CloudCannon Editable Fields Report

Comprehensive audit of every Astro component and page in the project. Each table lists every visible text and image element that can be tagged with `data-editable="text"` or `data-editable="image"` for CloudCannon Visual Editor inline editing.

---

## Section Components

### `Hero.astro`
`src/components/sections/Hero.astro`

| Line | Element | Current Content | Editable Type | Status |
|------|---------|----------------|---------------|--------|
| 25 | `<h1>` | "Building Roofs. Restoring Trust. Serving with Purpose." | text | ✅ Tagged |
| 31 | `<p>` | "Guided by seriousness, integrity…" (subtitle) | text | ✅ Tagged |
| 44 | `<span>` in Button | "Get Your Free Roof Inspection Now" | text | ✅ Tagged |
| 47 | `<span>` in Button | "View Our Projects" | text | ✅ Tagged |
| 57 | `<span>` | "Integrity & Reliability" | text | ✅ Tagged |
| 63 | `<span>` | "Devotion & Vision" | text | ✅ Tagged |
| 69 | `<span>` | "Team Unity & Accountability" | text | ✅ Tagged |
| 91 | `<h3>` | "Request Submitted!" | text | ✅ Tagged |
| 96 | `<p>` | "A J Land team member will contact you shortly!" | text | ✅ Tagged |
| 100 | `<p>` | "We typically respond within 2-4 hours…" | text | ✅ Tagged |
| 154 | `<span>` in Button | "GET QUOTE NOW" | text | ✅ Tagged |
| 160 | `<img>` | GreenSky financing header image | image | ✅ Tagged |

---

### `AboutUs.astro`
`src/components/sections/AboutUs.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 13 | `SectionHeader` title prop | "About Our Company" | text |
| 18 | `SectionHeader` decorativeImage prop | Decorative SVG underline | image |
| 37 | `NumberedSection` number prop | "01" | text |
| 38 | `NumberedSection` title prop | "Our History" | text |
| 39 | `NumberedSection` description prop | "Founded on a family legacy…" | text |
| 44 | `NumberedSection` number prop | "02" | text |
| 45 | `NumberedSection` title prop | "Our Mission" | text |
| 46 | `NumberedSection` description prop | "We inform and guide homeowners…" | text |
| 50 | `NumberedSection` number prop | "03" | text |
| 52 | `NumberedSection` title prop | "Our Values" | text |
| 53 | `NumberedSection` description prop | "Integrity and reliability define…" | text |
| 59 | `Statistics` stat value | "15+" | text |
| 59 | `Statistics` stat label | "Years Experience" | text |
| 60 | `Statistics` stat value | "2,000+" | text |
| 60 | `Statistics` stat label | "Projects Completed" | text |
| 61 | `Statistics` stat value | "100%" | text |
| 61 | `Statistics` stat label | "Customer Satisfaction" | text |
| 70 | `Card` backgroundImage prop | Company image (JPEG) | image |
| 79 | `<Heading>` | "Our Commitment to Excellence" | text |
| 82 | `<Text>` | "Through 15+ years of hands-on experience…" | text |

> **Note:** Content passed via Astro component props (e.g., `NumberedSection`, `Statistics`, `SectionHeader`) renders inside child UI components. These require `data-editable` tags on the rendered DOM elements inside those child components, or extraction into CloudCannon data files.

---

### `Contact.astro` (section component)
`src/components/sections/Contact.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 21 | `<Heading>` | "Let's Discuss Your Project" | text |
| 24 | `<Text>` | "Our experts are ready to help…" | text |
| 35 | `<iframe>` src | Google Maps embed URL | source |
| 69 | `<Heading>` | "Send Us a Message" | text |
| 79 | `<Text>` | "Your Name" | text |
| 84 | `<Text>` | "Email Address" | text |
| 94 | `<Text>` | "Phone Number" | text |
| 100 | `<Text>` | "Project Address" | text |
| 108 | `<Text>` | "Message" | text |
| 116 | Button text | "Submit Request" | text |
| 129 | `<Text>` | "Call Us" | text |
| 132 | `<Text>` | "(410) 292-0801" | text |
| 140 | `<Text>` | "Email Us" | text |
| 143 | `<Text>` | "info@jlandgroup.com" | text |

---

### `FAQ.astro`
`src/components/sections/FAQ.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 101 | `<Heading>` | "Frequently Asked Questions" | text |
| 115 | `<Text>` | "Find answers to common questions…" | text |
| 124 | `<Heading>` | "Roofing Materials" | text |
| 27 | FAQ data: question | "What roofing materials do you recommend…?" | text |
| 28 | FAQ data: answer | "For your local climate, we recommend…" | text |
| 33 | FAQ data: question | "How do I choose between different…?" | text |
| 34 | FAQ data: answer | "Consider factors like climate resistance…" | text |
| 39 | FAQ data: question | "Do you offer eco-friendly roofing options?" | text |
| 40 | FAQ data: answer | "Yes! We offer recycled metal roofing…" | text |
| 146 | `<Heading>` | "Installation Process" | text |
| 48 | FAQ data: question | "How long does a typical roof installation take?" | text |
| 49 | FAQ data: answer | "Most residential roof installations…" | text |
| 54 | FAQ data: question | "Do I need to be home during…?" | text |
| 55 | FAQ data: answer | "While it's not required…" | text |
| 60 | FAQ data: question | "How do you protect my property…?" | text |
| 61 | FAQ data: answer | "We use protective tarps…" | text |
| 66 | FAQ data: question | "What happens if it rains…?" | text |
| 67 | FAQ data: answer | "We monitor weather closely…" | text |
| 168 | `<Heading>` | "Warranty & Maintenance" | text |
| 76 | FAQ data: question | "What warranty do you offer…?" | text |
| 77 | FAQ data: answer | "We provide comprehensive warranties…" | text |
| 81 | FAQ data: question | "How often should I have my roof inspected?" | text |
| 82 | FAQ data: answer | "We recommend professional roof inspections…" | text |
| 87 | FAQ data: question | "What maintenance does a roof require?" | text |
| 88 | FAQ data: answer | "Basic maintenance includes keeping gutters clean…" | text |
| 191 | `<Text>` | "Still have questions?" | text |
| 195 | Button text | "Learn More" | text |

> **Note:** FAQ questions/answers are defined as JavaScript data arrays in frontmatter. For CloudCannon editability, these should be migrated to content collections or data files.

---

### `Partners.astro`
`src/components/sections/Partners.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 11 | `<img>` | Geico Insurance logo | image |
| 12 | `<img>` alt | "Geico Insurance" | text (alt) |
| 20 | `<img>` | Allstate Insurance logo | image |
| 21 | `<img>` alt | "Allstate Insurance" | text (alt) |
| 29 | `<img>` | Statefarm Insurance logo | image |
| 30 | `<img>` alt | "Statefarm Insurance" | text (alt) |
| 38 | `<img>` | Progressive Insurance logo | image |
| 39 | `<img>` alt | "Progressive Insurance" | text (alt) |
| 47 | `<img>` | USAA Insurance logo | image |
| 48 | `<img>` alt | "USAA Insurance" | text (alt) |
| 56 | `<img>` | Nationwide Insurance logo | image |
| 57 | `<img>` alt | "Nationwide Insurance" | text (alt) |

---

### `Process.astro`
`src/components/sections/Process.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 13 | `SectionHeader` title prop | "Our Roofing Process" | text |
| 18 | `SectionHeader` decorativeImage prop | Decorative SVG underline | image |
| 37 | `NumberedSection` number | "01" | text |
| 38 | `NumberedSection` description | "With integrity, we visit your home…" | text |
| 45 | `NumberedSection` number | "02" | text |
| 46 | `NumberedSection` description | "Devoted to your needs…" | text |
| 53 | `NumberedSection` number | "03" | text |
| 54 | `NumberedSection` description | "Our united team removes…" | text |
| 61 | `NumberedSection` number | "04" | text |
| 62 | `NumberedSection` description | "Devoted to excellence…" | text |
| 69 | `NumberedSection` number | "05" | text |
| 70 | `NumberedSection` description | "Accountable to our values…" | text |
| 82 | `Card` backgroundImage prop | Process image (JPEG) | image |

---

### `Services.astro`
`src/components/sections/Services.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 35 | `SectionHeader` title prop | Passed via `{title}` prop | text |
| 39 | `SectionHeader` decorativeImage prop | Passed via `{decorativeImage}` prop | image |
| 47 | `Card` image prop | Service card image | image |
| 48 | `Card` imageAlt prop | Service card alt text | text (alt) |
| 49 | `Card` title prop | Service title | text |
| 50 | `Card` description prop | Service description | text |
| 51 | `Card` buttonText prop | CTA button text | text |

> **Note:** All content is passed via props from parent pages. Editable content originates from content collections and Sanity CMS data.

---

### `Testimonials.astro`
`src/components/sections/Testimonials.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 33 | `<Heading>` | "What Our Clients Say" | text |
| 39 | `FeaturedTestimonial` quote prop | "Working with JLand Contracting…" | text |
| 40 | `FeaturedTestimonial` customerName prop | "Mark Owens" | text |
| 41 | `FeaturedTestimonial` location prop | "Westminster, MD" | text |
| 42 | `FeaturedTestimonial` avatarUrl prop | Customer avatar image | image |
| 50 | `<Heading>` | "Recent Projects" | text |
| 71 | `SectionHeader` title prop | "Customer Reviews" | text |
| 75 | `SectionHeader` rating prop | 4.9 | text |
| 76 | `SectionHeader` totalReviews prop | 124 | text |
| 89 | `Card` customerName prop | "Jason Chung" | text |
| 90 | `Card` location prop | "Urbana, MD" | text |
| 92 | `Card` serviceType prop | "Roof Replacement" | text |
| 93 | `Card` timeAgo prop | "3 months ago" | text |
| 94 | `Card` reviewText prop | "The roof replacement was clean…" | text |
| 99 | `Card` customerName prop | "Matthew Marcus" | text |
| 100 | `Card` location prop | "Frederick, MD" | text |
| 102 | `Card` serviceType prop | "Commercial Roof" | text |
| 103 | `Card` timeAgo prop | "6 months ago" | text |
| 104 | `Card` reviewText prop | "I could not have been happier…" | text |

---

## Layout Components

### `Header.astro`
`src/components/layout/Header.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 12 | `<img>` | Logo image (`/favicon.svg`) | image |
| 13 | `<img>` alt | "J Land Contracting Logo" | text (alt) |
| 16 | `<span>` | "J LAND CONTRACTING" | text |
| 25 | `<a>` | "Services" | text |
| 26 | `<a>` | "About" | text |
| 27 | `<a>` | "Projects" | text |
| 28 | `<a>` | "Blog" | text |
| 29 | `<a>` | "Financing" | text |
| 30 | `<a>` | "Resources" | text |
| 31 | `<a>` | "Contact" | text |
| 38–44 | `<a>` (×7) | Mobile nav links (duplicate of above) | text |

---

### `Footer.astro`
`src/components/layout/Footer.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 11 | `<h3>` | "J Land Contracting INC" | text |
| 12 | `<p>` | "Deeply rooted in a family legacy…" | text |
| 18 | `<div>` bg-image | Location icon SVG | image |
| 19 | `<div>` bg-image | Phone icon SVG | image |
| 20 | `<div>` bg-image | Email icon SVG | image |
| 23 | `<p>` | "3636 Glenoble Court, Jefferson, MD 21755" | text |
| 24 | `<p>` | "(410) 292-0801" | text |
| 25 | `<p>` | "info@jlandgroup.com" | text |
| 33 | `<h4>` | "Quick Links" | text |
| 35–41 | `<a>` (×7) | Nav link texts (Home, Services, About Us, etc.) | text |
| 47 | `<h4>` | "Our Services" | text |
| 49–52 | `<a>` (×4) | Service link texts (Roofing, Siding, Gutters, etc.) | text |
| 58 | `<h4>` | "Stay Updated" | text |
| 59 | `<p>` | "Subscribe to our newsletter…" | text |
| 73 | `<button>` | "Subscribe" | text |
| 84 | `<p>` | "© 2025 J Land Contracting. All Rights Reserved." | text |
| 89 | `<div>` bg-image | Facebook social icon SVG | image |
| 90 | `<div>` bg-image | Twitter social icon SVG | image |
| 91 | `<div>` bg-image | Instagram social icon SVG | image |
| 92 | `<div>` bg-image | LinkedIn social icon SVG | image |
| 97 | `<a>` | "Privacy Policy" | text |
| 99 | `<a>` | "Terms of Service" | text |

---

## UI Components (Render Props — Editable at Usage Site)

These components receive all content via props and render it into DOM elements. The `data-editable` tags should be applied either:
1. **Inside the UI component** on the rendered DOM elements, or
2. **At the call site** (parent component/page) if using CloudCannon data files.

### `SectionHeader.astro`
`src/components/ui/display/SectionHeader.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 63/84 | `<Heading>` | `{title}` prop | text |
| 78 | `<Text>` | `{displayRatingText}` prop | text |
| 90 | `<div>` bg-image | `{decorativeImage}` prop | image |
| 70–74 | `<div>` bg-image (×5) | Star rating icons | image |

### `NumberedSection.astro`
`src/components/ui/display/NumberedSection.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 45 | `<Heading>` | `{number}` prop | text |
| 57 | `<Heading>` | `{title}` prop | text |
| 64 | `<Text>` | `{description}` prop | text |

### `Card.astro`
`src/components/ui/display/Card.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 107 | `<div>` bg-image | `{backgroundImage}` prop (image variant) | image |
| 113 | `<Heading>` | `{title}` prop (quote variant) | text |
| 120 | `<img>` | `{image}` prop (service variant) | image |
| 131 | `<Heading>` | `{title}` prop (service variant) | text |
| 136 | `<Text>` | `{description}` prop (service variant) | text |
| 146 | `<Text>` | `{feature}` items (features list) | text |
| 161 | `<a>` text | `{buttonText}` prop | text |
| 172 | `<Text>` | `{customerName}` prop (review variant) | text |
| 181 | `<Text>` | `{location}` prop (review variant) | text |
| 188 | `<Text>` | `{serviceType}` prop (review variant) | text |
| 193 | `<Text>` | "Verified Customer" | text |
| 199 | `<Text>` | `{reviewText}` prop (review variant) | text |
| 204 | `<Text>` | `{timeAgo}` prop (review variant) | text |

### `Statistics.astro`
`src/components/ui/display/Statistics.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 26 | `<div>` | `{stat.value}` | text |
| 29 | `<div>` | `{stat.label}` | text |

### `FeaturedTestimonial.astro`
`src/components/ui/features/FeaturedTestimonial.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 56 | `<Text>` | `{quote}` prop | text |
| 60 | `CustomerProfile` name | `{customerName}` prop | text |
| 61 | `CustomerProfile` location | `{location}` prop | text |
| 62 | `CustomerProfile` avatarUrl | `{avatarUrl}` prop | image |

### `CustomerProfile.astro`
`src/components/ui/display/CustomerProfile.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 52 | `<div>` bg-image | `{avatarUrl}` prop | image |
| 56 | `<Text>` | `{name}` prop | text |
| 59 | `<Text>` | `{location}` prop | text |

### `Financing.astro`
`src/components/ui/Financing.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 7 | `<img>` | GreenSky header image | image |
| 10 | `<img>` | Roofing product header image | image |
| 14 | `<img>` | Plan 2521 financing button | image |
| 19 | `<img>` | Plan 9991 financing button | image |
| 24 | `<img>` | Plan 4158 financing button | image |
| 28 | `<img>` | GreenSky footer/disclaimer image | image |

---

## Page-Level Components

### `about.astro`
`src/pages/about.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 22 | `<div>` | "Family-Owned Since 2015" (badge) | text |
| 24–27 | `<h1>` | "Craftsmanship That Stands the Test of Time" | text |
| 28–31 | `<p>` | "Our devoted certification…" (subtitle) | text |
| 38 | Button text | "Get Your Free Roof Inspection Now" | text |
| 41 | Button text | "Learn More" | text |
| 49 | `<span>` | "Licensed & Insured" | text |
| 55 | `<span>` | "2000+ Happy Customers" | text |
| 61 | `<span>` | "50-Year System Warranty" | text |
| 75 | `SectionHeader` title | "Our Founding Story" | text |
| 80 | `<p>` | "From a father's vision…" | text |
| 85 | `<p>` | "Through diligent work…" (story p1) | text |
| 89–91 | `<p>` | "JLand embodies…" (story p2) | text |
| 94–97 | `<p>` | "Today, J Land Contracting…" (story p3) | text |
| 102 | Button text | "See Our Roofing Projects" | text |
| 115 | `<h3>` | "Danny Nam" | text |
| 116 | `<p>` | "Founder & CEO" | text |
| 120–121 | `<blockquote>` | "Every project is a chance…" | text |
| 127 | `<div>` | "9+" | text |
| 128 | `<div>` | "Years Experience" | text |
| 131 | `<div>` | "500+" | text |
| 132 | `<div>` | "Projects Completed" | text |
| 135 | `<div>` | "100%" | text |
| 136 | `<div>` | "Satisfaction Rate" | text |
| 153 | `SectionHeader` title | "Our Core Values" | text |
| 157–160 | `<p>` | "Our values are demonstrated…" | text |
| 170 | `<h3>` | "Integrity First" | text |
| 171–173 | `<p>` | "Whether seen or unseen…" | text |
| 182 | `<h3>` | "Quality Obsessed" | text |
| 183–185 | `<p>` | "Our devoted focus on ventilation…" | text |
| 194 | `<h3>` | "Family Focused" | text |
| 195–197 | `<p>` | "Your roof safeguards your family's legacy…" | text |
| 206 | `<h3>` | "Community Rooted" | text |
| 207–209 | `<p>` | "As Frederick residents…" | text |
| 214–216 | `<h2>` | "Our Mission: Protecting What Matters Most" | text |
| 217–221 | `<p>` | "We exist to deliver scientifically…" | text |
| 229 | Button text | "Get Your Free Roof Inspection Now" | text |
| 232 | Button text | "Learn More" | text |
| 246 | `SectionHeader` title | "Meet Our Team" | text |
| 250–252 | `<p>` | "Behind every successful project…" | text |
| 258 | `<span>` | "JL" (avatar initials) | text |
| 260 | `<h3>` | "Danny Nam" | text |
| 261 | `<p>` | "Founder & CEO" | text |
| 262–264 | `<p>` | Bio text | text |
| 266 | Badge text | "Devoted to Excellence" | text |
| 272 | `<span>` | "ML" (avatar initials) | text |
| 274 | `<h3>` | "Maria Lopez" | text |
| 275 | `<p>` | "Project Manager" | text |
| 276–278 | `<p>` | Bio text | text |
| 280 | Badge text | "PMP Certified" | text |
| 286 | `<span>` | "DT" (avatar initials) | text |
| 288 | `<h3>` | "David Thompson" | text |
| 289 | `<p>` | "Lead Craftsman" | text |
| 290–292 | `<p>` | Bio text | text |
| 294 | Badge text | "United in Craftsmanship" | text |
| 301 | Button text | "Meet Your Project Team" | text |
| 314 | `SectionHeader` title | "Why Families Trust JLand Contracting" | text |
| 318–320 | `<p>` | "Our credentials speak for themselves…" | text |
| 325 | `<div>` | "500+" | text |
| 326 | `<div>` | "Homes Protected" | text |
| 329 | `<div>` | "9+" | text |
| 330 | `<div>` | "Years Experience" | text |
| 333 | `<div>` | "100%" | text |
| 334 | `<div>` | "Satisfaction Rate" | text |
| 337 | `<div>` | "24/7" | text |
| 338 | `<div>` | "Emergency Service" | text |
| 350 | `<h3>` | "Licensed & Insured" | text |
| 352–354 | `<p>` | "Fully licensed, bonded…" | text |
| 364 | `<h3>` | "Lifetime Warranty" | text |
| 366–368 | `<p>` | "We stand behind our work…" | text |
| 378 | `<h3>` | "Local Experts" | text |
| 380–382 | `<p>` | "Born and raised in Frederick…" | text |
| 395 | `SectionHeader` title | "What Our Neighbors Say" | text |
| 399–401 | `<p>` | "Don't just take our word…" | text |
| 425–427 | `<p>` | Testimonial 1 quote | text |
| 430 | `<span>` | "SM" (initials) | text |
| 433 | `<div>` | "Sarah Martinez" | text |
| 434 | `<div>` | "Frederick, MD Homeowner" | text |
| 459–461 | `<p>` | Testimonial 2 quote | text |
| 464 | `<span>` | "RJ" (initials) | text |
| 467 | `<div>` | "Robert Johnson" | text |
| 468 | `<div>` | "Zachary Homeowner" | text |
| 493–495 | `<p>` | Testimonial 3 quote | text |
| 498 | `<span>` | "LW" (initials) | text |
| 501 | `<div>` | "Lisa Williams" | text |
| 502 | `<div>` | "Central Homeowner" | text |
| 509 | Button text | "Read More Success Stories" | text |
| 523 | `SectionHeader` title | "Strengthening Our Community" | text |
| 527–529 | `<p>` | "We believe in giving back…" | text |
| 534 | `<h3>` | "Local Partnerships" | text |
| 543 | `<h4>` | "Habitat for Humanity" | text |
| 544 | `<p>` | "Volunteer roofing to aid…" | text |
| 554 | `<h4>` | "Local Schools" | text |
| 555 | `<p>` | "Supporting education…" | text |
| 565 | `<h4>` | "Emergency Response" | text |
| 566 | `<p>` | "24/7 repairs for families…" | text |
| 573 | `<h3>` | "Community Impact" | text |
| 576 | `<div>` | "50+" | text |
| 577 | `<div>` | "Volunteer Hours" | text |
| 580 | `<div>` | "25+" | text |
| 581 | `<div>` | "Families Helped" | text |
| 584 | `<div>` | "$15K+" | text |
| 585 | `<div>` | "Donated Services" | text |
| 588 | `<div>` | "5+" | text |
| 589 | `<div>` | "Local Partners" | text |
| 594 | Button text | "Learn More About Our Impact" | text |
| 607–609 | `<h2>` | "Ready to Protect Your Family's Future?" | text |
| 610–612 | `<p>` | "Join hundreds of Frederick…" | text |
| 617 | `<div>` | "FREE" | text |
| 618 | `<div>` | "Detailed Inspection" | text |
| 621 | `<div>` | "24/7" | text |
| 622 | `<div>` | "Emergency Response" | text |
| 625 | `<div>` | "100%" | text |
| 626 | `<div>` | "Satisfaction Guarantee" | text |
| 637 | Button text | "Get Your Free Roof Inspection Now" | text |
| 640 | Button text | "Request an Estimate" | text |
| 649 | text node | "Licensed & Insured" | text |
| 655 | text node | "Lifetime Warranty" | text |
| 661 | text node | "Local Experts" | text |

---

### `services.astro`
`src/pages/services.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 125 | `<div>` | "Professional Services" (badge) | text |
| 127–130 | `<h1>` | "Expert Roofing & Construction Services" | text |
| 131–134 | `<p>` | "Devoted roofing, construction…" | text |
| 137 | Button text | "Get Your Free Estimate" | text |
| 140 | Button text | "Call (410) 292-0801" | text |
| 148 | `<span>` | "Licensed & Insured" | text |
| 154 | `<span>` | "20+ Years Experience" | text |
| 160 | `<span>` | "500+ Happy Customers" | text |
| 172 | `<Heading>` | "Our Services" | text |
| 175 | `<Text>` | "Professional roofing and construction…" | text |
| 186 | `<div>` | "Residential" (badge) | text |
| 219 | Button text | "View All Services" | text |
| 232 | `<Heading>` | "Why Choose J Land Contracting?" | text |
| 235 | `<Text>` | "Discover why homeowners…" | text |
| 258 | `<Heading>` | "What Our Customers Say" | text |
| 261 | `<Text>` | "Don't just take our word…" | text |
| 265 | `<Text>` | "4.9/5 from 200+ reviews" | text |
| 303 | Button text | "Read More Reviews" | text |
| 315 | `<Heading>` | "Service Areas" | text |
| 318 | `<Text>` | "We proudly serve Frederick…" | text |
| 336 | Button text | "Get Service Quote" | text |
| 342 | `<img>` | Service areas map SVG | image |
| 357 | `<Heading>` | "Ready to Start Your Project?" | text |
| 360 | `<Text>` | "Ready to start your project?…" | text |
| 366 | `<Text>` | "Call Us Today" | text |
| 367 | `<Text>` | "(410) 292-0801" | text |
| 371 | `<Text>` | "Email Us" | text |
| 372 | `<Text>` | "info@jlandgroup.com" | text |
| 376 | `<Text>` | "Business Hours" | text |
| 377 | `<Text>` | "Mon-Fri: 7AM-6PM" | text |
| 388 | Button text | "Get Free Estimate" | text |
| 396 | Button text | "Call Now" | text |

---

### `contact.astro` (page)
`src/pages/contact.astro`

| Line | Element | Current Content | Editable Type |
|------|---------|----------------|---------------|
| 24 | `<div>` | "Ready to Help Since 2015" (badge) | text |
| 26–29 | `<h1>` | "Let's Discuss Your Roofing Project" | text |
| 30–33 | `<p>` | "Our devoted approach…" (subtitle) | text |
| 36 | Button text | "Request an Estimate" | text |
| 39 | Button text | "Learn More" | text |
| 47 | `<span>` | "Integrity & Devotion" | text |
| 53 | `<span>` | "24/7 Emergency Response" | text |
| 59 | `<span>` | "Detailed Project Estimates" | text |
| 71 | `<Heading>` | "Contact Information" | text |
| 74 | `<Text>` | "Reach out to us…" | text |
| 85 | `<Heading>` | "Call Us" | text |
| 88–90 | `<Text>` | Business hours text | text |
| 93 | Button text | "(410) 292-0801" | text |
| 103 | `<Heading>` | "Email Us" | text |
| 106 | `<Text>` | "Get a detailed response…" | text |
| 109 | Button text | "info@jlandgroup.com" | text |
| 119 | `<Heading>` | "Service Area" | text |
| 122–124 | `<Text>` | Address text | text |
| 127 | Button text | "View Service Areas" | text |
| 139 | `<Heading>` | "Send Us a Message" | text |
| 142 | `<Text>` | "Fill out the form below…" | text |
| 150 | `<Text>` | "Your Name *" | text |
| 156 | `<Text>` | "Email Address *" | text |
| 165 | `<Text>` | "Phone Number *" | text |
| 171 | `<Text>` | "Service Needed" | text |
| 187 | `<Text>` | "Project Details *" | text |
| 194 | Button text | "Send Message" | text |
| 206 | `<Heading>` | "Our Service Areas" | text |
| 209 | `<Text>` | "We proudly serve Maryland…" | text |
| 216 | `<Heading>` | "Frederick County" | text |
| 219 | `<Text>` | "Jefferson, Frederick, Middletown…" | text |
| 225 | `<Heading>` | "Washington County" | text |
| 228 | `<Text>` | "Hagerstown, Boonsboro…" | text |
| 234 | `<Heading>` | "Montgomery County" | text |
| 237 | `<Text>` | "Germantown, Gaithersburg…" | text |
| 244 | `<Text>` | "Don't see your area listed?…" | text |

---

## Summary

| Component Type | Count | Total Editable Text Fields | Total Editable Image Fields |
|---------------|-------|---------------------------|----------------------------|
| Section Components | 8 | ~75 | ~12 |
| Layout Components | 2 | ~35 | ~9 |
| UI Components | 7 | ~20 (rendered from props) | ~8 (rendered from props) |
| Page Components | 3 | ~120 | ~1 |
| **Total** | **20** | **~250** | **~30** |

> **Important Architectural Note:** Many text/image values are passed as Astro component props (e.g., `SectionHeader title`, `NumberedSection description`, `Card image`). CloudCannon's `data-editable` attribute must be placed on the **rendered DOM element**, not on the Astro component tag. This means:
> 1. Tags should go **inside** the UI components on the actual `<h1>`, `<p>`, `<img>`, `<div>` elements that render the prop values.
> 2. Alternatively, content should be migrated to CloudCannon-compatible data files or content collections for structured editing.
