import { createTheme } from "@mui/material/styles";

export function getTheme(mode = "light") {
  return createTheme({
    palette: {
      mode,
      primary: { main: "#1976d2" },
      background: {
        default: mode === "light" ? "#f7f7fb" : "#0b0f17",
        paper: mode === "light" ? "#ffffff" : "#0f1624",
      },
    },
    shape: { borderRadius: 12 },
    typography: {
      fontFamily: ["Inter", "Roboto", "Arial", "sans-serif"].join(","),
      h3: { fontWeight: 800, letterSpacing: -0.5 },
      h4: { fontWeight: 800, letterSpacing: -0.3 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { textTransform: "none", borderRadius: 10 },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderColor: mode === "light" ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.10)",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { borderRadius: 10 },
        },
      },
    },
  });
}
