import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// style
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme } from "./global-style";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
