const lightTheme = require("./light");
const darkTheme = require("./dark");

/**
 * Builds CSS custom property declarations from a theme object.
 * Merges user overrides (from plugin options) on top of the base theme.
 *
 * @param {Record<string, string>} base - Base theme tokens
 * @param {Record<string, string>} [overrides={}] - User-supplied overrides
 * @returns {Record<string, string>} Merged CSS variable map
 */
function buildThemeVars(base, overrides = {}) {
  return { ...base, ...overrides };
}

/**
 * Generates the full theme layer (base styles) to be injected by Tailwind.
 *
 * Default: dark theme on :root (matches Estartando Devs convention).
 *
 * Produces:
 *   :root, [data-theme="dark"]  → dark tokens  (brand default)
 *   [data-theme="light"]        → light tokens
 *
 * @param {object} options - Plugin options
 * @param {string} [options.defaultTheme="dark"] - Which theme to apply to :root
 * @param {Record<string, string>} [options.colors={}] - Color overrides for both themes
 * @param {string} [options.radius] - Default border-radius override
 * @returns {Record<string, Record<string, string>>} CSS-in-JS base styles
 */
function generateThemes(options = {}) {
  const {
    defaultTheme = "dark",
    colors = {},
    radius,
  } = options;

  const radiusOverride = radius ? { "--radius": radius } : {};
  const sharedOverrides = { ...colors, ...radiusOverride };

  const lightVars = buildThemeVars(lightTheme, sharedOverrides);
  const darkVars = buildThemeVars(darkTheme, sharedOverrides);

  const themes = {};

  if (defaultTheme === "dark") {
    themes[":root, [data-theme='dark']"] = darkVars;
    themes["[data-theme='light']"] = lightVars;
  } else {
    themes[":root, [data-theme='light']"] = lightVars;
    themes["[data-theme='dark']"] = darkVars;
  }

  return themes;
}

module.exports = { generateThemes, lightTheme, darkTheme };
