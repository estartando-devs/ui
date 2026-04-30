module.exports = function checkboxComponent() {
  return {
    ".checkbox": {
      appearance: "none",
      width: "1.25rem",
      height: "1.25rem",
      borderRadius: "0.25rem",
      border: "2px solid var(--color-neutral-medium)",
      cursor: "pointer",
      outline: "none",
      transition: "background-color 200ms ease-in-out, border-color 200ms ease-in-out",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
    ".checkbox:checked": {
      borderColor: "var(--color-primary)",
      backgroundColor: "var(--color-primary)",
    },
    ".checkbox:checked::after": {
      content: '""',
      width: "0.375rem",
      height: "0.625rem",
      border: "solid #ffffff",
      borderWidth: "0 2px 2px 0",
      transform: "rotate(45deg)",
      display: "block",
      marginBottom: "0.125rem",
    },
    ".checkbox:focus-visible": {
      boxShadow: "0 0 0 3px color-mix(in srgb, var(--color-ring) 50%, transparent)",
    },
    ".checkbox:disabled": {
      opacity: "0.5",
      cursor: "not-allowed",
    },
  };
};
