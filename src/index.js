import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { Provider } from "react-redux";
import {storeFavList} from "./redux/store"
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeFavList}>
      <App />
    </Provider>
  </React.StrictMode>
);
