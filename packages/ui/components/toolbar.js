module.exports = function toolbarComponent() {
  return {
    ".toolbar": {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.25rem",
      padding: "0.5rem",
      backgroundColor: "var(--color-muted)",
      borderRadius: "var(--radius-lg)",
    },
    ".toolbar-button": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "2rem",
      height: "2rem",
      borderRadius: "var(--radius-sm)",
      color: "var(--color-foreground)",
      transition: "background-color 200ms, color 200ms",
      cursor: "pointer",
    },
    ".toolbar-button:hover": {
      backgroundColor: "color-mix(in srgb, var(--color-foreground) 10%, transparent)",
    },
    ".toolbar-button[data-state='active']": {
      backgroundColor: "var(--color-background)",
      color: "var(--color-design-medium)",
      boxShadow: "var(--shadow-sm)",
    },
  };
};
