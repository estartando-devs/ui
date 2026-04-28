/**
 * Button component — Estartando Devs design system.
 *
 * Mirrors the shadcn Button API (variant, size) but as pure CSS classes.
 * Uses rounded-lg base + the project's ring/focus pattern.
 */
module.exports = function buttonComponent() {
  return {
    /* ── Base ─────────────────────────────────────────── */
    ".btn": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.375rem",
      padding: "0.5rem 0.625rem",
      fontSize: "0.875rem",
      fontWeight: "500",
      lineHeight: "1.25rem",
      whiteSpace: "nowrap",
      borderRadius: "var(--radius-lg)",
      border: "1px solid transparent",
      cursor: "pointer",
      userSelect: "none",
      transitionProperty: "background-color, border-color, color, box-shadow, opacity, transform",
      transitionDuration: "200ms",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      backgroundColor: "var(--color-primary)",
      color: "var(--color-primary-foreground)",
      outline: "none",
      "&:hover": {
        opacity: "0.8",
      },
      "&:active": {
        transform: "translateY(1px)",
      },
      "&:focus-visible": {
        borderColor: "var(--color-ring)",
        boxShadow: "0 0 0 3px color-mix(in srgb, var(--color-ring) 50%, transparent)",
      },
      "&:disabled, &.btn-disabled": {
        opacity: "0.5",
        pointerEvents: "none",
        cursor: "not-allowed",
      },
    },

    /* ── Sizes (match shadcn scale) ───────────────────── */
    ".btn-xs": {
      height: "1.5rem",
      gap: "0.25rem",
      padding: "0 0.5rem",
      fontSize: "0.75rem",
      borderRadius: "var(--radius-md)",
    },
    ".btn-sm": {
      height: "1.75rem",
      gap: "0.25rem",
      padding: "0 0.625rem",
      fontSize: "0.8125rem",
      borderRadius: "var(--radius-md)",
    },
    ".btn-md": {
      height: "2rem",
    },
    ".btn-lg": {
      height: "2.25rem",
      gap: "0.375rem",
      padding: "0 0.625rem",
      fontSize: "1rem",
    },

    /* ── Color variants ───────────────────────────────── */
    ".btn-primary": {
      backgroundColor: "var(--color-primary)",
      color: "var(--color-primary-foreground)",
    },
    ".btn-secondary": {
      backgroundColor: "var(--color-secondary)",
      color: "var(--color-secondary-foreground)",
      "&:hover": {
        opacity: "0.8",
      },
    },
    ".btn-accent": {
      backgroundColor: "var(--color-accent)",
      color: "var(--color-accent-foreground)",
    },
    ".btn-destructive": {
      backgroundColor: "color-mix(in srgb, var(--color-destructive) 10%, transparent)",
      color: "var(--color-destructive)",
      "&:hover": {
        backgroundColor: "color-mix(in srgb, var(--color-destructive) 20%, transparent)",
        opacity: "1",
      },
      "&:focus-visible": {
        borderColor: "color-mix(in srgb, var(--color-destructive) 40%, transparent)",
        boxShadow: "0 0 0 3px color-mix(in srgb, var(--color-destructive) 20%, transparent)",
      },
    },
    ".btn-success": {
      backgroundColor: "var(--color-success)",
      color: "var(--color-success-foreground)",
    },
    ".btn-warning": {
      backgroundColor: "var(--color-warning)",
      color: "var(--color-warning-foreground)",
    },
    ".btn-info": {
      backgroundColor: "var(--color-info)",
      color: "var(--color-info-foreground)",
    },

    /* ── Outline variant ──────────────────────────────── */
    ".btn-outline": {
      backgroundColor: "var(--color-background)",
      borderColor: "var(--color-border)",
      color: "var(--color-foreground)",
      "&:hover": {
        backgroundColor: "var(--color-muted)",
        opacity: "1",
      },
    },
    ".btn-outline.btn-primary": {
      borderColor: "var(--color-primary)",
      color: "var(--color-primary)",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "color-mix(in srgb, var(--color-primary) 10%, transparent)",
      },
    },
    ".btn-outline.btn-secondary": {
      borderColor: "var(--color-secondary)",
      color: "var(--color-secondary-foreground)",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "color-mix(in srgb, var(--color-secondary) 10%, transparent)",
      },
    },
    ".btn-outline.btn-accent": {
      borderColor: "var(--color-accent)",
      color: "var(--color-accent)",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "color-mix(in srgb, var(--color-accent) 10%, transparent)",
      },
    },

    /* ── Ghost ────────────────────────────────────────── */
    ".btn-ghost": {
      backgroundColor: "transparent",
      color: "var(--color-foreground)",
      border: "none",
      "&:hover": {
        backgroundColor: "var(--color-muted)",
        opacity: "1",
      },
    },

    /* ── Link ─────────────────────────────────────────── */
    ".btn-link": {
      backgroundColor: "transparent",
      color: "var(--color-primary)",
      textDecoration: "underline",
      textUnderlineOffset: "4px",
      border: "none",
      padding: "0",
      height: "auto",
      fontWeight: "500",
      "&:hover": {
        opacity: "0.8",
        transform: "none",
      },
    },

    /* ── Block (full width) ───────────────────────────── */
    ".btn-block": {
      width: "100%",
    },

    /* ── CTA style (Estartando "Inscrever agora") ────── */
    ".btn-cta": {
      height: "auto",
      width: "100%",
      padding: "1rem",
      fontSize: "1.25rem",
      fontWeight: "700",
      fontFamily: "var(--font-heading, 'Ubuntu', ui-sans-serif, system-ui, sans-serif)",
      borderRadius: "var(--radius-lg)",
      "&:disabled": {
        backgroundColor: "var(--color-border)",
        color: "var(--color-card)",
        opacity: "1",
      },
    },
  };
};
