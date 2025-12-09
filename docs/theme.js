/**
 * Theme toggle with auto-detection and persistence
 */

const STORAGE_KEY = "effective-css-theme";
const DARK = "dark";
const LIGHT = "light";

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? DARK : LIGHT;
}

function getStoredTheme() {
  return localStorage.getItem(STORAGE_KEY);
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
  updateToggleButton(theme);
}

function updateToggleButton(theme) {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const sunIcon = btn.querySelector(".icon-sun");
  const moonIcon = btn.querySelector(".icon-moon");

  if (theme === DARK) {
    sunIcon?.classList.remove("hidden");
    moonIcon?.classList.add("hidden");
    btn.setAttribute("aria-label", "Switch to light mode");
  } else {
    sunIcon?.classList.add("hidden");
    moonIcon?.classList.remove("hidden");
    btn.setAttribute("aria-label", "Switch to dark mode");
  }
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme || getSystemTheme();
  setTheme(current === DARK ? LIGHT : DARK);
}

export function initTheme() {
  const stored = getStoredTheme();
  const theme = stored || getSystemTheme();
  setTheme(theme);

  // Listen for system theme changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!getStoredTheme()) {
      setTheme(e.matches ? DARK : LIGHT);
    }
  });

  // Bind toggle button
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", toggleTheme);
    }
  });
}

