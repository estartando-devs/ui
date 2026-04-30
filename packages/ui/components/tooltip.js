module.exports = function tooltipComponent() {
  return {
    ".tooltip": {
      position: "relative",
      display: "inline-block",
    },
    ".tooltip-content": {
      position: "absolute",
      zIndex: "50",
      padding: "0.5rem 1rem",
      backgroundColor: "var(--color-primary-dark)",
      color: "#ffffff",
      fontSize: "0.875rem",
      fontWeight: "700",
      fontFamily: "var(--font-heading, 'Ubuntu', ui-sans-serif, system-ui, sans-serif)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-md)",
      whiteSpace: "nowrap",
      pointerEvents: "none",
    },
  };
};
