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
- [ ] Tested in Visual Editor after rebuild
