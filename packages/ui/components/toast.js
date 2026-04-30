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
    ".toast-frontend": {
      backgroundColor: "var(--color-frontend-dark)",
    },
    ".toast-design": {
      backgroundColor: "var(--color-design-medium)",
    },
    ".toast-backend": {
      backgroundColor: "var(--color-backend-medium)",
    },
    ".toast-success": {
      backgroundColor: "var(--color-success)",
    },
    ".toast-neutral": {
      backgroundColor: "var(--color-neutral-medium)",
    },
  };
};
