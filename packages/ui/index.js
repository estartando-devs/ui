/**
 * @estartando/ui — Tailwind CSS plugin
 *
 * A modular component plugin built for the
 * Estartando Devs design system.
 *
 * Tailwind v4 (CSS-first):
 *   @plugin "@estartando/ui";
 */

const plugin = require("tailwindcss/plugin");
const { getAllComponents } = require("./components");
const { generateThemes } = require("./themes");

/**
 * plugin.withOptions() makes the export work both as:
 *   - A direct import for @plugin (Tailwind v4, called with no args)
 *   - A factory call for custom configuration overriding defaults
 */
module.exports = plugin.withOptions(
  /**
   * Plugin handler factory — receives user options, returns the plugin function.
   *
   * @param {object} [options]
   * @param {string} [options.defaultTheme="dark"]
   * @param {Record<string, string>} [options.colors]
   * @param {string} [options.radius]
   */
  function (options = {}) {
    return function ({ addBase, addComponents }) {
      // 1. Inject theme tokens as CSS custom properties
      const themes = generateThemes(options);
      addBase(themes);

      // 2. Inject global reset/base styles
      addBase({
        "*, *::before, *::after": {
          borderColor: "var(--color-border)",
        },
        body: {
          backgroundColor: "var(--color-background)",
          color: "var(--color-foreground)",
          fontFamily: "var(--font-sans, 'Open Sans', ui-sans-serif, system-ui, sans-serif)",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
      });

      // 3. Inject component classes
      addComponents(getAllComponents());
    };
  },

  /**
   * Theme config factory — extends Tailwind's theme so utility classes
   * like `bg-primary`, `text-muted-foreground` work out of the box.
   */
  function () {
    return {
      theme: {
        extend: {
          colors: {
            background: "var(--color-background)",
            foreground: "var(--color-foreground)",
            card: {
              DEFAULT: "var(--color-card)",
              foreground: "var(--color-card-foreground)",
            },
            popover: {
              DEFAULT: "var(--color-popover)",
              foreground: "var(--color-popover-foreground)",
            },
            primary: {
              DEFAULT: "var(--color-primary)",
              foreground: "var(--color-primary-foreground)",
              light: "var(--color-primary-light)",
              dark: "var(--color-primary-dark)",
            },
            secondary: {
              DEFAULT: "var(--color-secondary)",
              foreground: "var(--color-secondary-foreground)",
              light: "var(--color-secondary-light)",
              dark: "var(--color-secondary-dark)",
            },
            accent: {
              DEFAULT: "var(--color-accent)",
              foreground: "var(--color-accent-foreground)",
              light: "var(--color-accent-light)",
              dark: "var(--color-accent-dark)",
            },
            muted: {
              DEFAULT: "var(--color-muted)",
              foreground: "var(--color-muted-foreground)",
              light: "var(--color-muted-light)",
              dark: "var(--color-muted-dark)",
            },
            destructive: "var(--color-destructive)",
            success: {
              DEFAULT: "var(--color-success)",
              foreground: "var(--color-success-foreground)",
            },
            warning: {
              DEFAULT: "var(--color-warning)",
              foreground: "var(--color-warning-foreground)",
            },
            info: {
              DEFAULT: "var(--color-info)",
              foreground: "var(--color-info-foreground)",
            },
            border: "var(--color-border)",
            input: "var(--color-input)",
            ring: "var(--color-ring)",
            "brand-purple": "var(--color-brand-purple)",
            "brand-teal": "var(--color-brand-teal)",
          },
          borderRadius: {
            sm: "var(--radius-sm)",
            md: "var(--radius-md)",
            lg: "var(--radius-lg)",
            xl: "var(--radius-xl)",
          },
          fontFamily: {
            sans: ["var(--font-sans, 'Open Sans')", "ui-sans-serif", "system-ui", "sans-serif"],
            heading: ["var(--font-heading, 'Ubuntu')", "ui-sans-serif", "system-ui", "sans-serif"],
            mono: ["var(--font-mono, 'Ubuntu Mono')", "ui-monospace", "monospace"],
            serif: ["var(--font-serif, 'Domine')", "ui-serif", "Georgia", "serif"],
          },
          boxShadow: {
            sm: "var(--shadow-sm)",
            md: "var(--shadow-md)",
            lg: "var(--shadow-lg)",
            card: "var(--shadow-card)",
          },
        },
      },
    };
  }
);

