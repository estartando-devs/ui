module.exports = function tabsComponent() {
  return {
    ".tabs": {
      display: "flex",
      flexDirection: "column",
    },
    ".tabs-list": {
      display: "inline-flex",
      borderBottom: "1px solid var(--color-border)",
      gap: "0.5rem",
    },
    ".tabs-trigger": {
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      fontWeight: "700",
      fontFamily: "var(--font-heading, 'Ubuntu', ui-sans-serif, system-ui, sans-serif)",
      color: "var(--color-foreground)",
      cursor: "pointer",
      borderBottom: "2px solid transparent",
      transition: "all 200ms ease-in-out",
    },
    ".tabs-trigger[data-state='active']": {
      borderColor: "var(--color-design-medium)",
      color: "var(--color-foreground)",
    },
    ".tabs-content": {
      marginTop: "1rem",
      outline: "none",
    },
  };
};
