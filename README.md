<p align="center">
  <img src="docs/logo.svg" alt="@effective/css" width="120" height="120">
</p>

<h1 align="center">@effective/css</h1>

<p align="center">
  A modern, layered CSS reset for evergreen browsers using CSS <code>@layer</code>.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@effective/css"><img src="https://img.shields.io/npm/v/@effective/css?color=6366f1" alt="npm version"></a>
  <a href="https://github.com/your-username/effective-css-reset/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@effective/css?color=22c55e" alt="license"></a>
</p>

## Features

- 🎯 **Layered Architecture** – Uses CSS `@layer` for clear cascade control
- 📦 **Modular** – Import the full reset or individual layers
- 🌐 **Evergreen** – Targets modern browsers (Chrome, Edge, Firefox, Safari)
- 🧩 **Web Component Safe** – No inheritance patterns that break Shadow DOM
- ♿ **Accessible** – Preserves focus indicators and motion preferences

## Installation

```bash
npm install @effective/css
```

## Usage

### Full Reset

Import the complete reset with all layers:

```css
@import "@effective/css";
```

Or in JavaScript/bundlers:

```js
import "@effective/css";
```

### Individual Layers

Import only what you need:

```css
/* Core reset (recommended) */
@import "@effective/css/reset.css";

/* Browser fixes (recommended) */
@import "@effective/css/fixes.css";

/* Element defaults with font stacks (optional) */
@import "@effective/css/elements.css";
```

### Layer Order

If you're using other `@layer` declarations, include ours in your order:

```css
@layer reset, fixes, elements, your-base, your-components, your-utilities;
```

## What's Included

### Layer: `reset`

- Removes all margins and padding
- Sets `box-sizing: border-box` on all elements
- Makes media elements (`img`, `video`, `svg`, etc.) block-level and responsive
- Form elements inherit font from parent

### Layer: `fixes`

- Prevents text-size inflation on mobile browsers
- Respects `prefers-reduced-motion` for scroll behavior

### Layer: `elements` (optional)

- Defines CSS custom properties for system font stacks:
  - `--font-system-ui-sans` – System UI fonts with emoji support
  - `--font-system-ui-mono` – Monospace fonts for code
- Applies font stacks to `body` and code elements
- Improves link underline rendering

## Browser Support

Targets evergreen browsers from the last 2-3 years:

- Chrome / Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)

No legacy browser support (IE, old Android stock browsers).

## CSS Custom Properties

When using the `elements` layer, these variables are available:

```css
:root {
  --font-system-ui-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", ...;
  --font-system-ui-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, ...;
}
```

## Philosophy

- **No utility classes** – This is a reset, not a framework
- **No components** – Only base element styles
- **Plain CSS** – No preprocessors required
- **Web Component friendly** – Direct box-sizing, no inheritance tricks

## License

MIT

