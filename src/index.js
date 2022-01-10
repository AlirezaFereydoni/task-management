import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// style
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Theme } from "./global-style";

// context
import { TaskController } from "./controller";

ReactDOM.render(
  <React.StrictMode>
    <TaskController>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </TaskController>
  </React.StrictMode>,
  document.getElementById("root")
);
