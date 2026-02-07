import { createTheme, alpha } from "@mui/material/styles";

export function getTheme(mode = "light") {
  const isDark = mode === "dark";

  const primaryMain = "#1976d2";
  const bgDefault = isDark ? "#0b0f17" : "#f7f7fb";
  const bgPaper = isDark ? "#0f1624" : "#ffffff";

  // “Glass”
  const glassBg = isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.75)";
  const glassBorder = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)";

  return createTheme({
    palette: {
      mode,
      primary: { main: primaryMain },
      background: {
        default: bgDefault,
        paper: bgPaper,
      },
      divider: isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)",
    },

    shape: { borderRadius: 14 },

    typography: {
      fontFamily: ["Inter", "Roboto", "Arial", "sans-serif"].join(","),
      h3: { fontWeight: 900, letterSpacing: -0.8 },
      h4: { fontWeight: 900, letterSpacing: -0.6 },
      h6: { fontWeight: 800, letterSpacing: -0.2 },
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: bgDefault,
          },
          // Scrollbar (opcional, queda pro)
          "*::-webkit-scrollbar": { width: 10, height: 10 },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: isDark ? "rgba(255,255,255,0.16)" : "rgba(0,0,0,0.18)",
            borderRadius: 999,
            border: `2px solid ${bgDefault}`,
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 999, // pill
            fontWeight: 800,
          },
          contained: {
            boxShadow: "none",
          },
          outlined: {
            borderWidth: 1,
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            // AppBar “glass” por defecto (si lo pones color="transparent")
            backdropFilter: "blur(14px)",
          },
        },
      },

      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 18,
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: {
            borderColor: glassBorder,
            borderRadius: 18,
            backgroundColor: glassBg,
            backdropFilter: "blur(12px)",
            transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
            boxShadow: isDark
              ? "0 18px 60px rgba(0,0,0,0.35)"
              : "0 18px 50px rgba(10,20,30,0.12)",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: isDark
                ? "0 22px 80px rgba(0,0,0,0.55)"
                : "0 22px 70px rgba(10,20,30,0.18)",
              borderColor: alpha(primaryMain, isDark ? 0.70 : 0.45),
            },
          },
        },
      },

      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            fontWeight: 800,
            border: `1px solid ${
              isDark ? "rgba(255,255,255,0.14)" : "rgba(0,0,0,0.10)"
            }`,
            backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.70)",
            backdropFilter: "blur(10px)",
          },
          sizeSmall: {
            fontWeight: 800,
          },
        },
      },

      MuiLink: {
        styleOverrides: {
          root: {
            fontWeight: 700,
            textUnderlineOffset: 3,
          },
        },
      },

      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)",
          },
        },
      },

      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
          },
        },
      },

      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: 42,
          },
        },
      },
    },
  });
}
