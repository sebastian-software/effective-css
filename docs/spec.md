# Effective CSS – Design Principles

This document describes the high-level design decisions and philosophy.
For implementation details, see the inline comments in the CSS source files.

## Target Browsers

**Evergreen browsers only:** Chrome, Edge, Firefox, Safari (last 2-3 years).
No legacy support for IE or old Android stock browsers.

## Layer Architecture

```css
@layer reset, fixes, elements;
```

| Layer | Purpose | Required |
|-------|---------|----------|
| `reset` | Normalize UA defaults across browsers | Yes |
| `fixes` | Browser-specific workarounds and bug fixes | Yes |
| `elements` | Sensible defaults for HTML elements | Optional |

The cascade order ensures: `reset < fixes < elements < your styles`

Using `@layer` means your styles always win over these defaults, regardless of specificity.

## Design Decisions

### What We Reset

- **Box model:** `border-box` on all elements (directly, not via inheritance)
- **Spacing:** Zero margins and padding on all elements
- **Media:** Block display and responsive sizing for images, video, etc.
- **Forms:** Inherit font and color from parent
- **Tables:** Collapsed borders, inherited colors

### What We Fix

- **Text inflation:** Prevent mobile browsers from enlarging text
- **Reduced motion:** Respect user preference, disable animations
- **Hidden attribute:** Ensure `[hidden]` always works
- **Color scheme:** Support automatic light/dark mode

### What We Enhance (Optional)

- **Typography:** System font stacks, balanced headings, prettier paragraphs
- **Links:** Inherit color, improved underlines
- **Scroll behavior:** Margin for anchor links
- **Modern CSS:** `interpolate-size` for height animations, `hanging-punctuation`

### What We Don't Touch

- **Focus indicators:** Never removed (accessibility)
- **Cursor styles:** No global `cursor: pointer` (accessibility)
- **List styles:** Preserved on `ul`/`ol` (semantic defaults)
- **Heading sizes:** No type scale (use your own)

## Web Components Compatibility

- Uses direct `box-sizing` instead of inheritance pattern
- Does not style inside Shadow DOM
- Does not break Custom Elements or unknown tags

## Non-Goals

This project intentionally does NOT provide:

- Utility classes (`.sr-only`, `.stack`, `.container`)
- UI components (buttons, cards, modals)
- Naming conventions (`.u-*`, `.c-*`, BEM)
- Fluid typography or type scales
- Build tool configurations
- Preprocessor features (SCSS, PostCSS)

## References

For detailed implementation notes and alignment with other CSS resets,
see the inline comments in each CSS file and `docs/css-reset-comparison.md`.
