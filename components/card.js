/**
 * Card component — Estartando Devs design system.
 *
 * Mirrors the shadcn Card structure: Card > CardHeader > CardTitle + CardDescription,
 * CardContent, CardFooter.  Uses ring-1 ring-foreground/10 and bg-card.
 */
module.exports = function cardComponent() {
  return {
    /* ── Base ─────────────────────────────────────────── */
    ".card": {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      overflow: "hidden",
      backgroundColor: "var(--color-card)",
      color: "var(--color-card-foreground)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "0 0 0 1px color-mix(in srgb, var(--color-foreground) 10%, transparent)",
      padding: "1rem 0",
      fontSize: "0.875rem",
    },

    /* ── Hover lift ───────────────────────────────────── */
    ".card-hover": {
      transitionProperty: "box-shadow, transform",
      transitionDuration: "250ms",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      "&:hover": {
        boxShadow: "var(--shadow-lg), 0 0 0 1px color-mix(in srgb, var(--color-foreground) 10%, transparent)",
        transform: "translateY(-4px)",
      },
    },

    /* ── Estartando elevated style (matches App.tsx cards) ── */
    ".card-elevated": {
      boxShadow: "var(--shadow-card), 0 0 0 1px color-mix(in srgb, var(--color-foreground) 10%, transparent)",
    },

    /* ── Bordered ─────────────────────────────────────── */
    ".card-bordered": {
      border: "1px solid var(--color-border)",
      boxShadow: "none",
    },

    /* ── Card header ──────────────────────────────────── */
    ".card-header": {
      display: "grid",
      gridAutoRows: "min-content",
      alignItems: "start",
      gap: "0.25rem",
      borderTopLeftRadius: "var(--radius-xl)",
      borderTopRightRadius: "var(--radius-xl)",
      padding: "0 1rem",
    },

    /* ── Title ────────────────────────────────────────── */
    ".card-title": {
      fontSize: "1rem",
      fontWeight: "500",
      lineHeight: "1.4",
      fontFamily: "var(--font-heading, 'Ubuntu', ui-sans-serif, system-ui, sans-serif)",
      color: "var(--color-card-foreground)",
    },

    /* ── Description ──────────────────────────────────── */
    ".card-description": {
      fontSize: "0.875rem",
      lineHeight: "1.5",
      color: "var(--color-muted-foreground)",
    },

    /* ── Content ──────────────────────────────────────── */
    ".card-content": {
      padding: "0 1rem",
    },

    /* ── Footer ───────────────────────────────────────── */
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      borderBottomLeftRadius: "var(--radius-xl)",
      borderBottomRightRadius: "var(--radius-xl)",
      borderTop: "1px solid var(--color-border)",
      backgroundColor: "color-mix(in srgb, var(--color-muted) 50%, transparent)",
      padding: "1rem",
    },

    /* ── Actions row ──────────────────────────────────── */
    ".card-actions": {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      marginTop: "auto",
    },

    /* ── Image figure ─────────────────────────────────── */
    ".card-figure": {
      "& > img": {
        width: "100%",
        height: "auto",
        objectFit: "cover",
      },
    },

    /* ── Compact variant ──────────────────────────────── */
    ".card-compact": {
      gap: "0.75rem",
      padding: "0.75rem 0",
      "& .card-header": {
        padding: "0 0.75rem",
      },
      "& .card-content": {
        padding: "0 0.75rem",
      },
      "& .card-footer": {
        padding: "0.75rem",
      },
    },

    /* ── Side layout (horizontal) ─────────────────────── */
    ".card-side": {
      flexDirection: "row",
      padding: "0",
      "& .card-figure": {
        width: "40%",
        flexShrink: "0",
        "& > img": {
          height: "100%",
          objectFit: "cover",
        },
      },
      "& .card-body": {
        padding: "1rem",
      },
    },

    /* ── Glass effect ─────────────────────────────────── */
    ".card-glass": {
      backgroundColor: "color-mix(in srgb, var(--color-card) 60%, transparent)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      border: "1px solid color-mix(in srgb, var(--color-border) 30%, transparent)",
    },
  };
};
