import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5eead4",
    },
    secondary: {
      main: "#f59e0b",
    },
    background: {
      default: "#070b14",
      paper: "#111827",
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: '"Outfit", "Segoe UI", sans-serif',
    h4: {
      fontWeight: 700,
      letterSpacing: 0.2,
    },
    h5: {
      fontWeight: 650,
    },
  },
});
