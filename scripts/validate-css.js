/**
 * CSS Validation using LightningCSS
 *
 * LightningCSS parses CSS with browser-grade accuracy (uses Mozilla's cssparser).
 * If parsing succeeds, the CSS is syntactically valid.
 *
 * @see https://lightningcss.dev
 */

import { transform, browserslistToTargets } from "lightningcss";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const srcDir = join(import.meta.dirname, "../src");
const cssFiles = readdirSync(srcDir).filter((f) => f.endsWith(".css"));

// Target evergreen browsers
const targets = browserslistToTargets([
  "last 2 Chrome versions",
  "last 2 Firefox versions",
  "last 2 Safari versions",
  "last 2 Edge versions",
]);

let hasErrors = false;
const results = [];

for (const file of cssFiles) {
  const filePath = join(srcDir, file);
  const code = readFileSync(filePath);

  try {
    const result = transform({
      filename: file,
      code,
      targets,
      // Don't minify - just parse and validate
      minify: false,
      // Enable all modern features we use
      drafts: {
        customMedia: true,
      },
    });

    // Check for warnings
    if (result.warnings && result.warnings.length > 0) {
      console.log(`⚠️  ${file}:`);
      for (const warning of result.warnings) {
        console.log(`   ${warning.message}`);
      }
      results.push({ file, status: "warning", warnings: result.warnings });
    } else {
      console.log(`✓  ${file}`);
      results.push({ file, status: "ok" });
    }
  } catch (error) {
    hasErrors = true;
    console.error(`❌ ${file}:`);

    if (error.loc) {
      console.error(`   Line ${error.loc.line}, Column ${error.loc.column}`);
    }
    console.error(`   ${error.message}`);
    results.push({ file, status: "error", error });
  }
}

console.log("");

if (hasErrors) {
  console.error("❌ CSS validation failed");
  process.exit(1);
} else {
  const warnings = results.filter((r) => r.status === "warning").length;
  if (warnings > 0) {
    console.log(`✅ All CSS files valid (${warnings} warning${warnings > 1 ? "s" : ""})`);
  } else {
    console.log("✅ All CSS files valid");
  }
}

