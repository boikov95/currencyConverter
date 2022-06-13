import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./styles/index.scss";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App state={store.getState()} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
