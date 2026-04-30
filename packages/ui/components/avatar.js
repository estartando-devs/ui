module.exports = function avatarComponent() {
  return {
    ".avatar": {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "9999px",
      overflow: "hidden",
      backgroundColor: "var(--color-muted)",
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
    ".avatar-primary": {
      backgroundColor: "var(--color-primary-dark)",
    },
    ".avatar-secondary": {
      backgroundColor: "var(--color-secondary)",
    },
    ".avatar-accent": {
      backgroundColor: "var(--color-accent)",
    },
    ".avatar-muted": {
      backgroundColor: "var(--color-muted)",
    },
  };
};
