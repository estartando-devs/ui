module.exports = function avatarComponent() {
  return {
    ".avatar": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "9999px",
      overflow: "hidden",
      backgroundColor: "var(--color-neutral-medium)",
      color: "#ffffff",
      fontWeight: "700",
      fontFamily: "var(--font-heading, 'Ubuntu', ui-sans-serif, system-ui, sans-serif)",
    },
    ".avatar-sm": {
      width: "2rem",
      height: "2rem",
      fontSize: "0.75rem",
    },
    ".avatar-md": {
      width: "3rem",
      height: "3rem",
      fontSize: "1rem",
    },
    ".avatar-lg": {
      width: "4rem",
      height: "4rem",
      fontSize: "1.25rem",
    },
    ".avatar-frontend": {
      backgroundColor: "var(--color-frontend-dark)",
    },
    ".avatar-design": {
      backgroundColor: "var(--color-design-medium)",
    },
    ".avatar-backend": {
      backgroundColor: "var(--color-backend-medium)",
    },
    ".avatar-neutral": {
      backgroundColor: "var(--color-neutral-medium)",
    },
  };
};
