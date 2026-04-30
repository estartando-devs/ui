module.exports = function alertDialogComponent() {
  return {
    ".alert-dialog-overlay": {
      position: "fixed",
      inset: "0",
      zIndex: "50",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(4px)",
    },
    ".alert-dialog-content": {
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: "50",
      width: "100%",
      maxWidth: "32rem",
      padding: "1.5rem",
      backgroundColor: "var(--color-background)",
      color: "var(--color-foreground)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      border: "1px solid var(--color-border)",
    },
    ".alert-dialog-title": {
      fontSize: "1.25rem",
      fontWeight: "700",
      fontFamily: "var(--font-heading, 'Ubuntu', ui-sans-serif, system-ui, sans-serif)",
    },
    ".alert-dialog-description": {
      marginTop: "0.5rem",
      fontSize: "0.875rem",
      color: "var(--color-muted-foreground)",
    },
  };
};
