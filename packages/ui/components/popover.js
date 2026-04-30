module.exports = function popoverComponent() {
  return {
    ".popover-content": {
      zIndex: "50",
      padding: "1rem",
      backgroundColor: "var(--color-popover)",
      color: "var(--color-popover-foreground)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      border: "1px solid var(--color-border)",
      outline: "none",
    },
  };
};
