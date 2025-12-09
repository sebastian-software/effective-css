/**
 * @effective/css Demo Page
 */

// Import CSS via JS so Vite processes @imports correctly
import "../src/index.css";
import "./demo.css";

// Initialize theme toggle
import { initTheme } from "./theme.js";
initTheme();
