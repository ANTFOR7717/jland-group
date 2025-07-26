# Motiff Design Extraction Protocol

## Universal Prompt for Pixel-Perfect Design Implementation

When implementing any design from a Motiff URL, follow this comprehensive extraction protocol to ensure 100% design fidelity:

### 1. Initial Design Analysis
```
Before implementing any component, I will:
1. Extract the complete HTML structure from the Motiff node
2. Analyze all inline styles for exact specifications
3. Document all color values, dimensions, and spacing
4. Identify all asset URLs (images, icons, backgrounds)
5. Note typography specifications (fonts, weights, sizes)
```

### 2. Color Extraction Protocol
```
For every color in the design:
- Extract exact hex values from inline styles (e.g., #262327, #FDB813)
- Never use approximations or Tailwind color classes
- Apply colors using inline styles: style="color: #HEXCODE;"
- Document background colors, text colors, border colors separately
- Preserve opacity and gradient specifications
```

### 3. Spacing & Sizing Protocol
```
For all dimensions and spacing:
- Extract exact pixel values from width, height properties
- Document padding values from all sides
- Extract margin specifications
- Note border-radius, border-width values
- Preserve aspect ratios for images and containers
- Use exact measurements, not approximations
```

### 4. Asset Extraction Protocol
```
For all visual assets:
- Extract complete URLs from background-image properties
- Preserve all SVG and image references exactly as provided
- Never replace with placeholder or generated assets
- Maintain original asset dimensions and positioning
- Document all icon URLs, background images, and graphics
```

### 5. Typography Protocol
```
For all text elements:
- Extract font-family specifications
- Document font-weight, font-size values
- Preserve line-height and letter-spacing
- Maintain text-align and text-decoration properties
- Apply exact color values to text elements
```

### 6. Layout Protocol
```
For structural elements:
- Preserve exact positioning (absolute, relative, fixed)
- Maintain flexbox and grid specifications
- Extract z-index values where specified
- Document display properties and overflow settings
- Preserve transform and positioning values
```

### 7. Implementation Checklist
```
✓ Background colors match exactly (use inline styles)
✓ Text colors match exactly (use inline styles)
✓ All asset URLs are copied precisely
✓ Spacing matches pixel-perfect (padding, margins)
✓ Dimensions are exact (width, height)
✓ Typography specifications are preserved
✓ Border properties match (color, width, radius)
✓ Shadow and effect properties are maintained
✓ Hover states and interactions are implemented
✓ Responsive behavior is preserved
```

### 8. Quality Assurance Protocol
```
After implementation:
1. Compare rendered component with Motiff design side-by-side
2. Verify all colors match exactly using color picker tools
3. Confirm all assets are loading and displaying correctly
4. Validate spacing and sizing with browser dev tools
5. Test responsive behavior across different screen sizes
6. Ensure hover states and interactions work as designed
```

### 9. Common Pitfalls to Avoid
```
❌ Using Tailwind color classes instead of exact hex values
❌ Approximating spacing or sizing values
❌ Replacing original assets with placeholders
❌ Ignoring subtle color variations
❌ Missing hover states or interactive elements
❌ Overlooking shadow, border, or effect properties
❌ Using generic fonts instead of specified font families
❌ Approximating border-radius or other styling details
```

### 10. Implementation Template
```astro
<!-- Example of proper implementation -->
<div 
  class="[tailwind-utility-classes]"
  style="
    background: #262327;
    color: #FFFFFF;
    padding: 24px 32px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  "
>
  <img 
    src="https://static.motiffcontent.com/exact-asset-url.svg"
    alt="Description"
    style="width: 24px; height: 24px;"
  />
  <p style="color: #7D7877; font-size: 16px; line-height: 24px;">
    Text content with exact styling
  </p>
</div>
```

### 11. Motiff MCP Server Usage
```
Always use the Motiff MCP server to:
1. Extract complete HTML structure: get_motiff_node
2. Get visual reference: get_motiff_node_screenshot
3. Verify design specifications before implementation
4. Cross-reference extracted values with visual design
```

## Final Validation
Every implementation must pass this test: "If placed side-by-side with the original Motiff design, would they be visually indistinguishable?"

Only when the answer is "YES" should the implementation be considered complete.