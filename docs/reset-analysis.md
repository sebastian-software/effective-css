# CSS Reset Analysis – Kilian Valkhof's Referenced Resets

Complete analysis of all CSS resets mentioned in [Kilian Valkhof's blog post](https://kilianvalkhof.com/2022/css-html/your-css-reset-needs-text-size-adjust-probably/).

## Sources Analyzed

| Reset | Author | Last Update | Philosophy |
|-------|--------|-------------|------------|
| [Normalize.css](https://github.com/necolas/normalize.css) | Nicolas Gallagher | 2018 (v8.0.1) | Fix browser bugs, preserve useful defaults |
| [Sanitize.css](https://github.com/csstools/sanitize.css) | CSS Tools | Active | Normalize + opinionated defaults |
| [Bootstrap Reboot](https://github.com/twbs/bootstrap) | Bootstrap Team | Active (v5.3.8) | Normalize + design system ready |
| [The New CSS Reset](https://github.com/elad2412/the-new-css-reset) | Elad Shechter | 2024 (v1.11.3) | Aggressive `all: unset` approach |
| [Josh Comeau's Reset](https://www.joshwcomeau.com/css/custom-css-reset/) | Josh Comeau | 2025 | Minimal, modern, well-documented |
| [CSS Remedy](https://github.com/jensimmons/cssremedy) | Jen Simmons | 2020 | Fix CSS design mistakes |
| [Andy Bell's Reset](https://piccalil.li/blog/a-more-modern-css-reset/) | Andy Bell | 2023 | Modern, accessibility-focused |
| [Open Props Normalize](https://github.com/argyleink/open-props) | Adam Argyle | Active | Design token system base |
| [Destyle.css](https://github.com/nicolas-cusan/destyle.css) | Nicolas Cusan | 2025 (v4.0.1) | Remove all styles, start fresh |

---

## Consensus Rules (6+ resets agree)

These rules have broad agreement across the analyzed resets:

### ✅ Box-Sizing: border-box (9/9)
```css
*, *::before, *::after { box-sizing: border-box; }
```
**Unanimous agreement.** Every single reset uses this.

### ✅ Body margin: 0 (9/9)
```css
body { margin: 0; }
```
**Unanimous.** All resets remove body margin (some via `* { margin: 0 }`).

### ✅ Form elements inherit font (8/9)
```css
button, input, textarea, select { font: inherit; }
```
All except CSS Remedy. Normalize uses `font-family: inherit; font-size: 100%;`.

### ✅ Images responsive & block (8/9)
```css
img { display: block; max-width: 100%; }
```
All except Normalize.css (which only removes border).

### ✅ text-size-adjust (7/9)
```css
html {
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}
```
Missing in: Josh Comeau, CSS Remedy.
**With -moz- prefix:** The New CSS Reset, Andy Bell, Open Props (3/9).

### ✅ Table border-collapse (6/9)
```css
table { border-collapse: collapse; }
```
Sanitize, The New CSS Reset, Destyle, Open Props, Bootstrap, @effective/css.

---

## Strong Consensus (4-5 resets)

### Line-height: 1.5 on body (5/9)
```css
body { line-height: 1.5; }
```
Josh Comeau, Andy Bell, Sanitize, Bootstrap, @effective/css.
Normalize uses `1.15`, CSS Remedy doesn't set it.

### min-height: 100vh on body (4/9)
```css
body { min-height: 100vh; }
```
Josh Comeau, Andy Bell, Open Props, @effective/css (uses 100dvh).

### Monospace font stack for code (5/9)
```css
code, kbd, samp, pre { font-family: monospace, monospace; }
```
Normalize, Sanitize, Destyle, Open Props, @effective/css.

### Media elements vertical-align (4/9)
```css
img, video { vertical-align: middle; }
/* or vertical-align: bottom */
```
Sanitize, CSS Remedy, Destyle (bottom), Open Props.

---

## Modern/Emerging Rules (2-3 resets)

### text-wrap: balance for headings (3/9)
```css
h1, h2, h3, h4, h5, h6 { text-wrap: balance; }
```
Josh Comeau, Andy Bell, Open Props.
**@effective/css: ✅ Implemented**

### text-wrap: pretty for paragraphs (2/9)
```css
p { text-wrap: pretty; }
```
Josh Comeau, Open Props.
**@effective/css: ✅ Implemented**

### color-scheme: light dark (2/9)
```css
html { color-scheme: light dark; }
```
Bootstrap (via data attribute), Open Props (implicit).
**@effective/css: ✅ Implemented**

### -webkit-font-smoothing: antialiased (3/9)
```css
body { -webkit-font-smoothing: antialiased; }
```
Josh Comeau, Open Props (implicit), Bootstrap.
**@effective/css: ✅ Implemented**

### isolation: isolate on #root (1/9)
```css
#root, #__next { isolation: isolate; }
```
Only Josh Comeau explicitly.
**@effective/css: ✅ Implemented**

### prefers-reduced-motion (3/9)
```css
@media (prefers-reduced-motion: reduce) {
  * { scroll-behavior: auto !important; }
}
```
Andy Bell (aggressive), Josh Comeau (scroll only via no-preference), Open Props.
**@effective/css: ✅ Implemented**

### overflow-wrap: break-word (3/9)
```css
body { overflow-wrap: break-word; }
/* or on p, h1-h6 */
```
Josh Comeau (on text elements), Sanitize (on :root), @effective/css.

### interpolate-size: allow-keywords (1/9)
```css
@media (prefers-reduced-motion: no-preference) {
  html { interpolate-size: allow-keywords; }
}
```
Only Josh Comeau (2025 update). Enables `height: auto` animations.
**@effective/css: ❌ Not implemented**

---

## Detailed Rule Comparison Matrix

| Rule | Normalize | Sanitize | Bootstrap | New Reset | Josh | Remedy | Andy Bell | Open Props | Destyle | @effective |
|------|:---------:|:--------:|:---------:|:---------:|:----:|:------:|:---------:|:----------:|:-------:|:----------:|
| **Box Model** |||||||||||
| `box-sizing: border-box` | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `* { margin: 0 }` | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ⚠️ | ⚠️ | ⚠️ | ✅ |
| `* { padding: 0 }` | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Typography** |||||||||||
| `html { line-height }` | 1.15 | 1.5 | 1.5 | ❌ | ❌ | normal | ❌ | var() | 1.15 | ❌ |
| `body { line-height: 1.5 }` | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ |
| `text-size-adjust` | -webkit | both | -webkit | all 3 | ❌ | ❌ | all 3 | -webkit | -webkit | ✅ all 3 |
| `tab-size` | ❌ | 4 | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (2) |
| `text-wrap: balance` (h1-h6) | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ |
| `text-wrap: pretty` (p) | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ | ✅ |
| `-webkit-font-smoothing` | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| System font stack | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ |
| **Media Elements** |||||||||||
| `img { display: block }` | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `img { max-width: 100% }` | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| `img { height: auto }` | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ |
| `img { vertical-align }` | ❌ | middle | ❌ | ❌ | ❌ | middle | ❌ | ❌ | bottom | ❌ |
| **Forms** |||||||||||
| `font: inherit` | family | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
| `appearance: none` | button | button | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| `textarea { resize }` | ❌ | vertical | ❌ | ❌ | ❌ | ❌ | ❌ | block | ❌ | ❌ |
| **Tables** |||||||||||
| `border-collapse` | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| `border-spacing: 0` | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Lists** |||||||||||
| `list-style: none` (all) | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | 🚫 |
| `list-style: none` (role) | ❌ | nav | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Links** |||||||||||
| `text-decoration-skip-ink` | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ |
| `a { color: inherit }` | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ |
| **Accessibility** |||||||||||
| `prefers-reduced-motion` | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ |
| `color-scheme` | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ |
| `[hidden] { display: none }` | ✅ | ⚠️ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Modern CSS** |||||||||||
| `@layer` usage | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| `:where()` selectors | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| `isolation: isolate` | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |

Legend: ✅ = Yes | ❌ = No | ⚠️ = Partial | 🚫 = Intentionally excluded

---

## Potential Additions for @effective/css

Based on consensus and modern best practices:

### High Priority (Strong consensus)

| Rule | Agreement | Recommendation |
|------|-----------|----------------|
| `[hidden] { display: none !important }` | 3/9 + spec | **Add to fixes.css** – Ensures `hidden` attribute works when display is overridden |
| `img { vertical-align: middle }` | 4/9 | Consider – Removes whitespace gap below inline images |
| `:target { scroll-margin-block: 5ex }` | 2/9 | **Add to elements.css** – Better anchor link UX |

### Medium Priority (Modern/emerging)

| Rule | Agreement | Recommendation |
|------|-----------|----------------|
| `interpolate-size: allow-keywords` | 1/9 (Josh 2025) | **Consider** – Enables `height: auto` animations, very new |
| `-webkit-tap-highlight-color: transparent` | 3/9 | Consider – Removes tap highlight on mobile |
| `textarea { resize: block }` | 2/9 | Consider – Better than `vertical` for logical properties |
| `textarea:not([rows]) { min-height: 10em }` | 1/9 | Consider – Prevents tiny textareas |

### Low Priority (Opinionated)

| Rule | Agreement | Recommendation |
|------|-----------|----------------|
| `a { color: inherit }` | 2/9 | 🚫 Skip – Too opinionated, breaks link recognition |
| `ul, ol { list-style: none }` | 2/9 | 🚫 Skip – Already excluded intentionally |
| `appearance: none` on forms | 2/9 | 🚫 Skip – Too aggressive, breaks native controls |
| `cursor: pointer` on buttons | 2/9 | 🚫 Skip – Already excluded for accessibility |
| `:where()` wrapper | 3/9 | Consider for v2 – Zero specificity approach |

---

## Unique/Interesting Rules per Reset

### Sanitize.css
- `::before, ::after { text-decoration: inherit; vertical-align: inherit }` – Useful for pseudo-elements
- `[aria-busy="true"] { cursor: progress }` – Accessibility cursor states
- `[aria-disabled="true"], [disabled] { cursor: not-allowed }` – Disabled state cursor
- `nav ol, nav ul { list-style-type: none }` – Auto-remove list style in nav

### The New CSS Reset
- `all: unset; display: revert` – Nuclear option, removes everything
- `dialog:modal { all: revert }` – Restores modal behavior
- `[contenteditable] { overflow-wrap: break-word }` – Editable content fix

### Open Props
- Focus transition animation on `:focus-visible`
- `touch-action: manipulation` – Faster touch response
- `field-sizing: content` on textarea/select – New CSS feature for auto-sizing

### CSS Remedy
- `html { line-sizing: normal }` – Future CSS property
- `picture { display: contents }` – Removes wrapper, keeps children
- `audio { width: 100% }` – Audio elements responsive

### Destyle.css
- `min-width: 0` on all elements – Fixes flexbox overflow issues
- `label[for] { cursor: pointer }` – Clickable labels

---

## Summary: @effective/css Coverage

| Category | Coverage | Notes |
|----------|----------|-------|
| Box Model | ✅ Excellent | All consensus rules |
| Typography | ✅ Excellent | Modern features (text-wrap, font-smoothing) |
| Media Elements | ✅ Good | Missing vertical-align |
| Forms | ✅ Good | Minimal, inherits font |
| Tables | ✅ Good | collapse + spacing |
| Accessibility | ✅ Excellent | reduced-motion, color-scheme |
| Modern CSS | ✅ Excellent | @layer, isolation, dvh |
| Hidden attribute | ❌ Missing | Should add |
| Scroll margin | ❌ Missing | Should add |

**Overall:** @effective/css covers ~90% of consensus rules and includes several modern features that most resets don't have yet.
