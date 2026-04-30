module.exports = function selectComponent() {
  return {
    ".select-trigger": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "0.75rem 1rem",
      backgroundColor: "var(--color-background)",
      border: "2px solid var(--color-border)",
      borderRadius: "var(--radius-lg)",
      fontSize: "1rem",
      color: "var(--color-foreground)",
      cursor: "pointer",
      outline: "none",
      transition: "border-color 200ms, box-shadow 200ms",
    },
    ".select-trigger:focus": {
      borderColor: "var(--color-ring)",
      boxShadow: "0 0 0 3px color-mix(in srgb, var(--color-ring) 50%, transparent)",
    },
    ".select-content": {
      backgroundColor: "var(--color-popover)",
      color: "var(--color-popover-foreground)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      border: "1px solid var(--color-border)",
      overflow: "hidden",
      zIndex: "50",
    },
  };
};
