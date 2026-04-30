/**
 * Light theme tokens — Estartando Devs design system.
 *
 * Naming mirrors the shadcn/Tailwind v4 convention used in src/index.css
 * so the plugin tokens are drop-in compatible with the existing project.
 */
module.exports = {
  /* ── Surfaces ─────────────────────────────────────── */
  "--color-background": "#f8f8f8",
  "--color-foreground": "#1e1e1e",
  "--color-card": "#ffffff",
  "--color-card-foreground": "#1e1e1e",
  "--color-popover": "#ffffff",
  "--color-popover-foreground": "#1e1e1e",

  /* ── Brand ────────────────────────────────────────── */
  "--color-primary": "#81caa8",
  "--color-primary-foreground": "#1e1e1e",
  "--color-primary-light": "#81e7a8",
  "--color-secondary": "#f0f0f0",
  "--color-secondary-foreground": "#1e1e1e",
  "--color-accent": "#00bfa6",
  "--color-accent-foreground": "#ffffff",
  "--color-brand-purple": "#6c63ff",
  "--color-brand-teal": "#00bfa6",

  /* ── Domains (Frontend, Design, Backend) ───────────── */
  "--color-neutral-light": "#F8F8F8",
  "--color-neutral-medium": "#606062",
  "--color-neutral-dark": "#161616",

  "--color-frontend-light": "#ACCABC",
  "--color-frontend-medium": "#A8CABC",
  "--color-frontend-dark": "#00BFA6",

  "--color-design-light": "#9799FF",
  "--color-design-medium": "#6C63FF",
  "--color-design-dark": "#4C45B2",

  "--color-backend-light": "#A0D1E9",
  "--color-backend-medium": "#1EC0D6",
  "--color-backend-dark": "#2094B3",


  /* ── Semantic ─────────────────────────────────────── */
  "--color-muted": "#f0f0f0",
  "--color-muted-foreground": "#6b6b6b",
  "--color-destructive": "#f87171",
  "--color-success": "#34d399",
  "--color-success-foreground": "#1e1e1e",
  "--color-warning": "#fbbf24",
  "--color-warning-foreground": "#1e1e1e",
  "--color-info": "#38bdf8",
  "--color-info-foreground": "#1e1e1e",

  /* ── Chrome ───────────────────────────────────────── */
  "--color-border": "#d4d4d4",
  "--color-input": "#d4d4d4",
  "--color-ring": "#81e7a8",

  /* ── Radius — mirrors calc() scale from index.css ── */
  "--radius": "0.75rem",
  "--radius-sm": "0.45rem",
  "--radius-md": "0.6rem",
  "--radius-lg": "0.75rem",
  "--radius-xl": "1.05rem",

  /* ── Shadows ──────────────────────────────────────── */
  "--shadow-sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  "--shadow-md": "0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06)",
  "--shadow-lg": "0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04)",
  "--shadow-card": "3px 3px 3px rgba(0,0,0,0.1), inset 8px 8px 17px rgba(196,196,196,0.03)",
};
