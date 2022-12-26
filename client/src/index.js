import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./utils/store";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const root = ReactDOM.createRoot(document.getElementById("root"));

let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
