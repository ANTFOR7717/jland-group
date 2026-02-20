# CloudCannon Editable Regions — Requirements & Rules

> **⚠️ GOLDEN RULE: Use ONE method per region. Mixing causes errors.**
>
> Attributes go on **static HTML wrappers**, never inside `{expressions}`.

---

## Two Methods at a Glance

| Method | When to Use | Required Attrs |
|--------|-------------|----------------|
| **Source Edit** | Hardcoded text in `.astro` files | `data-editable="source"` + `data-path` + `data-key` |
| **Prop Edit** | Frontmatter / slot content | `data-editable="text"` + `data-prop` **OR** `<editable-text data-prop="...">` |

---

## ✅ Do's and ❌ Don'ts

### Source Edits (hardcoded text)

| ✅ Do | ❌ Don't |
|-------|---------|
| `data-editable="source"` `data-path="/path/to/file.astro"` `data-key="unique"` | Use `data-editable="text"` without `data-prop` → triggers **"data-prop required"** error |
| Always include `data-path` pointing to the file | Put `data-path` on prop-based edits — it's irrelevant and ignored |
| Always include a unique `data-key` per element | Duplicate `data-key` values in the same file |

### Prop Edits (frontmatter / slots)

| ✅ Do | ❌ Don't |
|-------|---------|
| `data-editable="text"` `data-prop="title"` for frontmatter values | Use `<editable-text>` without `data-prop` → same error |
| `<editable-text data-prop="@content"><slot /></editable-text>` for body/slot content | Mix `data-path` with `data-prop` on the same element |

### General

| ✅ Do | ❌ Don't |
|-------|---------|
| Test in Visual Editor (yellow highlight = good, orange/red = fix attrs) | Forget to rebuild — attrs don't load instantly |
| Keep `data-key` values descriptive (`hero_heading`, `cta_primary`) | Use generic keys like `text1`, `text2` |

---

## Method 1: Source Edits (Inline / Hardcoded Text)

**Use for:** Hardcoded text that lives directly in the `.astro` file.  
**How it works:** CloudCannon edits the file directly using `data-path` + `data-key` to locate the exact text node.

### Example

**File:** `src/pages/inline.astro`

```astro
---
---
<html>
<body>
  <div style="background: yellow; padding: 20px;">

    <h1 data-editable="source"
        data-path="/src/pages/inline.astro"
        data-key="heading">
      Edit this inline!
    </h1>

    <p data-editable="source"
       data-path="/src/pages/inline.astro"
       data-key="body">
      Inline text + styles.
    </p>

  </div>
</body>
</html>
```

> **Why `data-path`?** CloudCannon needs the file path + key to find and overwrite the exact text node in the source file.

---

## Method 2: Prop Edits (Frontmatter / Slots)

**Use for:** Dynamic content from frontmatter props or slot content.  
**How it works:** Edits the YAML frontmatter or body content via `data-prop` path. No `data-path` needed.

### Example — Layout

**File:** `src/layouts/Base.astro`

```astro
---
const { title } = Astro.props;
---
<html>
<body>
  <div style="border: 2px solid green; margin: 10px;">

    <h1 data-editable="text" data-prop="title">{title}</h1>

    <editable-text data-prop="@content">
      <slot />
    </editable-text>

  </div>
</body>
</html>
```

### Example — Page using that layout

**File:** `src/pages/props.astro`

```astro
---
title: "Default Prop Title"
---
<Base title={Astro.props.title}>
  Slot body content.
</Base>
```

> **Why no `data-path`?** Props edit the YAML frontmatter/body via the `data-prop` path — CloudCannon already knows which file the page data belongs to.

---

## Quick Decision Tree

```
Is the text hardcoded in the .astro file?
├── YES → Use data-editable="source" + data-path + data-key
│
└── NO → Is it from frontmatter props?
    ├── YES → Use data-editable="text" + data-prop="propName"
    │
    └── NO → Is it slot/body content?
        └── YES → Use <editable-text data-prop="@content"><slot /></editable-text>
```

---

## Checklist Before Committing

- [ ] Every editable element has **exactly one method** (source OR prop, never both)
- [ ] Source edits have all three: `data-editable="source"` + `data-path` + `data-key`
- [ ] Prop edits have: `data-editable="text"` + `data-prop` (or `<editable-text data-prop>`)
- [ ] All `data-key` values are unique within their file
- [ ] No attributes placed inside `{expressions}`
- [ ] Editable images have `data-prop-src` (mandatory)
- [ ] Tested in Visual Editor after rebuild

---
---

# 🖼️ Editable Images — Separate from Text!

> **Images use a DIFFERENT system than text.** Don't confuse the two.
>
> - **Text** → `data-editable="source"` or `data-editable="text"`
> - **Images** → `data-editable="image"` + `data-prop-src`

---

## Image Editing at a Glance

Editable images use `data-editable="image"` on `<img>` tags (or an `<editable-image>` wrapper).

| Attribute | Required? | Purpose |
|-----------|-----------|---------|
| `data-editable="image"` | ✅ **Yes** | Marks the `<img>` as editable |
| `data-prop-src="propName"` | ✅ **Yes** | Maps `src` to a frontmatter prop for upload/replace |
| `data-prop-alt="propName"` | Optional | Maps `alt` text for accessibility editing |
| `data-prop-title="propName"` | Optional | Maps `title` for tooltip editing |

---

## Image Requirements

- Image data must be a **string** in frontmatter (e.g., `heroImage: '/img.jpg'`)
- Add to **layouts** (`.astro`) for collections/pages
- **Rebuild preview** after changes
- **No `data-path`** — uses prop context, same as text prop regions

---

## ✅ Do's and ❌ Don'ts (Images)

| ✅ Do | ❌ Don't |
|-------|---------|
| `data-editable="image"` `data-prop-src="heroImage"` on `<img>` | Forget `data-prop-src` → triggers **"data-prop required"** error |
| Add `data-prop-alt="heroAlt"` for accessibility | Use `data-editable="image"` without an `<img>` child |
| Set up parent text regions first, then add images | Hardcode `src` without a prop — can't upload/replace |
| Configure uploads path in CloudCannon config for custom folder | Ignore data type — must be a **string path** |

---

## Example — Editable Image

### Layout

**File:** `src/layouts/Main.astro`

```astro
---
const { heroImage, heroAlt } = Astro.props;
---
<html>
<body>
  <div style="text-align: center;">

    <img data-editable="image"
         data-prop-src="heroImage"
         data-prop-alt="heroAlt"
         src={heroImage}
         alt={heroAlt}
         style="max-width: 400px; height: auto;" />

  </div>
</body>
</html>
```

### Page

**File:** `src/pages/home.astro` (or `.md`)

```astro
---
heroImage: '/default-hero.jpg'
heroAlt: 'Default hero image'
---
<Main />
```

---

## How It Works

| Step | What Happens |
|------|-------------|
| **Visual Editor** | Yellow box appears on image → click → **Edit Image** panel opens |
| **Edit Panel** | Upload, crop, paste URL, edit alt/title |
| **Uploads** | Saved to `uploads/` (or your configured path); optimized/cropped in-place |
| **Inline styles** | Apply to `<img>` or wrapper — live preview updates immediately |

---

## Quick Comparison: Text vs Images

| | Text Regions | Image Regions |
|---|---|---|
| **Attribute** | `data-editable="source"` or `"text"` | `data-editable="image"` |
| **Prop mapping** | `data-prop="propName"` or `data-key` | `data-prop-src="propName"` |
| **Alt/metadata** | N/A | `data-prop-alt`, `data-prop-title` |
| **Edits** | Text content inline | Upload/crop/URL panel |
| **Data type** | String (text) | String (file path) |
| **Uses `data-path`?** | Only for source edits | ❌ Never |
