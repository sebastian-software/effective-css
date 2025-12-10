# Effective CSS Reset – Requirements v1 (EN)

## 0. Meta

- **META-001**: `id = "effective-css-reset"`
- **META-002**: `version = "0.1.0"`
- **META-003**: `status = "draft"`
- **META-004**: `target-browsers = "Evergreen (Chrome, Edge, Firefox, Safari, last 2–3 years)"`
- **META-005**: No legacy support for IE / old Android stock browsers.

---

## 1. Layer architecture

- **LAY-001**: The implementation MUST use `@layer` for structure.
- **LAY-002**: Reserved layer names:
  - `reset`
  - `fixes`
  - `elements`
- **LAY-003**: Each file MUST declare its own layer via `@layer <name> { ... }` at top level.
- **LAY-004**: Recommended declaration order in global CSS:

  ```css
  @layer reset, fixes, elements;
````

* **LAY-005**: Global utility classes (e.g. `.sr-only`, `.stack`, `.btn`) MUST NOT be defined.
* **LAY-006**: Global naming schemes (e.g. `.u-*`, `.c-*`, `.o-*`) MUST NOT be defined in this project.

---

## 2. Layer `reset`

### 2.1 General

* **RST-001**: Layer name MUST be `reset`.
* **RST-002**: Goal: normalize UA defaults across browsers, without browser-specific bug fixes.
* **RST-003**: The reset MUST apply to all standardized HTML elements (including `::before` / `::after`), not only `body`.

### 2.2 Margin / padding

* **RST-010**: All HTML elements MUST get `margin: 0;`.
* **RST-011**: All HTML elements MUST get `padding: 0;`.
* **RST-012**: Any exceptions to RST-010/011 (if introduced) MUST be explicitly documented in comments.

### 2.3 Box sizing

* **RST-020**: The global box model MUST be `box-sizing: border-box;`.

* **RST-021**: The pattern

  ```css
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  ```

  MUST NOT be used, due to issues with Web Components and slotted content.

* **RST-022**: `box-sizing` MUST be set directly on the elements (or HTML tag list), not via inheritance.

* **RST-023**: The “inheriting box-sizing from html” pattern is considered **deprecated** for this project.

*(Exact selector strategy – e.g. full HTML tag list vs. `html *` – is implementation detail, but MUST respect WC requirements in §5.)*

### 2.4 Display & media elements

* **RST-030**: `html` and `body` MUST keep their UA default display types (no forced display overrides).
* **RST-031**: For `img`, `picture`, `video`, `canvas`, `svg` the following MUST be applied:

  ```css
  @layer reset {
    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-inline-size: 100%;
      block-size: auto;
    }
  }
  ```

### 2.5 Forms & interactive elements

* **RST-040**: `button`, `input`, `textarea`, `select` MUST use `font: inherit;`.
* **RST-041**: Focus indicators MUST NOT be removed in `reset` (no global `outline: none;`).
* **RST-042**: `cursor: pointer;` MUST NOT be set globally in `reset` (only local, if ever, in higher layers).

---

## 3. Layer `fixes`

### 3.1 General

* **UFX-001**: Layer name MUST be `fixes`.
* **UFX-002**: Goal: browser-specific workarounds / bug fixes; no visual design decisions.
* **UFX-003**: Every fix MUST have a comment including:

  * Affected browser(s)
  * Short description of the bug / behavior
  * Link to external reference (article, bug report, spec issue)

### 3.2 Text scaling / mobile

* **UFX-010**: `html` MUST include `text-size-adjust` settings:

  ```css
  @layer fixes {
    html {
      -moz-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      text-size-adjust: 100%;
    }
  }
  ```

  Vendor prefixes:
  - `-moz-`: Firefox on Android
  - `-webkit-`: Safari (iOS/macOS), Chrome, Edge

* **UFX-011**: The use of `text-size-adjust` MUST be documented with reference to Mobile Safari font-size inflation and related articles.

### 3.3 Motion / `prefers-reduced-motion`

* **UFX-020**: There MUST be a block reacting to `@media (prefers-reduced-motion: reduce)`.

* **UFX-021**: Minimal requirement:

  ```css
  @layer fixes {
    @media (prefers-reduced-motion: reduce) {
      * {
        scroll-behavior: auto !important;
      }
    }
  }
  ```

* **UFX-022**: Additional reductions (e.g. `animation-duration`, `transition-duration`) are optional and MUST be clearly commented if implemented.

---

## 4. Layer `elements`

*(Previously “components”; intentionally narrower in scope.)*

### 4.1 General

* **ELT-001**: Layer name MUST be `elements`.
* **ELT-002**: Goal: minimal, semantically sensible HTML element defaults; no compound UI components.
* **ELT-003**: `elements` MUST be fully optional (e.g. separate file; integrator can choose not to import).

### 4.2 Basic HTML elements

* **ELT-010**: `a` elements MAY be slightly adjusted (e.g. `text-decoration-skip-ink: auto;`) but MUST remain clearly recognizable as links.
* **ELT-011**: `h1`–`h6`, `p` MUST NOT receive additional margins in `elements` (spacing systems are out of scope for v1; only the global 0-margins from `reset` apply).
* **ELT-012**: `ul`, `ol`, `dl` MUST keep `list-style` defaults; margin/padding are already 0 from `reset`.

### 4.3 Font stacks (system UI & monospace, including emoji)

* **ELT-020**: `:root` MUST define `--font-sans` as a modern system font stack including emoji fonts, for example:

  ```css
  :root {
    --font-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
  }
  ```

* **ELT-021**: `body` MUST use `font-family: var(--font-sans);`.

* **ELT-022**: `:root` MUST define `--font-mono` as a modern monospace stack, e.g.:

  ```css
  :root {
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco,
      Consolas, "Liberation Mono", "Courier New", monospace;
  }
  ```

* **ELT-023**: `code`, `pre`, `kbd`, `samp` MUST use `font-family: var(--font-mono);`.

* **ELT-024**: Emoji / emoticons MUST remain properly rendered via the emoji fonts in `--font-sans`; the default stack MUST NOT omit emoji-capable fonts.

### 4.4 Typography scope in v1

* **ELT-030**: v1 MUST NOT define fluid typography, scales, or `clamp()`-based font sizing.
* **ELT-031**: v1 MUST NOT define global type scales (heading hierarchies, rhythm systems, etc.); only default UA behavior + base font family.

---

## 5. Web Components & third-party systems

* **WC-001**: The reset MUST NOT rely on Shadow DOM-specific selectors (`::part`, `::slotted`) or modify styles inside component shadow trees.
* **WC-002**: The reset MUST be written so that it does not unexpectedly break Custom Elements or Web Component libraries (no opinionated styling on unknown tags).
* **WC-003**: Because of Web Component and slot behavior, box sizing inheritance patterns (see RST-021) MUST be avoided; direct `box-sizing` is required.

---

## 6. Explicit non-goals / constraints

* **NG-001**: No global utility classes (see LAY-005/006).
* **NG-002**: No full UI components (buttons, cards, modals, etc.) in this project.
* **NG-003**: v1 MUST be plain CSS (no required SCSS/LESS/PostCSS features).
* **NG-004**: v1 MUST NOT define build-tool configurations (bundling options, “only-reset” builds, etc.); build tooling is out of scope for this version.
