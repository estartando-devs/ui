module.exports = function radioComponent() {
  return {
    ".radio": {
      appearance: "none",
      width: "1.25rem",
      height: "1.25rem",
      borderRadius: "9999px",
      border: "2px solid var(--color-neutral-medium)",
      cursor: "pointer",
      outline: "none",
      transition: "background-color 200ms ease-in-out, border-color 200ms ease-in-out",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
    ".radio:checked": {
      borderColor: "var(--color-primary)",
      backgroundColor: "var(--color-primary)",
    },
    ".radio:checked::after": {
      content: '""',
      width: "0.5rem",
      height: "0.5rem",
      borderRadius: "9999px",
      backgroundColor: "#ffffff",
      display: "block",
    },
    ".radio:focus-visible": {
      boxShadow: "0 0 0 3px color-mix(in srgb, var(--color-ring) 50%, transparent)",
    },
    ".radio:disabled": {
      opacity: "0.5",
      cursor: "not-allowed",
    },
  };
};
