import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";

// axios.defaults.baseURL =
//   "https://proyecto-individual-countries-production-0b07.up.railway.app";
// axios.defaults.baseURL = "http://localhost:3001";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
