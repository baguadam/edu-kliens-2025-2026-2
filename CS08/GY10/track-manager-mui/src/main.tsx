import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./index.css";
import App from "./App.tsx";
import { appTheme } from "./theme";
import TrackProvider from "./contexts/TrackProvider.tsx";
import UserProvider from "./contexts/UserProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {/* Provider, innen lesz elérhető a Context */}
      <TrackProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </TrackProvider>
    </ThemeProvider>
  </StrictMode>,
);
