# CloudCannon Editable Region Patterns

## ✅ Good / Correct Patterns

| Pattern | Syntax | Example | Why It Works |
|---------|--------|---------|--------------|
| **Simple string prop** | `data-editable="text" data-prop="key"` | `data-prop="hero_heading"` | Resolves directly against the page's frontmatter |
| **Data in page frontmatter** | All editable content in `index.md` frontmatter | `hero_heading: "Your Heading"` in `index.md` | CloudCannon resolves `data-prop` against the page being edited |
| **Array container** | `data-editable="array" data-prop="array_name"` on parent element | `<ul data-editable="array" data-prop="footer_quick_links">` | Tells CloudCannon this element loops over an array |
| **Array item** | `data-editable="array-item"` on each child element | `<li data-editable="array-item">` | Marks each iteration as an individual array item |
| **Field inside array item** | `data-prop="field_name"` (just the field, no path) | `<span data-editable="text" data-prop="label">` inside an array-item | CloudCannon scopes `data-prop` to the current array item automatically |
| **Astro component receives props** | Destructure from `Astro.props`, pass from page | `const { heading } = Astro.props;` | Standard Astro data flow; CloudCannon sees the rendered HTML |
| **Image editable** | `data-editable="image" data-prop-src="key" data-prop-alt="alt_key"` | `data-prop-src="hero_image" data-prop-alt="hero_image_alt"` | CloudCannon's image editable region pattern |
| **No defaults in components** | Props destructured without any default value | `const { heading, steps } = Astro.props;` | Component is a pure template; data comes solely from `index.md` — no fallback of any kind |
| **Layout reads shared data** | Layout.astro fetches from `getEntry("pages", "index")` | `const page = await getEntry("pages", "index");` | Global data (header/footer) lives in homepage frontmatter, Layout reads it |

## ❌ Bad / Never Follow Patterns

| Pattern | Syntax | Example | Why It Fails |
|---------|--------|---------|--------------|
| **Hardcoded default content in components** | Embedding full content strings/arrays as prop defaults | `heading = "Our Roofing Process"`, `steps = [{ number: "01", description: "With integrity..." }]` | Content is duplicated across component AND `index.md`. Edits in CloudCannon get overridden by component defaults. Violates single source of truth. |
| **Empty-string / zero defaults** | Defaulting props to `""`, `[]`, `0` instead of no default | `heading = ""`, `steps = []`, `rating = 0` | Still masks missing data — if `index.md` doesn't supply the prop, you get silent empty output instead of an obvious error. Never default at all. |
| **Bracket-indexed data-prop** | `data-prop="array[0].field"` | `` data-prop={`header_nav[${index}].label`} `` | CloudCannon cannot resolve bracket-indexed paths in text editable regions |
| **`@file[path].key` syntax** | `data-prop="@file[src/content/data/site.md].key"` | `data-prop="@file[src/content/data/site.md].header_logo_text"` | Returns `undefined` — does not resolve for `.md` frontmatter files |
| **`@data[name].key` syntax** | `data-prop="@data[site].key"` | `data-prop="@data[site].header_logo_text"` | Requires `data_config` in CloudCannon config; still returned `undefined` in testing |
| **Separate site.yaml data file** | Global data in `src/content/data/site.yaml` | `data_config: site: path: src/content/data/site.yaml` | CloudCannon couldn't resolve `@data` references to this file |
| **Separate site.md data file** | Global data in `src/content/data/site.md` with frontmatter | `collections_config: data: path: src/content/data` | `@file` references returned `undefined` for frontmatter keys |
| **`fp` variable prefix** | Building data-prop with template literal prefix | `` data-prop={`${fp}.footer_company_name`} `` | Overly complex; obfuscates the actual path CloudCannon receives |
| **Mismatched field names** | Frontmatter key ≠ component prop name | `author: "Mark Owens"` but component expects `customerName` | Data passes as `undefined` because the key doesn't match the destructured prop |
| **Fragment as array-item** | Using `<Fragment>` for array items | `<Fragment>` instead of `<div data-editable="array-item">` | Fragment renders no DOM element, so CloudCannon can't attach `data-editable` |

## Key Principles

1. **`data-prop` resolves against the page being edited** — not a layout, not a separate data file
2. **Arrays require 3 layers**: container (`data-editable="array"`), item (`data-editable="array-item"`), field (`data-prop="field_name"`)
3. **Never use bracket indexing** — `array[0].field` does not work; use the array/array-item pattern instead
4. **Keep field names consistent** — frontmatter key must exactly match what the component destructures from `Astro.props`
5. **All global content goes in the homepage `index.md`** — since `data-prop` resolves against the page, and Layout reads from `index.md`
6. **Components are pure templates with ZERO defaults** — they destructure props with no fallback values whatsoever. No `= ""`, no `= []`, no `= 0`. Data comes only from `index.md` through `Astro.props`
