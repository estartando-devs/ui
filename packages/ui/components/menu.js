module.exports = function menuComponent() {
  return {
    ".menu-content": {
      zIndex: "50",
      minWidth: "8rem",
      padding: "0.25rem",
      backgroundColor: "var(--color-popover)",
      color: "var(--color-popover-foreground)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      border: "1px solid var(--color-border)",
    },
    ".menu-item": {
      display: "flex",
      alignItems: "center",
      padding: "0.375rem 0.5rem",
      fontSize: "0.875rem",
      cursor: "default",
      userSelect: "none",
      borderRadius: "var(--radius-sm)",
      outline: "none",
      transition: "background-color 150ms",
    },
    ".menu-item:hover, .menu-item:focus": {
      backgroundColor: "var(--color-muted)",
      color: "var(--color-foreground)",
    },
    ".menu-label": {
      padding: "0.375rem 0.5rem",
      fontSize: "0.875rem",
      fontWeight: "700",
      fontFamily: "var(--font-heading, 'Ubuntu', ui-sans-serif, system-ui, sans-serif)",
    },
  };
};
