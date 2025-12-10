# CSS Reset – Rule Comparison & Source Reference

This table summarizes all relevant CSS reset recommendations from various sources and shows which ones are implemented in `@effective/css`.

## Legend

- ✅ = Implemented
- ⚠️ = Partially implemented
- ❌ = Not implemented
- 🚫 = Intentionally excluded

---

## Comparison Table

| Rule / Recommendation | Status | Sources | Spec / Docs |
|---|:---:|---|---|
| **Box-Sizing** ||||
| `*, *::before, *::after { box-sizing: border-box }` | ✅ | [Josh Comeau][1], [Andy Bell][2], [Tailwind][3], [Keith Grant][4], [Jake Lazaroff][5], [Mayank][6], [Trys Mudford][7], [Pawel Grzybek][8] | [MDN: box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) |
| Box-Sizing via inheritance (`html { box-sizing: border-box }` + `* { box-sizing: inherit }`) | 🚫 | [CSS-Tricks][9], [Chris Coyier][10] — *We use direct approach for Web Component compatibility* | |
| **Margins & Padding** ||||
| `* { margin: 0 }` | ✅ | [Andy Bell][2], [Eric Meyer][11], [Tailwind][3], [Elad Shechter][12] | |
| `* { padding: 0 }` | ✅ | [Eric Meyer][11], [Elad Shechter][12], [Elly Loel][13] | |
| `body { margin: 0 }` (body only) | ⚠️ | [Josh Comeau][1], [Normalize.css][14] — *We set margin: 0 on all elements* | |
| **Typography** ||||
| `body { line-height: 1.5 }` | ✅ | [Josh Comeau][1], [Andy Bell][2], [Tailwind][3], [Keith Grant][4] | [MDN: line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height) |
| `body { min-height: 100vh }` or `100dvh` | ✅ | [Josh Comeau][1], [Andy Bell][2], [Keith Grant][4] | [MDN: dvh unit](https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units_based_on_viewport) |
| `-webkit-font-smoothing: antialiased` | ✅ | [Josh Comeau][1], [Pawel Grzybek][8], [Tailwind][3] | [MDN: font-smooth](https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth) |
| `-moz-osx-font-smoothing: grayscale` | ✅ | [Josh Comeau][1], [Tailwind][3] | [MDN: font-smooth](https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth) |
| System Font Stack (sans-serif) | ✅ | [CSS-Tricks][15], [Tailwind][3], [Andy Bell][2] | [MDN: system-ui](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#system-ui) |
| System Font Stack (monospace) | ✅ | [Tailwind][3], [Normalize.css][14] | [MDN: ui-monospace](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family) |
| `text-wrap: balance` for headings | ✅ | [Josh Comeau][1], [Andy Bell][2] | [MDN: text-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap) · [CSS Text Level 4 Spec](https://drafts.csswg.org/css-text-4/#text-wrap) |
| `text-wrap: pretty` for paragraphs | ✅ | [Josh Comeau][1] | [MDN: text-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap) · [Chrome Blog](https://developer.chrome.com/blog/css-text-wrap-pretty) |
| `hanging-punctuation: first last` | ✅ | [Pawel Grzybek][8], [Jeremy Keith][24] | [MDN: hanging-punctuation](https://developer.mozilla.org/en-US/docs/Web/CSS/hanging-punctuation) |
| **Text Size Adjust** ||||
| `-moz-text-size-adjust: 100%` | ✅ | [Kilian Valkhof][17] | [MDN: text-size-adjust](https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust) · [CanIUse](https://caniuse.com/text-size-adjust) |
| `-webkit-text-size-adjust: 100%` | ✅ | [Normalize.css][14], [Modern Normalize][16], [Kilian Valkhof][17], [Tailwind][3] | [MDN: text-size-adjust](https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust) |
| `text-size-adjust: 100%` (unprefixed) | ✅ | [Modern Normalize][16], [Kilian Valkhof][17] | [MDN: text-size-adjust](https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust) |
| **Tab Size** ||||
| `tab-size: 4` | ⚠️ | [Normalize.css][14], [Modern Normalize][16], [Tailwind][3] — *We use tab-size: 2* | [MDN: tab-size](https://developer.mozilla.org/en-US/docs/Web/CSS/tab-size) |
| **Overflow / Word Wrap** ||||
| `body { overflow-wrap: break-word }` | ✅ | [Josh Comeau][1] (on specific elements) | [MDN: overflow-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap) |
| `p, h1-h6 { overflow-wrap: break-word }` | ⚠️ | [Josh Comeau][1] — *We set it on body* | |
| **Media Elements** ||||
| `img, picture, video, canvas, svg { display: block }` | ✅ | [Josh Comeau][1], [Andy Bell][2], [Tailwind][3] | |
| `img, picture, video, canvas, svg { max-width: 100% }` | ✅ | [Josh Comeau][1], [Andy Bell][2], [Tailwind][3], [Keith Grant][4] | |
| `img, video { height: auto }` | ✅ | [Tailwind][3], [Andy Bell][2] — *We use block-size: auto* | [MDN: block-size](https://developer.mozilla.org/en-US/docs/Web/CSS/block-size) |
| `img { vertical-align: middle }` | ❌ | [Tailwind][3] | |
| **Form Elements** ||||
| `button, input, textarea, select { font: inherit }` | ✅ | [Josh Comeau][1], [Andy Bell][2], [Tailwind][3] | |
| `button, input, textarea, select { color: inherit }` | ✅ | [Tailwind][3] | |
| `button { cursor: pointer }` | 🚫 | [Trys Mudford][7] — *Intentionally excluded for accessibility* | |
| `textarea { resize: vertical }` | ❌ | [Andy Bell][2] | |
| `button, [role="button"] { cursor: pointer }` | 🚫 | Various — *Intentionally excluded* | |
| **Links** ||||
| `a { text-decoration-skip-ink: auto }` | ✅ | [Andy Bell][2] | [MDN: text-decoration-skip-ink](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-skip-ink) |
| `a { color: inherit }` | ✅ | [Andy Bell][2], [Destyle.css][25] | |
| `a:not([class]) { text-decoration-color: ... }` | ❌ | [Andy Bell][2] | |
| **Lists** ||||
| `ul, ol { list-style: none }` | 🚫 | [Elad Shechter][12], [Eric Meyer][11] — *We keep list-style defaults* | |
| `ul[role="list"], ol[role="list"] { list-style: none }` | ❌ | [Andy Bell][2] | |
| `menu { list-style: none }` | ✅ | [Tailwind][3] | [MDN: menu element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu) |
| **Tables** ||||
| `table { border-collapse: collapse }` | ✅ | [Andy Bell][2], [Tailwind][3], [Eric Meyer][11] | |
| `table { border-spacing: 0 }` | ✅ | [Eric Meyer][11] | |
| `table { text-indent: 0 }` | ✅ | [Tailwind][3] | |
| `table { border-color: inherit }` | ✅ | [Tailwind][3], [Sanitize.css][26] | |
| **Focus & Accessibility** ||||
| `*:focus { outline: none }` | 🚫 | Various — *Intentionally NOT implemented for accessibility* | |
| `:focus-visible` styling | ❌ | [Keith Grant][4] | [MDN: :focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) |
| **Reduced Motion** ||||
| `@media (prefers-reduced-motion: reduce) { scroll-behavior: auto }` | ✅ | [Jake Lazaroff][5], [Andy Bell][2] | [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) |
| `@media (prefers-reduced-motion: reduce) { animation-duration: 0.01ms }` | ✅ | [Andy Bell][2], [Elly Loel][13] | |
| `@media (prefers-reduced-motion: reduce) { transition-duration: 0.01ms }` | ✅ | [Andy Bell][2], [Elly Loel][13] | |
| `@media (prefers-reduced-motion: no-preference) { scroll-behavior: smooth }` | ❌ | [Andy Bell][2], [Jake Lazaroff][5] | [MDN: scroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior) |
| **Color Scheme** ||||
| `html { color-scheme: light dark }` | ✅ | [Pawel Grzybek][8], [Keith Grant][4], [Modern Normalize][16] | [MDN: color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme) · [CSS Color Adjustment Spec](https://drafts.csswg.org/css-color-adjust/#color-scheme-prop) |
| **Stacking Context** ||||
| `#root, #__next, #app { isolation: isolate }` | ✅ | [Josh Comeau][1] | [MDN: isolation](https://developer.mozilla.org/en-US/docs/Web/CSS/isolation) · [CSS Compositing Spec](https://drafts.fxtf.org/compositing/#isolation) |
| **CSS Layers** ||||
| `@layer reset` usage | ✅ | [Mayank][6] | [MDN: @layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) · [CSS Cascade 5 Spec](https://drafts.csswg.org/css-cascade-5/#layering) |
| Layer order declaration | ✅ | [Mayank][6] | |
| **"The New CSS Reset" Approach** ||||
| `*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) { all: unset; display: revert }` | 🚫 | [Elad Shechter][12] — *Too aggressive, breaks UA styles* | [MDN: all](https://developer.mozilla.org/en-US/docs/Web/CSS/all) · [MDN: revert](https://developer.mozilla.org/en-US/docs/Web/CSS/revert) |
| **Normalize vs Reset Philosophy** ||||
| Fix browser bugs (Normalize approach) | ⚠️ | [Normalize.css][14], [Modern Normalize][16] — *Only critical fixes in fixes.css* | |
| Reset everything to 0 (Reset approach) | ⚠️ | [Eric Meyer][11] — *Selective approach* | |
| **Miscellaneous** ||||
| `hr { height: 0; color: inherit }` | ❌ | [Modern Normalize][16] | |
| `abbr[title] { text-decoration: underline dotted }` | ❌ | [Normalize.css][14] | |
| `b, strong { font-weight: bolder }` | ❌ | [Normalize.css][14], [Modern Normalize][16] | |
| `small { font-size: 80% }` | ❌ | [Normalize.css][14] | |
| `sub, sup { font-size: 75%; line-height: 0; ... }` | ❌ | [Normalize.css][14] | |
| `[hidden] { display: none !important }` | ✅ | [Andy Bell][2], [CSS Remedy][23], [Normalize.css][14] | [MDN: hidden attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden) |
| `::selection` styling | ❌ | [Keith Grant][4] | [MDN: ::selection](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection) |
| `::placeholder { color: ... }` | ❌ | [Tailwind][3] | [MDN: ::placeholder](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder) |
| `:disabled { cursor: default }` | ❌ | [Tailwind][3] | |
| `progress { vertical-align: baseline }` | ❌ | [Modern Normalize][16] | |
| `summary { display: list-item }` | ❌ | [Modern Normalize][16] | |
| `details > summary { list-style: none }` | ❌ | [Tailwind][3] | |
| `search { display: block }` | ❌ | [Modern Normalize][16] | [MDN: search element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search) |

---

## Detailed Source Overview

### Main Resets & Normalizes

| Source | Philosophy | Key Features |
|---|---|---|
| [Josh Comeau – Custom CSS Reset][1] | Modern, minimal | 9 concise rules, well documented, focused on DX |
| [Andy Bell – A More Modern CSS Reset][2] | Modern, opinionated | text-wrap, reduced motion, list-role handling |
| [Tailwind Preflight][3] | Utility-first base | border-color: currentColor, SVG block display |
| [Eric Meyer Reset][11] | Classic, aggressive | Everything to 0, no opinions |
| [Normalize.css][14] | Browser bug fixes | Preserves sensible defaults, normalization only |
| [Modern Normalize][16] | Normalize + Modern | Smaller, more modern version of Normalize |
| [Elad Shechter – The New CSS Reset][12] | Radical | all: unset approach, very aggressive |
| [ress][18] | Normalize-based | Extended Normalize with more resets |

### Articles & Discussions

| Source | Focus |
|---|---|
| [Kilian Valkhof – Your Reset Needs text-size-adjust][17] | Mobile font-size inflation |
| [CSS-Tricks – Reboot, Resets, Reasoning][9] | Comparison of different approaches |
| [CSS-Tricks – System Font Stack][15] | Native font stacks |
| [SitePoint – CSS Reset Contradiction][19] | Pro/con discussion |
| [Snook – Still No CSS Reset][20] | Arguments against resets |
| [Chris Coyier – Being Picky About a CSS Reset][10] | Selective approach |
| [Cloud Four – Childish Font Sizes][21] | rem vs px discussion |

### Other Implementations

| Source | Approach |
|---|---|
| [Keith J. Grant][4] | Minimal, modern |
| [Jake Lazaroff][5] | Minimal, reduced-motion focused |
| [Mayank – CSS Reset Layer][6] | Layer-based |
| [Trys Mudford][7] | Pragmatic, short |
| [Pawel Grzybek][8] | Typography-focused |
| [Elly Loel Gist][13] | Compilation of various resets |
| [Best CSS Reset 2024][22] | Community collection |

---

## Modern CSS Properties Reference

Properties used in `@effective/css` that may be less familiar:

| Property | Browser Support | Description |
|---|---|---|
| [`text-wrap: balance`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap) | Chrome 114+, Safari 17.5+, Firefox 121+ | Distributes text evenly across lines, avoiding orphans |
| [`text-wrap: pretty`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap) | Chrome 117+, Safari 17.5+ | Prevents orphans in paragraphs with minimal reflow |
| [`color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme) | Chrome 81+, Safari 13+, Firefox 96+ | Indicates supported color schemes for UA style adaptation |
| [`isolation: isolate`](https://developer.mozilla.org/en-US/docs/Web/CSS/isolation) | Chrome 41+, Safari 8+, Firefox 36+ | Creates new stacking context without side effects |
| [`100dvh`](https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units_based_on_viewport) | Chrome 108+, Safari 15.4+, Firefox 101+ | Dynamic viewport height, accounts for mobile browser UI |
| [`@layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) | Chrome 99+, Safari 15.4+, Firefox 97+ | Cascade layers for explicit specificity control |
| [`text-size-adjust`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust) | All modern browsers | Prevents mobile text inflation |
| [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) | Chrome 74+, Safari 10.1+, Firefox 63+ | Respects user motion preferences |

---

## References

[1]: https://www.joshwcomeau.com/css/custom-css-reset/
[2]: https://piccalil.li/blog/a-more-modern-css-reset/
[3]: https://tailwindcss.com/docs/preflight
[4]: https://keithjgrant.com/posts/2024/01/my-css-resets/
[5]: https://jakelazaroff.com/words/my-modern-css-reset/
[6]: https://mayank.co/blog/css-reset-layer/
[7]: https://www.trysmudford.com/blog/a-good-reset/
[8]: https://pawelgrzybek.com/the-css-reset-again/
[9]: https://css-tricks.com/reboot-resets-reasoning/
[10]: https://chriscoyier.net/2023/10/03/being-picky-about-a-css-reset-for-fun-pleasure/
[11]: https://meyerweb.com/eric/tools/css/reset/
[12]: https://elad2412.github.io/the-new-css-reset/
[13]: https://gist.github.com/EllyLoel/4ff8a6472247e6dd2315fd4038926522
[14]: https://necolas.github.io/normalize.css/
[15]: https://css-tricks.com/snippets/css/system-font-stack/
[16]: https://github.com/sindresorhus/modern-normalize
[17]: https://kilianvalkhof.com/2022/css-html/your-css-reset-needs-text-size-adjust-probably/
[18]: https://github.com/filipelinhares/ress
[19]: https://www.sitepoint.com/css-reset-contradiction/
[20]: https://snook.ca/archives/html_and_css/still-no-css-reset
[21]: https://cloudfour.com/thinks/childish-font-sizes/
[22]: https://github.com/Lazzzer00/Best-CSS-Reset-2024
[23]: https://github.com/jensimmons/cssremedy
[24]: https://adactio.com/journal/21027
[25]: https://github.com/nicolas-cusan/destyle.css
[26]: https://github.com/csstools/sanitize.css

---

## Summary: @effective/css Status

### ✅ Implemented (Core Features)
- Box-Sizing: border-box on all elements
- Margin/Padding: 0 on all elements
- Media Elements: block display, responsive sizing
- Form Elements: font: inherit, color: inherit
- Typography: line-height 1.5, System Font Stacks
- Body: min-height 100dvh, overflow-wrap
- Tables: border-collapse, border-spacing
- Links: text-decoration-skip-ink
- text-size-adjust: 100%
- tab-size: 2
- Hidden attribute: display: none !important
- Scroll margin: :target { scroll-margin-block: 5ex }
- Intrinsic size animations: interpolate-size: allow-keywords
- Hanging punctuation: first last (with form/code exceptions)
- Reduced Motion: scroll-behavior: auto
- CSS Layers: @layer reset, fixes, elements
- Font Smoothing: -webkit-font-smoothing: antialiased, -moz-osx-font-smoothing: grayscale
- Text Wrap: balance for h1-h6, pretty for p
- Color Scheme: light dark (automatic dark mode support for native UI)
- Stacking Context: isolation: isolate on #root, #__next, #app

### 🚫 Intentionally Excluded
- `all: unset` approach (too aggressive)
- `outline: none` (accessibility)
- `cursor: pointer` on buttons (accessibility)
- `list-style: none` on all lists (preserve semantic defaults)

### ❌ Potential Extensions for v2
- Extended reduced-motion (animation/transition-duration)
- `[hidden] { display: none !important }`
- Form placeholder/disabled styling
- `hanging-punctuation: first last`
- `::selection` styling
- `:focus-visible` custom styling
