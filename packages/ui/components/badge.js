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
    ".badge-frontend": {
      backgroundColor: "var(--color-frontend-light)",
      color: "var(--color-frontend-dark)",
    },
    ".badge-design": {
      backgroundColor: "var(--color-design-light)",
      color: "var(--color-design-dark)",
    },
    ".badge-backend": {
      backgroundColor: "var(--color-backend-light)",
      color: "var(--color-backend-dark)",
    },
    ".badge-neutral": {
      backgroundColor: "var(--color-neutral-light)",
      color: "var(--color-neutral-dark)",
    },
  };
};
