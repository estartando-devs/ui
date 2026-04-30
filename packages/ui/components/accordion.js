module.exports = function accordionComponent() {
  return {
    ".accordion": {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    ".accordion-item": {
      borderBottom: "1px solid var(--color-border)",
    },
    ".accordion-header": {
      display: "flex",
      flex: "1",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 0",
      fontWeight: "700",
      fontFamily: "var(--font-heading, 'Ubuntu', ui-sans-serif, system-ui, sans-serif)",
      transition: "all 200ms ease-in-out",
      cursor: "pointer",
    },
    ".accordion-header:hover": {
      textDecoration: "underline",
    },
    ".accordion-header:focus-visible": {
      outline: "none",
      boxShadow: "0 0 0 3px color-mix(in srgb, var(--color-ring) 50%, transparent)",
      borderRadius: "var(--radius-sm)",
    },
    ".accordion-content": {
      overflow: "hidden",
      fontSize: "0.875rem",
      paddingBottom: "1rem",
    },
  };
};
