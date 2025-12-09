/**
 * Build script for GitHub Pages
 * Copies CSS files to docs/ so they're accessible when deployed
 */

import { cpSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..");
const srcDir = join(root, "src");
const docsDir = join(root, "docs");
const cssDir = join(docsDir, "css");

// Create docs/css directory
mkdirSync(cssDir, { recursive: true });

// Copy all CSS files
const files = ["index.css", "reset.css", "fixes.css", "elements.css"];

for (const file of files) {
  cpSync(join(srcDir, file), join(cssDir, file));
  console.log(`✓ Copied ${file} to docs/css/`);
}

console.log("\n✅ Build complete! Ready for GitHub Pages deployment.");

