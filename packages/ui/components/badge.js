module.exports = function badgeComponent() {
  return {
    ".badge": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.375rem 0.75rem",
      fontSize: "0.875rem",
      fontWeight: "700",
      lineHeight: "1.25rem",
      borderRadius: "9999px",
      whiteSpace: "nowrap",
      fontFamily: "var(--font-heading, 'Ubuntu', ui-sans-serif, system-ui, sans-serif)",
    },
    ".badge-sm": {
      padding: "0.25rem 0.5rem",
      fontSize: "0.75rem",
      lineHeight: "1rem",
    },
    ".badge-primary": {
      backgroundColor: "var(--color-primary-light)",
      color: "var(--color-primary-dark)",
    },
    ".badge-secondary": {
      backgroundColor: "var(--color-secondary-light)",
      color: "var(--color-secondary-dark)",
    },
    ".badge-accent": {
      backgroundColor: "var(--color-accent-light)",
      color: "var(--color-accent-dark)",
    },
    ".badge-muted": {
      backgroundColor: "var(--color-muted-light)",
      color: "var(--color-muted-dark)",
    },
  };
};
