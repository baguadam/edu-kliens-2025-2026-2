import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./index.css";
import App from "./App.tsx";
import { appTheme } from "./theme";
import TrackProvider from "./contexts/TrackProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {/* <UserContext.Provider value={{ name: "Ádám", token: "valami" }}> */}
      <TrackProvider>
        <App />
      </TrackProvider>
      {/* </UserContext.Provider> */}
    </ThemeProvider>
  </StrictMode>,
);
