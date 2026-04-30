module.exports = function menubarComponent() {
  return {
    ".menubar": {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.25rem",
      padding: "0.25rem",
      backgroundColor: "var(--color-muted)",
      borderRadius: "var(--radius-lg)",
    },
    ".menubar-trigger": {
      padding: "0.5rem 0.75rem",
      borderRadius: "var(--radius-sm)",
      fontSize: "1rem",
      fontWeight: "700",
      fontFamily: "var(--font-heading, 'Ubuntu', ui-sans-serif, system-ui, sans-serif)",
      color: "var(--color-foreground)",
      cursor: "pointer",
      userSelect: "none",
      transition: "background-color 200ms",
    },
    ".menubar-trigger:hover, .menubar-trigger[data-state='open']": {
      backgroundColor: "color-mix(in srgb, var(--color-foreground) 10%, transparent)",
    },
  };
};
