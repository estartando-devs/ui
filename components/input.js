/**
 * Input component — Estartando Devs design system.
 *
 * Mirrors the shadcn Input styling: rounded-lg, border-input,
 * ring focus, aria-invalid destructive ring.
 */
module.exports = function inputComponent() {
  return {
    /* ── Base ─────────────────────────────────────────── */
    ".input": {
      display: "block",
      width: "100%",
      minWidth: "0",
      height: "2rem",
      padding: "0.25rem 0.625rem",
      fontSize: "0.875rem",
      lineHeight: "1.5",
      color: "var(--color-foreground)",
      backgroundColor: "transparent",
      border: "1px solid var(--color-input)",
      borderRadius: "var(--radius-lg)",
      outline: "none",
      transitionProperty: "border-color, box-shadow",
      transitionDuration: "200ms",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      "&::placeholder": {
        color: "var(--color-muted-foreground)",
      },
      "&:focus-visible": {
        borderColor: "var(--color-ring)",
        boxShadow: "0 0 0 3px color-mix(in srgb, var(--color-ring) 50%, transparent)",
      },
      "&:disabled": {
        opacity: "0.5",
        pointerEvents: "none",
        cursor: "not-allowed",
        backgroundColor: "color-mix(in srgb, var(--color-input) 50%, transparent)",
      },
      "&[aria-invalid='true']": {
        borderColor: "var(--color-destructive)",
        boxShadow: "0 0 0 3px color-mix(in srgb, var(--color-destructive) 20%, transparent)",
      },
    },

    /* ── Sizes ────────────────────────────────────────── */
    ".input-xs": {
      height: "1.5rem",
      padding: "0.125rem 0.375rem",
      fontSize: "0.75rem",
    },
    ".input-sm": {
      height: "1.75rem",
      padding: "0.125rem 0.5rem",
      fontSize: "0.8125rem",
    },
    ".input-lg": {
      height: "2.5rem",
      padding: "0.5rem 0.75rem",
      fontSize: "1rem",
    },

    /* ── Estartando card-field style ───────────────────── */
    ".input-card": {
      backgroundColor: "var(--color-card)",
      borderColor: "var(--color-border)",
      borderRadius: "var(--radius-xl)",
      padding: "0.75rem",
      fontWeight: "500",
    },

    /* ── Color accent borders ─────────────────────────── */
    ".input-primary": {
      borderColor: "var(--color-primary)",
      "&:focus-visible": {
        borderColor: "var(--color-primary)",
        boxShadow: "0 0 0 3px color-mix(in srgb, var(--color-primary) 20%, transparent)",
      },
    },
    ".input-accent": {
      borderColor: "var(--color-accent)",
      "&:focus-visible": {
        borderColor: "var(--color-accent)",
        boxShadow: "0 0 0 3px color-mix(in srgb, var(--color-accent) 20%, transparent)",
      },
    },
    ".input-success": {
      borderColor: "var(--color-success)",
      "&:focus-visible": {
        borderColor: "var(--color-success)",
        boxShadow: "0 0 0 3px color-mix(in srgb, var(--color-success) 20%, transparent)",
      },
    },
    ".input-error": {
      borderColor: "var(--color-destructive)",
      "&:focus-visible": {
        borderColor: "var(--color-destructive)",
        boxShadow: "0 0 0 3px color-mix(in srgb, var(--color-destructive) 20%, transparent)",
      },
    },

    /* ── Ghost (borderless until focus) ───────────────── */
    ".input-ghost": {
      backgroundColor: "transparent",
      borderColor: "transparent",
      "&:focus-visible": {
        backgroundColor: "var(--color-card)",
        borderColor: "var(--color-border)",
        boxShadow: "none",
      },
    },

    /* ── Form group helper (mirrors FieldGroup) ───────── */
    ".form-control": {
      display: "flex",
      flexDirection: "column",
      gap: "0.375rem",
    },
    ".label": {
      fontSize: "0.875rem",
      fontWeight: "500",
      color: "var(--color-foreground)",
    },
    ".label-alt": {
      fontSize: "0.75rem",
      color: "var(--color-muted-foreground)",
    },

    /* ── Textarea ─────────────────────────────────────── */
    ".textarea": {
      display: "block",
      width: "100%",
      minHeight: "6rem",
      padding: "0.75rem",
      fontSize: "0.875rem",
      lineHeight: "1.5",
      color: "var(--color-foreground)",
      backgroundColor: "transparent",
      border: "1px solid var(--color-input)",
      borderRadius: "var(--radius-lg)",
      outline: "none",
      resize: "vertical",
      transitionProperty: "border-color, box-shadow",
      transitionDuration: "200ms",
      "&::placeholder": {
        color: "var(--color-muted-foreground)",
      },
      "&:focus-visible": {
        borderColor: "var(--color-ring)",
        boxShadow: "0 0 0 3px color-mix(in srgb, var(--color-ring) 50%, transparent)",
      },
      "&:disabled": {
        opacity: "0.5",
        pointerEvents: "none",
        cursor: "not-allowed",
      },
    },
    ".textarea-card": {
      backgroundColor: "var(--color-card)",
      borderColor: "var(--color-border)",
      borderRadius: "var(--radius-xl)",
      fontWeight: "500",
    },
  };
};
