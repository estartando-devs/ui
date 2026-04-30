module.exports = function switchComponent() {
  return {
    ".switch": {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
    },
    ".switch-track": {
      width: "3rem",
      height: "1.75rem",
      backgroundColor: "var(--color-muted)",
      borderRadius: "9999px",
      transition: "background-color 200ms ease-in-out",
      position: "relative",
    },
    ".switch-thumb": {
      position: "absolute",
      top: "0.25rem",
      left: "0.25rem",
      width: "1.25rem",
      height: "1.25rem",
      backgroundColor: "#ffffff",
      borderRadius: "9999px",
      transition: "transform 200ms ease-in-out",
    },
    /* Sibling selectors for native input integration */
    "input[type='checkbox']:checked + .switch-track, .switch[data-state='checked'] .switch-track": {
      backgroundColor: "var(--color-primary)",
    },
    "input[type='checkbox']:checked + .switch-track .switch-thumb, .switch[data-state='checked'] .switch-thumb": {
      transform: "translateX(1.25rem)",
    },
    "input[type='checkbox']:focus-visible + .switch-track": {
      boxShadow: "0 0 0 3px color-mix(in srgb, var(--color-ring) 50%, transparent)",
      outline: "none",
    },
    "input[type='checkbox']:disabled + .switch-track, .switch-disabled, .switch:disabled": {
      opacity: "0.5",
      cursor: "not-allowed",
      pointerEvents: "none",
    },
  };
};
