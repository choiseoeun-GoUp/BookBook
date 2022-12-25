import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./utils/store";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
