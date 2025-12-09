/**
 * Simple CSS syntax checker
 * Validates that all CSS files can be parsed without errors
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const srcDir = join(import.meta.dirname, "../src");
const cssFiles = readdirSync(srcDir).filter((f) => f.endsWith(".css"));

let hasErrors = false;

for (const file of cssFiles) {
  const filePath = join(srcDir, file);
  const content = readFileSync(filePath, "utf-8");

  // Basic syntax checks
  const openBraces = (content.match(/{/g) || []).length;
  const closeBraces = (content.match(/}/g) || []).length;

  if (openBraces !== closeBraces) {
    console.error(`❌ ${file}: Mismatched braces (${openBraces} open, ${closeBraces} close)`);
    hasErrors = true;
  }

  // Check for @layer declarations
  if (!content.includes("@layer")) {
    console.error(`❌ ${file}: Missing @layer declaration`);
    hasErrors = true;
  }

  // Check for unclosed comments
  const openComments = (content.match(/\/\*/g) || []).length;
  const closeComments = (content.match(/\*\//g) || []).length;

  if (openComments !== closeComments) {
    console.error(`❌ ${file}: Unclosed comments`);
    hasErrors = true;
  }

  if (!hasErrors) {
    console.log(`✓ ${file}`);
  }
}

if (hasErrors) {
  process.exit(1);
} else {
  console.log("\n✅ All CSS files passed syntax check");
}

