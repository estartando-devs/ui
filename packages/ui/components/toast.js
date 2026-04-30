module.exports = function toastComponent() {
  return {
    ".toast": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.75rem 1.5rem",
      borderRadius: "var(--radius-lg)",
      color: "#ffffff",
      fontSize: "1rem",
      fontWeight: "700",
      fontFamily: "var(--font-heading, 'Ubuntu', ui-sans-serif, system-ui, sans-serif)",
      boxShadow: "var(--shadow-md)",
      transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
    },
    ".toast-primary": {
      backgroundColor: "var(--color-primary-dark)",
    },
    ".toast-secondary": {
      backgroundColor: "var(--color-secondary)",
    },
    ".toast-accent": {
      backgroundColor: "var(--color-accent)",
    },
    ".toast-success": {
      backgroundColor: "var(--color-success)",
    },
    ".toast-muted": {
      backgroundColor: "var(--color-muted)",
    },
  };
};
